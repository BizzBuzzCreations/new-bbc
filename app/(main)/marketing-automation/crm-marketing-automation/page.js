import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Contact,
  Database,
  Zap,
  UserCheck,
  RefreshCw,
  Share2,
  BarChart3,
} from "lucide-react";

export const metadata = {
  title: "CRM Marketing Automation Services | BizzBuzz Creations",
  description:
    "BizzBuzz Creations provides CRM marketing automation that connects your data and campaigns across India and worldwide.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/marketing-automation/crm-marketing-automation",
  },
};

const CAPABILITIES = [
  {
    icon: Database,
    title: "Businesses With a CRM That's Underused for Marketing",
    desc: "Many CRMs function as little more than an expensive contact database, with genuine marketing capability sitting unused. We provide crm marketing automation services that turn a passive CRM into an active growth tool.",
  },
  {
    icon: Zap,
    title: "Companies Needing Campaigns Triggered by Customer Behavior",
    desc: "Manually deciding when to reach out to each customer doesn't scale as your customer base grows. We build automated campaign triggers based on real customer behavior, not manual guesswork.",
  },
  {
    icon: UserCheck,
    title: "Sales Teams Needing Automated Follow-Up From CRM Data",
    desc: "Sales reps manually tracking who to follow up with and when inevitably lets some prospects slip through. We provide sales automation within crm that handles this tracking and reminders automatically.",
  },
  {
    icon: RefreshCw,
    title: "Businesses Migrating to a New CRM Needing Automation Setup",
    desc: "Migrating to a new CRM is the ideal time to build automation properly, rather than recreating old, inefficient manual processes. We work as a crm automation agency supporting these transitions.",
  },
  {
    icon: Share2,
    title: "Companies Needing CRM and Marketing Tools Connected Properly",
    desc: "A CRM disconnected from your email and marketing tools means data lives in silos, undermining automation potential. We provide crm integration and automation services that connect these systems properly.",
  },
  {
    icon: BarChart3,
    title: "Businesses Needing Automated Reporting From CRM Data",
    desc: "Manually pulling reports from CRM data wastes time that could go toward actually acting on the insights. We build automated CRM reporting that surfaces what matters without manual effort.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "CRM Automation Strategy & Audit",
    desc: "A clear picture of what your CRM could actually be doing, and what's currently holding it back.",
    ctaText: "Know Our Services",
    services: [
      "CRM Automation Audit",
      "Current Workflow Assessment",
      "Automation Opportunity Mapping",
      "CRM Data Quality Review",
      "Automation Strategy Development",
      "Tool Compatibility Assessment",
      "CRM Automation Roadmap",
      "Stakeholder Requirements Gathering",
    ],
  },
  {
    number: "02",
    title: "CRM Workflow & Trigger Setup",
    desc: "Workflows and triggers built around your actual sales and customer process, not generic default settings.",
    ctaText: "Know Our Services",
    services: [
      "CRM Workflow Automation",
      "Trigger-Based Automation Setup",
      "Pipeline Stage Automation",
      "Task & Reminder Automation",
      "Deal Stage Trigger Design",
      "Automated Data Entry Rules",
      "Custom Field Automation",
      "Workflow Testing & QA",
    ],
  },
  {
    number: "03",
    title: "CRM-to-Marketing Tool Integration",
    desc: "Your CRM connected properly to the marketing and communication tools you already use.",
    ctaText: "Know Our Services",
    services: [
      "CRM & Email Platform Integration",
      "CRM & Ad Platform Sync",
      "CRM & WhatsApp Integration",
      "Third-Party Tool Connections",
      "API-Based Integration Setup",
      "Data Sync Automation",
      "Integration Testing",
      "Integration Documentation",
    ],
  },
  {
    number: "04",
    title: "Automated Campaign Triggers",
    desc: "Campaigns that launch based on genuine customer behavior and lifecycle stage, not a manual calendar.",
    ctaText: "Know Our Services",
    services: [
      "Behavior-Triggered Campaigns",
      "Lifecycle Stage Campaigns",
      "Automated Re-Engagement Triggers",
      "Purchase-Triggered Campaigns",
      "Renewal & Upsell Triggers",
      "Milestone-Based Campaign Automation",
      "Abandoned Action Triggers",
      "Trigger Performance Monitoring",
    ],
  },
  {
    number: "05",
    title: "Sales Automation Within CRM",
    desc: "Sales workflow automation that reduces manual tracking and ensures nothing slips through the cracks.",
    ctaText: "Know Our Services",
    services: [
      "Sales Task Automation",
      "Automated Lead Assignment",
      "Follow-Up Reminder Automation",
      "Deal Progress Automation",
      "Sales Notification Automation",
      "Quote & Proposal Automation",
      "Sales Activity Logging Automation",
      "Sales Automation Reporting",
    ],
  },
  {
    number: "06",
    title: "CRM Reporting & Optimization",
    desc: "Automated reporting that surfaces real insight, so decisions are based on data, not assumption.",
    ctaText: "Know Our Services",
    services: [
      "CRM Dashboard Setup",
      "Automated Reporting",
      "Campaign Performance in CRM",
      "Data Accuracy Monitoring",
      "Automation Performance Review",
      "Monthly CRM Reports",
      "Ongoing Workflow Refinement",
      "CRM ROI Analysis",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "CRM & Process Discovery",
    desc: "We start by understanding your current CRM setup, sales process, and how customer data currently flows, or doesn't, through your systems.",
  },
  {
    number: "02",
    title: "Automation Opportunity Audit",
    desc: "We identify which specific workflows and triggers would deliver the most value, based on your actual sales and marketing process.",
  },
  {
    number: "03",
    title: "Workflow & Trigger Design",
    desc: "We design the specific automation workflows, triggers, and campaigns tailored to your business.",
  },
  {
    number: "04",
    title: "Integration & Implementation",
    desc: "We implement the automation and integrate your CRM with relevant marketing and communication tools.",
  },
  {
    number: "05",
    title: "Testing & Quality Assurance",
    desc: "We test workflows and triggers against real scenarios, catching issues before they affect actual customer interactions.",
  },
  {
    number: "06",
    title: "Ongoing Monitoring & Optimization",
    desc: "We monitor automation performance and continue refining workflows as your business and customer data evolve.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "CRM Automation Built Around Your Actual Sales and Marketing Process",
    desc: "We design automation around how your business genuinely operates, rather than forcing your process to fit generic default CRM workflows that don't reflect your reality.",
  },
  {
    number: "02",
    title: "Integration That Connects Your CRM to the Tools You Already Use",
    desc: "We connect your CRM to your existing email, WhatsApp, and marketing tools, rather than requiring you to abandon systems that already work for you.",
  },
  {
    number: "03",
    title: "Triggers Based on Real Customer Behavior, Not Generic Timers",
    desc: "We build campaign triggers around genuine customer actions and lifecycle stages, rather than arbitrary time-based sends that ignore what a customer is actually doing.",
  },
  {
    number: "04",
    title: "Sales Automation That Actually Reduces Manual Follow-Up Work",
    desc: "We automate the tracking and reminder tasks that currently consume sales team time, freeing them to focus on actual selling rather than administrative follow-up.",
  },
  {
    number: "05",
    title: "Clean Data Practices That Keep Automation Reliable Long-Term",
    desc: "We address data quality issues as part of setup, since automation built on messy data produces unreliable results regardless of how well the workflows themselves are designed.",
  },
  {
    number: "06",
    title: "Transparent Reporting on What Automation Is Actually Delivering",
    desc: "You see clear reporting on what your CRM automation is generating, giving you real evidence of value rather than assuming automation is working without verification.",
  },
];

const FAQS = [
  {
    question: "How much does CRM marketing automation cost in India?",
    answer:
      "Cost depends on scope, a few specific workflow automations cost less than a comprehensive CRM automation overhaul with multiple tool integrations. We scope pricing after understanding your specific CRM and requirements, rather than offering a flat rate upfront.",
  },
  {
    question: "Can you work with our existing CRM, or do we need to switch?",
    answer:
      "In most cases, we work within your existing CRM, building automation around what you already have rather than requiring a platform switch, unless your current CRM genuinely can't support what you need.",
  },
  {
    question: "What's the difference between CRM automation and email automation?",
    answer:
      "CRM automation covers workflows and triggers within your customer relationship management system broadly, including sales tasks and data automation, while email automation specifically focuses on automated email sequences. We often implement both together as one connected system.",
  },
  {
    question: "Can you connect our CRM to WhatsApp and other marketing tools?",
    answer:
      "Yes, integrating your CRM with WhatsApp, email platforms, and other marketing tools is a core part of our service, ensuring customer data and automation work consistently across every channel.",
  },
  {
    question: "Will CRM automation work with our current sales process?",
    answer:
      "Yes, we design automation around your actual sales process rather than forcing a generic workflow, ensuring the automation supports how your team genuinely works rather than disrupting it.",
  },
  {
    question: "How long does it take to set up CRM automation?",
    answer:
      "Timeline depends on scope, a few specific workflows can be set up within a couple of weeks, while a comprehensive automation overhaul with multiple integrations typically takes longer.",
  },
];

export default function CrmMarketingAutomation() {
  return (
    <ServiceDetailPage
      sectionLabel="Marketing Automation"
      label="CRM Marketing Automation"
      icon={Contact}
      description="CRM marketing automation built to trigger campaigns from real customer data, not a CRM that just sits there storing contacts."
      heroTitle="Get a CRM That Markets for You, Not Just Stores Data"
      heroDescription="CRM marketing automation built to trigger campaigns from real customer data, not a CRM that just sits there storing contacts."
      heroCtaText="Get a Free CRM Automation Audit"
      capabilitiesHeading="Built for Businesses Whose CRM Is Just a Contact List"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything Between Customer Data and an Automated Campaign"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us With Their CRM Automation"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Your CRM Into a Marketing Engine"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Automating CRMs Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every CRM automation project, with the same attention to data quality whether a client is nearby or across the world. We provide crm marketing automation services for businesses across India, built around each business's specific CRM and sales process. For businesses looking for a crm automation agency beyond India, we support clients worldwide remotely, delivering the same crm integration and automation services standard of work regardless of time zone. Whether you're a business in Prayagraj with an underused CRM or a company anywhere else migrating to a new platform, our approach starts with the same question: what should your CRM actually be doing that it currently isn't."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for a CRM That Actually Markets for You?"
      ctaText="Whether your CRM is just an expensive contact list, your sales team is manually tracking follow-ups, or your marketing tools aren't connected to your customer data, an underused CRM was never going to drive real growth. Let's audit your current setup and scope what real CRM automation would actually involve."
      ctaPrimaryText="Talk to a CRM Automation Specialist"
      ctaSecondaryText="Get Your Free CRM Automation Audit"
    />
  );
}
