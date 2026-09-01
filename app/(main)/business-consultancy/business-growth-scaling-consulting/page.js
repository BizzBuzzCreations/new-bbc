import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  TrendingUp,
  Rocket,
  Building2,
  Building,
  ShoppingCart,
  Handshake,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "Business Growth & Scaling Consultant | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a business growth consultant helping companies scale sustainably across India and worldwide.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/business-consultancy/business-growth-scaling-consulting",
  },
};

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Startups Past Product-Market Fit",
    desc: "Startups that have found traction need systems to scale it without breaking what's working. We help post-fit startups build the operational foundation needed to grow demand into sustainable revenue.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMBs ready to grow often lack the systems to handle increased volume reliably. We size growth consulting for SMB budgets, focused on the specific bottlenecks that would break first under growth.",
  },
  {
    icon: Building,
    title: "Enterprises Entering New Markets",
    desc: "Enterprises expanding into new markets or segments need a structured approach to avoid costly missteps. We run growth consulting at enterprise scale, built around market entry and expansion planning.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce & Retail Brands Scaling Fast",
    desc: "Ecommerce brands scaling order volume fast often strain fulfillment, support, and cash flow simultaneously. We help fast-growing retail brands build the operational systems that keep pace with demand.",
  },
  {
    icon: Handshake,
    title: "Franchises & Multi-Location Businesses",
    desc: "Businesses expanding into multiple locations need repeatable systems, not one-off solutions each time. We help build standardized processes that make expansion into new locations genuinely repeatable.",
  },
  {
    icon: RefreshCw,
    title: "Businesses That Scaled Too Fast Already",
    desc: "Businesses that grew faster than their systems could handle need a course correction, not more growth yet. We help stabilize operations first, then build the foundation for sustainable growth going forward.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Scalable Systems & Process Design",
    desc: "We design systems and processes that can handle growing volume without breaking what's currently working.",
    ctaText: "Know Our Services",
    services: [
      "Process Scalability Assessment",
      "System Design",
      "Standard Operating Procedure Development",
      "Capacity Planning",
      "Bottleneck Elimination",
      "Process Documentation",
      "Scalability Testing",
      "Systems Implementation Support",
    ],
  },
  {
    number: "02",
    title: "Team Structure for Growth",
    desc: "We advise on hiring priorities and team structure as you scale, so growth doesn't outpace your ability to manage it.",
    ctaText: "Know Our Services",
    services: [
      "Org Structure Design",
      "Hiring Priority Planning",
      "Role Definition",
      "Management Layer Planning",
      "Team Capacity Assessment",
      "Delegation Framework Design",
      "Leadership Development Planning",
      "Team Structure Documentation",
    ],
  },
  {
    number: "03",
    title: "Financial Planning for Scale",
    desc: "We help plan the financial side of scaling — cash flow, margins, and investment needs — so growth stays sustainable.",
    ctaText: "Know Our Services",
    services: [
      "Cash Flow Planning",
      "Margin Analysis",
      "Growth Capital Planning",
      "Financial Forecasting",
      "Unit Economics Review",
      "Investment Needs Assessment",
      "Budget Planning for Scale",
      "Financial Risk Assessment",
    ],
  },
  {
    number: "04",
    title: "New Market & Channel Expansion",
    desc: "We assess and plan expansion into new markets or sales channels, grounded in real demand signals, not just ambition.",
    ctaText: "Know Our Services",
    services: [
      "Market Entry Assessment",
      "Channel Expansion Planning",
      "Demand Validation",
      "Expansion Risk Analysis",
      "Go-to-Market Planning for New Markets",
      "Regional Expansion Strategy",
      "Channel Partner Strategy",
      "Expansion Roadmapping",
    ],
  },
  {
    number: "05",
    title: "Growth Metrics & Tracking",
    desc: "We set up the right metrics to track as you scale, so you know growth is genuinely healthy, not masking underlying problems.",
    ctaText: "Know Our Services",
    services: [
      "Growth KPI Development",
      "Health Metric Definition",
      "Dashboard Setup",
      "Cohort Analysis Setup",
      "Retention Metric Tracking",
      "Growth Reporting Cadence",
      "Metric Review Sessions",
      "Early Warning Indicator Setup",
    ],
  },
  {
    number: "06",
    title: "Risk & Bottleneck Identification",
    desc: "We identify the risks and bottlenecks most likely to break under growing pressure, before they actually do.",
    ctaText: "Know Our Services",
    services: [
      "Risk Assessment",
      "Bottleneck Stress Testing",
      "Operational Risk Mapping",
      "Contingency Planning",
      "Scaling Risk Reviews",
      "Vendor & Supplier Risk Review",
      "Risk Mitigation Planning",
      "Ongoing Risk Monitoring",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Current State Assessment",
    desc: "We assess what's currently working and where the cracks are most likely to show as volume grows.",
  },
  {
    number: "02",
    title: "Risk & Bottleneck Identification",
    desc: "We identify the specific risks and bottlenecks most likely to break first under growing pressure.",
  },
  {
    number: "03",
    title: "Scaling Strategy & Systems",
    desc: "We design the systems, processes, and team structure needed to support sustainable growth, not just faster growth.",
  },
  {
    number: "04",
    title: "Financial & Team Planning",
    desc: "We plan the financial and hiring implications of scaling, so resources are in place before growth outpaces capacity.",
  },
  {
    number: "05",
    title: "Hands-On Implementation",
    desc: "We stay involved through execution, not just handing over a growth plan and disappearing after the first meeting.",
  },
  {
    number: "06",
    title: "Ongoing Review & Course Correction",
    desc: "We're direct about what's working and honest about what isn't, adjusting the plan as real growth data comes in.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Sustainable, Not Just Fast",
    desc: "Our growth consulting builds systems and processes designed to help you expand sustainably, not just quickly.",
  },
  {
    number: "02",
    title: "No Generic Playbooks",
    desc: "Every recommendation is built around your industry, your team, and your real numbers — not a template pulled off a shelf.",
  },
  {
    number: "03",
    title: "We Stay Involved",
    desc: "From the first assessment to final execution, we stay by your side long after the first meeting.",
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
    desc: "Born and based in Prayagraj, we understand what it takes to scale a business here as well as in the metros.",
  },
];

