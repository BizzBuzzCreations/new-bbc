import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  PhoneCall,
  Rocket,
  Building2,
  Building,
  ShoppingCart,
  Handshake,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "Inbound & Outbound Call Center Services | BizzBuzz Creations",
  description:
    "Inbound and outbound call center services in India — agents trained on your scripts, tone, and product for sales, support, and collection calls, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/bpo-services/inbound-outbound-call-center-services",
  },
};

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Startups & Early-Stage Businesses",
    desc: "Startups need call coverage without hiring a floor of agents before revenue justifies it. We build small, trained call teams sized for early-stage volume, letting startups add seats only once call volume genuinely demands it.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMBs often lose leads and customers to slow or inconsistent phone response. We provide inbound and outbound call center services sized for SMB budgets, giving growing businesses a dedicated team without the cost of an in-house floor.",
  },
  {
    icon: Building,
    title: "Enterprises & Large Organizations",
    desc: "Enterprises need call operations that handle high volume across regions and departments reliably. We run inbound and outbound campaigns built for enterprise-scale volume, compliance requirements, and integration with existing CRM systems.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce & Retail Brands",
    desc: "Ecommerce brands need order support and outbound recovery calls handled consistently. We staff agents trained on your product catalog and policies to handle order queries, cart recovery calls, and returns at scale.",
  },
  {
    icon: Handshake,
    title: "Agencies & Outsourcing Partners",
    desc: "Agencies managing client calling needs need a reliable execution partner. We work as a white-label call center partner, running inbound and outbound campaigns agencies can present as their own delivery capability.",
  },
  {
    icon: RefreshCw,
    title: "Businesses Switching From Another Call Center",
    desc: "Businesses unhappy with their current call center vendor need a smooth handover, not a service gap. We manage structured transitions from your existing provider, preserving scripts and continuity while raising quality standards.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Inbound Customer Support Calls",
    desc: "Trained agents handle customer queries, order status, and troubleshooting calls with your scripts and tone, not a generic script read out from a random floor.",
    ctaText: "Know Our Services",
    services: [
      "Inbound Call Handling",
      "Customer Query Resolution",
      "Order Status Support",
      "Troubleshooting Calls",
      "Complaint Handling",
      "Appointment Booking Calls",
      "Product Information Calls",
      "Call Escalation Handling",
    ],
  },
  {
    number: "02",
    title: "Outbound Sales & Collection Calls",
    desc: "From lead follow-ups to payment reminders, our outbound teams run structured calling campaigns that stay on-brand and compliant.",
    ctaText: "Know Our Services",
    services: [
      "Outbound Sales Calling",
      "Lead Follow-Up Calls",
      "Payment Reminder Calls",
      "Collection Calling",
      "Survey & Feedback Calls",
      "Appointment Setting",
      "Renewal Reminder Calls",
      "Compliance-Checked Scripts",
    ],
  },
  {
    number: "03",
    title: "Script & Brand Training",
    desc: "Every agent is trained specifically on your product, tone, and common objections before they take a single live call.",
    ctaText: "Know Our Services",
    services: [
      "Script Development",
      "Brand Voice Training",
      "Objection Handling Training",
      "Product Knowledge Training",
      "Role-Play Simulations",
      "Onboarding Programs",
      "Ongoing Refresher Training",
      "Call Certification",
    ],
  },
  {
    number: "04",
    title: "Call Quality Monitoring",
    desc: "Regular call reviews and scoring keep agents consistent with your standards, catching drift before it affects customers.",
    ctaText: "Know Our Services",
    services: [
      "Call Quality Audits",
      "Scorecard Development",
      "Call Recording Review",
      "Compliance Checks",
      "Agent Feedback Sessions",
      "QA Reporting",
      "Mystery Call Testing",
      "Coaching Plans",
    ],
  },
  {
    number: "05",
    title: "Multi-Language Support",
    desc: "We staff agents across languages relevant to your customer base, so callers get served in the language they're comfortable with.",
    ctaText: "Know Our Services",
    services: [
      "Hindi Language Support",
      "English Language Support",
      "Regional Language Support",
      "Bilingual Agent Staffing",
      "Language-Based Call Routing",
      "Translation Support",
      "Localized Scripts",
      "Accent Neutralization Training",
    ],
  },
  {
    number: "06",
    title: "Scalable Agent Teams",
    desc: "Start with a small team and scale up seats as call volume grows, without a long onboarding cycle each time.",
    ctaText: "Know Our Services",
    services: [
      "Flexible Seat Scaling",
      "Rapid Agent Onboarding",
      "Shift Planning",
      "Seasonal Capacity Support",
      "Team Lead Assignment",
      "Workforce Management",
      "Attrition Backfill",
      "Capacity Forecasting",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Discovery & Call Volume Assessment",
    desc: "We review your existing scripts, call volume, and peak hours to size the right team and shift structure for your account.",
  },
  {
    number: "02",
    title: "Script & Workflow Development",
    desc: "We build or refine scripts and call workflows around your product, tone, and common objections before training begins.",
  },
  {
    number: "03",
    title: "Hire & Train Agents on Your Brand",
    desc: "Agents are hired and trained specifically on your scripts, tone, and product, so they represent your brand from the first call.",
  },
  {
    number: "04",
    title: "Systems & CRM Integration",
    desc: "We connect call systems to your CRM and reporting tools, so call outcomes and lead status update automatically.",
  },
  {
    number: "05",
    title: "Launch With Live Call Monitoring",
    desc: "Your call team goes live with close oversight in the first weeks, so issues get caught early instead of after they've cost you customers.",
  },
  {
    number: "06",
    title: "Ongoing Reporting & Optimization",
    desc: "Weekly reporting, call recordings, and quality scores keep the engagement improving long after onboarding ends.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Brand-Trained Agents",
    desc: "Every account gets agents trained specifically on your scripts, tone, and product, not a generic script read out from a random floor.",
  },
  {
    number: "02",
    title: "Transparent Call Recordings",
    desc: "Call recordings and quality scores are available on request, so you always know what's being said to your customers.",
  },
  {
    number: "03",
    title: "Flexible Scaling",
    desc: "We scale seats up or down with your actual call volume instead of locking you into a fixed team size.",
  },
  {
    number: "04",
    title: "Quality Assurance Built In",
    desc: "Regular call reviews catch drift from your standards early, before it becomes a pattern customers notice.",
  },
  {
    number: "05",
    title: "Multi-Shift Coverage",
    desc: "Shift-based staffing covers your peak call hours and time zones without leaving gaps in coverage.",
  },
  {
    number: "06",
    title: "Direct Account Management",
    desc: "No ticket queues for active clients — you reach your point of contact directly, not a rotating cast of agents.",
  },
];

