import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Contact,
  Rocket,
  Building2,
  Building,
  ShoppingCart,
  Handshake,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "CRM Marketing Automation | BizzBuzz Creations",
  description:
    "CRM marketing automation in India — every call, form fill, or reply automatically updates lead status and triggers the next action, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/marketing-automation/crm-marketing-automation",
  },
};

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Startups & Early-Stage Businesses",
    desc: "Startups often track leads across scattered spreadsheets and chat threads before a CRM habit forms. We connect lightweight CRM automation early, so founders stop losing leads to a forgotten follow-up.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMBs frequently have a CRM that's set up but barely used because updates require manual effort. We build CRM marketing automation sized for SMB budgets, keeping the pipeline current without extra admin work.",
  },
  {
    icon: Building,
    title: "Enterprises & Large Organizations",
    desc: "Enterprises need CRM automation that works reliably across multiple sales teams and territories. We build enterprise-scale CRM automation integrated with existing sales processes and reporting requirements.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce & Retail Brands",
    desc: "Ecommerce brands need customer and lead data flowing accurately between campaigns and their CRM. We connect ecommerce platforms to your CRM so customer behavior triggers the right follow-up automatically.",
  },
  {
    icon: Handshake,
    title: "Agencies Managing Client Pipelines",
    desc: "Agencies running lead generation for clients need the leads landing somewhere reliable. We set up CRM automation agencies can hand off to clients or manage on their behalf as part of a broader campaign.",
  },
  {
    icon: RefreshCw,
    title: "Businesses Switching or Cleaning Up a CRM",
    desc: "Businesses migrating CRMs or fixing years of messy data need a careful, structured approach. We handle CRM migrations and cleanups, rebuilding automation properly instead of carrying old problems into the new system.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "CRM Integration & Setup",
    desc: "We connect your CRM directly to your campaigns and forms, so lead data flows in automatically instead of being entered manually.",
    ctaText: "Know Our Services",
    services: [
      "CRM Integration",
      "Form-to-CRM Connection",
      "Landing Page Integration",
      "Ad Platform Integration",
      "API-Based Data Sync",
      "Third-Party Tool Connectors",
      "CRM Configuration",
      "Field Mapping Setup",
    ],
  },
  {
    number: "02",
    title: "Automatic Lead Status Updates",
    desc: "Every call, form fill, or reply automatically updates lead status in your CRM, so your pipeline reflects reality in real time.",
    ctaText: "Know Our Services",
    services: [
      "Lead Status Automation",
      "Call Outcome Logging",
      "Pipeline Stage Updates",
      "Activity Tracking",
      "Real-Time Sync Rules",
      "Deal Progress Automation",
      "Status Change Triggers",
      "Data Accuracy Checks",
    ],
  },
  {
    number: "03",
    title: "Triggered Follow-Up Actions",
    desc: "A status change can automatically trigger the next action — an email, a task for your sales rep, or a WhatsApp message — without manual intervention.",
    ctaText: "Know Our Services",
    services: [
      "Trigger-Based Workflows",
      "Automated Task Creation",
      "Follow-Up Email Automation",
      "WhatsApp Trigger Automation",
      "Reminder Automation",
      "Escalation Rules",
      "Sales Rep Notifications",
      "Multi-Step Sequences",
    ],
  },
  {
    number: "04",
    title: "Lead Scoring & Routing",
    desc: "Leads get scored and routed to the right salesperson automatically, based on rules built around how your sales process actually works.",
    ctaText: "Know Our Services",
    services: [
      "Lead Scoring Models",
      "Automated Lead Routing",
      "Territory-Based Assignment",
      "Round-Robin Distribution",
      "Priority Lead Flagging",
      "Scoring Rule Configuration",
      "Sales Team Assignment Logic",
      "Lead Qualification Rules",
    ],
  },
  {
    number: "05",
    title: "Pipeline Reporting & Visibility",
    desc: "We set up reporting so you can see pipeline health and campaign performance directly from your CRM, not a separate spreadsheet.",
    ctaText: "Know Our Services",
    services: [
      "Pipeline Dashboards",
      "Campaign Performance Reports",
      "Conversion Rate Tracking",
      "Sales Funnel Reporting",
      "Custom Report Building",
      "Forecast Reporting",
      "Team Performance Reports",
      "Automated Report Delivery",
    ],
  },
  {
    number: "06",
    title: "Duplicate & Data Cleanup",
    desc: "We help clean up and prevent duplicate records, so your CRM stays a reliable source of truth, not a cluttered mess.",
    ctaText: "Know Our Services",
    services: [
      "Duplicate Detection",
      "Data Deduplication",
      "Data Standardization",
      "Field Cleanup Rules",
      "Ongoing Data Hygiene",
      "Migration Cleanup",
      "Validation Rules",
      "Data Quality Audits",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "CRM & Workflow Audit",
    desc: "We review your current CRM setup and where leads currently stall — a form filled and never followed up, a call logged and forgotten.",
  },
  {
    number: "02",
    title: "Automation Design & Planning",
    desc: "We plan the specific status updates, triggers, and routing rules needed, mapped to how your sales process actually runs.",
  },
  {
    number: "03",
    title: "Integration & Automation Build",
    desc: "We connect your CRM to your campaigns and build the automation rules for status updates and triggered actions.",
  },
  {
    number: "04",
    title: "Testing & Team Handoff",
    desc: "We test the automation with your sales team before launch, so it fits how they actually work day-to-day.",
  },
  {
    number: "05",
    title: "Launch & Live Monitoring",
    desc: "Automation goes live with close monitoring in the first weeks, so any gaps in routing or triggers get caught early.",
  },
  {
    number: "06",
    title: "Monthly Review & Optimization",
    desc: "Every workflow is reviewed and improved monthly, not left running on autopilot and forgotten after setup.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "CRM-Connected, Not Manual",
    desc: "Every call, form fill, or reply automatically updates lead status and triggers the next action — no manual data entry required.",
  },
  {
    number: "02",
    title: "One Connected System",
    desc: "We treat your CRM as the hub connecting email, WhatsApp, and lead nurturing, not a separate system running blind.",
  },
  {
    number: "03",
    title: "We Build the Workflow Ourselves",
    desc: "We don't sell you a tool subscription and walk away — we build the automation and connect it properly ourselves.",
  },
  {
    number: "04",
    title: "Sales Team Wakes Up to Warm Leads",
    desc: "Automation is built so your sales team wakes up to warm, updated leads, not cold silence and manual data entry.",
  },
  {
    number: "05",
    title: "Reviewed Monthly",
    desc: "Every workflow is reviewed and improved monthly, not left running on autopilot and forgotten.",
  },
  {
    number: "06",
    title: "Scales With Real Volume",
    desc: "Startups get plans that scale with real lead volume, not enterprise CRM pricing from day one.",
  },
];

