"use client";

import { useEffect } from "react";

// Site-wide "one-by-one" reveal effect. Mounted once in the root layout so
// it applies to every page without touching individual page files: each
// top-level <section> on the page fades and slides up into place, either
// staggered on initial load (for whatever's already in the viewport) or
// one at a time as the user scrolls further sections into view.
//
// Progressive enhancement by design — sections stay visible by default;
// this only ever *adds* a hidden starting state via JS after confirming
// IntersectionObserver support, so a script failure never leaves content
// invisible.
export default function ScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let observer;

    const revealNow = (el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    };

    const setup = () => {
      const mainEl = document.querySelector("main");
      if (!mainEl) return;

      const sections = Array.from(mainEl.querySelectorAll("section")).filter(
        (el) => !el.dataset.revealInit
      );
      if (sections.length === 0) return;

      if (!observer) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                revealNow(entry.target);
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
        );
      }

      let visibleIndex = 0;
      sections.forEach((el) => {
        el.dataset.revealInit = "true";
        const rect = el.getBoundingClientRect();
        const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;

        el.style.transition =
          "opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)";

        if (alreadyVisible) {
          // Cascade whatever's already on screen one after another instead
          // of everything popping in at once.
          el.style.opacity = "0";
          el.style.transform = "translateY(20px)";
          el.style.transitionDelay = `${Math.min(visibleIndex, 5) * 110}ms`;
          visibleIndex += 1;
          requestAnimationFrame(() => requestAnimationFrame(() => revealNow(el)));
        } else {
          el.style.opacity = "0";
          el.style.transform = "translateY(28px)";
          observer.observe(el);
        }
      });
    };

    const raf = requestAnimationFrame(setup);

    // App Router swaps <main>'s children on client-side navigation without
    // a full reload, so watch for that and re-run for the new page's
    // sections (already-revealed nodes are skipped via data-reveal-init).
    const mainEl = document.querySelector("main");
    let mo;
    if (mainEl) {
      mo = new MutationObserver(() => requestAnimationFrame(setup));
      mo.observe(mainEl, { childList: true, subtree: false });
    }

    return () => {
      cancelAnimationFrame(raf);
      if (mo) mo.disconnect();
      if (observer) observer.disconnect();
    };
  }, []);

  return null;
}
