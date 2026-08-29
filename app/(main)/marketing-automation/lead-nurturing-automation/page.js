import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  Filter,
  Clock,
  FileText,
  Gift,
  BarChart3,
  Target,
} from "lucide-react";

export const metadata = {
  title: "Lead Nurturing Automation | BizzBuzz Creations",
  description:
    "Lead nurturing automation in India — keep prospects warm with timed content, reminders, and offers until they're ready to talk to your team, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/marketing-automation/lead-nurturing-automation",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Clock,
    heading: "Timed Nurture Sequences",
    description:
      "Leads not ready to buy today get a structured sequence of timed touchpoints, keeping your brand top of mind until they are.",
  },
  {
    icon: FileText,
    heading: "Educational Content Delivery",
    description:
      "We deliver helpful content that addresses common objections and questions, moving leads closer to a decision naturally.",
  },
  {
    icon: Gift,
    heading: "Timed Offers & Incentives",
    description:
      "Relevant offers get delivered at the right point in the nurture sequence, giving hesitant leads a reason to act.",
  },
  {
    icon: Target,
    heading: "Lead Scoring by Engagement",
    description:
      "Leads get scored based on how they engage with nurture content, so your sales team knows exactly who's warming up.",
  },
  {
    icon: Filter,
    heading: "Sales-Ready Handoff",
    description:
      "Once a lead shows real buying signals, it gets flagged and handed to your sales team automatically, not left sitting in a queue.",
  },
  {
    icon: BarChart3,
    heading: "Nurture Performance Tracking",
    description:
      "We track engagement and conversion at each stage of the nurture sequence, refining it based on what's actually working.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Understanding Your Sales Cycle",
    body: "We learn how long your typical sales cycle is and what objections or questions usually come up before someone's ready to buy.",
  },
  {
    title: "Building the Nurture Sequence",
    body: "We design the actual sequence of content, offers, and touchpoints ourselves, rather than handing you a generic tool template.",
  },
  {
    title: "Connecting to Your CRM & Launch",
    body: "The nurture sequence connects to your CRM so lead scores and sales-ready flags update automatically as it runs.",
  },
  {
    title: "Monthly Review & Optimization",
    body: "Every workflow is reviewed and improved monthly — not left running on autopilot and forgotten after setup.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Not a Lost Sale, Just Not Ready Yet",
    description:
      "A lead that isn't ready to buy today doesn't mean a lost sale — our nurture automation keeps them warm until they are.",
  },
  {
    number: "002",
    title: "We Build the Sequence Ourselves",
    description:
      "We don't sell you a tool subscription and walk away — we design the content and offers ourselves, based on your sales cycle.",
  },
  {
    number: "003",
    title: "Engagement-Based Scoring",
    description:
      "Leads get scored based on real engagement with nurture content, not a generic time-based assumption.",
  },
  {
    number: "004",
    title: "CRM-Connected Handoff",
    description:
      "Sales-ready leads get flagged and handed to your team automatically once they show genuine buying signals.",
  },
  {
    number: "005",
    title: "Reviewed Monthly",
    description:
      "Every workflow is reviewed and improved monthly, not left running on autopilot and forgotten.",
  },
  {
    number: "006",
    title: "One Connected System",
    description:
      "We treat lead nurturing as part of one connected system with email, WhatsApp, and CRM, not a separate campaign running blind.",
  },
];

const FAQS = [
  {
    question: "What is lead nurturing automation?",
    answer:
      "It's a system of timed content, offers, and touchpoints that keeps prospects engaged after their first interaction, until they're ready to talk to your sales team.",
  },
  {
    question: "How do you know when a lead is ready to talk to sales?",
    answer:
      "We score leads based on how they engage with nurture content — opens, clicks, and specific actions — and flag genuinely sales-ready leads automatically.",
  },
  {
    question: "Will nurturing feel spammy to my prospects?",
    answer:
      "No, sequences are designed around genuinely useful content and relevant offers timed to your sales cycle, not repetitive generic blasts.",
  },
  {
    question: "How long should a nurture sequence run?",
    answer:
      "It depends on your typical sales cycle — we design the sequence length and pacing around how your specific buyers actually decide.",
  },
  {
    question: "Does lead nurturing automation connect to our CRM?",
    answer:
      "Yes, nurture sequences connect to your CRM so lead scores and sales-ready flags update automatically as prospects engage.",
  },
];

export default function LeadNurturingAutomation() {
  return (
    <>
      <BpoHero
        heading="Lead Nurturing Automation in India"
        description="A lead that isn't ready to buy today doesn't mean a lost sale. Our lead nurturing automation keeps prospects warm with timed content, reminders, and offers until they're ready to talk to your team."
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
              src="/blue-bg.webp"
              alt="Lead nurturing automation at BizzBuzz Creations"
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
              Not Ready to Buy Today Doesn't Mean Lost
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              A lead that isn't ready to buy today doesn't mean a lost
              sale. Our lead nurturing automation keeps prospects warm with
              timed content, reminders, and offers until they're ready to
              talk to your team.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a marketing automation agency based in Prayagraj,
              helping businesses locally across Allahabad and Uttar
              Pradesh, as well as across India, keep prospects engaged
              instead of letting them go cold.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our Lead Nurturing Automation"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our Lead Nurturing Process"
            description="We understand your sales cycle first, then build a sequence of content and offers that keeps prospects warm until they're genuinely ready to buy."
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
          title="Lead Nurturing Automation Company"
          description="BizzBuzz Creations builds lead nurturing automation for businesses across India, keeping prospects engaged with timed content until they're ready to buy."
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
