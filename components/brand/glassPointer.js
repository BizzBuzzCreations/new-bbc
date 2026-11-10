"use client";

import { useEffect } from "react";

// Makes every `.glass` surface answer a mouse: the sheen and the yellow edge
// light follow the pointer (CSS variables --mx / --my on the surface under
// it), and a `[data-tilt]` surface leans a few degrees toward it (--rx / --ry,
// eased by the surface's CSS transition). One delegated listener for the
// whole site, one write per frame, mouse and pen only — nothing on touch, and
// no tilt with reduced motion. Renders nothing.
export default function GlassPointer() {
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let last = null;
    let tilted = null;

    const settle = () => {
      if (!tilted) return;
      tilted.style.setProperty("--rx", "0deg");
      tilted.style.setProperty("--ry", "0deg");
      tilted = null;
    };
    const run = () => {
      frame = 0;
      const e = last;
      if (!e) return;
      const t = e.target instanceof Element ? e.target : null;
      const glass = t?.closest(".glass");
      if (glass) {
        const r = glass.getBoundingClientRect();
        glass.style.setProperty("--mx", `${(e.clientX - r.left).toFixed(0)}px`);
        glass.style.setProperty("--my", `${(e.clientY - r.top).toFixed(0)}px`);
        // the rim's bright arc faces the pointer (conic angles run clockwise from 12 o'clock)
        const ang = (Math.atan2(e.clientX - (r.left + r.width / 2), -(e.clientY - (r.top + r.height / 2))) * 180) / Math.PI;
        glass.style.setProperty("--ang", `${ang.toFixed(0)}deg`);
      }
      const tilt = reduce.matches ? null : t?.closest("[data-tilt]");
      if (tilted && tilted !== tilt) settle();
      if (tilt) {
        const r = tilt.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        tilt.style.setProperty("--rx", `${(-py * 4).toFixed(2)}deg`);
        tilt.style.setProperty("--ry", `${(px * 5).toFixed(2)}deg`);
        tilted = tilt;
      }
    };
    const onMove = (e) => {
      if (e.pointerType === "touch") return;
      last = e;
      if (!frame) frame = requestAnimationFrame(run);
    };
    if (fine) document.addEventListener("pointermove", onMove, { passive: true });
    // while the page scrolls, liquid surfaces drop to plain frosted glass (an SVG
    // refraction over a moving backdrop is too costly to redo every frame) and
    // come back a moment after it stops
    const root = document.documentElement;
    let calm = 0;
    const onScroll = () => {
      if (!root.hasAttribute("data-scrolling")) root.setAttribute("data-scrolling", "");
      clearTimeout(calm);
      calm = setTimeout(() => root.removeAttribute("data-scrolling"), 160);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    if (fine) document.documentElement.addEventListener("pointerleave", settle);
    return () => {
      document.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      clearTimeout(calm);
      root.removeAttribute("data-scrolling");
      document.documentElement.removeEventListener("pointerleave", settle);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
  return null;
}
