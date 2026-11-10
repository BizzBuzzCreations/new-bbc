"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";

// Client video stories: a row of tall cards (the videos are phone-recorded
// 9:16) you scroll sideways — drag, swipe, the arrows, or the keyboard.
// Nothing from YouTube loads until a card is played: the covers are small
// self-hosted pictures; pressing one swaps it for the privacy-enhanced
// player (youtube-nocookie), and starting another stops the first. Never
// plays or moves by itself. `items`: { id, name, role, cover }
// (lib/clientVideos.js).
export default function ClientVideoWall({ items }) {
  const row = useRef(null);
  const [playing, setPlaying] = useState(null);
  const move = (dir) => {
    const el = row.current;
    if (!el) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    el.scrollBy({
      left: dir * el.clientWidth * 0.8,
      behavior: reduced ? "auto" : "smooth",
    });
  };
  // mouse: drag the row, and let go with a little momentum (touch already scrolls natively)
  const dragged = useRef(false);
  const onDown = (e) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    const el = row.current;
    const startX = e.clientX;
    const startLeft = el.scrollLeft;
    let lastX = startX;
    let lastT = performance.now();
    let v = 0;
    dragged.current = false;
    el.style.scrollSnapType = "none";
    const mv = (ev) => {
      const dx = ev.clientX - startX;
      if (Math.abs(dx) > 5) dragged.current = true;
      if (dragged.current) {
        el.scrollLeft = startLeft - dx;
        const now = performance.now();
        v = ((lastX - ev.clientX) / Math.max(now - lastT, 1)) * 16;
        lastX = ev.clientX;
        lastT = now;
      }
    };
    const up = () => {
      window.removeEventListener("pointermove", mv);
      window.removeEventListener("pointerup", up);
      const glide = () => {
        if (Math.abs(v) < 0.4) {
          el.style.scrollSnapType = "";
          return;
        }
        el.scrollLeft += v;
        v *= 0.94;
        requestAnimationFrame(glide);
      };
      if (
        dragged.current &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
      )
        glide();
      else el.style.scrollSnapType = "";
    };
    window.addEventListener("pointermove", mv);
    window.addEventListener("pointerup", up);
  };
  const arrow =
    "flex h-12 w-12 items-center justify-center rounded-full border border-(--fg)/30 transition-colors hover:border-(--fg) hover:bg-(--fg) hover:text-(--bg)";

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label="Client video testimonials"
      className="mt-6 md:mt-8"
    >
      <div className="mb-5 flex items-center justify-between">
        <p className="kicker text-(--mut)">
          {items.length} stories · scroll sideways
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous stories"
            className={arrow}
          >
            <ArrowLeft aria-hidden="true" size={18} />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next stories"
            className={arrow}
          >
            <ArrowRight aria-hidden="true" size={18} />
          </button>
        </div>
      </div>
      <ul
        ref={row}
        tabIndex={0}
        aria-label="Videos"
        onPointerDown={onDown}
        onClickCapture={(e) => {
          if (dragged.current) {
            e.preventDefault();
            e.stopPropagation();
            dragged.current = false;
          }
        }}
        className="no-scrollbar -mx-5 flex cursor-grab snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-2 md:-mx-10 md:scroll-px-10 md:px-10 [scrollbar-width:none]"
      >
        {items.map((v, i) => {
          const on = playing === v.id;
          return (
            <li
              key={`${v.id}-${i}`}
              className="w-[68vw] max-w-[19rem] shrink-0 snap-start sm:w-[17rem] lg:w-[19rem]"
            >
              <div className="relative aspect-[9/16] overflow-hidden bg-paper-2">
                {on ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0&playsinline=1`}
                    title={`Client testimonial | ${v.name} | BizzBuzz Creations`}
                    allow="autoplay; encrypted-media; picture-in-picture; web-share; fullscreen"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlaying(v.id)}
                    aria-label={`Play the video testimonial from ${v.name}`}
                    style={{ position: "absolute" }}
                    className="group absolute inset-0 block text-left"
                  >
                    {v.cover.startsWith("/") ? (
                      <Image
                        src={v.cover}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 304px, 68vw"
                        className="object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]"
                        draggable={false}
                      />
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element -- a YouTube frame (i.ytimg.com), used only when no cover was uploaded
                      <img
                        src={v.cover}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    )}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/60 to-transparent"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full glass glass-pop text-ink"
                    >
                      <Play size={18} fill="currentColor" className="ml-0.5" />
                    </span>
                  </button>
                )}
              </div>
              <p className="font-display mt-4 text-xl leading-tight tracking-[-0.03em]">
                {v.name}
              </p>
              {v.role && <p className="kicker mt-1 text-(--mut)">{v.role}</p>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
