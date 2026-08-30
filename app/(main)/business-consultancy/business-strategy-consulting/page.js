import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Target,
  Rocket,
  Building2,
  Building,
  ShoppingCart,
  Handshake,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "Business Strategy Consulting | BizzBuzz Creations",
  description:
    "Business strategy consulting in India — define your goals, map your market, and build a roadmap that turns big ambitions into practical, executable steps, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/business-consultancy/business-strategy-consulting",
  },
};

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Startups & Early-Stage Businesses",
    desc: "Startups often move fast without a clear strategic roadmap behind the momentum. We help early-stage founders define concrete goals and a practical roadmap, so growth is intentional, not just reactive.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMBs often operate on instinct once past the early stage, without a documented strategy. We build strategy engagements sized for SMB budgets, giving growing businesses real clarity on where to focus.",
  },
  {
    icon: Building,
    title: "Enterprises & Large Organizations",
    desc: "Enterprises need strategy that aligns multiple departments and stakeholders around shared goals. We run strategy engagements at enterprise scale, built to align leadership across business units.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce & Retail Brands",
    desc: "Ecommerce brands scaling fast often lack a strategy for where to expand next. We build growth and market strategy specifically for retail and ecommerce brands navigating expansion decisions.",
  },
  {
    icon: Handshake,
    title: "Family Businesses & Ownership Transitions",
    desc: "Family businesses navigating leadership transitions need outside clarity on strategic direction. We provide strategy consulting that helps family businesses formalize direction during ownership changes.",
  },
  {
    icon: RefreshCw,
    title: "Businesses Pivoting or Repositioning",
    desc: "Businesses needing to pivot after market shifts need a structured approach, not guesswork. We help businesses reassess their market position and build a new strategic roadmap around the pivot.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Goal & Vision Clarification",
    desc: "We help translate a broad ambition into specific, measurable goals, so your team knows exactly what success actually looks like.",
    ctaText: "Know Our Services",
    services: [
      "Vision Workshops",
      "Goal Definition",
      "Success Metric Setting",
      "Leadership Alignment Sessions",
      "Strategic Priority Mapping",
      "Mission Clarification",
      "Long-Term Vision Planning",
      "Goal Documentation",
    ],
  },
  {
    number: "02",
    title: "Market & Competitor Mapping",
    desc: "We map your market position and competitors clearly, so strategy is built on where you actually stand, not assumptions.",
    ctaText: "Know Our Services",
    services: [
      "Market Analysis",
      "Competitor Mapping",
      "Positioning Analysis",
      "Market Share Assessment",
      "Industry Trend Research",
      "SWOT Analysis",
      "Customer Landscape Mapping",
      "Competitive Benchmarking",
    ],
  },
  {
    number: "03",
    title: "Strategic Roadmap Development",
    desc: "Big ambitions get broken down into a practical, sequenced roadmap of executable steps, not a vague vision statement.",
    ctaText: "Know Our Services",
    services: [
      "Roadmap Development",
      "Milestone Sequencing",
      "Resource Planning",
      "Timeline Development",
      "Priority Sequencing",
      "Risk Identification",
      "Roadmap Documentation",
      "Execution Planning",
    ],
  },
  {
    number: "04",
    title: "Stakeholder Alignment",
    desc: "We help align leadership and teams around the strategy, so execution doesn't stall on internal disagreement.",
    ctaText: "Know Our Services",
    services: [
      "Stakeholder Workshops",
      "Leadership Alignment Sessions",
      "Communication Planning",
      "Buy-In Building",
      "Conflict Resolution Facilitation",
      "Cross-Team Alignment",
      "Change Management Support",
      "Alignment Documentation",
    ],
  },
  {
    number: "05",
    title: "KPI & Milestone Setting",
    desc: "Clear KPIs and milestones get set so progress is measurable, not just a feeling that things are moving forward.",
    ctaText: "Know Our Services",
    services: [
      "KPI Development",
      "Milestone Definition",
      "Performance Dashboard Setup",
      "Tracking Framework Design",
      "Goal-to-KPI Mapping",
      "Reporting Cadence Planning",
      "Accountability Structuring",
      "Progress Review Frameworks",
    ],
  },
  {
    number: "06",
    title: "Strategy Review & Adjustment",
    desc: "We revisit the strategy periodically and adjust it as real market conditions and results come in, not once and forget.",
    ctaText: "Know Our Services",
    services: [
      "Quarterly Strategy Reviews",
      "Performance-Based Adjustments",
      "Market Condition Reassessment",
      "Strategy Refresh Workshops",
      "Course Correction Planning",
      "Ongoing Advisory Sessions",
      "Annual Strategy Reset",
      "Long-Term Strategy Support",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Business Audit & Discovery",
    desc: "We start with a clear-eyed look at what's actually working in your business and what's holding it back, before recommending anything.",
  },
  {
    number: "02",
    title: "Market & Competitive Analysis",
    desc: "We analyze your market position and competitors, so the strategy is grounded in where you actually stand today.",
  },
  {
    number: "03",
    title: "Strategy & Roadmap",
    desc: "Goals, market position, and a practical roadmap get mapped out — built around your industry and real numbers, not a generic playbook.",
  },
  {
    number: "04",
    title: "Stakeholder Alignment",
    desc: "We align leadership and key teams around the strategy before execution begins, so implementation doesn't stall on disagreement.",
  },
  {
    number: "05",
    title: "Hands-On Implementation",
    desc: "We stay involved through execution, not just handing over a strategy deck and disappearing after the first meeting.",
  },
  {
    number: "06",
    title: "Ongoing Review & Course Correction",
    desc: "We're direct about what's working and honest about what isn't, adjusting the plan as real results come in.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "No Generic Playbooks",
    desc: "Every recommendation is built around your industry, your team, and your real numbers — not a template pulled off a shelf.",
  },
  {
    number: "02",
    title: "We Stay Involved",
    desc: "From the first audit to final execution, we stay by your side long after the first meeting, not just handing over a strategy deck.",
  },
  {
    number: "03",
    title: "Direct & Honest",
    desc: "We're direct about what's working, honest about what isn't, and focused on outcomes you can actually measure.",
  },
  {
    number: "04",
    title: "Outcomes You Can Measure",
    desc: "Every engagement is focused on results you can point to, not just reports and recommendations that sit unread.",
  },
  {
    number: "05",
    title: "A Team, Not Outside Consultants",
    desc: "Think of us less like outside consultants and more like a hired team that's genuinely invested in your growth.",
  },
  {
    number: "06",
    title: "Local Roots, India-Wide Reach",
    desc: "Born and based in Prayagraj, we understand what it takes to build a business here as well as in the metros.",
  },
];

