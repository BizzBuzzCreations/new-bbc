import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BarChart3, Bot, Check, GitBranch, Globe, Headset, Server, Workflow } from "lucide-react";
import RichText from "@/components/ui/richText";
import Pill from "@/components/home/pill";
import { productCards, CLIO_IMAGE } from "@/components/sections/aiProductsShowcase";

// The homepage's Clio picture: the conversation illustration (transparent,
// shown whole — "contain" — so the logo and hands are never cropped). Used
// while the dashboard's Clio card image is still the old default; an image
// uploaded there instead still wins.
const CLIO_ART = "/clio-conversation.webp";

// Same fallback icons as the old in-house cards (components/sections/
// caseStudies.js), matched by position; a dashboard logo replaces the icon.
const BUILD_ICONS = [Headset, Bot, Workflow, Server, Globe, GitBranch, BarChart3];

// What We Build (redesign) — not another pair of columns:
//  - The products (Clio AI, Praxistence) are full-width cards that stack:
//    on screens at least 1280px wide and 760px tall (the stack-cards variant
//    in globals.css) each card pins below the navbar (sticky, pure CSS) and
//    the next one slides up over it. Smaller or shorter screens — where a
//    card can be taller than the space below the navbar — get them one
//    after another, so nothing is ever hidden under the next card. Each card: label, heading, text, the
//    features as a small 2x2 grid, the button, and the picture at about its
//    real size.
//  - The rest of the in-house systems are small icon tiles (4 across on
//    desktop), ending with a highlighted "Need a system like these?" tile.
// Same dashboard fields as before.
export default function BuildV2({ content, showClio = true, showPraxistence = true, showBuilds = true }) {
  const eyebrow = content?.caseStudiesEyebrow || "What We Build";
  const heading = content?.caseStudiesHeading || "Powered by What We Build";
  const subtext = content?.caseStudiesSubtext || "";
  const products = productCards(content, { showClio, showPraxistence });
  const builds = showBuilds ? (content?.caseStudyClients || []).filter((c) => c?.name) : [];

  if (!products.length && !builds.length) return null;

  return (
    <section className="overflow-x-clip bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
        <div className="reveal-stagger grid gap-6 md:grid-cols-2 md:gap-12">
          <div>
            <p className="text-sm text-[#40A2D8]">{eyebrow}</p>
            <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
          </div>
          {subtext && <RichText as="p" text={subtext} className="self-end text-base text-white/70 md:text-lg" />}
        </div>

        {products.length > 0 && (
          <div className="mt-14 space-y-6 md:mt-20 stack-cards:space-y-0">
            {products.map((p, i) => {
              const art = p.key === "clio" && p.image === CLIO_IMAGE;
              return (
                <article
                  key={p.key}
                  className="grid gap-8 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0e16] p-6 shadow-[0_-24px_60px_rgba(0,0,0,0.6)] sm:p-8 stack-cards:sticky lg:grid-cols-[1.15fr_1fr] lg:gap-12 lg:p-10 stack-cards:not-last:mb-[24vh]"
                  style={{ top: `calc(6.5rem + ${i * 1.5}rem)` }}
                >
                  <div className="flex flex-col">
                    <p className="text-xs uppercase tracking-wider text-[#40A2D8]">
                      Product {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-display mt-3 text-3xl leading-tight md:text-4xl">{p.heading}</h3>
                    <RichText as="div" text={p.paragraph} className="mt-4 space-y-3 text-base leading-relaxed text-white/70" />
                    <ul className="mt-8 grid gap-x-6 gap-y-5 sm:grid-cols-2">
                      {p.features.map((f, k) => (
                        <li key={k} className="flex gap-3">
                          <span aria-hidden="true" className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0B60B0]/25 text-[#40A2D8]">
                            <Check size={12} strokeWidth={3} />
                          </span>
                          <span>
                            <RichText as="p" text={f.title} className="text-sm text-white" />
                            <RichText as="p" text={f.description} className="mt-1 text-sm leading-relaxed text-white/60" />
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Pill href={p.buttonLink}>{p.buttonText}</Pill>
                    </div>
                  </div>
                  <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-auto lg:min-h-[20rem] ${art ? "bg-white/[0.02]" : "bg-black"}`}>
                    <Image
                      src={art ? CLIO_ART : p.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 520px, 100vw"
                      className={art ? "object-contain p-4" : "object-cover"}
                    />
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {builds.length > 0 && (
          <div className="mt-24">
            <p className="text-sm text-white/60">Also built and run in-house</p>
            <ul className="reveal-stagger mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {builds.map((b, i) => {
                const Icon = BUILD_ICONS[i % BUILD_ICONS.length];
                return (
                  <li key={`${b.name}-${i}`} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-white/20">
                    <span aria-hidden="true" className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-[#0B60B0]/15 text-[#40A2D8]">
                      {b.logo ? <Image src={b.logo} alt="" fill sizes="40px" className="object-contain p-2" /> : <Icon size={18} />}
                    </span>
                    <h3 className="mt-4 text-base leading-snug text-white">{b.name}</h3>
                    <RichText as="p" text={b.tagline} className="mt-2 text-sm leading-relaxed text-white/60" />
                  </li>
                );
              })}
              {/* Last tile: the same systems, offered to clients */}
              <li className="group relative rounded-2xl border border-[#40A2D8]/40 bg-linear-to-br from-[#0B60B0]/25 to-transparent p-5 transition-colors duration-300 hover:border-[#40A2D8]">
                <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#40A2D8] text-black">
                  <ArrowUpRight size={18} />
                </span>
                <h3 className="mt-4 text-base leading-snug text-white">
                  <Link href="/contact" className="after:absolute after:inset-0 after:rounded-2xl after:content-[''] focus-visible:underline focus-visible:outline-none">
                    Need a system like these for your business?
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">We build custom CRMs, dashboards and automations for clients too.</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[#40A2D8]">Talk to us</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
