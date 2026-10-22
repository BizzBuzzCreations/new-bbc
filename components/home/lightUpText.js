"use client";

import React, { useEffect, useRef } from "react";

// A line whose words brighten one after another as it scrolls through the
// screen (and dim again scrolling back) — scroll-linked only, nothing moves
// by itself. Words start soft grey (readable; fine contrast for text this
// large) and turn white; the part after a dash ( — ) turns brand blue.
// With reduced motion everything is shown lit straight away.
export default function LightUpText({ text, as: Tag = "p", className = "" }) {
  const ref = useRef(null);
  const [lead, accent = ""] = String(text || "").split(/\s+[—–-]\s+/);
  const words = [
    ...lead.split(/\s+/).filter(Boolean).map((w) => ({ w, accent: false })),
    ...(accent ? [{ w: "—", accent: false }] : []),
    ...accent.split(/\s+/).filter(Boolean).map((w) => ({ w, accent: true })),
  ];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const spans = [...el.querySelectorAll("[data-word]")];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const top = el.getBoundingClientRect().top;
      // 0 when the line's top is 85% down the screen, 1 when it reaches 35%.
      const progress = reduce ? 1 : Math.min(1, Math.max(0, (vh * 0.85 - top) / (vh * 0.5)));
      spans.forEach((s, i) => {
        s.dataset.lit = progress >= (i + 1) / spans.length ? "true" : "false";
      });
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
  }, [text]);

  return (
    <Tag ref={ref} className={className}>
      {words.map(({ w, accent: isAccent }, i) => (
        <React.Fragment key={i}>
          <span
            data-word
            data-lit="false"
            className={`text-white/40 transition-colors duration-500 ${isAccent ? "data-[lit=true]:text-[#40A2D8]" : "data-[lit=true]:text-white"}`}
          >
            {w}
          </span>
          {i < words.length - 1 ? " " : ""}
        </React.Fragment>
      ))}
    </Tag>
  );
}
