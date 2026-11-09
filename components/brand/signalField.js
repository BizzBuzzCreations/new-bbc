"use client";

import { useEffect, useRef } from "react";

// The Signal Field (DESIGN_DIRECTION.md §2): the brand's motif. A field of
// fine horizontal lines that wavers like noise and, around a focus point,
// resolves into one clean waveform lit in buzz yellow — "signal from noise".
//  - The focus follows the pointer over the field (desktop); without a
//    pointer it drifts slowly on its own (phones, before the mouse moves).
//  - One 2D canvas, no library. Draws only while on screen and the tab is
//    visible; resolution capped at 1.5× for speed.
//  - prefers-reduced-motion: one still frame, no animation.
// Decorative (aria-hidden). `variant` "hero" (full strength) | "quiet"
// (footer / section texture). `lines` overrides the line count.
export default function SignalField({ variant = "hero", lines, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const quiet = variant === "quiet";
    let w = 0;
    let h = 0;
    let dpr = 1;
    let rows = 0;
    let frame = 0;
    let running = false;
    let visible = false;
    const start = performance.now();
    // focus point: where the noise becomes signal (0–1 of the canvas)
    const focus = { x: 0.68, y: 0.5, tx: 0.68, ty: 0.5, pointer: false, energy: quiet ? 0.55 : 0.85, targetEnergy: quiet ? 0.55 : 0.85 };

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = Math.max(1, r.width);
      h = Math.max(1, r.height);
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      rows = lines || Math.round(Math.min(46, Math.max(18, h / (w < 640 ? 22 : 17))));
    };

    const draw = (now) => {
      const t = (now - start) / 1000;
      // ease the focus towards its target
      if (!focus.pointer && !reduced) {
        focus.tx = 0.5 + Math.sin(t * 0.13) * 0.28;
        focus.ty = 0.5 + Math.sin(t * 0.21 + 1.3) * 0.18;
      }
      focus.x += (focus.tx - focus.x) * 0.06;
      focus.y += (focus.ty - focus.y) * 0.06;
      focus.energy += (focus.targetEnergy - focus.energy) * 0.04;

      ctx.clearRect(0, 0, w, h);
      const fx = focus.x * w;
      const fy = focus.y * h;
      const sigmaX = w * (w < 640 ? 0.34 : 0.2);
      const sigmaY = h * 0.22;
      const gap = h / (rows + 1);
      const step = w < 640 ? 7 : 6;
      const noiseAmp = gap * (quiet ? 0.28 : 0.36);
      const sigAmp = gap * (quiet ? 1.6 : 2.6) * focus.energy;

      // one horizontal gradient shared by all lines: white → buzz at the focus → white
      const grad = ctx.createLinearGradient(0, 0, w, 0);
      const fp = Math.min(0.98, Math.max(0.02, focus.x));
      grad.addColorStop(0, "rgba(255,255,255,0.10)");
      grad.addColorStop(Math.max(0, fp - 0.22), "rgba(255,255,255,0.16)");
      grad.addColorStop(fp, quiet ? "rgba(255,212,59,0.55)" : "rgba(255,212,59,0.95)");
      grad.addColorStop(Math.min(1, fp + 0.22), "rgba(255,255,255,0.16)");
      grad.addColorStop(1, "rgba(255,255,255,0.10)");
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1;

      for (let i = 1; i <= rows; i++) {
        const y0 = i * gap;
        const dy = y0 - fy;
        const rowG = Math.exp(-(dy * dy) / (2 * sigmaY * sigmaY));
        ctx.globalAlpha = 0.35 + rowG * 0.65;
        ctx.beginPath();
        for (let x = -step; x <= w + step; x += step) {
          const dx = x - fx;
          const g = Math.exp(-(dx * dx) / (2 * sigmaX * sigmaX)) * rowG;
          // noise: two drifting sines per line, damped where the signal is
          const n =
            (Math.sin(x * 0.021 + t * 1.1 + i * 0.9) * 0.6 + Math.sin(x * 0.047 - t * 1.7 + i * 2.3) * 0.4 + Math.sin(x * 0.11 + t * 2.3 + i) * 0.18) *
            noiseAmp *
            (1 - g * 0.92);
          // signal: one clean travelling wave, strongest at the focus
          const s = Math.sin(dx * 0.028 - t * 2.4) * sigAmp * g * (0.55 + 0.45 * Math.cos((dy / gap) * 0.35));
          const y = y0 + n + s;
          if (x === -step) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    };

    const loop = (now) => {
      draw(now);
      frame = running ? requestAnimationFrame(loop) : 0;
    };
    const play = () => {
      if (reduced || running || !visible || document.hidden) return;
      running = true;
      frame = requestAnimationFrame(loop);
    };
    const pause = () => {
      running = false;
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
    };

    resize();
    draw(start + 4000); // a first frame straight away (and the only one with reduced motion)

    const io = new IntersectionObserver(
      ([e]) => {
        visible = e.isIntersecting;
        if (visible) play();
        else pause();
      },
      { rootMargin: "100px" },
    );
    io.observe(canvas);
    const ro = new ResizeObserver(() => {
      resize();
      if (!running) draw(performance.now());
    });
    ro.observe(canvas);
    const onVis = () => (document.hidden ? pause() : play());
    document.addEventListener("visibilitychange", onVis);

    // the pointer anywhere over the field's parent section steers the focus
    const host = canvas.parentElement;
    const onMove = (e) => {
      if (e.pointerType === "touch") return;
      const r = canvas.getBoundingClientRect();
      focus.pointer = true;
      focus.tx = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
      focus.ty = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
      focus.targetEnergy = 1;
    };
    const onLeave = () => {
      focus.pointer = false;
      focus.targetEnergy = quiet ? 0.55 : 0.85;
    };
    if (!reduced && host) {
      host.addEventListener("pointermove", onMove);
      host.addEventListener("pointerleave", onLeave);
    }

    return () => {
      pause();
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      if (host) {
        host.removeEventListener("pointermove", onMove);
        host.removeEventListener("pointerleave", onLeave);
      }
    };
  }, [variant, lines]);

  return <canvas ref={ref} aria-hidden="true" className={`pointer-events-none block h-full w-full ${className}`} />;
}
