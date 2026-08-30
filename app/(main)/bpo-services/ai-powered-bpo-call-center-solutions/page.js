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
  title: "AI-Powered BPO & Call Center Solutions | BizzBuzz Creations",
  description:
    "AI-powered BPO and call center solutions in India — smart call routing, live transcription, and chatbot support layered on trained agents, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/bpo-services/ai-powered-bpo-call-center-solutions",
  },
};

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Startups & Early-Stage Businesses",
    desc: "Startups need customer support that scales without hiring a full floor on day one. We layer AI call routing and chatbot support on a lean human team, letting early-stage businesses handle growing call volume without a large upfront hire.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMBs often can't justify a dedicated call center but still need reliable customer response. We combine AI-powered triage with a small trained team sized for SMB budgets, giving growing businesses enterprise-style responsiveness without enterprise costs.",
  },
  {
    icon: Building,
    title: "Enterprises & Large Organizations",
    desc: "Enterprises need call center operations that handle high volume across multiple departments reliably. We provide AI-powered BPO solutions built for high call volume, strict compliance requirements, and integration with existing CRM and telephony systems.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce & Retail Brands",
    desc: "Ecommerce brands face support spikes tied to sales events and shipping delays. We combine AI chatbot triage with trained agents to handle order queries and returns at scale without service quality dropping during peak periods.",
  },
  {
    icon: Handshake,
    title: "Agencies & Outsourcing Partners",
    desc: "Agencies managing client support needs a reliable delivery partner behind the scenes. We work as a white-label AI-powered BPO partner, handling call center operations agencies can present as their own without building internal capacity.",
  },
  {
    icon: RefreshCw,
    title: "Businesses Switching From Another BPO Provider",
    desc: "Businesses stuck with an underperforming BPO vendor need a careful transition, not a risky cutover. We handle structured handovers from your existing provider, preserving scripts, data, and continuity while upgrading to AI-powered support.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Smart Call Routing & Triage",
    desc: "Calls get directed to the right agent or queue automatically based on the query type, so customers reach someone useful faster instead of bouncing between transfers.",
    ctaText: "Know Our Services",
    services: [
      "Smart Call Routing",
      "IVR Configuration",
      "Skill-Based Routing",
      "Queue Management",
      "Call Prioritization",
      "Multi-Channel Routing",
      "Overflow Handling",
      "Routing Analytics",
    ],
  },
  {
    number: "02",
    title: "AI Transcription & Quality Monitoring",
    desc: "Real-time transcription gives supervisors and agents a searchable record of every call, making QA, training, and dispute resolution far less painful.",
    ctaText: "Know Our Services",
    services: [
      "Live Call Transcription",
      "Sentiment Analysis",
      "Call Recording",
      "QA Scoring",
      "Compliance Monitoring",
      "Keyword Spotting",
      "Speech Analytics",
      "Dispute Resolution Support",
    ],
  },
  {
    number: "03",
    title: "AI Chatbot & Virtual Agent Support",
    desc: "Chatbots handle repetitive, common questions instantly around the clock, freeing your agents to focus on calls that actually need a human touch.",
    ctaText: "Know Our Services",
    services: [
      "Chatbot Development",
      "Virtual Agent Setup",
      "FAQ Automation",
      "Multi-Language Bots",
      "Chatbot Training",
      "Live Chat Integration",
      "WhatsApp Bot Support",
      "Escalation Rules",
    ],
  },
  {
    number: "04",
    title: "Human Handoff & Agent Support",
    desc: "When AI hits its limit, the conversation hands off to a trained agent with full context, so customers never have to repeat themselves.",
    ctaText: "Know Our Services",
    services: [
      "Seamless Handoff Design",
      "Agent Training",
      "Context Transfer Systems",
      "Escalation Management",
      "Agent Coaching",
      "Real-Time Assist Tools",
      "Supervisor Dashboards",
      "Performance Reviews",
    ],
  },
  {
    number: "05",
    title: "Data Security & Compliance",
    desc: "Call data and transcripts are handled under strict access controls and NDA-backed processes, in line with India's DPDP Act, 2023.",
    ctaText: "Know Our Services",
    services: [
      "Data Access Controls",
      "NDA-Backed Handling",
      "DPDP Act Compliance",
      "Secure Call Storage",
      "Access Audit Logs",
      "Data Retention Policies",
      "Vendor Risk Management",
      "Compliance Reporting",
    ],
  },
  {
    number: "06",
    title: "Reporting & Continuous Optimization",
    desc: "We track call outcomes and sentiment data continuously, refining routing and chatbot responses as real conversations reveal gaps.",
    ctaText: "Know Our Services",
    services: [
      "Performance Dashboards",
      "Call Outcome Tracking",
      "Sentiment Reporting",
      "Weekly Reporting",
      "Chatbot Response Tuning",
      "Routing Optimization",
      "Cost-Per-Call Analysis",
      "Trend Analysis",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Discovery & Workflow Mapping",
    desc: "We study your current call flows and pain points to decide exactly where AI genuinely helps and where human judgment stays essential.",
  },
  {
    number: "02",
    title: "AI Tool Configuration & Training",
    desc: "Routing rules, transcription, and chatbot scripts are configured and trained on your actual product and tone, not a generic template.",
  },
  {
    number: "03",
    title: "Agent Recruitment & Training",
    desc: "We hire and train agents on your scripts, tone, and product, so the human side of the operation matches the AI side from day one.",
  },
  {
    number: "04",
    title: "Integration & Testing",
    desc: "We integrate routing, chatbot, and CRM systems, testing the full flow end-to-end before a single live call goes through it.",
  },
  {
    number: "05",
    title: "Agent + AI Integration Launch",
    desc: "Agents and AI tools go live together with close monitoring in the first weeks, so handoffs feel smooth from day one.",
  },
  {
    number: "06",
    title: "Ongoing Monitoring & Optimization",
    desc: "We track call outcomes and sentiment data continuously, refining routing and chatbot responses as real conversations reveal gaps.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "AI-Assisted, Human-Led",
    desc: "We use AI only where it genuinely helps — routing, transcription, first responses — while trained agents handle everything that needs real judgment.",
  },
  {
    number: "02",
    title: "Faster First Response",
    desc: "Smart routing and chatbot triage mean customers wait less, even during peak call volumes.",
  },
  {
    number: "03",
    title: "Trained, Dedicated Agents",
    desc: "The humans behind the AI are trained specifically on your scripts, tone, and product, not a generic floor.",
  },
  {
    number: "04",
    title: "Transparent Reporting",
    desc: "Call recordings, transcripts, and sentiment reports are available on request, not locked behind a monthly summary.",
  },
  {
    number: "05",
    title: "Data Security First",
    desc: "NDA available before any project details or access are shared, with handling built around India's DPDP Act, 2023.",
  },
  {
    number: "06",
    title: "Scalable Engagement",
    desc: "We scale AI and agent capacity with your business, not ahead of it — start small and add capacity as workload actually grows.",
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
    <ServiceDetailPage
      sectionLabel="BPO Services"
      label="AI-Powered BPO & Call Center Solutions"
      icon={Bot}
      description="Smart call routing, live transcription, and chatbot support layered on real, trained agents — so your team only steps in when a call truly needs a human touch."
      heroTitle="AI-Powered BPO & Call Center Solutions in India"
      heroDescription="Smart call routing, live transcription, and chatbot support layered on real, trained agents — so your team only steps in when a call truly needs a human touch."
      capabilitiesHeading="Built for Businesses Ready to Modernize Customer Support"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our AI-Powered BPO Solutions"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us to Run Their AI-Powered BPO Operations"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Your Support Requirements Into a Working AI-Powered Operation"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Running AI-Powered Support Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we build every AI-powered BPO engagement, with the same rigor whether a client is nearby or overseas. We work with startups, SMBs, and enterprises across India, blending AI tools with trained human agents sized to each business's actual call volume. For businesses looking to outsource support beyond India, we run AI-powered BPO operations remotely, working across time zones to deliver the same standard of service regardless of location. Whether you're a startup handling your first support inbox or an enterprise running a multi-department call center, our approach starts with the same question: where does AI genuinely help, and where does a trained human need to take over."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for Support That Scales With AI, Not Against Your Budget?"
      ctaText="Whether you need routing and chatbot support layered onto your current team, a full AI-powered call center built from scratch, or a careful migration from your existing BPO provider, the right setup depends on your actual call volume and workflow. Let's talk through your requirements and scope what an AI-powered BPO setup would actually involve."
      ctaPrimaryText="Talk to a BPO Solutions Specialist"
      ctaSecondaryText="Get Your Free BPO Consultation"
    />
  );
}
