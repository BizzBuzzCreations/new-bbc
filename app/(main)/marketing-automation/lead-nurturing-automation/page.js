import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Filter,
  Rocket,
  Building2,
  Building,
  ShoppingCart,
  Handshake,
  RefreshCw,
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
    icon: Rocket,
    title: "Startups & Early-Stage Businesses",
    desc: "Startups often generate leads faster than they can personally follow up with each one. We build lightweight nurture sequences early, so early-stage leads stay warm without founder time on every touchpoint.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMBs frequently have leads that go cold simply from lack of consistent follow-up. We build lead nurturing automation sized for SMB budgets, keeping prospects engaged until they're ready to talk.",
  },
  {
    icon: Building,
    title: "Enterprises & Large Organizations",
    desc: "Enterprises need nurture sequences that work across longer, multi-stakeholder sales cycles. We build enterprise-scale nurturing automation aligned with complex buying committees and longer decision timelines.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce & Retail Brands",
    desc: "Ecommerce shoppers who browse but don't buy need nurturing that brings them back at the right moment. We build nurture sequences tuned to ecommerce browsing behavior and purchase timing.",
  },
  {
    icon: Handshake,
    title: "Agencies Managing Client Lead Pipelines",
    desc: "Agencies generating leads for clients need those leads nurtured properly, not just handed off cold. We build nurture sequences agencies can offer as part of a complete lead generation service.",
  },
  {
    icon: RefreshCw,
    title: "Businesses Reviving a Stale Lead List",
    desc: "Businesses sitting on years of uncontacted leads need a structured way to re-engage them. We build re-engagement nurture sequences that revive dormant lists without feeling spammy.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Timed Nurture Sequences",
    desc: "Leads not ready to buy today get a structured sequence of timed touchpoints, keeping your brand top of mind until they are.",
    ctaText: "Know Our Services",
    services: [
      "Nurture Sequence Design",
      "Timed Touchpoint Planning",
      "Multi-Channel Sequencing",
      "Drip Campaign Setup",
      "Sequence Pacing Strategy",
      "Long-Cycle Nurture Flows",
      "Re-Entry Rule Design",
      "Sequence Copywriting",
    ],
  },
  {
    number: "02",
    title: "Educational Content Delivery",
    desc: "We deliver helpful content that addresses common objections and questions, moving leads closer to a decision naturally.",
    ctaText: "Know Our Services",
    services: [
      "Educational Content Planning",
      "Objection-Handling Content",
      "Case Study Delivery",
      "Content Sequencing",
      "Resource Drip Campaigns",
      "FAQ-Based Nurture Content",
      "Content Personalization",
      "Content Performance Tracking",
    ],
  },
  {
    number: "03",
    title: "Timed Offers & Incentives",
    desc: "Relevant offers get delivered at the right point in the nurture sequence, giving hesitant leads a reason to act.",
    ctaText: "Know Our Services",
    services: [
      "Offer Timing Strategy",
      "Incentive Sequence Design",
      "Discount Trigger Automation",
      "Limited-Time Offer Flows",
      "Upsell Nurture Offers",
      "Offer Personalization",
      "A/B Testing Offers",
      "Conversion Tracking",
    ],
  },
  {
    number: "04",
    title: "Lead Scoring by Engagement",
    desc: "Leads get scored based on how they engage with nurture content, so your sales team knows exactly who's warming up.",
    ctaText: "Know Our Services",
    services: [
      "Engagement Scoring Models",
      "Behavioral Scoring Rules",
      "Content Interaction Tracking",
      "Score Threshold Setup",
      "Multi-Touch Scoring",
      "Scoring Dashboard Setup",
      "Score Decay Rules",
      "Sales-Ready Score Alerts",
    ],
  },
  {
    number: "05",
    title: "Sales-Ready Handoff",
    desc: "Once a lead shows real buying signals, it gets flagged and handed to your sales team automatically, not left sitting in a queue.",
    ctaText: "Know Our Services",
    services: [
      "Sales-Ready Flagging",
      "Automated Handoff Rules",
      "CRM Task Creation",
      "Sales Notification Automation",
      "Handoff Context Notes",
      "Lead Routing on Handoff",
      "Handoff SLA Tracking",
      "Post-Handoff Follow-Up",
    ],
  },
  {
    number: "06",
    title: "Nurture Performance Tracking",
    desc: "We track engagement and conversion at each stage of the nurture sequence, refining it based on what's actually working.",
    ctaText: "Know Our Services",
    services: [
      "Sequence Performance Dashboards",
      "Stage Conversion Tracking",
      "Drop-Off Analysis",
      "Engagement Rate Reporting",
      "Nurture-to-Sale Attribution",
      "Sequence A/B Testing",
      "Monthly Performance Reports",
      "Continuous Sequence Refinement",
    ],
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
    title: "Content & Offer Planning",
    desc: "We plan the specific content, offers, and touchpoints needed at each stage of the nurture sequence before building anything.",
  },
  {
    number: "03",
    title: "Building the Nurture Sequence",
    desc: "We design the actual sequence of content, offers, and touchpoints ourselves, rather than handing you a generic tool template.",
  },
  {
    number: "04",
    title: "Connecting to Your CRM & Launch",
    desc: "The nurture sequence connects to your CRM so lead scores and sales-ready flags update automatically as it runs.",
  },
  {
    number: "05",
    title: "Testing & Scoring Calibration",
    desc: "We test the sequence and calibrate lead scoring thresholds before launch, so sales-ready flags actually mean something.",
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
    title: "Not a Lost Sale, Just Not Ready Yet",
    desc: "A lead that isn't ready to buy today doesn't mean a lost sale — our nurture automation keeps them warm until they are.",
  },
  {
    number: "02",
    title: "We Build the Sequence Ourselves",
    desc: "We don't sell you a tool subscription and walk away — we design the content and offers ourselves, based on your sales cycle.",
  },
  {
    number: "03",
    title: "Engagement-Based Scoring",
    desc: "Leads get scored based on real engagement with nurture content, not a generic time-based assumption.",
  },
  {
    number: "04",
    title: "CRM-Connected Handoff",
    desc: "Sales-ready leads get flagged and handed to your team automatically once they show genuine buying signals.",
  },
  {
    number: "05",
    title: "Reviewed Monthly",
    desc: "Every workflow is reviewed and improved monthly, not left running on autopilot and forgotten.",
  },
  {
    number: "06",
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
      capabilitiesHeading="Built for Businesses Ready to Stop Losing Leads to Silence"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our Lead Nurturing Automation"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us to Nurture Their Leads"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Cold Leads Into Sales-Ready Conversations"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Nurturing Leads Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we build every lead nurturing engagement, with the same rigor whether a client is nearby or overseas. We work with startups, SMBs, and enterprises across India, sizing sequences to each business's actual sales cycle and lead volume. For businesses looking to nurture leads beyond India, we build lead nurturing automation remotely, working across time zones to reach the same standard of reliability regardless of location. Whether you're a startup nurturing your first batch of leads or an enterprise managing a long, multi-stakeholder sales cycle, our approach starts with understanding exactly how your buyers actually decide."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready to Stop Losing Leads to Silence?"
      ctaText="Whether you need a simple nurture sequence for leads not ready to buy, a full re-engagement program for a dormant list, or scoring that tells your sales team exactly who's ready, the right setup depends on your actual sales cycle. Let's talk through your leads and scope what nurturing automation would actually involve."
      ctaPrimaryText="Talk to a Lead Nurturing Specialist"
      ctaSecondaryText="Get Your Free Lead Nurturing Consultation"
    />
  );
}
