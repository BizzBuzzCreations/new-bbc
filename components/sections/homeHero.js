"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { RICH_TEXT_CLASS, richTextHTML, richTextScopeClass } from "@/components/ui/richText";
import Image, { getImageProps } from "next/image";
import { optimizedImageUrl, imageSrcSet } from "@/lib/getFeaturedImage";

const reveal = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

// The dashboard-chosen hero image (Outside Location pages) is a raw
// Cloudinary upload — the UK page's was a 2.1MB PNG, its mobile LCP
// element (~26s LCP on a throttled phone). Both copies (desktop
// full-bleed + mobile box) get the same right-sized WebP/AVIF srcset and
// sizes, so the browser resolves them to one URL and downloads it once.
const HERO_IMAGE_WIDTHS = [640, 828, 1200, 1920];

// Cloudinary uploads are resized by Cloudinary; a local /public path (e.g.
// the field's default, /image-1.jpg — 3.4MB) goes through Next's image
// optimizer instead, which the plain <img> otherwise bypassed.
function heroImageSource(src) {
  if (!src) return {};
  if (src.includes("res.cloudinary.com")) {
    return {
      src: optimizedImageUrl(src, 1920),
      srcSet: imageSrcSet(src, HERO_IMAGE_WIDTHS),
    };
  }
  if (src.startsWith("/")) {
    const { props } = getImageProps({ src, alt: "", width: 1920, height: 1080, sizes: "100vw" });
    return { src: props.src, srcSet: props.srcSet };
  }
  return { src };
}

