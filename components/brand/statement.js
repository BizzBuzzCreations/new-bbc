"use client";

import { useEffect, useRef } from "react";
import AccentText from "@/components/brand/accentText";

// A large statement whose words fill in from faint to full as it scrolls
// through the screen (DESIGN_DIRECTION.md §7). Readers who don't scroll
// still get it: it is complete once its middle reaches the middle of the
// screen, and with reduced motion (or no JS) it is simply full. Plain text
// only; `tone` "dark" (ink text on paper) | "light".
export default function Statement({ text, tone = "dark", className = "", as: Tag = "p" }) {
  const ref = useRef(null);
  const words = String(text || "").replace(/<[^>]+>/g, "").split(/\s+/).filter(Boolean);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const spans = [...el.querySelectorAll("[data-w]")];
    el.dataset.live = "1";
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the top enters the lower 85% of the screen, 1 when the middle reaches the middle
      const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (vh * 0.85 - vh * 0.5 + r.height * 0.5)));
      const lit = p * spans.length;
      spans.forEach((s, i) => {
        s.style.opacity = String(Math.min(1, Math.max(0.18, lit - i + 0.18)));
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
    <Tag ref={ref} className={`font-display text-balance ${tone === "dark" ? "text-ink" : "text-white"} ${className}`}>
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
