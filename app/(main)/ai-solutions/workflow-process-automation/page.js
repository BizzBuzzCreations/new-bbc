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
  title: "Workflow & Process Automation | BizzBuzz Creations",
  description:
    "AI workflow and process automation in India — connect your tools so approvals, reports, follow-ups, and data entry run without manual chasing, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/ai-solutions/workflow-process-automation",
  },
};

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Startups & Early-Stage Businesses",
    desc: "Startups often run on manual follow-ups and spreadsheets that don't scale with growth. We build lightweight AI automation early, so founders spend time on decisions rather than repetitive coordination.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMBs frequently have processes that grew organically and now cost real hours weekly. We build workflow automation sized for SMB budgets, targeting the specific bottlenecks costing you the most time.",
  },
  {
    icon: Building,
    title: "Enterprises & Large Organizations",
    desc: "Enterprises need automation that integrates cleanly across departments without disrupting existing systems. We design AI-powered automation for enterprise-scale workflows, built to work alongside your current tools.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce & Retail Brands",
    desc: "Ecommerce operations involve constant order, inventory, and follow-up handling that's ripe for automation. We automate order processing and customer follow-ups intelligently, not with rigid, brittle scripts.",
  },
  {
    icon: Handshake,
    title: "Agencies & Operations Partners",
    desc: "Agencies managing repetitive client deliverables need internal efficiency to stay profitable. We build AI-powered automation for agency operations, freeing billable time from admin work.",
  },
  {
    icon: RefreshCw,
    title: "Businesses Replacing Rigid, Broken Automations",
    desc: "Businesses with brittle scripts that break on edge cases need a smarter approach. We rebuild automation using AI-powered decision-making, so it handles real-world variation, not just the happy path.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Tool & System Integration",
    desc: "We connect your CRM, spreadsheets, and other tools so data flows automatically between systems instead of manual re-entry.",
    ctaText: "Know Our Services",
    services: [
      "CRM Integration",
      "Spreadsheet Integration",
      "API-Based Integrations",
      "Third-Party Tool Connectors",
      "Zapier/Make Workflow Setup",
      "Database Synchronization",
      "Cross-Platform Data Sync",
      "Integration Monitoring",
    ],
  },
  {
    number: "02",
    title: "Automated Reports & Approvals",
    desc: "Recurring reports and approval workflows run automatically, freeing your team from chasing signatures and compiling data manually.",
    ctaText: "Know Our Services",
    services: [
      "Automated Report Generation",
      "Approval Workflow Automation",
      "Digital Sign-Off Systems",
      "Scheduled Reporting",
      "Report Distribution Automation",
      "Multi-Level Approval Chains",
      "Report Template Design",
      "Approval Audit Trails",
    ],
  },
  {
    number: "03",
    title: "Automated Follow-Ups",
    desc: "Leads and customers get timely automated follow-ups, so opportunities don't quietly slip through the cracks.",
    ctaText: "Know Our Services",
    services: [
      "Automated Follow-Up Sequences",
      "Lead Nurture Automation",
      "Reminder Automation",
      "Missed-Response Triggers",
      "Follow-Up Timing Optimization",
      "Multi-Channel Follow-Up",
      "Follow-Up Performance Tracking",
      "Escalation Rules",
    ],
  },
  {
    number: "04",
    title: "AI-Powered Workflow Design",
    desc: "We use AI to identify where a workflow can be automated intelligently, not just scripted rigidly step by step.",
    ctaText: "Know Our Services",
    services: [
      "AI Workflow Mapping",
      "Intelligent Decision Rules",
      "Exception Handling Logic",
      "AI-Assisted Routing",
      "Dynamic Workflow Adjustments",
      "Workflow Simulation Testing",
      "Edge Case Handling",
      "Workflow Documentation",
    ],
  },
  {
    number: "05",
    title: "Error Reduction & Consistency",
    desc: "Automated processes cut down the human error and inconsistency that creeps into manual, repetitive work at volume.",
    ctaText: "Know Our Services",
    services: [
      "Data Validation Rules",
      "Duplicate Detection",
      "Error Alerting",
      "Consistency Audits",
      "Exception Reporting",
      "Quality Control Checks",
      "Audit Trail Logging",
      "Process Standardization",
    ],
  },
  {
    number: "06",
    title: "Ongoing Monitoring & Refinement",
    desc: "We monitor automated workflows after launch and refine them as your processes or volume changes over time.",
    ctaText: "Know Our Services",
    services: [
      "Workflow Performance Monitoring",
      "Automation Health Checks",
      "Process Refinement",
      "Volume-Based Scaling",
      "Automation Expansion Planning",
      "Change Management Support",
      "Quarterly Automation Reviews",
      "Continuous Improvement Cycles",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Understanding Your Workflow",
    desc: "We learn where your team spends repetitive hours and where approvals, reports, or follow-ups tend to get stuck.",
  },
  {
    number: "02",
    title: "Building the Right Automation",
    desc: "A custom automation gets built around that exact gap, connecting the tools you already use, not replacing them.",
  },
  {
    number: "03",
    title: "AI Decision Logic Design",
    desc: "We design the AI-powered decision rules that let the automation handle real-world variation, not just a rigid script.",
  },
  {
    number: "04",
    title: "Testing With Your Team",
    desc: "Every automation is tested with the people who'll actually use it before it goes live, so it fits real workflows.",
  },
  {
    number: "05",
    title: "Live Pilot & Feedback",
    desc: "The automation runs on a limited scope first, with close feedback so edge cases get caught before a full rollout.",
  },
  {
    number: "06",
    title: "Launch, Refine & Monitor",
    desc: "We stay involved after launch, refining automation based on real usage instead of leaving it running blind.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Practical, Not Generic",
    desc: "We don't sell generic automation software off a shelf — every workflow is built for what your specific business actually needs.",
  },
  {
    number: "02",
    title: "Built Around Your Real Workflow",
    desc: "We start by understanding how your business actually runs before building any automation.",
  },
  {
    number: "03",
    title: "Connects Your Existing Tools",
    desc: "Automation integrates with your CRM, spreadsheets, and existing tools instead of requiring you to switch systems.",
  },
  {
    number: "04",
    title: "AI-Powered, Not Just Rigid Scripts",
    desc: "We use AI to handle workflow decisions intelligently, not just rigid, brittle step-by-step scripts.",
  },
  {
    number: "05",
    title: "Tested With Your Team",
    desc: "Every automation is tested with your team before launch, not handed over as an untested demo.",
  },
  {
    number: "06",
    title: "Refined After Launch",
    desc: "We don't disappear after handoff — every system is refined based on real usage, not left running blind.",
  },
];

