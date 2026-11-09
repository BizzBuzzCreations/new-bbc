"use client";

import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { RICH_TEXT_CLASS, richTextHTML, richTextScopeClass } from "@/components/ui/richText";
import Button from "@/components/brand/button";
import TypedWord from "@/components/brand/typedWord";
import { ClockLine } from "@/components/brand/clock";
import { toneWords } from "@/components/brand/accentText";
import { heroImageSource } from "@/components/sections/homeHero";
import { INDUSTRIES } from "@/lib/siteNav";

// Split the heading's words into (up to) three balanced lines.
function toLines(words, count = 3) {
  const total = words.reduce((n, x) => n + x.w.length + 1, 0);
  const target = total / Math.min(count, Math.max(1, words.length));
  const lines = [[]];
  let len = 0;
  words.forEach((x, i) => {
    const row = lines[lines.length - 1];
    if (row.length && len + (x.w.length + 1) / 2 > target && lines.length < count && words.length - i >= 1) {
      lines.push([]);
      len = 0;
    }
    lines[lines.length - 1].push(x);
    len += x.w.length + 1;
  });
  return lines;
}

// The hero of the homepage and the UK / location pages (DESIGN_DIRECTION.md
// §7): the dashboard's heading set huge in three staggered lines (each rises
// from a mask), the sub-heading and text small beside the buttons, and a line
// that types through the industries we serve. No picture: the type is the
// first paint. Dashboard fields as before: heroHeading (the H1; its last
// third, or the *starred* words, in the muted tone), heroSubheading,
// heroSubtext, heroCtaText / heroCtaLink. Location pages: `locationLine`
// replaces the kicker; `mediaChoice` + `framed` show the dashboard's
// Background Video (or Image) as a wide frame under the headline, with
// `office` ({ label, line }) as its tag. `stats` etc. are accepted for the
// old call sites (numbers have their own section now).
export default function HeroHome({ content, secondaryCta, mediaChoice = false, locationLine = "", framed = false, office = null }) {
  const heading = content?.heroHeading || "India’s Trusted Digital Marketing Agency";
  const subheading = content?.heroSubheading || "Turn Clicks Into Customers With Data-Driven Digital Marketing";
  const subtext =
    content?.heroSubtext ||
    "Looking for a trusted digital marketing agency in Prayagraj that helps your business generate more leads, increase website traffic, and grow revenue? Welcome to BizzBuzz Creations.";
  const ctaText = content?.heroCtaText || "Get a Free Consultation";
  const ctaLink = content?.heroCtaLink || "/contact";
  const chosenVideo = mediaChoice ? content?.heroVideo : "";
  const chosenImage = mediaChoice && !chosenVideo ? content?.heroPosterImage : "";
  const image = heroImageSource(chosenImage);
  const inFrame = framed && Boolean(chosenVideo || chosenImage);
  const lines = toLines(toneWords(heading));

  // a framed video loads only after the page has loaded and the browser is
  // idle (never on Data Saver), so it never competes with the first paint
  const [videoReady, setVideoReady] = useState(false);
  useEffect(() => {
    if (!chosenVideo || navigator.connection?.saveData) return;
    let id;
    const start = () => {
      const run = () => setVideoReady(true);
      id = "requestIdleCallback" in window ? window.requestIdleCallback(run, { timeout: 2500 }) : window.setTimeout(run, 1200);
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => {
      window.removeEventListener("load", start);
      if ("cancelIdleCallback" in window) window.cancelIdleCallback(id);
      else window.clearTimeout(id);
    };
  }, [chosenVideo]);

  return (
    <section className="on-paper relative flex min-h-[92svh] flex-col pb-10 pt-24 md:pt-32">
      <div className="wrap flex flex-1 flex-col">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {locationLine ? (
            <p className="kicker flex items-center gap-2 text-(--fg)">
              <MapPin size={14} aria-hidden="true" />
              {locationLine}
            </p>
          ) : (
            <p className="kicker text-(--mut)">Digital marketing · Software · AI · BPO</p>
          )}
          <ClockLine className="hidden text-(--mut) md:inline-flex" />
        </div>

        <h1 className="font-display mt-8 text-[clamp(3rem,9.6vw,10.5rem)] leading-[0.9] tracking-[-0.055em] md:mt-12">
          <span className="sr-only">{lines.flat().map((x) => x.w).join(" ")}</span>
          <span aria-hidden="true" className="block">
            {lines.map((row, i) => (
              <span key={i} className="-mb-[0.1em] block overflow-hidden pb-[0.1em]" style={{ "--i": i }}>
                <span
                  className="block motion-safe:animate-[line-up_1.1s_var(--ease-out-soft)_both] lg:[margin-left:calc(var(--i)*7.5vw)]"
                  style={{ animationDelay: `${i * 90}ms` }}
                >
                  {row.map((x, k) => (
                    <span key={k} className={x.grey ? "text-current/50" : ""}>
                      {x.w}{" "}
                    </span>
                  ))}
                </span>
              </span>
            ))}
          </span>
        </h1>

        {inFrame && (
          <div className="relative mt-12 aspect-[16/8] overflow-hidden bg-paper-2 md:mt-16">
            {chosenVideo ? (
              videoReady && <video key={chosenVideo} src={chosenVideo} autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden" />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element -- dashboard upload with its own srcset (Cloudinary)
              <img src={image.src} srcSet={image.srcSet} sizes="100vw" alt="" decoding="async" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
            )}
            {office && (
              <p className="kicker absolute bottom-4 left-4 flex items-center gap-2 bg-paper px-3 py-2 text-ink">
                <MapPin size={13} aria-hidden="true" className="shrink-0" />
                {office.label} <span className="text-stone">· {office.line}</span>
              </p>
            )}
          </div>
        )}

        <div className="mt-auto grid gap-8 border-t border-(--line) pt-8 md:mt-12 md:grid-cols-12 md:items-end">
          <p className="kicker text-(--mut) md:col-span-3">
            Working with
            <span className="font-display mt-2 block h-[1.2em] text-[1.6rem] normal-case leading-none tracking-[-0.03em] text-(--fg)">
              <TypedWord words={INDUSTRIES.map((i) => i.label)} />
            </span>
          </p>
          <div className="md:col-span-5">
            <p className="text-lg font-medium leading-snug md:text-xl">{subheading}</p>
            <div className={`mt-3 max-w-md text-[0.9375rem] leading-relaxed text-(--mut) ${RICH_TEXT_CLASS} ${richTextScopeClass(subtext)}`} dangerouslySetInnerHTML={richTextHTML(subtext)} />
          </div>
          <div className="flex flex-wrap gap-3 md:col-span-4">
            <Button href={ctaLink} variant="solid" size="lg">
              {ctaText}
            </Button>
            {secondaryCta?.text && (
              <Button href={secondaryCta.href} variant="outline" size="lg">
                {secondaryCta.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
