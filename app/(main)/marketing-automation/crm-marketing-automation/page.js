import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  Contact,
  Plug,
  Bell,
  Users,
  RefreshCw,
  BarChart3,
} from "lucide-react";

export const metadata = {
  title: "CRM Marketing Automation | BizzBuzz Creations",
  description:
    "CRM marketing automation in India — every call, form fill, or reply automatically updates lead status and triggers the next action, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/marketing-automation/crm-marketing-automation",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Plug,
    heading: "CRM Integration & Setup",
    description:
      "We connect your CRM directly to your campaigns and forms, so lead data flows in automatically instead of being entered manually.",
  },
  {
    icon: Bell,
    heading: "Automatic Lead Status Updates",
    description:
      "Every call, form fill, or reply automatically updates lead status in your CRM, so your pipeline reflects reality in real time.",
  },
  {
    icon: RefreshCw,
    heading: "Triggered Follow-Up Actions",
    description:
      "A status change can automatically trigger the next action — an email, a task for your sales rep, or a WhatsApp message — without manual intervention.",
  },
  {
    icon: Users,
    heading: "Lead Scoring & Routing",
    description:
      "Leads get scored and routed to the right salesperson automatically, based on rules built around how your sales process actually works.",
  },
  {
    icon: BarChart3,
    heading: "Pipeline Reporting & Visibility",
    description:
      "We set up reporting so you can see pipeline health and campaign performance directly from your CRM, not a separate spreadsheet.",
  },
  {
    icon: Contact,
    heading: "Duplicate & Data Cleanup",
    description:
      "We help clean up and prevent duplicate records, so your CRM stays a reliable source of truth, not a cluttered mess.",
  },
];

const PROCESS_STEPS = [
  {
    title: "CRM & Workflow Audit",
    body: "We review your current CRM setup and where leads currently stall — a form filled and never followed up, a call logged and forgotten.",
  },
  {
    title: "Integration & Automation Build",
    body: "We connect your CRM to your campaigns and build the automation rules for status updates and triggered actions.",
  },
  {
    title: "Testing & Team Handoff",
    body: "We test the automation with your sales team before launch, so it fits how they actually work day-to-day.",
  },
  {
    title: "Monthly Review & Optimization",
    body: "Every workflow is reviewed and improved monthly, not left running on autopilot and forgotten after setup.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "CRM-Connected, Not Manual",
    description:
      "Every call, form fill, or reply automatically updates lead status and triggers the next action — no manual data entry required.",
  },
  {
    number: "002",
    title: "One Connected System",
    description:
      "We treat your CRM as the hub connecting email, WhatsApp, and lead nurturing, not a separate system running blind.",
  },
  {
    number: "003",
    title: "We Build the Workflow Ourselves",
    description:
      "We don't sell you a tool subscription and walk away — we build the automation and connect it properly ourselves.",
  },
  {
    number: "004",
    title: "Sales Team Wakes Up to Warm Leads",
    description:
      "Automation is built so your sales team wakes up to warm, updated leads, not cold silence and manual data entry.",
  },
  {
    number: "005",
    title: "Reviewed Monthly",
    description:
      "Every workflow is reviewed and improved monthly, not left running on autopilot and forgotten.",
  },
  {
    number: "006",
    title: "Scales With Real Volume",
    description:
      "Startups get plans that scale with real lead volume, not enterprise CRM pricing from day one.",
  },
];

const FAQS = [
  {
    question: "Which CRMs do you work with?",
    answer:
      "We work with popular CRM platforms and can assess compatibility with your specific setup during onboarding.",
  },
  {
    question: "Will this replace our sales team's manual data entry?",
    answer:
      "Yes, automated status updates remove most manual data entry, though your team will still confirm and act on key decisions.",
  },
  {
    question: "Can leads be automatically routed to the right salesperson?",
    answer:
      "Yes, we set up lead scoring and routing rules based on how your sales process actually works, not a generic default.",
  },
  {
    question: "Do you clean up existing duplicate or messy CRM data?",
    answer:
      "Yes, we help clean up and prevent duplicate records as part of setting up reliable automation.",
  },
  {
    question: "How long does CRM automation setup take?",
    answer:
      "Setup typically takes a few weeks, depending on your CRM's complexity and how many campaigns and channels need to be connected.",
  },
];

export default function CrmMarketingAutomation() {
  return (
    <>
      <BpoHero
        heading="CRM Marketing Automation in India"
        description="Your CRM shouldn't be a place where leads go to be forgotten. We connect automation directly to your campaigns, so every call, form fill, or reply automatically updates lead status and triggers the next action."
        img="/digitalmarketing.webp"
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
              src="/leadGen.webp"
              alt="CRM marketing automation at BizzBuzz Creations"
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
              No More Leads Forgotten in Your CRM
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Your CRM shouldn't be a place where leads go to be forgotten.
              We connect automation directly to your campaigns, so every
              call, form fill, or reply automatically updates lead status
              and triggers the next action.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a marketing automation agency based in Prayagraj,
              helping businesses locally across Allahabad and Uttar
              Pradesh, as well as across India, close the follow-up gap
              that quietly costs sales.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our CRM Marketing Automation"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our CRM Automation Process"
            description="We look at where leads actually stall in your CRM first, then build and connect automation so your sales team wakes up to warm leads, not cold silence."
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
          title="CRM Marketing Automation Company"
          description="BizzBuzz Creations connects CRM automation for businesses across India, so every lead interaction updates your pipeline and triggers the next action automatically."
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
