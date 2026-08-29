import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  Users,
  Handshake,
  Megaphone,
  Target,
  BarChart3,
  Briefcase,
} from "lucide-react";

export const metadata = {
  title: "Business Development & Marketing Consulting | BizzBuzz Creations",
  description:
    "Business development and marketing consulting in India — build pipeline and brand visibility together, not as disconnected efforts, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/business-consultancy/business-development-marketing-consulting",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Handshake,
    heading: "Business Development Strategy",
    description:
      "We build a practical plan for winning new customers and partnerships, grounded in your actual market and sales capacity.",
  },
  {
    icon: Megaphone,
    heading: "Brand Positioning & Messaging",
    description:
      "We help clarify how your brand should position itself and what message actually resonates with your target customers.",
  },
  {
    icon: Target,
    heading: "Pipeline & Lead Strategy",
    description:
      "We design a coordinated approach to building pipeline, connecting marketing efforts directly to sales outcomes.",
  },
  {
    icon: Briefcase,
    heading: "Partnership & Channel Development",
    description:
      "We identify and help structure partnerships and channels that can meaningfully extend your reach and revenue.",
  },
  {
    icon: BarChart3,
    heading: "Marketing & BD Alignment",
    description:
      "We align marketing and business development efforts so they reinforce each other, not run as disconnected activities.",
  },
  {
    icon: Users,
    heading: "Customer Acquisition Planning",
    description:
      "We build a clear, prioritized plan for acquiring customers, matched to your budget and growth stage.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Market & Pipeline Audit",
    body: "We assess your current customer acquisition efforts and brand positioning before recommending any changes.",
  },
  {
    title: "Strategy & Messaging",
    body: "We build a coordinated business development and marketing plan, with messaging that actually resonates with your buyers.",
  },
  {
    title: "Hands-On Implementation",
    body: "We stay involved through execution, not just handing over a plan and disappearing after the first meeting.",
  },
  {
    title: "Ongoing Review & Course Correction",
    body: "We're direct about what's working and honest about what isn't, adjusting the plan as real pipeline results come in.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Strategy and Customers Together",
    description:
      "Growth isn't just about strategy on paper — it's about winning customers too. Our combined approach helps you build pipeline and brand visibility.",
  },
  {
    number: "002",
    title: "No Generic Playbooks",
    description:
      "Every recommendation is built around your industry, your team, and your real numbers — not a template pulled off a shelf.",
  },
  {
    number: "003",
    title: "We Stay Involved",
    description:
      "From the first audit to final execution, we stay by your side long after the first meeting.",
  },
  {
    number: "004",
    title: "Outcomes You Can Measure",
    description:
      "Every engagement is focused on results you can point to — real pipeline and visibility, not just reports.",
  },
  {
    number: "005",
    title: "A Team, Not Outside Consultants",
    description:
      "Think of us less like outside consultants and more like a hired team that's genuinely invested in your growth.",
  },
  {
    number: "006",
    title: "Local Roots, India-Wide Reach",
    description:
      "Born and based in Prayagraj, we understand what it takes to build a business here as well as in the metros.",
  },
];

const FAQS = [
  {
    question: "What's the difference between business development and marketing consulting?",
    answer:
      "Business development focuses on winning customers and partnerships directly, while marketing builds brand visibility and inbound demand — we align both so they reinforce each other.",
  },
  {
    question: "Do you also execute the marketing, or just plan it?",
    answer:
      "We stay involved through hands-on implementation, not just handing over a strategy and disappearing after the first meeting.",
  },
  {
    question: "How is this different from hiring a marketing agency?",
    answer:
      "We connect marketing directly to business development and sales outcomes, not just campaign metrics disconnected from actual pipeline.",
  },
  {
    question: "Can you help identify potential partnerships for our business?",
    answer:
      "Yes, we help identify and structure partnerships and channels that can meaningfully extend your reach and revenue.",
  },
  {
    question: "How much does business development and marketing consulting cost?",
    answer:
      "It depends on the scope of the engagement — we offer flexible pricing based on your goals and current stage.",
  },
];

export default function BusinessDevelopmentMarketingConsulting() {
  return (
    <>
      <BpoHero
        heading="Business Development & Marketing Consulting in India"
        description="Growth isn't just about strategy on paper — it's about winning customers too. Our combined business development and marketing consulting helps you build pipeline and brand visibility."
        img="/businesscons.webp"
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
              src="/pie%20chart%20showing%20financial%20growth.png"
              alt="Business development and marketing consulting at BizzBuzz Creations"
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
              Strategy on Paper Isn't Enough — Win the Customers Too
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Growth isn't just about strategy on paper — it's about
              winning customers too. Our combined business development and
              marketing consulting helps you build pipeline and brand
              visibility.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a business consulting firm based in Prayagraj,
              helping companies locally across Allahabad and Uttar Pradesh,
              as well as across India, connect marketing and business
              development into one coordinated growth engine.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our Business Development & Marketing Consulting"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our Business Development & Marketing Process"
            description="Anyone can hand you a marketing plan. Not everyone will connect it to actually winning customers. Our four-step process stays involved from audit to execution."
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
          title="Business Development & Marketing Consulting Firm"
          description="BizzBuzz Creations helps businesses across India build pipeline and brand visibility together, connecting business development and marketing into one coordinated strategy."
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