// `showWordmark` — the big outlined "BizzBuzz Creations" SVG text below
// the heading. Defaults on (the real homepage); the Outside Location page
// (app/(main)/en-uk/digital-marketing-services-in-uk/page.js) passes
// `false` to drop it there only.
//
// `heroMediaChoice` — off by default, which keeps the real homepage's
// hero exactly as it's always been: a fixed local video file, with the
// dashboard's Background Poster Image/Video fields not actually read
// here at all. The Outside Location page passes `true`, which makes this
// read those two fields for real, as an either/or choice instead of a
// "poster shown before the video" pair: content.heroVideo wins if it's
// set (a plain <video>, not the homepage's hardcoded file); otherwise
// content.heroPosterImage shows as a plain background image; if neither
// is set, it's just the section's own black background.
// `separated` — off by default. The real homepage now passes it too (see
// app/(main)/page.js), same as the Outside Location page: fades the
// hero's background out to black at the bottom edge instead of ending in
// a hard line right against the next section's own photo (About Us).
// `stats` — optional [{ value, label }] row under the buttons (homepage
// only; editable as "Stats under the hero buttons").
// `secondaryCta` — optional { text, href } quieter link next to the main
// button (the homepage points it at its own services list).
// `showBadges` — the four certification badges (Clutch, Google Partner,
// Google Analytics, ISO — the same ones as the Recognitions section) as a
// compact row under the stats: one line on desktop, 2×2 on phones. Homepage
// only; the longer descriptions stay in the Recognitions section.
export default function HomeHero({
  content,
  showWordmark = true,
  heroMediaChoice = false,
  separated = false,
  // The soft light-blue glow at the top-left of the scrim — on by default
  // (UK page keeps it); the real homepage passes false to drop it.
  showGlow = true,
  stats,
  secondaryCta,
  showBadges = false,
}) {
  const heading = content?.heroHeading || "India’s Trusted Digital Marketing Agency";
  const subheading =
    content?.heroSubheading || "Turn Clicks Into Customers With Data-Driven Digital Marketing";
  const subtext =
    content?.heroSubtext ||
    "Looking for a trusted digital marketing agency in Prayagraj that helps your business generate more leads, increase website traffic, and grow revenue? Welcome to BizzBuzz Creations.";
  const ctaText = content?.heroCtaText || "Get a Free Consultation";
  const ctaLink = content?.heroCtaLink || "/contact";
  const chosenVideo = heroMediaChoice ? content?.heroVideo : "";
  const chosenImage = heroMediaChoice && !chosenVideo ? content?.heroPosterImage : "";
  const heroImage = heroImageSource(chosenImage);

  // Mobile PageSpeed: the page used to render BOTH <video> elements (the
  // desktop one is only display:none on phones, which still fetches it) and
  // start them during the initial load, competing with the LCP text/CSS/JS.
  // Now the video that matches the viewport is mounted only after the page
  // has finished loading (and is skipped entirely on Data Saver).
  const [mediaMode, setMediaMode] = useState(null); // null | "desktop" | "mobile"
  useEffect(() => {
    if (navigator.connection?.saveData) return;
    const mq = window.matchMedia("(min-width: 768px)");
    let idleId;
    const start = () => {
      const run = () => setMediaMode(mq.matches ? "desktop" : "mobile");
      idleId =
        "requestIdleCallback" in window
          ? window.requestIdleCallback(run, { timeout: 2500 })
          : window.setTimeout(run, 1200);
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
    <>
      <div className="relative overflow-hidden md:min-h-screen text-white flex flex-col justify-center pb-10 md:pb-16 -mt-14 pt-14 md:-mt-[72px] md:pt-[72px] bg-black">
        {/* Background video — desktop/tablet only. On mobile there's no
            room for a full-bleed video behind the text without it either
            looking cramped or getting cropped oddly, so mobile gets a
            plain black background instead (below) rather than a second,
            duplicate download of the same large file.

            preload="metadata" (not "auto", and no forced <link rel=preload>
            hint) — this file is a large, uncompressed source (~13MB); auto/
            preload forced the browser to fetch and prioritize the whole
            thing ahead of the rest of the page on every visit, which is
            exactly the kind of thing that reads as the site "lagging" on
            first load. autoPlay still starts it as soon as enough has
            buffered — it just no longer competes for bandwidth with
            everything else at the very top of the load. No poster image on
            the desktop video — a poster always flashes up front (that's
            what a poster is: shown immediately, then swapped out once the
            video has a decoded frame ready), which read as a jarring
            photo-then-video glitch. Dropping it leaves a plain black frame
            for that instant instead, which blends straight into the
            section's own dark scrim/background. */}
        {heroMediaChoice ? (
          <>
            {chosenVideo && mediaMode === "desktop" && (
              <video
                key={chosenVideo}
                src={chosenVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="hidden md:block absolute inset-0 w-full h-full object-cover bg-black"
              />
            )}
            {chosenImage && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={heroImage.src}
                srcSet={heroImage.srcSet}
                sizes="100vw"
                alt=""
                decoding="async"
                fetchPriority="high"
                className="hidden md:block absolute inset-0 w-full h-full object-cover bg-black"
              />
            )}
          </>
        ) : (
          mediaMode === "desktop" && (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="hidden md:block absolute inset-0 w-full h-full object-cover bg-black"
            >
              <source src="/hero-sec.webm" type="video/webm" />
            </video>
          )
        )}

        {/* Dark scrim so text stays readable over any video/image */}
        <div
          className="absolute inset-0"
          style={{
            background: `${
              showGlow
                ? "radial-gradient(ellipse 80% 60% at 20% 10%, rgba(120, 180, 255, 0.25), transparent 70%), "
                : ""
            }linear-gradient(to right, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0.62) 68%, rgba(0,0,0,0.4) 100%)`,
          }}
        />

        {/* Fades the hero's photo/video out into the section's own black
            at the bottom edge, so it doesn't end in a hard line right
            against the next section's photo (About Us) and read as one
            continuous image. The real homepage always has its fixed
            background video (no heroMediaChoice gate needed there); the
            Outside Location page only has one when a video/image is
            actually chosen. */}
        {separated && (heroMediaChoice ? chosenVideo || chosenImage : true) && (
          <div
            className="absolute inset-x-0 bottom-0 h-40 md:h-56 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 50%, #000000 100%)",
            }}
            aria-hidden="true"
          />
        )}

        <div className="relative z-10 2xl:px-20 px-5 md:pt-20 short-screen:pt-6 pt-4 max-w-3xl flex flex-col md:block">
          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={reveal}
            className="md:text-3xl xl:text-4xl text-xl font-bold mb-3 md:mb-4 short-screen:mb-2"
          >
            {heading}
          </motion.h1>
          {showWordmark && (
            <motion.svg
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...reveal, delay: 0.15 }}
              className="animated-text order-first md:order-none mb-2 md:mb-0 short-screen:max-w-[480px]"
              viewBox="0 0 1320 220"
            >
              <text x="0" y="50%" dy=".35em" textAnchor="start">
                BizzBuzz Creations
              </text>
            </motion.svg>
          )}
          <motion.h2
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...reveal, delay: 0.22 }}
            className="text-lg md:text-xl font-semibold hidden md:block text-white mt-2 md:mt-4 mb-3 md:mb-4 short-screen:my-2"
          >
            {subheading}
          </motion.h2>
          {/* A <div>, not a <p>: the dashboard editor saves this text wrapped in
              its own <p>…</p>, and a <p> inside a <p> is invalid HTML — the
              browser splits it and React reports a hydration mismatch. */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...reveal, delay: 0.3 }}
            className={`max-w-xl mb-6 md:mb-10 short-screen:mb-5 ${RICH_TEXT_CLASS} ${richTextScopeClass(subtext)}`}
            dangerouslySetInnerHTML={richTextHTML(subtext)}
          />

          {/* Mobile-only — the same background video, but as its own
              contained box between the paragraph and the CTA button,
              instead of playing full-bleed behind the text.
              preload="metadata" (was "auto") — on mobile, the most
              bandwidth- and data-plan-constrained visitors, forcing this
              large file to fully buffer was the single biggest thing
              standing between "page interactive" and everything else. */}
          {(!heroMediaChoice || chosenVideo || chosenImage) && (
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...reveal, delay: 0.38 }}
              className="md:hidden relative w-full max-w-sm aspect-video rounded-2xl overflow-hidden shadow-xl mb-6 md:mb-8"
            >
              {heroMediaChoice ? (
                chosenVideo ? (
                  mediaMode === "mobile" && (
                    <video
                      key={chosenVideo}
                      src={chosenVideo}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 w-full h-full object-cover bg-black"
                    />
                  )
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={heroImage.src}
                    srcSet={heroImage.srcSet}
                    sizes="100vw"
                    alt=""
                    fetchPriority="high"
                    className="absolute inset-0 w-full h-full object-cover bg-black"
                  />
                )
              ) : (
                <>
                  {/* Poster paints instantly (37KB); the 540KB mobile
                      video fades over it once mounted after page load.
                      The full 4MB desktop file is never sent to phones.
                      It's the mobile LCP element, so fetchPriority="high"
                      — otherwise it queued at Low priority behind ~20 JS
                      chunks on slow connections. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/hero-sec-poster.webp"
                    alt=""
                    width={800}
                    height={321}
                    decoding="async"
                    fetchPriority="high"
                    className="absolute inset-0 w-full h-full object-cover bg-black"
                  />
                  {mediaMode === "mobile" && (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      poster="/hero-sec-poster.webp"
                      className="absolute inset-0 w-full h-full object-cover bg-black"
                    >
                      <source src="/hero-sec-mobile.webm" type="video/webm" />
                    </video>
                  )}
                </>
              )}
            </motion.div>
          )}

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...reveal, delay: 0.45 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <Link href={ctaLink} className="inline-block max-w-full">
              <button className="animated-button animated-button-lg whitespace-nowrap">
                <svg
                  viewBox="0 0 24 24"
                  className="arr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className="text">{ctaText}</span>
                <span className="circle"></span>
                <svg
                  viewBox="0 0 24 24"
                  className="arr-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </button>
            </Link>
            {secondaryCta?.text && secondaryCta?.href && (
              <Link
                href={secondaryCta.href}
                className="group inline-flex items-center gap-2 py-2 text-sm md:text-base font-semibold text-white transition-colors duration-200 hover:text-[#40A2D8]"
              >
                {secondaryCta.text}
                <ArrowDown size={16} className="transition-transform duration-200 group-hover:translate-y-0.5" />
              </Link>
            )}
          </motion.div>

          {stats?.length > 0 && (
            <motion.dl
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...reveal, delay: 0.5 }}
              className="mt-8 md:mt-12 short-screen:mt-6 grid max-w-lg border-t border-white/15 pt-5 short-screen:pt-3"
              style={{ gridTemplateColumns: `repeat(${Math.min(stats.length, 4)}, minmax(0, 1fr))` }}
            >
              {stats.slice(0, 4).map(({ value, label }, i) => (
                <div key={`${label}-${i}`} className="flex flex-col-reverse justify-end border-l border-white/15 px-3 first:border-l-0 first:pl-0 sm:px-5">
                  <dt className="mt-1 text-[11px] sm:text-xs uppercase tracking-wider text-white/80 leading-snug">{label}</dt>
                  <dd className="text-2xl md:text-3xl short-screen:text-2xl font-bold text-[#40A2D8]">{value}</dd>
                </div>
              ))}
            </motion.dl>
          )}

          {showBadges && (
            <motion.ul
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...reveal, delay: 0.55 }}
              className="mt-6 short-screen:mt-4 grid max-w-md grid-cols-2 gap-2 sm:flex sm:max-w-none sm:flex-wrap sm:items-center sm:gap-3"
              aria-label="Certifications"
            >
              {[
                { src: "/clutch.png", alt: "Clutch", title: "Clutch", sub: "Verified Partner" },
                { src: "/CDL.png", alt: "Google Partner", title: "Google Partner", sub: "Certified" },
                { src: "/GA.png", alt: "Google Analytics", title: "Google Analytics", sub: "Certified" },
                { src: "/iso.png", alt: "ISO", title: "ISO", sub: "Certified" },
              ].map((b) => (
                <li key={b.title} className="flex min-w-0 items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur-sm">
                  <Image src={b.src} alt={b.alt} width={28} height={28} className="h-7 w-7 shrink-0 object-contain" />
                  <span className="leading-tight">
                    <span className="block text-xs font-semibold text-white">{b.title}</span>
                    <span className="block text-[11px] text-white/80">{b.sub}</span>
                  </span>
                </li>
              ))}
            </motion.ul>
          )}
        </div>
      </div>
    </>
  );
}
