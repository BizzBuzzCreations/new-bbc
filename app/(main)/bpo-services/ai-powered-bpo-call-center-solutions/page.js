import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Bot,
  Clock,
  ShoppingCart,
  Rocket,
  Inbox,
  Globe,
  HeartHandshake,
} from "lucide-react";

export const metadata = {
  title: "AI-Powered BPO & Call Center Solutions | BizzBuzz Creations",
  description:
    "BizzBuzz Creations delivers AI-powered BPO and call center solutions for businesses across India and worldwide.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/bpo-services/ai-powered-bpo-call-center-solutions",
  },
};

const CAPABILITIES = [
  {
    icon: Clock,
    title: "Businesses Needing 24/7 Support Without a 24/7 Team",
    desc: "Round-the-clock support usually means round-the-clock staffing costs, which most businesses can't justify early on. We provide AI-powered call center solutions that deliver continuous coverage without requiring a full overnight team.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Brands Needing Scalable Customer Support",
    desc: "Ecommerce support volume spikes unpredictably around sales and seasons, straining teams sized for average days. We build AI customer service outsourcing that scales automatically with demand, not a fixed headcount that struggles during peaks.",
  },
  {
    icon: Rocket,
    title: "Startups Needing Enterprise-Grade Support on a Startup Budget",
    desc: "Startups need support quality that matches larger competitors without the budget larger competitors have. We provide AI BPO services structured to deliver enterprise-level coverage at a cost that fits early-stage budgets.",
  },
  {
    icon: Inbox,
    title: "Businesses Currently Overwhelmed by Support Ticket Volume",
    desc: "Growing ticket volume without proportional team growth leads to slower response times and frustrated customers. We implement AI call center company support that handles routine queries instantly, freeing agents for what actually needs a human.",
  },
  {
    icon: Globe,
    title: "Companies Needing Multilingual, Round-the-Clock Coverage",
    desc: "Serving customers across languages and time zones with human-only staffing is expensive and difficult to schedule reliably. We build conversational AI BPO solutions that provide consistent, multilingual coverage without complex staffing logistics.",
  },
  {
    icon: HeartHandshake,
    title: "Businesses Wanting AI Efficiency Without Losing the Human Touch",
    desc: "Some businesses hesitate on AI support out of concern it will feel cold or mishandle sensitive situations. We build AI voice agent for call center systems designed to escalate to real agents exactly when it matters.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "AI Voice Agents & Conversational AI",
    desc: "Voice AI that handles routine calls naturally, freeing human agents for conversations that genuinely need them.",
    ctaText: "Know Our Services",
    services: [
      "AI Voice Agent Setup",
      "Conversational AI Development",
      "Natural Language Call Handling",
      "AI-Powered IVR Systems",
      "Voice Bot Script Development",
      "Multilingual AI Voice Support",
      "AI Voice Agent Training",
      "Voice AI Performance Tuning",
    ],
  },
  {
    number: "02",
    title: "AI-Assisted Customer Support",
    desc: "AI support tools that resolve common queries instantly while routing complex issues to the right person.",
    ctaText: "Know Our Services",
    services: [
      "AI Chatbot Implementation",
      "AI-Assisted Ticket Resolution",
      "Automated FAQ Handling",
      "AI Email Response Drafting",
      "AI-Powered Live Chat",
      "Sentiment-Aware AI Responses",
      "AI Knowledge Base Integration",
      "AI Escalation Triggers",
    ],
  },
  {
    number: "03",
    title: "Hybrid AI + Human Agent Teams",
    desc: "A support model where AI handles volume and trained agents handle nuance, working together seamlessly.",
    ctaText: "Know Our Services",
    services: [
      "Hybrid Support Model Design",
      "Human Agent Training",
      "AI-to-Human Handoff Workflows",
      "Agent Augmentation Tools",
      "Quality Assurance for Hybrid Teams",
      "Escalation Path Design",
      "Agent Performance Coaching",
      "Hybrid Team Scheduling",
    ],
  },
  {
    number: "04",
    title: "AI Call Routing & Triage",
    desc: "Calls routed intelligently based on intent and urgency, not a generic queue that treats every call the same.",
    ctaText: "Know Our Services",
    services: [
      "AI Call Routing",
      "Intelligent Call Triage",
      "Priority Queue Management",
      "Skill-Based Routing Setup",
      "Call Intent Recognition",
      "Automated Callback Scheduling",
      "Call Volume Forecasting",
      "Routing Performance Analysis",
    ],
  },
  {
    number: "05",
    title: "AI Analytics & Quality Monitoring",
    desc: "Real insight into what's actually happening across every customer interaction, not just call volume counts.",
    ctaText: "Know Our Services",
    services: [
      "AI-Powered Call Analytics",
      "Sentiment Analysis Reporting",
      "Quality Monitoring Automation",
      "Call Transcription & Insights",
      "Customer Satisfaction Tracking",
      "Agent Performance Analytics",
      "Trend & Issue Detection",
      "Compliance Monitoring",
    ],
  },
  {
    number: "06",
    title: "Implementation & Ongoing Optimization",
    desc: "Careful implementation and continuous tuning, since AI support systems improve meaningfully with ongoing attention.",
    ctaText: "Know Our Services",
    services: [
      "BPO Solution Implementation",
      "System Integration Setup",
      "Ongoing AI Model Tuning",
      "Performance Benchmarking",
      "Monthly Optimization Reviews",
      "Scalability Planning",
      "Technology Stack Support",
      "Continuous Improvement Cycles",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Business & Support Needs Discovery",
    desc: "We start by understanding your support volume, common query types, and where AI could genuinely help versus where human judgment remains essential.",
  },
  {
    number: "02",
    title: "AI & Hybrid Model Design",
    desc: "We design the specific split between AI-handled and human-handled interactions, based on your actual query patterns and customer expectations.",
  },
  {
    number: "03",
    title: "AI Training & Agent Onboarding",
    desc: "We train AI systems on your business specifics and onboard human agents on escalation handling, ensuring both sides of the hybrid model work together smoothly.",
  },
  {
    number: "04",
    title: "Integration & System Setup",
    desc: "We integrate the AI and human support systems with your existing tools, CRM, helpdesk, and communication channels.",
  },
  {
    number: "05",
    title: "Launch & Initial Monitoring",
    desc: "We launch the hybrid support system with close monitoring in the early weeks, adjusting AI responses and escalation triggers based on real interactions.",
  },
  {
    number: "06",
    title: "Ongoing Optimization & Scaling",
    desc: "We continuously refine AI performance and scale capacity as your support volume grows, based on real performance data.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "AI Efficiency Without Losing the Human Touch",
    desc: "We design AI systems to handle routine, repetitive queries while ensuring genuine escalation paths to trained human agents for anything requiring judgment, empathy, or complex problem-solving.",
  },
  {
    number: "02",
    title: "Hybrid Model That Escalates to Real Agents When It Matters",
    desc: "Our hybrid approach means customers never get stuck in an AI loop for issues that genuinely need a person, since we build clear, fast handoff triggers into every implementation.",
  },
  {
    number: "03",
    title: "Multilingual, Round-the-Clock Coverage Without Round-the-Clock Headcount",
    desc: "We deliver 24/7, multilingual support capability that would otherwise require complex shift scheduling and multiple language-specific hires, at a fraction of the traditional staffing cost.",
  },
  {
    number: "04",
    title: "AI Trained on Your Business, Not Generic Scripts",
    desc: "We train AI voice agents and chatbots on your actual products, policies, and common queries, rather than deploying generic scripts that frustrate customers with irrelevant answers.",
  },
  {
    number: "05",
    title: "Analytics That Show What's Actually Being Resolved",
    desc: "We provide clear reporting on resolution rates, sentiment, and escalation patterns, giving you genuine visibility into support quality rather than just call volume statistics.",
  },
  {
    number: "06",
    title: "Scalable Support That Grows With Your Business, Not Ahead of It",
    desc: "We scope AI-powered BPO capacity to match your actual current needs, with clear scaling paths as your business grows, rather than overselling capability you don't yet need.",
  },
];

const FAQS = [
  {
    question:
      "What is AI-powered BPO, and how is it different from a regular call center?",
    answer:
      "AI-powered BPO combines AI tools, voice agents, chatbots, automated routing, with trained human agents, handling routine queries automatically while escalating complex issues to people. Traditional call centers rely entirely on human agents for every interaction, which is typically more expensive and harder to scale quickly.",
  },
  {
    question: "Will customers know they're talking to AI, not a human?",
    answer:
      "This depends on your preference and industry, some businesses disclose AI interaction clearly, while others prefer a seamless experience with transparent escalation when needed. We configure this based on what fits your brand and regulatory requirements.",
  },
  {
    question: "How much does AI-powered BPO cost in India?",
    answer:
      "Cost depends on scope, call volume, and the specific mix of AI and human agent support needed. We scope pricing after understanding your current support volume and requirements, rather than offering a flat rate upfront.",
  },
  {
    question: "Can AI handle complex queries, or just simple ones?",
    answer:
      "AI handles routine, pattern-based queries well but is deliberately routed to human agents for complex, sensitive, or judgment-requiring situations. We design escalation triggers specifically to catch these cases rather than letting AI attempt everything.",
  },
  {
    question:
      "How do you ensure quality when AI is handling customer interactions?",
    answer:
      "We monitor AI performance through sentiment analysis, resolution tracking, and regular quality reviews, adjusting training and scripts based on real interaction data. Human oversight remains part of the ongoing quality process, not a one-time setup.",
  },
  {
    question: "Can we start with a hybrid model and increase AI usage over time?",
    answer:
      "Yes, most clients start with a conservative AI-to-human ratio and expand AI usage gradually as confidence and performance data build, rather than shifting entirely to AI from day one.",
  },
];

export default function AiPoweredBpoCallCenterSolutions() {
  return (
    <ServiceDetailPage
      sectionLabel="BPO Services"
      label="AI-Powered BPO & Call Center Solutions"
      icon={Bot}
      description="AI-powered BPO and call center solutions built to scale support without scaling headcount, backed by trained human agents."
      heroTitle="Get Support That Scales, Powered by AI and Real Agents"
      heroDescription="AI-powered BPO and call center solutions built to scale support without scaling headcount, backed by trained human agents."
      heroCtaText="Get a Free BPO Solutions Consultation"
      capabilitiesHeading="Built for Businesses Ready to Scale Support Without Scaling Cost"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything Between a Customer Query and a Resolved Ticket"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us With AI-Powered BPO"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Combine AI Speed With Trained Human Agents"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Delivering AI BPO Solutions Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every BPO implementation, with the same attention to quality whether a client is nearby or across the world. We provide AI-powered call center solutions for businesses across India, built around each business's specific support volume and customer needs. For businesses looking for AI customer service outsourcing beyond India, we support clients worldwide remotely, delivering the same conversational AI BPO solutions standard of work regardless of time zone. Whether you're a startup in Prayagraj or an ecommerce brand anywhere else scaling support, our approach starts with the same question: where does AI genuinely help, and where does your business still need a real person."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for Support That Scales Without Breaking Your Budget?"
      ctaText="Whether you're overwhelmed by ticket volume, need genuine 24/7 coverage, or want AI efficiency without losing the human touch, hiring an entire in-house support team was never the only option. Let's talk through your current support needs and scope what AI-powered BPO would actually involve."
      ctaPrimaryText="Talk to a BPO Solutions Specialist"
      ctaSecondaryText="Get Your Free BPO Solutions Consultation"
    />
  );
}
