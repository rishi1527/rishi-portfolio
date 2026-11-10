"use client";

import { useEffect, useRef } from "react";

interface RandomDot {
  baseX: number;
  baseY: number;
  radius: number;
  baseAlpha: number;
  // Independent floating motion parameters
  speedX: number;
  speedY: number;
  ampX: number;
  ampY: number;
  phaseX: number;
  phaseY: number;
  phaseAlpha: number;
  // Interactive cursor displacement & fade states
  mouseOffsetX: number;
  mouseOffsetY: number;
  fadeAlpha: number; // 0 = fully invisible under cursor, 1 = normal
}

/**
 * Fast 2D Poisson-Disc Sampling (Bridson's Algorithm).
 * Guarantees a natural, isotropic, non-aligned distribution:
 * - No horizontal or vertical rows.
 * - No square or grid matrix patterns.
 * - Evenly distributed without clumping or unnatural voids.
 * - Minimum distance between every pair of dots prevents overlaps.
 */
function generatePoissonPoints(
  width: number,
  height: number,
  minDist: number
): { x: number; y: number }[] {
  const cellSize = minDist / Math.SQRT2;
  const cols = Math.ceil(width / cellSize) + 1;
  const rows = Math.ceil(height / cellSize) + 1;
  const grid: (number | null)[] = new Array(cols * rows).fill(null);
  const points: { x: number; y: number }[] = [];
  const activeList: number[] = [];

  function addPoint(x: number, y: number): number {
    const index = points.push({ x, y }) - 1;
    activeList.push(index);
    const c = Math.floor(x / cellSize);
    const r = Math.floor(y / cellSize);
    if (c >= 0 && c < cols && r >= 0 && r < rows) {
      grid[r * cols + c] = index;
    }
    return index;
  }

  // Seed with an initial point near screen center
  addPoint(
    width * 0.5 + (Math.random() - 0.5) * 80,
    height * 0.5 + (Math.random() - 0.5) * 80
  );

  const k = 22; // Candidate attempts per active point
  const minDistSq = minDist * minDist;

  while (activeList.length > 0) {
    const activeIdx = Math.floor(Math.random() * activeList.length);
    const pointIdx = activeList[activeIdx];
    const point = points[pointIdx];
    let found = false;

    for (let i = 0; i < k; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = minDist * (1 + Math.random()); // Range [minDist, 2 * minDist]
      const candidateX = point.x + Math.cos(angle) * dist;
      const candidateY = point.y + Math.sin(angle) * dist;

      // Slight bleed past viewport margins so edges are naturally populated
      if (
        candidateX >= -12 &&
        candidateX <= width + 12 &&
        candidateY >= -12 &&
        candidateY <= height + 12
      ) {
        const c = Math.floor(candidateX / cellSize);
        const r = Math.floor(candidateY / cellSize);
        let ok = true;

        const rMin = Math.max(0, r - 2);
        const rMax = Math.min(rows - 1, r + 2);
        const cMin = Math.max(0, c - 2);
        const cMax = Math.min(cols - 1, c + 2);

        for (let row = rMin; row <= rMax && ok; row++) {
          for (let col = cMin; col <= cMax; col++) {
            const neighborIdx = grid[row * cols + col];
            if (neighborIdx !== null) {
              const neighbor = points[neighborIdx];
              const dx = candidateX - neighbor.x;
              const dy = candidateY - neighbor.y;
              if (dx * dx + dy * dy < minDistSq) {
                ok = false;
                break;
              }
            }
          }
        }

        if (ok) {
          addPoint(candidateX, candidateY);
          found = true;
          break;
        }
      }
    }

    if (!found) {
      activeList[activeIdx] = activeList[activeList.length - 1];
      activeList.pop();
    }
  }

  return points;
}

