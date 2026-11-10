"use client";

import { useState, useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";

interface FormData {
  name: string;
  email: string;
  message: string;
  website: string; // Honeypot field
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  const trimmedName = data.name.trim();
  if (!trimmedName) {
    errors.name = "Please enter your name.";
  } else if (trimmedName.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  } else if (trimmedName.length > 100) {
    errors.name = "Name must be 100 characters or fewer.";
  }

  const trimmedEmail = data.email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail) {
    errors.email = "Please enter your email.";
  } else if (!emailRegex.test(trimmedEmail)) {
    errors.email = "Please enter a valid email address.";
  } else if (trimmedEmail.length > 254) {
    errors.email = "Email address is too long.";
  }

  const trimmedMessage = data.message.trim();
  if (!trimmedMessage) {
    errors.message = "Please enter your message.";
  } else if (trimmedMessage.length < 10) {
    errors.message = "Message must be at least 10 characters.";
  } else if (trimmedMessage.length > 5000) {
    errors.message = "Message must be 5000 characters or fewer.";
  }

  return errors;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    website: "",
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [serverErrorMessage, setServerErrorMessage] = useState<string>("");
  const isSubmittingRef = useRef<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);

    // If previously in error status, return to idle upon user editing
    if (status === "error") {
      setStatus("idle");
    }

    if (touched[name]) {
      const fieldErrors = validate(updated);
      setErrors(fieldErrors);
    }
  };

  const handleBlur = (field: keyof FormErrors) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const fieldErrors = validate(formData);
    setErrors(fieldErrors);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prevent accidental duplicate submissions
    if (isSubmittingRef.current || status === "submitting") {
      return;
    }

    setTouched({ name: true, email: true, message: true });
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    isSubmittingRef.current = true;
    setStatus("submitting");
    setServerErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        // Clear the form fields upon real delivery success
        setFormData({ name: "", email: "", message: "", website: "" });
        setTouched({});
        setErrors({});
      } else {
        setStatus("error");
        setServerErrorMessage(
          data.error || "Unable to send your message. Please try again or email directly."
        );
      }
    } catch {
      setStatus("error");
      setServerErrorMessage(
        "Network connection error. Please check your internet connection or email directly."
      );
    } finally {
      isSubmittingRef.current = false;
    }
  };

  const isSubmitting = status === "submitting";

  return (
    <section
      id="contact"
      className="relative w-full pt-4 sm:pt-12 pb-6 sm:pb-20 px-4 sm:px-6"
      aria-labelledby="contact-heading"
    >
      {/* Background Decorative Ambient Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-[radial-gradient(circle,rgba(212,165,116,0.06)_0%,rgba(111,78,55,0.03)_50%,transparent_70%)] pointer-events-none blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-2 sm:mb-3 space-y-1.5 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#241A14]/80 border border-[rgba(212,165,116,0.22)] shadow-[0_2px_10px_rgba(15,11,8,0.4)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4A574]" />
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#F5E6D3]">
              Get in Touch
            </span>
          </div>

          <h2
            id="contact-heading"
            className="text-xl sm:text-5xl font-bold tracking-tight text-[#FFF8F0] leading-tight"
          >
            Let&apos;s Work <span className="text-gradient-title">Together.</span>
          </h2>
        </ScrollReveal>

        {/* Supporting text */}
        <ScrollReveal delay={100} className="text-center max-w-2xl mx-auto mb-3 sm:mb-8">
          <p className="text-xs sm:text-lg text-[#B8A99A] leading-relaxed font-normal">
            Have a project idea or opportunity? Send a message and let&apos;s talk.
          </p>

          <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-transparent via-[#D4A574] to-transparent rounded-full mx-auto mt-2 sm:mt-3" />
        </ScrollReveal>

        {/* Form Container Card */}
        <ScrollReveal delay={200}>
          <div className="relative rounded-xl sm:rounded-3xl border border-[rgba(212,165,116,0.22)] bg-[#241A14]/75 backdrop-blur-xl shadow-[0_8px_32px_rgba(15,11,8,0.55),0_0_24px_rgba(212,165,116,0.06)] p-4 sm:p-8 lg:p-9 hover:border-[rgba(212,165,116,0.35)] transition-colors duration-300">
            <form onSubmit={handleSubmit} noValidate className="space-y-3.5 sm:space-y-6">
              {/* Invisible Honeypot anti-spam field */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              {/* Responsive Row: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-6">
                {/* Field: Your Name */}
                <div className="space-y-1 sm:space-y-1.5 group/field">
                  <label
                    htmlFor="name"
                    className="block font-mono text-[11px] sm:text-sm font-semibold uppercase tracking-wider text-[#F5E6D3] group-focus-within/field:text-[#FFF8F0] transition-colors"
                  >
                    Your Name <span className="text-[#D4A574]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    disabled={isSubmitting}
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur("name")}
                    placeholder="Enter your name"
                    aria-invalid={!!(touched.name && errors.name)}
                    aria-describedby={
                      touched.name && errors.name ? "name-error" : undefined
                    }
                    className="w-full px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-[#17110D]/85 border border-[rgba(212,165,116,0.2)] text-[#FFF8F0] placeholder:text-[#8B6B52] text-xs sm:text-base focus:border-[rgba(212,165,116,0.55)] focus:shadow-[0_0_0_3px_rgba(212,165,116,0.08)] focus:outline-none disabled:opacity-60 transition-all duration-200"
                  />
                  {touched.name && errors.name && (
                    <p
                      id="name-error"
                      role="alert"
                      className="text-xs font-mono text-[#D4A574] flex items-center gap-1.5 pt-0.5"
                    >
                      <span aria-hidden="true">&bull;</span>
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Field: Your Email */}
                <div className="space-y-1 sm:space-y-1.5 group/field">
                  <label
                    htmlFor="email"
                    className="block font-mono text-[11px] sm:text-sm font-semibold uppercase tracking-wider text-[#F5E6D3] group-focus-within/field:text-[#FFF8F0] transition-colors"
                  >
                    Your Email <span className="text-[#D4A574]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={isSubmitting}
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur("email")}
                    placeholder="Enter your email"
                    aria-invalid={!!(touched.email && errors.email)}
                    aria-describedby={
                      touched.email && errors.email ? "email-error" : undefined
                    }
                    className="w-full px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-[#17110D]/85 border border-[rgba(212,165,116,0.2)] text-[#FFF8F0] placeholder:text-[#8B6B52] text-xs sm:text-base focus:border-[rgba(212,165,116,0.55)] focus:shadow-[0_0_0_3px_rgba(212,165,116,0.08)] focus:outline-none disabled:opacity-60 transition-all duration-200"
                  />
                  {touched.email && errors.email && (
                    <p
                      id="email-error"
                      role="alert"
                      className="text-xs font-mono text-[#D4A574] flex items-center gap-1.5 pt-0.5"
                    >
                      <span aria-hidden="true">&bull;</span>
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Field: Your Message */}
              <div className="space-y-1 sm:space-y-1.5 group/field">
                <label
                  htmlFor="message"
                  className="block font-mono text-[11px] sm:text-sm font-semibold uppercase tracking-wider text-[#F5E6D3] group-focus-within/field:text-[#FFF8F0] transition-colors"
                >
                  Your Message <span className="text-[#D4A574]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={3}
                  disabled={isSubmitting}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur("message")}
                  placeholder="Tell me a little about your project or idea..."
                  aria-invalid={!!(touched.message && errors.message)}
                  aria-describedby={
                    touched.message && errors.message
                      ? "message-error"
                      : undefined
                  }
                  className="w-full px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-[#17110D]/85 border border-[rgba(212,165,116,0.2)] text-[#FFF8F0] placeholder:text-[#8B6B52] text-xs sm:text-base focus:border-[rgba(212,165,116,0.55)] focus:shadow-[0_0_0_3px_rgba(212,165,116,0.08)] focus:outline-none disabled:opacity-60 transition-all duration-200 resize-y min-h-[90px] sm:min-h-[110px]"
                />
                {touched.message && errors.message && (
                  <p
                    id="message-error"
                    role="alert"
                    className="text-xs font-mono text-[#D4A574] flex items-center gap-1.5 pt-0.5"
                  >
                    <span aria-hidden="true">&bull;</span>
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Success Feedback Banner */}
              {status === "success" && (
                <div
                  role="status"
                  aria-live="polite"
                  className="p-4 sm:p-5 rounded-xl border border-[rgba(212,165,116,0.4)] bg-[#17110D]/95 space-y-2.5 animate-fadeIn"
                >
                  <div className="flex items-center gap-2 text-[#D4A574] font-semibold font-mono text-xs uppercase tracking-wider">
                    <span className="h-2 w-2 rounded-full bg-[#D4A574]" />
                    <span>Message Sent</span>
                  </div>
                  <p className="text-sm text-[#F5E6D3] leading-relaxed">
                    Thank you! Your message has been sent. I&apos;ll review it and get back to you shortly.
                  </p>
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="text-xs font-mono text-[#D4A574] hover:text-[#FFF8F0] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4A574] rounded"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              )}

              {/* Error Feedback Banner */}
              {status === "error" && (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="p-4 sm:p-5 rounded-xl border border-[rgba(212,165,116,0.35)] bg-[#17110D]/95 space-y-2.5 animate-fadeIn"
                >
                  <div className="flex items-center gap-2 text-[#D4A574] font-semibold font-mono text-xs uppercase tracking-wider">
                    <span className="h-2 w-2 rounded-full bg-[#D4A574]" />
                    <span>Submission Notice</span>
                  </div>
                  <p className="text-sm text-[#F5E6D3] leading-relaxed">
                    {serverErrorMessage}
                  </p>
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[rgba(212,165,116,0.3)] bg-[#241A14] text-[#F5E6D3] font-mono text-xs hover:border-[#D4A574] hover:text-[#FFF8F0] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4A574]"
                    >
                      <span>Edit &amp; Retry ↻</span>
                    </button>
                    <a
                      href={`mailto:solankirishi1527@gmail.com?subject=${encodeURIComponent(
                        `Project Inquiry from ${formData.name || "Portfolio Visitor"}`
                      )}&body=${encodeURIComponent(
                        `Hi Rishi,\n\n${formData.message}\n\nFrom,\n${formData.name}\n${formData.email}`
                      )}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#D4A574] text-[#17110D] font-bold text-xs hover:brightness-110 transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4A574]"
                    >
                      <span>Open in Email Client ↗</span>
                    </a>
                    <span className="text-xs text-[#8B6B52]">
                      or direct: <a href="mailto:solankirishi1527@gmail.com" className="text-[#D4A574] underline">solankirishi1527@gmail.com</a>
                    </span>
                  </div>
                </div>
              )}

              {/* Submit Button with 4 distinct states */}
              <div className="pt-1 sm:pt-2 flex flex-col items-center gap-2">
                <button
                  type="submit"
                  disabled={isSubmitting || status === "success"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-9 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-[#D4A574] via-[#DEB887] to-[#C4925E] text-[#17110D] font-bold text-xs sm:text-base shadow-[0_4px_20px_rgba(212,165,116,0.25)] hover:shadow-[0_0_28px_rgba(212,165,116,0.45)] hover:brightness-105 active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed transition-all duration-200 group/btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574]"
                >
                  {status === "submitting" && (
                    <>
                      <span>Sending...</span>
                      <svg
                        className="w-4 h-4 animate-spin text-[#17110D]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                    </>
                  )}

                  {status === "success" && (
                    <>
                      <span>Message Sent ✓</span>
                    </>
                  )}

                  {status === "error" && (
                    <>
                      <span>Try Again ↻</span>
                    </>
                  )}

                  {status === "idle" && (
                    <>
                      <span>Send Message</span>
                      <svg
                        className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 17L17 7M17 7H7M17 7V17"
                        />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-[11px] sm:text-xs font-mono text-[#8B6B52] pt-1">
                  Or email directly:{" "}
                  <a
                    href="mailto:solankirishi1527@gmail.com"
                    className="text-[#D4A574] hover:text-[#FFF8F0] underline underline-offset-2 transition-colors"
                  >
                    solankirishi1527@gmail.com
                  </a>
                </p>
              </div>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}


