"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// The team / career heroes' photos in a rounded frame (redesign; was a
// full-screen background): real team and office photos fading slowly from
// one to the next, with small buttons under the frame to pick one. The
// other photos only load once the page has finished loading (the first one
// is the LCP image), and the fading only starts then. Visitors who ask for
// reduced motion get a still photo. `slides`: image paths.
const SLIDE_DURATION = 4500;

export default function HeroSlideshow({ slides, aspect = "aspect-[4/3]" }) {
  const list = (slides || []).filter(Boolean);
  const [active, setActive] = useState(0);
  const [restReady, setRestReady] = useState(false);

  useEffect(() => {
    const ready = () => setRestReady(true);
    if (document.readyState === "complete") {
      const t = setTimeout(ready, 0);
      return () => clearTimeout(t);
    }
    window.addEventListener("load", ready, { once: true });
    return () => window.removeEventListener("load", ready);
  }, []);

  useEffect(() => {
    if (!restReady || list.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((prev) => (prev + 1) % list.length), SLIDE_DURATION);
    return () => clearInterval(id);
  }, [list.length, restReady]);

  if (!list.length) return null;
  return (
    <div>
      <div className={`relative w-full overflow-hidden rounded-3xl bg-[#0a0a0a] ${aspect}`}>
        {list.map((src, i) => (
          // index, not src — slides can repeat the same image
          <div key={i} aria-hidden={i !== active} className="absolute inset-0 transition-opacity duration-1000 ease-in-out" style={{ opacity: i === active ? 1 : 0 }}>
            {(i === 0 || restReady) && (
              <Image
                src={src}
                alt=""
                fill
                sizes="(min-width: 1280px) 580px, (min-width: 768px) 46vw, 100vw"
                preload={i === 0}
                fetchPriority={i === 0 ? "high" : undefined}
                className="object-cover"
              />
            )}
          </div>
        ))}
      </div>
      {list.length > 1 && (
        <div className="mt-3 flex gap-1">
          {list.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show photo ${i + 1}`}
              aria-pressed={i === active}
              className="group flex h-6 min-w-6 items-center justify-center"
            >
              <span className={`block h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-white" : "w-1.5 bg-white/40 group-hover:bg-white/70"}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
