import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Clock,
  Rocket,
  Building2,
  Building,
  ShoppingCart,
  Handshake,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "24/7 & E-commerce Customer Support | BizzBuzz Creations",
  description:
    "24/7 and e-commerce customer support outsourcing in India — order queries, returns, and chat support covered round the clock, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/bpo-services/24-7-ecommerce-customer-support",
  },
};

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Startups & Early-Stage Businesses",
    desc: "Early-stage online stores can't staff round-the-clock support themselves. We provide flexible 24/7 coverage sized for early volume, so startups don't leave customers waiting overnight while the business is still small.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMB stores often lose sales to slow response during off-hours and sale events. We size 24/7 support coverage for SMB budgets, keeping response times low without a full internal support team.",
  },
  {
    icon: Building,
    title: "Enterprises & Large Organizations",
    desc: "Enterprise ecommerce operations need support coverage across regions and time zones reliably. We run 24/7 support desks built for enterprise-scale order volume, multiple channels, and integration with existing systems.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce & D2C Brands",
    desc: "D2C brands live and die by how fast order and shipping questions get answered. We staff agents trained on your platform and policies to handle order queries, returns, and chat around the clock.",
  },
  {
    icon: Handshake,
    title: "Marketplace Sellers & Agencies",
    desc: "Marketplace sellers and the agencies managing them need consistent support across multiple storefronts. We work as a white-label 24/7 support partner, covering multiple stores or marketplace accounts under one team.",
  },
  {
    icon: RefreshCw,
    title: "Businesses Switching Support Providers",
    desc: "Businesses unhappy with their current support vendor need a smooth handover without a coverage gap. We manage structured transitions from your existing provider, preserving policies and history while upgrading coverage.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Round-the-Clock Support Coverage",
    desc: "Shift-based agents cover every hour, so your online store never leaves a customer waiting until morning for a reply.",
    ctaText: "Know Our Services",
    services: [
      "24/7 Shift Staffing",
      "Overnight Coverage",
      "Weekend & Holiday Coverage",
      "Time Zone Coverage",
      "Shift Handover Protocols",
      "Coverage Gap Prevention",
      "Peak Hour Staffing",
      "Backup Agent Coverage",
    ],
  },
  {
    number: "02",
    title: "Order & Shipping Query Handling",
    desc: "Order status, delivery delays, and tracking questions get resolved quickly, keeping customers informed without you lifting a finger.",
    ctaText: "Know Our Services",
    services: [
      "Order Status Support",
      "Shipping Query Handling",
      "Delivery Delay Communication",
      "Tracking Support",
      "Order Modification Requests",
      "Address Change Handling",
      "Cancellation Requests",
      "Proactive Delay Notifications",
    ],
  },
  {
    number: "03",
    title: "Returns & Refunds Management",
    desc: "Returns, exchanges, and refund requests are processed consistently, following your policies without unnecessary back-and-forth.",
    ctaText: "Know Our Services",
    services: [
      "Return Request Processing",
      "Exchange Handling",
      "Refund Processing Support",
      "Return Policy Enforcement",
      "Return Pickup Coordination",
      "Damaged Item Handling",
      "Refund Status Updates",
      "Return Fraud Screening",
    ],
  },
  {
    number: "04",
    title: "Live Chat & Email Support",
    desc: "Trained agents handle live chat and email queries across your storefront, keeping response times low even during sales spikes.",
    ctaText: "Know Our Services",
    services: [
      "Live Chat Support",
      "Email Support Handling",
      "Response Time SLA Management",
      "Sales Spike Coverage",
      "Pre-Sale Query Handling",
      "Post-Purchase Support",
      "Multi-Ticket Handling",
      "Chat Widget Management",
    ],
  },
  {
    number: "05",
    title: "Chatbot for After-Hours Queries",
    desc: "Chatbot support services handle the late-night rush of common questions, with agents picking up anything that needs a human.",
    ctaText: "Know Our Services",
    services: [
      "Chatbot Setup",
      "After-Hours Automation",
      "FAQ Bot Configuration",
      "Escalation to Human Agents",
      "Order Status Bot Integration",
      "Chatbot Training",
      "Multi-Language Bot Support",
      "Bot Performance Tuning",
    ],
  },
  {
    number: "06",
    title: "Multi-Channel Support",
    desc: "Phone, chat, email, and social DMs are covered under one consistent support process, so customers get the same experience everywhere.",
    ctaText: "Know Our Services",
    services: [
      "Phone Support",
      "Social Media DM Support",
      "Multi-Channel Ticketing",
      "Unified Support Workflow",
      "Channel Response Consistency",
      "Instagram & Facebook Support",
      "WhatsApp Support",
      "Cross-Channel Reporting",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Understand Order Flow & Policies",
    desc: "We learn your platform, shipping process, and return policies before a single ticket is answered on your behalf.",
  },
  {
    number: "02",
    title: "Set Up Shift-Based Coverage",
    desc: "Agents are scheduled across shifts to guarantee true 24/7 support outsourcing, not just extended business hours.",
  },
  {
    number: "03",
    title: "Systems & Channel Integration",
    desc: "We connect your helpdesk, chat widget, and order management system so agents work from one unified view of every customer.",
  },
  {
    number: "04",
    title: "Launch With Chatbot Backup",
    desc: "Chatbot support services handle the late-night rush of repetitive questions, with agents on standby for anything more complex.",
  },
  {
    number: "05",
    title: "Live Monitoring & Early Feedback",
    desc: "We monitor response times and resolution quality closely in the first weeks, adjusting staffing and scripts as real tickets come in.",
  },
  {
    number: "06",
    title: "Ongoing Monitoring & Feedback",
    desc: "Response times, resolution rates, and customer feedback are tracked continuously, so support quality doesn't drift over time.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "True 24/7 Coverage",
    desc: "Real shift-based staffing guarantees round-the-clock support, not just a wider business-hours window.",
  },
  {
    number: "02",
    title: "Ecommerce Platform Familiarity",
    desc: "Agents are comfortable working across common ecommerce platforms and order management systems.",
  },
  {
    number: "03",
    title: "Fast Response Times",
    desc: "Chat and email queries get handled quickly, even during sale-driven traffic spikes.",
  },
  {
    number: "04",
    title: "Chatbot + Human Hybrid",
    desc: "Chatbots absorb repetitive after-hours queries while agents handle everything that needs real judgment.",
  },
  {
    number: "05",
    title: "Scales With Order Volume",
    desc: "Support capacity flexes with seasonal spikes and sale events instead of staying fixed year-round.",
  },
  {
    number: "06",
    title: "Transparent Reporting",
    desc: "Response times, resolution rates, and ticket volumes are reported regularly, not summarized once a month.",
  },
];

