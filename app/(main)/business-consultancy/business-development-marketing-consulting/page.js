import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Handshake,
  Rocket,
  Building2,
  Building,
  ShoppingCart,
  Users,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "Business Development & Marketing Consulting | BizzBuzz Creations",
  description:
    "Business development and marketing consulting in India — build pipeline and brand visibility together, not as disconnected efforts, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/business-consultancy/business-development-marketing-consulting",
  },
};

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Startups & Early-Stage Businesses",
    desc: "Startups need to build pipeline and visibility simultaneously without a large marketing budget. We help early-stage businesses build a coordinated approach to winning first customers and early brand presence together.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMBs often run marketing and sales as disconnected efforts that don't reinforce each other. We size business development and marketing consulting for SMB budgets, aligning both toward the same pipeline goal.",
  },
  {
    icon: Building,
    title: "Enterprises & Large Organizations",
    desc: "Enterprises need marketing and business development aligned across multiple teams and business units. We run business development and marketing consulting at enterprise scale, connecting efforts across departments.",
  },
  {
    icon: ShoppingCart,
    title: "B2B Companies Building Pipeline",
    desc: "B2B companies need a coordinated approach connecting marketing content to actual sales conversations. We build business development strategy tightly connected to marketing, so content and outreach reinforce each other.",
  },
  {
    icon: Users,
    title: "Businesses Entering Partnership-Driven Growth",
    desc: "Businesses looking to grow through partnerships and channels need a structured approach to identify and build them. We help identify and structure partnerships that meaningfully extend reach and revenue.",
  },
  {
    icon: RefreshCw,
    title: "Businesses With Disconnected Sales & Marketing",
    desc: "Businesses where sales and marketing operate in silos lose leads in the gap between them. We rebuild the connection between business development and marketing, so both efforts point toward the same pipeline.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Business Development Strategy",
    desc: "We build a practical plan for winning new customers and partnerships, grounded in your actual market and sales capacity.",
    ctaText: "Know Our Services",
    services: [
      "BD Strategy Development",
      "Target Account Identification",
      "Sales Capacity Planning",
      "New Customer Acquisition Planning",
      "Partnership Opportunity Mapping",
      "BD Process Design",
      "Outreach Strategy Development",
      "BD Performance Tracking",
    ],
  },
  {
    number: "02",
    title: "Brand Positioning & Messaging",
    desc: "We help clarify how your brand should position itself and what message actually resonates with your target customers.",
    ctaText: "Know Our Services",
    services: [
      "Brand Positioning Development",
      "Messaging Framework Creation",
      "Value Proposition Development",
      "Competitive Positioning",
      "Audience Messaging Testing",
      "Brand Voice Definition",
      "Positioning Documentation",
      "Messaging Rollout Support",
    ],
  },
  {
    number: "03",
    title: "Pipeline & Lead Strategy",
    desc: "We design a coordinated approach to building pipeline, connecting marketing efforts directly to sales outcomes.",
    ctaText: "Know Our Services",
    services: [
      "Pipeline Strategy Development",
      "Lead Generation Planning",
      "Marketing-Sales Alignment",
      "Pipeline Stage Definition",
      "Lead Scoring Framework",
      "Conversion Funnel Mapping",
      "Pipeline Reporting Setup",
      "Pipeline Review Sessions",
    ],
  },
  {
    number: "04",
    title: "Partnership & Channel Development",
    desc: "We identify and help structure partnerships and channels that can meaningfully extend your reach and revenue.",
    ctaText: "Know Our Services",
    services: [
      "Partnership Identification",
      "Channel Partner Strategy",
      "Partnership Agreement Guidance",
      "Co-Marketing Planning",
      "Referral Program Design",
      "Channel Onboarding Support",
      "Partnership Performance Tracking",
      "Ongoing Partnership Management Advisory",
    ],
  },
  {
    number: "05",
    title: "Marketing & BD Alignment",
    desc: "We align marketing and business development efforts so they reinforce each other, not run as disconnected activities.",
    ctaText: "Know Our Services",
    services: [
      "Cross-Team Alignment Workshops",
      "Shared Goal Setting",
      "Handoff Process Design",
      "Joint Reporting Setup",
      "Communication Cadence Design",
      "Content-to-Sales Alignment",
      "Campaign-BD Coordination",
      "Alignment Review Sessions",
    ],
  },
  {
    number: "06",
    title: "Customer Acquisition Planning",
    desc: "We build a clear, prioritized plan for acquiring customers, matched to your budget and growth stage.",
    ctaText: "Know Our Services",
    services: [
      "Acquisition Channel Prioritization",
      "Budget-to-Channel Mapping",
      "Acquisition Cost Planning",
      "Growth Stage Alignment",
      "Customer Acquisition Roadmap",
      "Channel Testing Plan",
      "Acquisition Performance Tracking",
      "Ongoing Acquisition Advisory",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Market & Pipeline Audit",
    desc: "We assess your current customer acquisition efforts and brand positioning before recommending any changes.",
  },
  {
    number: "02",
    title: "Positioning & Messaging Development",
    desc: "We clarify how your brand should be positioned and what message actually resonates with your target customers.",
  },
  {
    number: "03",
    title: "Strategy & Messaging",
    desc: "We build a coordinated business development and marketing plan, with messaging that actually resonates with your buyers.",
  },
  {
    number: "04",
    title: "Alignment & Process Design",
    desc: "We design the handoff and alignment process between marketing and business development, so both reinforce each other.",
  },
  {
    number: "05",
    title: "Hands-On Implementation",
    desc: "We stay involved through execution, not just handing over a plan and disappearing after the first meeting.",
  },
  {
    number: "06",
    title: "Ongoing Review & Course Correction",
    desc: "We're direct about what's working and honest about what isn't, adjusting the plan as real pipeline results come in.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Strategy and Customers Together",
    desc: "Growth isn't just about strategy on paper — it's about winning customers too. Our combined approach helps you build pipeline and brand visibility.",
  },
  {
    number: "02",
    title: "No Generic Playbooks",
    desc: "Every recommendation is built around your industry, your team, and your real numbers — not a template pulled off a shelf.",
  },
  {
    number: "03",
    title: "We Stay Involved",
    desc: "From the first audit to final execution, we stay by your side long after the first meeting.",
  },
  {
    number: "04",
    title: "Outcomes You Can Measure",
    desc: "Every engagement is focused on results you can point to — real pipeline and visibility, not just reports.",
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
    question: "What's the difference between business development and marketing consulting?",
    answer:
      "Business development focuses on winning customers and partnerships directly, while marketing builds brand visibility and inbound demand — we align both so they reinforce each other.",
  },
  {
    question: "Do you also execute the marketing, or just plan it?",
    answer:
      "We stay involved through hands-on implementation, not just handing over a strategy and disappearing after the first meeting.",
  },
  {
    question: "How is this different from hiring a marketing agency?",
    answer:
      "We connect marketing directly to business development and sales outcomes, not just campaign metrics disconnected from actual pipeline.",
  },
  {
    question: "Can you help identify potential partnerships for our business?",
    answer:
      "Yes, we help identify and structure partnerships and channels that can meaningfully extend your reach and revenue.",
  },
  {
    question: "How much does business development and marketing consulting cost?",
    answer:
      "It depends on the scope of the engagement — we offer flexible pricing based on your goals and current stage.",
  },
];

