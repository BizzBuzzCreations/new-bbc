"use client";

import { useEffect, useRef } from "react";

// The homepage hero's background: a field of small dots, set on a grid, that
// answers the pointer — a warm yellow light follows it, the dots near it
// swell, darken and are pushed aside, and a click (or tap) sends a ring out
// across the page. With nobody touching it a soft light drifts on its own
// path, so it is alive on first load and on phones. It is drawn on one canvas
// (2D, a few hundred to ~2,000 dots), starts only once the browser is idle (so
// it never competes with the first paint), pauses when the hero is off screen
// or the tab is hidden, and is a still frame for visitors who ask for reduced
// motion or Data Saver. Purely decorative: aria-hidden, never takes the
// pointer (the section listens), the headline stays in front.
const BUZZ = "255, 212, 59";
const TAU = Math.PI * 2;

export default function HeroField({ className = "" }) {
  const box = useRef(null);
  const cv = useRef(null);

  useEffect(() => {
    const el = box.current;
    const canvas = cv.current;
    const host = el?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!el || !canvas || !host || !ctx) return;

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches || Boolean(navigator.connection?.saveData);
    const ink = (getComputedStyle(el).color.match(/[\d.]+/g) || ["17", "17", "16"]).slice(0, 3).join(", ");

    let w = 0;
    let h = 0;
    let dpr = 1;
    let gap = 30;
    let cols = 0;
    let rows = 0;
    let radius = 190;
    let raf = 0;
    let idleId = 0;
    let visible = false;
    let started = false;
    let inside = false;
    let lastMove = -1e9;
    let prev = 0;
    // pointer light: target (tx, ty), eased position (x, y), strength p → pt
    let tx = 0;
    let ty = 0;
    let x = 0;
    let y = 0;
    let p = 0;
    let pt = 0;
    const ripples = [];

    const size = () => {
      const r = el.getBoundingClientRect();
      w = Math.max(1, Math.round(r.width));
      h = Math.max(1, Math.round(r.height));
      dpr = Math.min(window.devicePixelRatio || 1, w < 640 ? 1.5 : 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      gap = w < 640 ? 22 : w < 1100 ? 26 : 30;
      cols = Math.ceil(w / gap) + 1;
      rows = Math.ceil(h / gap) + 1;
      radius = Math.max(120, Math.min(230, Math.min(w, h) * 0.3));
      if (!started) {
        tx = x = w * 0.64;
        ty = y = h * 0.42;
      }
    };

    const draw = (now) => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      if (p > 0.02) {
        const R = radius * 1.35;
        const g = ctx.createRadialGradient(x, y, 0, x, y, R);
        g.addColorStop(0, `rgba(${BUZZ}, ${(0.6 * p).toFixed(3)})`);
        g.addColorStop(0.55, `rgba(${BUZZ}, ${(0.2 * p).toFixed(3)})`);
        g.addColorStop(1, `rgba(${BUZZ}, 0)`);
        ctx.fillStyle = g;
        ctx.fillRect(x - R, y - R, R * 2, R * 2);
      }

      const R2 = radius * radius;
      const paths = [new Path2D(), new Path2D(), new Path2D(), new Path2D()];
      const ox = (w - (cols - 1) * gap) / 2;
      const oy = 6;
      const t = still ? 0 : now;
      for (let j = 0; j < rows; j++) {
        const by = oy + j * gap;
        for (let i = 0; i < cols; i++) {
          const bx = ox + i * gap;
          const wave = Math.sin(bx * 0.011 + t * 0.00055) * Math.sin(by * 0.013 - t * 0.00047);
          const dx = bx - x;
          const dy = by - y;
          const d2 = dx * dx + dy * dy;
          let k = 0;
          let d = 0;
          if (d2 < R2) {
            d = Math.sqrt(d2);
            k = 1 - d / radius;
            k = k * k * (3 - 2 * k);
          }
          let ring = 0;
          for (let n = 0; n < ripples.length; n++) {
            const rp = ripples[n];
            const age = now - rp.t;
            const rx = bx - rp.x;
            const ry = by - rp.y;
            const dist = Math.sqrt(rx * rx + ry * ry);
            const off = Math.abs(dist - age * 0.6);
            if (off < 80) {
              const f = (1 - off / 80) * (1 - age / 1700);
              if (f > ring) ring = f;
            }
          }
          const kp = k * p;
          if (kp < 0.004 && ring < 0.004) {
            const b = wave > 0.5 ? 3 : wave > 0 ? 2 : wave > -0.5 ? 1 : 0;
            paths[b].moveTo(bx + 1.2, by);
            paths[b].arc(bx, by, 1.2, 0, TAU);
            continue;
          }
          const push = kp * 9;
          const px = d > 0 ? bx + (dx / d) * push : bx;
          const py = d > 0 ? by + (dy / d) * push : by;
          const r = 1.2 + kp * 2.5 + ring * 2.6;
          const a = 0.16 + kp * 0.72 + ring * 0.5;
          ctx.fillStyle = `rgba(${ink}, ${Math.min(0.92, a).toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(px, py, r, 0, TAU);
          ctx.fill();
        }
      }
      [0.1, 0.15, 0.21, 0.28].forEach((a, b) => {
        ctx.fillStyle = `rgba(${ink}, ${a})`;
        ctx.fill(paths[b]);
      });
    };

    const frame = (now) => {
      raf = 0;
      const idle = !inside || now - lastMove > 3200;
      if (idle) {
        tx = w * (0.5 + 0.34 * Math.sin(now * 0.00028));
        ty = h * (0.44 + 0.26 * Math.sin(now * 0.00041 + 1.1));
        pt = 0.5;
      } else {
        pt = 1;
      }
      const dt = Math.min(3, (now - (prev || now)) / 16.7);
      prev = now;
      x += (tx - x) * (1 - Math.pow(1 - 0.12, dt));
      y += (ty - y) * (1 - Math.pow(1 - 0.12, dt));
      p += (pt - p) * (1 - Math.pow(1 - 0.06, dt));
      while (ripples.length && now - ripples[0].t > 1700) ripples.shift();
      draw(now);
      if (visible && !document.hidden) raf = requestAnimationFrame(frame);
    };
    const kick = () => {
      if (!started || still || raf || !visible || document.hidden) return;
      prev = 0;
      raf = requestAnimationFrame(frame);
    };

    const local = (e) => {
      const r = canvas.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const onMove = (e) => {
      const q = local(e);
      tx = q.x;
      ty = q.y;
      inside = true;
      lastMove = performance.now();
    };
    const onLeave = () => {
      inside = false;
    };
    const onDown = (e) => {
      const q = local(e);
      tx = q.x;
      ty = q.y;
      inside = true;
      lastMove = performance.now();
      ripples.push({ x: q.x, y: q.y, t: performance.now() });
      if (ripples.length > 4) ripples.shift();
    };

    const ro = new ResizeObserver(() => {
      size();
      if (started && (still || !raf)) draw(performance.now());
    });
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) kick();
    });
    const onVisibility = () => !document.hidden && kick();

    const start = () => {
      size();
      started = true;
      draw(performance.now());
      canvas.style.opacity = "1";
      if (!still) {
        host.addEventListener("pointermove", onMove, { passive: true });
        host.addEventListener("pointerleave", onLeave);
        host.addEventListener("pointerdown", onDown, { passive: true });
        document.addEventListener("visibilitychange", onVisibility);
        kick();
      }
      ro.observe(el);
      io.observe(el);
    };
    if ("requestIdleCallback" in window) idleId = window.requestIdleCallback(start, { timeout: 1800 });
    else idleId = window.setTimeout(start, 600);

    return () => {
      if ("cancelIdleCallback" in window) window.cancelIdleCallback(idleId);
      else window.clearTimeout(idleId);
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
      host.removeEventListener("pointerdown", onDown);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div ref={box} aria-hidden="true" className={`pointer-events-none absolute inset-0 z-0 text-(--fg) [mask-image:linear-gradient(to_bottom,#000_72%,transparent)] ${className}`}>
      <canvas ref={cv} className="block h-full w-full opacity-0 transition-opacity duration-1000" />
    </div>
  );
}
