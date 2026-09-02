import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Workflow,
  ClipboardList,
  Building2,
  TrendingUp,
  Bot,
  Puzzle,
  Rocket,
} from "lucide-react";

export const metadata = {
  title: "Business Process Automation Services | BizzBuzz Creations",
  description:
    "BizzBuzz Creations delivers business process automation services that save time for companies across India and worldwide.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/bpo-services/business-process-automation-services",
  },
};

const CAPABILITIES = [
  {
    icon: ClipboardList,
    title: "Businesses Drowning in Repetitive Manual Tasks",
    desc: "Teams spending hours on repetitive data entry, approvals, or reporting have less time for work that actually needs human judgment. We provide business process automation services that eliminate this repetitive burden entirely.",
  },
  {
    icon: Building2,
    title: "Companies Needing Back-Office Process Automation",
    desc: "Back-office functions like invoicing, HR processing, and compliance documentation often run on outdated, manual workflows. We provide back office automation services that modernize these processes without disrupting daily operations.",
  },
  {
    icon: TrendingUp,
    title: "Businesses Scaling Faster Than Their Manual Processes Can Handle",
    desc: "Manual processes that worked at a smaller scale often break down as transaction volume grows. We provide workflow automation services built to scale alongside your business, not processes that become a bottleneck.",
  },
  {
    icon: Bot,
    title: "Companies Needing RPA for Data-Heavy Workflows",
    desc: "Data-heavy tasks like report generation and data transfer between systems are ideal for automation but often left manual. We work as an RPA services company handling exactly this kind of repetitive, rules-based work.",
  },
  {
    icon: Puzzle,
    title: "Businesses Needing Workflow Automation Across Multiple Tools",
    desc: "Teams using multiple disconnected tools often waste time manually transferring information between systems. We provide BPA services company support that connects your tools into automated, seamless workflows.",
  },
  {
    icon: Rocket,
    title: "Startups Needing Lean Operations Without Extra Headcount",
    desc: "Startups need to operate efficiently without hiring purely to handle repetitive administrative work. We provide process automation consulting that lets lean teams handle more without proportionally more staff.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Process Automation Strategy & Audits",
    desc: "A clear picture of which processes are actually worth automating, and the real return each would deliver.",
    ctaText: "Know Our Services",
    services: [
      "Process Automation Audit",
      "Manual Process Mapping",
      "Automation Opportunity Identification",
      "ROI Analysis for Automation",
      "Automation Strategy Development",
      "Tool Selection Consulting",
      "Process Prioritization",
      "Automation Roadmap Planning",
    ],
  },
  {
    number: "02",
    title: "Workflow Automation Implementation",
    desc: "Workflows automated across the tools and steps your team actually uses every day.",
    ctaText: "Know Our Services",
    services: [
      "Workflow Automation Setup",
      "Cross-Tool Workflow Automation",
      "Approval Workflow Automation",
      "Notification & Alert Automation",
      "Document Workflow Automation",
      "Task Assignment Automation",
      "Workflow Testing & QA",
      "Workflow Documentation",
    ],
  },
  {
    number: "03",
    title: "Robotic Process Automation (RPA)",
    desc: "Bots handling repetitive, rules-based tasks reliably, freeing your team from work that doesn't need human judgment.",
    ctaText: "Know Our Services",
    services: [
      "RPA Implementation",
      "Bot Development for Repetitive Tasks",
      "Data Entry Automation",
      "Report Generation Automation",
      "RPA Bot Testing",
      "RPA Maintenance & Support",
      "RPA Scalability Planning",
      "RPA Performance Monitoring",
    ],
  },
  {
    number: "04",
    title: "Back-Office Process Automation",
    desc: "Core back-office functions automated so your team spends less time on paperwork and more on real work.",
    ctaText: "Know Our Services",
    services: [
      "Back-Office Automation",
      "Invoice Processing Automation",
      "HR Process Automation",
      "Payroll Process Automation",
      "Inventory Process Automation",
      "Compliance Process Automation",
      "Reporting Automation",
      "Back-Office Workflow Redesign",
    ],
  },
  {
    number: "05",
    title: "Tool & Software Integration",
    desc: "Your existing tools connected properly, so information flows automatically instead of being manually re-entered.",
    ctaText: "Know Our Services",
    services: [
      "Software Integration Setup",
      "API-Based Automation",
      "CRM Automation Integration",
      "ERP Automation Integration",
      "Third-Party Tool Connections",
      "Data Sync Automation",
      "Integration Testing",
      "Integration Documentation",
    ],
  },
  {
    number: "06",
    title: "Automation Monitoring & Optimization",
    desc: "Ongoing monitoring that catches issues early and keeps improving automation performance over time.",
    ctaText: "Know Our Services",
    services: [
      "Automation Performance Monitoring",
      "Error & Exception Handling",
      "Automation ROI Tracking",
      "Monthly Automation Reports",
      "Continuous Process Improvement",
      "Automation Scaling Support",
      "Bottleneck Identification",
      "Ongoing Optimization",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Process & Workflow Discovery",
    desc: "We start by understanding your current manual processes and where your team is spending the most repetitive, time-consuming effort.",
  },
  {
    number: "02",
    title: "Automation Opportunity Audit",
    desc: "We assess which processes offer the strongest return on automation investment, prioritizing based on time saved and complexity.",
  },
  {
    number: "03",
    title: "Automation Strategy & Tool Selection",
    desc: "We build a plan for automating priority processes, selecting the right tools and approach, whether RPA, workflow automation, or integration.",
  },
  {
    number: "04",
    title: "Implementation & Integration",
    desc: "We implement the automation and integrate it with your existing tools, testing thoroughly before full deployment.",
  },
  {
    number: "05",
    title: "Testing & Quality Assurance",
    desc: "We test automated workflows against real scenarios to catch errors and edge cases before they affect daily operations.",
  },
  {
    number: "06",
    title: "Monitoring & Ongoing Optimization",
    desc: "We monitor automation performance and continue refining it as your processes and business needs evolve.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Automation Built Around Real Bottlenecks, Not Generic Templates",
    desc: "We identify which specific processes are actually costing your team the most time, then automate those first, rather than applying a generic automation package regardless of where your real bottlenecks are.",
  },
  {
    number: "02",
    title: "Workflow Design That Actually Fits How Your Team Works",
    desc: "We design automated workflows around your team's actual process, not a rigid template that forces your team to adapt to how the automation happens to work.",
  },
  {
    number: "03",
    title: "RPA Implementation Without Requiring an In-House Dev Team",
    desc: "We handle bot development, testing, and maintenance directly, so you get the benefit of RPA without needing to build or maintain technical capability internally.",
  },
  {
    number: "04",
    title: "Integration Across the Tools You Already Use",
    desc: "We connect automation to your existing software stack rather than requiring you to switch to entirely new tools just to enable automation.",
  },
  {
    number: "05",
    title: "Transparent ROI Tracking on Time and Cost Actually Saved",
    desc: "We track and report on the actual time and cost savings automation delivers, giving you clear evidence of return rather than assuming automation is inherently valuable without proof.",
  },
  {
    number: "06",
    title: "Ongoing Optimization as Your Processes Continue to Evolve",
    desc: "We continue refining automated workflows as your business changes, rather than treating automation as a one-time setup that never gets revisited as needs shift.",
  },
];

const FAQS = [
  {
    question: "How much does business process automation cost in India?",
    answer:
      "Cost depends on process complexity and the number of workflows being automated. We scope pricing after understanding your specific processes and tools, rather than offering a flat rate upfront for something this variable.",
  },
  {
    question: "What's the difference between RPA and general workflow automation?",
    answer:
      "RPA typically refers to software bots handling specific, rules-based tasks like data entry, while workflow automation covers broader process orchestration across multiple steps and tools. Many automation projects combine both approaches depending on the process.",
  },
  {
    question: "How do you decide which processes to automate first?",
    answer:
      "We prioritize based on time currently spent, error rate, and how repetitive and rules-based the process is, since these factors typically indicate the strongest return on automation investment.",
  },
  {
    question: "Can automation work with the tools and software we already use?",
    answer:
      "Yes, we integrate automation with your existing tools wherever possible, connecting them through APIs or other integration methods rather than requiring you to switch to entirely new software.",
  },
  {
    question: "How long does it take to implement process automation?",
    answer:
      "Timeline depends on process complexity, a single workflow automation can take a few weeks, while broader back-office automation across multiple processes typically takes longer to implement and test thoroughly.",
  },
  {
    question: "Will automation require our team to learn new complex systems?",
    answer:
      "Generally no, well-designed automation should reduce complexity for your team, not add to it. We design workflows to work within or alongside tools your team already knows, minimizing the learning curve.",
  },
];

export default function BusinessProcessAutomationServices() {
  return (
    <ServiceDetailPage
      sectionLabel="BPO Services"
      label="Business Process Automation Services"
      icon={Workflow}
      description="Business process automation built to eliminate repetitive manual work, not just digitize it, engineered to actually save your team time."
      heroTitle="Get Hours Back With Automation, Not More Manual Work"
      heroDescription="Business process automation built to eliminate repetitive manual work, not just digitize it, engineered to actually save your team time."
      heroCtaText="Get a Free Process Automation Audit"
      heroImage="/Business Process Automation Services 1.png"
      capabilitiesHeading="Built for Businesses Drowning in Repetitive Manual Work"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything Between a Manual Process and an Automated One"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us With Process Automation"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Manual Work Into Automated Workflows"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Automating Processes Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every automation project, with the same attention to real ROI whether a client is nearby or across the world. We provide business process automation services for businesses across India, built around each business's specific bottlenecks and tools. For companies looking for an RPA services company beyond India, we support clients worldwide remotely, delivering the same process automation consulting standard of work regardless of time zone. Whether you're a growing business in Prayagraj or a company anywhere else scaling back-office operations, our approach starts with the same question: where is your team actually losing the most time to manual work."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready to Get Hours Back From Manual Work?"
      ctaText="Whether your team is drowning in repetitive data entry, your back-office processes haven't scaled with your business, or you simply haven't started automating yet, manual work alone was never going to keep pace with growth. Let's audit your current processes and scope what automation would actually involve."
      ctaPrimaryText="Talk to a Process Automation Specialist"
      ctaSecondaryText="Get Your Free Process Automation Audit"
    />
  );
}
