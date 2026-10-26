"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { Moon, Sun, X } from "lucide-react";

// The blog post's text, made comfortable and interactive:
//  - Dark reading theme by default (like the rest of the site); a Dark /
//    Light switch and three text sizes, remembered for next time. (Light is
//    the post exactly as its author styled it, on a white card.)
//  - Dark really re-themes the post, whatever it brings along: light
//    backgrounds from its own CSS or inline styles (a white page-builder
//    wrapper, light table cells, cream boxes) are turned dark, and then every
//    piece of text is checked against what is behind it — dark text pasted in
//    from a white page is lifted to a readable colour. Coloured boxes (a blue
//    box with white text) keep their look. Light switches it all off again.
//  - A "#" beside each heading that copies the link to that section.
//  - Images open larger on click (Esc or a click closes).
// `html` is the post's already sanitised HTML.
const KEY = "bbc-reading";
const SIZES = [
  ["s", "A", "Smaller text", "text-sm"],
  ["m", "A", "Normal text", "text-base"],
  ["l", "A", "Larger text", "text-xl"],
];

const lin = (c) => {
  const v = c / 255;
  return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
};
const rgb = (css) => {
  const m = css.match(/rgba?\(([^)]+)\)/);
  if (!m) return null;
  const [r, g, b, a = 1] = m[1].split(/[\s,/]+/).filter(Boolean).map(Number);
  return { l: 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b), a };
};
const contrast = (a, b) => (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
const PAGE_DARK = 0.006; // the near-black page behind the article

const SKIP = new Set(["SCRIPT", "STYLE", "IMG", "SVG", "PICTURE", "VIDEO", "IFRAME", "CANVAS", "BR", "HR", "PATH"]);
const lightColor = (c) => c && c.a > 0.5 && c.l > 0.7;

// Turn the post into a dark page (classes only — undone by switching to Light):
//  1) light solid / light gradient backgrounds become dark (a big wrapper
//     clear, a smaller box a faint lighter panel);
//  2) text that is now hard to read against what is behind it is lifted.
function themeDark(root) {
  const els = [...root.querySelectorAll("*")].filter((el) => !SKIP.has(el.tagName.toUpperCase()));
  els.forEach((el) => el.classList.remove("fx-bg", "fx-bg0", "fx-light", "fx-dark"));
  const rootH = root.getBoundingClientRect().height || 1;
  els.forEach((el) => {
    const cs = getComputedStyle(el);
    let light = false;
    if (cs.backgroundImage !== "none") {
      // a gradient made only of light colours (a picture is left alone)
      const cols = [...cs.backgroundImage.matchAll(/rgba?\([^)]+\)/g)].map((m) => rgb(m[0])).filter(Boolean);
      light = !/url\(/.test(cs.backgroundImage) && cols.length > 0 && cols.every((c) => c.a < 0.5 || c.l > 0.7);
    } else light = lightColor(rgb(cs.backgroundColor));
    if (light) el.classList.add(el.getBoundingClientRect().height > rootH * 0.5 ? "fx-bg0" : "fx-bg");
  });

  // what is behind an element: the nearest solid background above it, else the dark page
  const bgCache = new Map();
  const bgOf = (el) => {
    if (!el || el === root) return PAGE_DARK;
    if (bgCache.has(el)) return bgCache.get(el);
    const cs = getComputedStyle(el);
    let out;
    if (cs.backgroundImage !== "none") out = null; // a picture / a coloured gradient: leave the text alone
    else {
      const c = rgb(cs.backgroundColor);
      out = c && c.a > 0.5 ? c.l : bgOf(el.parentElement);
    }
    bgCache.set(el, out);
    return out;
  };
  els.forEach((el) => {
    if (![...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim())) return;
    const text = rgb(getComputedStyle(el).color);
    const bg = bgOf(el);
    if (!text || bg === null || contrast(text.l, bg) >= 4.5) return;
    el.classList.add(bg < 0.35 ? "fx-light" : "fx-dark");
  });
}

function copy(text) {
  if (navigator.clipboard?.writeText) return navigator.clipboard.writeText(text);
  const t = document.createElement("textarea");
  t.value = text;
  document.body.appendChild(t);
  t.select();
  document.execCommand("copy");
  t.remove();
  return Promise.resolve();
}

export default function ArticleBody({ html, defaultMode = "dark" }) {
  const [mode, setMode] = useState(defaultMode);
  const [size, setSize] = useState("m");
  const [zoom, setZoom] = useState(null);
  const box = useRef(null);
  const dialog = useRef(null);

  // the reader's saved choice (read after mount, so the server's markup matches)
  useEffect(() => {
    const t = setTimeout(() => {
      try {
        const saved = JSON.parse(localStorage.getItem(KEY) || "{}");
        if (saved.mode === "dark" || saved.mode === "light") setMode(saved.mode);
        if (["s", "m", "l"].includes(saved.size)) setSize(saved.size);
      } catch {}
    }, 0);
    return () => clearTimeout(t);
  }, []);
  const choose = (next) => {
    const merged = { mode, size, ...next };
    if (next.mode) setMode(next.mode);
    if (next.size) setSize(next.size);
    try {
      localStorage.setItem(KEY, JSON.stringify({ mode: merged.mode, size: merged.size }));
    } catch {}
  };

  // theme the post whenever the dark theme is on (before the browser paints, so
  // switching never shows the old colours for a moment) and undo it for Light
  useLayoutEffect(() => {
    const root = box.current;
    if (!root) return;
    if (mode === "dark") themeDark(root);
    else root.querySelectorAll(".fx-bg, .fx-bg0, .fx-light, .fx-dark").forEach((el) => el.classList.remove("fx-bg", "fx-bg0", "fx-light", "fx-dark"));
  }, [mode, html, size]);

  // "#" beside headings
  useEffect(() => {
    const root = box.current;
    if (!root) return;
    root.querySelectorAll("h2[id], h3[id]").forEach((h) => {
      if (h.querySelector(".heading-anchor")) return;
      const b = document.createElement("button");
      b.type = "button";
      b.className = "heading-anchor";
      b.textContent = "#";
      b.setAttribute("aria-label", `Copy link to the section “${h.textContent.trim()}”`);
      b.dataset.id = h.id;
      h.appendChild(b);
    });
  }, [html]);

  const onClick = (e) => {
    const anchor = e.target.closest?.(".heading-anchor");
    if (anchor) {
      const url = `${location.origin}${location.pathname}#${anchor.dataset.id}`;
      history.replaceState(null, "", `#${anchor.dataset.id}`);
      copy(url).then(() => toast.success("Link to this section copied", { position: "bottom-center", autoClose: 1800, theme: "dark", hideProgressBar: true }));
      return;
    }
    const img = e.target;
    if (img?.tagName === "IMG" && !img.closest("a") && img.naturalWidth > 240) setZoom({ src: img.currentSrc || img.src, alt: img.alt || "" });
  };

  useEffect(() => {
    if (zoom && dialog.current && !dialog.current.open) dialog.current.showModal();
  }, [zoom]);

  const dark = mode === "dark";
  const pill = (active) => `rounded-full px-3.5 py-1.5 text-sm transition-colors ${active ? "bg-white text-black" : "text-white/70 hover:text-white"}`;
  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-2 pl-4 text-sm text-white/60">
        <span className="hidden sm:inline">Reading</span>
        <div className="flex flex-wrap items-center gap-2">
          <div role="group" aria-label="Text size" className="flex gap-1 rounded-full border border-white/15 p-1">
            {SIZES.map(([value, label, name, cls]) => (
              <button key={value} type="button" aria-pressed={size === value} aria-label={name} onClick={() => choose({ size: value })} className={`${pill(size === value)} ${cls} h-8 w-9 !px-0 font-medium leading-none`}>
                {label}
              </button>
            ))}
          </div>
          <div role="group" aria-label="Reading theme" className="flex gap-1 rounded-full border border-white/15 p-1">
            <button type="button" aria-pressed={dark} onClick={() => choose({ mode: "dark" })} className={`${pill(dark)} inline-flex items-center gap-1.5`}>
              <Moon size={14} aria-hidden="true" /> Dark
            </button>
            <button type="button" aria-pressed={!dark} onClick={() => choose({ mode: "light" })} className={`${pill(!dark)} inline-flex items-center gap-1.5`}>
              <Sun size={14} aria-hidden="true" /> Light
            </button>
          </div>
        </div>
      </div>

      <div className={dark ? "" : "rounded-3xl bg-white p-6 shadow-2xl shadow-black/40 md:p-10"}>
        <div id="post-article" ref={box} data-size={size} onClick={onClick} className={`article article-zoomable ${dark ? "article-dark" : ""}`} dangerouslySetInnerHTML={{ __html: html }} />
      </div>

      {zoom && (
        <dialog
          ref={dialog}
          aria-label="Image, enlarged"
          onClose={() => setZoom(null)}
          onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
          className="m-auto max-h-[92vh] max-w-[94vw] overflow-visible rounded-2xl border border-white/10 bg-black/90 p-0 backdrop:bg-black/80 backdrop:backdrop-blur-sm"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- the article's own image, shown larger */}
          <img src={zoom.src} alt={zoom.alt} className="max-h-[88vh] max-w-[92vw] rounded-2xl object-contain" />
          <button type="button" onClick={() => dialog.current?.close()} aria-label="Close image" className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black text-white hover:bg-white hover:text-black">
            <X size={18} aria-hidden="true" />
          </button>
        </dialog>
      )}
    </div>
  );
}
