"use client";

import { useEffect, useRef } from "react";

// Scroll-linked progress for a row of steps (Our Process). Nothing moves on
// its own and scrolling is never taken over: as the visitor scrolls through,
// this sets `--steps-progress` (0 → 1) on the wrapper — a progress line reads
// it — and marks each `[data-step]` child `data-active="true"` once reached,
// so the styling can light it up. Scrolling back up reverses it.
//   - desktop (steps side by side): the line fills left to right and step i
//     lights up when the line gets to it;
//   - phones (steps stacked): each step lights up as it comes into view.
// With reduced motion requested, everything is shown complete straight away.
// `vertical`: the steps are a stacked list at every width (e.g. a 6-step
// roadmap) — each lights up as it scrolls to 75% of the screen height, and
// --steps-progress is the share of the list that has passed that point.
export default function ScrollSteps({ children, className = "", vertical = false }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wide = window.matchMedia("(min-width: 768px)");
    let raf = 0;

    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const box = el.getBoundingClientRect();
      const top = box.top;
      // 0 when the steps' top edge is 85% down the screen, 1 at 35% —
      // or, for a vertical list, how much of it has passed 75% of the screen.
      const progress = reduce
        ? 1
        : vertical
          ? Math.min(1, Math.max(0, (vh * 0.75 - top) / box.height))
          : Math.min(1, Math.max(0, (vh * 0.85 - top) / (vh * 0.5)));
      el.style.setProperty("--steps-progress", progress.toFixed(3));
      for (const step of el.querySelectorAll("[data-step]")) {
        const i = Number(step.dataset.step);
        const n = Number(step.dataset.steps) || 1;
        const on =
          reduce ||
          (wide.matches && !vertical ? progress >= (i + 0.5) / n : step.getBoundingClientRect().top < vh * 0.75);
        step.dataset.active = on ? "true" : "false";
      }
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
  }, [vertical]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
