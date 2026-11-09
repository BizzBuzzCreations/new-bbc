"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHead from "@/components/brand/sectionHead";
import IndustrySignature from "@/components/brand/industrySignature";
import Button from "@/components/brand/button";
import { INDUSTRIES } from "@/lib/siteNav";
import { HOVER_DESCRIPTIONS } from "@/components/sections/industriesShowcase";

// Industries (rebuild): no photos. The 15 industries as a big typographic
// index; hovering or focusing one shows, in the panel beside it, that
// industry's signature (a waveform drawn from its name), its one-line
// description and a link. Phones: the index only (each name is a link).
// Same dashboard fields as before (industriesEyebrow, industriesHeading,
// industriesSubtext, industriesButtonText).
export default function IndustriesV2({ content }) {
  const eyebrow = content?.industriesEyebrow || "Industries";
  const heading = content?.industriesHeading || "Digital Solutions for Businesses Across Industries";
  const subtext = content?.industriesSubtext || "Every industry buys differently. We start from how your customers search, compare and decide — then build the marketing around it.";
  const buttonText = content?.industriesButtonText || "All industries";
  const [active, setActive] = useState(0);
  const current = INDUSTRIES[active];

  return (
    <section aria-labelledby="industries-heading" className="relative bg-ink text-white">
      <div className="wrap py-24 md:py-40">
        <SectionHead id="industries-heading" no="05" kicker={eyebrow} heading={heading} text={subtext} />
        <div className="mt-16 grid gap-12 md:mt-24 lg:grid-cols-12 lg:gap-10">
          <ol className="grid border-t border-white/10 sm:grid-cols-2 lg:col-span-7">
            {INDUSTRIES.map((ind, i) => (
              <li key={ind.href} className="border-b border-white/10 sm:odd:pr-6 sm:even:border-l sm:even:pl-6">
                <Link
                  href={ind.href}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  aria-current={i === active ? "true" : undefined}
                  className="group flex items-baseline gap-4 py-4 md:py-5"
                >
                  <span className={`kicker w-6 shrink-0 transition-colors ${i === active ? "text-buzz" : "text-white/35"}`}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={`font-display text-2xl leading-tight transition-[color,transform] duration-500 ease-out-soft md:text-[1.9rem] ${i === active ? "translate-x-1 text-white" : "text-white/60 group-hover:text-white"}`}>
                    {ind.label}
                  </span>
                  <ArrowUpRight aria-hidden="true" size={18} className={`ml-auto shrink-0 self-center transition-all duration-300 ${i === active ? "text-buzz" : "text-white/0 group-hover:text-white/40"}`} />
                </Link>
              </li>
            ))}
          </ol>
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28 overflow-hidden rounded-[20px] border border-white/10 bg-ink-2">
              <div className="relative aspect-[4/3] border-b border-white/10">
                <IndustrySignature key={current.slug} slug={current.slug} className="absolute inset-0 h-full w-full motion-safe:animate-[fade-in_0.6s_ease-out]" />
                <p className="kicker absolute left-5 top-5 text-fog">
                  <span className="text-buzz">IND-{String(active + 1).padStart(2, "0")}</span> · Signature
                </p>
              </div>
              <div className="p-8" aria-live="polite">
                <p className="font-display text-4xl">{current.label}</p>
                <p className="mt-4 leading-relaxed text-fog">{HOVER_DESCRIPTIONS[current.slug]}</p>
                <Link href={current.href} className="group mt-6 inline-flex items-center gap-1.5 text-white underline decoration-white/30 underline-offset-[6px] hover:decoration-buzz">
                  Marketing for {current.label.toLowerCase()} <ArrowUpRight aria-hidden="true" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <Button href="/industries" variant="outline">
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
