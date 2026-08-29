import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  Newspaper,
  Puzzle,
  ShieldCheck,
  Gauge,
  Search,
  LifeBuoy,
} from "lucide-react";

export const metadata = {
  title: "WordPress Development Company | BizzBuzz Creations",
  description:
    "High-performance, SEO-ready WordPress development in India — custom themes, plugin development, and AI-assisted security monitoring by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/web-development/wordpress-development",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Newspaper,
    heading: "Custom WordPress Theme Development",
    description:
      "We build custom WordPress themes around your brand and content needs, instead of stretching a generic theme to do things it wasn't built for.",
  },
  {
    icon: Puzzle,
    heading: "Plugin Development & Customization",
    description:
      "When off-the-shelf plugins don't fit, we build and customize functionality directly, keeping your site lean instead of plugin-bloated.",
  },
  {
    icon: ShieldCheck,
    heading: "Security Hardening & Malware Protection",
    description:
      "WordPress is a common attack target. We harden installs against common vulnerabilities and add AI-assisted threat monitoring.",
  },
  {
    icon: Gauge,
    heading: "Speed & Performance Optimization",
    description:
      "Caching, image optimization, and clean code keep your WordPress site fast, even with rich content and multiple plugins running.",
  },
  {
    icon: Search,
    heading: "SEO-Ready Setup",
    description:
      "We configure technical SEO fundamentals — structure, schema, and Core Web Vitals — so your WordPress site is built to rank from launch.",
  },
  {
    icon: LifeBuoy,
    heading: "Ongoing Maintenance & Support",
    description:
      "Plugin updates, core updates, and backups are handled on an ongoing basis, so your site stays secure and online without you having to track it.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Discovery & Planning",
    body: "We map out your content structure, features, and goals before choosing themes, plugins, or custom development needed.",
  },
  {
    title: "Design & Theme Development",
    body: "A custom or heavily customized theme gets built around your brand, designed mobile-first and built for speed.",
  },
  {
    title: "Plugin & Feature Integration",
    body: "We add the functionality you actually need — forms, ecommerce, bookings — via clean, well-maintained plugins or custom code.",
  },
  {
    title: "Launch & Support",
    body: "We handle the technical launch, then provide ongoing updates, security monitoring, and support to keep the site running smoothly.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "WordPress Specialists",
    description:
      "We know the platform's ecosystem well — themes, plugins, and hosting quirks — so builds are efficient, not trial-and-error.",
  },
  {
    number: "002",
    title: "Security-First Builds",
    description:
      "Hardening against common vulnerabilities and AI-assisted threat monitoring are part of every WordPress project we deliver.",
  },
  {
    number: "003",
    title: "SEO-Ready Out of the Box",
    description:
      "Technical SEO fundamentals are configured from the start, giving your site a real foundation to rank on.",
  },
  {
    number: "004",
    title: "Fast-Loading Sites",
    description:
      "We optimize performance deliberately, so a content-rich WordPress site doesn't end up slow and bloated.",
  },
  {
    number: "005",
    title: "AI-Assisted Threat Monitoring",
    description:
      "Ongoing, AI-assisted monitoring helps catch security threats early, before they become a bigger problem.",
  },
  {
    number: "006",
    title: "Prayagraj-Based, Globally Trusted",
    description:
      "A full-service WordPress development team in Prayagraj, serving clients locally across Uttar Pradesh as well as businesses across the UK, USA, and India.",
  },
];

const FAQS = [
  {
    question: "Is WordPress secure enough for a business website?",
    answer:
      "Yes, when properly hardened and maintained. We harden installs against common vulnerabilities and add AI-assisted threat monitoring to keep it that way.",
  },
  {
    question: "Can you build an online store on WordPress?",
    answer:
      "Yes, we build WooCommerce-based stores on WordPress when it's the right fit for your catalog and workflow, alongside our dedicated Shopify service for larger stores.",
  },
  {
    question: "Can you migrate my existing site to WordPress?",
    answer:
      "Yes, we handle migrations from other platforms, preserving your content and SEO rankings during the move.",
  },
  {
    question: "How much does WordPress development cost?",
    answer:
      "Costs depend on design complexity, custom features, and plugins required — we scope every project and give you a clear, tailored quote.",
  },
  {
    question: "Do you offer WordPress maintenance plans?",
    answer:
      "Yes, we provide ongoing maintenance covering core and plugin updates, backups, and security monitoring so your site stays healthy after launch.",
  },
];

export default function WordPressDevelopment() {
  return (
    <>
      <BpoHero
        heading="WordPress Development Company in India"
        description="High-performance, SEO-ready WordPress websites with strong security, including protection against common vulnerabilities and AI-assisted threat monitoring."
        img="/web-dev.webp"
      />

      {/* Intro — dark section, glow accents behind the copy */}
      <section className="relative overflow-hidden bg-black py-20">
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ background: "radial-gradient(circle, #0B60B0, transparent 70%)" }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 -right-20 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #40A2D8, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative flex lg:flex-row flex-col px-5 lg:gap-20 gap-10 justify-center items-center max-w-6xl mx-auto">
          <div className="relative w-full lg:w-[440px] aspect-[4/5] shrink-0 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/Dev%20(1).webp"
              alt="WordPress website development at BizzBuzz Creations"
              fill
              sizes="(max-width: 1024px) 100vw, 440px"
              className="object-cover"
            />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(200deg, rgba(5,11,22,0.75) 0%, rgba(11,96,176,0.3) 45%, transparent 75%)",
              }}
              aria-hidden="true"
            />
          </div>
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-3 text-white">
              WordPress Sites Built to Perform and Stay Secure
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Our WordPress developers build high-performance, SEO-ready
              websites with strong security, including protection against
              common vulnerabilities and AI-assisted threat monitoring.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a full-service web development team in Prayagraj,
              proudly serving clients locally across Allahabad and Uttar
              Pradesh, as well as businesses across the UK, USA, and India,
              from custom theme design to ongoing site management.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our WordPress Development"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our WordPress Development Process"
            description="We plan content and features before development, so the finished site is fast, secure, and easy for you to manage day-to-day."
            steps={PROCESS_STEPS}
          />
        </div>
      </section>

      <div className="bg-black px-5">
        <div className="max-w-5xl mx-auto border-t border-white" />
      </div>

      {/* We are */}
      <section className="bg-black pt-20 pb-20 px-5">
        <BpoWeAre
          title="WordPress Development Company"
          description="BizzBuzz Creations is a WordPress development company in Prayagraj, building fast, secure, SEO-ready websites for businesses across India and beyond."
          points={WE_ARE_POINTS}
        />
      </section>

      <DarkFAQSection faqs={FAQS} heading="Frequently Asked Questions" />

      <BpoWhyChooseDark />
      <div className="bg-black pt-10">
        <CTA />
      </div>
    </>
  );
}
