import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  Workflow,
  Bot,
  RefreshCw,
  Puzzle,
  LineChart,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Business Process Automation Services | BizzBuzz Creations",
  description:
    "Business process automation services in India — map your workflow, automate the repetitive middle, and free your team to focus on decisions, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/bpo-services/business-process-automation-services",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Workflow,
    heading: "Workflow Mapping & Analysis",
    description:
      "We start by mapping your actual workflow end-to-end, so automation targets the real bottlenecks instead of guesswork.",
  },
  {
    icon: RefreshCw,
    heading: "Repetitive Task Automation",
    description:
      "Data copying, status updates, and routine approvals get automated, freeing your in-house team to focus on decisions, not repetitive clicks.",
  },
  {
    icon: Bot,
    heading: "Custom Automation Tools",
    description:
      "Where off-the-shelf automation tools don't fit, we build custom scripts and workflows tailored to how your business actually operates.",
  },
  {
    icon: Puzzle,
    heading: "Third-Party System Integration",
    description:
      "We connect your CRM, spreadsheets, and other tools so data flows automatically between systems instead of being re-entered manually.",
  },
  {
    icon: ShieldCheck,
    heading: "Error Reduction & Accuracy",
    description:
      "Automated processes cut down the human error that creeps into manual, repetitive work, especially at high volume.",
  },
  {
    icon: LineChart,
    heading: "Ongoing Process Optimization",
    description:
      "As your business changes, we refine and extend the automation, keeping it aligned with how your workflow actually evolves.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Map Current Workflow",
    body: "We document how the process actually runs today — every handoff, tool, and manual step — before proposing any changes.",
  },
  {
    title: "Identify Automation Opportunities",
    body: "We flag exactly which steps are safe and valuable to automate, and which still need human judgment.",
  },
  {
    title: "Build & Integrate Automation",
    body: "We build and connect the automation to your existing tools, testing it against real scenarios before rollout.",
  },
  {
    title: "Monitor & Refine",
    body: "We track performance after launch and adjust the automation as your process or volume changes over time.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Process-First Approach",
    description:
      "We understand your workflow before recommending any tool, so automation solves the actual bottleneck, not a symptom of it.",
  },
  {
    number: "002",
    title: "No One-Size-Fits-All Tools",
    description:
      "We pick or build the right automation approach for your specific process instead of forcing a generic platform on everything.",
  },
  {
    number: "003",
    title: "Integrates With Your Stack",
    description:
      "Automation connects with the CRM, spreadsheets, and tools you already use, instead of requiring you to switch systems.",
  },
  {
    number: "004",
    title: "Faster Turnaround",
    description:
      "Automated steps complete in a fraction of the time manual processing takes, especially at scale.",
  },
  {
    number: "005",
    title: "Measurable Time Savings",
    description:
      "We track hours saved and errors reduced, so the value of automation is visible, not just assumed.",
  },
  {
    number: "006",
    title: "Ongoing Support",
    description:
      "We stay on to refine and extend automation as your business processes evolve, not just deliver and disappear.",
  },
];

const FAQS = [
  {
    question: "What kinds of processes can you automate?",
    answer:
      "Repetitive, rule-based tasks are the best fit — data entry, status updates, report generation, approvals, and data transfers between systems.",
  },
  {
    question: "Will automation replace my staff?",
    answer:
      "No — automation removes the repetitive, low-value parts of a process so your team can focus on decisions and work that actually needs judgment.",
  },
  {
    question: "Can automation integrate with our existing software?",
    answer:
      "Yes, we connect automation to your existing CRM, spreadsheets, and other tools wherever integration is technically possible.",
  },
  {
    question: "How much does business process automation cost?",
    answer:
      "It depends on the complexity of the process and the tools involved — we scope every project and provide a clear, tailored quote.",
  },
  {
    question: "How long does it take to implement automation?",
    answer:
      "Simple automations can be live within a couple of weeks; more complex, multi-system workflows take longer. We'll give you a realistic timeline upfront.",
  },
];

export default function BusinessProcessAutomationServices() {
  return (
    <>
      <BpoHero
        heading="Business Process Automation Services in India"
        description="We map your workflow first, then automate the boring middle, freeing your in-house team to focus on decisions, not data-copying."
        img="/BPO%20service.png"
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
              src="/BPO.webp"
              alt="Business process automation at BizzBuzz Creations"
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
              Stop Losing Hours to Manual, Repetitive Work
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Manual, repetitive processes are where most companies quietly
              lose hours every week. Our business process automation services
              map your workflow first, then automate the boring middle,
              freeing your in-house team to focus on decisions, not
              data-copying.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a BPO and process automation partner based in
              Prayagraj, serving clients locally across Allahabad and Uttar
              Pradesh, as well as businesses across India, tailored to your
              specific workflows and goals.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our Automation Services"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our Business Process Automation Process"
            description="We map before we automate, so every change targets a real bottleneck in your workflow — not a guess at what might help."
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
          title="Business Process Automation Company"
          description="BizzBuzz Creations helps businesses across India automate repetitive workflows without losing visibility or control over how the process actually runs."
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