export default function BusinessDevelopmentMarketingConsulting() {
  return (
    <ServiceDetailPage
      sectionLabel="Business Consultancy"
      label="Business Development & Marketing Consulting"
      icon={Handshake}
      description="Growth isn't just about strategy on paper — it's about winning customers too. Our combined business development and marketing consulting helps you build pipeline and brand visibility."
      heroTitle="Business Development & Marketing Consulting in India"
      heroDescription="Growth isn't just about strategy on paper — it's about winning customers too. Our combined business development and marketing consulting helps you build pipeline and brand visibility."
      capabilitiesHeading="Built for Businesses Ready to Connect Marketing to Real Pipeline"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our Business Development & Marketing Consulting"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us to Build Their Pipeline"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Marketing and Sales Into One Connected Engine"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Building Pipeline Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every business development engagement, with the same rigor whether a client is nearby or overseas. We work with startups, SMBs, and enterprises across India, connecting marketing and business development sized to each business's actual sales process. For businesses looking to work with us beyond India, we deliver this consulting remotely, working across time zones to the same standard regardless of location. Whether you're a startup building your first pipeline or an enterprise aligning marketing and sales across business units, our approach starts with auditing where the current gap actually is."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready to Turn Visibility Into Actual Customers?"
      ctaText="Whether you need a coordinated business development and marketing strategy built from scratch, help aligning sales and marketing that currently operate separately, or a partnership strategy to extend your reach, disconnected efforts were never going to get you there. Let's talk through your pipeline and scope what this consulting would actually involve."
      ctaPrimaryText="Talk to a Business Development Specialist"
      ctaSecondaryText="Get Your Free Pipeline Consultation"
    />
  );
}
