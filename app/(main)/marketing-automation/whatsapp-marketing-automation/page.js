import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  MessageCircle,
  Rocket,
  Building2,
  Building,
  ShoppingCart,
  Handshake,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "WhatsApp Marketing Automation | BizzBuzz Creations",
  description:
    "WhatsApp marketing automation in India — order updates, offers, reminders, and chatbot replies where your customers already are, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/marketing-automation/whatsapp-marketing-automation",
  },
};

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Startups & Early-Stage Businesses",
    desc: "Startups often message customers manually on WhatsApp until volume makes that unsustainable. We set up lightweight WhatsApp automation early, so order updates and replies go out without founder time each message.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMBs frequently use WhatsApp as a primary customer channel but reply to everything manually. We build WhatsApp automation sized for SMB budgets, handling routine messages while keeping the personal feel customers expect.",
  },
  {
    icon: Building,
    title: "Enterprises & Large Organizations",
    desc: "Enterprises need WhatsApp automation that handles high message volume across departments compliantly. We build enterprise-scale WhatsApp Business automation integrated with existing CRM and support systems.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce & Retail Brands",
    desc: "Ecommerce brands see the highest engagement on WhatsApp for order updates and offers. We build order notification and promotional automation tuned to how ecommerce customers actually check WhatsApp.",
  },
  {
    icon: Handshake,
    title: "Agencies Managing Client Messaging",
    desc: "Agencies running client communication programs need reliable WhatsApp automation capacity. We work as a white-label WhatsApp automation partner, building flows agencies can present as their own service.",
  },
  {
    icon: RefreshCw,
    title: "Businesses Switching WhatsApp Providers",
    desc: "Businesses moving from a basic WhatsApp setup or another provider need message history and automations carried over carefully. We handle structured transitions, rebuilding automation properly on your new setup.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Order Updates & Notifications",
    desc: "Order confirmations, shipping updates, and delivery notifications get sent automatically on WhatsApp, where customers actually check them.",
    ctaText: "Know Our Services",
    services: [
      "Order Confirmation Automation",
      "Shipping Update Messages",
      "Delivery Notifications",
      "Payment Confirmation Messages",
      "Order Status Templates",
      "Return & Refund Updates",
      "Notification Scheduling",
      "Template Approval Management",
    ],
  },
  {
    number: "02",
    title: "Offers & Promotional Broadcasts",
    desc: "Targeted offers and promotions reach customers on WhatsApp, with open rates far higher than email for time-sensitive messages.",
    ctaText: "Know Our Services",
    services: [
      "Promotional Broadcasts",
      "Segmented Offer Campaigns",
      "Flash Sale Announcements",
      "Seasonal Campaign Messaging",
      "Broadcast List Management",
      "Opt-In Compliance Setup",
      "Campaign Scheduling",
      "Broadcast Performance Tracking",
    ],
  },
  {
    number: "03",
    title: "Chatbot Replies for Common Questions",
    desc: "Automated chatbot replies handle common questions instantly, freeing your team from repeating the same answers all day.",
    ctaText: "Know Our Services",
    services: [
      "WhatsApp Chatbot Development",
      "FAQ Automation",
      "Quick Reply Setup",
      "Menu-Based Chat Flows",
      "Multi-Language Bot Support",
      "Bot Training",
      "Escalation to Human Agents",
      "Chatbot Performance Monitoring",
    ],
  },
  {
    number: "04",
    title: "Reminder & Follow-Up Messages",
    desc: "Appointment reminders, payment follow-ups, and re-engagement messages get sent automatically at the right moment.",
    ctaText: "Know Our Services",
    services: [
      "Appointment Reminders",
      "Payment Follow-Up Messages",
      "Re-Engagement Sequences",
      "Abandoned Cart WhatsApp Nudges",
      "Renewal Reminders",
      "Feedback Request Automation",
      "Follow-Up Scheduling",
      "Multi-Step Reminder Flows",
    ],
  },
  {
    number: "05",
    title: "Compliant Messaging Setup",
    desc: "We set up WhatsApp Business automation in line with platform policies, so your messaging stays compliant and account-safe.",
    ctaText: "Know Our Services",
    services: [
      "WhatsApp Business API Setup",
      "Template Message Approval",
      "Opt-In & Consent Management",
      "Policy Compliance Review",
      "Account Health Monitoring",
      "Spam Rate Management",
      "Number Verification Support",
      "Compliance Documentation",
    ],
  },
  {
    number: "06",
    title: "Delivery & Response Tracking",
    desc: "We track delivery, read rates, and responses, giving you visibility into how WhatsApp automation is actually performing.",
    ctaText: "Know Our Services",
    services: [
      "Delivery Rate Tracking",
      "Read Receipt Monitoring",
      "Response Rate Reporting",
      "Conversation Analytics",
      "Campaign Performance Dashboards",
      "Agent Response Tracking",
      "Monthly Reporting",
      "Engagement Trend Analysis",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Mapping Customer Touchpoints",
    desc: "We identify where WhatsApp fits naturally into your customer journey — order updates, reminders, or common support questions.",
  },
  {
    number: "02",
    title: "Flow & Template Planning",
    desc: "We plan the specific message flows and templates needed, accounting for WhatsApp Business policy requirements from the start.",
  },
  {
    number: "03",
    title: "Building Messages & Chatbot Flows",
    desc: "We design the actual message sequences and chatbot reply flows ourselves, rather than handing you a generic tool template.",
  },
  {
    number: "04",
    title: "Connecting to Your CRM & Launch",
    desc: "WhatsApp automation gets connected to your CRM so conversations and updates sync with your existing customer records.",
  },
  {
    number: "05",
    title: "Testing & Compliance Checks",
    desc: "We test message flows and confirm template approvals before launch, so nothing gets flagged or blocked once live.",
  },
  {
    number: "06",
    title: "Monthly Review & Optimization",
    desc: "Every workflow is reviewed and improved monthly — not left running on autopilot and forgotten after setup.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Where Your Customers Already Are",
    desc: "WhatsApp automation reaches customers on the channel they actually check, with open rates far higher than email.",
  },
  {
    number: "02",
    title: "We Build the Messaging Ourselves",
    desc: "We don't sell you a tool subscription and walk away — we build the message flows and chatbot replies ourselves.",
  },
  {
    number: "03",
    title: "Platform-Compliant Setup",
    desc: "We set up automation in line with WhatsApp Business policies, keeping your account and messaging compliant.",
  },
  {
    number: "04",
    title: "CRM-Connected",
    desc: "WhatsApp conversations and updates connect to your CRM, so customer records stay current automatically.",
  },
  {
    number: "05",
    title: "Reviewed Monthly",
    desc: "Every workflow is reviewed and improved monthly, not left running on autopilot and forgotten.",
  },
  {
    number: "06",
    title: "One Connected System",
    desc: "We treat WhatsApp, email, and lead nurturing as one connected system, not separate campaigns running blind.",
  },
];

