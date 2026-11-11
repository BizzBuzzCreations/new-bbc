"use client";

import { useEffect, useState } from "react";

// A thin rail of dots down the left edge of the homepage (wide screens): one
// per section, the current one stretched into a bar with its number, a label
// on hover or focus, a click scrolls there. It reads the sections from the
// page (`[data-rail="Label"]`, in the order they appear), so a section switched
// off in the dashboard simply is not on it. It inverts itself over dark bands
// (mix-blend-mode: difference), so it needs no colour of its own.
export default function SectionRail() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const els = [...document.querySelectorAll("[data-rail]")];
    const labels = els.map((e) => e.getAttribute("data-rail"));
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.42;
      let cur = 0;
      els.forEach((e, i) => {
        if (e.getBoundingClientRect().top <= line) cur = i;
      });
      setActive(cur);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(() => {
      setItems(labels);
      update();
    });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  if (items.length < 3) return null;
  const go = (i) => {
    const el = document.querySelectorAll("[data-rail]")[i];
    if (!el) return;
    const y =
      i === 0 ? 0 : el.getBoundingClientRect().top + window.scrollY - 24;
    window.scrollTo({
      top: y,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  return (
    <nav
      aria-label="Sections of this page"
      className="pointer-events-none fixed left-3.5 top-1/2 z-[60] hidden -translate-y-1/2 mix-blend-difference xl:block"
    >
      <ol className="pointer-events-auto flex flex-col gap-0.5">
        {items.map((label, i) => {
          const on = i === active;
          return (
            <li key={label}>
              <button
                type="button"
                onClick={() => go(i)}
                aria-current={on ? "true" : undefined}
                aria-label={label}
                className="group flex h-6 items-center gap-2.5 text-white"
              >
                <span
                  aria-hidden="true"
                  className={`block rounded-full bg-white transition-all duration-500 ease-out-soft ${on ? "h-6 w-[4px]" : "h-2 w-2 opacity-90 group-hover:scale-150 group-hover:opacity-100"}`}
                />
                <span
                  aria-hidden="true"
                  className={`kicker -translate-x-1 whitespace-nowrap text-[0.6875rem] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 `}
                >
                  {label}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
