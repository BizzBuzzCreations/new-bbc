"use client";

import { useEffect, useRef } from "react";
import AccentText from "@/components/brand/accentText";

// A large statement whose words fill from faint to full as it scrolls through
// the screen (Tresmares). Complete once its middle reaches the middle of the
// screen; with reduced motion (or no JS) it is simply full. Plain text only.
export default function Statement({ text, className = "", as: Tag = "p" }) {
  const ref = useRef(null);
  const words = String(text || "").replace(/<[^>]+>/g, "").split(/\s+/).filter(Boolean);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const spans = [...el.querySelectorAll("[data-w]")];
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (vh * 0.85 - vh * 0.45 + r.height * 0.5)));
      const lit = p * spans.length;
      spans.forEach((s, i) => {
        s.style.opacity = String(Math.min(1, Math.max(0.5, lit - i + 0.5)));
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [text]);

  if (!words.length) return null;
  return (
    <Tag ref={ref} className={`font-display text-balance ${className}`}>
      <span className="sr-only">{words.join(" ")}</span>
      <span aria-hidden="true">
        {words.map((w, i) => (
          <span key={i} data-w className="transition-opacity duration-300">
            {/\*/.test(w) ? <AccentText text={w} /> : w}{" "}
          </span>
        ))}
      </span>
    </Tag>
  );
}
