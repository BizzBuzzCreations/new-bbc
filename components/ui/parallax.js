"use client";

import { useEffect, useRef } from "react";

// Gentle scroll parallax: the child drifts a little slower than the page as
// it scrolls through the screen (a sense of depth, nothing moving on its
// own). The wrapper should be a bit taller than its frame — e.g.
// `absolute inset-x-0 -inset-y-24` inside an overflow-hidden parent — so
// the drift never shows an empty edge. `strength`: how much of the scroll
// distance it lags by (0.1 = 10%). Off when reduced motion is requested.
export default function Parallax({ children, className = "", strength = 0.1 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const frame = el.parentElement.getBoundingClientRect();
      // Distance of the frame's centre from the screen's centre.
      const offset = frame.top + frame.height / 2 - window.innerHeight / 2;
      el.style.transform = `translate3d(0, ${(-offset * strength).toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [strength]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
