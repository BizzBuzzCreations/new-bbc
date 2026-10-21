"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { RICH_TEXT_CLASS, richTextHTML, richTextScopeClass } from "@/components/ui/richText";
import Pill from "@/components/home/pill";

const BADGES = [
  { src: "/clutch.png", title: "Clutch", sub: "Verified Partner" },
  { src: "/CDL.png", title: "Google Partner", sub: "Certified" },
  { src: "/GA.png", title: "Google Analytics", sub: "Certified" },
  { src: "/iso.png", title: "ISO", sub: "Certified" },
];

// Homepage hero (redesign). GPG-style: a big, light headline straight on
// the black, two pill buttons, then the hero video in a wide rounded frame
// below the text, with the stats and certification badges in one thin row.
// Same dashboard fields as before (hero heading / subtext / button, stats).
// The headline's last three words are white, the rest soft grey.
export default function HeroV2({ content, secondaryCta }) {
  const heading = content?.heroHeading || "India’s Trusted Digital Marketing Agency";
  const subheading = content?.heroSubheading || "";
  const subtext =
    content?.heroSubtext ||
    "Looking for a trusted digital marketing agency in Prayagraj that helps your business generate more leads, increase website traffic, and grow revenue? Welcome to BizzBuzz Creations.";
  const ctaText = content?.heroCtaText || "Get a Free Consultation";
  const ctaLink = content?.heroCtaLink || "/contact";
  const stats = (content?.zoomStats || []).filter((s) => s?.value).slice(0, 4);

  const words = heading.split(/\s+/);
  const lead = words.slice(0, Math.max(0, words.length - 3)).join(" ");
  const accent = words.slice(-3).join(" ");

  // Same rule as the old hero: the video that matches the screen is only
  // mounted once the page has loaded and the browser is idle (never on
  // Data Saver), so it never competes with the first paint. The poster
  // image shows until then.
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
    <section className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-12 md:pt-28 md:pb-16 short-screen:pt-14">
        <h1 className="font-display max-w-5xl text-[2.6rem] leading-[1.04] sm:text-6xl md:text-7xl">
          {lead && <span className="text-white/55">{lead} </span>}
          <span className="text-white">{accent}</span>
        </h1>

        <div className="mt-8 grid gap-8 md:mt-12 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-xl">
            {subheading && <p className="mb-3 text-lg text-white md:text-xl">{subheading}</p>}
            <div
              className={`text-base leading-relaxed text-white/70 md:text-lg ${RICH_TEXT_CLASS} ${richTextScopeClass(subtext)}`}
              dangerouslySetInnerHTML={richTextHTML(subtext)}
            />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Pill href={ctaLink} variant="solid">{ctaText}</Pill>
            {secondaryCta?.text && <Pill href={secondaryCta.href}>{secondaryCta.text}</Pill>}
          </div>
        </div>
      </div>

      {/* The hero video, framed. Poster first (it's the phone's LCP image). */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-[#0a0a0a] md:aspect-[21/9]">
          {/* eslint-disable-next-line @next/next/no-img-element -- small fixed poster, already optimised (37KB) */}
          <img
            src="/hero-sec-poster.webp"
            alt=""
            width={800}
            height={321}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {mediaMode && (
            <video
              key={mediaMode}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/hero-sec-poster.webp"
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src={mediaMode === "desktop" ? "/hero-sec.webm" : "/hero-sec-mobile.webm"} type="video/webm" />
            </video>
          )}
        </div>
      </div>

      {/* Stats and certifications in one quiet row */}
      <div className="mx-auto max-w-6xl px-6 pt-10 pb-20 md:pb-28">
        <div className="flex flex-col gap-8 border-t border-white/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
          {stats.length > 0 && (
            <dl className="grid grid-cols-3 gap-6 sm:flex sm:gap-14">
              {stats.map(({ value, label }, i) => (
                <div key={`${label}-${i}`} className="flex flex-col-reverse justify-end">
                  <dt className="mt-1 text-xs uppercase tracking-wider text-white/60">{label}</dt>
                  <dd className="font-display text-4xl text-white md:text-5xl">{value}</dd>
                </div>
              ))}
            </dl>
          )}
          <ul aria-label="Certifications" className="grid grid-cols-2 gap-x-6 gap-y-4 sm:flex sm:flex-wrap sm:gap-x-8">
            {BADGES.map((b) => (
              <li key={b.title} className="flex items-center gap-2.5">
                <Image src={b.src} alt={b.title} width={32} height={32} className="h-8 w-8 shrink-0 object-contain" />
                <span className="leading-tight">
                  <span className="block text-sm text-white">{b.title}</span>
                  <span className="block text-xs text-white/60">{b.sub}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
