"use client";

import { useEffect, useState, useRef, useCallback } from "react";

// Safe utility to restore document and body scrolling
function unlockDocumentScroll() {
  if (typeof document !== "undefined") {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    document.body.style.removeProperty("overflow");
    document.documentElement.style.removeProperty("overflow");
  }
}

// Sequence Timing:
// Stage 1 (0.0s): Full-screen #0F0B08 dark background & faint watermark preview
// Stage 2 (0.0s - 0.85s): Reveal "Solanki" in warm cream italic serif
// Stage 2 (0.85s - 1.70s): Reveal "Software" in muted gold italic serif immediately after
// Stage 3 (1.70s - 2.05s): Thin gold underline expands smoothly from center
// Stage 4 (2.05s - 2.35s): Complete composition holds in serene balance (300ms hold)
// Stage 5 (2.35s - 2.80s): Smooth fade-out of overlay to reveal homepage (450ms fade)
const EXIT_START = 2350; // ms to begin smooth fade out
const TOTAL_DURATION = 2800; // ms to unmount and unlock scrolling
const WATCHDOG_TIMEOUT = 3200; // ms hard ceiling to guarantee removal
const SESSION_KEY = "solanki_intro_v4_seen";

export default function IntroLoader() {
  const [isExiting, setIsExiting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const isExitingRef = useRef(false);
  const isDoneRef = useRef(false);
  const timersRef = useRef<NodeJS.Timeout[]>([]);

  const clearAllTimers = useCallback(() => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  }, []);

  const triggerExit = useCallback(() => {
    if (isExitingRef.current || isDoneRef.current) return;
    isExitingRef.current = true;
    setIsExiting(true);
    unlockDocumentScroll();
  }, []);

  const completeIntro = useCallback(() => {
    if (isDoneRef.current) return;
    isDoneRef.current = true;
    clearAllTimers();
    try {
      if (typeof window !== "undefined") {
        sessionStorage.setItem(SESSION_KEY, "true");
        document.documentElement.classList.add("intro-already-seen");
      }
    } catch {}
    setIsDone(true);
    unlockDocumentScroll();
  }, [clearAllTimers]);

  // Handler for underline animationend (last stage of typography reveal)
  const handleUnderlineAnimationEnd = useCallback(
    (e: React.AnimationEvent) => {
      // Confirm this is the expand keyframe
      if (e.animationName.includes("introUnderlineExpand")) {
        // Hold for balance (300ms) before fading out
        const holdTimer = setTimeout(() => {
          triggerExit();
          const fadeTimer = setTimeout(() => {
            completeIntro();
          }, 450);
          timersRef.current.push(fadeTimer);
        }, 300);
        timersRef.current.push(holdTimer);
      }
    },
    [triggerExit, completeIntro]
  );

  // Handler for overlay transitionend (when smooth fade out completes)
  const handleOverlayTransitionEnd = useCallback(
    (e: React.TransitionEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget && isExitingRef.current) {
        completeIntro();
      }
    },
    [completeIntro]
  );

  useEffect(() => {
    // Testing helper: window.replayIntro()
    if (typeof window !== "undefined") {
      (window as unknown as Record<string, unknown>).replayIntro = () => {
        try {
          sessionStorage.removeItem(SESSION_KEY);
          document.documentElement.classList.remove("intro-already-seen");
        } catch {}
        window.location.reload();
      };
    }

    // Check if intro has already been shown in this browser session
    // (Support ?intro=1, ?preview, or ?replay query parameters to force replay during testing)
    try {
      const search = typeof window !== "undefined" ? window.location.search : "";
      const isForceReplay =
        search.includes("intro") ||
        search.includes("preview") ||
        search.includes("replay");

      if (isForceReplay) {
        sessionStorage.removeItem(SESSION_KEY);
        document.documentElement.classList.remove("intro-already-seen");
      } else if (sessionStorage.getItem(SESSION_KEY)) {
        document.documentElement.classList.add("intro-already-seen");
        const skipTimer = setTimeout(() => {
          setIsDone(true);
          unlockDocumentScroll();
        }, 0);
        timersRef.current.push(skipTimer);
        return;
      }
    } catch {
      // Ignore sessionStorage errors (e.g. in private browsing)
    }

    // Optional keyboard shortcut: Alt+I to replay intro
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && (e.key === "i" || e.key === "I")) {
        try {
          sessionStorage.removeItem(SESSION_KEY);
          document.documentElement.classList.remove("intro-already-seen");
        } catch {}
        window.location.reload();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Accessibility: Check prefers-reduced-motion
    let prefersReducedMotion = false;
    try {
      prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
    } catch {}

    if (prefersReducedMotion) {
      const exitTimer = setTimeout(() => {
        triggerExit();
      }, 350);
      const doneTimer = setTimeout(() => {
        completeIntro();
      }, 650);
      timersRef.current.push(exitTimer, doneTimer);

      return () => {
        clearAllTimers();
        window.removeEventListener("keydown", handleKeyDown);
        unlockDocumentScroll();
      };
    }

    // Lock document scroll safely during intro
    try {
      document.body.style.overflow = "hidden";
    } catch {}

    // Safe fallback timers: guaranteed execution even if animation events never fire
    // 1. Stage 5: Begin fading out the overlay at EXIT_START
    const exitTimer = setTimeout(() => {
      triggerExit();
    }, EXIT_START);

    // 2. Complete intro lifecycle at TOTAL_DURATION
    const doneTimer = setTimeout(() => {
      completeIntro();
    }, TOTAL_DURATION);

    // 3. Watchdog fallback: guarantees loader is removed and scrolling unlocked under any condition
    const watchdogTimer = setTimeout(() => {
      triggerExit();
      completeIntro();
    }, WATCHDOG_TIMEOUT);

    timersRef.current.push(exitTimer, doneTimer, watchdogTimer);

    return () => {
      clearAllTimers();
      window.removeEventListener("keydown", handleKeyDown);
      unlockDocumentScroll();
    };
  }, [triggerExit, completeIntro, clearAllTimers]);

  if (isDone) return null;

  return (
    <div
      aria-hidden="true"
      onTransitionEnd={handleOverlayTransitionEnd}
      className={`intro-overlay fixed inset-0 w-screen h-[100dvh] z-[99999] flex flex-col items-center justify-center bg-[#0F0B08] select-none ${
        isExiting ? "is-exiting" : ""
      }`}
    >
      <div className="relative w-full max-w-[92vw] sm:max-w-2xl px-6 flex flex-col items-center justify-center select-none">
        <span className="sr-only">Solanki Software</span>

        {/* Centered Editorial Italic Serif Brand Text */}
        <div className="intro-brand-text relative inline-flex items-baseline justify-center whitespace-nowrap select-none">
          {/* WORD 1: Solanki */}
          <span className="relative inline-block py-2 px-1">
            {/* Faint Stencil Preview (Always visible underneath) */}
            <span
              className="select-none pointer-events-none"
              style={{ color: "rgba(245, 230, 211, 0.14)" }}
              aria-hidden="true"
            >
              Solanki
            </span>
            {/* Animated Solid Warm Cream Foreground (Reveals 0s to 0.85s) */}
            <span
              className="intro-solid-solanki absolute inset-0 py-2 px-1 z-10 block select-none pointer-events-none"
              aria-hidden="true"
            >
              Solanki
            </span>
          </span>

          {/* Natural Word Spacing */}
          <span className="inline-block w-[0.45em]" aria-hidden="true" />

          {/* WORD 2: Software */}
          <span className="relative inline-block py-2 px-1">
            {/* Faint Stencil Preview (Always visible underneath) */}
            <span
              className="select-none pointer-events-none"
              style={{ color: "rgba(212, 165, 116, 0.14)" }}
              aria-hidden="true"
            >
              Software
            </span>
            {/* Animated Solid Muted Gold Foreground (Reveals 0.85s to 1.70s) */}
            <span
              className="intro-solid-software absolute inset-0 py-2 px-1 z-10 block select-none pointer-events-none"
              aria-hidden="true"
            >
              Software
            </span>
          </span>
        </div>

        {/* Stage 3: Centered Thin Gold Underline (Reveals 1.70s to 2.05s) */}
        <div
          className="w-full max-w-[180px] sm:max-w-[260px] flex justify-center mt-3 sm:mt-4 pointer-events-none select-none"
          aria-hidden="true"
        >
          <div
            className="intro-gold-underline"
            onAnimationEnd={handleUnderlineAnimationEnd}
          />
        </div>
      </div>
    </div>
  );
}
