"use client";

import React, { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in milliseconds (e.g. 0, 100, 200, etc.)
  as?: React.ElementType;
  style?: React.CSSProperties;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  as: Component = "div",
  style,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Accessibility: immediately reveal if reduced motion is requested
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      el.classList.add("is-visible", "is-revealed");
      return;
    }

    // Fallback: immediately reveal if IntersectionObserver is unavailable
    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-visible", "is-revealed");
      return;
    }

    // Immediately reveal if already inside viewport on mount
    const checkInView = () => {
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) {
        el.classList.add("is-visible", "is-revealed");
        return true;
      }
      return false;
    };

    if (checkInView()) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry && (entry.isIntersecting || entry.intersectionRatio > 0)) {
          el.classList.add("is-visible", "is-revealed");
          observer.unobserve(el);
          observer.disconnect();
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    observer.observe(el);

    // Scroll & hashchange listener fallback
    const handleScrollOrHash = () => {
      if (checkInView()) {
        observer.disconnect();
        window.removeEventListener("scroll", handleScrollOrHash);
        window.removeEventListener("hashchange", handleScrollOrHash);
      }
    };

    window.addEventListener("scroll", handleScrollOrHash, { passive: true });
    window.addEventListener("hashchange", handleScrollOrHash, { passive: true });

    // Safety timers: ensure elements never remain invisible waiting for observer
    const timer1 = setTimeout(checkInView, 500);
    const timer2 = setTimeout(checkInView, 1500);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScrollOrHash);
      window.removeEventListener("hashchange", handleScrollOrHash);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const combinedStyle: React.CSSProperties = {
    ...style,
    ...(delay > 0 ? { transitionDelay: `${delay}ms` } : {}),
  };

  return (
    <Component
      ref={ref}
      className={`scroll-reveal ${className}`}
      style={combinedStyle}
    >
      {children}
    </Component>
  );
}

