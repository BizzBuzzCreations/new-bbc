"use client";

import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { Moon, Sun, X } from "lucide-react";

// The blog post's text, made comfortable and interactive:
//  - Dark reading theme by default (like the rest of the site); a Dark /
//    Light switch and three text sizes, remembered for next time. Posts that
//    carry their own page-builder design (<style> blocks made for a white
//    page) start in Light (`defaultMode`) unless the reader chose.
//  - A contrast check on the reader's side: text the post's own colours
//    left unreadable on the dark page (pasted-in dark text, say) is lifted to
//    a readable colour; boxes the author made keep their own look.
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

// give unreadable text a readable colour (classes only — undone by switching to Light)
function fixContrast(root) {
  const bgCache = new Map();
  const bgOf = (el) => {
    if (el === root || !el) return PAGE_DARK;
    if (bgCache.has(el)) return bgCache.get(el);
    const cs = getComputedStyle(el);
    let out;
    if (cs.backgroundImage !== "none") out = null; // gradients / pictures: leave alone
    else {
      const c = rgb(cs.backgroundColor);
      out = c && c.a > 0.5 ? c.l : bgOf(el.parentElement);
    }
    bgCache.set(el, out);
    return out;
  };
  root.querySelectorAll("p, li, span, a, td, th, div, h1, h2, h3, h4, h5, h6, blockquote, strong, em, b, i, label, summary, figcaption, small").forEach((el) => {
    el.classList.remove("fx-light", "fx-dark");
    if (![...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim())) return;
    const text = rgb(getComputedStyle(el).color);
    const bg = bgOf(el);
    if (!text || bg === null || contrast(text.l, bg) >= 4) return;
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

  // contrast check whenever the dark theme is on
  useEffect(() => {
    const root = box.current;
    if (!root) return;
    if (mode !== "dark") {
      root.querySelectorAll(".fx-light, .fx-dark").forEach((el) => el.classList.remove("fx-light", "fx-dark"));
      return;
    }
    const id = "requestIdleCallback" in window ? window.requestIdleCallback(() => fixContrast(root), { timeout: 1500 }) : setTimeout(() => fixContrast(root), 300);
    return () => ("cancelIdleCallback" in window ? window.cancelIdleCallback(id) : clearTimeout(id));
  }, [mode, html]);

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
