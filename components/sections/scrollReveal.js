"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

// Site-wide "one-by-one" scroll-reveal — the same fade-up-on-scroll feel
// already used for the Founders/Leaders/Specialties cards on the Our
// Team page (the `fadeUp` helper in components/sections/teamGrids.js):
// opacity 0 -> 1, translateY 28px -> 0, 0.5s duration, same easing,
// ~0.1s stagger per card in a grid, triggered once ~10% into view.
//
// Applied automatically via IntersectionObserver instead of hand-adding
// framer-motion to every section on every page, so it reaches the whole
// site. Deliberately narrow in what it touches:
//   - card grids (`.grid` / `grid-cols-*` containers) — their direct
//     children reveal one-by-one, matching the Our Team effect exactly.
//   - section headings (h1/h2/h3) — a single fade-up each.
// Skips anything inside a Splide carousel, anything explicitly opted out
// via `data-no-reveal`, and anything that already manages its own
// opacity/transform (framer-motion `motion.*` elements) so nothing gets
// double-animated. Inline styles are cleared once the reveal finishes,
// so each element's own Tailwind hover-transition classes take back
// over immediately after — this never touches hover effects.
const EASE = "cubic-bezier(0.16,1,0.3,1)";
const DURATION = 0.5;
const STAGGER = 0.1;

function isExcluded(el) {
  if (el.closest("[data-no-reveal]")) return true;
  if (el.closest(".splide")) return true;
  if (el.style.opacity !== "" || el.style.transform !== "") return true;
  const position = window.getComputedStyle(el).position;
  if (position === "fixed" || position === "sticky") return true;
  return false;
}

export default function ScrollReveal() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (pathname?.startsWith("/admin")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let observer;
    const raf = requestAnimationFrame(() => {
      const gridItems = Array.from(
        document.querySelectorAll(
          'main :is(.grid, [class*="grid-cols"]) > *',
        ),
      ).filter((el) => !el.dataset.revealed && !isExcluded(el));

      const headings = Array.from(
        document.querySelectorAll("main section h1, main section h2, main section h3"),
      ).filter((el) => !el.dataset.revealed && !isExcluded(el));

      const candidates = [...gridItems, ...headings];
      if (candidates.length === 0) return;

      // Callback is inlined (not a factory taking `observer` as an
      // argument) so it closes over the outer `let observer` by
      // reference — by argument, it would capture `undefined`, since
      // the assignment below hasn't finished when the constructor runs.
      observer = new IntersectionObserver(
        (entries) => {
          const groupIndex = new Map();
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const parent = el.parentElement;
            const i = groupIndex.get(parent) ?? 0;
            groupIndex.set(parent, i + 1);
            const delay = (i * STAGGER).toFixed(2);

            el.style.transition = `opacity ${DURATION}s ${EASE} ${delay}s, transform ${DURATION}s ${EASE} ${delay}s`;
            requestAnimationFrame(() => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            });

            const cleanup = (e) => {
              if (e && e.target !== el) return;
              el.style.opacity = "";
              el.style.transform = "";
              el.style.transition = "";
              el.removeEventListener("transitionend", cleanup);
            };
            el.addEventListener("transitionend", cleanup);
            // Fallback in case transitionend never fires (e.g. element
            // removed mid-transition, or reduced-motion skips it).
            setTimeout(cleanup, (DURATION + Number(delay)) * 1000 + 150);

            el.dataset.revealed = "true";
            observer.unobserve(el);
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
      );

      candidates.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(28px)";
        observer.observe(el);
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      if (observer) observer.disconnect();
    };
  }, [pathname]);

  return null;
}
