import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Bot,
  Rocket,
  Building2,
  Building,
  ShoppingCart,
  Handshake,
  RefreshCw,
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

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Startups & Early-Stage Businesses",
    desc: "Startups need to answer customer questions instantly without hiring support staff before revenue justifies it. We build lean AI agents trained on your product, letting startups handle inbound interest without a support team yet.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMBs often lose leads to slow response times outside business hours. We build AI agents sized for SMB budgets, qualifying leads and answering questions around the clock without a full support hire.",
  },
  {
    icon: Building,
    title: "Enterprises & Large Organizations",
    desc: "Enterprises need AI agents that integrate with existing CRM and support systems reliably at scale. We build enterprise AI agents structured for high conversation volume and integration with existing internal tools.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce & Retail Brands",
    desc: "Ecommerce brands get repetitive order and product questions that eat into support time. We build AI agents trained on your catalog and policies to resolve routine queries instantly, day or night.",
  },
  {
    icon: Handshake,
    title: "Agencies Needing an AI Development Partner",
    desc: "Agencies need a technical partner to build AI agents for clients without hiring in-house AI talent. We work as a white-label AI agent development partner, delivering builds agencies can present as their own.",
  },
  {
    icon: RefreshCw,
    title: "Businesses Replacing a Generic Chatbot",
    desc: "Businesses running an off-the-shelf chatbot that feels robotic need a genuine upgrade. We replace generic chatbots with agents trained specifically on your business, tone, and actual customer questions.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Business-Trained AI Agents",
    desc: "Agents are trained on your actual products, policies, and tone, so every chat feels like talking to your team, not a generic bot.",
    ctaText: "Know Our Services",
    services: [
      "AI Agent Training",
      "Knowledge Base Development",
      "Tone & Voice Calibration",
      "Product & Policy Training",
      "Conversation Flow Design",
      "Prompt Engineering",
      "Agent Testing & Refinement",
      "Ongoing Retraining",
    ],
  },
  {
    number: "02",
    title: "Customer Query Resolution",
    desc: "Beyond FAQs, agents resolve real customer questions about orders, services, and policies, reducing load on your support team.",
    ctaText: "Know Our Services",
    services: [
      "Order Query Resolution",
      "Policy Question Handling",
      "Troubleshooting Automation",
      "FAQ Automation",
      "Multi-Turn Conversation Handling",
      "Query Categorization",
      "Response Accuracy Testing",
      "Support Load Reduction Tracking",
    ],
  },
  {
    number: "03",
    title: "Lead Qualification",
    desc: "Chatbots ask the right questions to qualify leads automatically, so your sales team only spends time on genuinely promising prospects.",
    ctaText: "Know Our Services",
    services: [
      "Qualification Question Design",
      "Lead Scoring Logic",
      "Lead Routing Automation",
      "Sales-Ready Flagging",
      "Qualification Flow Testing",
      "CRM Lead Sync",
      "Qualification Analytics",
      "Sales Handoff Setup",
    ],
  },
  {
    number: "04",
    title: "Appointment & Call Booking",
    desc: "Agents can book calls and appointments directly within the conversation, removing friction between interest and a scheduled meeting.",
    ctaText: "Know Our Services",
    services: [
      "Calendar Integration",
      "In-Chat Booking Flow",
      "Appointment Reminder Automation",
      "Rescheduling Handling",
      "Time Zone Handling",
      "Booking Confirmation Automation",
      "No-Show Follow-Up Automation",
      "Booking Analytics",
    ],
  },
  {
    number: "05",
    title: "CRM & Tool Integration",
    desc: "We connect your AI agent to your CRM, calendar, and other tools, so conversations translate directly into actionable records.",
    ctaText: "Know Our Services",
    services: [
      "CRM Integration",
      "Calendar Tool Integration",
      "Helpdesk Integration",
      "API-Based Integrations",
      "Data Sync Automation",
      "Third-Party Tool Connections",
      "Integration Testing",
      "Integration Documentation",
    ],
  },
  {
    number: "06",
    title: "Human Handoff & Oversight",
    desc: "When a conversation needs real judgment, it hands off to your team smoothly, with full context so nothing gets repeated.",
    ctaText: "Know Our Services",
    services: [
      "Handoff Trigger Design",
      "Context Transfer Setup",
      "Escalation Rules",
      "Live Agent Notification",
      "Handoff Testing",
      "Supervisor Oversight Tools",
      "Conversation Review Dashboards",
      "Handoff Performance Reporting",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Understanding Your Conversations",
    desc: "We study the questions your customers actually ask and where your team spends the most repetitive time responding.",
  },
  {
    number: "02",
    title: "Building & Training the Agent",
    desc: "The agent is built and trained on your actual business content, tone, and common scenarios, not a generic script.",
  },
  {
    number: "03",
    title: "Integration Setup",
    desc: "We connect the agent to your CRM, calendar, and support tools, so conversations translate into real, actionable data.",
  },
  {
    number: "04",
    title: "Testing With Your Team",
    desc: "Before launch, your team tests the agent against real scenarios to confirm it handles conversations the way you'd want.",
  },
  {
    number: "05",
    title: "Launch & Live Monitoring",
    desc: "The agent goes live with close monitoring in the first weeks, so gaps in its responses get caught and fixed quickly.",
  },
  {
    number: "06",
    title: "Launch, Refine & Monitor",
    desc: "We stay involved after launch, refining responses based on real conversations instead of leaving the agent running blind.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Trained on Your Business",
    desc: "Agents are built around your actual products, policies, and tone, not a generic chatbot template.",
  },
  {
    number: "02",
    title: "More Than FAQs",
    desc: "Our agents qualify leads, book calls, and resolve real queries, not just repeat answers from a knowledge base.",
  },
  {
    number: "03",
    title: "Tested Before Launch",
    desc: "Every agent is tested with your team against real scenarios before it ever talks to a customer.",
  },
  {
    number: "04",
    title: "Integrated With Your Tools",
    desc: "We connect agents to your CRM and calendar, so conversations turn into real, actionable business data.",
  },
  {
    number: "05",
    title: "Smooth Human Handoff",
    desc: "When a conversation needs real judgment, it hands off to your team with full context, not a frustrating restart.",
  },
  {
    number: "06",
    title: "Refined After Launch",
    desc: "We don't disappear after handoff — every agent is refined based on real usage, not left running blind.",
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
    <ServiceDetailPage
      sectionLabel="AI Solutions"
      label="Custom AI Agents & Chatbots"
      icon={Bot}
      description="We design AI agents that do more than answer FAQs — they qualify leads, book calls, and resolve real customer queries, trained on your actual business so every chat feels like talking to your team."
      heroTitle="Custom AI Agents & Chatbots in India"
      heroDescription="We design AI agents that do more than answer FAQs — they qualify leads, book calls, and resolve real customer queries, trained on your actual business so every chat feels like talking to your team."
      capabilitiesHeading="Built for Businesses Ready for AI That Actually Sounds Like Them"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our AI Agents & Chatbots"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us to Build Their AI Agents"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Your Conversations Into a Working AI Agent"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Building AI Agents Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we build every AI agent project, with the same care whether a client is nearby or overseas. We work with startups, SMBs, and enterprises across India, building agents sized to each business's actual conversation volume and tools. For businesses looking to build AI agents beyond India, we support clients worldwide remotely, working across time zones to deliver the same quality standard regardless of location. Whether you're a startup deploying your first chatbot or an enterprise integrating AI agents across multiple support channels, our approach starts with the same question: what does your business actually need this agent to do."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for AI That Actually Sounds Like Your Business?"
      ctaText="Whether you need a chatbot for common questions, an AI agent that qualifies leads and books calls, or a full replacement for a generic bot that isn't working, a template was never going to get you there. Let's talk through your conversations and scope what a custom AI agent would actually involve."
      ctaPrimaryText="Talk to an AI Solutions Specialist"
      ctaSecondaryText="Get Your Free AI Consultation"
    />
  );
}
