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
  Plug,
  FileText,
  Bell,
  RefreshCw,
  BarChart3,
} from "lucide-react";

export const metadata = {
  title: "Workflow & Process Automation | BizzBuzz Creations",
  description:
    "AI workflow and process automation in India — connect your tools so approvals, reports, follow-ups, and data entry run without manual chasing, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/ai-solutions/workflow-process-automation",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Plug,
    heading: "Tool & System Integration",
    description:
      "We connect your CRM, spreadsheets, and other tools so data flows automatically between systems instead of manual re-entry.",
  },
  {
    icon: FileText,
    heading: "Automated Reports & Approvals",
    description:
      "Recurring reports and approval workflows run automatically, freeing your team from chasing signatures and compiling data manually.",
  },
  {
    icon: Bell,
    heading: "Automated Follow-Ups",
    description:
      "Leads and customers get timely automated follow-ups, so opportunities don't quietly slip through the cracks.",
  },
  {
    icon: Workflow,
    heading: "AI-Powered Workflow Design",
    description:
      "We use AI to identify where a workflow can be automated intelligently, not just scripted rigidly step by step.",
  },
  {
    icon: RefreshCw,
    heading: "Error Reduction & Consistency",
    description:
      "Automated processes cut down the human error and inconsistency that creeps into manual, repetitive work at volume.",
  },
  {
    icon: BarChart3,
    heading: "Ongoing Monitoring & Refinement",
    description:
      "We monitor automated workflows after launch and refine them as your processes or volume changes over time.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Understanding Your Workflow",
    body: "We learn where your team spends repetitive hours and where approvals, reports, or follow-ups tend to get stuck.",
  },
  {
    title: "Building the Right Automation",
    body: "A custom automation gets built around that exact gap, connecting the tools you already use, not replacing them.",
  },
  {
    title: "Testing With Your Team",
    body: "Every automation is tested with the people who'll actually use it before it goes live, so it fits real workflows.",
  },
  {
    title: "Launch, Refine & Monitor",
    body: "We stay involved after launch, refining automation based on real usage instead of leaving it running blind.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Practical, Not Generic",
    description:
      "We don't sell generic automation software off a shelf — every workflow is built for what your specific business actually needs.",
  },
  {
    number: "002",
    title: "Built Around Your Real Workflow",
    description:
      "We start by understanding how your business actually runs before building any automation.",
  },
  {
    number: "003",
    title: "Connects Your Existing Tools",
    description:
      "Automation integrates with your CRM, spreadsheets, and existing tools instead of requiring you to switch systems.",
  },
  {
    number: "004",
    title: "AI-Powered, Not Just Rigid Scripts",
    description:
      "We use AI to handle workflow decisions intelligently, not just rigid, brittle step-by-step scripts.",
  },
  {
    number: "005",
    title: "Tested With Your Team",
    description:
      "Every automation is tested with your team before launch, not handed over as an untested demo.",
  },
  {
    number: "006",
    title: "Refined After Launch",
    description:
      "We don't disappear after handoff — every system is refined based on real usage, not left running blind.",
  },
];

const FAQS = [
  {
    question: "What kinds of processes can you automate?",
    answer:
      "Approvals, reports, follow-ups, and data entry between systems are common candidates — we assess your specific workflow to identify the best opportunities.",
  },
  {
    question: "Will automation replace my team's jobs?",
    answer:
      "No, automation removes repetitive manual tasks so your team can focus on decisions and work that genuinely needs judgment.",
  },
  {
    question: "Can automation integrate with the tools we already use?",
    answer:
      "Yes, we connect automation to your existing CRM, spreadsheets, and other tools wherever integration is technically possible.",
  },
  {
    question: "How is AI-powered automation different from basic scripts?",
    answer:
      "AI-powered automation can make more nuanced decisions within a workflow, rather than following only rigid, pre-defined rules that break on edge cases.",
  },
  {
    question: "How long does it take to build a workflow automation?",
    answer:
      "Simple automations can be live within a couple of weeks; more complex, multi-system workflows take longer, depending on integrations needed.",
  },
];

export default function WorkflowProcessAutomation() {
  return (
    <>
      <BpoHero
        heading="Workflow & Process Automation in India"
        description="Our AI workflow automation connects your tools together, so approvals, reports, follow-ups, and data entry run without anyone chasing them manually."
        img="/aiservice.webp"
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
              src="/image-4.webp"
              alt="Workflow and process automation at BizzBuzz Creations"
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
              Stop Chasing Approvals, Reports, and Follow-Ups
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Our AI workflow automation connects your tools together, so
              approvals, reports, follow-ups, and data entry run without
              anyone chasing them manually.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re an AI solutions company based in Prayagraj,
              helping businesses locally across Allahabad and Uttar
              Pradesh, as well as across India, automate the repetitive
              work that quietly eats up hours every week.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our Workflow Automation"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our Workflow Automation Process"
            description="We're not a company that hands you a demo and disappears. Every automation is built around your real workflow, tested with your team, and refined after launch."
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
          title="Workflow & Process Automation Company"
          description="BizzBuzz Creations builds AI-powered workflow automation for businesses across India, connecting existing tools so repetitive work runs without manual chasing."
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
