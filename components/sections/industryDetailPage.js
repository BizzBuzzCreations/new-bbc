import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import NumberedDeliverablesCarousel from "@/components/sections/numberedDeliverablesCarousel";

// Shared template every /industries/<slug> dedicated page renders through
// — the exact structure originally built for Healthcare, now generic so
// every industry gets the same rich layout with its own real content
// plugged in via lib/industryPageContent.js. Keeps 15 pages from drifting
// out of sync with each other since they all render through one file.
const CERTIFICATIONS = [
  { src: "/clutch.png", alt: "Clutch — Verified Partner" },
  { src: "/CDL.png", alt: "Certified Google Ads Partner" },
  { src: "/GA.png", alt: "Certified Google Analytics Partner" },
  { src: "/ISO.png", alt: "ISO Certified" },
];

export default function IndustryDetailPage({
  label,
  icon: Icon,
  description,
  capabilities,
  spectrumHeading,
  spectrumSubtitle,
  spectrumServices,
  whoWeHelpSubtitle,
  whoWeHelp,
  deliverables,
  faqs,
  trustPoints,
}) {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-28 md:pt-32 pb-20 px-6 md:px-12 lg:px-24 text-white"
        style={{ background: "radial-gradient(circle at top, #0d1b2e, #000000)" }}
      >
        <div
          className="absolute top-10 -right-20 w-[420px] h-[420px] rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ background: "radial-gradient(circle, #0B60B0, transparent 70%)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 -left-24 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #40A2D8, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 text-[#40A2D8] mb-6">
            <Icon size={26} />
          </span>
          <p className="text-xs font-bold uppercase tracking-widest text-[#40A2D8] mb-4">
            Industries — {label}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {label} Digital Marketing Services
          </h1>
          <p className="text-white/70 leading-relaxed mb-9 max-w-2xl mx-auto">
            {description}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0B60B0] hover:bg-[#0d72cf] text-white text-sm font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-[#0B60B0]/30 transition"
          >
            Book Your Free Consultation
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
              Our Core Capabilities
            </p>
            <span className="h-px w-10 bg-white/20" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map(({ icon: CapIcon, title, desc }) => (
              <div
                key={title}
                className="group rounded-2xl p-6 border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:bg-[#0B60B0] hover:shadow-xl hover:shadow-[#0B60B0]/20"
              >
                <span className="flex items-center justify-center w-11 h-11 rounded-xl mb-4 bg-white/10 text-[#40A2D8] transition-colors duration-300 group-hover:bg-white group-hover:text-[#0B60B0]">
                  <CapIcon size={20} />
                </span>
                <h3 className="font-bold mb-2 text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-white/60 transition-colors duration-300 group-hover:text-white/85">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real numbers + real certifications */}
      <section className="bg-[#050505] py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-5 mb-6">
            <div
              className="rounded-2xl p-6 flex flex-col justify-end min-h-[150px]"
              style={{ background: "linear-gradient(160deg, #0B60B0, #050b16)" }}
            >
              <p className="text-3xl font-bold text-white mb-1">90+</p>
              <p className="text-white/70 text-sm">Projects Delivered</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col justify-end min-h-[150px]">
              <p className="text-3xl font-bold text-white mb-1">50+</p>
              <p className="text-white/70 text-sm">Clients Across India &amp; the UK</p>
            </div>
            <div
              className="rounded-2xl p-6 flex flex-col justify-end min-h-[150px]"
              style={{ background: "linear-gradient(160deg, #4c2f91, #050b16)" }}
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

      {/* Full-spectrum services */}
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
                  <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we help */}
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

      {/* What you get — numbered deliverables carousel */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 max-w-2xl">
            What You Get
          </h2>
          <p className="text-white/60 max-w-2xl mb-14 leading-relaxed">
            Concrete pieces that work together — not a vague bundle of
            "digital marketing services."
          </p>

          <NumberedDeliverablesCarousel items={deliverables} />
        </div>
      </section>

      {/* FAQ */}
      <DarkFAQSection faqs={faqs} heading="Frequently Asked Questions" />

      {/* Why choose us */}
      <section className="bg-[#050505] py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Why {label} Businesses Choose Us
          </h2>
          <p className="text-white/60 leading-relaxed mb-12 max-w-2xl mx-auto">
            The same standards we hold ourselves to on every engagement,
            {" "}
            {label.toLowerCase()} included.
          </p>
          <ul className="grid sm:grid-cols-2 gap-5 text-left">
            {trustPoints.map((point) => (
              <li
                key={point}
                className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#40A2D8]/50 hover:bg-[#0B60B0] hover:shadow-xl hover:shadow-[#0B60B0]/20"
              >
                <CheckCircle2 size={18} className="text-[#40A2D8] shrink-0 mt-0.5 transition-colors duration-300 group-hover:text-white" />
                <span className="text-white/70 text-sm leading-relaxed transition-colors duration-300 group-hover:text-white">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA />
    </>
  );
}
