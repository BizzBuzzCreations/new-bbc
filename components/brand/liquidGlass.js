"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  buildFilter,
  displacementMap,
  supportsLiquid,
} from "@/lib/liquidGlass";

// Turns every `.glass` surface into liquid glass where the browser allows it
// (Chromium: backdrop-filter accepts an SVG filter). For each surface it draws
// a refraction map for its exact size and corner radius (lib/liquidGlass.js),
// builds an SVG filter from it and hands the filter to the surface through
// `--lg-url` + `data-liquid`; the stylesheet does the rest. It redraws when a
// surface is resized and picks up surfaces that appear later (menu panels,
// popups). Elsewhere (Safari, Firefox) nothing happens and the surfaces stay
// frosted glass. Per-surface tuning: data-lg-bezel (px of curved rim),
// data-lg-scale (strength, default 1.25), data-lg-lens (also magnify the
// middle; a number is the strength, default 0.22), data-lg-chroma="off" (no colour fringing; small surfaces get it by
// default; data-lg-off keeps a surface frosted). A small governor watches the
// frame rate and, on a machine that struggles with backdrop filters, steps
// down liquid → frosted → flat (html[data-glass]) and never back up.
// Renders nothing.
const NS = "http://www.w3.org/2000/svg";

export default function LiquidGlass() {
  const pathname = usePathname();
  useEffect(() => {
    if (
      !supportsLiquid() ||
      window.matchMedia("(prefers-reduced-transparency: reduce)").matches
    )
      return;
    document.documentElement.setAttribute("data-liquid-ready", "");
    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("width", "0");
    svg.setAttribute("height", "0");
    svg.style.cssText =
      "position:absolute;width:0;height:0;overflow:hidden;pointer-events:none";
    const defs = document.createElementNS(NS, "defs");
    svg.appendChild(defs);
    document.body.appendChild(svg);

    const state = new Map(); // element → { id, key }
    const timers = new Map();
    let count = 0;

    const build = (el) => {
      if (!el.isConnected || el.hasAttribute("data-lg-off")) return;
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      if (w < 8 || h < 8) return;
      const radius = parseFloat(getComputedStyle(el).borderTopLeftRadius) || 0;
      const lensAttr = el.getAttribute("data-lg-lens");
      const lens = lensAttr === null ? 0 : parseFloat(lensAttr) || 0.22; // how strongly the middle is magnified
      const small = Math.min(w, h) <= 120;
      const chroma =
        el.getAttribute("data-lg-chroma") === "off"
          ? false
          : el.hasAttribute("data-lg-chroma") || small;
      const bezel =
        Number(el.getAttribute("data-lg-bezel")) ||
        Math.min(26, Math.min(w, h) * 0.32);
      const k = Number(el.getAttribute("data-lg-scale")) || 1.25;
      const key = [
        w,
        h,
        Math.round(Math.min(radius, w / 2, h / 2)),
        bezel,
        lens,
        chroma,
        k,
      ].join("|");
      const cur = state.get(el) || { id: `lg${++count}`, key: "" };
      if (cur.key === key) return;
      cur.key = key;
      defs.querySelector(`#${cur.id}`)?.remove();
      defs.appendChild(
        buildFilter({
          id: cur.id,
          w,
          h,
          scale: bezel * k * 1.4,
          map: displacementMap({ w, h, radius, bezel, lens }),
          chroma,
        }),
      );
      el.style.setProperty("--lg-url", `url(#${cur.id})`);
      el.setAttribute("data-liquid", "");
      state.set(el, cur);
    };
    const later = (el, ms) => {
      clearTimeout(timers.get(el));
      timers.set(
        el,
        setTimeout(() => build(el), ms),
      );
    };
    const ro = new ResizeObserver((entries) =>
      entries.forEach((e) => later(e.target, state.has(e.target) ? 90 : 0)),
    );
    const attach = (el) => {
      if (timers.has(el)) return;
      timers.set(el, 0);
      ro.observe(el);
      later(el, 0);
    };
    const detach = (el) => {
      ro.unobserve(el);
      clearTimeout(timers.get(el));
      timers.delete(el);
      const cur = state.get(el);
      if (cur) defs.querySelector(`#${cur.id}`)?.remove();
      state.delete(el);
    };
    const scan = (root) => {
      if (root.nodeType !== 1) return;
      if (root.matches?.(".glass")) attach(root);
      root.querySelectorAll?.(".glass").forEach(attach);
    };
    scan(document.body);
    const mo = new MutationObserver((list) => {
      list.forEach((m) => {
        m.addedNodes.forEach(scan);
        m.removedNodes.forEach((n) => {
          if (n.nodeType !== 1) return;
          if (n.matches?.(".glass")) detach(n);
          n.querySelectorAll?.(".glass").forEach(detach);
        });
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      mo.disconnect();
      ro.disconnect();
      timers.forEach((t) => clearTimeout(t));
      svg.remove();
      document.documentElement.removeAttribute("data-liquid-ready");
    };
  }, []);

  // the governor: re-checked on every page change (the home hero's animated
  // dot field behind glass is the costly case), steps down, never up
  useEffect(() => {
    const root = document.documentElement;
    try {
      if (localStorage.getItem("bbc-glass") === "keep") return; // tests / debugging: never step down
    } catch {}
    const level = () => root.getAttribute("data-glass") || "liquid";
    if (level() === "flat") return;
    let raf = 0;
    let stop = false;
    const sample = (ms, done) => {
      const d = [];
      let last = 0;
      const t0 = performance.now();
      const tick = (t) => {
        if (stop) return;
        if (document.visibilityState === "visible") {
          if (last) d.push(t - last);
        }
        last = t;
        if (t - t0 < ms) raf = requestAnimationFrame(tick);
        else {
          d.sort((a, b) => a - b);
          done(d.length > 20 ? d[d.length >> 1] : 0);
        }
      };
      raf = requestAnimationFrame(tick);
    };
    const step = () => {
      const cur = level();
      if (cur === "flat") return;
      sample(2600, (median) => {
        if (median > 30) {
          root.setAttribute("data-glass", cur === "liquid" ? "frost" : "flat");
          setTimeout(() => !stop && step(), 900);
        }
      });
    };
    const first = setTimeout(step, 2200); // after the hero's first paint and the filters are built
    return () => {
      stop = true;
      clearTimeout(first);
      cancelAnimationFrame(raf);
    };
  }, [pathname]);
  return null;
}
