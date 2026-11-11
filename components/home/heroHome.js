"use client";

import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import {
  RICH_TEXT_CLASS,
  richTextHTML,
  richTextScopeClass,
} from "@/components/ui/richText";
import Button from "@/components/brand/button";
import IndustryWheel from "@/components/home/industryWheel";
import HeroField from "@/components/brand/heroField";
import HeroDeck from "@/components/home/heroDeck";
import HeroLayers from "@/components/home/heroLayers";
import { toneWords } from "@/components/brand/accentText";
import { heroImageSource } from "@/components/sections/homeHero";
import Image from "next/image";
import { INDUSTRIES } from "@/lib/siteNav";
import { TRUST_BADGES } from "@/lib/trustBadges";

// Split the heading's words into (up to) three balanced lines.
function toLines(words, count = 3) {
  const total = words.reduce((n, x) => n + x.w.length + 1, 0);
  const target = total / Math.min(count, Math.max(1, words.length));
  const lines = [[]];
  let len = 0;
  words.forEach((x, i) => {
    const row = lines[lines.length - 1];
    if (
      row.length &&
      len + (x.w.length + 1) / 2 > target &&
      lines.length < count &&
      words.length - i >= 1
    ) {
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
export default function HeroHome({
  content,
  secondaryCta,
  mediaChoice = false,
  locationLine = "",
  framed = false,
  office = null,
}) {
  const heading =
    content?.heroHeading || "India’s Trusted Digital Marketing Agency";
  const subheading =
    content?.heroSubheading ||
    "Turn Clicks Into Customers With Data-Driven Digital Marketing";
  const subtext =
    content?.heroSubtext ||
    "Looking for a trusted digital marketing agency in Prayagraj that helps your business generate more leads, increase website traffic, and grow revenue? Welcome to BizzBuzz Creations.";
  const ctaText = content?.heroCtaText || "Get a Free Consultation";
  const ctaLink = content?.heroCtaLink || "/contact";
  const chosenVideo = mediaChoice ? content?.heroVideo : "";
  const chosenImage =
    mediaChoice && !chosenVideo ? content?.heroPosterImage : "";
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
      id =
        "requestIdleCallback" in window
          ? window.requestIdleCallback(run, { timeout: 2500 })
          : window.setTimeout(run, 1200);
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
    <section className="on-paper relative isolate flex min-h-[min(92svh,860px)] md:min-h-0 flex-col overflow-x-clip pb-6 pt-24 md:pt-[6.5rem] md:pb-8">
      <HeroField className="hero-parallax" />
      <div className="intro-settle wrap pointer-events-none relative z-10 flex flex-1 flex-col [&>*]:pointer-events-auto">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {locationLine ? (
            <p className="kicker flex items-center gap-2 text-(--fg)">
              <MapPin size={14} aria-hidden="true" />
              {locationLine}
            </p>
          ) : (
            <p className="kicker text-(--mut)">
              Digital marketing · Software · AI · BPO
            </p>
          )}
          <p className="kicker hidden text-(--mut) md:block lg:hidden">
            Prayagraj · Kanpur · London
          </p>
        </div>

        <h1 className="font-display mt-6 text-[clamp(3rem,min(9.6vw,17svh),10.5rem)] lg:text-[clamp(3rem,min(7.8vw,12.8svh),8.25rem)] leading-[0.9] tracking-[-0.055em] md:mt-8">
          <span className="sr-only">
            {lines
              .flat()
              .map((x) => x.w)
              .join(" ")}
          </span>
          <span aria-hidden="true" className="block">
            {lines.map((row, i) => (
              <span
                key={i}
                className="hero-split -mb-[0.1em] block overflow-hidden pb-[0.1em]"
                style={{ "--i": i, "--dir": i % 2 ? 1 : -1 }}
              >
                <span className="hero-line block lg:[margin-left:calc(var(--i)*7.5vw)]">
                  {row.map((x, k) => (
                    <span key={k} className={x.grey ? "text-current/65" : ""}>
                      {x.w}{" "}
                    </span>
                  ))}
                </span>
              </span>
            ))}
          </span>
        </h1>

        <div
          data-lg-off
          className={`glass glass-calm relative grid gap-5 rounded-[28px] p-5 md:grid-cols-12 md:items-end md:gap-8 md:p-6 xl:grid-cols-[12.5rem_minmax(0,1fr)_auto] xl:gap-9 xl:px-7 xl:py-5 ${inFrame ? "mt-8" : "mt-auto md:mt-6"}`}
        >
          <div className="md:col-span-4 lg:col-span-3 xl:col-span-1 xl:border-r xl:border-(--fg)/10 xl:pr-4">
            <IndustryWheel items={INDUSTRIES} />
          </div>
          <div className="md:col-span-8 lg:col-span-5 xl:col-span-1">
            <p className="text-balance text-base font-medium leading-snug tracking-[-0.01em] md:text-lg">
              {subheading}
            </p>
            <div
              className={`mt-2.5 line-clamp-3 max-w-[46rem] text-pretty text-[0.9375rem] leading-relaxed text-(--mut) md:line-clamp-none ${RICH_TEXT_CLASS} ${richTextScopeClass(subtext)}`}
              dangerouslySetInnerHTML={richTextHTML(subtext)}
            />
          </div>
          <div className="flex flex-wrap gap-3 md:col-span-12 lg:col-span-4 xl:col-span-1 xl:flex-nowrap">
            <Button href={ctaLink} data-bizzbee-avoid variant="solid" size="lg">
              {ctaText}
            </Button>
            {secondaryCta?.text && (
              <Button
                href={secondaryCta.href}
                data-bizzbee-avoid
                variant="glass"
                size="lg"
              >
                {secondaryCta.text}
              </Button>
            )}
          </div>
        </div>

        {/* proof for "India's Trusted": the real certifications, right under the buttons */}
        <ul
          aria-label="Certifications and partnerships"
          className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 px-1 sm:flex sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2.5"
        >
          <li className="kicker col-span-2 text-(--mut) sm:col-span-1">
            Recognised by
          </li>
          {TRUST_BADGES.map((b) => (
            <li key={b.title} className="flex items-center gap-2.5">
              <Image
                src={b.src}
                alt=""
                width={28}
                height={28}
                className="h-7 w-7 rounded-full bg-white object-contain p-0.5 ring-1 ring-(--fg)/10"
              />
              <span className="text-sm leading-tight">
                <span className="block font-medium">{b.title}</span>
                <span className="text-xs text-(--mut)">{b.sub}</span>
              </span>
            </li>
          ))}
        </ul>

        {/* the stack's cards as a swipe row where the 3D stack is not shown */}
        <HeroLayers />

        {inFrame && (
          <div className="relative mt-8 aspect-[16/8] overflow-hidden bg-paper-2 md:mt-10">
            {chosenVideo ? (
              videoReady && (
                <video
                  key={chosenVideo}
                  src={chosenVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
                />
              )
            ) : (
              // eslint-disable-next-line @next/next/no-img-element -- dashboard upload with its own srcset (Cloudinary)
              <img
                src={image.src}
                srcSet={image.srcSet}
                sizes="100vw"
                alt=""
                decoding="async"
                loading="eager"
                fetchPriority="high"
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
            {office && (
              <p className="kicker absolute bottom-4 left-4 flex items-center gap-2 bg-paper px-3 py-2 text-ink">
                <MapPin size={13} aria-hidden="true" className="shrink-0" />
                {office.label}{" "}
                <span className="text-stone">· {office.line}</span>
              </p>
            )}
          </div>
        )}
      </div>
      <HeroDeck />
    </section>
  );
}
