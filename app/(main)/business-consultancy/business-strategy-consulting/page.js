import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  Target,
  Compass,
  Map,
  Users,
  BarChart3,
  ClipboardCheck,
} from "lucide-react";

export const metadata = {
  title: "Business Strategy Consulting | BizzBuzz Creations",
  description:
    "Business strategy consulting in India — define your goals, map your market, and build a roadmap that turns big ambitions into practical, executable steps, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/business-consultancy/business-strategy-consulting",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Compass,
    heading: "Goal & Vision Clarification",
    description:
      "We help translate a broad ambition into specific, measurable goals, so your team knows exactly what success actually looks like.",
  },
  {
    icon: Map,
    heading: "Market & Competitor Mapping",
    description:
      "We map your market position and competitors clearly, so strategy is built on where you actually stand, not assumptions.",
  },
  {
    icon: Target,
    heading: "Strategic Roadmap Development",
    description:
      "Big ambitions get broken down into a practical, sequenced roadmap of executable steps, not a vague vision statement.",
  },
  {
    icon: Users,
    heading: "Stakeholder Alignment",
    description:
      "We help align leadership and teams around the strategy, so execution doesn't stall on internal disagreement.",
  },
  {
    icon: BarChart3,
    heading: "KPI & Milestone Setting",
    description:
      "Clear KPIs and milestones get set so progress is measurable, not just a feeling that things are moving forward.",
  },
  {
    icon: ClipboardCheck,
    heading: "Strategy Review & Adjustment",
    description:
      "We revisit the strategy periodically and adjust it as real market conditions and results come in, not once and forget.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Business Audit & Discovery",
    body: "We start with a clear-eyed look at what's actually working in your business and what's holding it back, before recommending anything.",
  },
  {
    title: "Strategy & Roadmap",
    body: "Goals, market position, and a practical roadmap get mapped out — built around your industry and real numbers, not a generic playbook.",
  },
  {
    title: "Hands-On Implementation",
    body: "We stay involved through execution, not just handing over a strategy deck and disappearing after the first meeting.",
  },
  {
    title: "Ongoing Review & Course Correction",
    body: "We're direct about what's working and honest about what isn't, adjusting the plan as real results come in.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "No Generic Playbooks",
    description:
      "Every recommendation is built around your industry, your team, and your real numbers — not a template pulled off a shelf.",
  },
  {
    number: "002",
    title: "We Stay Involved",
    description:
      "From the first audit to final execution, we stay by your side long after the first meeting, not just handing over a strategy deck.",
  },
  {
    number: "003",
    title: "Direct & Honest",
    description:
      "We're direct about what's working, honest about what isn't, and focused on outcomes you can actually measure.",
  },
  {
    number: "004",
    title: "Outcomes You Can Measure",
    description:
      "Every engagement is focused on results you can point to, not just reports and recommendations that sit unread.",
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
    question: "What does business strategy consulting actually involve?",
    answer:
      "It involves clarifying your goals, mapping your market position, and building a practical roadmap of executable steps to get there, not just a theoretical plan.",
  },
  {
    question: "How long does a strategy engagement typically take?",
    answer:
      "Initial strategy development typically takes a few weeks, though we often stay involved through implementation and review over a longer period.",
  },
  {
    question: "Do you help implement the strategy, or just create it?",
    answer:
      "We stay involved through hands-on implementation, not just handing over a strategy deck and disappearing after the first meeting.",
  },
  {
    question: "Is business strategy consulting only for large companies?",
    answer:
      "No, strategy consulting is valuable for founders and small businesses too — clarity on goals and roadmap matters at any size.",
  },
  {
    question: "How do you measure if a strategy is working?",
    answer:
      "We set clear KPIs and milestones upfront, then review progress against them regularly, adjusting the plan as real results come in.",
  },
];

export default function BusinessStrategyConsulting() {
  return (
    <>
      <BpoHero
        heading="Business Strategy Consulting in India"
        description="Every strong business runs on a clear plan, not guesswork. As a dedicated strategy consulting partner, we help you define your goals, map your market, and build a roadmap that turns big ambitions into practical, executable steps."
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
              alt="Business strategy consulting at BizzBuzz Creations"
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
              A Clear Plan, Not Guesswork
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Every strong business runs on a clear plan, not guesswork. As
              a dedicated strategy consulting partner, we help you define
              your goals, map your market, and build a roadmap that turns
              big ambitions into practical, executable steps.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a business consulting firm based in Prayagraj,
              helping founders and growing companies locally across
              Allahabad and Uttar Pradesh, as well as across India, turn
              strategy into real, measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our Business Strategy Consulting"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our Business Strategy Process"
            description="Anyone can hand you a strategy deck. Not everyone will sit with you and make sure it actually works. Our four-step process stays involved from the first audit to final execution."
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
          title="Business Strategy Consulting Firm"
          description="BizzBuzz Creations is a business strategy consulting firm helping founders and growing companies across India turn ambition into a practical, executable roadmap."
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
