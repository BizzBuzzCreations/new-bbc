import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Filter,
  Clock,
  FileText,
  Gift,
  BarChart3,
  Target,
} from "lucide-react";

export const metadata = {
  title: "Lead Nurturing Automation | BizzBuzz Creations",
  description:
    "Lead nurturing automation in India — keep prospects warm with timed content, reminders, and offers until they're ready to talk to your team, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/marketing-automation/lead-nurturing-automation",
  },
};

const CAPABILITIES = [
  {
    icon: Clock,
    title: "Timed Nurture Sequences",
    desc: "Leads not ready to buy today get a structured sequence of timed touchpoints, keeping your brand top of mind until they are.",
  },
  {
    icon: FileText,
    title: "Educational Content Delivery",
    desc: "We deliver helpful content that addresses common objections and questions, moving leads closer to a decision naturally.",
  },
  {
    icon: Gift,
    title: "Timed Offers & Incentives",
    desc: "Relevant offers get delivered at the right point in the nurture sequence, giving hesitant leads a reason to act.",
  },
  {
    icon: Target,
    title: "Lead Scoring by Engagement",
    desc: "Leads get scored based on how they engage with nurture content, so your sales team knows exactly who's warming up.",
  },
  {
    icon: Filter,
    title: "Sales-Ready Handoff",
    desc: "Once a lead shows real buying signals, it gets flagged and handed to your sales team automatically, not left sitting in a queue.",
  },
  {
    icon: BarChart3,
    title: "Nurture Performance Tracking",
    desc: "We track engagement and conversion at each stage of the nurture sequence, refining it based on what's actually working.",
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Understanding Your Sales Cycle",
    desc: "We learn how long your typical sales cycle is and what objections or questions usually come up before someone's ready to buy.",
  },
  {
    number: "02",
    title: "Building the Nurture Sequence",
    desc: "We design the actual sequence of content, offers, and touchpoints ourselves, rather than handing you a generic tool template.",
  },
  {
    number: "03",
    title: "Connecting to Your CRM & Launch",
    desc: "The nurture sequence connects to your CRM so lead scores and sales-ready flags update automatically as it runs.",
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
    title: "Not a Lost Sale, Just Not Ready Yet",
    desc: "A lead that isn't ready to buy today doesn't mean a lost sale — our nurture automation keeps them warm until they are.",
  },
  {
    number: "002",
    title: "We Build the Sequence Ourselves",
    desc: "We don't sell you a tool subscription and walk away — we design the content and offers ourselves, based on your sales cycle.",
  },
  {
    number: "003",
    title: "Engagement-Based Scoring",
    desc: "Leads get scored based on real engagement with nurture content, not a generic time-based assumption.",
  },
  {
    number: "004",
    title: "CRM-Connected Handoff",
    desc: "Sales-ready leads get flagged and handed to your team automatically once they show genuine buying signals.",
  },
  {
    number: "005",
    title: "Reviewed Monthly",
    desc: "Every workflow is reviewed and improved monthly, not left running on autopilot and forgotten.",
  },
  {
    number: "006",
    title: "One Connected System",
    desc: "We treat lead nurturing as part of one connected system with email, WhatsApp, and CRM, not a separate campaign running blind.",
  },
];

const FAQS = [
  {
    question: "What is lead nurturing automation?",
    answer:
      "It's a system of timed content, offers, and touchpoints that keeps prospects engaged after their first interaction, until they're ready to talk to your sales team.",
  },
  {
    question: "How do you know when a lead is ready to talk to sales?",
    answer:
      "We score leads based on how they engage with nurture content — opens, clicks, and specific actions — and flag genuinely sales-ready leads automatically.",
  },
  {
    question: "Will nurturing feel spammy to my prospects?",
    answer:
      "No, sequences are designed around genuinely useful content and relevant offers timed to your sales cycle, not repetitive generic blasts.",
  },
  {
    question: "How long should a nurture sequence run?",
    answer:
      "It depends on your typical sales cycle — we design the sequence length and pacing around how your specific buyers actually decide.",
  },
  {
    question: "Does lead nurturing automation connect to our CRM?",
    answer:
      "Yes, nurture sequences connect to your CRM so lead scores and sales-ready flags update automatically as prospects engage.",
  },
];

export default function LeadNurturingAutomation() {
  return (
    <ServiceDetailPage
      sectionLabel="Marketing Automation"
      label="Lead Nurturing Automation"
      icon={Filter}
      description="A lead that isn't ready to buy today doesn't mean a lost sale. Our lead nurturing automation keeps prospects warm with timed content, reminders, and offers until they're ready to talk to your team."
      heroTitle="Lead Nurturing Automation in India"
      heroDescription="A lead that isn't ready to buy today doesn't mean a lost sale. Our lead nurturing automation keeps prospects warm with timed content, reminders, and offers until they're ready to talk to your team."
      capabilitiesHeading="What's Included in Our Lead Nurturing Automation"
      capabilities={CAPABILITIES}
      roadmapCarouselHeading="Our Lead Nurturing Process"
      roadmapCarouselSteps={ROADMAP_STEPS}
      differentiatorsHeading="What Makes Our Lead Nurturing Automation Different"
      differentiators={DIFFERENTIATORS}
      faqs={FAQS}
      whyChooseUsHeading="Lead Nurturing Automation Company"
      whyChooseUsText="BizzBuzz Creations builds lead nurturing automation for businesses across India, keeping prospects engaged with timed content until they're ready to buy. We're a marketing automation agency based in Prayagraj, helping businesses locally across Allahabad and Uttar Pradesh, as well as across India."
    />
  );
}
