import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  MessageCircle,
  ShoppingCart,
  Zap,
  CalendarClock,
  Package,
  Share2,
  Megaphone,
} from "lucide-react";

export const metadata = {
  title: "WhatsApp Marketing Automation | BizzBuzz Creations",
  description:
    "BizzBuzz Creations provides WhatsApp marketing automation that engages customers directly across India and worldwide.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/marketing-automation/whatsapp-marketing-automation",
  },
};

const CAPABILITIES = [
  {
    icon: ShoppingCart,
    title: "Ecommerce Brands Needing Order Updates & Abandoned Cart Recovery",
    desc: "Order and shipping updates sent via WhatsApp get seen far more reliably than the same information buried in email. We provide whatsapp marketing automation services built around these high-visibility ecommerce touchpoints.",
  },
  {
    icon: Zap,
    title: "Businesses Needing Instant Customer Response Automation",
    desc: "Customers expect quick responses on WhatsApp, and delays cost trust and sometimes the sale itself. We build whatsapp chatbot automation that responds instantly to common questions around the clock.",
  },
  {
    icon: CalendarClock,
    title: "Service Businesses Needing Automated Appointment Reminders",
    desc: "Missed appointments cost service businesses real revenue, and manual reminder calls don't scale well. We provide automated whatsapp campaigns for appointment reminders that reduce no-shows without manual effort.",
  },
  {
    icon: Package,
    title: "Companies Needing WhatsApp Catalog & Product Automation",
    desc: "Businesses selling products benefit from customers being able to browse and inquire directly within WhatsApp. We provide whatsapp catalog automation that makes this a genuinely functional sales channel.",
  },
  {
    icon: Share2,
    title: "Businesses Needing WhatsApp Integrated With Their CRM",
    desc: "WhatsApp conversations happening outside your CRM mean lost visibility into genuine customer interactions. We provide whatsapp business api automation that keeps WhatsApp activity properly connected to your customer records.",
  },
  {
    icon: Megaphone,
    title: "Companies Needing Broadcast Campaigns for Offers & Updates",
    desc: "Broadcasting offers and updates via WhatsApp typically gets read far more than the equivalent email campaign. We work as a whatsapp automation agency building compliant, effective broadcast campaigns.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "WhatsApp Business API Setup",
    desc: "The technical foundation your WhatsApp automation needs, set up properly and compliantly from the start.",
    ctaText: "Know Our Services",
    services: [
      "WhatsApp Business API Setup",
      "Business Verification Support",
      "Template Message Approval Support",
      "Number Migration Support",
      "API Provider Selection Guidance",
      "Compliance & Policy Setup",
      "Multi-Agent Inbox Setup",
      "Initial Configuration & Testing",
    ],
  },
  {
    number: "02",
    title: "Automated Chatbot & Response Flows",
    desc: "Chatbots that actually answer questions helpfully, escalating to a real person when genuinely needed.",
    ctaText: "Know Our Services",
    services: [
      "WhatsApp Chatbot Development",
      "FAQ Automation",
      "Automated Query Routing",
      "Keyword-Triggered Responses",
      "Conversational Flow Design",
      "Human Handoff Configuration",
      "Multilingual Bot Support",
      "Chatbot Performance Tuning",
    ],
  },
  {
    number: "03",
    title: "WhatsApp Broadcast Campaigns",
    desc: "Broadcast messaging built to respect opt-in requirements while genuinely engaging your audience.",
    ctaText: "Know Our Services",
    services: [
      "WhatsApp Broadcast Campaigns",
      "Offer & Promotion Messaging",
      "Segmented Broadcast Lists",
      "Campaign Scheduling",
      "Broadcast Template Design",
      "Opt-In List Management",
      "Campaign Compliance Checks",
      "Broadcast Performance Tracking",
    ],
  },
  {
    number: "04",
    title: "Ecommerce WhatsApp Automation",
    desc: "Automation built around the specific WhatsApp touchpoints that matter most for online stores.",
    ctaText: "Know Our Services",
    services: [
      "Abandoned Cart WhatsApp Messages",
      "Order Confirmation Automation",
      "Shipping Update Automation",
      "WhatsApp Catalog Setup",
      "Product Recommendation Messages",
      "Review Request Automation",
      "Post-Purchase Follow-Up",
      "Ecommerce Automation Reporting",
    ],
  },
  {
    number: "05",
    title: "WhatsApp CRM & Tool Integration",
    desc: "WhatsApp activity connected properly to your CRM and other business tools, not operating in isolation.",
    ctaText: "Know Our Services",
    services: [
      "WhatsApp CRM Integration",
      "Lead Capture via WhatsApp",
      "WhatsApp & Email Automation Sync",
      "Third-Party Tool Connections",
      "Contact Sync Automation",
      "Automated Lead Tagging",
      "Integration Testing",
      "Integration Documentation",
    ],
  },
  {
    number: "06",
    title: "WhatsApp Analytics & Optimization",
    desc: "Clear reporting on what's actually working, so your WhatsApp strategy improves based on real data.",
    ctaText: "Know Our Services",
    services: [
      "WhatsApp Campaign Analytics",
      "Response Rate Tracking",
      "Conversion Tracking",
      "Delivery & Read Rate Monitoring",
      "Monthly Performance Reports",
      "A/B Testing Messages",
      "Automation Flow Optimization",
      "Ongoing Strategy Refinement",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Business & Customer Journey Discovery",
    desc: "We start by understanding your business, current customer communication, and where WhatsApp could genuinely add the most value.",
  },
  {
    number: "02",
    title: "WhatsApp Strategy & Flow Design",
    desc: "We design the specific automation flows, chatbot conversations, and broadcast strategy tailored to your business.",
  },
  {
    number: "03",
    title: "API Setup & Chatbot Development",
    desc: "We handle WhatsApp Business API setup and build out chatbot flows and automated responses according to the strategy.",
  },
  {
    number: "04",
    title: "Integration & Broadcast Setup",
    desc: "We integrate WhatsApp with your CRM and other tools, and set up broadcast campaigns with proper compliance in place.",
  },
  {
    number: "05",
    title: "Launch & Initial Testing",
    desc: "Automation launches with close monitoring in the early weeks, testing chatbot flows and messaging based on real customer interactions.",
  },
  {
    number: "06",
    title: "Ongoing Optimization & Reporting",
    desc: "We provide regular reporting on performance and continue refining flows and campaigns based on real engagement data.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "WhatsApp Automation Built Around Response Rate, Not Just Reach",
    desc: "We measure success by genuine customer response and conversion, not just how many messages were sent, since delivery alone doesn't reflect whether the automation is actually working.",
  },
  {
    number: "02",
    title: "Chatbots That Actually Answer Questions, Not Frustrate Customers",
    desc: "We design conversational flows that genuinely resolve common questions, with clear escalation to a real person when a query goes beyond what the bot can handle.",
  },
  {
    number: "03",
    title: "Ecommerce Flows That Recover Sales Where Email Often Fails",
    desc: "Our abandoned cart and order update automation reaches customers on a channel they actually check regularly, recovering sales that email alone often misses.",
  },
  {
    number: "04",
    title: "Compliant Broadcast Campaigns That Respect Opt-In Requirements",
    desc: "We build broadcast campaigns that follow WhatsApp's policies and genuine opt-in requirements, protecting your account standing rather than risking it for short-term reach.",
  },
  {
    number: "05",
    title: "Integration That Connects WhatsApp to Your Existing Tools",
    desc: "We connect WhatsApp activity to your CRM and other business systems, so customer conversations don't exist in isolation from the rest of your customer data.",
  },
  {
    number: "06",
    title: "Transparent Reporting on Real Engagement and Conversion",
    desc: "You see clear reporting on response rates and conversions, giving you real evidence of what your WhatsApp automation is actually delivering for the business.",
  },
];

const FAQS = [
  {
    question: "How much does WhatsApp marketing automation cost in India?",
    answer:
      "Cost depends on scope, a basic chatbot setup costs less than a full automation suite covering broadcast campaigns, ecommerce flows, and CRM integration. We scope pricing after understanding your specific requirements, rather than offering a flat rate upfront.",
  },
  {
    question: "Do we need WhatsApp Business API, or is the regular app enough?",
    answer:
      "For genuine automation, broadcast campaigns, and CRM integration at scale, WhatsApp Business API is typically necessary, since the regular app has real limitations for business use. We assess which option fits your specific needs during initial discovery.",
  },
  {
    question: "Can WhatsApp automation help recover abandoned cart sales?",
    answer:
      "Yes, abandoned cart WhatsApp messages are one of our most effective ecommerce automation services, since WhatsApp typically gets read and responded to more reliably than the equivalent email.",
  },
  {
    question: "Will customers get annoyed by automated WhatsApp messages?",
    answer:
      "Automation done carelessly can feel intrusive, which is why we build compliant, opt-in-respecting campaigns with genuinely useful content, rather than excessive or irrelevant messaging that damages customer trust.",
  },
  {
    question: "Can you integrate WhatsApp with our existing CRM or email tools?",
    answer:
      "Yes, WhatsApp CRM and tool integration is a core part of our service, ensuring WhatsApp conversations and data connect properly with your broader customer records and marketing systems.",
  },
  {
    question: "How long does WhatsApp Business API approval typically take?",
    answer:
      "Approval timeline varies and isn't entirely within our control, since it depends on Meta's review process, but we handle the application and verification process to keep things moving as efficiently as possible.",
  },
];

export default function WhatsappMarketingAutomation() {
  return (
    <ServiceDetailPage
      sectionLabel="Marketing Automation"
      label="WhatsApp Marketing Automation"
      icon={MessageCircle}
      description="WhatsApp marketing automation is built to reach customers where they actually respond, not another channel they routinely ignore."
      heroTitle="Get Customers Engaging on the App They Actually Check"
      heroDescription="WhatsApp marketing automation is built to reach customers where they actually respond, not another channel they routinely ignore."
      heroCtaText="Get a Free WhatsApp Automation Audit"
      capabilitiesHeading="Built for Businesses Whose Emails Go Unread"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything Between a Customer's Number and a Completed Sale"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us With WhatsApp Automation"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn WhatsApp Into an Automated Sales Channel"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Running WhatsApp Automation Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every WhatsApp automation project, with the same attention to compliance whether a client is nearby or across the world. We provide whatsapp marketing automation services for businesses across India, built around each business's specific customer communication needs. For businesses looking for a whatsapp automation agency beyond India, we support clients worldwide remotely, delivering the same whatsapp business api automation standard of work regardless of time zone. Whether you're an ecommerce store in Prayagraj or a service business anywhere else needing appointment automation, our approach starts with the same question: where is WhatsApp already the channel your customers actually prefer."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for WhatsApp That Actually Sells?"
      ctaText="Whether your emails go unread, you need faster response times, or you want to recover abandoned cart sales on a channel customers actually check, relying on email alone was never going to reach everyone. Let's talk through your customer communication and scope what real WhatsApp automation would actually involve."
      ctaPrimaryText="Talk to a WhatsApp Automation Specialist"
      ctaSecondaryText="Get Your Free WhatsApp Automation Audit"
    />
  );
}
