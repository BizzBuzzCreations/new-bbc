import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RichText from "@/components/ui/richText";
import Pill from "@/components/home/pill";
import { productCards } from "@/components/sections/aiProductsShowcase";

// What We Build (redesign) — the old "Powered by What We Build" wheel and the
// Clio AI / Praxistence cards in one section: the two products as large
// blocks (image, heading, paragraph, feature list, link), then the rest of
// the in-house systems as a quiet list. Everything sits on the same two
// columns as the heading row. The two products share their rows (CSS
// subgrid), so image, heading, paragraph, each feature row and the button
// line up across both even when one heading or feature is longer. Same
// dashboard fields as before.
export default function BuildV2({ content, showClio = true, showPraxistence = true, showBuilds = true }) {
  const eyebrow = content?.caseStudiesEyebrow || "What We Build";
  const heading = content?.caseStudiesHeading || "Powered by What We Build";
  const subtext = content?.caseStudiesSubtext || "";
  const products = productCards(content, { showClio, showPraxistence });
  const builds = showBuilds ? (content?.caseStudyClients || []).filter((c) => c?.name) : [];

  if (!products.length && !builds.length) return null;
  // rows each product spans in the shared grid: image, heading, paragraph,
  // one per feature, button
  const featureRows = Math.max(1, ...products.map((p) => p.features.length));
  const rows = { "--rows": 4 + featureRows, "--feature-rows": featureRows };

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
          <div className={`reveal-sides mt-14 grid gap-14 md:mt-20 ${products.length > 1 ? "md:grid-cols-2 md:gap-x-12 md:gap-y-0" : "max-w-2xl"}`} style={rows}>
            {products.map((p) => (
              <article key={p.key} className="flex flex-col md:grid md:row-span-(--rows) md:grid-rows-subgrid">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#0a0a0a]">
                  <Image src={p.image} alt="" fill sizes="(min-width: 1280px) 600px, (min-width: 768px) 48vw, 100vw" className="object-cover" />
                </div>
                <h3 className="font-display mt-8 text-3xl leading-tight">{p.heading}</h3>
                <RichText as="div" text={p.paragraph} className="mt-4 space-y-3 text-base leading-relaxed text-white/70" />
                <ul className="mt-8 border-t border-white/10 md:grid md:row-span-(--feature-rows) md:grid-rows-subgrid md:content-start">
                  {p.features.map((f, i) => (
                    <li key={i} className="grid gap-1 border-b border-white/10 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
                      <RichText as="p" text={f.title} className="text-sm text-white" />
                      <RichText as="p" text={f.description} className="text-sm leading-relaxed text-white/60" />
                    </li>
                  ))}
                </ul>
                <div className="mt-8 md:self-start">
                  <Pill href={p.buttonLink}>{p.buttonText}</Pill>
                </div>
              </article>
            ))}
          </div>
        )}

        {builds.length > 0 && (
          <div className="mt-24">
            <p className="text-sm text-white/60">Also built and run in-house</p>
            <ul className="reveal-sides mt-6 grid border-t border-white/10 md:grid-cols-2 md:gap-x-12">
              {builds.map((b, i) => (
                <li key={`${b.name}-${i}`} className="border-b border-white/10 py-6">
                  <h3 className="text-base text-white">{b.name}</h3>
                  <RichText as="p" text={b.tagline} className="mt-2 text-sm leading-relaxed text-white/60" />
                </li>
              ))}
              {/* Last tile: the same systems, offered to clients (also evens out an odd list) */}
              <li className="group relative border-b border-white/10 py-6">
                <h3 className="text-base text-white transition-colors group-hover:text-[#40A2D8]">
                  <Link href="/contact" className="after:absolute after:inset-0 after:content-[''] focus-visible:underline focus-visible:outline-none">
                    Need a system like these for your business?
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  We build custom CRMs, dashboards and automations for clients too.
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[#40A2D8]">
                  Talk to us <ArrowUpRight size={16} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
