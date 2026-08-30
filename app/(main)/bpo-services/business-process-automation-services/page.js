import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Workflow,
  Rocket,
  Building2,
  Building,
  ShoppingCart,
  Handshake,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "Business Process Automation Services | BizzBuzz Creations",
  description:
    "Business process automation services in India — map your workflow, automate the repetitive middle, and free your team to focus on decisions, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/bpo-services/business-process-automation-services",
  },
};

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Startups & Early-Stage Businesses",
    desc: "Startups often run on manual spreadsheets and repeated copy-paste work in the early days. We build lightweight automation that removes the busywork early, so founders and small teams spend time on decisions, not data entry.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMBs frequently have processes that grew organically and now waste real hours every week. We build business process automation sized for SMB budgets, targeting the specific repetitive tasks costing your team the most time.",
  },
  {
    icon: Building,
    title: "Enterprises & Large Organizations",
    desc: "Enterprises need automation that integrates cleanly with existing systems across departments without disrupting operations. We design automation for enterprise-scale workflows, built to work alongside your current tools, not replace them wholesale.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce & Retail Brands",
    desc: "Ecommerce operations involve constant order, inventory, and customer data handling that's ripe for automation. We automate order processing, inventory sync, and customer follow-ups so your team isn't manually managing every transaction.",
  },
  {
    icon: Handshake,
    title: "Agencies & Operations Partners",
    desc: "Agencies managing repetitive client deliverables need internal efficiency to stay profitable. We build automation for agency operations — reporting, onboarding, and internal workflows — so billable time isn't lost to admin work.",
  },
  {
    icon: RefreshCw,
    title: "Businesses Replacing Manual Legacy Processes",
    desc: "Businesses running critical processes manually or through outdated spreadsheets need a careful, planned automation rollout. We map existing manual processes first, then automate incrementally so nothing breaks during the transition.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Workflow Mapping & Analysis",
    desc: "We start by mapping your actual workflow end-to-end, so automation targets the real bottlenecks instead of guesswork.",
    ctaText: "Know Our Services",
    services: [
      "Workflow Mapping",
      "Process Documentation",
      "Bottleneck Identification",
      "Time & Motion Analysis",
      "Stakeholder Interviews",
      "Current-State Assessment",
      "Automation Opportunity Scoring",
      "Process Prioritization",
    ],
  },
  {
    number: "02",
    title: "Repetitive Task Automation",
    desc: "Data copying, status updates, and routine approvals get automated, freeing your in-house team to focus on decisions, not repetitive clicks.",
    ctaText: "Know Our Services",
    services: [
      "Data Entry Automation",
      "Status Update Automation",
      "Approval Workflow Automation",
      "Report Generation Automation",
      "Email & Notification Automation",
      "File & Document Automation",
      "Scheduling Automation",
      "Task Handoff Automation",
    ],
  },
  {
    number: "03",
    title: "Custom Automation Tools",
    desc: "Where off-the-shelf automation tools don't fit, we build custom scripts and workflows tailored to how your business actually operates.",
    ctaText: "Know Our Services",
    services: [
      "Custom Script Development",
      "Internal Tool Development",
      "Workflow Builder Configuration",
      "Business Rule Engines",
      "Custom Dashboards",
      "No-Code/Low-Code Automation",
      "Automation Testing",
      "Tool Documentation",
    ],
  },
  {
    number: "04",
    title: "Third-Party System Integration",
    desc: "We connect your CRM, spreadsheets, and other tools so data flows automatically between systems instead of being re-entered manually.",
    ctaText: "Know Our Services",
    services: [
      "CRM Integration",
      "Spreadsheet Integration",
      "API-Based Integration",
      "Third-Party Tool Connectors",
      "Zapier/Make Workflow Setup",
      "Database Synchronization",
      "Cross-Platform Data Sync",
      "Integration Monitoring",
    ],
  },
  {
    number: "05",
    title: "Error Reduction & Accuracy",
    desc: "Automated processes cut down the human error that creeps into manual, repetitive work, especially at high volume.",
    ctaText: "Know Our Services",
    services: [
      "Data Validation Rules",
      "Duplicate Detection",
      "Error Alerting",
      "Exception Handling",
      "Accuracy Audits",
      "Reconciliation Automation",
      "Quality Control Checks",
      "Audit Trail Logging",
    ],
  },
  {
    number: "06",
    title: "Ongoing Process Optimization",
    desc: "As your business changes, we refine and extend the automation, keeping it aligned with how your workflow actually evolves.",
    ctaText: "Know Our Services",
    services: [
      "Performance Monitoring",
      "Process Refinement",
      "Automation Expansion",
      "Time Savings Tracking",
      "Workflow Reviews",
      "Change Management Support",
      "Automation Roadmapping",
      "Continuous Improvement Reviews",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Discovery & Workflow Audit",
    desc: "We document how the process actually runs today — every handoff, tool, and manual step — before proposing any changes.",
  },
  {
    number: "02",
    title: "Identify Automation Opportunities",
    desc: "We flag exactly which steps are safe and valuable to automate, and which still need human judgment.",
  },
  {
    number: "03",
    title: "Automation Design & Planning",
    desc: "We design the automation approach and tools needed, planning how it fits into your existing systems before building anything.",
  },
  {
    number: "04",
    title: "Build & Integrate Automation",
    desc: "We build and connect the automation to your existing tools, testing it against real scenarios before rollout.",
  },
  {
    number: "05",
    title: "Team Training & Rollout",
    desc: "We train your team on the new automated workflow, so adoption is smooth and nothing falls back into manual habits.",
  },
  {
    number: "06",
    title: "Monitor & Refine",
    desc: "We track performance after launch and adjust the automation as your process or volume changes over time.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Process-First Approach",
    desc: "We understand your workflow before recommending any tool, so automation solves the actual bottleneck, not a symptom of it.",
  },
  {
    number: "02",
    title: "No One-Size-Fits-All Tools",
    desc: "We pick or build the right automation approach for your specific process instead of forcing a generic platform on everything.",
  },
  {
    number: "03",
    title: "Integrates With Your Stack",
    desc: "Automation connects with the CRM, spreadsheets, and tools you already use, instead of requiring you to switch systems.",
  },
  {
    number: "04",
    title: "Faster Turnaround",
    desc: "Automated steps complete in a fraction of the time manual processing takes, especially at scale.",
  },
  {
    number: "05",
    title: "Measurable Time Savings",
    desc: "We track hours saved and errors reduced, so the value of automation is visible, not just assumed.",
  },
  {
    number: "06",
    title: "Ongoing Support",
    desc: "We stay on to refine and extend automation as your business processes evolve, not just deliver and disappear.",
  },
];

