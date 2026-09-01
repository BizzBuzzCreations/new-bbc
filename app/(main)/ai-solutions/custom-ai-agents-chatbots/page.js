import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Bot,
  MessageCircle,
  Workflow,
  ShoppingCart,
  Phone,
  Layers,
  Network,
} from "lucide-react";

export const metadata = {
  title: "Custom AI Agent Development Company | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a custom AI agent development company building chatbots and AI agents for businesses across India and worldwide.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/ai-solutions/custom-ai-agents-chatbots",
  },
};

const CAPABILITIES = [
  {
    icon: MessageCircle,
    title: "Businesses Needing a Custom Customer Support Chatbot",
    desc: "Generic chatbot templates often can't handle the specific products, policies, and questions unique to your business. We provide ai chatbot development services built around your actual support scenarios, not a generic FAQ bot.",
  },
  {
    icon: Workflow,
    title: "Companies Needing AI Agents for Internal Workflows",
    desc: "Internal teams often waste time on repetitive tasks that could be handled by a properly built AI agent. We work as an ai agent development agency building agents that handle real internal workflow tasks.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Brands Needing AI Shopping Assistants",
    desc: "Ecommerce shoppers benefit from an AI assistant that can genuinely help with product questions and recommendations, not a scripted bot. We build custom ai chatbot for business solutions tailored to product discovery and support.",
  },
  {
    icon: Phone,
    title: "Businesses Needing Voice AI Agents for Calls",
    desc: "Phone-based customer interactions increasingly benefit from AI that can handle natural conversation, not rigid IVR menus. We provide ai voice agent development company services built for genuinely natural call handling.",
  },
  {
    icon: Layers,
    title: "SaaS Companies Needing AI Agents Inside Their Product",
    desc: "SaaS products increasingly need embedded AI agents that help users accomplish tasks directly within the product. We build agents integrated into your actual product experience, not a bolt-on chat widget.",
  },
  {
    icon: Network,
    title: "Enterprises Needing Multi-Agent AI Systems",
    desc: "Complex enterprise workflows sometimes need multiple specialized AI agents working together, not a single general-purpose bot. We help hire ai agent developer teams capable of building genuinely coordinated multi-agent systems.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "AI Agent Strategy & Discovery",
    desc: "Clear scoping of what your AI agent actually needs to do, before any development begins.",
    ctaText: "Know Our Services",
    services: [
      "AI Agent Use Case Discovery",
      "Feasibility Assessment",
      "Agent Capability Scoping",
      "Data & Knowledge Source Mapping",
      "Agent Architecture Planning",
      "Platform & Model Selection",
      "Risk & Safety Assessment",
      "AI Agent Roadmap Development",
    ],
  },
  {
    number: "02",
    title: "Custom Chatbot Development",
    desc: "Chatbots built and trained specifically around your business, products, and brand voice.",
    ctaText: "Know Our Services",
    services: [
      "Custom AI Chatbot Development",
      "Conversational Flow Design",
      "Knowledge Base Integration",
      "Multi-Turn Conversation Handling",
      "Brand Voice Training",
      "Multilingual Chatbot Support",
      "Chatbot UI Development",
      "Chatbot Deployment",
    ],
  },
  {
    number: "03",
    title: "Voice AI Agent Development",
    desc: "Voice agents that handle calls naturally, going beyond rigid menu-based IVR systems.",
    ctaText: "Know Our Services",
    services: [
      "AI Voice Agent Development",
      "Natural Language Call Handling",
      "Voice Agent Script Development",
      "Call Flow Design",
      "Voice Agent Training",
      "Telephony Integration",
      "Voice Agent Testing",
      "Voice Agent Performance Tuning",
    ],
  },
  {
    number: "04",
    title: "Multi-Agent System Development",
    desc: "Multiple specialized agents working together, coordinated for genuinely complex workflows.",
    ctaText: "Know Our Services",
    services: [
      "Multi-Agent System Design",
      "Agent-to-Agent Communication Setup",
      "Task Orchestration Development",
      "Specialized Agent Development",
      "Agent Handoff Workflows",
      "Multi-Agent Testing",
      "System Scalability Planning",
      "Multi-Agent Monitoring Setup",
    ],
  },
  {
    number: "05",
    title: "AI Agent Integration",
    desc: "Your AI agent connected properly to the systems it needs to actually be useful.",
    ctaText: "Know Our Services",
    services: [
      "CRM Integration for AI Agents",
      "API Integration Development",
      "Third-Party Tool Connections",
      "Database Integration",
      "Website & App Embedding",
      "Enterprise System Integration",
      "Integration Testing",
      "Integration Documentation",
    ],
  },
  {
    number: "06",
    title: "AI Agent Testing & Optimization",
    desc: "Thorough testing before launch, and ongoing tuning as your agent handles real interactions.",
    ctaText: "Know Our Services",
    services: [
      "Agent Performance Testing",
      "Conversation Quality Review",
      "Edge Case Testing",
      "Ongoing Model Tuning",
      "Agent Analytics & Reporting",
      "A/B Testing Agent Responses",
      "Continuous Improvement Cycles",
      "Agent Maintenance & Support",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Use Case & Requirements Discovery",
    desc: "We start by understanding exactly what task or interaction you need the AI agent to handle, and whether it's genuinely feasible.",
  },
  {
    number: "02",
    title: "Architecture & Platform Planning",
    desc: "We plan the technical architecture and select the right platform and model for your specific use case.",
  },
  {
    number: "03",
    title: "Agent Development & Training",
    desc: "We build and train the agent on your specific business data, knowledge base, and brand voice.",
  },
  {
    number: "04",
    title: "Integration & System Connection",
    desc: "We integrate the agent with your CRM, database, or other systems it needs to access.",
  },
  {
    number: "05",
    title: "Testing & Quality Assurance",
    desc: "We test thoroughly across real scenarios and edge cases before the agent goes live with actual customers.",
  },
  {
    number: "06",
    title: "Deployment & Ongoing Optimization",
    desc: "We deploy the agent and continue monitoring and tuning its performance based on real interactions.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "AI Agents Built Around Real Tasks, Not Just Conversation",
    desc: "We design agents to actually complete tasks, booking, lookup, processing, not just hold a conversation that ultimately requires a human to finish the job anyway.",
  },
  {
    number: "02",
    title: "Custom Development, Not a Repackaged Off-the-Shelf Bot",
    desc: "We build agents specifically around your business logic and data, rather than reskinning a generic chatbot template with your logo and colors.",
  },
  {
    number: "03",
    title: "Voice and Chat Agents Built With Equal Technical Rigor",
    desc: "We treat voice AI development with the same depth as chat, recognizing that natural voice interaction requires genuinely different technical handling than text.",
  },
  {
    number: "04",
    title: "Integration Into Your Actual Systems, Not a Standalone Tool",
    desc: "We connect agents directly to your CRM, database, or other systems, so they can actually access and act on real information rather than operating in isolation.",
  },
  {
    number: "05",
    title: "Thorough Testing Before an Agent Ever Talks to a Customer",
    desc: "We test extensively for edge cases and conversation quality before launch, reducing the risk of an agent embarrassing your brand with a poor early interaction.",
  },
  {
    number: "06",
    title: "Ongoing Support as Your AI Agent's Role Continues to Grow",
    desc: "We provide ongoing tuning and maintenance as your agent's responsibilities expand, rather than treating deployment as the end of the engagement.",
  },
];

const FAQS = [
  {
    question: "How much does custom AI agent development cost in India?",
    answer:
      "Cost depends on complexity, a simple FAQ chatbot costs far less than a multi-agent system integrated with multiple internal tools. We scope pricing after understanding your specific use case, rather than offering a flat rate upfront.",
  },
  {
    question: "What's the difference between a chatbot and an AI agent?",
    answer:
      "A chatbot typically follows conversational flows to answer questions, while an AI agent can take actions, look up information, complete tasks, make decisions within defined boundaries, going beyond conversation alone.",
  },
  {
    question: "Can an AI agent actually complete tasks, not just answer questions?",
    answer:
      "Yes, task completion is a core part of what we build, agents that can book appointments, process requests, or update records, not just respond to questions with static information.",
  },
  {
    question: "How long does it take to build a custom AI agent?",
    answer:
      "Timeline depends on complexity, a simple chatbot can take a few weeks, while a multi-agent system with deep integrations typically takes longer to build and test thoroughly.",
  },
  {
    question: "Can you build a voice AI agent for phone calls?",
    answer:
      "Yes, voice AI agent development is one of our core services, covering natural language call handling that goes beyond traditional rigid IVR menu systems.",
  },
  {
    question: "How do you make sure the AI agent doesn't give wrong answers?",
    answer:
      "We build agents with clear knowledge boundaries and test extensively for accuracy before launch, along with ongoing monitoring to catch and correct issues as they arise in real usage.",
  },
];

export default function CustomAiAgentsChatbots() {
  return (
    <ServiceDetailPage
      sectionLabel="AI Solutions"
      label="Custom AI Agents & Chatbots"
      icon={Bot}
      description="Custom AI agents and chatbots built to handle real tasks, not just answer FAQs, engineered around what your business actually needs done."
      heroTitle="Get an AI Agent That Actually Handles Real Work"
      heroDescription="Custom AI agents and chatbots built to handle real tasks, not just answer FAQs, engineered around what your business actually needs done."
      heroCtaText="Get a Free AI Agent Consultation"
      capabilitiesHeading="Built for Businesses Ready for AI That Does More Than Chat"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything Between an AI Idea and a Working Agent"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us to Build Their AI Agents"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn a Task Into a Working AI Agent"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Building AI Agents Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every AI agent project, with the same technical rigor whether a client is nearby or across the world. We provide custom ai agent development company support for businesses across India, built around each business's specific tasks and systems. For businesses looking for an ai agent development agency beyond India, we support clients worldwide remotely, delivering the same ai chatbot development services standard of work regardless of time zone. Whether you're a business in Prayagraj needing a customer support chatbot or an enterprise anywhere else needing a multi-agent system, our approach starts with the same question: what task do you actually need this agent to complete."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for an AI Agent That Actually Works?"
      ctaText="Whether you need a customer support chatbot, a voice agent for calls, or a multi-agent system handling complex internal workflows, a generic template was never going to do what your business actually needs. Let's talk through your use case and scope what a custom AI agent would actually involve."
      ctaPrimaryText="Talk to an AI Agent Development Specialist"
      ctaSecondaryText="Get Your Free AI Agent Consultation"
    />
  );
}
