"use client";

import { getImageProps } from "next/image";

// The tiles are CSS backgrounds, which bypass next/image — the About hero
// was downloading ~3.6MB of raw team JPEGs (400-700KB each) on load,
// starving the page's JS/fonts on phones (~20s LCP). getImageProps gives
// the optimizer URL instead: a tile is at most ~224px wide, so width 200
// yields its 2x (640w) WebP/AVIF, ~30-40KB each.
const tileUrl = (src) =>
  src ? getImageProps({ src, alt: "", width: 200, height: 200 }).props.src : "";

// A still 3×3 grid of team photos, in the order they're saved. (It used to
// reshuffle every 3 seconds, forever — constant motion next to the hero text.)
export const ShuffleGrid = ({ images, className }) => (
  <div className={`grid grid-cols-3 grid-rows-3 gap-1 ${className || "h-[450px]"}`}>
    {images.map((sq) => (
      <div
        key={sq.id}
        className="w-full h-full rounded-md overflow-hidden bg-neutral-800"
        style={{
          backgroundImage: `url("${tileUrl(sq.src)}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    ))}
  </div>
);
