"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], .project-card, input, textarea, select, label';

export default function CustomCursor() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dotWrapRef = useRef<HTMLDivElement | null>(null);
  const ringWrapRef = useRef<HTMLDivElement | null>(null);

  const mousePos = useRef({ x: -9999, y: -9999 });
  const ringPos = useRef({ x: -9999, y: -9999 });

  const isVisible = useRef(false);
  const isInitialized = useRef(false);
  const isHovering = useRef(false);
  const isOverInput = useRef(false);
  const isMouseDown = useRef(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Check device capabilities (only enable on desktop/fine pointers)
    const finePointerQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    let isFinePointer = finePointerQuery.matches;
    let prefersReducedMotion = motionQuery.matches;

    // If device doesn't support fine pointer (e.g. mobile/touch), don't activate
    if (!isFinePointer) return;

    const container = containerRef.current;
    const dotWrap = dotWrapRef.current;
    const ringWrap = ringWrapRef.current;

    if (!container || !dotWrap || !ringWrap) return;

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const updateVisualClasses = () => {
      if (!container) return;

      if (isHovering.current) {
        container.classList.add("is-hovering");
      } else {
        container.classList.remove("is-hovering");
      }

      if (isOverInput.current) {
        container.classList.add("is-input");
      } else {
        container.classList.remove("is-input");
      }

      if (isMouseDown.current) {
        container.classList.add("is-active");
      } else {
        container.classList.remove("is-active");
      }
    };

    const animate = () => {
      if (!dotWrap || !ringWrap) return;

      const mx = mousePos.current.x;
      const my = mousePos.current.y;

      // If reduced motion is preferred, snap ring immediately without lagging spring
      const factor = prefersReducedMotion ? 1 : 0.18;

      ringPos.current.x = lerp(ringPos.current.x, mx, factor);
      ringPos.current.y = lerp(ringPos.current.y, my, factor);

      dotWrap.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      ringWrap.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;

      rafId.current = requestAnimationFrame(animate);
    };

    const startRaf = () => {
      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(animate);
      }
    };

    const stopRaf = () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
    };

    const showCursor = () => {
      if (!isVisible.current) {
        isVisible.current = true;
        container.style.opacity = "1";
        document.body.classList.add("has-custom-cursor");
      }
    };

    const hideCursor = () => {
      if (isVisible.current) {
        isVisible.current = false;
        container.style.opacity = "0";
        document.body.classList.remove("has-custom-cursor");
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      // Ignore simulated pointer events on touch devices
      if (e.pointerType === "touch") return;

      const clientX = e.clientX;
      const clientY = e.clientY;

      mousePos.current.x = clientX;
      mousePos.current.y = clientY;

      if (!isInitialized.current) {
        isInitialized.current = true;
        ringPos.current.x = clientX;
        ringPos.current.y = clientY;
      }

      showCursor();
      startRaf();

      // Detect hover over interactive elements via event delegation
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveEl = target.closest(INTERACTIVE_SELECTOR);
        const isInteractive = Boolean(interactiveEl);

        const isText = Boolean(
          target.closest(
            'input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="button"]):not([type="file"]), textarea'
          )
        );

        if (
          isInteractive !== isHovering.current ||
          isText !== isOverInput.current
        ) {
          isHovering.current = isInteractive;
          isOverInput.current = isText;
          updateVisualClasses();
        }
      }
    };

    const handleMouseDown = () => {
      isMouseDown.current = true;
      updateVisualClasses();
    };

    const handleMouseUp = () => {
      isMouseDown.current = false;
      updateVisualClasses();
    };

    const handleMouseLeave = () => {
      hideCursor();
    };

    const handleMouseEnter = () => {
      showCursor();
    };

    const handleFinePointerChange = (e: MediaQueryListEvent) => {
      isFinePointer = e.matches;
      if (!isFinePointer) {
        hideCursor();
        stopRaf();
      }
    };

    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopRaf();
      } else if (isVisible.current) {
        startRaf();
      }
    };

    // Attach listeners
    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    if (finePointerQuery.addEventListener) {
      finePointerQuery.addEventListener("change", handleFinePointerChange);
      motionQuery.addEventListener("change", handleReducedMotionChange);
    }

    return () => {
      stopRaf();
      hideCursor();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      if (finePointerQuery.removeEventListener) {
        finePointerQuery.removeEventListener("change", handleFinePointerChange);
        motionQuery.removeEventListener("change", handleReducedMotionChange);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="custom-cursor-container"
    >
      {/* Outer Smooth Lagging Ring */}
      <div ref={ringWrapRef} className="custom-cursor-ring-wrap">
        <div className="custom-cursor-ring" />
      </div>

      {/* Inner Immediate Gold Dot */}
      <div ref={dotWrapRef} className="custom-cursor-dot-wrap">
        <div className="custom-cursor-dot" />
      </div>
    </div>
  );
}
