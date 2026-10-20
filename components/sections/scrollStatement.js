"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// One big statement line whose words light up, one after another, as the
// visitor scrolls past it — the homepage's replacement for the old pinned
// "Know More About Us" zoom. Nothing is pinned and nothing moves by itself:
// the brightness simply follows the scroll position (scroll back up and it
// dims again). Words start grey (still readable — about 4.3:1 on black,
// enough for text this large) and turn white; the part after the dash turns
// brand blue. Reduced motion: shown fully lit straight away.
// Uses the saved scroll-zoom fields (tagline, button), so earlier edits carry over.
export default function ScrollStatement({ content }) {
  const text = content?.zoomTagline || "One team, every capability — built to help your business grow.";
  const buttonText = content?.zoomButtonText || "Learn Our Story";
  const buttonLink = content?.zoomButtonLink || "/about";
  const ref = useRef(null);

  // "lead — accent": words after the dash get the blue highlight.
  const [lead, accent = ""] = text.split(/\s+[—–-]\s+/);
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
    <section className="bg-black px-6 py-16 md:py-28">
      <div className="mx-auto max-w-5xl text-center">
        <h2 ref={ref} className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-6xl">
          {words.map(({ w, accent: isAccent }, i) => (
            <span
              key={i}
              data-word
              data-lit="false"
              className={`transition-colors duration-300 text-white/45 ${
                isAccent ? "data-[lit=true]:text-[#40A2D8]" : "data-[lit=true]:text-white"
              }`}
            >
              {w}
              {i < words.length - 1 ? " " : ""}
            </span>
          ))}
        </h2>
        {buttonText && buttonLink && (
          <Link
            href={buttonLink}
            className="group mt-8 inline-flex items-center gap-2 py-2 text-sm font-semibold text-[#40A2D8] transition-colors duration-200 hover:text-white md:text-base"
          >
            {buttonText}
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </section>
  );
}
