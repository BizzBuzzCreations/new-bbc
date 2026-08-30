import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  MessageCircle,
  Package,
  Bot,
  Gift,
  BarChart3,
  ShieldCheck,
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
    icon: Package,
    title: "Order Updates & Notifications",
    desc: "Order confirmations, shipping updates, and delivery notifications get sent automatically on WhatsApp, where customers actually check them.",
  },
  {
    icon: Gift,
    title: "Offers & Promotional Broadcasts",
    desc: "Targeted offers and promotions reach customers on WhatsApp, with open rates far higher than email for time-sensitive messages.",
  },
  {
    icon: Bot,
    title: "Chatbot Replies for Common Questions",
    desc: "Automated chatbot replies handle common questions instantly, freeing your team from repeating the same answers all day.",
  },
  {
    icon: MessageCircle,
    title: "Reminder & Follow-Up Messages",
    desc: "Appointment reminders, payment follow-ups, and re-engagement messages get sent automatically at the right moment.",
  },
  {
    icon: ShieldCheck,
    title: "Compliant Messaging Setup",
    desc: "We set up WhatsApp Business automation in line with platform policies, so your messaging stays compliant and account-safe.",
  },
  {
    icon: BarChart3,
    title: "Delivery & Response Tracking",
    desc: "We track delivery, read rates, and responses, giving you visibility into how WhatsApp automation is actually performing.",
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
    title: "Building Messages & Chatbot Flows",
    desc: "We design the actual message sequences and chatbot reply flows ourselves, rather than handing you a generic tool template.",
  },
  {
    number: "03",
    title: "Connecting to Your CRM & Launch",
    desc: "WhatsApp automation gets connected to your CRM so conversations and updates sync with your existing customer records.",
  },
  {
    number: "04",
    title: "Monthly Review & Optimization",
    desc: "Every workflow is reviewed and improved monthly — not left running on autopilot and forgotten after setup.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "001",
    title: "Where Your Customers Already Are",
    desc: "WhatsApp automation reaches customers on the channel they actually check, with open rates far higher than email.",
  },
  {
    number: "002",
    title: "We Build the Messaging Ourselves",
    desc: "We don't sell you a tool subscription and walk away — we build the message flows and chatbot replies ourselves.",
  },
  {
    number: "003",
    title: "Platform-Compliant Setup",
    desc: "We set up automation in line with WhatsApp Business policies, keeping your account and messaging compliant.",
  },
  {
    number: "004",
    title: "CRM-Connected",
    desc: "WhatsApp conversations and updates connect to your CRM, so customer records stay current automatically.",
  },
  {
    number: "005",
    title: "Reviewed Monthly",
    desc: "Every workflow is reviewed and improved monthly, not left running on autopilot and forgotten.",
  },
  {
    number: "006",
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
      capabilitiesHeading="What's Included in Our WhatsApp Marketing Automation"
      capabilities={CAPABILITIES}
      roadmapCarouselHeading="Our WhatsApp Automation Process"
      roadmapCarouselSteps={ROADMAP_STEPS}
      differentiatorsHeading="What Makes Our WhatsApp Automation Different"
      differentiators={DIFFERENTIATORS}
      faqs={FAQS}
      whyChooseUsHeading="WhatsApp Marketing Automation Company"
      whyChooseUsText="BizzBuzz Creations builds WhatsApp automation for businesses across India, reaching customers with updates, offers, and support where they already are. We're a marketing automation agency based in Prayagraj, helping businesses locally across Allahabad and Uttar Pradesh, as well as across India."
    />
  );
}
