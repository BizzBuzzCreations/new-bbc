import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Rocket,
  Lightbulb,
  Building2,
  Building,
  ShoppingCart,
  Handshake,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "Startup & New Business Consultant | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a startup business consultant helping founders launch and grow across India and worldwide.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/business-consultancy/startup-new-business-consulting",
  },
};

const CAPABILITIES = [
  {
    icon: Lightbulb,
    title: "First-Time Founders",
    desc: "First-time founders often have an idea but no structured way to validate or launch it. We guide first-time founders through business model validation and launch planning, from a partner who's done it before.",
  },
  {
    icon: Building2,
    title: "Small Teams Building Their First Product",
    desc: "Small founding teams need structure around go-to-market and early operations without a large advisory budget. We size startup consulting for small teams, focused on the decisions that matter most before launch.",
  },
  {
    icon: Building,
    title: "Funded Startups Scaling Fast",
    desc: "Funded startups need to move quickly without skipping foundational business planning. We provide startup consulting built for post-funding pace, covering structure and go-to-market without slowing momentum.",
  },
  {
    icon: ShoppingCart,
    title: "New Product & Ecommerce Launches",
    desc: "New product and ecommerce launches need a go-to-market plan grounded in real customer demand. We help new brands validate demand and plan launch strategy before significant inventory or marketing spend goes in.",
  },
  {
    icon: Handshake,
    title: "Co-Founding Teams",
    desc: "Co-founding teams often avoid difficult conversations about roles and equity until it's a problem. We facilitate founding team structure conversations early, helping avoid disputes that derail promising startups.",
  },
  {
    icon: RefreshCw,
    title: "Founders Pivoting Their Original Idea",
    desc: "Founders realizing their original idea needs to change need a structured way to reassess. We help founders validate a pivot against real market signals before committing further time and money.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Business Model Validation",
    desc: "We help first-time founders pressure-test their business model against real market signals, before too much time and money go in.",
    ctaText: "Know Our Services",
    services: [
      "Business Model Testing",
      "Market Signal Validation",
      "Customer Discovery Support",
      "Revenue Model Assessment",
      "Assumption Testing",
      "Pricing Model Validation",
      "Competitive Positioning Check",
      "Validation Reporting",
    ],
  },
  {
    number: "02",
    title: "Go-to-Market Strategy",
    desc: "We build a practical go-to-market plan — who you're selling to, how you'll reach them, and what launch actually looks like.",
    ctaText: "Know Our Services",
    services: [
      "Go-to-Market Planning",
      "Target Customer Definition",
      "Channel Strategy Development",
      "Launch Planning",
      "Pricing Strategy",
      "Positioning Development",
      "Launch Timeline Development",
      "GTM Documentation",
    ],
  },
  {
    number: "03",
    title: "Business Plan & Documentation",
    desc: "We help structure a clear business plan and supporting documentation, useful for both internal clarity and external conversations.",
    ctaText: "Know Our Services",
    services: [
      "Business Plan Development",
      "Financial Projection Support",
      "Pitch Deck Structuring",
      "Executive Summary Writing",
      "Operations Plan Documentation",
      "Market Analysis Documentation",
      "Investor-Ready Documentation",
      "Plan Review & Refinement",
    ],
  },
  {
    number: "04",
    title: "Funding Readiness Guidance",
    desc: "We help founders get pitch-ready and understand what investors or lenders typically expect before approaching them.",
    ctaText: "Know Our Services",
    services: [
      "Pitch Deck Review",
      "Investor Readiness Assessment",
      "Financial Story Development",
      "Due Diligence Preparation",
      "Pitch Practice Sessions",
      "Funding Strategy Guidance",
      "Investor Question Preparation",
      "Term Sheet Education",
    ],
  },
  {
    number: "05",
    title: "Founding Team Structure Advice",
    desc: "We advise on roles, equity, and structure for founding teams, helping avoid disputes that derail promising startups later.",
    ctaText: "Know Our Services",
    services: [
      "Role Definition",
      "Equity Structure Guidance",
      "Founder Agreement Facilitation",
      "Vesting Schedule Guidance",
      "Decision-Making Framework Setup",
      "Conflict Prevention Planning",
      "Advisory Board Structuring",
      "Team Structure Documentation",
    ],
  },
  {
    number: "06",
    title: "Early-Stage Growth Planning",
    desc: "Beyond launch, we help plan the first stages of growth, so early traction gets built on rather than squandered.",
    ctaText: "Know Our Services",
    services: [
      "Growth Milestone Planning",
      "Early Traction Strategy",
      "Customer Retention Planning",
      "Hiring Roadmap Development",
      "Growth Metric Definition",
      "Scaling Readiness Assessment",
      "Next-Stage Planning",
      "Ongoing Growth Advisory",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Idea & Model Discovery",
    desc: "We understand your idea, target customer, and business model before offering any direction, grounded in your actual market.",
  },
  {
    number: "02",
    title: "Validation & Planning",
    desc: "We pressure-test the model and build a practical plan covering go-to-market, structure, and early milestones.",
  },
  {
    number: "03",
    title: "Team Structure & Documentation",
    desc: "We help formalize founding team roles and equity, and structure a business plan you can use internally and externally.",
  },
  {
    number: "04",
    title: "Funding Readiness",
    desc: "If relevant, we prepare you to approach investors or lenders, making sure your pitch and documentation are genuinely ready.",
  },
  {
    number: "05",
    title: "Hands-On Launch Support",
    desc: "We stay involved through your launch, not just handing over a plan and disappearing after the first meeting.",
  },
  {
    number: "06",
    title: "Ongoing Review & Course Correction",
    desc: "We're direct about what's working and honest about what isn't, adjusting the plan as real early-stage results come in.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "A Partner Who's Done It Before",
    desc: "Our startup consulting guides first-time founders from a partner who's genuinely done it before, not a textbook consultant.",
  },
  {
    number: "02",
    title: "No Generic Playbooks",
    desc: "Every recommendation is built around your specific idea and market, not a template pulled off a shelf.",
  },
  {
    number: "03",
    title: "We Stay Involved",
    desc: "From the first idea discussion to launch, we stay by your side, not just handing over a plan.",
  },
  {
    number: "04",
    title: "Direct & Honest",
    desc: "We're direct about what's working, honest about what isn't, and focused on outcomes you can actually measure.",
  },
  {
    number: "05",
    title: "A Team, Not Outside Consultants",
    desc: "Think of us less like outside consultants and more like a hired team that's genuinely invested in your startup's success.",
  },
  {
    number: "06",
    title: "Local Roots, India-Wide Reach",
    desc: "Born and based in Prayagraj, we understand what it takes to launch a business here as well as in the metros.",
  },
];

const FAQS = [
  {
    question: "How much does startup consulting cost in India?",
    answer:
      "Cost depends on scope, a focused business plan engagement costs less than ongoing advisory covering validation, planning, and growth together. We scope pricing after understanding your specific needs, rather than offering a flat rate upfront.",
  },
  {
    question: "Can you help validate my business idea before I invest in it?",
    answer:
      "Yes, business idea validation is one of our core services, helping you assess genuine market demand before committing significant time or money to an unproven concept.",
  },
  {
    question: "Do you help write a full business plan, or just review one?",
    answer:
      "We do both, writing complete business plans from scratch or reviewing and refining a plan you've already drafted, depending on what stage you're at and what you actually need.",
  },
  {
    question: "Can you help us prepare for fundraising and investor pitches?",
    answer:
      "Yes, fundraising and investor readiness support is a core part of what we offer, covering pitch development, financial storytelling, and preparation for genuine investor scrutiny.",
  },
  {
    question: "Is this consulting only for tech startups, or any small business?",
    answer:
      "We work with startups and small businesses across various industries, not just tech, scoping our guidance to fit whatever kind of business you're actually building.",
  },
  {
    question: "How long does startup consulting typically continue?",
    answer:
      "Many founders start with a focused engagement, like validation or a business plan, then continue with ongoing advisory as new decisions come up during growth. We scope this based on what fits your specific situation.",
  },
];

export default function StartupNewBusinessConsulting() {
  return (
    <ServiceDetailPage
      sectionLabel="Business Consultancy"
      label="Startup & New Business Consulting"
      icon={Rocket}
      description="Starting up is exciting and overwhelming. Our startup consulting guides first-time founders through everything from business models to go-to-market strategy, from a partner who's done it before."
      heroTitle="Startup & New Business Consulting in India"
      heroDescription="Starting up is exciting and overwhelming. Our startup consulting guides first-time founders through everything from business models to go-to-market strategy, from a partner who's done it before."
      capabilitiesHeading="Built for Founders Ready to Launch With Real Structure"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our Startup Consulting"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Founders Trust Us to Guide Their Launch"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Your Idea Into a Structured Launch"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Guiding Founders Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we guide every startup engagement, with the same care whether a founder is nearby or overseas. We work with first-time founders, funded startups, and new business launches across India, sizing support to each founder's actual stage and needs. For founders looking to work with us beyond India, we deliver startup consulting remotely, working across time zones to the same standard regardless of location. Whether you're validating your first idea or planning a funded startup's next stage, our approach starts with the same question: what does your business actually need to launch successfully."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready to Launch With a Plan, Not Just an Idea?"
      ctaText="Whether you need help validating your business model, a full go-to-market strategy, or guidance on founding team structure before things get complicated, a generic startup guide was never going to get you there. Let's talk through your idea and scope what startup consulting would actually involve."
      ctaPrimaryText="Talk to a Startup Consulting Specialist"
      ctaSecondaryText="Get Your Free Startup Consultation"
    />
  );
}
