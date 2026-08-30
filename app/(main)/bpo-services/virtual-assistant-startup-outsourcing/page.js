import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  UserCheck,
  Rocket,
  Building2,
  Building,
  ShoppingCart,
  Handshake,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "Virtual Assistant & Startup Outsourcing | BizzBuzz Creations",
  description:
    "Virtual assistant and startup outsourcing services in India — flexible remote support for scheduling, admin, and customer queries, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/bpo-services/virtual-assistant-startup-outsourcing",
  },
};

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Startups & Early-Stage Businesses",
    desc: "Startups need admin and scheduling help without hiring a full-time employee before revenue supports it. We provide flexible virtual assistant support that scales with founders, starting at a few hours a week and growing as needed.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMBs often need extra hands for admin, scheduling, and customer queries but not a full department. We size virtual assistant support for SMB budgets, handing off the routine work eating into your team's time.",
  },
  {
    icon: Building,
    title: "Enterprises & Large Organizations",
    desc: "Enterprises sometimes need overflow admin support for specific teams or projects without expanding headcount. We provide virtual assistant capacity that plugs into existing enterprise workflows for defined periods or ongoing support.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce & Retail Brands",
    desc: "Ecommerce founders juggle customer messages, order queries, and admin alongside running the business. We provide virtual assistants trained on your store and policies to handle routine customer and admin work.",
  },
  {
    icon: Handshake,
    title: "Agencies & Consultants",
    desc: "Agencies and consultants need reliable support for scheduling, client admin, and research without a full hire. We work as an embedded virtual assistant partner, handling the admin load that eats into billable time.",
  },
  {
    icon: RefreshCw,
    title: "Businesses Replacing a Departing Assistant",
    desc: "Businesses losing an in-house assistant need continuity without a hiring gap. We can step in as an interim or ongoing virtual assistant, learning your systems quickly to keep operations running without disruption.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Scheduling & Calendar Management",
    desc: "Meetings, follow-ups, and appointments get organized and confirmed, so founders aren't losing hours to calendar back-and-forth.",
    ctaText: "Know Our Services",
    services: [
      "Calendar Management",
      "Meeting Scheduling",
      "Appointment Confirmations",
      "Reminder Management",
      "Travel Scheduling Support",
      "Time Zone Coordination",
      "Rescheduling Handling",
      "Calendar Conflict Resolution",
    ],
  },
  {
    number: "02",
    title: "Email & Admin Support",
    desc: "Inbox triage, routine correspondence, and admin paperwork get handled reliably, freeing you to focus on higher-value work.",
    ctaText: "Know Our Services",
    services: [
      "Inbox Management",
      "Email Triage",
      "Routine Correspondence",
      "Document Preparation",
      "Admin Paperwork Support",
      "Filing & Organization",
      "Travel Booking Support",
      "Expense Tracking Support",
    ],
  },
  {
    number: "03",
    title: "Customer Query Handling",
    desc: "Your virtual assistant can field routine customer questions directly, escalating only what genuinely needs your attention.",
    ctaText: "Know Our Services",
    services: [
      "Customer Query Response",
      "Order Status Support",
      "FAQ Handling",
      "Live Chat Support",
      "Email Support Handling",
      "Escalation Management",
      "Customer Follow-Ups",
      "Feedback Collection",
    ],
  },
  {
    number: "04",
    title: "Research & Data Support",
    desc: "Market research, competitor tracking, and basic data compilation get handed off, so you're working from findings, not raw digging.",
    ctaText: "Know Our Services",
    services: [
      "Market Research",
      "Competitor Tracking",
      "Data Compilation",
      "Lead List Building",
      "Report Preparation",
      "Presentation Support",
      "Spreadsheet Analysis",
      "Fact-Checking Support",
    ],
  },
  {
    number: "05",
    title: "Flexible Part-Time or Full-Time VAs",
    desc: "Engage a virtual assistant for a few hours a week or full-time, matched to how much support your stage of growth actually needs.",
    ctaText: "Know Our Services",
    services: [
      "Part-Time VA Engagement",
      "Full-Time VA Engagement",
      "Hourly Support Packages",
      "Dedicated VA Assignment",
      "Multi-VA Team Support",
      "Flexible Hour Adjustments",
      "Trial Engagements",
      "Contract Flexibility",
    ],
  },
  {
    number: "06",
    title: "Scale-as-You-Grow Model",
    desc: "Start small and add more virtual assistant hours or team members only once the workload genuinely demands it.",
    ctaText: "Know Our Services",
    services: [
      "Usage-Based Scaling",
      "Additional VA Onboarding",
      "Workload Reviews",
      "Capacity Planning",
      "Team Expansion Support",
      "Seasonal Scaling",
      "Role Specialization Over Time",
      "Ongoing Needs Assessment",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Understand Founder's Workload",
    desc: "We learn what's actually eating your time — scheduling, admin, support — before matching you with the right kind of help.",
  },
  {
    number: "02",
    title: "Match the Right Virtual Assistant",
    desc: "We assign a virtual assistant suited to your tools, industry, and communication style, not a random generalist.",
  },
  {
    number: "03",
    title: "Tool & Access Setup",
    desc: "We set up access to your calendar, inbox, and tools securely, so your assistant can start working without delays.",
  },
  {
    number: "04",
    title: "Onboard & Set Communication Rhythm",
    desc: "We agree on check-ins, tools, and reporting cadence upfront, so handoffs feel smooth from week one.",
  },
  {
    number: "05",
    title: "Live Support & Early Feedback",
    desc: "Your assistant starts handling real tasks with close feedback in the first weeks, so the working style gets fine-tuned quickly.",
  },
  {
    number: "06",
    title: "Scale Support as You Grow",
    desc: "Hours or team size increase only as your workload genuinely grows, not on a fixed schedule that outpaces your needs.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Founder-Friendly Engagement",
    desc: "Built for founders and small teams who need reliable help without hiring a full in-house role.",
  },
  {
    number: "02",
    title: "No Long-Term Lock-In",
    desc: "Start with what you need today and adjust hours or scope as your business changes.",
  },
  {
    number: "03",
    title: "Trained on Startup Tools",
    desc: "Our virtual assistants are comfortable with common startup tools — CRMs, calendars, project trackers — from day one.",
  },
  {
    number: "04",
    title: "Flexible Hours",
    desc: "Engage support part-time or full-time, matched to your actual workload rather than a fixed package.",
  },
  {
    number: "05",
    title: "Direct Communication",
    desc: "You work directly with your assigned virtual assistant, not through a rotating ticket queue.",
  },
  {
    number: "06",
    title: "Affordable Entry Point",
    desc: "A lower-cost way to get admin, scheduling, and support help without the overhead of a full-time hire.",
  },
];

