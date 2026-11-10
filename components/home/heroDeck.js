"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { SERVICE_LINES } from "@/lib/siteNav";

// A 3D stack of layers beside the hero headline — "one team, every layer": six
// cards, one per service line, stacked in depth and seen from above at an
// angle, the top one carrying the brand and the three offices. Pure CSS 3D (no
// library): the stack leans toward the pointer with an eased, springy follow,
// every card floats a little on its own rhythm, and scrolling away fans the
// layers apart. Wide screens only; decorative (aria-hidden); still under
// reduced motion (the pose is static, nothing floats, nothing follows).
const LAYERS = SERVICE_LINES;

export default function HeroDeck() {
  const root = useRef(null);
  const stage = useRef(null);

  useEffect(() => {
    const el = root.current;
    const st = stage.current;
    const host = el?.closest("section");
    if (!el || !st || !host) return;
    if (
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    let tx = 0;
    let ty = 0;
    let x = 0;
    let y = 0;
    let raf = 0;
    const frame = () => {
      raf = 0;
      x += (tx - x) * 0.07;
      y += (ty - y) * 0.07;
      st.style.setProperty("--drx", `${(58 + y * -9).toFixed(2)}deg`);
      st.style.setProperty("--drz", `${(-34 + x * 16).toFixed(2)}deg`);
      if (Math.abs(tx - x) > 0.002 || Math.abs(ty - y) > 0.002)
        raf = requestAnimationFrame(frame);
    };
    const move = (e) => {
      const r = host.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
      if (!raf) raf = requestAnimationFrame(frame);
    };
    const leave = () => {
      tx = 0;
      ty = 0;
      if (!raf) raf = requestAnimationFrame(frame);
    };
    host.addEventListener("pointermove", move, { passive: true });
    host.addEventListener("pointerleave", leave);
    return () => {
      host.removeEventListener("pointermove", move);
      host.removeEventListener("pointerleave", leave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={root}
      aria-hidden="true"
      className="hero-deck pointer-events-none absolute right-[2.5vw] top-[17%] z-[1] hidden lg:block"
    >
      <div ref={stage} className="deck-stage">
        {LAYERS.map((l, i) => {
          const top = i === LAYERS.length - 1;
          return (
            <div
              key={l.href}
              className="deck-card"
              style={{ "--i": i, "--d": `${-i * 0.9}s` }}
            >
              <div className="deck-face">
                <span className="deck-dot" />
                {top ? (
                  <div className="flex h-full flex-col justify-between pb-9">
                    <Image
                      src="/bbc-logo-ink.png"
                      alt=""
                      width={447}
                      height={143}
                      className="h-9 w-auto"
                    />
                    <p className="kicker text-(--mut)">
                      Prayagraj · Kanpur · London
                    </p>
                  </div>
                ) : null}
                <p className="deck-label">
                  <span className="kicker">{l.no}</span>
                  <span className="font-display">{l.name}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
