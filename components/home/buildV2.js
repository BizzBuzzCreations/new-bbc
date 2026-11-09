import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import RichText from "@/components/ui/richText";
import Button from "@/components/brand/button";
import SectionHead from "@/components/brand/sectionHead";
import { productCards, CLIO_IMAGE, PRAXISTENCE_IMAGE } from "@/components/sections/aiProductsShowcase";
import { IN_HOUSE_BUILDS } from "@/lib/inHouseBuilds";

// The products' own transparent artwork, used while the dashboard card image
// is still one of the old defaults (an uploaded image wins).
const PRODUCT_ART = {
  clio: { src: "/clio-illustration.webp", defaults: [CLIO_IMAGE] },
  praxistence: { src: "/praxistence-crm.webp", defaults: [PRAXISTENCE_IMAGE, CLIO_IMAGE] },
};

// What we build (rebuild): proof, shown as specimens.
//  - The two products (Clio AI, Praxistence) as large cards side by side
//    (stacked on phones): tag, artwork, heading, text, features, button.
//  - The other in-house systems as a numbered register (BBC-01…), one row
//    each — name and what it does — ending with "need one like these?".
// Same dashboard fields as before (caseStudies*, the ai*/clio* and
// praxistence* product fields, caseStudyClients; the built-in systems when
// none are saved). `clioPrefix` "ai" (home) | "clio" (location pages);
// `compact` (location pages): the product cards without feature lists.
export default function BuildV2({ content, showClio = true, showPraxistence = true, showBuilds = true, clioPrefix = "ai", compact = false }) {
  const eyebrow = content?.caseStudiesEyebrow || "What we build";
  const heading = content?.caseStudiesHeading || "Powered by What We Build";
  const subtext =
    content?.caseStudiesSubtext || "We don’t only advise on technology — we build it, run it every day, and put the same systems to work for clients.";
  const products = productCards(content, { clioPrefix, showClio, showPraxistence });
  const builds = showBuilds ? (content?.caseStudyClients?.length > 0 ? content.caseStudyClients : IN_HOUSE_BUILDS).filter((c) => c?.name) : [];

  if (!products.length && !builds.length) return null;

  return (
    <section aria-labelledby="build-heading" className="relative bg-ink text-white">
      <div className="wrap py-24 md:py-40">
        <SectionHead id="build-heading" no="04" kicker={eyebrow} heading={heading} text={subtext} />

        {products.length > 0 && (
          <div className={`mt-16 grid gap-5 md:mt-24 ${products.length > 1 ? "lg:grid-cols-2" : ""}`}>
            {products.map((p, i) => {
              const art = PRODUCT_ART[p.key]?.defaults.includes(p.image) ? PRODUCT_ART[p.key] : null;
              return (
                <article key={p.key} className="group relative flex flex-col overflow-hidden rounded-[20px] border border-white/10 bg-ink-2 transition-colors duration-500 hover:border-white/25">
                  <div className="relative aspect-[16/11] overflow-hidden border-b border-white/10 bg-[radial-gradient(70%_70%_at_50%_60%,rgba(255,212,59,0.10),transparent_70%)]">
                    <p className="kicker absolute left-5 top-5 z-10 text-fog">
                      <span className="text-buzz">PRD-0{i + 1}</span> · Our product
                    </p>
                    {art ? (
                      <Image src={art.src} alt="" fill sizes="(min-width: 1024px) 640px, 100vw" className="object-contain p-10 transition-transform duration-700 ease-out-soft group-hover:scale-[1.03] md:p-14" />
                    ) : (
                      <Image src={p.image} alt="" fill sizes="(min-width: 1024px) 640px, 100vw" className="object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]" />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-10">
                    <h3 className="font-display text-3xl leading-[1.02] md:text-[2.6rem]">{p.heading}</h3>
                    <RichText as="div" text={p.paragraph} className={`mt-5 space-y-3 leading-relaxed text-fog ${compact ? "line-clamp-4" : ""}`} />
                    {!compact && p.features?.length > 0 && (
                      <ul className="mt-8 grid gap-x-8 gap-y-5 border-t border-white/10 pt-8 sm:grid-cols-2">
                        {p.features.map((f, k) => (
                          <li key={k} className="flex gap-3">
                            <Check aria-hidden="true" size={16} strokeWidth={2.5} className="mt-0.5 shrink-0 text-buzz" />
                            <span>
                              <RichText as="p" text={f.title} className="text-[0.9375rem] font-medium text-white" />
                              <RichText as="p" text={f.description} className="mt-1 text-sm leading-relaxed text-fog" />
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-auto pt-10">
                      <Button href={p.buttonLink} variant="outline">
                        {p.buttonText}
                      </Button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {builds.length > 0 && (
          <div className={products.length ? "mt-24 md:mt-32" : "mt-16"}>
            <div className="flex items-end justify-between gap-6 border-b border-white/10 pb-5">
              <p className="kicker text-fog">
                <span className="text-buzz">[{String(builds.length).padStart(2, "0")}]</span> Also built and run in-house
              </p>
              <p className="kicker hidden text-fog md:block">System · What it does</p>
            </div>
            <ol>
              {builds.map((b, i) => (
                <li key={`${b.name}-${i}`} className="group grid gap-3 border-b border-white/10 py-7 transition-colors duration-300 hover:bg-white/[0.02] md:grid-cols-12 md:gap-10 md:py-8">
                  <span className="kicker pt-1 text-buzz md:col-span-2">BBC-{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-2xl leading-tight md:col-span-4 md:text-[1.75rem]">{b.name}</h3>
                  <RichText as="p" text={b.tagline} className="text-[0.9375rem] leading-relaxed text-fog md:col-span-6" />
                </li>
              ))}
              <li className="group relative grid gap-3 py-8 md:grid-cols-12 md:gap-10">
                <span className="kicker pt-1 text-buzz md:col-span-2">BBC-—</span>
                <h3 className="font-display text-2xl leading-tight md:col-span-4 md:text-[1.75rem]">
                  <Link href="/contact" className="inline-flex items-start gap-2 after:absolute after:inset-0 after:content-['']">
                    Need a system like these?
                    <ArrowUpRight aria-hidden="true" className="mt-1 h-6 w-6 text-buzz transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </h3>
                <p className="text-[0.9375rem] leading-relaxed text-fog md:col-span-6">We build custom CRMs, dashboards and automations for clients too — the same stack we run every day.</p>
              </li>
            </ol>
          </div>
        )}
      </div>
    </section>
  );
}
