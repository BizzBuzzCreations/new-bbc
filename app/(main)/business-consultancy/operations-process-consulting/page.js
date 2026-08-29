import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  Settings,
  Search,
  Workflow,
  Wallet,
  BarChart3,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "Operations & Process Consulting | BizzBuzz Creations",
  description:
    "Operations and process consulting in India — identify the bottlenecks in your day-to-day running and streamline them, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/business-consultancy/operations-process-consulting",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Search,
    heading: "Operational Bottleneck Audit",
    description:
      "We identify exactly where inefficiency is quietly eating into profit in your day-to-day operations, not vague generalizations.",
  },
  {
    icon: Workflow,
    heading: "Process Redesign",
    description:
      "Inefficient processes get redesigned around how work actually flows through your business, cutting unnecessary steps.",
  },
  {
    icon: Settings,
    heading: "Tool & System Optimization",
    description:
      "We assess whether your current tools and systems are helping or hindering operations, and recommend changes where needed.",
  },
  {
    icon: Wallet,
    heading: "Cost & Resource Efficiency",
    description:
      "We identify where resources — time, staff, budget — are being spent inefficiently, and where they'd have more impact.",
  },
  {
    icon: BarChart3,
    heading: "Operational KPI Tracking",
    description:
      "We set up clear metrics to track operational health, so improvements are measurable, not just assumed.",
  },
  {
    icon: RefreshCw,
    heading: "Continuous Improvement Framework",
    description:
      "We help build a habit of ongoing process review, so operations keep improving instead of drifting back to old inefficiencies.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Operations Audit",
    body: "We look closely at your day-to-day running to find exactly where bottlenecks and inefficiencies are actually happening.",
  },
  {
    title: "Process Redesign",
    body: "We redesign the specific processes causing friction, built around your team's actual workflow, not a generic framework.",
  },
  {
    title: "Hands-On Implementation",
    body: "We stay involved through rollout, not just handing over recommendations and disappearing after the first meeting.",
  },
  {
    title: "Ongoing Review & Course Correction",
    body: "We're direct about what's working and honest about what isn't, adjusting the approach as real operational data comes in.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Focused on Real Bottlenecks",
    description:
      "Inefficiency quietly eats into profit every single day. We identify the bottlenecks in your day-to-day running and streamline them.",
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
      "From the first audit to final rollout, we stay by your side long after the first meeting.",
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
      "Think of us less like outside consultants and more like a hired team that's genuinely invested in your operations.",
  },
  {
    number: "006",
    title: "Local Roots, India-Wide Reach",
    description:
      "Born and based in Prayagraj, we understand what it takes to run a business here as well as in the metros.",
  },
];

const FAQS = [
  {
    question: "How do you identify operational bottlenecks?",
    answer:
      "We audit your day-to-day operations closely, looking at where time, resources, and processes are getting stuck or wasted.",
  },
  {
    question: "Will this require changing our existing tools or software?",
    answer:
      "Not always — we assess whether your current tools are helping or hindering first, and recommend changes only where genuinely needed.",
  },
  {
    question: "How long does an operations consulting engagement take?",
    answer:
      "Initial audits typically take a few weeks, with implementation and review continuing over a longer period depending on the scope of changes.",
  },
  {
    question: "Is operations consulting only useful for larger companies?",
    answer:
      "No, even small businesses lose significant time and money to operational inefficiency — the audit and fixes scale to your size.",
  },
  {
    question: "How do you measure if operations have actually improved?",
    answer:
      "We set up clear operational KPIs upfront, so improvements are tracked and measurable, not just assumed.",
  },
];

export default function OperationsProcessConsulting() {
  return (
    <>
      <BpoHero
        heading="Operations & Process Consulting in India"
        description="Inefficiency quietly eats into profit every single day. Through focused operations consulting, we identify the bottlenecks in your day-to-day running and streamline them."
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
              src="/bc-img.png"
              alt="Operations and process consulting at BizzBuzz Creations"
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
              Fix the Inefficiency Eating Into Your Profit
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Inefficiency quietly eats into profit every single day.
              Through focused operations consulting, we identify the
              bottlenecks in your day-to-day running and streamline them.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a business consulting firm based in Prayagraj,
              helping companies locally across Allahabad and Uttar Pradesh,
              as well as across India, run leaner, more efficient
              operations.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our Operations Consulting"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our Operations Consulting Process"
            description="Anyone can point out inefficiency. Not everyone will help you actually fix it. Our four-step process stays involved from audit to rollout."
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
          title="Operations & Process Consulting Firm"
          description="BizzBuzz Creations helps businesses across India streamline day-to-day operations, identifying and fixing the bottlenecks that quietly eat into profit."
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
