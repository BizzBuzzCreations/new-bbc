"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import RichText from "@/components/ui/richText";
import HeroBottomFade from "@/components/ui/heroBottomFade";

// Same auto-advancing photo carousel as the career page hero — real
// team/office photos, fading between slides, instead of one static
// pre-composed collage image that either got cropped or left empty
// space depending on the viewport's height.
const DEFAULT_SLIDES = [
  "/team-images/team-5.jpeg",
  "/team-images/team-6.jpeg",
  "/team-images/team-2.jpeg",
  "/team-images/team-13.jpeg",
];

const SLIDE_DURATION = 4500;

export default function TeamHero({ content } = {}) {
  const heading = content?.teamHeroHeading || "The Humans Behind the Hustle";
  const subheading =
    content?.teamHeroSubheading || "Strategy. Creativity. Technology. One Team.";
  const paragraph =
    content?.teamHeroParagraph ||
    "Meet the marketers, strategists, designers, developers, and digital specialists behind BizzBuzz Creations. Our team brings together diverse expertise to build smarter digital strategies and meaningful growth for businesses across Prayagraj, India, and worldwide.";
  const ctaText = content?.teamHeroCtaText || "Meet the Team";
  const slidesRaw = content?.teamHeroSlides?.length > 0 ? content.teamHeroSlides : null;
  const SLIDES = slidesRaw ? slidesRaw.map((s) => s.image) : DEFAULT_SLIDES;

  const [active, setActive] = useState(0);

  // The hidden slides are opacity:0, which still counts as "visible" for
  // lazy loading — so every slide downloaded at once, competing with the
  // first one (the mobile LCP image). They now mount once the page has
  // loaded, and the carousel only starts advancing after that, so it never
  // fades to a slide that isn't there yet.
  const [restReady, setRestReady] = useState(false);
  useEffect(() => {
    const ready = () => setRestReady(true);
    if (document.readyState === "complete") {
      const t = setTimeout(ready, 0);
      return () => clearTimeout(t);
    }
    window.addEventListener("load", ready, { once: true });
    return () => window.removeEventListener("load", ready);
  }, []);

  // Slow background crossfade — the dots still switch slides by hand.
  // Visitors who ask for reduced motion get a still photo.
  useEffect(() => {
    if (!restReady) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, [SLIDES.length, restReady]);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center pt-10 md:pt-32 pb-12 md:pb-20 px-6 md:px-12 lg:px-24 text-white">
      {SLIDES.map((src, i) => (
        <div
          // Index, not src — slides can repeat the same image, and a
          // duplicate key across siblings is what React warns about.
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === active ? 1 : 0 }}
          aria-hidden={i !== active}
        >
          {(i === 0 || restReady) && (
            <Image
              src={src}
              alt=""
              fill
              sizes="100vw"
              preload={i === 0}
              fetchPriority={i === 0 ? "high" : undefined}
              className="object-cover"
            />
          )}
        </div>
      ))}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(5,11,22,0.92) 0%, rgba(5,11,22,0.75) 45%, rgba(5,11,22,0.35) 75%, rgba(5,11,22,0.15) 100%)",
        }}
      />

      <HeroBottomFade />
      <div className="relative max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight max-w-2xl">
          {heading}
        </h1>
        <h2 className="text-lg sm:text-xl font-semibold text-[#8fd0f2] mb-8">
          {subheading}
        </h2>

        <div className="flex flex-col gap-6">
          <RichText as="p" text={paragraph} className="text-sm sm:text-base text-white max-w-xl leading-relaxed" />
          <Link href="#meet-our-team" className="inline-block w-fit">
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
        </div>
      </div>

      {/* Slide indicators */}
      {/* Each dot sits in a 24px-tall button so it's easy to tap; the
          visible bar is the inner span. */}
      <div className="absolute bottom-6 left-6 md:left-12 lg:left-24 flex gap-1 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show slide ${i + 1}`}
            className="group flex items-center justify-center h-6 min-w-6"
          >
            <span
              className={`block h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-white" : "w-1.5 bg-white/40 group-hover:bg-white/70"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
