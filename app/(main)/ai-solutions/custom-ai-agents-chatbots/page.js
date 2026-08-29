import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  Bot,
  MessageSquareText,
  UserCheck,
  CalendarClock,
  Plug,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Custom AI Agents & Chatbots | BizzBuzz Creations",
  description:
    "Custom AI agents and chatbots in India — trained on your business to qualify leads, book calls, and resolve real customer queries, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/ai-solutions/custom-ai-agents-chatbots",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Bot,
    heading: "Business-Trained AI Agents",
    description:
      "Agents are trained on your actual products, policies, and tone, so every chat feels like talking to your team, not a generic bot.",
  },
  {
    icon: MessageSquareText,
    heading: "Customer Query Resolution",
    description:
      "Beyond FAQs, agents resolve real customer questions about orders, services, and policies, reducing load on your support team.",
  },
  {
    icon: UserCheck,
    heading: "Lead Qualification",
    description:
      "Chatbots ask the right questions to qualify leads automatically, so your sales team only spends time on genuinely promising prospects.",
  },
  {
    icon: CalendarClock,
    heading: "Appointment & Call Booking",
    description:
      "Agents can book calls and appointments directly within the conversation, removing friction between interest and a scheduled meeting.",
  },
  {
    icon: Plug,
    heading: "CRM & Tool Integration",
    description:
      "We connect your AI agent to your CRM, calendar, and other tools, so conversations translate directly into actionable records.",
  },
  {
    icon: ShieldCheck,
    heading: "Human Handoff & Oversight",
    description:
      "When a conversation needs real judgment, it hands off to your team smoothly, with full context so nothing gets repeated.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Understanding Your Conversations",
    body: "We study the questions your customers actually ask and where your team spends the most repetitive time responding.",
  },
  {
    title: "Building & Training the Agent",
    body: "The agent is built and trained on your actual business content, tone, and common scenarios, not a generic script.",
  },
  {
    title: "Testing With Your Team",
    body: "Before launch, your team tests the agent against real scenarios to confirm it handles conversations the way you'd want.",
  },
  {
    title: "Launch, Refine & Monitor",
    body: "We stay involved after launch, refining responses based on real conversations instead of leaving the agent running blind.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Trained on Your Business",
    description:
      "Agents are built around your actual products, policies, and tone, not a generic chatbot template.",
  },
  {
    number: "002",
    title: "More Than FAQs",
    description:
      "Our agents qualify leads, book calls, and resolve real queries, not just repeat answers from a knowledge base.",
  },
  {
    number: "003",
    title: "Tested Before Launch",
    description:
      "Every agent is tested with your team against real scenarios before it ever talks to a customer.",
  },
  {
    number: "004",
    title: "Integrated With Your Tools",
    description:
      "We connect agents to your CRM and calendar, so conversations turn into real, actionable business data.",
  },
  {
    number: "005",
    title: "Smooth Human Handoff",
    description:
      "When a conversation needs real judgment, it hands off to your team with full context, not a frustrating restart.",
  },
  {
    number: "006",
    title: "Refined After Launch",
    description:
      "We don't disappear after handoff — every agent is refined based on real usage, not left running blind.",
  },
];

const FAQS = [
  {
    question: "Will an AI chatbot sound robotic?",
    answer:
      "No, it's trained on your business tone to deliver natural, human-like responses rather than generic scripted replies.",
  },
  {
    question: "Can the chatbot actually qualify leads, not just answer questions?",
    answer:
      "Yes, we build agents to ask qualifying questions and route genuinely promising leads to your sales team automatically.",
  },
  {
    question: "How long does it take to build a custom AI agent?",
    answer:
      "Most AI agents are ready within 2 to 4 weeks, depending on complexity and how many systems it needs to integrate with.",
  },
  {
    question: "Can the agent book appointments directly?",
    answer:
      "Yes, we can connect the agent to your calendar so it books calls and appointments directly within the conversation.",
  },
  {
    question: "What happens when the AI agent can't handle a question?",
    answer:
      "It hands the conversation off to your team smoothly, with full context, so the customer never has to repeat themselves.",
  },
];

export default function CustomAiAgentsChatbots() {
  return (
    <>
      <BpoHero
        heading="Custom AI Agents & Chatbots in India"
        description="We design AI agents that do more than answer FAQs — they qualify leads, book calls, and resolve real customer queries, trained on your actual business so every chat feels like talking to your team."
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
              src="/aiImg.webp"
              alt="Custom AI agents and chatbots at BizzBuzz Creations"
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
              A Chat That Feels Like Talking to Your Team
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              We design AI agents that do more than answer FAQs — they
              qualify leads, book calls, and resolve real customer queries,
              trained on your actual business so every chat feels like
              talking to your team.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re an AI solutions company based in Prayagraj,
              helping businesses locally across Allahabad and Uttar
              Pradesh, as well as across India, put practical AI agents to
              work without the generic, off-the-shelf feel.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our AI Agents & Chatbots"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our AI Agent Development Process"
            description="We're not a company that hands you a demo and disappears. Every agent is built around your real conversations, tested with your team, and refined after launch."
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
          title="Custom AI Agents & Chatbots Company"
          description="BizzBuzz Creations builds custom AI agents and chatbots for businesses across India, trained on real business content so conversations feel genuinely helpful, not generic."
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
