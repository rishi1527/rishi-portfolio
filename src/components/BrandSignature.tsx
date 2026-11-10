"use client";

import { useEffect, useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function BrandSignature() {

  const sectionRef = useRef<HTMLElement>(null);
  const textWrapRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);

  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const isHovered = useRef(false);
  const isInitialized = useRef(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const textWrap = textWrapRef.current;
    const fillEl = fillRef.current;
    if (!section || !textWrap || !fillEl) return;

    // Check device capabilities & reduced motion preference
    const finePointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    let canTrackPointer = finePointerQuery.matches && !motionQuery.matches;

    const handlePointerQueryChange = (e: MediaQueryListEvent) => {
      canTrackPointer = e.matches && !motionQuery.matches;
      if (!canTrackPointer) stopRaf();
    };

    const handleMotionQueryChange = (e: MediaQueryListEvent) => {
      canTrackPointer = finePointerQuery.matches && !e.matches;
      if (!canTrackPointer) stopRaf();
    };

    if (finePointerQuery.addEventListener) {
      finePointerQuery.addEventListener("change", handlePointerQueryChange);
      motionQuery.addEventListener("change", handleMotionQueryChange);
    }

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const updateMask = (x: number, y: number, radius: number) => {
      const mask = `radial-gradient(circle ${radius}px at ${x.toFixed(1)}px ${y.toFixed(1)}px, #000 0%, rgba(0, 0, 0, 0.9) 32%, rgba(0, 0, 0, 0.2) 68%, transparent 100%)`;
      fillEl.style.webkitMaskImage = mask;
      fillEl.style.maskImage = mask;
    };

    const animate = () => {
      if (!textWrap || !fillEl || !canTrackPointer) return;

      // Smooth interpolation for fluid cursor following
      currentPos.current.x = lerp(currentPos.current.x, targetPos.current.x, 0.16);
      currentPos.current.y = lerp(currentPos.current.y, targetPos.current.y, 0.16);

      const rect = textWrap.getBoundingClientRect();
      // Radius scaled naturally to match ~3-4 letters
      const radius = Math.max(90, Math.min(135, rect.height * 1.35));

      updateMask(currentPos.current.x, currentPos.current.y, radius);

      const dx = Math.abs(currentPos.current.x - targetPos.current.x);
      const dy = Math.abs(currentPos.current.y - targetPos.current.y);

      if (isHovered.current || dx > 0.1 || dy > 0.1) {
        rafId.current = requestAnimationFrame(animate);
      } else {
        rafId.current = null;
      }
    };

    const startRaf = () => {
      if (rafId.current === null && canTrackPointer) {
        rafId.current = requestAnimationFrame(animate);
      }
    };

    const stopRaf = () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!canTrackPointer) return;
      const textRect = textWrap.getBoundingClientRect();

      // Check if cursor is over or in close proximity of the text
      const isNearText =
        e.clientX >= textRect.left - 45 &&
        e.clientX <= textRect.right + 45 &&
        e.clientY >= textRect.top - 30 &&
        e.clientY <= textRect.bottom + 30;

      if (isNearText) {
        const x = e.clientX - textRect.left;
        const y = e.clientY - textRect.top;
        targetPos.current = { x, y };

        if (!isHovered.current || !isInitialized.current) {
          isHovered.current = true;
          isInitialized.current = true;
          currentPos.current = { x, y };
          const radius = Math.max(90, Math.min(135, textRect.height * 1.35));
          updateMask(x, y, radius);
          fillEl.style.opacity = "1";
        }

        startRaf();
      } else if (isHovered.current) {
        isHovered.current = false;
        fillEl.style.opacity = "0";
      }
    };

    const handlePointerLeave = () => {
      isHovered.current = false;
      fillEl.style.opacity = "0";
    };

    section.addEventListener("pointermove", handlePointerMove);
    section.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      stopRaf();
      section.removeEventListener("pointermove", handlePointerMove);
      section.removeEventListener("pointerleave", handlePointerLeave);
      if (finePointerQuery.removeEventListener) {
        finePointerQuery.removeEventListener("change", handlePointerQueryChange);
        motionQuery.removeEventListener("change", handleMotionQueryChange);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Brand Signature"
      className="brand-signature-section relative w-full overflow-hidden bg-[#0F0B08] border-y border-[rgba(212,165,116,0.12)] py-8 sm:py-20 md:py-24 flex items-center justify-center select-none"
    >
      {/* Brand typography container */}
      <ScrollReveal className="relative z-10 text-center px-4 sm:px-6 max-w-full">
        <div
          ref={textWrapRef}
          className="brand-signature-wrap relative inline-block cursor-default select-none"
        >
          {/* Base Layer: Outlined text only (Stationary, transparent fill, subtle warm outline) */}
          <span
            className="brand-text-base text-[clamp(2.25rem,7.2vw,7rem)]"
            aria-hidden="false"
          >
            SolankiSoftware
          </span>

          {/* Second Layer: Exact duplicate with coffee/gold fill revealed strictly around cursor */}
          <span
            ref={fillRef}
            className="brand-text-fill text-[clamp(2.25rem,7.2vw,7rem)]"
            aria-hidden="true"
          >
            SolankiSoftware
          </span>
        </div>
      </ScrollReveal>
    </section>
  );
}

