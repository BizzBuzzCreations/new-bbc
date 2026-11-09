"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { RICH_TEXT_CLASS, richTextHTML, richTextScopeClass } from "@/components/ui/richText";
import Button from "@/components/brand/button";
import AccentText from "@/components/brand/accentText";
import SignalField from "@/components/brand/signalField";
import { ClockLine } from "@/components/brand/clock";
import { heroImageSource } from "@/components/sections/homeHero";

const BADGES = [
  { src: "/clutch.png", title: "Clutch", sub: "Verified partner" },
  { src: "/CDL.png", title: "Google Partner", sub: "Certified" },
  { src: "/GA.png", title: "Google Analytics", sub: "Certified" },
  { src: "/iso.png", title: "ISO", sub: "Certified" },
];

// The hero of the homepage and the UK / location pages (rebuild,
// DESIGN_DIRECTION.md §9). The headline is the first paint: no background
// video — the Signal Field (canvas) is the visual, steered by the pointer.
// Dashboard fields as before: heroHeading (the H1; its last word, or a
// *starred* word, in the accent serif), heroSubheading, heroSubtext,
// heroCtaText / heroCtaLink; `stats` (the zoomStats list).
// Location pages: `locationLine` replaces the capabilities label;
// `mediaChoice` + `framed` show the dashboard's Background Video (or Image)
// in a frame beside the text with `office` ({ label, line }) as its tag.
// `showWordmark` / `skyline` are accepted for compatibility (not drawn).
export default function HeroHome({ content, stats, secondaryCta, mediaChoice = false, locationLine = "", framed = false, office = null }) {
  const heading = content?.heroHeading || "India’s Trusted Digital Marketing Agency";
  const subheading = content?.heroSubheading || "Turn Clicks Into Customers With Data-Driven Digital Marketing";
  const subtext =
    content?.heroSubtext ||
    "Looking for a trusted digital marketing agency in Prayagraj that helps your business generate more leads, increase website traffic, and grow revenue? Welcome to BizzBuzz Creations.";
  const ctaText = content?.heroCtaText || "Get a Free Consultation";
  const ctaLink = content?.heroCtaLink || "/contact";
  const shownStats = (stats || []).filter((s) => s?.value).slice(0, 4);
  const chosenVideo = mediaChoice ? content?.heroVideo : "";
  const chosenImage = mediaChoice && !chosenVideo ? content?.heroPosterImage : "";
  const image = heroImageSource(chosenImage);
  const inFrame = framed && Boolean(chosenVideo || chosenImage);

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
    <section className="grain relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink pb-10 pt-28 text-white md:pb-14 md:pt-36">
      <div className="absolute inset-0 -z-10">
        <SignalField />
      </div>
      {/* keeps the text side calm over the field */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(70%_80%_at_18%_45%,rgba(10,10,11,0.92),rgba(10,10,11,0.35)_60%,transparent)]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-b from-transparent to-ink" />

      <div className="wrap flex flex-1 flex-col">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {locationLine ? (
            <p className="kicker inline-flex items-center gap-2 text-white/85">
              <MapPin size={14} aria-hidden="true" className="text-buzz" />
              {locationLine}
            </p>
          ) : (
            <p className="kicker text-fog">
              <span className="text-buzz">[BBC]</span> Digital marketing · Software · AI · BPO
            </p>
          )}
          <ClockLine className="hidden text-fog md:inline-flex" />
        </div>

        <div className={`mt-10 flex-1 md:mt-16 ${inFrame ? "grid gap-12 lg:grid-cols-12 lg:items-center" : ""}`}>
          <div className={inFrame ? "lg:col-span-7" : ""}>
            <h1 className={`font-display text-balance ${inFrame ? "text-[clamp(2.75rem,6vw,6rem)]" : "max-w-[15ch] text-[clamp(3rem,8.4vw,8.5rem)]"} leading-[0.92] motion-safe:animate-[hero-rise_1s_var(--ease-out-soft)_both]`}>
              <AccentText text={heading} />
            </h1>
            <div className="mt-8 grid gap-8 md:mt-12 md:grid-cols-12 md:items-end">
              <div className={`${inFrame ? "md:col-span-12" : "md:col-span-6"} motion-safe:animate-[hero-rise_1s_0.12s_var(--ease-out-soft)_both]`}>
                <p className="text-xl font-medium leading-snug text-white md:text-2xl">{subheading}</p>
                <div
                  className={`mt-4 max-w-xl text-base leading-relaxed text-fog md:text-lg ${RICH_TEXT_CLASS} ${richTextScopeClass(subtext)}`}
                  dangerouslySetInnerHTML={richTextHTML(subtext)}
                />
              </div>
              <div className={`${inFrame ? "md:col-span-12" : "md:col-span-5 md:col-start-8 md:justify-self-end"} flex flex-wrap gap-3 motion-safe:animate-[hero-rise_1s_0.22s_var(--ease-out-soft)_both]`}>
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

          {inFrame && (
            <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-white/10 bg-ink-2 lg:col-span-5">
              {chosenVideo ? (
                videoReady && <video key={chosenVideo} src={chosenVideo} autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden" />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element -- dashboard upload with its own srcset (Cloudinary)
                <img src={image.src} srcSet={image.srcSet} sizes="(min-width: 1024px) 40vw, 100vw" alt="" decoding="async" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
              )}
              {office && (
                <p className="kicker absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-white/15 bg-ink/70 px-3.5 py-2 text-white backdrop-blur-md">
                  <MapPin size={13} aria-hidden="true" className="shrink-0 text-buzz" />
                  {office.label} <span className="text-fog">· {office.line}</span>
                </p>
              )}
            </div>
          )}
        </div>

        <div className="mt-14 grid gap-8 border-t border-white/10 pt-6 md:mt-20 lg:grid-cols-12 lg:items-center">
          {shownStats.length > 0 && (
            <dl className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 lg:col-span-7">
              {shownStats.map(({ value, label }, i) => (
                <div key={`${label}-${i}`} className="flex flex-col-reverse justify-end border-white/10 pr-4 sm:border-l sm:pl-5 sm:first:border-l-0 sm:first:pl-0">
                  <dt className="kicker mt-2 text-fog">{label}</dt>
                  <dd className="font-display text-4xl md:text-5xl">{value}</dd>
                </div>
              ))}
            </dl>
          )}
          <ul aria-label="Certifications" className={`flex flex-wrap gap-2 ${shownStats.length ? "lg:col-span-5 lg:justify-end" : "lg:col-span-12"}`}>
            {BADGES.map((b) => (
              <li key={b.title} className="flex items-center gap-2.5 rounded-full border border-white/10 bg-ink/50 py-1.5 pl-1.5 pr-4 backdrop-blur-sm">
                <Image src={b.src} alt="" width={28} height={28} className="h-7 w-7 shrink-0 rounded-full bg-white object-contain p-0.5" />
                <span className="text-xs leading-tight">
                  <span className="block font-medium text-white">{b.title}</span>
                  <span className="block text-fog">{b.sub}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