const FAQS = [
  {
    question: "Which ecommerce platforms do you support?",
    answer:
      "We work with agents familiar across common platforms and order management systems — we'll confirm compatibility with your specific setup during onboarding.",
  },
  {
    question: "What's your response time for chat and email queries?",
    answer:
      "We agree on a clear response-time SLA upfront and track it continuously, so you know exactly what to expect during normal and peak periods.",
  },
  {
    question: "Do you provide support during holidays and sale events?",
    answer:
      "Yes, we can scale up shift coverage specifically around sale events and holiday traffic spikes when order volume rises.",
  },
  {
    question: "How much does 24/7 customer support outsourcing cost?",
    answer:
      "Pricing depends on channel mix, ticket volume, and coverage hours — we scope every engagement and provide a clear, tailored quote.",
  },
  {
    question: "Can you support us across phone, chat, and social media?",
    answer:
      "Yes, we cover multi-channel support including phone, live chat, email, and social media DMs under one consistent process.",
  },
];

export default function TwentyFourSevenEcommerceCustomerSupport() {
  return (
    <ServiceDetailPage
      sectionLabel="BPO Services"
      label="24/7 & E-commerce Customer Support"
      icon={Clock}
      description="Online stores and growing brands can't afford support that sleeps. Order queries, returns, and chat support covered round the clock, with chatbots handling the late-night rush."
      heroTitle="24/7 & E-commerce Customer Support in India"
      heroDescription="Online stores and growing brands can't afford support that sleeps. Order queries, returns, and chat support covered round the clock, with chatbots handling the late-night rush."
      capabilitiesHeading="Built for Ecommerce Brands Ready to Never Miss a Customer"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our 24/7 Ecommerce Support"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Ecommerce Brands Trust Us to Run Their Support"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Your Order Flow Into Round-the-Clock Coverage"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Covering Ecommerce Support Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we build every 24/7 support engagement, with the same reliability whether a client is nearby or overseas. We work with startups, SMBs, and enterprise ecommerce brands across India, sizing coverage to each store's actual order volume and channels. For ecommerce brands looking to outsource support beyond India, we run round-the-clock desks remotely, working across time zones to deliver the same standard of service regardless of location. Whether you're a small store covering your first night shift or an enterprise brand managing multiple channels, our approach starts with understanding your order flow and policies before a single ticket is answered."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for Support That Never Sleeps?"
      ctaText="Whether you need overnight coverage layered onto your current team, a full 24/7 support desk built from scratch, or a careful migration from your existing support provider, the right setup depends on your actual order volume and channels. Let's talk through your requirements and scope what round-the-clock support would actually involve."
      ctaPrimaryText="Talk to an Ecommerce Support Specialist"
      ctaSecondaryText="Get Your Free Support Consultation"
    />
  );
}
