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
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
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
    document.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", settle);
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", settle);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
  return null;
}
