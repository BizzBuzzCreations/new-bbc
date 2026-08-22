import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CTA from "@/components/sections/CTA";
import CaseStudies from "@/components/sections/caseStudies";
import CertificationsCarousel from "@/components/sections/certificationsCarousel";
import IndustriesHeroBadges from "@/components/sections/industriesHeroBadges";
import { INDUSTRIES } from "@/lib/industriesData";

export const metadata = {
  title: "Industries We Serve | BizzBuzz Creations",
  description:
    "Digital marketing, BPO, and web development for 15+ industries — healthcare, e-commerce, real estate, finance, and more.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/industries",
  },
};

// Same real photo pool reused across the site (individual industry pages,
// homepage shuffle grid) — no stock photography, no fabricated client
// logos or awards.
const CARD_IMAGES = [
  "/image-1.jpg",
  "/image-2.jpg",
  "/banner.png",
  "/image-3.jpg",
  "/image-4.webp",
  "/image-5.webp",
  "/image-6.jpg",
  "/image-7.jpg",
  "/image-8.jpg",
  "/image-9.jpg",
  "/teamPic.webp",
];

export default function IndustriesIndexPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-28 md:pt-32 pb-20 px-6 md:px-12 lg:px-24 text-white"
        style={{ background: "radial-gradient(circle at top, #0d1b2e, #000000)" }}
      >
        <div
          className="absolute top-1/4 right-[8%] w-[420px] h-[420px] rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ background: "radial-gradient(circle, #0B60B0, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#40A2D8] mb-4">
              Industries
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Preferred Growth Partner for Businesses Across{" "}
              <span className="text-[#40A2D8]">Every Industry</span>
            </h1>
            <p className="text-white/70 leading-relaxed mb-9 max-w-lg">
              Every sector searches, buys, and converts differently. We build
              digital marketing, BPO, and web strategies tailored to how your
              specific industry actually works — not a one-size-fits-all
              template.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0B60B0] hover:bg-[#0d72cf] text-white text-sm font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-[#0B60B0]/30 transition"
            >
              Consult Our Experts
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Real industries we serve, not fabricated client logos */}
          <IndustriesHeroBadges />
        </div>
      </section>

      {/* Industries grid */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#40A2D8] mb-3">
            Industries We Serve
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white max-w-2xl mb-4">
            Delivering Value Across Every Major Industry
          </h2>
          <p className="text-white/60 max-w-2xl mb-14 leading-relaxed">
            Real challenges, real solutions — pick your industry below to see
            how we approach it.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:shadow-xl hover:shadow-black/40"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={CARD_IMAGES[i % CARD_IMAGES.length]}
                      alt={industry.label}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.85) 100%)",
                      }}
                      aria-hidden="true"
                    />
                    <span className="absolute top-3 right-3 text-[11px] font-bold text-white/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="absolute bottom-3 left-3 flex items-center gap-2">
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#0B60B0] text-white shrink-0 transition-transform duration-300 group-hover:scale-110">
                        <Icon size={16} />
                      </span>
                      <span className="font-bold text-white">{industry.label}</span>
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-white/60 leading-relaxed line-clamp-2">
                      {industry.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#40A2D8] mt-3 transition-colors duration-300 group-hover:text-white">
                      Learn More
                      <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case studies — real BizzBuzz clients */}
      <div className="border-t border-white/10">
        <CaseStudies />
      </div>

      {/* Certifications carousel */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Certified &amp; Recognized By
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-14 leading-relaxed">
            Real credentials that back up how we work, not just what we say.
          </p>
          <CertificationsCarousel />
        </div>
      </section>

      <CTA />
    </>
  );
}
