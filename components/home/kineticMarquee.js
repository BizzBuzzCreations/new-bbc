"use client";

import { useEffect, useRef } from "react";

// A band of large type that drifts sideways on its own and answers the scroll:
// scrolling speeds it up, reversing the scroll reverses it, and it leans (a
// slight skew) with the speed. Two rows run in opposite directions — one solid,
// one outlined. Pauses when it is off screen or the pointer rests on it; a
// still band under reduced motion. Decorative (aria-hidden): the words are the
// names of the service lines, which are linked everywhere else on the page.
export default function KineticMarquee({ words }) {
  const box = useRef(null);
  const tracks = useRef([]);

  useEffect(() => {
    const el = box.current;
    const list = tracks.current.filter(Boolean);
    if (!el || !list.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const state = list.map((t, i) => ({
      t,
      x: 0,
      dir: i % 2 ? 1 : -1,
      half: 0,
    }));
    let visible = false;
    let resting = false;
    let raf = 0;
    let last = 0;
    let lastY = window.scrollY;
    let vel = 0;
    let flip = 1;
    const measure = () => state.forEach((s) => (s.half = s.t.scrollWidth / 2));
    const frame = (now) => {
      raf = 0;
      const dt = Math.min(3, (now - (last || now)) / 16.7);
      last = now;
      const y = window.scrollY;
      const dy = y - lastY;
      lastY = y;
      vel += (dy / Math.max(dt, 0.3) - vel) * 0.14;
      if (Math.abs(vel) > 1.2) flip += ((vel < 0 ? -1 : 1) - flip) * 0.1;
      const speed =
        (resting ? 0.15 : 0.55) + Math.min(Math.abs(vel) * 0.32, 16);
      state.forEach((s) => {
        if (!s.half) return;
        s.x += s.dir * flip * speed * dt;
        s.x = ((s.x % s.half) + s.half) % s.half;
        s.t.style.transform = `translate3d(${(-s.x).toFixed(1)}px, 0, 0)`;
      });
      el.style.transform = `skewX(${Math.max(-7, Math.min(7, -vel * 0.28)).toFixed(2)}deg)`;
      if (visible) raf = requestAnimationFrame(frame);
    };
    const kick = () => {
      if (!raf && visible && !document.hidden) {
        last = 0;
        raf = requestAnimationFrame(frame);
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    state.forEach((s) => ro.observe(s.t));
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) kick();
    });
    io.observe(el);
    const enter = () => (resting = true);
    const leave = () => (resting = false);
    el.addEventListener("pointerenter", enter);
    el.addEventListener("pointerleave", leave);
    const vis = () => !document.hidden && kick();
    document.addEventListener("visibilitychange", vis);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      el.removeEventListener("pointerenter", enter);
      el.removeEventListener("pointerleave", leave);
      document.removeEventListener("visibilitychange", vis);
    };
  }, []);

  const row = (r) => (
    <div key={r} className="overflow-hidden">
      <div
        ref={(n) => (tracks.current[r] = n)}
        className="flex w-max items-center will-change-transform"
      >
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {words.map((w) => (
              <li key={w} className="flex items-center">
                <span
                  className={`font-display whitespace-nowrap text-[clamp(2.8rem,6.4vw,6.4rem)] leading-[1.12] tracking-[-0.045em] ${r ? "text-transparent [-webkit-text-stroke:1.4px_var(--fg)]" : ""}`}
                >
                  {w}
                </span>
                <span className="mx-7 h-2.5 w-2.5 shrink-0 rounded-full bg-buzz md:mx-10" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );

  return (
    <section
      aria-hidden="true"
      className="on-paper mb-8 overflow-hidden border-y border-(--fg) py-2 md:mb-12 md:py-4"
    >
      <div ref={box} className="origin-center will-change-transform">
        {row(0)}
        {row(1)}
      </div>
    </section>
  );
}
