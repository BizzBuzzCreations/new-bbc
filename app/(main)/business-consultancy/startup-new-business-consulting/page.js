import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  Rocket,
  Lightbulb,
  Wallet,
  Megaphone,
  FileText,
  Users,
} from "lucide-react";

export const metadata = {
  title: "Startup & New Business Consulting | BizzBuzz Creations",
  description:
    "Startup and new business consulting in India — guidance through business models, funding readiness, and go-to-market strategy, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/business-consultancy/startup-new-business-consulting",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Lightbulb,
    heading: "Business Model Validation",
    description:
      "We help first-time founders pressure-test their business model against real market signals, before too much time and money go in.",
  },
  {
    icon: Megaphone,
    heading: "Go-to-Market Strategy",
    description:
      "We build a practical go-to-market plan — who you're selling to, how you'll reach them, and what launch actually looks like.",
  },
  {
    icon: FileText,
    heading: "Business Plan & Documentation",
    description:
      "We help structure a clear business plan and supporting documentation, useful for both internal clarity and external conversations.",
  },
  {
    icon: Wallet,
    heading: "Funding Readiness Guidance",
    description:
      "We help founders get pitch-ready and understand what investors or lenders typically expect before approaching them.",
  },
  {
    icon: Users,
    heading: "Founding Team Structure Advice",
    description:
      "We advise on roles, equity, and structure for founding teams, helping avoid disputes that derail promising startups later.",
  },
  {
    icon: Rocket,
    heading: "Early-Stage Growth Planning",
    description:
      "Beyond launch, we help plan the first stages of growth, so early traction gets built on rather than squandered.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Idea & Model Discovery",
    body: "We understand your idea, target customer, and business model before offering any direction, grounded in your actual market.",
  },
  {
    title: "Validation & Planning",
    body: "We pressure-test the model and build a practical plan covering go-to-market, structure, and early milestones.",
  },
  {
    title: "Hands-On Launch Support",
    body: "We stay involved through your launch, not just handing over a plan and disappearing after the first meeting.",
  },
  {
    title: "Ongoing Review & Course Correction",
    body: "We're direct about what's working and honest about what isn't, adjusting the plan as real early-stage results come in.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "A Partner Who's Done It Before",
    description:
      "Our startup consulting guides first-time founders from a partner who's genuinely done it before, not a textbook consultant.",
  },
  {
    number: "002",
    title: "No Generic Playbooks",
    description:
      "Every recommendation is built around your specific idea and market, not a template pulled off a shelf.",
  },
  {
    number: "003",
    title: "We Stay Involved",
    description:
      "From the first idea discussion to launch, we stay by your side, not just handing over a plan.",
  },
  {
    number: "004",
    title: "Direct & Honest",
    description:
      "We're direct about what's working, honest about what isn't, and focused on outcomes you can actually measure.",
  },
  {
    number: "005",
    title: "A Team, Not Outside Consultants",
    description:
      "Think of us less like outside consultants and more like a hired team that's genuinely invested in your startup's success.",
  },
  {
    number: "006",
    title: "Local Roots, India-Wide Reach",
    description:
      "Born and based in Prayagraj, we understand what it takes to launch a business here as well as in the metros.",
  },
];

const FAQS = [
  {
    question: "I only have an idea, no business yet — can you still help?",
    answer:
      "Yes, we regularly work with founders at the idea stage, helping validate the business model before significant time and money go in.",
  },
  {
    question: "Do you help with fundraising directly?",
    answer:
      "We help you get pitch-ready and understand what investors typically expect, though direct fundraising introductions depend on the specific engagement.",
  },
  {
    question: "How much does startup consulting cost?",
    answer:
      "It depends on the scope of support needed — we offer flexible engagements based on your stage and goals.",
  },
  {
    question: "Can you help with co-founder or team structure decisions?",
    answer:
      "Yes, we advise on roles, equity, and structure for founding teams, helping avoid common disputes that derail promising startups.",
  },
  {
    question: "How long does startup consulting typically last?",
    answer:
      "It varies — some founders need a focused engagement around launch, while others continue working with us through early growth stages.",
  },
];

export default function StartupNewBusinessConsulting() {
  return (
    <>
      <BpoHero
        heading="Startup & New Business Consulting in India"
        description="Starting up is exciting and overwhelming. Our startup consulting guides first-time founders through everything from business models to go-to-market strategy, from a partner who's done it before."
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
              src="/teamPic.webp"
              alt="Startup and new business consulting at BizzBuzz Creations"
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
              Guidance From a Partner Who's Done It Before
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Starting up is exciting and overwhelming. Our startup
              consulting guides first-time founders through everything from
              business models to go-to-market strategy, from a partner
              who's done it before.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a business consulting firm based in Prayagraj,
              helping first-time founders locally across Allahabad and
              Uttar Pradesh, as well as startups across India, launch with
              real structure and clarity.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our Startup Consulting"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our Startup Consulting Process"
            description="Anyone can hand you a plan. Not everyone will sit with you through launch and make sure it actually works. Our four-step process stays involved from idea to execution."
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
          title="Startup & New Business Consulting Firm"
          description="BizzBuzz Creations guides first-time founders and new businesses across India through validation, planning, and launch, from a partner who's done it before."
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
