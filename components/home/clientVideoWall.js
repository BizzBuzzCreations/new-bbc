"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, Play } from "lucide-react";

// Client video testimonials (YouTube Shorts) as a "phone stage". They are
// phone-recorded vertical videos, so each one sits in a phone frame on an
// arc: the client you're on is in the middle — large, upright, lit by a soft
// glow taken from their own video — and the others fan out to the sides,
// smaller and turned toward the centre.
//  - Bring someone to the centre by clicking their phone, swiping / dragging,
//    the arrows, the keyboard's ← / →, or their name below.
//  - Tap the centre phone and the video plays inside it (YouTube's
//    privacy-enhanced player). Until then nothing from YouTube loads — the
//    phones are small pictures (~150KB for all of them). Moving to another
//    client removes the player, which stops the video.
//  - Nothing moves on its own; with reduced motion the phones jump instead
//    of gliding.
// `items`: { id, name, role, cover } (lib/clientVideos.js).
const STEP = 0.62; // distance between neighbouring phone centres, in phone widths
const SHOWN = 2; // how many phones are visible on each side of the centre

export default function ClientVideoWall({ items }) {
  const n = items.length;
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const drag = useRef({ x: 0, moved: false, down: false });
  const half = Math.floor(n / 2);

  const select = (i) => {
    setActive(((i % n) + n) % n);
    setPlaying(false);
  };
  const go = (step) => select(active + step);
  // signed distance from the centre phone, going the short way round
  const dist = (i) => ((i - active + n + half) % n) - half;
  const current = items[active];

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    }
  };
  // swipe / drag: a horizontal move of more than 40px changes client; the
  // click that follows a drag is ignored
  const onPointerDown = (e) => {
    drag.current = { x: e.clientX, moved: false, down: true };
  };
  const onPointerUp = (e) => {
    const d = drag.current;
    if (!d.down) return;
    d.down = false;
    const dx = e.clientX - d.x;
    if (Math.abs(dx) > 40) {
      d.moved = true;
      go(dx < 0 ? 1 : -1);
    }
  };

  return (
    <div data-bizzbee-avoid role="group" aria-roledescription="carousel" aria-label="Client video testimonials" onKeyDown={onKeyDown} className="mt-10 md:mt-14">
      {/* the stage */}
      <div className="relative">
        {/* a soft glow from the video you are on */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-1/2 h-[130%] -translate-y-1/2 [mask-image:radial-gradient(closest-side,#000_35%,transparent_100%)]">
          {/* eslint-disable-next-line @next/next/no-img-element -- the cover, blurred into a glow; decorative */}
          <img
            key={current.id}
            src={current.cover}
            alt=""
            className="absolute left-1/2 top-1/2 h-full w-[60%] -translate-x-1/2 -translate-y-1/2 scale-125 object-cover opacity-40 blur-[90px] motion-safe:animate-[glow-in_0.9s_ease-out_both]"
          />
        </div>

        <div
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => (drag.current.down = false)}
          className="relative mx-auto h-[calc(var(--w)*1.78+3rem)] touch-pan-y select-none overflow-x-clip [--w:clamp(190px,64vw,300px)] sm:[--w:clamp(200px,34vw,300px)] lg:[--w:clamp(220px,22vw,300px)] [perspective:1400px]"
        >
          {items.map((v, i) => {
            const d = dist(i);
            const a = Math.abs(d);
            const visible = a <= SHOWN;
            const center = d === 0;
            return (
              <div
                key={`${v.id}-${i}`}
                aria-hidden={visible ? undefined : "true"}
                className="absolute left-1/2 top-1/2 w-(--w) transition-[transform,opacity] duration-500 ease-out motion-reduce:transition-none"
                style={{
                  transform: `translate(-50%, -50%) translateX(calc(var(--w) * ${d * STEP})) scale(${1 - a * 0.12}) rotateY(${-d * 14}deg)`,
                  opacity: visible ? 1 - a * 0.22 : 0,
                  zIndex: 20 - a,
                  pointerEvents: visible ? "auto" : "none",
                }}
              >
                {/* the phone */}
                <div className="rounded-[2.3rem] bg-linear-to-b from-white/35 via-white/10 to-white/25 p-[6px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)]">
                  <div className="relative aspect-[9/16] overflow-hidden rounded-[1.85rem] bg-black">
                    {center && playing ? (
                      <iframe
                        key={v.id}
                        src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0&playsinline=1`}
                        title={`Client Testimonial | ${v.name} | BizzBuzz Creations`}
                        allow="autoplay; encrypted-media; picture-in-picture; web-share; fullscreen"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="absolute inset-0 h-full w-full"
                      />
                    ) : (
                      <button
                        type="button"
                        tabIndex={visible ? 0 : -1}
                        onClick={() => {
                          if (drag.current.moved) {
                            drag.current.moved = false;
                            return;
                          }
                          if (center) setPlaying(true);
                          else select(i);
                        }}
                        aria-label={center ? `Play the video testimonial from ${v.name}` : `Show the video from ${v.name}`}
                        className="group absolute inset-0 block text-left focus-visible:outline-3 focus-visible:-outline-offset-4 focus-visible:outline-[#40A2D8]"
                      >
                        {v.cover.startsWith("/") ? (
                          <Image src={v.cover} alt="" fill sizes="(min-width: 1024px) 300px, (min-width: 640px) 34vw, 64vw" draggable={false} className="object-cover" />
                        ) : (
                          // eslint-disable-next-line @next/next/no-img-element -- a YouTube frame (i.ytimg.com), used only when no cover was uploaded
                          <img src={v.cover} alt="" loading="lazy" decoding="async" draggable={false} className="absolute inset-0 h-full w-full object-cover" />
                        )}
                        <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/85 to-transparent" />
                        {center ? (
                          <span aria-hidden="true" className="absolute left-1/2 top-[58%] flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-white/20 text-white backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#40A2D8] group-hover:text-black">
                            <Play size={24} fill="currentColor" className="ml-1" />
                          </span>
                        ) : (
                          <span aria-hidden="true" className="font-display absolute inset-x-0 bottom-3 px-3 text-center text-sm text-white">
                            {v.name}
                          </span>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* who you are watching */}
      <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center gap-5 text-center md:mt-10">
        <div aria-live="polite">
          <p className="font-display text-3xl leading-tight text-white md:text-4xl">{current.name}</p>
          <p className="mt-2 text-sm text-white/65">
            {current.role ? `${current.role} · ` : "Client testimonial · "}
            {active + 1} of {n}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {n > 1 && (
            <button type="button" onClick={() => go(-1)} aria-label="Previous client" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-white hover:bg-white hover:text-black focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#40A2D8]">
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
          )}
          <a href={`https://www.youtube.com/watch?v=${current.id}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-5 py-2.5 text-sm text-white transition-colors hover:border-[#40A2D8] hover:text-[#40A2D8] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#40A2D8]">
            Watch on YouTube <ArrowUpRight size={14} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          {n > 1 && (
            <button type="button" onClick={() => go(1)} aria-label="Next client" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-white hover:bg-white hover:text-black focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#40A2D8]">
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          )}
        </div>

        {/* jump to anyone */}
        {n > 1 && (
          <ul className="flex flex-wrap justify-center gap-2" aria-label="Choose a client">
            {items.map((v, i) => (
              <li key={`${v.id}-chip-${i}`}>
                <button
                  type="button"
                  onClick={() => select(i)}
                  aria-current={i === active ? "true" : undefined}
                  className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#40A2D8] ${i === active ? "border-[#0B60B0] bg-[#0B60B0] text-white" : "border-white/20 text-white/75 hover:border-white/50 hover:text-white"}`}
                >
                  {v.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