const FAQS = [
  {
    question: "What's the minimum commitment for a virtual assistant?",
    answer:
      "We can start with a few hours a week — there's no requirement to commit to a large block of hours upfront.",
  },
  {
    question: "What tools do your virtual assistants use?",
    answer:
      "We work with common tools like Google Workspace, CRMs, project trackers, and calendar apps, and adapt to whatever your startup already uses.",
  },
  {
    question: "Should I hire a part-time or full-time virtual assistant?",
    answer:
      "It depends on your workload — we'll help you assess whether part-time support is enough or a full-time assistant makes more sense.",
  },
  {
    question: "How much does virtual assistant support cost?",
    answer:
      "Costs scale with hours and scope of work — we'll give you a clear, tailored quote based on what you actually need.",
  },
  {
    question: "How quickly can a virtual assistant start?",
    answer:
      "Once we understand your workload and tools, we can typically match and onboard a virtual assistant within a few days.",
  },
];

export default function VirtualAssistantStartupOutsourcing() {
  return (
    <ServiceDetailPage
      sectionLabel="BPO Services"
      label="Virtual Assistant & Startup Outsourcing"
      icon={UserCheck}
      description="Not every business needs a 50-seat floor. Hand off scheduling, support, and admin work through flexible remote team outsourcing, scaling up only when it's genuinely needed."
      heroTitle="Virtual Assistant & Startup Outsourcing in India"
      heroDescription="Not every business needs a 50-seat floor. Hand off scheduling, support, and admin work through flexible remote team outsourcing, scaling up only when it's genuinely needed."
      capabilitiesHeading="Built for Founders Ready to Hand Off the Busywork"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our Virtual Assistant Support"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Founders Trust Us to Handle Their Admin Work"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Match You With the Right Virtual Assistant"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Supporting Founders Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we match every virtual assistant engagement, with the same care whether a founder is nearby or overseas. We work with startups, SMBs, and enterprises across India, sizing support to each founder's actual workload and tools. For founders looking to outsource admin work beyond India, we provide virtual assistant support remotely, working across time zones to deliver the same reliability regardless of location. Whether you're a solo founder handing off your first task or a growing team needing multiple assistants, our approach starts with understanding exactly what's eating your time."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready to Get Your Time Back?"
      ctaText="Whether you need a few hours of admin support a week, a dedicated full-time virtual assistant, or a small team supporting multiple founders, the right setup depends on your actual workload. Let's talk through what's eating your time and scope what virtual assistant support would actually involve."
      ctaPrimaryText="Talk to a Virtual Assistant Specialist"
      ctaSecondaryText="Get Your Free VA Consultation"
    />
  );
}