const FAQS = [
  {
    question: "What languages can your call center agents support?",
    answer:
      "We staff agents in the languages relevant to your customer base, including Hindi, English, and regional languages on request.",
  },
  {
    question: "Is there a minimum call volume to get started?",
    answer:
      "No fixed minimum — we size a team around your actual volume, whether that's a small pilot or a full-scale operation.",
  },
  {
    question: "How do you handle outbound calling compliance?",
    answer:
      "We follow relevant do-not-disturb and calling regulations, and align scripts and calling windows to your compliance requirements.",
  },
  {
    question: "How is pricing structured for call center services?",
    answer:
      "Pricing is typically based on seats, call volume, or a hybrid model — we'll recommend what fits your usage pattern best.",
  },
  {
    question: "How often will I get reports on call performance?",
    answer:
      "We provide weekly performance reporting by default, with call recordings available on request for deeper review.",
  },
];

export default function InboundOutboundCallCenterServices() {
  return (
    <ServiceDetailPage
      sectionLabel="BPO Services"
      label="Inbound & Outbound Call Center Services"
      icon={PhoneCall}
      description="Agents trained on your scripts, tone, and product handle customer queries, sales calls, and collections — not a generic script read off a random floor."
      heroTitle="Inbound & Outbound Call Center Services in India"
      heroDescription="Agents trained on your scripts, tone, and product handle customer queries, sales calls, and collections — not a generic script read off a random floor."
      capabilitiesHeading="Built for Businesses Ready to Fix How They Handle Calls"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our Call Center Services"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us to Run Their Call Center Operations"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Your Call Requirements Into a Working Call Team"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Running Call Center Operations Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we build every call center engagement, with the same rigor whether a client is nearby or overseas. We work with startups, SMBs, and enterprises across India, staffing inbound and outbound teams sized to each business's actual call volume. For businesses looking to outsource calling beyond India, we run call center operations remotely, working across time zones and languages to deliver the same standard of service regardless of location. Whether you're a startup handling your first support line or an enterprise running multi-region campaigns, our approach starts with understanding your scripts, customers, and goals before assigning a single agent."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for a Call Team That Actually Represents Your Brand?"
      ctaText="Whether you need inbound support, outbound sales and collection calls, or a full call center team built from scratch, the right setup depends on your actual call volume and customer base. Let's talk through your requirements and scope what a dedicated call team would actually involve."
      ctaPrimaryText="Talk to a Call Center Specialist"
      ctaSecondaryText="Get Your Free Call Center Consultation"
    />
  );
}
