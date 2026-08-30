import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import NumberedDeliverablesCarousel from "@/components/sections/numberedDeliverablesCarousel";
import ServiceBreakdownGrid from "@/components/sections/serviceBreakdownGrid";
import RoadmapCarousel from "@/components/sections/roadmapCarousel";

// Shared template every dedicated /<service-hub>/<slug> page renders
// through — the same rich layout used for /industries/<slug> pages
// (components/sections/industryDetailPage.js), generalized so it isn't
// tied to the word "Industries" in the hero eyebrow. Keeps every one of
// these service sub-pages from drifting out of sync with each other,
// since they all render through one file with their own real content
// plugged in via each page's own content constants.
const CERTIFICATIONS = [
  { src: "/clutch.png", alt: "Clutch — Verified Partner" },
  { src: "/CDL.png", alt: "Certified Google Ads Partner" },
  { src: "/GA.png", alt: "Certified Google Analytics Partner" },
  { src: "/ISO.png", alt: "ISO Certified" },
];

export default function ServiceDetailPage({
  // Eyebrow prefix shown above the H1, e.g. "BPO Services" or "Website
  // Development" — combined with label as "{sectionLabel} — {label}".
  sectionLabel,
  label,
  icon: Icon,
  description,
  // Optional hero overrides — falls back to a generic "{label} Services"
  // title / description / CTA below.
  heroTitle,
  heroDescription,
  heroCtaText,
  capabilities,
  // Optional override for the capabilities section's small eyebrow
  // heading — defaults to "What's Included".
  capabilitiesHeading,
  // When true, each capability card shows only its title by default and
  // reveals the description on hover — off by default so a standard
  // 6-card grid keeps showing its description plainly.
  capabilitiesHoverReveal = false,
  // Optional expandable breakdown — an array of
  // { number, title, desc, ctaText, services[] }.
  serviceBreakdownHeading,
  serviceBreakdown,
  // Optional "What Makes Us Different" section — an array of
  // { number, title, desc }, rendered as an alternating timeline instead
  // of another card grid.
  differentiatorsHeading,
  differentiators,
  // Optional "Roadmap" section — an array of { number, title, desc },
  // rendered as an auto-scrolling carousel instead of a static grid.
  roadmapCarouselHeading,
  roadmapCarouselSteps,
  // Stats + certifications strip — on by default; pass showStats: false
  // to omit it.
  showStats = true,
  // Optional single heading + paragraph — a plain positioning statement
  // (e.g. local-market grounding) shown right after the roadmap, in the
  // same slot the stats strip would otherwise occupy. Omitted entirely
  // when localityText isn't supplied.
  localityHeading,
  localityText,
  spectrumHeading,
  spectrumSubtitle,
  spectrumServices,
  whoWeHelpSubtitle,
  whoWeHelp,
  deliverables,
  faqs,
  trustPoints,
  // Optional override for the "Why Businesses Choose Us" section — when
  // whyChooseUsText is supplied, it replaces the generic trustPoints
  // checklist with a single custom heading + paragraph.
  whyChooseUsHeading,
  whyChooseUsText,
  // "Why choose us" section — on by default; pass showWhyChooseUs: false
  // to omit the section entirely (rather than falling back to the
  // generic trustPoints checklist).
  showWhyChooseUs = true,
  // Optional override for the closing CTA — when ctaHeading is supplied,
  // it replaces the shared site-wide email-form CTA with a page-local
  // heading + paragraph + two buttons.
  ctaHeading,
  ctaText,
  ctaPrimaryText,
  ctaSecondaryText,
}) {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-28 md:pt-32 pb-20 px-6 md:px-12 lg:px-24 text-white"
        style={{
          background: "radial-gradient(circle at top, #0d1b2e, #000000)",
        }}
      >
        <div
          className="absolute top-10 -right-20 w-[420px] h-[420px] rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #0B60B0, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 -left-24 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #40A2D8, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 text-[#40A2D8] mb-6">
            <Icon size={26} />
          </span>
          <p className="text-xs font-bold uppercase tracking-widest text-[#40A2D8] mb-4">
            {sectionLabel} — {label}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {heroTitle || `${label} Services`}
          </h1>
          <p className="text-white/70 leading-relaxed mb-9 max-w-2xl mx-auto">
            {heroDescription || description}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0B60B0] hover:bg-[#0d72cf] text-white text-sm font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-[#0B60B0]/30 transition"
          >
            {heroCtaText || "Book Your Free Consultation"}
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* Core capabilities */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-14">
            <span className="h-px w-10 bg-white/20" />
            <p className="text-xs font-bold uppercase tracking-widest text-white">
              {capabilitiesHeading || "What's Included"}
            </p>
            <span className="h-px w-10 bg-white/20" />
          </div>

          {/* items-start: without it, CSS grid stretches every card in a
              row to match the tallest one, so hovering a card to expand
              its description (capabilitiesHoverReveal) visibly stretches
              its row-neighbors too, even though nothing about them
              actually changed. */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
            {capabilities.map(({ icon: CapIcon, title, desc }) => (
              <div
                key={title}
                className="group rounded-2xl p-6 border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:bg-[#0B60B0] hover:shadow-xl hover:shadow-[#0B60B0]/20"
              >
                <span className="flex items-center justify-center w-11 h-11 rounded-xl mb-4 bg-white/10 text-[#40A2D8] transition-colors duration-300 group-hover:bg-white group-hover:text-[#0B60B0]">
                  <CapIcon size={20} />
                </span>
                <h3
                  className={`font-bold text-white ${capabilitiesHoverReveal ? "" : "mb-2"}`}
                >
                  {title}
                </h3>
                {capabilitiesHoverReveal ? (
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                    <p className="overflow-hidden text-sm leading-relaxed text-white/60 pt-2 transition-colors duration-300 group-hover:text-white/85">
                      {desc}
                    </p>
                  </div>
                ) : (
                  <p className="text-sm leading-relaxed text-white/60 transition-colors duration-300 group-hover:text-white/85">
                    {desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service breakdown — optional, only rendered when supplied. Each
          card expands on click to reveal its full list of specific
          services. */}
      {serviceBreakdown && serviceBreakdown.length > 0 && (
        <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-14">
              {serviceBreakdownHeading}
            </h2>
            <ServiceBreakdownGrid items={serviceBreakdown} />
          </div>
        </section>
      )}

      {/* What Makes Us Different — optional, only rendered when supplied.
          Deliberately not another card grid: an alternating timeline down
          a center spine, so this differentiator list reads as a distinct
          visual moment on the page. */}
      {differentiators && differentiators.length > 0 && (
        <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-16 md:mb-20">
              {differentiatorsHeading}
            </h2>

            <div className="relative">
              {/* Center spine, desktop only — a dotted line (not a faint
                  solid gradient) so it actually reads as a connector. */}
              <div
                className="hidden md:block absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 4px, transparent 4px, transparent 12px)",
                }}
                aria-hidden="true"
              />

              <div className="space-y-12 md:space-y-0">
                {differentiators.map(({ number, title, desc }, i) => {
                  const isEven = i % 2 === 0;
                  return (
                    <div
                      key={title}
                      className={`relative md:grid md:grid-cols-2 md:gap-16 items-center ${
                        i > 0 ? "md:mt-16" : ""
                      }`}
                    >
                      {/* Center dot, desktop only */}
                      <span
                        className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#40A2D8] ring-4 ring-black"
                        aria-hidden="true"
                      />
                      <div
                        className={
                          isEven
                            ? "md:text-right md:pr-14"
                            : "md:col-start-2 md:pl-14"
                        }
                      >
                        <span className="block text-4xl md:text-5xl font-bold text-[#0B60B0]/40 mb-2">
                          {number}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-3">
                          {title}
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Roadmap — optional, only rendered when supplied. Auto-scrolling
          carousel (left-to-right, pauses on hover) instead of a static
          grid, so the step-by-step process reads as motion rather than
          another block of cards. */}
      {roadmapCarouselSteps && roadmapCarouselSteps.length > 0 && (
        <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-14">
              {roadmapCarouselHeading}
            </h2>
            <RoadmapCarousel steps={roadmapCarouselSteps} />
          </div>
        </section>
      )}

      {/* Locality / positioning statement — optional, only rendered when
          localityText is supplied. A plain heading + paragraph, no card
          or grid, so it reads as a direct statement rather than another
          content block. */}
      {localityText && (
        <section className="bg-[#050505] py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {localityHeading}
            </h2>
            <p className="text-white/70 leading-relaxed max-w-3xl mx-auto">
              {localityText}
            </p>
          </div>
        </section>
      )}

      {/* Real numbers + real certifications — optional, shown by default;
          pass showStats: false to omit it. */}
      {showStats && (
        <section className="bg-[#050505] py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-5 mb-6">
              <div
                className="rounded-2xl p-6 flex flex-col justify-end min-h-[150px]"
                style={{
                  background: "linear-gradient(160deg, #0B60B0, #050b16)",
                }}
              >
                <p className="text-3xl font-bold text-white mb-1">90+</p>
                <p className="text-white/70 text-sm">Projects Delivered</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col justify-end min-h-[150px]">
                <p className="text-3xl font-bold text-white mb-1">50+</p>
                <p className="text-white/70 text-sm">
                  Clients Across India &amp; the UK
                </p>
              </div>
              <div
                className="rounded-2xl p-6 flex flex-col justify-end min-h-[150px]"
                style={{
                  background: "linear-gradient(160deg, #4c2f91, #050b16)",
                }}
              >
                <p className="text-3xl font-bold text-white mb-1">20+</p>
                <p className="text-white/70 text-sm">Industries Served</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <p className="text-sm font-semibold text-white/70 mb-6">
                Certified &amp; Recognized By
              </p>
              <div className="flex flex-wrap items-center gap-8 sm:gap-12">
                {CERTIFICATIONS.map((badge) => (
                  <Image
                    key={badge.alt}
                    src={badge.src}
                    alt={badge.alt}
                    width={80}
                    height={80}
                    className="object-contain h-14 w-auto opacity-90"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Full-spectrum services — optional; omitted when content doesn't
          supply spectrumServices. */}
      {spectrumServices && spectrumServices.length > 0 && (
        <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 max-w-2xl">
              {spectrumHeading}
            </h2>
            <p className="text-white/60 max-w-2xl mb-14 leading-relaxed">
              {spectrumSubtitle}
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {spectrumServices.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:shadow-xl hover:shadow-black/40"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Who we help — optional; omitted when content doesn't supply
          whoWeHelp. */}
      {whoWeHelp && whoWeHelp.length > 0 && (
        <section className="bg-[#050505] py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 max-w-2xl">
              Who We Help
            </h2>
            <p className="text-white/60 max-w-2xl mb-14 leading-relaxed">
              {whoWeHelpSubtitle}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {whoWeHelp.map(({ icon: WhoIcon, title, desc }) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:bg-[#0B60B0] hover:shadow-xl hover:shadow-[#0B60B0]/20"
                >
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 text-[#40A2D8] mb-4 transition-all duration-300 group-hover:bg-white group-hover:text-[#0B60B0]">
                    <WhoIcon size={20} />
                  </span>
                  <h3 className="font-bold text-white mb-2 text-sm">{title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed transition-colors duration-300 group-hover:text-white/85">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What you get — numbered deliverables carousel; optional, omitted
          when content doesn't supply deliverables. */}
      {deliverables && deliverables.length > 0 && (
        <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 max-w-2xl">
              What You Get
            </h2>
            <p className="text-white/60 max-w-2xl mb-14 leading-relaxed">
              Concrete pieces that work together — not a vague bundle of
              &ldquo;digital services.&rdquo;
            </p>

            <NumberedDeliverablesCarousel items={deliverables} />
          </div>
        </section>
      )}

      {/* FAQ */}
      <DarkFAQSection faqs={faqs} heading="Frequently Asked Questions" />

      {/* Why choose us — optional, on by default; pass showWhyChooseUs:
          false to omit it entirely. Otherwise replaced with a single
          custom heading + paragraph when whyChooseUsText is supplied,
          or the generic trustPoints checklist. */}
      {showWhyChooseUs && (
      <section className="bg-[#050505] py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {whyChooseUsHeading || `Why Businesses Choose Us for ${label}`}
          </h2>
          {whyChooseUsText ? (
            <p className="text-white/70 leading-relaxed max-w-3xl mx-auto">
              {whyChooseUsText}
            </p>
          ) : (
            <>
              <p className="text-white/60 leading-relaxed mb-12 max-w-2xl mx-auto">
                The same standards we hold ourselves to on every engagement.
              </p>
              <ul className="grid sm:grid-cols-2 gap-5 text-left">
                {trustPoints.map((point) => (
                  <li
                    key={point}
                    className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#40A2D8]/50 hover:bg-[#0B60B0] hover:shadow-xl hover:shadow-[#0B60B0]/20"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-[#40A2D8] shrink-0 mt-0.5 transition-colors duration-300 group-hover:text-white"
                    />
                    <span className="text-white/70 text-sm leading-relaxed transition-colors duration-300 group-hover:text-white">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>
      )}

      {ctaHeading ? (
        <>
          {/* Page-local CTA — heading + paragraph + two buttons, both
              pointing to /contact, instead of the shared email-form CTA. */}
          <div className="bg-black px-5 py-10 scroll-mt-34" id="CTA">
            <div
              className="rounded-3xl border-2 border-[#0B60B0] shadow-lg shadow-black md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto container"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
              }}
            >
              <div className="py-8 md:py-10 px-10 z-10 text-white">
                <h2 className="md:text-3xl text-2xl font-bold mb-5">
                  {ctaHeading}
                </h2>
                <p className="max-w-3xl text-white/70 mb-8">{ctaText}</p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-black text-sm font-semibold px-7 py-3.5 rounded-full transition"
                  >
                    {ctaPrimaryText}
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 border border-white/50 hover:bg-white/10 text-white text-sm font-semibold px-7 py-3.5 rounded-full transition"
                  >
                    {ctaSecondaryText}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Same full-width divider the shared CTA ends with, so this
              page still transitions into the footer the same way. */}
          <div className="w-full bg-black pt-8 md:pt-10">
            <div className="w-full border-t border-white" />
          </div>
        </>
      ) : (
        <CTA />
      )}
    </>
  );
}
