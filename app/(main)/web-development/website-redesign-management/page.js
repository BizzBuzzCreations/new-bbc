import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  Search,
  Gauge,
  Paintbrush,
  ShieldCheck,
  Database,
  LineChart,
} from "lucide-react";

export const metadata = {
  title: "Website Redesign & Management Company | BizzBuzz Creations",
  description:
    "Website redesign and ongoing management services in India — modernize UI/UX, fix Core Web Vitals, and keep your site secure with monitoring, updates, and backups from BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/web-development/website-redesign-management",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Search,
    heading: "UI/UX Redesign Audit",
    description:
      "We start by auditing what's actually holding your current site back — confusing navigation, dated design, or friction in the conversion path.",
  },
  {
    icon: Gauge,
    heading: "Core Web Vitals Fixes",
    description:
      "Slow load times and poor Core Web Vitals quietly hurt both rankings and conversions. We diagnose and fix them as part of every redesign.",
  },
  {
    icon: Paintbrush,
    heading: "Content & Structure Overhaul",
    description:
      "We restructure navigation, page layout, and content so visitors find what they need and take action, not bounce in confusion.",
  },
  {
    icon: ShieldCheck,
    heading: "Security Updates & Backups",
    description:
      "Outdated plugins and platforms are a common breach point. We patch vulnerabilities and set up reliable, scheduled backups.",
  },
  {
    icon: LineChart,
    heading: "Performance Monitoring",
    description:
      "After redesign, we keep an eye on uptime, speed, and errors, catching problems before your customers notice them.",
  },
  {
    icon: Database,
    heading: "Ongoing Website Management",
    description:
      "A redesigned site still needs upkeep. We provide ongoing content updates, technical maintenance, and support after launch.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Website Audit",
    body: "We review your current site's design, speed, SEO, and analytics to pinpoint exactly what's costing you visitors and conversions.",
  },
  {
    title: "Redesign Planning",
    body: "Based on the audit, we plan the new structure, design direction, and technical fixes needed, prioritized by impact.",
  },
  {
    title: "Redesign & Migration",
    body: "We rebuild the site with modern UI/UX and Core Web Vitals fixes, migrating content carefully to protect your existing SEO rankings.",
  },
  {
    title: "Ongoing Management",
    body: "After launch, we monitor performance and security, handling updates and backups so the site stays fast and online.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Data-Backed Redesigns",
    description:
      "We redesign based on what your analytics and audit actually show is broken, not guesswork or trends for their own sake.",
  },
  {
    number: "002",
    title: "Core Web Vitals Focused",
    description:
      "Speed and technical health are treated as core redesign goals, not an afterthought bolted on at the end.",
  },
  {
    number: "003",
    title: "SEO-Safe Migration",
    description:
      "We plan redesigns carefully to protect your existing search rankings instead of accidentally resetting years of SEO progress.",
  },
  {
    number: "004",
    title: "Proactive Security",
    description:
      "Regular patching and hardening reduce the risk of your site being compromised through outdated software.",
  },
  {
    number: "005",
    title: "24/7 Monitoring",
    description:
      "We keep watch on uptime and performance so issues get caught and fixed before they cost you customers.",
  },
  {
    number: "006",
    title: "Long-Term Care",
    description:
      "Redesign is the start, not the end — we stay on for ongoing management so your site keeps performing for years.",
  },
];

const FAQS = [
  {
    question: "How do I know if my website needs a redesign?",
    answer:
      "Signs include slow load times, high bounce rates, an outdated look, poor mobile experience, or a site that simply isn't converting visitors anymore.",
  },
  {
    question: "Will a redesign affect my current SEO rankings?",
    answer:
      "Not if it's planned carefully — we migrate content and URLs strategically to protect your existing rankings during the redesign.",
  },
  {
    question: "How much does website redesign cost?",
    answer:
      "It depends on the scope of changes needed — we audit your site first and give you a clear, tailored quote based on what's actually required.",
  },
  {
    question: "What's included in your ongoing management plans?",
    answer:
      "Our management plans typically cover monitoring, security updates, backups, and minor content updates — we'll tailor a plan to your needs.",
  },
  {
    question: "Will there be downtime during the redesign or migration?",
    answer:
      "We plan migrations to minimize downtime, typically scheduling the switch during low-traffic periods so disruption is minimal.",
  },
];

export default function WebsiteRedesignManagement() {
  return (
    <>
      <BpoHero
        heading="Website Redesign & Management Services in India"
        description="Modernize your site's UI/UX for higher conversions, fix Core Web Vitals, and keep it secure and online with ongoing monitoring, updates, and backups."
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
              src="/Web-Development-Promotion-Instagram-Post-4.webp"
              alt="Website redesign and management at BizzBuzz Creations"
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
              An Outdated Website Quietly Costs You Customers
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Our redesign services modernize UI/UX for higher conversions
              and fix Core Web Vitals, followed by ongoing monitoring,
              security updates, and backups — so the improvements actually
              stick.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a full-service web development team in Prayagraj,
              proudly serving clients locally across Allahabad and Uttar
              Pradesh, as well as businesses across the UK, USA, and India,
              from the redesign audit to years of ongoing management.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our Redesign & Management Services"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our Website Redesign Process"
            description="We audit before we redesign, so every change is based on what's actually broken, not guesswork — and we stay on to keep it running afterward."
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
          title="Website Redesign & Management Company"
          description="BizzBuzz Creations is a website redesign and management company in Prayagraj, modernizing outdated sites and keeping them fast, secure, and online for businesses across India and beyond."
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
