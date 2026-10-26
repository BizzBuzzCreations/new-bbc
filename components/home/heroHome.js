"use client";

import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { RICH_TEXT_CLASS, richTextHTML, richTextScopeClass } from "@/components/ui/richText";
import Pill from "@/components/home/pill";
import { heroImageSource } from "@/components/sections/homeHero";

const BADGES = [
  { src: "/clutch.png", title: "Clutch", sub: "Verified Partner" },
  { src: "/CDL.png", title: "Google Partner", sub: "Certified" },
  { src: "/GA.png", title: "Google Analytics", sub: "Certified" },
  { src: "/iso.png", title: "ISO", sub: "Certified" },
];

// Homepage hero (redesign of the look only). Same pieces and media rules
// as the shared HomeHero (components/sections/homeHero.js, still used by the
// UK / outside-location pages): the background video on desktop, the
// poster + small video box on phones, the outlined "BizzBuzz Creations"
// wordmark, the dashboard's hero heading / subheading / text / button, the
// stats and the four certification badges. What changes: content lines up
// with the navbar, a small capabilities label, a big light headline whose
// last three words carry the beams' blue→violet, the page's pill buttons,
// and light, larger stats.
// `mediaChoice` (location pages): the background comes from the dashboard
// as an either/or — Background Video if set, otherwise Background Image,
// otherwise just black — instead of the homepage's fixed video.
// `showWordmark` (default on): the outlined "BizzBuzz Creations" wordmark.
// `locationLine` (location pages): replaces the capabilities label with a
// "where we serve" line (also on phones). `skyline` ("london" / "india"):
// the city skyline from the footer, faint along the hero's bottom edge.
// `framed` (location pages): the chosen video / image sits in a rounded
// frame beside the text (under it on phones, after the buttons) instead of
// stretched across the whole screen — an uploaded photo is never blown up
// past its own pixels — with `office` ({ label, line }) as a small tag on it;
// the badges then sit in one quiet row under the hero and the skyline is
// left out, so the hero stays clean.
export default function HeroHome({ content, stats, secondaryCta, mediaChoice = false, showWordmark = true, locationLine = "", skyline = null, framed = false, office = null }) {
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

  const words = heading.split(/\s+/);
  const lead = words.slice(0, Math.max(0, words.length - 3)).join(" ");
  const accent = words.slice(-3).join(" ");

  // Same rule as HomeHero: the video that matches the screen is mounted only
  // after the page has loaded and the browser is idle (never on Data Saver),
  // so it never competes with the first paint.
  const [mediaMode, setMediaMode] = useState(null); // null | "desktop" | "mobile"
  useEffect(() => {
    if (navigator.connection?.saveData) return;
    const mq = window.matchMedia("(min-width: 768px)");
    let idleId;
    const start = () => {
      const run = () => setMediaMode(mq.matches ? "desktop" : "mobile");
      idleId = "requestIdleCallback" in window ? window.requestIdleCallback(run, { timeout: 2500 }) : window.setTimeout(run, 1200);
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => {
      window.removeEventListener("load", start);
      if ("cancelIdleCallback" in window) window.cancelIdleCallback(idleId);
      else window.clearTimeout(idleId);
    };
  }, []);

  return (
    <section className={`relative -mt-14 flex flex-col justify-center overflow-hidden bg-black pt-14 pb-10 text-white md:-mt-[72px] md:pt-[72px] md:pb-16 ${inFrame ? "md:min-h-[88vh]" : "md:min-h-screen"}`}>
      {!mediaChoice && mediaMode === "desktop" && (
        <video autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 hidden h-full w-full bg-black object-cover md:block">
          <source src="/hero-sec.webm" type="video/webm" />
        </video>
      )}
      {!inFrame && chosenVideo && mediaMode === "desktop" && (
        <video key={chosenVideo} src={chosenVideo} autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 hidden h-full w-full bg-black object-cover md:block" />
      )}
      {!inFrame && chosenImage && (
        // eslint-disable-next-line @next/next/no-img-element -- right-sized srcset from heroImageSource (Cloudinary or the Next optimizer)
        <img src={image.src} srcSet={image.srcSet} sizes="100vw" alt="" decoding="async" fetchPriority="high" className="absolute inset-0 hidden h-full w-full bg-black object-cover md:block" />
      )}
      {/* Dark from the left so the text reads; the video shows on the right
          (framed: just a soft blue light behind the frame) */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: inFrame
            ? "radial-gradient(55% 60% at 78% 45%, rgba(11,96,176,0.28), transparent 70%)"
            : "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.88) 38%, rgba(0,0,0,0.55) 68%, rgba(0,0,0,0.35) 100%)",
        }}
      />
      {skyline && !inFrame && (
        // eslint-disable-next-line @next/next/no-img-element -- pre-sized 1x / 2x skyline files (footer's); decorative
        <img
          src={`/skyline-${skyline}-840.webp`}
          srcSet={`/skyline-${skyline}-420.webp 420w, /skyline-${skyline}-840.webp 840w`}
          sizes="(min-width: 768px) 760px, 100vw"
          alt=""
          width={840}
          height={skyline === "london" ? 229 : 151}
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute bottom-0 right-0 z-[1] h-auto w-full max-w-[760px] opacity-45 [mask-image:linear-gradient(to_right,transparent,#000_30%)]"
        />
      )}
      {/* ...and fades out into the black page at the bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 md:h-56"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 50%, #000000 100%)" }}
      />

      <div className={`relative z-10 mx-auto w-full max-w-7xl px-6 pt-4 md:px-10 md:pt-14 ${inFrame ? "grid gap-10 short-screen:pt-10 md:grid-cols-[1.05fr_1fr] md:items-center md:gap-14" : "short-screen:pt-4"}`}>
        <div className="flex max-w-3xl flex-col md:block">
          {locationLine ? (
            <p className="order-first mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs text-white/85 backdrop-blur-sm md:mb-0">
              <MapPin size={14} aria-hidden="true" className="text-[#40A2D8]" />
              {locationLine}
            </p>
          ) : (
            <p className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs text-white/80 backdrop-blur-sm md:inline-flex">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#40A2D8]" />
              Digital Marketing · Web · AI · BPO
            </p>
          )}

          <h1 className={`font-display mt-2 text-[2.4rem] leading-[1.05] sm:text-5xl md:mt-5 xl:text-6xl short-screen:text-5xl ${inFrame ? "text-balance" : ""}`}>
            {lead && <span className="text-white">{lead} </span>}
            <span className="bg-linear-to-r from-[#40A2D8] via-[#7b74f7] to-[#b57cff] bg-clip-text pb-1 text-transparent">{accent}</span>
          </h1>

          {showWordmark && (
            <svg
              className="animated-text order-first mb-3 max-w-[560px] md:order-none md:mt-4 md:mb-0 short-screen:mt-2 short-screen:max-w-[430px]"
              viewBox="0 0 1320 220"
            >
              <text x="0" y="50%" dy=".35em" textAnchor="start">
                BizzBuzz Creations
              </text>
            </svg>
          )}

          <p className="mt-5 hidden text-lg font-medium text-white md:block md:text-xl short-screen:mt-3">{subheading}</p>
          <div
            className={`mt-3 max-w-xl text-base leading-relaxed text-white/70 md:text-lg ${RICH_TEXT_CLASS} ${richTextScopeClass(subtext)}`}
            dangerouslySetInnerHTML={richTextHTML(subtext)}
          />

          {/* Phones: the video as its own box under the text (poster first;
              it's the phone's LCP image), never full-bleed behind it. */}
          {!mediaChoice ? (
            <div className="relative mt-6 aspect-video w-full max-w-sm overflow-hidden rounded-2xl md:hidden">
              {/* eslint-disable-next-line @next/next/no-img-element -- small fixed poster, already optimised (37KB) */}
              <img src="/hero-sec-poster.webp" alt="" width={800} height={321} decoding="async" fetchPriority="high" className="absolute inset-0 h-full w-full bg-black object-cover" />
              {mediaMode === "mobile" && (
                <video autoPlay muted loop playsInline preload="metadata" poster="/hero-sec-poster.webp" className="absolute inset-0 h-full w-full bg-black object-cover">
                  <source src="/hero-sec-mobile.webm" type="video/webm" />
                </video>
              )}
            </div>
          ) : (
            !inFrame && (chosenVideo || chosenImage) && (
              <div className="relative mt-6 aspect-video w-full max-w-sm overflow-hidden rounded-2xl md:hidden">
                {chosenVideo
                  ? mediaMode === "mobile" && (
                      <video key={chosenVideo} src={chosenVideo} autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 h-full w-full bg-black object-cover" />
                    )
                  : (
                    // eslint-disable-next-line @next/next/no-img-element -- right-sized srcset from heroImageSource
                    <img src={image.src} srcSet={image.srcSet} sizes="100vw" alt="" fetchPriority="high" className="absolute inset-0 h-full w-full bg-black object-cover" />
                  )}
              </div>
            )
          )}

          <div className="mt-7 flex flex-wrap items-center gap-3 md:mt-9 short-screen:mt-6">
            <Pill href={ctaLink} variant="solid" className="px-6 py-3 text-base">{ctaText}</Pill>
            {secondaryCta?.text && <Pill href={secondaryCta.href} className="px-6 py-3 text-base">{secondaryCta.text}</Pill>}
          </div>

          {shownStats.length > 0 && (
            <dl
              className="mt-9 grid max-w-xl border-t border-white/10 pt-6 md:mt-12 short-screen:mt-7 short-screen:pt-4"
              style={{ gridTemplateColumns: `repeat(${shownStats.length}, minmax(0, 1fr))` }}
            >
              {shownStats.map(({ value, label }, i) => (
                <div key={`${label}-${i}`} className="flex flex-col-reverse justify-end border-l border-white/10 px-4 first:border-l-0 first:pl-0 sm:px-6">
                  <dt className="mt-1 text-[11px] uppercase leading-snug tracking-wider text-white/60 sm:text-xs">{label}</dt>
                  <dd className="font-display text-3xl text-white md:text-5xl short-screen:text-4xl">{value}</dd>
                </div>
              ))}
            </dl>
          )}

          {!inFrame && (
            <ul aria-label="Certifications" className="mt-6 grid max-w-md grid-cols-2 gap-2 sm:flex sm:max-w-none sm:flex-wrap sm:gap-3 short-screen:mt-4">
              {BADGES.map((b) => (
                <li key={b.title} className="flex min-w-0 items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-1.5 pr-4 backdrop-blur-sm">
                  <Image src={b.src} alt={b.title} width={28} height={28} className="h-7 w-7 shrink-0 rounded-full bg-white/90 object-contain p-0.5" />
                  <span className="leading-tight">
                    <span className="block text-xs font-medium text-white">{b.title}</span>
                    <span className="block text-[11px] text-white/60">{b.sub}</span>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {inFrame && (
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a]">
            {chosenVideo
              ? mediaMode && <video key={chosenVideo} src={chosenVideo} autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 h-full w-full object-cover" />
              : (
                // eslint-disable-next-line @next/next/no-img-element -- right-sized srcset from heroImageSource
                <img src={image.src} srcSet={image.srcSet} sizes="(min-width: 1280px) 600px, (min-width: 768px) 48vw, 100vw" alt="" decoding="async" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
              )}
            {office && (
              <p className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-3.5 py-2 text-xs text-white backdrop-blur-md sm:bottom-4 sm:left-4">
                <MapPin size={14} aria-hidden="true" className="shrink-0 text-[#40A2D8]" />
                <span>
                  {office.label} <span className="text-white/60">· {office.line}</span>
                </span>
              </p>
            )}
          </div>
        )}
      </div>

      {/* framed: the badges as one quiet row under the hero, not crowded
          under the buttons */}
      {inFrame && (
        <div className="relative z-10 mx-auto mt-12 w-full max-w-7xl px-6 md:mt-16 md:px-10">
          <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:gap-8">
            <p className="shrink-0 text-xs uppercase tracking-wider text-white/60">Certified &amp; verified</p>
            <ul aria-label="Certifications" className="grid grid-cols-2 gap-x-6 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-8">
              {BADGES.map((b) => (
                <li key={b.title} className="flex items-center gap-2.5">
                  <Image src={b.src} alt="" width={24} height={24} className="h-6 w-6 shrink-0 rounded-full bg-white/90 object-contain p-0.5" />
                  <span className="text-sm text-white/80">
                    {b.title} <span className="text-white/50">{b.sub}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
