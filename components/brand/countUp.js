"use client";

import { useEffect, useRef, useState } from "react";

// A number that counts up the first time it scrolls into view ("90+" →
// 0…90 then "+"). Takes the text as the dashboard stores it: leading digits
// (commas / one decimal allowed) followed by any suffix. Anything without a
// leading number is shown as is. Still (final value) with reduced motion.
export default function CountUp({ value, className = "", duration = 1400 }) {
  const text = String(value ?? "");
  const m = text.match(/^([^0-9]*)([0-9][0-9,]*(?:\.[0-9]+)?)(.*)$/);
  const ref = useRef(null);
  const target = m ? parseFloat(m[2].replace(/,/g, "")) : 0;
  const decimals = m && m[2].includes(".") ? m[2].split(".")[1].length : 0;
  const [shown, setShown] = useState(target);

  useEffect(() => {
    if (!m || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !ref.current) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        setShown(0);
        const step = (now) => {
          const p = Math.min(1, (now - start) / duration);
          setShown(target * (1 - Math.pow(1 - p, 3)));
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.6 },
    );
    io.observe(ref.current);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  if (!m) return <span className={className}>{text}</span>;
  const n = shown.toLocaleString("en-IN", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {m[1]}
        {n}
        {m[3]}
      </span>
    </span>
  );
}
