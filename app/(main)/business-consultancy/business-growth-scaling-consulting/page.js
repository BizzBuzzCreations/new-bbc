import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  TrendingUp,
  Layers,
  Users,
  Wallet,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Business Growth & Scaling Consulting | BizzBuzz Creations",
  description:
    "Business growth and scaling consulting in India — systems and processes built to help you expand sustainably, not just quickly, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/business-consultancy/business-growth-scaling-consulting",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Layers,
    heading: "Scalable Systems & Process Design",
    description:
      "We design systems and processes that can handle growing volume without breaking what's currently working.",
  },
  {
    icon: Users,
    heading: "Team Structure for Growth",
    description:
      "We advise on hiring priorities and team structure as you scale, so growth doesn't outpace your ability to manage it.",
  },
  {
    icon: Wallet,
    heading: "Financial Planning for Scale",
    description:
      "We help plan the financial side of scaling — cash flow, margins, and investment needs — so growth stays sustainable.",
  },
  {
    icon: TrendingUp,
    heading: "New Market & Channel Expansion",
    description:
      "We assess and plan expansion into new markets or sales channels, grounded in real demand signals, not just ambition.",
  },
  {
    icon: BarChart3,
    heading: "Growth Metrics & Tracking",
    description:
      "We set up the right metrics to track as you scale, so you know growth is genuinely healthy, not masking underlying problems.",
  },
  {
    icon: ShieldCheck,
    heading: "Risk & Bottleneck Identification",
    description:
      "We identify the risks and bottlenecks most likely to break under growing pressure, before they actually do.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Current State Assessment",
    body: "We assess what's currently working and where the cracks are most likely to show as volume grows.",
  },
  {
    title: "Scaling Strategy & Systems",
    body: "We design the systems, processes, and team structure needed to support sustainable growth, not just faster growth.",
  },
  {
    title: "Hands-On Implementation",
    body: "We stay involved through execution, not just handing over a growth plan and disappearing after the first meeting.",
  },
  {
    title: "Ongoing Review & Course Correction",
    body: "We're direct about what's working and honest about what isn't, adjusting the plan as real growth data comes in.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Sustainable, Not Just Fast",
    description:
      "Our growth consulting builds systems and processes designed to help you expand sustainably, not just quickly.",
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
      "From the first assessment to final execution, we stay by your side long after the first meeting.",
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
      "Born and based in Prayagraj, we understand what it takes to scale a business here as well as in the metros.",
  },
];

const FAQS = [
  {
    question: "How do I know if my business is ready to scale?",
    answer:
      "Signs include consistent demand outpacing your current capacity, stable unit economics, and processes that are starting to strain — we assess this together during the first stage.",
  },
  {
    question: "What's the risk of scaling too fast?",
    answer:
      "Scaling too fast without the right systems can break quality, strain cash flow, and burn out teams — our approach focuses on sustainable, not just rapid, growth.",
  },
  {
    question: "Do you help with hiring decisions during growth?",
    answer:
      "Yes, we advise on team structure and hiring priorities as part of building a scalable growth plan.",
  },
  {
    question: "How long does a growth consulting engagement last?",
    answer:
      "It varies by business, but many engagements continue through implementation and review over several months as growth unfolds.",
  },
  {
    question: "What metrics should we track while scaling?",
    answer:
      "It depends on your business model, but we help set up the specific metrics that reveal whether growth is genuinely healthy for your situation.",
  },
];

export default function BusinessGrowthScalingConsulting() {
  return (
    <>
      <BpoHero
        heading="Business Growth & Scaling Consulting in India"
        description="Ready to grow but not sure how to scale without breaking what's working? Our growth consulting builds systems and processes designed to help you expand sustainably, not just quickly."
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
              src="/About-Us-Collage-scaled.webp"
              alt="Business growth and scaling consulting at BizzBuzz Creations"
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
              Expand Sustainably, Not Just Quickly
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Ready to grow but not sure how to scale without breaking
              what's working? Our growth consulting builds systems and
              processes designed to help you expand sustainably, not just
              quickly.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a business consulting firm based in Prayagraj,
              helping growing companies locally across Allahabad and Uttar
              Pradesh, as well as across India, scale without losing
              control of what made them work in the first place.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our Growth & Scaling Consulting"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our Growth & Scaling Process"
            description="Anyone can tell you to grow faster. Not everyone will help you build the systems to do it without breaking. Our four-step process stays involved from assessment to execution."
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
          title="Business Growth & Scaling Consulting Firm"
          description="BizzBuzz Creations helps growing companies across India scale sustainably, with systems and processes built to handle growth without breaking what's working."
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