const FAQS = [
  {
    question: "What kinds of processes can you automate?",
    answer:
      "Repetitive, rule-based tasks are the best fit — data entry, status updates, report generation, approvals, and data transfers between systems.",
  },
  {
    question: "Will automation replace my staff?",
    answer:
      "No — automation removes the repetitive, low-value parts of a process so your team can focus on decisions and work that actually needs judgment.",
  },
  {
    question: "Can automation integrate with our existing software?",
    answer:
      "Yes, we connect automation to your existing CRM, spreadsheets, and other tools wherever integration is technically possible.",
  },
  {
    question: "How much does business process automation cost?",
    answer:
      "It depends on the complexity of the process and the tools involved — we scope every project and provide a clear, tailored quote.",
  },
  {
    question: "How long does it take to implement automation?",
    answer:
      "Simple automations can be live within a couple of weeks; more complex, multi-system workflows take longer. We'll give you a realistic timeline upfront.",
  },
];

export default function BusinessProcessAutomationServices() {
  return (
    <ServiceDetailPage
      sectionLabel="BPO Services"
      label="Business Process Automation Services"
      icon={Workflow}
      description="We map your workflow first, then automate the boring middle, freeing your in-house team to focus on decisions, not data-copying."
      heroTitle="Business Process Automation Services in India"
      heroDescription="We map your workflow first, then automate the boring middle, freeing your in-house team to focus on decisions, not data-copying."
      capabilitiesHeading="Built for Businesses Ready to Stop Doing Repetitive Work Manually"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our Business Process Automation"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us to Automate Their Operations"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Manual Workflows Into Automated Processes"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Automating Operations Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we build every automation engagement, with the same rigor whether a client is nearby or overseas. We work with startups, SMBs, and enterprises across India, automating workflows sized to each business's actual volume and tools. For businesses looking to automate operations beyond India, we deliver business process automation remotely, working across time zones to reach the same standard of reliability regardless of location. Whether you're a startup removing your first spreadsheet bottleneck or an enterprise automating a cross-department process, our approach starts with mapping what actually happens today before changing anything."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready to Stop Losing Hours to Manual Work?"
      ctaText="Whether you need a single repetitive task automated, a full workflow rebuilt around automation, or integration between systems that currently don't talk to each other, the right approach depends on how your process actually runs today. Let's talk through your workflow and scope what automation would actually involve."
      ctaPrimaryText="Talk to an Automation Specialist"
      ctaSecondaryText="Get Your Free Automation Consultation"
    />
  );
}
