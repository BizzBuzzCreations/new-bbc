"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Real BizzBuzz office/team photos (same assets already used elsewhere on
// the site) auto-advancing behind the hero text, instead of one static
// background image.
const SLIDES = [
  "/image-7.jpg",
  "/image-2.jpg",
  "/image-5.webp",
  "/image-4.webp",
  "/teamPic.webp",
];

const SLIDE_DURATION = 4500;

export default function CareerHero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[420px] sm:min-h-[480px] flex items-center pt-20">
      {SLIDES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === active ? 1 : 0 }}
          aria-hidden={i !== active}
        >
          <Image
            src={src}
            alt=""
            fill
            sizes="100vw"
            priority={i === 0}
            className="object-cover"
          />
        </div>
      ))}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(5,11,22,0.92) 0%, rgba(5,11,22,0.75) 45%, rgba(5,11,22,0.35) 75%, rgba(5,11,22,0.15) 100%)",
        }}
      />

      <div className="relative w-full px-6 md:px-12 lg:px-24 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-[#40A2D8] mb-4">
          We&rsquo;re Hiring
        </p>
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
          Work Where Your Ideas Matter
        </h1>
        <h2 className="text-white/90 text-lg sm:text-xl font-semibold mb-4">
          Learn by Doing. Grow by Owning.
        </h2>
        <p className="text-white/70 max-w-lg leading-relaxed mb-8">
          At BizzBuzz Creations, we believe great work comes from trust,
          ownership, and collaboration. Our flat structure means fewer
          layers, faster decisions, and more room to turn your ideas into
          real outcomes.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center bg-[#0B60B0] hover:bg-[#0B60B0]/90 text-white text-sm font-semibold px-7 py-3.5 rounded-lg transition"
        >
          Apply Now
        </Link>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-6 md:left-12 lg:left-24 flex gap-2 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Show slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
