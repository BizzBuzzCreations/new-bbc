import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  UserCheck,
  User,
  Rocket,
  ShoppingCart,
  Briefcase,
  Building2,
  Users,
} from "lucide-react";

export const metadata = {
  title: "Virtual Assistant Services | BizzBuzz Creations",
  description:
    "BizzBuzz Creations provides dedicated virtual assistant services for startups",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/bpo-services/virtual-assistant-startup-outsourcing",
  },
};

const CAPABILITIES = [
  {
    icon: User,
    title: "Founders Doing Everything Themselves Instead of Growing the Business",
    desc: "Many founders spend hours on admin and scheduling that pulls them away from actual growth work. We provide virtual assistant services that take this off your plate, freeing you to focus on what only you can do.",
  },
  {
    icon: Rocket,
    title: "Startups Needing Admin Support Without a Full-Time Hire",
    desc: "Startups often can't justify a full-time admin hire, even though the workload genuinely exists. We provide hire virtual assistant for startup support that scales with your actual need, not a rigid full-time commitment.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Businesses Needing Order & Customer Support Help",
    desc: "Ecommerce founders juggling orders, customer queries, and inventory alone quickly hit a ceiling on what they can handle. We provide dedicated virtual assistant services specifically for ecommerce order and support tasks.",
  },
  {
    icon: Briefcase,
    title: "Entrepreneurs Needing an Executive Assistant on a Startup Budget",
    desc: "Entrepreneurs need genuine executive support, calendar management, email triage, without enterprise-level executive assistant pricing. We provide executive virtual assistant services sized for a startup budget.",
  },
  {
    icon: Building2,
    title: "Small Businesses Needing Part-Time, Flexible Support",
    desc: "Not every business needs a full-time assistant, but many need consistent, reliable part-time help. We provide startup outsourcing services with flexible hours that scale up or down as needed.",
  },
  {
    icon: Users,
    title: "Growing Teams Needing Dedicated, Ongoing Virtual Support",
    desc: "Growing teams need a virtual assistant who understands their business deeply, not a rotating cast of unfamiliar helpers. We provide remote virtual assistant company support built around one dedicated assistant, not shifting staff.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Administrative & Executive Support",
    desc: "Day-to-day admin work handled reliably, so founders can focus on the work that actually needs their attention.",
    ctaText: "Know Our Services",
    services: [
      "Executive Virtual Assistant Support",
      "Email Management",
      "Document Preparation",
      "Travel Arrangement Support",
      "Meeting Coordination",
      "Task & Project Tracking",
      "File & Records Organization",
      "General Admin Support",
    ],
  },
  {
    number: "02",
    title: "Ecommerce & Order Management Support",
    desc: "Order and inventory tasks handled consistently, so nothing slips through the cracks as your store grows.",
    ctaText: "Know Our Services",
    services: [
      "Ecommerce Order Processing",
      "Inventory Tracking Support",
      "Product Listing Support",
      "Order & Shipping Coordination",
      "Return & Refund Processing Support",
      "Marketplace Account Management",
      "Ecommerce Data Entry",
      "Ecommerce Reporting Support",
    ],
  },
  {
    number: "03",
    title: "Customer Support & Communication",
    desc: "Customer communication handled promptly and professionally, representing your business the way you'd want.",
    ctaText: "Know Our Services",
    services: [
      "Customer Email Support",
      "Live Chat Support",
      "Social Media Message Management",
      "Customer Query Handling",
      "Appointment Booking Support",
      "Follow-Up Communication",
      "Customer Support Documentation",
      "Customer Support Reporting",
    ],
  },
  {
    number: "04",
    title: "Scheduling & Calendar Management",
    desc: "Your calendar managed properly, so meetings and priorities stay organized without constant back-and-forth.",
    ctaText: "Know Our Services",
    services: [
      "Calendar Management",
      "Meeting Scheduling",
      "Appointment Coordination",
      "Time Zone Coordination",
      "Reminder & Follow-Up Management",
      "Event Coordination Support",
      "Schedule Conflict Resolution",
      "Calendar Reporting",
    ],
  },
  {
    number: "05",
    title: "Research & Data Support",
    desc: "Research and data tasks handled thoroughly, giving you organized information without spending your own time digging.",
    ctaText: "Know Our Services",
    services: [
      "Market & Competitor Research",
      "Data Entry & Compilation",
      "Spreadsheet Management",
      "Lead List Building",
      "Online Research Tasks",
      "Report Preparation Support",
      "Data Organization",
      "Research Summary Documentation",
    ],
  },
  {
    number: "06",
    title: "Ongoing Virtual Assistant Management",
    desc: "A dedicated assistant relationship managed properly, with clear reporting and reliable backup coverage.",
    ctaText: "Know Our Services",
    services: [
      "Dedicated VA Assignment",
      "VA Performance Monitoring",
      "Task Management System Setup",
      "Weekly Progress Reporting",
      "VA Onboarding & Training",
      "Flexible Hour Scaling",
      "Backup VA Coverage",
      "Ongoing Support Reviews",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Needs & Task Discovery",
    desc: "We start by understanding your specific tasks, industry, and the kind of support that would genuinely help your business most.",
  },
  {
    number: "02",
    title: "VA Matching & Assignment",
    desc: "We match you with an assistant whose skills and experience fit your specific needs, rather than assigning whoever's available.",
  },
  {
    number: "03",
    title: "Onboarding & Tool Access Setup",
    desc: "We onboard your assistant with access to relevant tools and systems, ensuring they can start contributing quickly and securely.",
  },
  {
    number: "04",
    title: "Task Handoff & Initial Support",
    desc: "We begin task handling with close monitoring in the early weeks, refining processes as your assistant learns your specific workflow.",
  },
  {
    number: "05",
    title: "Ongoing Task Management",
    desc: "Your assistant handles day-to-day tasks consistently, with clear communication on progress and any questions that come up.",
  },
  {
    number: "06",
    title: "Regular Reporting & Adjustment",
    desc: "We provide regular reporting on work completed, adjusting hours or task scope as your business needs evolve.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Dedicated Assistants Matched to Your Specific Needs, Not Generic Task Lists",
    desc: "We match you with an assistant suited to your specific tasks and industry, rather than assigning generic support that doesn't understand the context of your work.",
  },
  {
    number: "02",
    title: "Trained Support Across Admin, Ecommerce, and Customer Communication",
    desc: "Our assistants are trained across multiple support areas, so you get one dedicated person who can handle varied tasks rather than needing separate help for each function.",
  },
  {
    number: "03",
    title: "Flexible Hours That Scale With Your Business, Not a Fixed Package",
    desc: "We scope hours based on your actual current workload, scaling up or down as your needs change, rather than locking you into a fixed package regardless of demand.",
  },
  {
    number: "04",
    title: "Backup Coverage So Support Never Actually Stops",
    desc: "We provide backup coverage when your assistant is unavailable, so your business doesn't lose support continuity during leave or unexpected absence.",
  },
  {
    number: "05",
    title: "Weekly Reporting So You Always Know What's Being Handled",
    desc: "You receive regular progress updates on tasks completed, giving you visibility into your assistant's work without needing to micromanage day-to-day activity.",
  },
  {
    number: "06",
    title: "Startup Pricing Without Sacrificing Reliability or Quality",
    desc: "We scope pricing to fit startup and small business budgets, without cutting corners on training or reliability that would undermine the actual value of the support.",
  },
];

const FAQS = [
  {
    question: "How much do virtual assistant services cost in India?",
    answer:
      "Cost depends on hours needed and the complexity of tasks involved, general admin support costs differently than specialized ecommerce or executive support. We scope pricing after understanding your specific requirements, rather than offering a flat rate upfront.",
  },
  {
    question: "What tasks can a virtual assistant actually handle for a startup?",
    answer:
      "Virtual assistants can handle admin work, email management, scheduling, customer support, ecommerce order processing, research, and data entry, among other tasks. We scope the specific mix based on what would genuinely help your business most.",
  },
  {
    question: "Is the virtual assistant dedicated to us, or shared across clients?",
    answer:
      "We provide dedicated virtual assistant services, meaning your assistant is assigned specifically to your account and becomes familiar with your business, rather than being shared across multiple unrelated clients simultaneously.",
  },
  {
    question: "Can we hire a virtual assistant part-time, not full-time?",
    answer:
      "Yes, flexible hours are a core part of our service, scoped to your actual workload rather than requiring a full-time commitment when part-time support would genuinely be sufficient.",
  },
  {
    question: "What happens if our virtual assistant is unavailable or on leave?",
    answer:
      "We provide backup coverage during planned or unplanned absences, so your support continuity isn't disrupted when your primary assistant is unavailable.",
  },
  {
    question: "How do you match us with the right virtual assistant?",
    answer:
      "We assess your specific tasks, industry, and working style during onboarding, then match you with an assistant whose skills and experience genuinely fit, rather than assigning whoever happens to be free.",
  },
];

export default function VirtualAssistantStartupOutsourcing() {
  return (
    <ServiceDetailPage
      sectionLabel="BPO Services"
      label="Virtual Assistant & Startup Outsourcing"
      icon={UserCheck}
      description="Dedicated virtual assistant services built for startups needing real help, not generic task lists, backed by trained, reliable support."
      heroTitle="Get a Virtual Assistant Who Actually Gets Things Done"
      heroDescription="Dedicated virtual assistant services built for startups needing real help, not generic task lists, backed by trained, reliable support."
      heroCtaText="Get a Free Virtual Assistant Consultation"
      capabilitiesHeading="Built for Founders Drowning in Tasks They Shouldn't Be Doing"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything a Dedicated Virtual Assistant Can Take Off Your Plate"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Founders Trust Us With Their Virtual Assistant Needs"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Match You With the Right Virtual Assistant"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Supporting Startups Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every virtual assistant engagement, with the same attention to reliability whether a client is nearby or across the world. We provide virtual assistant services for founders and businesses across India, built around each business's specific tasks and workflow. For entrepreneurs looking for a virtual assistant agency for entrepreneurs beyond India, we support clients worldwide remotely, delivering the same dedicated virtual assistant services standard of work regardless of time zone. Whether you're a founder in Prayagraj or a growing team anywhere else needing consistent support, our approach starts with the same question: what's actually pulling you away from the work only you can do."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready to Get Hours Back in Your Week?"
      ctaText="Whether you're drowning in admin work, need dedicated ecommerce support, or simply need reliable help without a full-time hire, doing everything yourself was never a sustainable growth strategy. Let's talk through your current workload and scope what a dedicated virtual assistant would actually involve."
      ctaPrimaryText="Talk to a Virtual Assistant Specialist"
      ctaSecondaryText="Get Your Free Virtual Assistant Consultation"
    />
  );
}
