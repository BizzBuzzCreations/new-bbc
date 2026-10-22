"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import RichText from "@/components/ui/richText";
import Pill from "@/components/home/pill";
import { INDUSTRIES } from "@/lib/industriesData";
import { HOVER_DESCRIPTIONS } from "@/components/sections/industriesShowcase";

// Industries (redesign) — on the shared beams background (BeamsBlock). Not
// another two-column block: the heading row on top, then every industry as
// a tall photo card in one horizontal rail that starts in line with the page
// content and runs off the right edge, so it reads as "there's more". Each
// card is a real link (photo, icon, name, short description, Explore); on
// hover the photo zooms a touch and the description slides up (on phones it
// always shows). Moved by the arrow buttons, trackpad / touch swipe or Tab —
// never on its own. Photos are lazy-loaded at the card's size.
const RAIL_EDGE = "md:pl-[max(2.5rem,calc((100%-80rem)/2+2.5rem))] md:scroll-pl-[max(2.5rem,calc((100%-80rem)/2+2.5rem))]";

export default function IndustriesV2({ content }) {
  const eyebrow = content?.industriesEyebrow || "Industries";
  const heading = content?.industriesHeading || "Digital Solutions for Businesses Across Industries";
  const subtext = content?.industriesSubtext || "";
  const rail = useRef(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    let frame;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() =>
        setEdges({ start: el.scrollLeft <= 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 }),
      );
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Two cards per press; instant instead of smooth under reduced motion.
  const scroll = (dir) => {
    const el = rail.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * (card.offsetWidth + 20) * 2, behavior: smooth ? "smooth" : "auto" });
  };

  const arrow =
    "flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-white hover:bg-white hover:text-black disabled:pointer-events-none disabled:opacity-30 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#40A2D8]";

  return (
    <section id="industries" className="relative scroll-mt-20 overflow-hidden py-16 text-white md:py-20">
      <div className="reveal-stagger mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-[2fr_3fr] md:items-end md:gap-16 md:px-10">
        <div>
          <p className="text-sm text-[#40A2D8]">{eyebrow}</p>
          <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
        </div>
        <div>
          {subtext && <RichText as="p" text={subtext} className="text-base leading-relaxed text-white/70" />}
          <div className="mt-6 flex items-center justify-between gap-4">
            <Pill href="/industries">All industries</Pill>
            <div className="hidden gap-3 md:flex">
              <button type="button" onClick={() => scroll(-1)} disabled={edges.start} aria-controls="industries-rail" aria-label="Previous industries" className={arrow}>
                <ChevronLeft size={18} />
              </button>
              <button type="button" onClick={() => scroll(1)} disabled={edges.end} aria-controls="industries-rail" aria-label="More industries" className={arrow}>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <ul
        id="industries-rail"
        ref={rail}
        aria-label="Industries we work with"
        className={`reveal no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-pl-6 pl-6 pr-6 pb-2 md:mt-16 md:pr-10 ${RAIL_EDGE}`}
      >
        {INDUSTRIES.map((ind) => {
          const Icon = ind.icon;
          return (
            <li key={ind.slug} className="shrink-0 snap-start">
              <Link
                href={`/industries/${ind.slug}`}
                className="group relative block aspect-[278/378] w-[15rem] overflow-hidden rounded-3xl bg-[#0a0a0a] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#40A2D8] md:w-[17.5rem]"
              >
                <Image
                  src={ind.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 280px, 240px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <span aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-black/90 via-black/35 to-black/0" />
                {Icon && (
                  <span aria-hidden="true" className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/50 text-[#40A2D8]">
                    <Icon size={18} />
                  </span>
                )}
                <span className="absolute inset-x-0 bottom-0 p-5">
                  <span className="font-display block text-2xl leading-tight text-white">{ind.label}</span>
                  <span className="mt-2 block text-sm leading-relaxed text-white/75 transition-all duration-500 md:max-h-0 md:overflow-hidden md:opacity-0 md:group-hover:max-h-28 md:group-hover:opacity-100 md:group-focus-visible:max-h-28 md:group-focus-visible:opacity-100">
                    {HOVER_DESCRIPTIONS[ind.slug] || ind.description}
                  </span>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[#40A2D8]">
                    Explore <ArrowUpRight size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
