import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RichText from "@/components/ui/richText";
import Button from "@/components/brand/button";
import SectionHead from "@/components/brand/sectionHead";
import { productCards } from "@/components/sections/aiProductsShowcase";
import { IN_HOUSE_BUILDS } from "@/lib/inHouseBuilds";

// What we build: proof, set as a register — no pictures. The two products
// (Clio AI, Praxistence) as large rows (tag, name and text, the features as
// a hairline list, the button); then the other in-house systems as a plain
// table (BBC-01…), ending with "Need one like these?". Same dashboard fields
// as before (caseStudies*, the ai* / clio* and praxistence* product fields,
// caseStudyClients — the built-in list when none are saved). `clioPrefix`
// "ai" (home) | "clio" (location pages); `compact`: no feature lists.
export default function BuildV2({
  content,
  showClio = true,
  showPraxistence = true,
  showBuilds = true,
  clioPrefix = "ai",
  compact = false,
}) {
  const eyebrow = content?.caseStudiesEyebrow || "What we build";
  const heading = content?.caseStudiesHeading || "Powered by What We Build";
  const subtext =
    content?.caseStudiesSubtext ||
    "We don’t only advise on technology — we build it, run it every day, and put the same systems to work for clients.";
  const products = productCards(content, {
    clioPrefix,
    showClio,
    showPraxistence,
  });
  const builds = showBuilds
    ? (content?.caseStudyClients?.length > 0
        ? content.caseStudyClients
        : IN_HOUSE_BUILDS
      ).filter((c) => c?.name)
    : [];
  if (!products.length && !builds.length) return null;

  return (
    <section aria-labelledby="build-heading" className="on-paper">
      <div className="wrap pb-7 md:pb-10">
        <SectionHead
          id="build-heading"
          no="02"
          of="08"
          kicker={eyebrow}
          heading={heading}
          text={subtext}
        />

        {products.length > 0 && (
          <div className="mt-8 border-t border-(--fg) md:mt-10">
            {products.map((p, i) => (
              <article
                key={p.key}
                className="row-in grid gap-8 border-b border-(--line) py-12 md:grid-cols-12 md:gap-10 md:py-16"
              >
                <p className="kicker text-(--mut) md:col-span-2">
                  <span className="text-(--fg)">PRD-0{i + 1}</span>
                  <br />
                  Our product
                </p>
                <div className="md:col-span-5">
                  <h3 className="font-display text-[clamp(1.9rem,3.4vw,3.2rem)] leading-[1] tracking-[-0.04em]">
                    {p.heading}
                  </h3>
                  <RichText
                    as="div"
                    text={p.paragraph}
                    className={`mt-5 space-y-3 text-lg leading-relaxed text-(--mut) ${compact ? "line-clamp-4" : ""}`}
                  />
                  <div className="mt-8">
                    <Button href={p.buttonLink} variant="outline">
                      {p.buttonText}
                    </Button>
                  </div>
                </div>
                {!compact && p.features?.length > 0 && (
                  <ul className="md:col-span-4 md:col-start-9">
                    {p.features.map((f, k) => (
                      <li
                        key={k}
                        className="grid grid-cols-[2rem_1fr] gap-2 border-t border-(--line) py-4 first:border-t-0 first:pt-0"
                      >
                        <span className="kicker pt-0.5 text-(--mut)">
                          {String(k + 1).padStart(2, "0")}
                        </span>
                        <span>
                          <RichText
                            as="p"
                            text={f.title}
                            className="font-medium"
                          />
                          <RichText
                            as="p"
                            text={f.description}
                            className="mt-1 text-[0.9375rem] leading-relaxed text-(--mut)"
                          />
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        )}

        {builds.length > 0 && (
          <div className="mt-10 md:mt-12">
            <div className="flex items-end justify-between gap-6 border-b border-(--fg) pb-4">
              <p className="kicker">
                <span>{String(builds.length).padStart(2, "0")}</span>{" "}
                <span className="text-(--mut)">
                  also built and run in-house
                </span>
              </p>
              <p className="kicker hidden text-(--mut) md:block">
                System · What it does
              </p>
            </div>
            <ol>
              {builds.map((b, i) => (
                <li
                  key={`${b.name}-${i}`}
                  style={{ "--k": i % 4 }}
                  className="reg-row grid gap-2 py-6 md:grid-cols-12 md:gap-10"
                >
                  <span className="reg-no kicker text-(--mut) md:col-span-2">
                    BBC-{String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl leading-snug tracking-[-0.03em] md:col-span-4 md:text-2xl">
                    {b.name}
                  </h3>
                  <RichText
                    as="p"
                    text={b.tagline}
                    className="text-[0.9375rem] leading-relaxed text-(--mut) md:col-span-6"
                  />
                </li>
              ))}
              <li
                data-last=""
                className="reg-row group grid gap-2 py-6 md:grid-cols-12 md:gap-10"
              >
                <span className="reg-no kicker text-(--mut) md:col-span-2">
                  BBC-—
                </span>
                <h3 className="font-display text-xl leading-snug tracking-[-0.03em] md:col-span-4 md:text-2xl">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 underline decoration-(--fg)/30 underline-offset-[6px] after:absolute after:inset-0 after:content-[''] group-hover:decoration-(--fg)"
                  >
                    Need a system like these?{" "}
                    <ArrowUpRight aria-hidden="true" size={20} />
                  </Link>
                </h3>
                <p className="text-[0.9375rem] leading-relaxed text-(--mut) md:col-span-6">
                  We build custom CRMs, dashboards and automations for clients
                  too — the same stack we run every day.
                </p>
              </li>
            </ol>
          </div>
        )}
      </div>
    </section>
  );
}