const FAQS = [
  {
    question: "How much does business growth consulting cost in India?",
    answer:
      "Cost depends on scope, a focused growth strategy review costs less than ongoing advisory covering strategy, operations, and expansion together. We scope pricing after understanding your specific goals, rather than offering a flat rate upfront.",
  },
  {
    question: "How do you know which growth channels to prioritize first?",
    answer:
      "We assess channels based on your specific business, audience, and resources, prioritizing based on realistic return and feasibility rather than chasing every channel that seems promising in general.",
  },
  {
    question: "Can growth consulting help with scaling operations, not just revenue?",
    answer:
      "Yes, operational scaling is a core part of our approach, since growth that outpaces your operational capacity tends to create quality and service problems that undermine the growth itself.",
  },
  {
    question: "How do you make sure growth doesn't outpace what our team can handle?",
    answer:
      "We plan operational readiness alongside growth targets from the start, assessing team capacity and infrastructure needs as part of the growth strategy itself, not as an afterthought.",
  },
  {
    question: "Do you help with market or geographic expansion specifically?",
    answer:
      "Yes, business expansion planning is one of our core services, covering feasibility assessment, risk analysis, and planning for entering new markets or locations.",
  },
  {
    question: "How long does a typical growth consulting engagement take?",
    answer:
      "Timeline depends on scope, a focused strategy review can take a few weeks, while ongoing growth advisory typically continues over several months as your business actually scales.",
  },
];

export default function BusinessGrowthScalingConsulting() {
  return (
    <ServiceDetailPage
      sectionLabel="Business Consultancy"
      label="Business Growth & Scaling Consulting"
      icon={TrendingUp}
      description="Ready to grow but not sure how to scale without breaking what's working? Our growth consulting builds systems and processes designed to help you expand sustainably, not just quickly."
      heroTitle="Business Growth & Scaling Consulting in India"
      heroDescription="Ready to grow but not sure how to scale without breaking what's working? Our growth consulting builds systems and processes designed to help you expand sustainably, not just quickly."
      capabilitiesHeading="Built for Businesses Ready to Scale Without Breaking"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our Growth & Scaling Consulting"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us to Guide Their Growth"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Growth Ambition Into Sustainable Scale"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Guiding Growth Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we guide every growth engagement, with the same rigor whether a client is nearby or overseas. We work with startups, SMBs, and enterprises across India, sizing growth consulting to each business's actual scaling stage and risk points. For businesses looking to work with us beyond India, we deliver growth consulting remotely, working across time zones to the same standard regardless of location. Whether you're a startup scaling past product-market fit or an enterprise entering a new market, our approach starts with identifying what would actually break first under growth."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready to Scale Without Breaking What's Working?"
      ctaText="Whether you need systems built for your next stage of growth, a risk assessment before you scale further, or hands-on support implementing a growth plan, guessing was never going to get you there sustainably. Let's talk through your growth and scope what scaling consulting would actually involve."
      ctaPrimaryText="Talk to a Growth Consulting Specialist"
      ctaSecondaryText="Get Your Free Growth Consultation"
    />
  );
}
