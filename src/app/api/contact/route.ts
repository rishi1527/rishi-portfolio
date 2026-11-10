import { NextResponse } from "next/server";

// ==============================================================================
// SolankiSoftware Contact API Route - Production Implementation
// ==============================================================================
// Email Provider: EmailJS REST API (https://api.emailjs.com/api/v1.0/email/send)
// Architecture: Server-Side REST Dispatch with Zero Client Credential Exposure
// ==============================================================================

// ------------------------------------------------------------------------------
// Rate Limiting (Serverless Best-Effort In-Memory Store)
// ------------------------------------------------------------------------------
// Note on Vercel Serverless:
// In-memory rate limiting is process-local and resets on serverless cold starts.
// It effectively protects against single-instance rapid hammering without
// requiring an external key-value database (e.g., Upstash Redis).
// For globally persistent rate limiting across all edge regions, Upstash Redis
// can be attached as an external service if required in the future.
// ------------------------------------------------------------------------------
interface RateLimitRecord {
  timestamps: number[];
}

const rateLimitMap = new Map<string, RateLimitRecord>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;
const EMAILJS_TIMEOUT_MS = Number(process.env.EMAILJS_TIMEOUT_MS) || 8000; // 8 seconds default timeout

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip) || { timestamps: [] };

  // Filter out timestamps outside the active window
  record.timestamps = record.timestamps.filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );

  if (record.timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, record);
    return true;
  }

  record.timestamps.push(now);
  rateLimitMap.set(ip, record);

  // Periodically clean up stale records to prevent memory growth
  if (rateLimitMap.size > 500) {
    for (const [key, val] of rateLimitMap.entries()) {
      val.timestamps = val.timestamps.filter(
        (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
      );
      if (val.timestamps.length === 0) {
        rateLimitMap.delete(key);
      }
    }
  }

  return false;
}

function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    const firstIp = forwarded.split(",")[0].trim();
    if (firstIp) return firstIp;
  }
  const realIp = req.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }
  return "127.0.0.1";
}

export async function POST(req: Request) {
  try {
    // 1. In-Memory Rate Limiting (Best-effort per serverless container)
    const clientIp = getClientIp(req);
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Too many requests. Please wait a few minutes before trying again or email directly.",
        },
        { status: 429 }
      );
    }

    // 2. Parse request JSON body
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON in request payload." },
        { status: 400 }
      );
    }

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, error: "Request payload must be an object." },
        { status: 400 }
      );
    }

    const { name, email, message, website } = body as Record<string, unknown>;

    // 3. Honeypot check: If the hidden honeypot field is populated, silently discard bot spam
    if (website && typeof website === "string" && website.trim().length > 0) {
      return NextResponse.json(
        { success: true, message: "Your message has been received." },
        { status: 200 }
      );
    }

    // 4. Server-Side Validation: Name
    if (typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Please enter your name." },
        { status: 400 }
      );
    }
    const cleanName = name.trim();
    if (cleanName.length < 2) {
      return NextResponse.json(
        { success: false, error: "Name must be at least 2 characters." },
        { status: 400 }
      );
    }
    if (cleanName.length > 100) {
      return NextResponse.json(
        { success: false, error: "Name must be 100 characters or fewer." },
        { status: 400 }
      );
    }

    // 5. Server-Side Validation: Email
    if (typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { success: false, error: "Please enter your email." },
        { status: 400 }
      );
    }
    const cleanEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail) || cleanEmail.length > 254) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // 6. Server-Side Validation: Message
    if (typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { success: false, error: "Please enter your message." },
        { status: 400 }
      );
    }
    const cleanMessage = message.trim();
    if (cleanMessage.length < 10) {
      return NextResponse.json(
        { success: false, error: "Message must be at least 10 characters." },
        { status: 400 }
      );
    }
    if (cleanMessage.length > 5000) {
      return NextResponse.json(
        { success: false, error: "Message must be 5000 characters or fewer." },
        { status: 400 }
      );
    }

    // 7. Verify Server-Side Provider Configuration
    const serviceId = process.env.EMAILJS_SERVICE_ID || "service_r1z7mpi";
    const templateId = process.env.EMAILJS_TEMPLATE_ID || "template_ua1nirq";
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;

    if (!publicKey) {
      console.error("[Contact API] Configuration error: EMAILJS_PUBLIC_KEY is not defined.");
      return NextResponse.json(
        {
          success: false,
          error:
            "Email service is temporarily unavailable. Please try again later or email directly.",
        },
        { status: 503 }
      );
    }

    // 8. Prepare EmailJS REST API Payload
    interface EmailJsPayload {
      service_id: string;
      template_id: string;
      user_id: string;
      accessToken?: string;
      template_params: {
        user_name: string;
        user_email: string;
        message: string;
      };
    }

    const payload: EmailJsPayload = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        user_name: cleanName,
        user_email: cleanEmail,
        message: cleanMessage,
      },
    };

    if (privateKey) {
      payload.accessToken = privateKey;
    }

    // 9. Dispatch to EmailJS with AbortController Timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), EMAILJS_TIMEOUT_MS);

    const emailjsEndpoint =
      process.env.EMAILJS_API_URL || "https://api.emailjs.com/api/v1.0/email/send";

    try {
      const emailjsResponse = await fetch(
        emailjsEndpoint,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
          signal: controller.signal,
        }
      );

      clearTimeout(timeoutId);
      const responseText = await emailjsResponse.text();

      if (!emailjsResponse.ok) {
        // Log sanitized operational diagnostics without personal message content or secret keys
        console.error(
          `[Contact API] EmailJS rejected request (HTTP ${emailjsResponse.status}):`,
          responseText.slice(0, 200)
        );

        return NextResponse.json(
          {
            success: false,
            error:
              "Unable to deliver message through email service. Please try again or email directly.",
          },
          { status: 502 }
        );
      }

      return NextResponse.json(
        {
          success: true,
          message: "Your message has been received by the email service.",
        },
        { status: 200 }
      );
    } catch (fetchErr: unknown) {
      clearTimeout(timeoutId);
      if (
        fetchErr instanceof Error &&
        (fetchErr.name === "AbortError" || fetchErr.message.includes("aborted"))
      ) {
        console.error(`[Contact API] EmailJS dispatch timed out after ${EMAILJS_TIMEOUT_MS}ms`);
        return NextResponse.json(
          {
            success: false,
            error:
              "The email service timed out while processing your request. Please try again or email directly.",
          },
          { status: 504 }
        );
      }
      throw fetchErr;
    }
  } catch {
    console.error("[Contact API] Unexpected server error occurred during request processing.");
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while sending your message.",
      },
      { status: 500 }
    );
  }
}