const FAQS = [
  {
    question: "Which CRMs do you work with?",
    answer:
      "We work with popular CRM platforms and can assess compatibility with your specific setup during onboarding.",
  },
  {
    question: "Will this replace our sales team's manual data entry?",
    answer:
      "Yes, automated status updates remove most manual data entry, though your team will still confirm and act on key decisions.",
  },
  {
    question: "Can leads be automatically routed to the right salesperson?",
    answer:
      "Yes, we set up lead scoring and routing rules based on how your sales process actually works, not a generic default.",
  },
  {
    question: "Do you clean up existing duplicate or messy CRM data?",
    answer:
      "Yes, we help clean up and prevent duplicate records as part of setting up reliable automation.",
  },
  {
    question: "How long does CRM automation setup take?",
    answer:
      "Setup typically takes a few weeks, depending on your CRM's complexity and how many campaigns and channels need to be connected.",
  },
];

export default function CrmMarketingAutomation() {
  return (
    <ServiceDetailPage
      sectionLabel="Marketing Automation"
      label="CRM Marketing Automation"
      icon={Contact}
      description="Your CRM shouldn't be a place where leads go to be forgotten. We connect automation directly to your campaigns, so every call, form fill, or reply automatically updates lead status and triggers the next action."
      heroTitle="CRM Marketing Automation in India"
      heroDescription="Your CRM shouldn't be a place where leads go to be forgotten. We connect automation directly to your campaigns, so every call, form fill, or reply automatically updates lead status and triggers the next action."
      capabilitiesHeading="Built for Businesses Ready to Stop Losing Leads in Their CRM"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our CRM Marketing Automation"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us to Automate Their CRM"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn a Messy CRM Into a Working Pipeline"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Automating CRMs Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we build every CRM automation engagement, with the same rigor whether a client is nearby or overseas. We work with startups, SMBs, and enterprises across India, sizing automation to each business's actual sales process and CRM setup. For businesses looking to automate their CRM beyond India, we deliver CRM marketing automation remotely, working across time zones to reach the same standard of reliability regardless of location. Whether you're a startup connecting your first form to a CRM or an enterprise routing leads across multiple sales teams, our approach starts with understanding exactly where leads currently stall."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for a CRM That Actually Works for Your Sales Team?"
      ctaText="Whether you need lead status updates automated, triggered follow-ups built around your sales process, or a full CRM cleanup and re-automation, the right setup depends on how your pipeline actually works today. Let's talk through your CRM and scope what automation would actually involve."
      ctaPrimaryText="Talk to a CRM Automation Specialist"
      ctaSecondaryText="Get Your Free CRM Automation Consultation"
    />
  );
}
