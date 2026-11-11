"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// The services selector (home): the 8 lines as large rows on the left, the
// selected line's story and its services on the right. Pointing at (or
// focusing, or on a phone tapping) a row moves a liquid-glass blob to it — it
// slides, stretches along the way and settles with a little overshoot, like
// the one in the header — and the right-hand panel changes. Every panel stays
// in the page (the inactive ones are inert), so every service link is always
// crawlable. Rows still link to their hub page. Phones: the rows become a
// scrolling strip of chips above the panel.
// `rows`: { href, heading, no, panel (a server-rendered node) }
const ROW = 76; // px, desktop row height

export default function ServicesExplorer({ rows }) {
  const [active, setActive] = useState(0);
  const blob = useRef(null);
  const prev = useRef(0);
  const list = useRef(null);

  const select = (i) => {
    if (i === active) return;
    setActive(i);
  };

  // slide + stretch the blob to the active row (desktop)
  useEffect(() => {
    const b = blob.current;
    if (!b) return;
    const from = prev.current;
    prev.current = active;
    b.style.transform = `translate3d(0, ${active * ROW + 4}px, 0)`;
    if (
      from !== active &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      b.animate
    ) {
      const d = Math.min(Math.abs(active - from) / 5, 0.55);
      b.animate(
        [
          { scale: "1 1" },
          { scale: `${1 - d * 0.04} ${1 + d * 0.5}`, offset: 0.4 },
          { scale: "1 1" },
        ],
        { duration: 560, easing: "cubic-bezier(0.34, 1.56, 0.64, 1)" },
      );
    }
  }, [active]);

  // keep the selected chip in view on phones — scroll the strip itself (never the page), and not on first render
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    const strip = list.current;
    const row = strip?.children?.[active];
    if (row && window.matchMedia("(max-width: 1023px)").matches)
      strip.scrollTo({
        left: row.offsetLeft - (strip.clientWidth - row.offsetWidth) / 2,
        behavior: "smooth",
      });
  }, [active]);

  const onKey = (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      const n = (active + 1) % rows.length;
      setActive(n);
      list.current?.querySelectorAll("a")[n]?.focus();
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      const n = (active - 1 + rows.length) % rows.length;
      setActive(n);
      list.current?.querySelectorAll("a")[n]?.focus();
    }
  };

  return (
    <div className="mt-6 grid gap-6 md:mt-8 lg:grid-cols-12 lg:gap-12">
      <div className="min-w-0 lg:col-span-5">
        <div className="relative">
          {/* the blob (desktop only) */}
          <span
            ref={blob}
            aria-hidden="true"
            data-lg-blob=""
            data-lg-bezel="16"
            data-lg-scale="1.1"
            data-lg-chroma="off"
            className="glass pointer-events-none absolute left-0 top-0 z-10 hidden h-[68px] w-full rounded-full lg:block"
            style={{
              "--lq-blur": "0px",
              "--lq-sat": "1.3",
              "--q-a": "0.14",
              "--q-a2": "0.04",
              transition:
                "transform .62s cubic-bezier(.22,1.3,.36,1), scale .6s cubic-bezier(.34,1.56,.64,1)",
              willChange: "transform",
            }}
          />
          <ol
            ref={list}
            onKeyDown={onKey}
            aria-label="Service lines"
            className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] lg:mx-0 lg:block lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {rows.map((r, i) => (
              <li
                key={r.href}
                style={{ "--k": i }}
                className="row-in shrink-0 lg:h-[76px] lg:border-b lg:border-(--line) lg:first:border-t lg:first:border-(--fg)"
              >
                <Link
                  href={r.href}
                  onPointerEnter={(e) => e.pointerType === "mouse" && select(i)}
                  onFocus={() => select(i)}
                  onClick={(e) => {
                    if (!window.matchMedia("(min-width: 1024px)").matches) {
                      e.preventDefault(); // phones: a tap selects; the panel's button goes to the page
                      select(i);
                    }
                  }}
                  aria-current={i === active ? "true" : undefined}
                  className={`relative flex items-center gap-3 rounded-full border px-4 py-2 transition-colors duration-300 lg:h-full lg:gap-5 lg:rounded-none lg:border-0 lg:px-5 lg:py-0 ${i === active ? "border-(--fg) bg-(--fg) text-(--bg) lg:bg-transparent lg:text-(--fg)" : "border-(--line) text-(--mut) lg:text-(--fg)/85"}`}
                >
                  <span className="kicker shrink-0 lg:w-7">{r.no}</span>
                  <span className="font-display whitespace-nowrap text-[1.05rem] leading-none tracking-[-0.03em] lg:whitespace-normal lg:text-[clamp(1.35rem,2vw,2rem)] lg:leading-[1.02] lg:tracking-[-0.04em]">
                    {r.heading}
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    size={20}
                    className={`ml-auto hidden shrink-0 transition-all duration-500 ease-out-soft lg:block ${i === active ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`}
                  />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="min-w-0 lg:col-span-7" aria-live="polite">
        <div className="grid grid-cols-[minmax(0,1fr)]">
          {rows.map((r, i) => (
            <div
              key={r.href}
              inert={i !== active}
              aria-hidden={i !== active}
              className={`[grid-area:1/1] transition-[opacity,translate,visibility] duration-500 ease-out-soft ${i === active ? "visible translate-y-0 opacity-100" : "invisible translate-y-3 opacity-0"}`}
            >
              {r.panel}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
