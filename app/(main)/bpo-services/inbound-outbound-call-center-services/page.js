import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  PhoneIncoming,
  PhoneOutgoing,
  Users,
  ClipboardList,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export const metadata = {
  title: "Inbound & Outbound Call Center Services | BizzBuzz Creations",
  description:
    "Inbound and outbound call center services in India — agents trained on your scripts, tone, and product for sales, support, and collection calls, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/bpo-services/inbound-outbound-call-center-services",
  },
};

const SERVICE_ITEMS = [
  {
    icon: PhoneIncoming,
    heading: "Inbound Customer Support Calls",
    description:
      "Trained agents handle customer queries, order status, and troubleshooting calls with your scripts and tone, not a generic script read out from a random floor.",
  },
  {
    icon: PhoneOutgoing,
    heading: "Outbound Sales & Collection Calls",
    description:
      "From lead follow-ups to payment reminders, our outbound teams run structured calling campaigns that stay on-brand and compliant.",
  },
  {
    icon: Users,
    heading: "Script & Brand Training",
    description:
      "Every agent is trained specifically on your product, tone, and common objections before they take a single live call.",
  },
  {
    icon: ClipboardList,
    heading: "Call Quality Monitoring",
    description:
      "Regular call reviews and scoring keep agents consistent with your standards, catching drift before it affects customers.",
  },
  {
    icon: TrendingUp,
    heading: "Multi-Language Support",
    description:
      "We staff agents across languages relevant to your customer base, so callers get served in the language they're comfortable with.",
  },
  {
    icon: ShieldCheck,
    heading: "Scalable Agent Teams",
    description:
      "Start with a small team and scale up seats as call volume grows, without a long onboarding cycle each time.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Understand Call Volume & Scripts",
    body: "We review your existing scripts, call volume, and peak hours to size the right team and shift structure for your account.",
  },
  {
    title: "Hire & Train Agents on Your Brand",
    body: "Agents are hired and trained specifically on your scripts, tone, and product, so they represent your brand from the first call.",
  },
  {
    title: "Launch With Live Call Monitoring",
    body: "Your call team goes live with close oversight in the first weeks, so issues get caught early instead of after they've cost you customers.",
  },
  {
    title: "Ongoing Reporting & Optimization",
    body: "Weekly reporting, call recordings, and quality scores keep the engagement improving long after onboarding ends.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Brand-Trained Agents",
    description:
      "Every account gets agents trained specifically on your scripts, tone, and product, not a generic script read out from a random floor.",
  },
  {
    number: "002",
    title: "Transparent Call Recordings",
    description:
      "Call recordings and quality scores are available on request, so you always know what's being said to your customers.",
  },
  {
    number: "003",
    title: "Flexible Scaling",
    description:
      "We scale seats up or down with your actual call volume instead of locking you into a fixed team size.",
  },
  {
    number: "004",
    title: "Quality Assurance Built In",
    description:
      "Regular call reviews catch drift from your standards early, before it becomes a pattern customers notice.",
  },
  {
    number: "005",
    title: "Multi-Shift Coverage",
    description:
      "Shift-based staffing covers your peak call hours and time zones without leaving gaps in coverage.",
  },
  {
    number: "006",
    title: "Direct Account Management",
    description:
      "No ticket queues for active clients — you reach your point of contact directly, not a rotating cast of agents.",
  },
];

const FAQS = [
  {
    question: "What languages can your call center agents support?",
    answer:
      "We staff agents in the languages relevant to your customer base, including Hindi, English, and regional languages on request.",
  },
  {
    question: "Is there a minimum call volume to get started?",
    answer:
      "No fixed minimum — we size a team around your actual volume, whether that's a small pilot or a full-scale operation.",
  },
  {
    question: "How do you handle outbound calling compliance?",
    answer:
      "We follow relevant do-not-disturb and calling regulations, and align scripts and calling windows to your compliance requirements.",
  },
  {
    question: "How is pricing structured for call center services?",
    answer:
      "Pricing is typically based on seats, call volume, or a hybrid model — we'll recommend what fits your usage pattern best.",
  },
  {
    question: "How often will I get reports on call performance?",
    answer:
      "We provide weekly performance reporting by default, with call recordings available on request for deeper review.",
  },
];

export default function InboundOutboundCallCenterServices() {
  return (
    <>
      <BpoHero
        heading="Inbound & Outbound Call Center Services in India"
        description="Agents trained on your scripts, tone, and product handle customer queries, sales calls, and collections — not a generic script read off a random floor."
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
              src="/bpo-img.png"
              alt="Inbound and outbound call center agents at BizzBuzz Creations"
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
              Calls Handled the Way Your Own Team Would
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              From answering customer queries to running outbound sales and
              collection calls, our inbound and outbound call center services
              are staffed by agents trained on your scripts, tone, and
              product, not a generic script read out from a random floor.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a BPO and customer support company based in
              Prayagraj, serving clients locally across Allahabad and Uttar
              Pradesh, as well as businesses across India, with transparent
              reporting on every call.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our Call Center Services"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our Call Center Onboarding Process"
            description="We build every engagement around understanding your call flows first, then train and launch a team that runs like your own, not a distant vendor."
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
          title="Inbound & Outbound Call Center Company"
          description="BizzBuzz Creations runs inbound and outbound call center operations from Prayagraj for businesses across India, with agents trained specifically on your brand."
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
