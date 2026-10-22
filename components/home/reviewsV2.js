"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import RichText from "@/components/ui/richText";

// Reviews (redesign) — one review at a time, large and quiet (GPG's "Let
// their opinion speak for us"), with prev/next buttons. Every review stays in
// the page (the others are just hidden), so nothing is lost for search.
// On the shared beams background (BeamsBlock). Moves only when asked.
// Mirrored against the FAQ below: heading and carousel on the left, the
// illustration on the right (the FAQ has its illustration on the left). The
// illustration has a fixed size and position, so it doesn't jump when a
// longer or shorter review shows; lazy-loaded; not shown or downloaded on
// phones.
function Stars() {
  return (
    <div className="flex gap-1 text-[#f5b301]" aria-label="5 out of 5 stars" role="img">
      {[...Array(5)].map((_, s) => (
        <svg key={s} className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsV2({ content }) {
  const eyebrow = content?.reviewsEyebrow || "Testimonials";
  const heading = content?.reviewsHeading || "Customer Reviews";
  const subtext = content?.reviewsSubtext || "";
  const items = (content?.testimonials || []).filter((t) => t?.text);
  const [active, setActive] = useState(0);
  if (!items.length) return null;
  const go = (d) => setActive((a) => (a + d + items.length) % items.length);

  return (
    <section id="reviews" className="relative scroll-mt-20 overflow-hidden text-white">
      <div className="reveal-stagger relative mx-auto grid max-w-7xl gap-12 px-6 md:px-10 pt-16 pb-16 md:grid-cols-[3fr_2fr] md:gap-16 md:pt-20 md:pb-20">
        <div>
          <p className="text-sm text-[#40A2D8]">{eyebrow}</p>
          <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
          {subtext && <RichText as="p" text={subtext} className="mt-6 text-base text-white/70" />}

          <div role="group" aria-roledescription="carousel" aria-label="Customer reviews" className="mt-10 md:mt-12">
            <div className="flex items-center justify-between">
              <Stars />
              <div className="flex items-center gap-3">
                <span className="text-sm tabular-nums text-white/60" aria-hidden="true">
                  {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                </span>
                <button type="button" onClick={() => go(-1)} aria-label="Previous review" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 transition-colors hover:border-white hover:bg-white hover:text-black focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#40A2D8]">
                  <ChevronLeft size={18} />
                </button>
                <button type="button" onClick={() => go(1)} aria-label="Next review" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 transition-colors hover:border-white hover:bg-white hover:text-black focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#40A2D8]">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div aria-live="polite">
              {items.map((t, i) => (
                <figure key={i} hidden={i !== active} className="mt-10">
                  <blockquote>
                    <RichText as="p" text={`“${t.text}”`} className="font-display text-2xl leading-snug text-white md:text-3xl" />
                  </blockquote>
                  <figcaption className="mt-8 border-t border-white/10 pt-6">
                    <span className="block text-base text-white">{t.name}</span>
                    <span className="block text-sm text-white/60">{t.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element -- pre-sized 1x / 2x files (30KB / 69KB); next/image would only recompress them */}
        <img
          src="/reviews-feedback-456.webp"
          srcSet="/reviews-feedback-456.webp 456w, /reviews-feedback-912.webp 912w"
          sizes="(min-width: 1280px) 456px, 36vw"
          alt=""
          width={456}
          height={342}
          loading="lazy"
          decoding="async"
          className="hidden h-auto w-full md:mt-16 md:block"
        />
      </div>
    </section>
  );
}
