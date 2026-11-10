"use client";

import { useEffect, useRef } from "react";
import { supportsLiquid } from "@/lib/liquidGlass";

// A liquid-glass lens that follows the pointer across the hero: a clear glass
// disc that bends and magnifies the headline and dots beneath it, springs in
// when the pointer enters the hero and out when it leaves. Mouse only
// (hover + fine pointer), only where the browser can refract (see
// lib/liquidGlass.js), never with reduced motion. Decorative: aria-hidden, no
// pointer events. It listens on its parent (the hero section).
export default function GlassLens() {
  const lens = useRef(null);
  useEffect(() => {
    const el = lens.current;
    const host = el?.parentElement;
    if (!el || !host) return;
    if (!supportsLiquid() || !window.matchMedia("(hover: hover) and (pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let tx = 0;
    let ty = 0;
    let x = 0;
    let y = 0;
    let on = false;
    let raf = 0;
    let first = true;
    const place = () => {
      raf = 0;
      x += (tx - x) * 0.16;
      y += (ty - y) * 0.16;
      const R = el.offsetWidth / 2;
      el.style.transform = `translate3d(${(x - R).toFixed(1)}px, ${(y - R).toFixed(1)}px, 0)`;
      if (on || Math.abs(tx - x) > 0.3 || Math.abs(ty - y) > 0.3) raf = requestAnimationFrame(place);
    };
    const show = (v) => {
      on = v;
      el.style.opacity = v ? "1" : "0";
      el.style.scale = v ? "1" : "0.4";
      if (v && !raf) raf = requestAnimationFrame(place);
    };
    const move = (e) => {
      if (e.pointerType === "touch") return;
      const r = host.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      if (first) {
        x = tx;
        y = ty;
        first = false;
      }
      if (!on) show(true);
      else if (!raf) raf = requestAnimationFrame(place);
    };
    const leave = () => show(false);
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
      ref={lens}
      aria-hidden="true"
      data-lg-lens=""
      data-lg-bezel="46"
      data-lg-scale="1.5"
      className="glass pointer-events-none absolute left-0 top-0 z-20 hidden h-[168px] w-[168px] rounded-full opacity-0 [scale:0.4] lg:block"
      style={{ transition: "opacity .45s ease, scale .7s cubic-bezier(.34,1.56,.64,1)", "--lq-blur": "0.6px", "--lq-sat": "1.2" }}
    />
  );
}
