import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  CalendarClock,
  Mail,
  Headset,
  Users,
  TrendingUp,
  UserCheck,
} from "lucide-react";

export const metadata = {
  title: "Virtual Assistant & Startup Outsourcing | BizzBuzz Creations",
  description:
    "Virtual assistant and startup outsourcing services in India — flexible remote support for scheduling, admin, and customer queries, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/bpo-services/virtual-assistant-startup-outsourcing",
  },
};

const SERVICE_ITEMS = [
  {
    icon: CalendarClock,
    heading: "Scheduling & Calendar Management",
    description:
      "Meetings, follow-ups, and appointments get organized and confirmed, so founders aren't losing hours to calendar back-and-forth.",
  },
  {
    icon: Mail,
    heading: "Email & Admin Support",
    description:
      "Inbox triage, routine correspondence, and admin paperwork get handled reliably, freeing you to focus on higher-value work.",
  },
  {
    icon: Headset,
    heading: "Customer Query Handling",
    description:
      "Your virtual assistant can field routine customer questions directly, escalating only what genuinely needs your attention.",
  },
  {
    icon: TrendingUp,
    heading: "Research & Data Support",
    description:
      "Market research, competitor tracking, and basic data compilation get handed off, so you're working from findings, not raw digging.",
  },
  {
    icon: Users,
    heading: "Flexible Part-Time or Full-Time VAs",
    description:
      "Engage a virtual assistant for a few hours a week or full-time, matched to how much support your stage of growth actually needs.",
  },
  {
    icon: UserCheck,
    heading: "Scale-as-You-Grow Model",
    description:
      "Start small and add more virtual assistant hours or team members only once the workload genuinely demands it.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Understand Founder's Workload",
    body: "We learn what's actually eating your time — scheduling, admin, support — before matching you with the right kind of help.",
  },
  {
    title: "Match the Right Virtual Assistant",
    body: "We assign a virtual assistant suited to your tools, industry, and communication style, not a random generalist.",
  },
  {
    title: "Onboard & Set Communication Rhythm",
    body: "We agree on check-ins, tools, and reporting cadence upfront, so handoffs feel smooth from week one.",
  },
  {
    title: "Scale Support as You Grow",
    body: "Hours or team size increase only as your workload genuinely grows, not on a fixed schedule that outpaces your needs.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Founder-Friendly Engagement",
    description:
      "Built for founders and small teams who need reliable help without hiring a full in-house role.",
  },
  {
    number: "002",
    title: "No Long-Term Lock-In",
    description:
      "Start with what you need today and adjust hours or scope as your business changes.",
  },
  {
    number: "003",
    title: "Trained on Startup Tools",
    description:
      "Our virtual assistants are comfortable with common startup tools — CRMs, calendars, project trackers — from day one.",
  },
  {
    number: "004",
    title: "Flexible Hours",
    description:
      "Engage support part-time or full-time, matched to your actual workload rather than a fixed package.",
  },
  {
    number: "005",
    title: "Direct Communication",
    description:
      "You work directly with your assigned virtual assistant, not through a rotating ticket queue.",
  },
  {
    number: "006",
    title: "Affordable Entry Point",
    description:
      "A lower-cost way to get admin, scheduling, and support help without the overhead of a full-time hire.",
  },
];

const FAQS = [
  {
    question: "What's the minimum commitment for a virtual assistant?",
    answer:
      "We can start with a few hours a week — there's no requirement to commit to a large block of hours upfront.",
  },
  {
    question: "What tools do your virtual assistants use?",
    answer:
      "We work with common tools like Google Workspace, CRMs, project trackers, and calendar apps, and adapt to whatever your startup already uses.",
  },
  {
    question: "Should I hire a part-time or full-time virtual assistant?",
    answer:
      "It depends on your workload — we'll help you assess whether part-time support is enough or a full-time assistant makes more sense.",
  },
  {
    question: "How much does virtual assistant support cost?",
    answer:
      "Costs scale with hours and scope of work — we'll give you a clear, tailored quote based on what you actually need.",
  },
  {
    question: "How quickly can a virtual assistant start?",
    answer:
      "Once we understand your workload and tools, we can typically match and onboard a virtual assistant within a few days.",
  },
];

export default function VirtualAssistantStartupOutsourcing() {
  return (
    <>
      <BpoHero
        heading="Virtual Assistant & Startup Outsourcing in India"
        description="Not every business needs a 50-seat floor. Hand off scheduling, support, and admin work through flexible remote team outsourcing, scaling up only when it's genuinely needed."
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
              alt="Virtual assistant and startup outsourcing at BizzBuzz Creations"
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
              Support Sized for Founders, Not Enterprises
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Not every business needs a 50-seat floor. Our virtual assistant
              services and startup outsourcing services let founders and
              small teams hand off scheduling, support, and admin work
              through flexible remote team outsourcing, scaling up only when
              the workload genuinely demands it.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a BPO and outsourcing partner based in Prayagraj,
              serving startups locally across Allahabad and Uttar Pradesh, as
              well as founders across India, taking their first step into
              outsourcing.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our Virtual Assistant Services"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our Virtual Assistant Onboarding Process"
            description="We match support to your actual workload, not a fixed package, so founders get exactly the help they need without overpaying for unused hours."
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
          title="Virtual Assistant & Startup Outsourcing Company"
          description="BizzBuzz Creations supports founders and small teams across India with flexible virtual assistant and startup outsourcing services that scale as they grow."
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
