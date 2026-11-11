"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { SERVICE_LINES, SUB_SERVICE_COUNT } from "@/lib/siteNav";

// The hero's 3D object — "one team, every layer": the brand card on top of the
// eight service lines, stacked in depth and seen from above at an angle. Pure
// CSS 3D (no library), and it is part of the page's choreography:
//   • landing — the layers start as ONE card (the brand card) and peel apart
//     into the stack just as the loader's curtain opens (globals.css, "deck");
//   • at rest — the stack turns slowly, and every few seconds a yellow light
//     runs down the layers, each sliding out a little and glowing in turn;
//   • pointer — the whole stack leans toward the pointer with an eased follow,
//     and the layer under it slides out and goes yellow;
//   • scroll — scrolling away spins the stack and pulls the layers far apart
//     (an exploded view) while it rises faster than the page;
//   • every layer is a real link to its service page (they go yellow under the
//     pointer; nothing moves toward you), and they come last in tab order.
// Wide screens only. Under reduced motion it is a still stack, still linked.
// `--i` is the layer's depth (the brand card is the top, 01 is just under it);
// `--n` orders the peel: the top card moves first, so it never dips below the others.
const LAYERS = SERVICE_LINES;
// short names for the layer edges (the full names are linked everywhere else)
const SHORT = {
  "Search Engine Optimisation": "SEO",
  "Social Media Marketing": "Social Media",
  "Website Development": "Web Development",
  "Marketing Automation": "Automation",
  "Business Consultancy": "Consultancy",
};

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
      x += (tx - x) * 0.09;
      y += (ty - y) * 0.09;
      st.style.setProperty("--drx", `${(58 + y * -12).toFixed(2)}deg`);
      st.style.setProperty("--drz", `${(-34 + x * 24).toFixed(2)}deg`);
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

  const total = LAYERS.length + 1;
  return (
    <div
      ref={root}
      className="hero-deck pointer-events-none absolute z-[12] hidden lg:block"
    >
      <div className="deck-scroll">
        <nav
          ref={stage}
          aria-label="The eight service lines"
          className="deck-stage"
        >
          <ul>
            {/* the brand card: the top of the stack — and, while the page lands, the single card the layers peel from */}
            {LAYERS.map((l, k) => {
              const depth = total - 2 - k; // 01 is just under the brand card
              return (
                <li
                  key={l.href}
                  className="deck-card"
                  style={{ "--i": depth, "--n": k + 1, "--d": `${-k * 0.9}s` }}
                >
                  <Link href={l.href} className="deck-face" tabIndex={0}>
                    <span className="deck-glow" aria-hidden="true" />
                    <span className="deck-dot" aria-hidden="true" />
                    <span className="deck-label">
                      <span className="kicker">{l.no}</span>
                      <span className="font-display">
                        {SHORT[l.name] || l.name}
                      </span>
                    </span>
                    <span className="sr-only">{l.name}</span>
                  </Link>
                </li>
              );
            })}
            <li
              aria-hidden="true"
              className="deck-card deck-brand"
              style={{ "--i": total - 1, "--n": 0, "--d": "0s" }}
            >
              <div className="deck-face">
                <span className="deck-dot" />
                <Image
                  src="/bbc logo white.png"
                  alt=""
                  width={447}
                  height={143}
                  className="h-[calc(var(--dw)*0.13)] w-auto"
                />
                <span className="deck-figure">
                  <span className="font-display">{SUB_SERVICE_COUNT}</span>
                  <span className="kicker">
                    services in
                    <br />
                    {LAYERS.length} lines
                  </span>
                </span>
                <span className="deck-label">
                  <span className="kicker">One team</span>
                  <span className="font-display">Every layer</span>
                </span>
              </div>
            </li>
            {/* the shadow on the page below — one more layer under the stack */}
            <li
              aria-hidden="true"
              className="deck-card deck-ground"
              style={{ "--i": -0.7, "--n": total, "--d": "0s" }}
            >
              <div className="deck-face" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
