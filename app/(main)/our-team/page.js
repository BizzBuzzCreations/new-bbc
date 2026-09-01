import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import TeamHero from "@/components/sections/teamHero";
import TeamGrids from "@/components/sections/teamGrids";
import ContactSection from "@/components/sections/contactSection";

export const metadata = {
  title: "Our Team | BizzBuzz Creations Digital Marketing Agency",
  description:
    "Meet the team behind BizzBuzz Creations: SEO, ads, development, and AI specialists building digital growth for businesses across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/our-team",
  },
};

export default function OurTeamPage() {
  return (
    <>
      <TeamHero />

      {/* Founders, Our Leaders, and the BPO/R&D team photos — all with a
          staggered one-by-one reveal as they scroll into view. */}
      <TeamGrids />

      {/* Contact — same working form as the Contact page */}
      <ContactSection />

      {/* CTA — page-specific (not the shared site-wide CTA), same visual
          treatment as it, with two audiences instead of an email form. */}
      <div className="bg-black px-5 py-10 scroll-mt-34">
        <div
          className="rounded-3xl border-2 border-[#0B60B0] shadow-lg shadow-black md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto container"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
          }}
        >
          <div className="py-8 md:py-10 px-10 z-10 text-white">
            <h2 className="md:text-3xl text-2xl font-bold mb-5">
              Want to Work With the People Behind the Work?
            </h2>
            <p className="max-w-3xl mb-8 text-white/70">
              Whether you&rsquo;re looking for a digital marketing partner or
              interested in joining our growing team, we&rsquo;d love to
              hear from you.
            </p>

            <div className="flex flex-wrap gap-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#40A2D8] mb-3">
                  For Businesses
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white hover:bg-[#0B60B0] text-black hover:text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-300"
                >
                  Work With Our Team
                  <ArrowUpRight size={16} />
                </Link>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#40A2D8] mb-3">
                  For Candidates
                </p>
                <Link
                  href="/career"
                  className="inline-flex items-center gap-2 bg-black hover:bg-[#0B60B0] border border-white/50 hover:border-[#0B60B0] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-300"
                >
                  Explore Careers
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width white divider before the footer — same as the shared
          CTA's divider, so this page still ends the same way. */}
      <div className="w-full bg-black pt-8 md:pt-10">
        <div className="w-full border-t border-white" />
      </div>
    </>
  );
}
