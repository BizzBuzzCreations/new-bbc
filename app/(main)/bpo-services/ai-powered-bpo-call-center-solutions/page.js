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
  Mic,
  Bot,
  UserCheck,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "AI-Powered BPO & Call Center Solutions | BizzBuzz Creations",
  description:
    "AI-powered BPO and call center solutions in India — smart call routing, live transcription, and chatbot support layered on trained agents, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/bpo-services/ai-powered-bpo-call-center-solutions",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Workflow,
    heading: "Smart Call Routing",
    description:
      "Calls get directed to the right agent or queue automatically based on the query type, so customers reach someone useful faster instead of bouncing between transfers.",
  },
  {
    icon: Mic,
    heading: "Live Call Transcription",
    description:
      "Real-time transcription gives supervisors and agents a searchable record of every call, making QA, training, and dispute resolution far less painful.",
  },
  {
    icon: Bot,
    heading: "AI Chatbot Customer Support",
    description:
      "Chatbots handle repetitive, common questions instantly around the clock, freeing your agents to focus on calls that actually need a human touch.",
  },
  {
    icon: UserCheck,
    heading: "Seamless Human Handoff",
    description:
      "When AI hits its limit, the conversation hands off to a trained agent with full context, so customers never have to repeat themselves.",
  },
  {
    icon: BarChart3,
    heading: "Sentiment & Quality Monitoring",
    description:
      "AI-assisted sentiment analysis flags frustrated callers and quality issues early, so problems get caught before they become churn.",
  },
  {
    icon: ShieldCheck,
    heading: "Data Security & Compliance",
    description:
      "Call data and transcripts are handled under strict access controls and NDA-backed processes, in line with India's DPDP Act, 2023.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Requirement & Workflow Mapping",
    body: "We study your current call flows and pain points to decide exactly where AI genuinely helps and where human judgment stays essential.",
  },
  {
    title: "AI Tool Configuration & Training",
    body: "Routing rules, transcription, and chatbot scripts are configured and trained on your actual product and tone, not a generic template.",
  },
  {
    title: "Agent + AI Integration Launch",
    body: "Agents and AI tools go live together with close monitoring in the first weeks, so handoffs feel smooth from day one.",
  },
  {
    title: "Ongoing Monitoring & Optimization",
    body: "We track call outcomes and sentiment data continuously, refining routing and chatbot responses as real conversations reveal gaps.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "AI-Assisted, Human-Led",
    description:
      "We use AI only where it genuinely helps — routing, transcription, first responses — while trained agents handle everything that needs real judgment.",
  },
  {
    number: "002",
    title: "Faster First Response",
    description:
      "Smart routing and chatbot triage mean customers wait less, even during peak call volumes.",
  },
  {
    number: "003",
    title: "Trained, Dedicated Agents",
    description:
      "The humans behind the AI are trained specifically on your scripts, tone, and product, not a generic floor.",
  },
  {
    number: "004",
    title: "Transparent Reporting",
    description:
      "Call recordings, transcripts, and sentiment reports are available on request, not locked behind a monthly summary.",
  },
  {
    number: "005",
    title: "Data Security First",
    description:
      "NDA available before any project details or access are shared, with handling built around India's DPDP Act, 2023.",
  },
  {
    number: "006",
    title: "Scalable Engagement",
    description:
      "We scale AI and agent capacity with your business, not ahead of it — start small and add capacity as workload actually grows.",
  },
];

const FAQS = [
  {
    question: "What is an AI-powered BPO?",
    answer:
      "It combines human agents with AI tools like smart routing, live transcription, and chatbots to deliver faster, more cost-efficient support without losing the human touch where it matters.",
  },
  {
    question: "Will AI replace human agents on my account?",
    answer:
      "No — AI handles repetitive, high-volume tasks, while trained agents handle everything that needs real judgment, empathy, or complex problem-solving.",
  },
  {
    question: "Is my call and customer data secure with AI tools involved?",
    answer:
      "Yes, we follow NDAs, strict access controls, and data handling practices aligned with India's DPDP Act, 2023, regardless of which tools are used.",
  },
  {
    question: "Can your AI tools integrate with our existing systems?",
    answer:
      "Yes, we configure routing, transcription, and chatbot tools to work with your existing CRM, helpdesk, or telephony setup wherever possible.",
  },
  {
    question: "How much does an AI-powered BPO setup cost?",
    answer:
      "Costs depend on call volume, the AI tools needed, and team size — we scope every engagement and give you a clear, tailored quote.",
  },
];

export default function AiPoweredBpoCallCenterSolutions() {
  return (
    <>
      <BpoHero
        heading="AI-Powered BPO & Call Center Solutions in India"
        description="Smart call routing, live transcription, and chatbot support layered on real, trained agents — so your team only steps in when a call truly needs a human touch."
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
              src="/CLI-Caller-Line-Identification.webp"
              alt="AI-powered call center solutions at BizzBuzz Creations"
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
              AI That Helps Your Agents, Not Replaces Them
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              We layer AI call center solutions on top of real agents — smart
              call routing, live transcription, and chatbot customer support
              services that pick up repetitive questions instantly. Your team
              only steps in for calls that truly need a human touch, so
              nothing slips through and nothing feels robotic.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a BPO and customer support company based in
              Prayagraj, serving clients locally across Allahabad and Uttar
              Pradesh, as well as businesses across India, built around
              transparent processes and teams tailored to your workflow.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our AI-Powered BPO Solutions"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our AI-Powered BPO Process"
            description="We build every engagement around understanding your workflow first, then decide exactly where AI genuinely helps and where trained agents take over."
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
          title="AI-Powered BPO & Call Center Company"
          description="BizzBuzz Creations blends AI tools with trained human agents to deliver faster, more cost-efficient BPO and call center support for businesses across India and beyond."
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