const FAQS = [
  {
    question: "What does business strategy consulting actually involve?",
    answer:
      "It involves clarifying your goals, mapping your market position, and building a practical roadmap of executable steps to get there, not just a theoretical plan.",
  },
  {
    question: "How long does a strategy engagement typically take?",
    answer:
      "Initial strategy development typically takes a few weeks, though we often stay involved through implementation and review over a longer period.",
  },
  {
    question: "Do you help implement the strategy, or just create it?",
    answer:
      "We stay involved through hands-on implementation, not just handing over a strategy deck and disappearing after the first meeting.",
  },
  {
    question: "Is business strategy consulting only for large companies?",
    answer:
      "No, strategy consulting is valuable for founders and small businesses too — clarity on goals and roadmap matters at any size.",
  },
  {
    question: "How do you measure if a strategy is working?",
    answer:
      "We set clear KPIs and milestones upfront, then review progress against them regularly, adjusting the plan as real results come in.",
  },
];

export default function BusinessStrategyConsulting() {
  return (
    <ServiceDetailPage
      sectionLabel="Business Consultancy"
      label="Business Strategy Consulting"
      icon={Target}
      description="Every strong business runs on a clear plan, not guesswork. As a dedicated strategy consulting partner, we help you define your goals, map your market, and build a roadmap that turns big ambitions into practical, executable steps."
      heroTitle="Business Strategy Consulting in India"
      heroDescription="Every strong business runs on a clear plan, not guesswork. As a dedicated strategy consulting partner, we help you define your goals, map your market, and build a roadmap that turns big ambitions into practical, executable steps."
      capabilitiesHeading="Built for Businesses Ready to Move With a Plan, Not Just Momentum"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our Business Strategy Consulting"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us to Build Their Strategy"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Ambition Into a Working Strategy"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Advising Businesses Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every strategy engagement, with the same rigor whether a client is nearby or overseas. We work with startups, SMBs, and enterprises across India, building strategy sized to each business's actual goals and market position. For businesses looking to work with us beyond India, we deliver strategy consulting remotely, working across time zones to the same standard regardless of location. Whether you're a founder clarifying your first roadmap or an enterprise aligning multiple business units, our approach starts with the same question: what does your business actually need this strategy to achieve."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for a Strategy You Can Actually Execute?"
      ctaText="Whether you need a full strategic roadmap built from scratch, help aligning leadership around a shared direction, or ongoing strategy review as your market shifts, a generic playbook was never going to get you there. Let's talk through your business and scope what a strategy engagement would actually involve."
      ctaPrimaryText="Talk to a Business Strategy Specialist"
      ctaSecondaryText="Get Your Free Strategy Consultation"
    />
  );
}
