import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Compass,
  Search,
  ShieldQuestion,
  AlertTriangle,
  Map,
  ShieldCheck,
  ClipboardList,
} from "lucide-react";

export const metadata = {
  title: "AI Strategy Consulting Services | BizzBuzz Creations",
  description:
    "BizzBuzz Creations provides AI strategy consulting that helps businesses adopt AI properly across India and worldwide.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/ai-solutions/generative-engine-optimization",
  },
};

const CAPABILITIES = [
  {
    icon: Search,
    title: "Businesses Unsure Where AI Actually Fits Their Operations",
    desc: "Most businesses know AI is relevant somehow but lack a clear sense of where it genuinely applies to their operations. We provide ai strategy consulting services that identify real, specific fit, not generic AI enthusiasm.",
  },
  {
    icon: ShieldQuestion,
    title: "Leadership Teams Needing an Honest AI Readiness Assessment",
    desc: "Leadership teams often need an honest answer about whether their data, team, and processes are actually ready for AI adoption. We provide ai readiness assessment services that give a genuinely realistic picture.",
  },
  {
    icon: AlertTriangle,
    title: "Companies Under Pressure to \"Do Something With AI\"",
    desc: "Internal or board-level pressure to adopt AI quickly often leads to rushed, poorly-scoped initiatives. We work as an ai adoption strategy consultant helping companies respond thoughtfully rather than reactively.",
  },
  {
    icon: Map,
    title: "Businesses Needing a Prioritized AI Adoption Roadmap",
    desc: "Businesses with multiple potential AI use cases need help prioritizing which to pursue first, and in what order. We build ai roadmap development services structured around realistic sequencing, not everything at once.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprises Needing AI Governance and Risk Guidelines",
    desc: "Enterprises adopting AI at scale need genuine governance around data privacy, risk, and responsible use, not an afterthought. We provide ai governance consulting that takes these considerations seriously from the start.",
  },
  {
    icon: ClipboardList,
    title: "Companies Needing Help Evaluating AI Vendors and Tools",
    desc: "The AI vendor landscape changes constantly, making it genuinely hard to evaluate options without bias toward any one platform. We work as an ai implementation consulting company providing independent vendor evaluation support.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "AI Readiness Assessment",
    desc: "An honest assessment of whether your business is actually ready for AI adoption, and what needs to change if not.",
    ctaText: "Know Our Services",
    services: [
      "AI Readiness Assessment",
      "Data Infrastructure Evaluation",
      "Team Capability Assessment",
      "Current Process AI-Fit Analysis",
      "Technology Stack Review",
      "AI Maturity Benchmarking",
      "Risk & Gap Identification",
      "Readiness Report Delivery",
    ],
  },
  {
    number: "02",
    title: "AI Use Case Identification",
    desc: "Identification of the specific, realistic places AI could genuinely help your business, not generic possibilities.",
    ctaText: "Know Our Services",
    services: [
      "AI Use Case Discovery",
      "Business Process AI Mapping",
      "Opportunity Prioritization",
      "Feasibility Assessment",
      "Cost-Benefit Analysis",
      "Quick-Win Identification",
      "Use Case Documentation",
      "Stakeholder Alignment Sessions",
    ],
  },
  {
    number: "03",
    title: "AI Adoption Roadmap Development",
    desc: "A sequenced, realistic roadmap for actually implementing AI, not an overwhelming list of possibilities.",
    ctaText: "Know Our Services",
    services: [
      "AI Roadmap Development",
      "Implementation Sequencing",
      "Resource & Budget Planning",
      "Milestone Definition",
      "Change Management Planning",
      "Pilot Program Design",
      "Roadmap Documentation",
      "Roadmap Review Sessions",
    ],
  },
  {
    number: "04",
    title: "AI Governance & Risk Advisory",
    desc: "Governance guidance that takes data privacy, ethical use, and risk genuinely seriously, not as an afterthought.",
    ctaText: "Know Our Services",
    services: [
      "AI Governance Framework Development",
      "AI Risk Assessment",
      "Data Privacy & Compliance Guidance",
      "Ethical AI Use Guidelines",
      "AI Policy Documentation",
      "Vendor Risk Assessment",
      "Governance Training",
      "Ongoing Compliance Monitoring Guidance",
    ],
  },
  {
    number: "05",
    title: "AI Vendor & Tool Evaluation",
    desc: "Independent evaluation of AI vendors and tools, free from bias toward any specific platform.",
    ctaText: "Know Our Services",
    services: [
      "AI Vendor Evaluation",
      "Tool Comparison & Selection",
      "Build vs. Buy Analysis",
      "Vendor Negotiation Support",
      "Proof-of-Concept Planning",
      "Integration Feasibility Review",
      "Total Cost of Ownership Analysis",
      "Vendor Shortlist Development",
    ],
  },
  {
    number: "06",
    title: "Ongoing AI Strategy Advisory",
    desc: "Continued advisory as your AI initiatives progress and the broader AI landscape keeps shifting.",
    ctaText: "Know Our Services",
    services: [
      "Ongoing AI Advisory Sessions",
      "Quarterly Strategy Reviews",
      "AI Trend Monitoring & Briefings",
      "Implementation Progress Tracking",
      "Strategy Adjustment Support",
      "Leadership AI Education Sessions",
      "Long-Term Advisory Partnership",
      "AI Initiative Accountability Support",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Business & AI Readiness Discovery",
    desc: "We start by understanding your business, current data and technology infrastructure, and honestly assessing your genuine readiness for AI adoption.",
  },
  {
    number: "02",
    title: "Use Case Identification & Prioritization",
    desc: "We identify specific, realistic AI use cases relevant to your business, prioritizing based on feasibility and actual impact.",
  },
  {
    number: "03",
    title: "Roadmap & Governance Development",
    desc: "We build a sequenced adoption roadmap alongside governance guidelines covering risk, privacy, and responsible use.",
  },
  {
    number: "04",
    title: "Vendor & Tool Evaluation Support",
    desc: "We support evaluation of relevant AI vendors and tools, providing independent analysis suited to your specific needs.",
  },
  {
    number: "05",
    title: "Pilot Planning & Implementation Guidance",
    desc: "We help plan initial pilot programs and provide guidance through early implementation stages.",
  },
  {
    number: "06",
    title: "Ongoing Strategy Advisory & Review",
    desc: "We continue as an ongoing advisor, reviewing progress and adjusting strategy as implementation and the AI landscape evolve.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Strategy Built Around Real Use Cases, Not AI for Its Own Sake",
    desc: "We identify genuine, specific applications for your business, rather than recommending AI adoption broadly just because it's currently the trend everyone's discussing.",
  },
  {
    number: "02",
    title: "Honest Readiness Assessment, Including When AI Isn't the Answer Yet",
    desc: "We give a genuinely honest assessment of your readiness, including telling you when data or process gaps need addressing before AI adoption would actually work well.",
  },
  {
    number: "03",
    title: "Roadmaps Sequenced for Realistic, Achievable Implementation",
    desc: "We prioritize and sequence AI initiatives based on genuine feasibility and impact, rather than proposing an ambitious roadmap that's impressive on paper but unrealistic to actually execute.",
  },
  {
    number: "04",
    title: "Governance Guidance That Takes Risk and Compliance Seriously",
    desc: "We build governance and risk considerations into strategy from the start, rather than treating data privacy and ethical use as an afterthought addressed only after problems arise.",
  },
  {
    number: "05",
    title: "Vendor Evaluation Free From Bias Toward Any Specific Platform",
    desc: "We evaluate AI vendors and tools independently, based on your specific needs, rather than steering you toward a particular platform due to a partnership or resale relationship.",
  },
  {
    number: "06",
    title: "Ongoing Advisory as AI Capability and Your Business Both Evolve",
    desc: "We stay engaged as implementation progresses and the AI landscape continues to shift, rather than delivering a static strategy document that quickly becomes outdated.",
  },
];

const FAQS = [
  {
    question: "How much does AI strategy consulting cost in India?",
    answer:
      "Cost depends on scope, a focused readiness assessment costs less than a comprehensive strategy engagement including roadmap and governance development. We scope pricing after understanding your specific needs, rather than offering a flat rate upfront.",
  },
  {
    question: "How do we know if our business is actually ready for AI?",
    answer:
      "Readiness depends on factors like data quality, team capability, and process maturity, which we assess honestly during a readiness assessment. Being unprepared in some areas doesn't mean AI is off the table, it often just means addressing specific gaps first.",
  },
  {
    question: "Can you help us figure out which AI use cases to prioritize?",
    answer:
      "Yes, use case identification and prioritization is a core part of our service, helping you focus on opportunities with genuine feasibility and impact rather than pursuing every possibility at once.",
  },
  {
    question: "Do you implement the AI solutions too, or just the strategy?",
    answer:
      "We provide strategy and roadmap guidance, and can support implementation directly or work alongside your team or another development partner, depending on what fits your situation best.",
  },
  {
    question: "What does AI governance actually involve for a smaller business?",
    answer:
      "For smaller businesses, governance typically means clear guidelines on data privacy, appropriate AI use, and risk awareness, scaled to your actual size rather than an enterprise-level framework that's disproportionate to your needs.",
  },
  {
    question: "How do you help us choose between different AI vendors and tools?",
    answer:
      "We evaluate vendors and tools independently against your specific requirements, covering cost, capability, and integration feasibility, without bias toward any particular platform based on partnership arrangements.",
  },
];

export default function AiStrategyImplementationConsulting() {
  return (
    <ServiceDetailPage
      sectionLabel="AI Solutions"
      label="AI Strategy & Implementation Consulting"
      icon={Compass}
      description="AI strategy consulting built around real business use cases, not AI for its own sake, engineered to identify where it actually helps."
      heroTitle="Get an AI Roadmap Built Around What Actually Matters"
      heroDescription="AI strategy consulting built around real business use cases, not AI for its own sake, engineered to identify where it actually helps."
      heroCtaText="Get a Free AI Readiness Assessment"
      capabilitiesHeading="Built for Businesses Overwhelmed by AI Hype"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything Between AI Curiosity and a Working Adoption Plan"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us to Guide Their AI Strategy"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn AI Interest Into a Real Implementation Plan"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Advising on AI Strategy Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every AI strategy engagement, with the same honesty about readiness whether a client is nearby or across the world. We provide ai strategy consulting services for businesses across India, built around each business's specific operations and genuine AI readiness. For businesses looking for an ai transformation consulting agency beyond India, we support clients worldwide remotely, delivering the same ai implementation consulting company standard of work regardless of time zone. Whether you're a business in Prayagraj unsure where AI fits or an enterprise anywhere else needing AI governance guidelines, our approach starts with the same question: where would AI actually help your business, honestly."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for an AI Strategy Built Around What Actually Matters?"
      ctaText="Whether you're unsure where AI actually fits your business, under pressure to adopt it quickly, or need a genuine governance framework before scaling AI use, hype alone was never going to produce a workable plan. Let's talk through your business and scope what a real AI strategy would actually involve."
      ctaPrimaryText="Talk to an AI Strategy Specialist"
      ctaSecondaryText="Get Your Free AI Readiness Assessment"
    />
  );
}
