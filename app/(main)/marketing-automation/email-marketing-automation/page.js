import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Mail,
  UserPlus,
  ShoppingCart,
  RefreshCw,
  BarChart3,
  FlaskConical,
} from "lucide-react";

export const metadata = {
  title: "Email Marketing Automation | BizzBuzz Creations",
  description:
    "Email marketing automation in India — welcome sequences, abandoned cart reminders, and re-engagement campaigns, every email timed, tested, and tracked, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/marketing-automation/email-marketing-automation",
  },
};

const CAPABILITIES = [
  {
    icon: UserPlus,
    title: "Welcome & Onboarding Sequences",
    desc: "New subscribers and customers get a structured welcome sequence that introduces your brand and moves them toward their first purchase.",
  },
  {
    icon: ShoppingCart,
    title: "Abandoned Cart Reminders",
    desc: "Shoppers who leave without checking out get timely, well-timed reminder emails, recovering sales you'd otherwise lose.",
  },
  {
    icon: RefreshCw,
    title: "Re-Engagement Campaigns",
    desc: "Inactive subscribers get targeted campaigns designed to bring them back, rather than quietly going ignored.",
  },
  {
    icon: Mail,
    title: "Behavior-Triggered Emails",
    desc: "Emails trigger automatically based on real customer actions — a click, a purchase, a browse — not a fixed, generic send schedule.",
  },
  {
    icon: FlaskConical,
    title: "Subject Line & Content Testing",
    desc: "We test subject lines and content variations continuously, so email performance improves over time instead of staying flat.",
  },
  {
    icon: BarChart3,
    title: "Open Rate & Conversion Tracking",
    desc: "Every email is tracked for opens, clicks, and conversions, giving you a clear picture of what's actually working.",
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Mapping the Customer Journey",
    desc: "We look at where leads and customers actually stall — a signup never followed up, a cart abandoned and forgotten.",
  },
  {
    number: "02",
    title: "Building Sequences & Messaging",
    desc: "We design the actual email sequences and write the messaging ourselves, rather than handing you a generic tool template.",
  },
  {
    number: "03",
    title: "Connecting to Your CRM & Launch",
    desc: "Every sequence gets connected to your CRM so your sales team wakes up to warm leads, not cold silence, once it goes live.",
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
    title: "Timed, Tested, and Tracked",
    desc: "Every email is timed, tested, and tracked, not just scheduled and forgotten after launch.",
  },
  {
    number: "002",
    title: "Behavior-Based, Not Generic Blasts",
    desc: "Emails trigger based on real customer behavior, not a one-size-fits-all newsletter blast to your whole list.",
  },
  {
    number: "003",
    title: "We Write the Messaging Ourselves",
    desc: "We don't sell you a tool subscription and walk away — we build the sequence and write the messaging ourselves.",
  },
  {
    number: "004",
    title: "CRM-Connected",
    desc: "Email automation connects directly to your CRM, so engagement data feeds into lead status automatically.",
  },
  {
    number: "005",
    title: "Reviewed Monthly",
    desc: "Every workflow is reviewed and improved monthly, not left running on autopilot and forgotten.",
  },
  {
    number: "006",
    title: "Built Around Real Behavior",
    desc: "We build sequences around how your customers actually behave, not a generic funnel template.",
  },
];

const FAQS = [
  {
    question: "What's the difference between email marketing and email automation?",
    answer:
      "Email marketing is often a single manual send; email automation triggers timed, personalized sequences automatically based on subscriber behavior.",
  },
  {
    question: "Can you recover abandoned cart sales?",
    answer:
      "Yes, abandoned cart reminder sequences are one of our core email automation services, designed specifically to recover near-miss sales.",
  },
  {
    question: "Do you write the email content, or do I need to provide it?",
    answer:
      "We write the email sequences and messaging as part of the service, working with your brand voice and goals.",
  },
  {
    question: "How do you measure email automation performance?",
    answer:
      "We track opens, clicks, and conversions for every sequence, and continuously test subject lines and content to improve results.",
  },
  {
    question: "Which email platforms do you work with?",
    answer:
      "We work with popular email marketing platforms and can assess compatibility with your existing setup during onboarding.",
  },
];

export default function EmailMarketingAutomation() {
  return (
    <ServiceDetailPage
      sectionLabel="Marketing Automation"
      label="Email Marketing Automation"
      icon={Mail}
      description="We set up email automation that sends the right message at the right moment: welcome sequences, abandoned cart reminders, and re-engagement campaigns, every email timed, tested, and tracked."
      heroTitle="Email Marketing Automation in India"
      heroDescription="We set up email automation that sends the right message at the right moment: welcome sequences, abandoned cart reminders, and re-engagement campaigns, every email timed, tested, and tracked."
      capabilitiesHeading="What's Included in Our Email Marketing Automation"
      capabilities={CAPABILITIES}
      roadmapCarouselHeading="Our Email Automation Process"
      roadmapCarouselSteps={ROADMAP_STEPS}
      differentiatorsHeading="What Makes Our Email Automation Different"
      differentiators={DIFFERENTIATORS}
      faqs={FAQS}
      whyChooseUsHeading="Email Marketing Automation Company"
      whyChooseUsText="BizzBuzz Creations builds email automation sequences for businesses across India, timed, tested, and tracked to actually drive results. We're a marketing automation agency based in Prayagraj, helping businesses locally across Allahabad and Uttar Pradesh, as well as across India."
    />
  );
}
