"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import RichText from "@/components/ui/richText";
import Kicker from "@/components/brand/kicker";
import AccentText from "@/components/brand/accentText";

// Customer reviews (rebuild): a paper section. One big quote at a time with
// the reviewer under it; beside it, the index of every reviewer — click one
// (or use the arrows / ← → keys) to read theirs. Never moves on its own.
// Same dashboard fields as before (reviewsEyebrow, reviewsHeading,
// reviewsSubtext and the testimonials list). Renders nothing without reviews.
export default function ReviewsV2({ content }) {
  const eyebrow = content?.reviewsEyebrow || "Testimonials";
  const heading = content?.reviewsHeading || "Customer Reviews";
  const subtext = content?.reviewsSubtext || "";
  const items = (content?.testimonials || []).filter((t) => t?.text);
  const [active, setActive] = useState(0);
  if (!items.length) return null;
  const go = (d) => setActive((a) => (a + d + items.length) % items.length);
  const t = items[active];
  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") go(1);
    if (e.key === "ArrowLeft") go(-1);
  };
  const arrow = "flex h-12 w-12 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white";

  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="relative scroll-mt-20 bg-paper text-ink">
      <div className="wrap grid gap-14 py-24 md:py-40 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-8" role="group" aria-roledescription="carousel" aria-label="Customer reviews" onKeyDown={onKeyDown}>
          <Kicker no="07" tone="dark">
            {eyebrow}
          </Kicker>
          <h2 id="reviews-heading" className="font-display mt-6 text-[clamp(2.2rem,4.4vw,4rem)] leading-[0.98]">
            <AccentText text={heading} />
          </h2>
          {subtext && <RichText as="p" text={subtext} className="mt-5 max-w-xl text-lg text-stone" />}

          <figure className="mt-14 md:mt-20" aria-live="polite">
            <p className="flex gap-1 text-ink" role="img" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, s) => (
                <svg key={s} className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" />
                </svg>
              ))}
            </p>
            <blockquote key={active} className="mt-8 motion-safe:animate-[hero-rise_0.6s_var(--ease-out-soft)_both]">
              <RichText as="p" text={`“${t.text}”`} className="font-display text-balance text-[clamp(1.6rem,2.8vw,2.6rem)] leading-[1.15]" />
            </blockquote>
            <figcaption className="mt-10 flex flex-wrap items-end justify-between gap-6 border-t border-ink/15 pt-6">
              <span>
                <span className="block text-lg font-medium">{t.name}</span>
                {t.role && <span className="block text-stone">{t.role}</span>}
              </span>
              <span className="flex items-center gap-3">
                <span className="kicker tabular-nums text-stone" aria-hidden="true">
                  {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                </span>
                <button type="button" onClick={() => go(-1)} aria-label="Previous review" className={arrow}>
                  <ArrowLeft aria-hidden="true" size={18} />
                </button>
                <button type="button" onClick={() => go(1)} aria-label="Next review" className={arrow}>
                  <ArrowRight aria-hidden="true" size={18} />
                </button>
              </span>
            </figcaption>
          </figure>
        </div>

        <div className="lg:col-span-3 lg:col-start-10 lg:pt-28">
          <p className="kicker mb-4 text-stone">All reviews</p>
          <ol className="border-t border-ink/15">
            {items.map((r, i) => (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-current={i === active ? "true" : undefined}
                  className={`flex w-full items-baseline gap-3 border-b border-ink/15 py-3 text-left transition-colors ${i === active ? "text-ink" : "text-stone hover:text-ink"}`}
                >
                  <span className="kicker w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <span className={i === active ? "font-medium" : ""}>{r.name}</span>
                  {i === active && <span aria-hidden="true" className="ml-auto h-2 w-2 shrink-0 self-center rounded-full bg-ink" />}
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
