import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Workflow,
  ArrowRightLeft,
  Sparkles,
  Puzzle,
  Share2,
  Handshake,
  Code2,
} from "lucide-react";

export const metadata = {
  title: "AI Workflow Automation Services | BizzBuzz Creations",
  description:
    "BizzBuzz Creations delivers AI workflow automation using tools like n8n and Zapier for businesses across India and worldwide.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/ai-solutions/workflow-process-automation",
  },
};

const CAPABILITIES = [
  {
    icon: ArrowRightLeft,
    title: "Businesses Manually Moving Data Between Different Tools",
    desc: "Manually copying data between disconnected tools wastes real time and introduces errors. We provide ai workflow automation services that connect your tools so data flows automatically instead.",
  },
  {
    icon: Sparkles,
    title: "Teams Needing AI-Powered Decision Steps in Their Workflows",
    desc: "Simple if-this-then-that automation often can't handle decisions that require genuine judgment or interpretation. We build ai process automation agency workflows with AI-powered decision steps built in.",
  },
  {
    icon: Puzzle,
    title: "Companies Needing n8n or Zapier Automation Built Properly",
    desc: "Many businesses attempt automation themselves but hit limits or build fragile workflows that break easily. We work as an n8n automation agency and zapier automation services provider building automation that actually holds up.",
  },
  {
    icon: Share2,
    title: "Businesses Needing Cross-Platform Workflow Connections",
    desc: "Tools that don't have a native integration require custom connection work most teams can't build themselves. We provide business workflow automation company support for exactly these cross-platform connection challenges.",
  },
  {
    icon: Handshake,
    title: "Agencies Needing Automation Built for Client Delivery",
    desc: "Agencies delivering automation as part of client work need reliable build capacity beyond their own internal team. We support agencies needing ai powered workflow automation company capacity for client projects.",
  },
  {
    icon: Code2,
    title: "Companies Needing Custom Automation Beyond No-Code Tool Limits",
    desc: "Some automation needs genuinely exceed what no-code tools like Zapier or n8n can handle out of the box. We provide custom automation development when no-code platforms hit their ceiling.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Workflow Automation Strategy & Audit",
    desc: "A clear picture of which manual processes are actually worth automating first.",
    ctaText: "Know Our Services",
    services: [
      "Workflow Automation Audit",
      "Manual Process Mapping",
      "Automation Opportunity Identification",
      "Tool Stack Assessment",
      "Automation Strategy Development",
      "ROI Analysis for Automation",
      "Automation Roadmap Planning",
      "Platform Selection Guidance",
    ],
  },
  {
    number: "02",
    title: "n8n Automation Development",
    desc: "Complex, reliable workflows built on n8n, including self-hosted setups and custom nodes.",
    ctaText: "Know Our Services",
    services: [
      "n8n Workflow Development",
      "Custom Node Development",
      "Self-Hosted n8n Setup",
      "n8n Workflow Migration",
      "Complex Multi-Step Workflows",
      "n8n Error Handling Setup",
      "n8n Workflow Testing",
      "n8n Maintenance & Support",
    ],
  },
  {
    number: "03",
    title: "Zapier & No-Code Automation",
    desc: "Zapier and other no-code automation built properly, with real testing and error handling.",
    ctaText: "Know Our Services",
    services: [
      "Zapier Workflow Setup",
      "Multi-Step Zap Development",
      "No-Code Automation Consulting",
      "Zapier Alternative Evaluation",
      "No-Code Tool Integration",
      "Zapier Workflow Optimization",
      "No-Code Automation Training",
      "Zapier Troubleshooting",
    ],
  },
  {
    number: "04",
    title: "AI-Powered Workflow Steps",
    desc: "AI built directly into workflows for genuine decision-making, not just simple conditional logic.",
    ctaText: "Know Our Services",
    services: [
      "AI Decision Steps in Workflows",
      "AI Data Extraction & Processing",
      "AI-Powered Routing Logic",
      "AI Content Generation in Workflows",
      "AI Classification & Tagging",
      "AI-Assisted Approval Workflows",
      "AI Agent Integration Into Workflows",
      "AI Workflow Testing",
    ],
  },
  {
    number: "05",
    title: "Cross-Platform Integration",
    desc: "Tools connected together even when no native integration exists between them.",
    ctaText: "Know Our Services",
    services: [
      "Cross-Platform Workflow Connections",
      "CRM Integration",
      "Marketing Tool Integration",
      "Database & Spreadsheet Integration",
      "API-Based Custom Integration",
      "Webhook Configuration",
      "Integration Testing",
      "Integration Documentation",
    ],
  },
  {
    number: "06",
    title: "Automation Monitoring & Support",
    desc: "Ongoing monitoring that catches broken workflows before they cause real problems.",
    ctaText: "Know Our Services",
    services: [
      "Automation Performance Monitoring",
      "Error & Exception Alerts",
      "Automation Uptime Monitoring",
      "Monthly Automation Reports",
      "Ongoing Workflow Refinement",
      "Automation Scaling Support",
      "Documentation & Handover",
      "Continuous Support",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Tool Stack & Process Discovery",
    desc: "We start by understanding your current tools and manual processes, identifying where automation would deliver the most value.",
  },
  {
    number: "02",
    title: "Automation Opportunity Audit",
    desc: "We assess which specific workflows are worth automating first, based on time saved and complexity.",
  },
  {
    number: "03",
    title: "Workflow Design & Platform Selection",
    desc: "We design the automation workflow and select the right platform, n8n, Zapier, or custom development, for your needs.",
  },
  {
    number: "04",
    title: "Development & AI Integration",
    desc: "We build the automation, integrating AI decision steps where they genuinely add value.",
  },
  {
    number: "05",
    title: "Testing & Quality Assurance",
    desc: "We test workflows against real scenarios and edge cases, including proper error handling, before full deployment.",
  },
  {
    number: "06",
    title: "Monitoring & Ongoing Support",
    desc: "We monitor automation performance and provide ongoing support as your tools and processes evolve.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Automation Built Around Your Actual Tool Stack, Not a Generic Template",
    desc: "We design automation specifically around the tools you already use, rather than requiring you to adopt a new platform just to enable automation.",
  },
  {
    number: "02",
    title: "n8n and Zapier Expertise for Both No-Code and Custom Needs",
    desc: "We work fluently across both n8n and Zapier, recommending whichever fits your specific technical needs and budget, rather than pushing one platform regardless of fit.",
  },
  {
    number: "03",
    title: "AI Built Into Workflows, Not Just Simple If-This-Then-That Logic",
    desc: "We integrate genuine AI decision-making into workflows where it adds real value, going beyond basic conditional automation that can't handle judgment calls.",
  },
  {
    number: "04",
    title: "Custom Development When No-Code Tools Hit Their Limits",
    desc: "When your automation needs genuinely exceed what no-code platforms can do, we build custom solutions rather than forcing a workaround that doesn't actually work reliably.",
  },
  {
    number: "05",
    title: "Reliable Error Handling So Automation Doesn't Silently Fail",
    desc: "We build proper error handling and alerts into every workflow, so failures get caught and addressed quickly rather than silently breaking without anyone noticing.",
  },
  {
    number: "06",
    title: "Ongoing Monitoring That Catches Issues Before They Cost You Time",
    desc: "We monitor automation performance continuously after launch, catching issues proactively rather than waiting for a broken workflow to cause a visible problem.",
  },
];

const FAQS = [
  {
    question: "How much does workflow automation cost in India?",
    answer:
      "Cost depends on complexity, a simple Zapier workflow costs far less than a custom n8n system with AI decision steps and multiple integrations. We scope pricing after understanding your specific needs, rather than a flat rate upfront.",
  },
  {
    question: "Should we use n8n or Zapier for our automation?",
    answer:
      "It depends on your specific needs, Zapier is often simpler for straightforward automation, while n8n offers more flexibility for complex, custom workflows, especially when self-hosted. We recommend based on your actual requirements.",
  },
  {
    question: "Can you build automation that uses AI to make decisions?",
    answer:
      "Yes, integrating AI-powered decision steps into workflows is a core part of our service, going beyond simple conditional logic to handle genuine judgment calls within the automation.",
  },
  {
    question: "What happens if a workflow breaks or a tool changes its API?",
    answer:
      "We build proper error handling and monitoring into every workflow, so issues get caught quickly, and we provide ongoing support to fix and adjust automation when connected tools change.",
  },
  {
    question: "Can you automate workflows across tools that don't have a native integration?",
    answer:
      "Yes, custom integration work for tools without native connections is a core part of what we do, often using API-based custom development to bridge the gap.",
  },
  {
    question: "Do you provide ongoing support after the automation is built?",
    answer:
      "Yes, ongoing monitoring and support is part of our standard approach, since automation needs continued attention as your tools, processes, and business needs evolve over time.",
  },
];

export default function WorkflowProcessAutomation() {
  return (
    <ServiceDetailPage
      sectionLabel="AI Solutions"
      label="Workflow & Process Automation"
      icon={Workflow}
      description="AI workflow automation built to connect your tools and eliminate manual steps, not just another app you have to manage."
      heroTitle="Get Workflows That Run Themselves, Powered by AI"
      heroDescription="AI workflow automation built to connect your tools and eliminate manual steps, not just another app you have to manage."
      heroCtaText="Get a Free Workflow Automation Audit"
      capabilitiesHeading="Built for Businesses Stuck Copy-Pasting Between Tools"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything Between a Manual Task and an Automated Workflow"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us With Their Workflow Automation"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Connect Your Tools Into One Automated System"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Automating Workflows Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every automation project, with the same attention to reliability whether a client is nearby or across the world. We provide ai workflow automation services for businesses across India, built around each business's specific tool stack and processes. For businesses looking for an n8n automation agency beyond India, we support clients worldwide remotely, delivering the same zapier automation services standard of work regardless of time zone. Whether you're a business in Prayagraj manually moving data between tools or an agency anywhere else needing automation capacity for client delivery, our approach starts with the same question: where is your team currently wasting time on manual, repetitive steps."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for Workflows That Actually Run Themselves?"
      ctaText="Whether you're manually moving data between tools, need AI-powered decision logic in your workflows, or have automation needs that exceed what no-code tools can handle, doing it manually was never going to scale. Let's audit your current processes and scope what real workflow automation would actually involve."
      ctaPrimaryText="Talk to a Workflow Automation Specialist"
      ctaSecondaryText="Get Your Free Workflow Automation Audit"
    />
  );
}
