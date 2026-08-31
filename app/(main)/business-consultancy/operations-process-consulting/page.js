import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Settings,
  Rocket,
  Building2,
  Building,
  ShoppingCart,
  Handshake,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "Operations & Process Consulting Firm | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is an operations consulting firm improving business processes for companies across India and worldwide.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/business-consultancy/operations-process-consulting",
  },
};

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Startups & Early-Stage Businesses",
    desc: "Startups often run ad-hoc processes that worked at small scale but now cause daily friction. We help early-stage teams formalize just enough process to remove friction without over-engineering operations too early.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMBs frequently have processes that grew organically and now waste real time daily. We size operations consulting for SMB budgets, targeting the specific bottlenecks costing you the most.",
  },
  {
    icon: Building,
    title: "Enterprises & Large Organizations",
    desc: "Enterprises need process improvements that work across departments without disrupting critical operations. We run operations consulting at enterprise scale, built around careful, low-disruption rollout.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce & Retail Operations",
    desc: "Ecommerce operations involve order, inventory, and fulfillment processes that strain under growing volume. We streamline retail and ecommerce operations specifically around order flow and fulfillment efficiency.",
  },
  {
    icon: Handshake,
    title: "Service Businesses & Agencies",
    desc: "Service businesses and agencies often lose margin to inefficient internal delivery processes. We help service businesses streamline delivery workflows so more time goes to billable, valuable work.",
  },
  {
    icon: RefreshCw,
    title: "Businesses With Broken Legacy Processes",
    desc: "Businesses running critical operations on outdated, undocumented processes need a careful overhaul. We map existing legacy processes first, then redesign them without disrupting day-to-day operations.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Operational Bottleneck Audit",
    desc: "We identify exactly where inefficiency is quietly eating into profit in your day-to-day operations, not vague generalizations.",
    ctaText: "Know Our Services",
    services: [
      "Operational Audits",
      "Bottleneck Identification",
      "Process Time Studies",
      "Efficiency Assessments",
      "Stakeholder Interviews",
      "Current-State Mapping",
      "Cost-of-Inefficiency Analysis",
      "Audit Reporting",
    ],
  },
  {
    number: "02",
    title: "Process Redesign",
    desc: "Inefficient processes get redesigned around how work actually flows through your business, cutting unnecessary steps.",
    ctaText: "Know Our Services",
    services: [
      "Process Redesign",
      "Workflow Simplification",
      "Step Elimination",
      "Process Standardization",
      "Cross-Functional Process Mapping",
      "Redesign Testing",
      "Process Documentation",
      "Implementation Support",
    ],
  },
  {
    number: "03",
    title: "Tool & System Optimization",
    desc: "We assess whether your current tools and systems are helping or hindering operations, and recommend changes where needed.",
    ctaText: "Know Our Services",
    services: [
      "Tool Stack Audits",
      "System Fit Assessment",
      "Tool Consolidation Recommendations",
      "System Integration Review",
      "Software Selection Guidance",
      "Tool Migration Planning",
      "System Training Support",
      "Ongoing Tool Optimization",
    ],
  },
  {
    number: "04",
    title: "Cost & Resource Efficiency",
    desc: "We identify where resources — time, staff, budget — are being spent inefficiently, and where they'd have more impact.",
    ctaText: "Know Our Services",
    services: [
      "Resource Allocation Analysis",
      "Cost Efficiency Review",
      "Time Utilization Analysis",
      "Staffing Efficiency Assessment",
      "Budget Reallocation Recommendations",
      "Vendor Cost Review",
      "Resource Optimization Planning",
      "Efficiency Reporting",
    ],
  },
  {
    number: "05",
    title: "Operational KPI Tracking",
    desc: "We set up clear metrics to track operational health, so improvements are measurable, not just assumed.",
    ctaText: "Know Our Services",
    services: [
      "Operational KPI Development",
      "Dashboard Setup",
      "Performance Tracking Systems",
      "Reporting Cadence Design",
      "Benchmark Setting",
      "Operational Health Scorecards",
      "KPI Review Sessions",
      "Continuous Tracking Support",
    ],
  },
  {
    number: "06",
    title: "Continuous Improvement Framework",
    desc: "We help build a habit of ongoing process review, so operations keep improving instead of drifting back to old inefficiencies.",
    ctaText: "Know Our Services",
    services: [
      "Continuous Improvement Setup",
      "Process Review Cadence",
      "Feedback Loop Design",
      "Team Improvement Training",
      "Improvement Culture Building",
      "Regular Audit Scheduling",
      "Process Drift Monitoring",
      "Long-Term Improvement Support",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Operations Audit",
    desc: "We look closely at your day-to-day running to find exactly where bottlenecks and inefficiencies are actually happening.",
  },
  {
    number: "02",
    title: "Root Cause Analysis",
    desc: "We dig into why each bottleneck exists, so the fix addresses the actual cause rather than a surface symptom.",
  },
  {
    number: "03",
    title: "Process Redesign",
    desc: "We redesign the specific processes causing friction, built around your team's actual workflow, not a generic framework.",
  },
  {
    number: "04",
    title: "Tool & System Adjustments",
    desc: "We recommend and help implement tool or system changes where the current stack is genuinely holding operations back.",
  },
  {
    number: "05",
    title: "Hands-On Implementation",
    desc: "We stay involved through rollout, not just handing over recommendations and disappearing after the first meeting.",
  },
  {
    number: "06",
    title: "Ongoing Review & Course Correction",
    desc: "We're direct about what's working and honest about what isn't, adjusting the approach as real operational data comes in.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Focused on Real Bottlenecks",
    desc: "Inefficiency quietly eats into profit every single day. We identify the bottlenecks in your day-to-day running and streamline them.",
  },
  {
    number: "02",
    title: "No Generic Playbooks",
    desc: "Every recommendation is built around your industry, your team, and your real numbers — not a template pulled off a shelf.",
  },
  {
    number: "03",
    title: "We Stay Involved",
    desc: "From the first audit to final rollout, we stay by your side long after the first meeting.",
  },
  {
    number: "04",
    title: "Outcomes You Can Measure",
    desc: "Every engagement is focused on results you can point to, not just reports and recommendations that sit unread.",
  },
  {
    number: "05",
    title: "A Team, Not Outside Consultants",
    desc: "Think of us less like outside consultants and more like a hired team that's genuinely invested in your operations.",
  },
  {
    number: "06",
    title: "Local Roots, India-Wide Reach",
    desc: "Born and based in Prayagraj, we understand what it takes to run a business here as well as in the metros.",
  },
];

