import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  Mail,
  UserPlus,
  ShoppingCart,
  RefreshCw,
  BarChart3,
  FlaskConical,
} from "lucide-react";

export const metadata = {
  title: "Email Marketing Automation | BizzBuzz Creations",
  description:
    "Email marketing automation in India — welcome sequences, abandoned cart reminders, and re-engagement campaigns, every email timed, tested, and tracked, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/marketing-automation/email-marketing-automation",
  },
};

const SERVICE_ITEMS = [
  {
    icon: UserPlus,
    heading: "Welcome & Onboarding Sequences",
    description:
      "New subscribers and customers get a structured welcome sequence that introduces your brand and moves them toward their first purchase.",
  },
  {
    icon: ShoppingCart,
    heading: "Abandoned Cart Reminders",
    description:
      "Shoppers who leave without checking out get timely, well-timed reminder emails, recovering sales you'd otherwise lose.",
  },
  {
    icon: RefreshCw,
    heading: "Re-Engagement Campaigns",
    description:
      "Inactive subscribers get targeted campaigns designed to bring them back, rather than quietly going ignored.",
  },
  {
    icon: Mail,
    heading: "Behavior-Triggered Emails",
    description:
      "Emails trigger automatically based on real customer actions — a click, a purchase, a browse — not a fixed, generic send schedule.",
  },
  {
    icon: FlaskConical,
    heading: "Subject Line & Content Testing",
    description:
      "We test subject lines and content variations continuously, so email performance improves over time instead of staying flat.",
  },
  {
    icon: BarChart3,
    heading: "Open Rate & Conversion Tracking",
    description:
      "Every email is tracked for opens, clicks, and conversions, giving you a clear picture of what's actually working.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Mapping the Customer Journey",
    body: "We look at where leads and customers actually stall — a signup never followed up, a cart abandoned and forgotten.",
  },
  {
    title: "Building Sequences & Messaging",
    body: "We design the actual email sequences and write the messaging ourselves, rather than handing you a generic tool template.",
  },
  {
    title: "Connecting to Your CRM & Launch",
    body: "Every sequence gets connected to your CRM so your sales team wakes up to warm leads, not cold silence, once it goes live.",
  },
  {
    title: "Monthly Review & Optimization",
    body: "Every workflow is reviewed and improved monthly — not left running on autopilot and forgotten after setup.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Timed, Tested, and Tracked",
    description:
      "Every email is timed, tested, and tracked, not just scheduled and forgotten after launch.",
  },
  {
    number: "002",
    title: "Behavior-Based, Not Generic Blasts",
    description:
      "Emails trigger based on real customer behavior, not a one-size-fits-all newsletter blast to your whole list.",
  },
  {
    number: "003",
    title: "We Write the Messaging Ourselves",
    description:
      "We don't sell you a tool subscription and walk away — we build the sequence and write the messaging ourselves.",
  },
  {
    number: "004",
    title: "CRM-Connected",
    description:
      "Email automation connects directly to your CRM, so engagement data feeds into lead status automatically.",
  },
  {
    number: "005",
    title: "Reviewed Monthly",
    description:
      "Every workflow is reviewed and improved monthly, not left running on autopilot and forgotten.",
  },
  {
    number: "006",
    title: "Built Around Real Behavior",
    description:
      "We build sequences around how your customers actually behave, not a generic funnel template.",
  },
];

const FAQS = [
  {
    question: "What's the difference between email marketing and email automation?",
    answer:
      "Email marketing is often a single manual send; email automation triggers timed, personalized sequences automatically based on subscriber behavior.",
  },
  {
    question: "Can you recover abandoned cart sales?",
    answer:
      "Yes, abandoned cart reminder sequences are one of our core email automation services, designed specifically to recover near-miss sales.",
  },
  {
    question: "Do you write the email content, or do I need to provide it?",
    answer:
      "We write the email sequences and messaging as part of the service, working with your brand voice and goals.",
  },
  {
    question: "How do you measure email automation performance?",
    answer:
      "We track opens, clicks, and conversions for every sequence, and continuously test subject lines and content to improve results.",
  },
  {
    question: "Which email platforms do you work with?",
    answer:
      "We work with popular email marketing platforms and can assess compatibility with your existing setup during onboarding.",
  },
];

export default function EmailMarketingAutomation() {
  return (
    <>
      <BpoHero
        heading="Email Marketing Automation in India"
        description="We set up email automation that sends the right message at the right moment: welcome sequences, abandoned cart reminders, and re-engagement campaigns, every email timed, tested, and tracked."
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
              src="/lead%20generation.webp"
              alt="Email marketing automation at BizzBuzz Creations"
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
              The Right Email, at the Right Moment
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              We set up email automation that sends the right message at
              the right moment: welcome sequences, abandoned cart
              reminders, and re-engagement campaigns, every email timed,
              tested, and tracked.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a marketing automation agency based in Prayagraj,
              helping businesses locally across Allahabad and Uttar
              Pradesh, as well as across India, turn timely emails into
              real, tracked results.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our Email Marketing Automation"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our Email Automation Process"
            description="We map where leads and customers stall first, then build and connect sequences so every email actually moves someone closer to buying."
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
          title="Email Marketing Automation Company"
          description="BizzBuzz Creations builds email automation sequences for businesses across India, timed, tested, and tracked to actually drive results."
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