const FAQS = [
  {
    question: "What kinds of processes can you automate?",
    answer:
      "Approvals, reports, follow-ups, and data entry between systems are common candidates — we assess your specific workflow to identify the best opportunities.",
  },
  {
    question: "Will automation replace my team's jobs?",
    answer:
      "No, automation removes repetitive manual tasks so your team can focus on decisions and work that genuinely needs judgment.",
  },
  {
    question: "Can automation integrate with the tools we already use?",
    answer:
      "Yes, we connect automation to your existing CRM, spreadsheets, and other tools wherever integration is technically possible.",
  },
  {
    question: "How is AI-powered automation different from basic scripts?",
    answer:
      "AI-powered automation can make more nuanced decisions within a workflow, rather than following only rigid, pre-defined rules that break on edge cases.",
  },
  {
    question: "How long does it take to build a workflow automation?",
    answer:
      "Simple automations can be live within a couple of weeks; more complex, multi-system workflows take longer, depending on integrations needed.",
  },
];

export default function WorkflowProcessAutomation() {
  return (
    <ServiceDetailPage
      sectionLabel="AI Solutions"
      label="Workflow & Process Automation"
      icon={Workflow}
      description="Our AI workflow automation connects your tools together, so approvals, reports, follow-ups, and data entry run without anyone chasing them manually."
      heroTitle="Workflow & Process Automation in India"
      heroDescription="Our AI workflow automation connects your tools together, so approvals, reports, follow-ups, and data entry run without anyone chasing them manually."
      capabilitiesHeading="Built for Businesses Ready to Stop Chasing Manual Work"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our Workflow Automation"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us to Automate Their Workflows"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Manual Chasing Into Automated Workflows"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Automating Workflows Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we build every workflow automation project, with the same care whether a client is nearby or overseas. We work with startups, SMBs, and enterprises across India, automating workflows sized to each business's actual volume and existing tools. For businesses looking to automate workflows beyond India, we deliver this work remotely, working across time zones to deliver the same reliability standard regardless of location. Whether you're a startup automating your first follow-up sequence or an enterprise automating cross-department approvals, our approach starts with mapping where your team actually loses time today."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready to Stop Chasing Approvals and Follow-Ups?"
      ctaText="Whether you need a single repetitive process automated, a full AI-powered workflow rebuilt around intelligent decisions, or a replacement for brittle automation that keeps breaking, the right approach depends on how your process actually runs today. Let's talk through your workflow and scope what AI-powered automation would actually involve."
      ctaPrimaryText="Talk to an Automation Specialist"
      ctaSecondaryText="Get Your Free Automation Consultation"
    />
  );
}