const FAQS = [
  {
    question: "How much does operations consulting cost in India?",
    answer:
      "Cost depends on scope, a focused process audit costs less than a comprehensive operations overhaul with implementation support. We scope pricing after understanding your specific processes and goals, rather than offering a flat rate upfront.",
  },
  {
    question: "How do you identify which processes actually need fixing?",
    answer:
      "We conduct an operational audit and process mapping exercise, identifying genuine bottlenecks and inefficiencies through direct observation and data, rather than relying on assumptions about where problems exist.",
  },
  {
    question: "Will process changes disrupt our day-to-day operations?",
    answer:
      "We design implementation to minimize disruption, often rolling out changes incrementally rather than all at once, so your business can continue operating while improvements are put in place.",
  },
  {
    question: "Do you help implement changes, or just recommend them?",
    answer:
      "We help with both, providing implementation support and team alignment guidance, not just a report recommending changes you'd need to figure out how to execute alone.",
  },
  {
    question: "Can operations consulting help a small business, not just large companies?",
    answer:
      "Yes, we scope operations consulting to fit smaller businesses just as thoughtfully as larger organizations, since inefficient processes cost small businesses proportionally just as much.",
  },
  {
    question: "How long does a typical operations consulting engagement take?",
    answer:
      "Timeline depends on scope, a focused process audit can take a few weeks, while a comprehensive operations overhaul with implementation support typically continues over several months.",
  },
];

export default function OperationsProcessConsulting() {
  return (
    <ServiceDetailPage
      sectionLabel="Business Consultancy"
      label="Operations & Process Consulting"
      icon={Settings}
      description="Inefficiency quietly eats into profit every single day. Through focused operations consulting, we identify the bottlenecks in your day-to-day running and streamline them."
      heroTitle="Operations & Process Consulting in India"
      heroDescription="Inefficiency quietly eats into profit every single day. Through focused operations consulting, we identify the bottlenecks in your day-to-day running and streamline them."
      capabilitiesHeading="Built for Businesses Ready to Fix What's Quietly Slowing Them Down"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our Operations Consulting"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us to Streamline Their Operations"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Inefficiency Into a Streamlined Operation"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Streamlining Operations Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every operations engagement, with the same rigor whether a client is nearby or overseas. We work with startups, SMBs, and enterprises across India, sizing operations consulting to each business's actual process complexity and volume. For businesses looking to work with us beyond India, we deliver operations consulting remotely, working across time zones to the same standard regardless of location. Whether you're a startup formalizing your first process or an enterprise redesigning a cross-department workflow, our approach starts with auditing what's actually happening today."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready to Stop Losing Profit to Inefficiency?"
      ctaText="Whether you need a full operations audit, a redesign of a specific bottleneck process, or ongoing support building a culture of continuous improvement, guessing was never going to fix it. Let's talk through your operations and scope what process consulting would actually involve."
      ctaPrimaryText="Talk to an Operations Consulting Specialist"
      ctaSecondaryText="Get Your Free Operations Audit"
    />
  );
}
