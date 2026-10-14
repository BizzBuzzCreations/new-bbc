"use client";

import { useEffect, useRef, useState } from "react";

// The animated "Oops! 404" robot on the 404 page: the Lottie file
// /404-blue.json played as-is with lottie-web, so it moves exactly like
// /404 blue.gif (same artwork, same animation, same loop).
//
// - lottie-web is imported dynamically, so it stays out of the initial bundle.
// - If it fails to load, the GIF itself is shown instead.
// - Visitors who ask their system for reduced motion get the first frame.
export default function NotFoundAnimation() {
  const box = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let anim;
    let cancelled = false;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    import("lottie-web")
      .then((mod) => {
        if (cancelled || !box.current) return;
        anim = mod.default.loadAnimation({
          container: box.current,
          renderer: "svg",
          loop: true,
          autoplay: !reduce,
          path: "/404-blue.json",
          rendererSettings: { preserveAspectRatio: "xMidYMid meet", progressiveLoad: true },
        });
        anim.addEventListener("DOMLoaded", () => {
          if (!cancelled && reduce) anim.goToAndStop(0, true);
        });
        anim.addEventListener("data_failed", () => !cancelled && setFailed(true));
      })
      .catch(() => setFailed(true));

    return () => {
      cancelled = true;
      anim?.destroy();
    };
  }, []);

  return (
    <div
      className="relative aspect-square w-[min(92vw,660px,58vh)]"
      role="img"
      aria-label="Oops! 404 — page not found. A robot showing an error screen."
    >
      {failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/404 blue.gif" alt="" aria-hidden="true" width={660} height={660} className="h-full w-full object-contain" />
      ) : (
        <div ref={box} className="h-full w-full" aria-hidden="true" />
      )}
    </div>
  );
}