export default function InteractiveDotGrid() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Respect reduced motion preference
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let prefersReducedMotion = motionQuery.matches;

    let animationFrameId: number | null = null;
    let isLoopRunning = false;
    let dots: RandomDot[] = [];

    // Cursor coordinates in viewport space
    const mouse = {
      x: -9999,
      y: -9999,
      active: false,
    };

    // Cursor influence area: 150px (~140-160px requested)
    const MOUSE_RADIUS = 150;
    const MOUSE_RADIUS_SQ = MOUSE_RADIUS * MOUSE_RADIUS; // 22500
    // Inner fade threshold: dots directly under the cursor fade out
    const INNER_FADE_RADIUS = 45;
    const INNER_FADE_RADIUS_SQ = INNER_FADE_RADIUS * INNER_FADE_RADIUS; // 2025

    const buildDotField = (width: number, height: number, isMobile: boolean) => {
      // Minimum distance between dots:
      // Desktop: 30px (yields ~1100-1300 balanced, airy dots across 1080p)
      // Mobile: 40px (yields ~300-450 dots for smooth mobile rendering)
      const minDist = isMobile ? 40 : 30;
      const rawPoints = generatePoissonPoints(width, height, minDist);

      dots = rawPoints.map((p) => {
        // Natural micro-variation in size and opacity
        const radius = isMobile
          ? 1.0 + Math.random() * 0.35 // 1.0px - 1.35px
          : 1.15 + Math.random() * 0.4; // 1.15px - 1.55px
        const baseAlpha = isMobile
          ? 0.13 + Math.random() * 0.05 // 0.13 - 0.18
          : 0.15 + Math.random() * 0.06; // 0.15 - 0.21

        return {
          baseX: p.x,
          baseY: p.y,
          radius,
          baseAlpha,
          // Independent organic floating speeds and amplitudes
          speedX: 0.9 + Math.random() * 0.8, // 0.9 - 1.7 rad/s
          speedY: 0.8 + Math.random() * 0.8, // 0.8 - 1.6 rad/s
          ampX: 2.0 + Math.random() * 1.8, // 2.0px - 3.8px
          ampY: 1.8 + Math.random() * 1.8, // 1.8px - 3.6px
          phaseX: Math.random() * Math.PI * 2,
          phaseY: Math.random() * Math.PI * 2,
          phaseAlpha: Math.random() * Math.PI * 2,
          mouseOffsetX: 0,
          mouseOffsetY: 0,
          fadeAlpha: 1,
        };
      });
    };

    const draw = (time: number) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      ctx.clearRect(0, 0, width, height);

      const t = time * 0.001; // elapsed time in seconds

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        let renderX = dot.baseX;
        let renderY = dot.baseY;
        let currentAlpha = dot.baseAlpha;

        if (!prefersReducedMotion) {
          // 1. Independent organic floating motion per dot
          const floatX =
            Math.sin(t * dot.speedX + dot.phaseX) * dot.ampX +
            Math.cos(t * dot.speedY * 0.5 + dot.phaseY) * (dot.ampX * 0.35);
          const floatY =
            Math.cos(t * dot.speedY + dot.phaseY) * dot.ampY +
            Math.sin(t * dot.speedX * 0.5 + dot.phaseX) * (dot.ampY * 0.35);

          // 2. Subtle non-uniform opacity breathing
          const breath = Math.sin(t * 1.5 + dot.phaseAlpha) * 0.03;
          currentAlpha = dot.baseAlpha + breath;

          // 3. Mouse ripple & disappearance calculation
          let targetOffsetX = 0;
          let targetOffsetY = 0;
          let targetFade = 1;

          if (mouse.active) {
            const currentX = dot.baseX + floatX;
            const currentY = dot.baseY + floatY;
            const dx = currentX - mouse.x;
            const dy = currentY - mouse.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < MOUSE_RADIUS_SQ && distSq > 0.01) {
              const dist = Math.sqrt(distSq);
              const factor = 1 - dist / MOUSE_RADIUS; // 1 at center, 0 at edge
              // Smoothstep cubic easing for liquid displacement
              const smooth = factor * factor * (3 - 2 * factor);

              // Push away from cursor: max ~13px
              const push = smooth * 13.0;
              targetOffsetX = (dx / dist) * push;
              targetOffsetY = (dy / dist) * push;

              // Disappear directly under cursor:
              if (distSq <= INNER_FADE_RADIUS_SQ) {
                targetFade = 0;
              } else {
                // Smooth fade back to 1 between 45px and 120px
                const fadeT = Math.min(
                  1,
                  Math.max(0, (dist - INNER_FADE_RADIUS) / (120 - INNER_FADE_RADIUS))
                );
                targetFade = fadeT * fadeT * (3 - 2 * fadeT);
              }
            }
          }

          // Smooth spring return to resting position (lerp factor 0.16)
          dot.mouseOffsetX += (targetOffsetX - dot.mouseOffsetX) * 0.16;
          dot.mouseOffsetY += (targetOffsetY - dot.mouseOffsetY) * 0.16;
          dot.fadeAlpha += (targetFade - dot.fadeAlpha) * 0.16;

          renderX = dot.baseX + floatX + dot.mouseOffsetX;
          renderY = dot.baseY + floatY + dot.mouseOffsetY;
        }

        const finalAlpha = currentAlpha * dot.fadeAlpha;

        // Skip rendering if dot has faded out under cursor
        if (finalAlpha <= 0.005) {
          continue;
        }

        // Obsidian Coffee theme warm gold #D4A574 (212, 165, 116)
        ctx.beginPath();
        ctx.arc(renderX, renderY, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 165, 116, ${finalAlpha.toFixed(3)})`;
        ctx.fill();
      }
    };

    const loop = (timestamp: number) => {
      draw(timestamp);
      if (isLoopRunning) {
        animationFrameId = requestAnimationFrame(loop);
      }
    };

    const startLoop = () => {
      if (prefersReducedMotion) {
        draw(0);
        return;
      }
      if (!isLoopRunning) {
        isLoopRunning = true;
        animationFrameId = requestAnimationFrame(loop);
      }
    };

    const stopLoop = () => {
      isLoopRunning = false;
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    };

    const resizeCanvas = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isMobile = width < 768;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      buildDotField(width, height, isMobile);
      draw(performance.now());
    };

    const updateCoordinates = (clientX: number, clientY: number) => {
      mouse.x = clientX;
      mouse.y = clientY;
      mouse.active = true;
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateCoordinates(e.clientX, e.clientY);
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return; // Touch devices keep smooth floating motion
      updateCoordinates(e.clientX, e.clientY);
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopLoop();
      } else {
        startLoop();
      }
    };

    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
      if (prefersReducedMotion) {
        stopLoop();
        draw(0);
      } else {
        startLoop();
      }
    };

    // Initialize canvas and dot field
    resizeCanvas();
    startLoop();

    // Attach listeners
    window.addEventListener("resize", resizeCanvas, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    if (motionQuery.addEventListener) {
      motionQuery.addEventListener("change", handleMotionChange);
    }

    return () => {
      stopLoop();
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (motionQuery.removeEventListener) {
        motionQuery.removeEventListener("change", handleMotionChange);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full select-none"
    />
  );
}
