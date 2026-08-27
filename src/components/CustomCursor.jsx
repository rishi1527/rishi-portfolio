import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function CustomCursor() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;

    if (!glow) return;

    const handleMouseMove = (e) => {
      glow.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate3d(-50%, -50%, 0)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return createPortal(
    <div ref={glowRef} className="cursor-glow" />,
    document.body,
  );
}

export default CustomCursor;
