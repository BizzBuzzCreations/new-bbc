"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import RichText from "@/components/ui/richText";
import Pill from "@/components/home/pill";
import { INDUSTRIES } from "@/lib/industriesData";
import { HOVER_DESCRIPTIONS } from "@/components/sections/industriesShowcase";

// Industries (redesign) — on the shared beams background (BeamsBlock): the
// heading row, then the industry's photo + short description beside every
// industry name as a light typographic link. Hovering (or focusing) a name
// swaps the photo, like the old showcase. On touch screens the first tap on
// a name previews it and the "Explore" link opens the page; a second tap on
// the same name opens it too. Each name is a real link to its page.
export default function IndustriesV2({ content }) {
  const eyebrow = content?.industriesEyebrow || "Industries";
  const heading = content?.industriesHeading || "Digital Solutions for Businesses Across Industries";
  const subtext = content?.industriesSubtext || "";
  const [active, setActive] = useState(0);
  const pointer = useRef("mouse"); // how the visitor last pointed: mouse | touch | pen | key
  const current = INDUSTRIES[active];
  const isTouch = () => pointer.current === "touch" || pointer.current === "pen";

  return (
    <section id="industries" className="relative scroll-mt-20 overflow-hidden text-white">
      <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-24">
        <div className="reveal-stagger grid gap-6 md:grid-cols-[2fr_3fr] md:items-end md:gap-16">
          <div>
            <p className="text-sm text-[#40A2D8]">{eyebrow}</p>
            <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
          </div>
          <div>
            {subtext && <RichText as="p" text={subtext} className="text-base leading-relaxed text-white/70" />}
            <div className="mt-6">
              <Pill href="/industries">All industries</Pill>
            </div>
          </div>
        </div>

        {/* same columns as the heading row above, so the list starts under the intro text */}
        <div className="reveal-stagger mt-14 grid gap-10 md:mt-20 md:grid-cols-[2fr_3fr] md:gap-16">
          {/* The active industry: photo, name, one line, link */}
          <div className="flex gap-5 md:block md:max-w-[18rem]">
            <div className="relative aspect-[278/378] w-32 shrink-0 overflow-hidden rounded-2xl bg-[#0a0a0a] sm:w-40 md:w-full md:rounded-3xl">
              <AnimatePresence initial={false}>
                <motion.div
                  key={current.slug}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image src={current.image} alt={current.label} fill sizes="(max-width: 768px) 160px, 288px" className="object-cover" />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="min-w-0 md:mt-6">
              <p className="font-display text-2xl text-white">{current.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{HOVER_DESCRIPTIONS[current.slug] || current.description}</p>
              <Link
                href={`/industries/${current.slug}`}
                className="mt-4 inline-flex items-center gap-1.5 py-1 text-sm font-medium text-[#40A2D8] hover:text-white focus-visible:underline focus-visible:underline-offset-4 focus-visible:outline-none"
              >
                Explore {current.label} <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Every industry */}
          <ul
            className="grid grid-cols-2 content-start gap-x-6 border-t border-white/10 sm:gap-x-10"
            onKeyDown={() => (pointer.current = "key")}
          >
            {INDUSTRIES.map((ind, i) => (
              <li key={ind.slug} className="border-b border-white/10">
                <Link
                  href={`/industries/${ind.slug}`}
                  data-active={i === active}
                  onPointerDown={(e) => (pointer.current = e.pointerType)}
                  onPointerEnter={(e) => e.pointerType === "mouse" && setActive(i)}
                  onFocus={() => !isTouch() && setActive(i)}
                  onClick={(e) => {
                    if (isTouch() && i !== active) {
                      e.preventDefault();
                      setActive(i);
                    }
                  }}
                  className="font-display group flex items-center justify-between gap-3 py-3 text-xl leading-tight text-white/55 transition-colors duration-200 hover:text-white focus-visible:text-white focus-visible:underline focus-visible:underline-offset-8 focus-visible:outline-none data-[active=true]:text-white sm:text-2xl md:py-3.5 lg:text-3xl"
                >
                  {ind.label}
                  <ArrowUpRight
                    size={20}
                    aria-hidden="true"
                    className="shrink-0 text-[#40A2D8] opacity-0 transition-opacity duration-200 group-data-[active=true]:opacity-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
