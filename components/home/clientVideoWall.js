"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, Play, X } from "lucide-react";

// Client video testimonials (YouTube Shorts, 9:16):
//  - The cards are plain pictures — nothing from YouTube loads until a
//    visitor taps one, so five videos cost the page about 150KB of images
//    instead of five heavy players.
//  - Wide screens: every card in one aligned row (cards of one height; the
//    count per row follows how many videos there are, a short last row centred). Tablets and phones: a swipe row.
//  - Tapping a card opens a theatre player on the page: the video plays
//    straight away (YouTube's privacy-enhanced player), ← / → (or the
//    arrow buttons) go to the previous / next client, Esc closes it, and
//    closing stops the video.
// `items`: { id, name, role, cover } (lib/clientVideos.js).
const GAP_REM = 1;
// how many cards sit side by side, so a row is never left with one on its own:
// wide screens (xl) up to 6 across, laptops (lg) up to 5 (6 become 3 + 3),
// else 4 across with a centred short last row
const acrossXl = (n) => (n <= 6 ? Math.max(n, 1) : 4);
const acrossLg = (n) => (n <= 5 ? Math.max(n, 1) : n === 6 ? 3 : 4);
const widthFor = (k) => `calc((100% - ${(k - 1) * GAP_REM}rem) / ${k})`;

export default function ClientVideoWall({ items }) {
  const [open, setOpen] = useState(null); // index of the video being watched
  const dialog = useRef(null);
  const closeBtn = useRef(null);
  const n = items.length;

  const go = (step) => setOpen((i) => (i === null ? i : (i + step + n) % n));

  useEffect(() => {
    if (open === null) return;
    if (dialog.current && !dialog.current.open) dialog.current.showModal();
    // keyboard focus on the Close button, not inside the YouTube frame (which
    // swallows keys, and is replaced when the video changes)
    closeBtn.current?.focus();
  }, [open]);

  // ← / → while the player is open (heard on the whole page, so they keep
  // working after the video changes)
  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open === null]);

  const current = open !== null ? items[open] : null;

  return (
    <>
      {/* data-bizzbee-avoid: the chat robot steps aside rather than sitting on a play button */}
      <ul
        data-bizzbee-avoid
        className="reveal-stagger no-scrollbar -mx-6 mt-12 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-6 px-6 pb-2 md:mt-16 lg:mx-0 lg:flex-wrap lg:justify-center lg:gap-4 lg:overflow-visible lg:px-0 lg:pb-0"
        style={{ "--card-lg": widthFor(acrossLg(n)), "--card-xl": widthFor(acrossXl(n)) }}
      >
        {items.map((v, i) => (
          <li key={`${v.id}-${i}`} className="@container w-[62%] shrink-0 snap-start sm:w-[38%] md:w-[30%] lg:w-(--card-lg) xl:w-(--card-xl)">
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-haspopup="dialog"
              aria-label={`Play the video testimonial from ${v.name}`}
              className="group relative block aspect-[9/16] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0b0e16] text-left transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/60 hover:shadow-[0_24px_50px_-20px_rgba(64,162,216,0.45)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#40A2D8]"
            >
              {v.cover.startsWith("/") ? (
                <Image src={v.cover} alt="" fill sizes="(min-width: 1280px) 230px, (min-width: 1024px) 18vw, (min-width: 768px) 30vw, 62vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element -- a YouTube frame (i.ytimg.com), used only when no cover was uploaded
                <img src={v.cover} alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
              )}
              {/* darkens the bottom so the name reads on any picture */}
              <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black/90 via-black/55 to-transparent" />
              {/* on a narrow card (six across) the role drops out and the name and play
                  button get smaller, so the text never crowds the video's own captions
                  (the full name and role are in the player) */}
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4 md:p-5 @max-[14rem]:p-3">
                <span className="min-w-0">
                  <span className="font-display block text-lg leading-tight text-white md:text-xl @max-[14rem]:text-[0.95rem]">{v.name}</span>
                  <span className="mt-0.5 block text-xs text-white/70 @max-[14rem]:hidden">{v.role || "Client testimonial"}</span>
                </span>
                <span aria-hidden="true" className="flex h-11 w-11 shrink-0 @max-[14rem]:h-9 @max-[14rem]:w-9 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md transition-colors duration-300 group-hover:border-[#40A2D8] group-hover:bg-[#40A2D8] group-hover:text-black">
                  <Play size={16} fill="currentColor" className="ml-0.5" />
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <dialog
          ref={dialog}
          aria-label={`Video testimonial from ${current.name}`}
          onClose={() => setOpen(null)}
          onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
          className="m-auto max-h-none max-w-none overflow-visible bg-transparent p-0 backdrop:bg-black/85 backdrop:backdrop-blur-sm"
        >
          <div className="flex flex-col items-center gap-4 px-3 py-4 md:flex-row md:gap-6">
            <button type="button" onClick={() => go(-1)} aria-label="Previous video" className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-white hover:bg-white hover:text-black md:flex">
              <ChevronLeft size={20} aria-hidden="true" />
            </button>

            <div className="flex flex-col items-center">
              {/* the player: 9:16, as tall as the screen allows */}
              <div className="aspect-[9/16] h-[min(78vh,720px)] max-h-[calc(100vh-11rem)] overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl shadow-black/60">
                <iframe
                  key={current.id}
                  src={`https://www.youtube-nocookie.com/embed/${current.id}?autoplay=1&rel=0&playsinline=1`}
                  title={`Client Testimonial | ${current.name} | BizzBuzz Creations`}
                  allow="autoplay; encrypted-media; picture-in-picture; web-share; fullscreen"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
              <div className="mt-4 flex w-full items-center justify-between gap-4 text-white">
                <div className="min-w-0">
                  <p className="font-display text-lg leading-tight">{current.name}</p>
                  <p className="text-xs text-white/60">
                    {current.role ? `${current.role} · ` : ""}
                    {open + 1} of {n}
                  </p>
                </div>
                <a href={`https://www.youtube.com/watch?v=${current.id}`} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-1.5 text-sm text-[#40A2D8] hover:text-white">
                  Watch on YouTube <ArrowUpRight size={14} aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
              {/* phones: the arrows sit under the video */}
              <div className="mt-4 flex gap-3 md:hidden">
                <button type="button" onClick={() => go(-1)} aria-label="Previous video" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white active:bg-white active:text-black">
                  <ChevronLeft size={18} aria-hidden="true" />
                </button>
                <button type="button" onClick={() => go(1)} aria-label="Next video" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white active:bg-white active:text-black">
                  <ChevronRight size={18} aria-hidden="true" />
                </button>
              </div>
            </div>

            <button type="button" onClick={() => go(1)} aria-label="Next video" className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-white hover:bg-white hover:text-black md:flex">
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
          <button type="button" ref={closeBtn} onClick={() => dialog.current?.close()} aria-label="Close video" className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/70 text-white hover:bg-white hover:text-black md:right-0 md:top-0">
            <X size={18} aria-hidden="true" />
          </button>
        </dialog>
      )}
    </>
  );
}
