"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import RichText from "@/components/ui/richText";
import Kicker from "@/components/brand/kicker";

// Customer reviews: one huge quote at a time on ink, the reviewer under it;
// beside it the list of everyone who wrote — press a name (or the arrows,
// or ← →) to read theirs. Never moves on its own. Dashboard fields as before
// (reviewsEyebrow, reviewsHeading, reviewsSubtext, testimonials).
export default function ReviewsV2({ content }) {
  const eyebrow = content?.reviewsEyebrow || "Testimonials";
  const heading = content?.reviewsHeading || "Customer Reviews";
  const subtext = content?.reviewsSubtext || "";
  const items = (content?.testimonials || []).filter((t) => t?.text);
  const [active, setActive] = useState(0);
  if (!items.length) return null;
  const go = (d) => setActive((a) => (a + d + items.length) % items.length);
  const t = items[active];
  const arrow =
    "glass glass-pop relative flex h-12 w-12 items-center justify-center rounded-full text-(--fg)";

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="band-open on-ink scroll-mt-10"
    >
      <div
        className="wrap grid gap-16 py-7 md:py-10 lg:grid-cols-12 lg:gap-10"
        role="group"
        aria-roledescription="carousel"
        aria-label="Customer reviews"
        onKeyDown={(e) =>
          e.key === "ArrowRight" ? go(1) : e.key === "ArrowLeft" ? go(-1) : null
        }
      >
        <div className="lg:col-span-9">
          <Kicker no="06" of="08">
            {eyebrow}
          </Kicker>
          <h2 id="reviews-heading" className="kicker mt-3 text-(--mut)">
            {heading}
            {subtext ? ` — ${subtext}` : ""}
          </h2>
          <figure className="mt-12 md:mt-16" aria-live="polite">
            <blockquote
              key={active}
              className="motion-safe:animate-[fade-up_0.7s_var(--ease-out-soft)_both]"
            >
              <RichText
                as="p"
                text={`“${t.text}”`}
                className="font-display text-balance text-[clamp(1.9rem,4.4vw,4.5rem)] leading-[1.04] tracking-[-0.04em]"
              />
            </blockquote>
            <figcaption className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t border-(--line) pt-6">
              <span>
                <span className="block text-lg font-medium">{t.name}</span>
                {t.role && (
                  <span className="kicker mt-1 block text-(--mut)">
                    {t.role}
                  </span>
                )}
              </span>
              <span className="flex items-center gap-3">
                <span
                  className="kicker tabular-nums text-(--mut)"
                  aria-hidden="true"
                >
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(items.length).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous review"
                  className={arrow}
                >
                  <ArrowLeft aria-hidden="true" size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next review"
                  className={arrow}
                >
                  <ArrowRight aria-hidden="true" size={18} />
                </button>
              </span>
            </figcaption>
          </figure>
        </div>
        <div className="lg:col-span-3 lg:pt-12">
          <ol className="glass glass-calm relative rounded-3xl px-4 py-2 [&>li:last-child_button]:border-b-0">
            {items.map((r, i) => (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-current={i === active ? "true" : undefined}
                  className={`flex w-full items-baseline gap-3 border-b border-(--line) py-3 text-left transition-colors ${i === active ? "text-(--fg)" : "text-(--mut) hover:text-(--fg)"}`}
                >
                  <span className="kicker w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{r.name}</span>
                  {i === active && (
                    <span
                      aria-hidden="true"
                      className="ml-auto h-1.5 w-1.5 shrink-0 self-center rounded-full bg-buzz"
                    />
                  )}
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
