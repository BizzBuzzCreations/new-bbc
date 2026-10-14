"use client";

import { useEffect, useRef, useState } from "react";

// The animated "Oops! 404" robot on the 404 page: the Lottie file
// /404-blue.json played as-is with lottie-web, so it moves exactly like
// /404 blue.gif (same artwork, same animation, same loop).
//
// - lottie-web is imported dynamically, so it stays out of the initial bundle.
// - If it fails to load, the GIF itself is shown instead.
// - It always plays (like the GIF does). It is a small decorative loop, and it
//   must not freeze just because the system has animations turned off.
export default function NotFoundAnimation() {
  const box = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let anim;
    let cancelled = false;

    import("lottie-web")
      .then((mod) => {
        if (cancelled || !box.current) return;
        anim = mod.default.loadAnimation({
          container: box.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          path: "/404-blue.json",
          rendererSettings: { preserveAspectRatio: "xMidYMid meet", progressiveLoad: true },
        });
        // Make sure it is running once the artwork is in the page.
        anim.addEventListener("DOMLoaded", () => {
          if (!cancelled) anim.play();
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
      className="relative aspect-square w-[min(98vw,900px,68vh)] -mt-[3%] -mb-[3%]"
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