const FAQS = [
  {
    question: "Do you offer WhatsApp marketing automation?",
    answer:
      "Yes, we automate replies, reminders, updates, and customer interactions on WhatsApp as part of our marketing automation services.",
  },
  {
    question: "Is WhatsApp automation compliant with platform policies?",
    answer:
      "Yes, we set up WhatsApp Business automation in line with platform policies to keep your messaging and account compliant.",
  },
  {
    question: "Can WhatsApp automation handle customer support questions?",
    answer:
      "Yes, chatbot replies can handle common questions instantly, with more complex queries handed off to your team.",
  },
  {
    question: "How does WhatsApp automation connect to our CRM?",
    answer:
      "We connect WhatsApp conversations and updates to your CRM, so customer records and lead status stay current automatically.",
  },
  {
    question: "Why is WhatsApp automation more effective than email for some messages?",
    answer:
      "WhatsApp typically sees far higher open rates than email, making it especially effective for time-sensitive updates like order status and reminders.",
  },
];

export default function WhatsappMarketingAutomation() {
  return (
    <ServiceDetailPage
      sectionLabel="Marketing Automation"
      label="WhatsApp Marketing Automation"
      icon={MessageCircle}
      description="With open rates far higher than email, WhatsApp automation lets you send order updates, offers, and reminders where your customers already are, plus chatbot replies for common questions."
      heroTitle="WhatsApp Marketing Automation in India"
      heroDescription="With open rates far higher than email, WhatsApp automation lets you send order updates, offers, and reminders where your customers already are, plus chatbot replies for common questions."
      capabilitiesHeading="Built for Businesses Ready to Put WhatsApp to Work"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our WhatsApp Marketing Automation"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us to Automate Their WhatsApp Messaging"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Manual WhatsApp Replies Into Automated Flows"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Automating WhatsApp Messaging Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we build every WhatsApp automation engagement, with the same rigor whether a client is nearby or overseas. We work with startups, SMBs, and enterprises across India, sizing message flows to each business's actual customer volume and support needs. For businesses looking to automate WhatsApp beyond India, we build WhatsApp marketing automation remotely, working across time zones to reach the same standard of reliability regardless of location. Whether you're a startup automating your first order update or an enterprise running compliant messaging at scale, our approach starts with mapping where WhatsApp genuinely fits your customer journey."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready to Put WhatsApp to Work for Your Business?"
      ctaText="Whether you need order updates automated, a chatbot handling common questions, or a full messaging program built around your customer journey, the right setup depends on how your customers actually use WhatsApp today. Let's talk through your requirements and scope what WhatsApp automation would actually involve."
      ctaPrimaryText="Talk to a WhatsApp Automation Specialist"
      ctaSecondaryText="Get Your Free WhatsApp Automation Consultation"
    />
  );
}
