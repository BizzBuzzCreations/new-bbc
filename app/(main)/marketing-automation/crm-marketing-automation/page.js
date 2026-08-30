import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Contact,
  Plug,
  Bell,
  Users,
  RefreshCw,
  BarChart3,
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
    icon: Plug,
    title: "CRM Integration & Setup",
    desc: "We connect your CRM directly to your campaigns and forms, so lead data flows in automatically instead of being entered manually.",
  },
  {
    icon: Bell,
    title: "Automatic Lead Status Updates",
    desc: "Every call, form fill, or reply automatically updates lead status in your CRM, so your pipeline reflects reality in real time.",
  },
  {
    icon: RefreshCw,
    title: "Triggered Follow-Up Actions",
    desc: "A status change can automatically trigger the next action — an email, a task for your sales rep, or a WhatsApp message — without manual intervention.",
  },
  {
    icon: Users,
    title: "Lead Scoring & Routing",
    desc: "Leads get scored and routed to the right salesperson automatically, based on rules built around how your sales process actually works.",
  },
  {
    icon: BarChart3,
    title: "Pipeline Reporting & Visibility",
    desc: "We set up reporting so you can see pipeline health and campaign performance directly from your CRM, not a separate spreadsheet.",
  },
  {
    icon: Contact,
    title: "Duplicate & Data Cleanup",
    desc: "We help clean up and prevent duplicate records, so your CRM stays a reliable source of truth, not a cluttered mess.",
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
    title: "Integration & Automation Build",
    desc: "We connect your CRM to your campaigns and build the automation rules for status updates and triggered actions.",
  },
  {
    number: "03",
    title: "Testing & Team Handoff",
    desc: "We test the automation with your sales team before launch, so it fits how they actually work day-to-day.",
  },
  {
    number: "04",
    title: "Monthly Review & Optimization",
    desc: "Every workflow is reviewed and improved monthly, not left running on autopilot and forgotten after setup.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "001",
    title: "CRM-Connected, Not Manual",
    desc: "Every call, form fill, or reply automatically updates lead status and triggers the next action — no manual data entry required.",
  },
  {
    number: "002",
    title: "One Connected System",
    desc: "We treat your CRM as the hub connecting email, WhatsApp, and lead nurturing, not a separate system running blind.",
  },
  {
    number: "003",
    title: "We Build the Workflow Ourselves",
    desc: "We don't sell you a tool subscription and walk away — we build the automation and connect it properly ourselves.",
  },
  {
    number: "004",
    title: "Sales Team Wakes Up to Warm Leads",
    desc: "Automation is built so your sales team wakes up to warm, updated leads, not cold silence and manual data entry.",
  },
  {
    number: "005",
    title: "Reviewed Monthly",
    desc: "Every workflow is reviewed and improved monthly, not left running on autopilot and forgotten.",
  },
  {
    number: "006",
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
      capabilitiesHeading="What's Included in Our CRM Marketing Automation"
      capabilities={CAPABILITIES}
      roadmapCarouselHeading="Our CRM Automation Process"
      roadmapCarouselSteps={ROADMAP_STEPS}
      differentiatorsHeading="What Makes Our CRM Automation Different"
      differentiators={DIFFERENTIATORS}
      faqs={FAQS}
      whyChooseUsHeading="CRM Marketing Automation Company"
      whyChooseUsText="BizzBuzz Creations connects CRM automation for businesses across India, so every lead interaction updates your pipeline and triggers the next action automatically. We're a marketing automation agency based in Prayagraj, helping businesses locally across Allahabad and Uttar Pradesh, as well as across India."
    />
  );
}
