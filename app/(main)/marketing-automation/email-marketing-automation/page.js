import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Mail,
  Rocket,
  Building2,
  Building,
  ShoppingCart,
  Handshake,
  RefreshCw,
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
    icon: Rocket,
    title: "Startups & Early-Stage Businesses",
    desc: "Startups often send one-off emails manually until the list grows too large to manage that way. We set up lightweight email automation early, so welcome and follow-up sequences run without founder time each send.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMBs frequently have a subscriber list but no structured sequence sending emails automatically. We build email automation sized for SMB budgets, turning an idle list into a working sales channel.",
  },
  {
    icon: Building,
    title: "Enterprises & Large Organizations",
    desc: "Enterprises need email automation that segments large audiences and integrates with existing marketing systems. We build enterprise-scale email automation with segmentation, compliance, and reporting built in.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce & Retail Brands",
    desc: "Ecommerce stores lose real revenue to abandoned carts and one-time buyers who never return. We build cart recovery and re-engagement sequences specifically tuned to ecommerce buying behavior.",
  },
  {
    icon: Handshake,
    title: "Agencies Managing Client Email Programs",
    desc: "Agencies running email marketing for clients need reliable sequence-building capacity. We work as a white-label email automation partner, building sequences agencies can present as their own work.",
  },
  {
    icon: RefreshCw,
    title: "Businesses Migrating Email Platforms",
    desc: "Businesses switching email platforms need sequences and lists carried over without breaking deliverability. We handle structured migrations, rebuilding automation properly on the new platform.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Welcome & Onboarding Sequences",
    desc: "New subscribers and customers get a structured welcome sequence that introduces your brand and moves them toward their first purchase.",
    ctaText: "Know Our Services",
    services: [
      "Welcome Sequence Design",
      "Onboarding Email Series",
      "Brand Introduction Emails",
      "First-Purchase Nudge Emails",
      "New Subscriber Segmentation",
      "Sign-Up Confirmation Flows",
      "Welcome Offer Automation",
      "Sequence Copywriting",
    ],
  },
  {
    number: "02",
    title: "Abandoned Cart Reminders",
    desc: "Shoppers who leave without checking out get timely, well-timed reminder emails, recovering sales you'd otherwise lose.",
    ctaText: "Know Our Services",
    services: [
      "Cart Abandonment Sequences",
      "Recovery Email Design",
      "Discount Trigger Emails",
      "Multi-Step Reminder Flows",
      "Browse Abandonment Emails",
      "Checkout Recovery Automation",
      "Timing Optimization",
      "Recovery Rate Tracking",
    ],
  },
  {
    number: "03",
    title: "Re-Engagement Campaigns",
    desc: "Inactive subscribers get targeted campaigns designed to bring them back, rather than quietly going ignored.",
    ctaText: "Know Our Services",
    services: [
      "Win-Back Campaigns",
      "Inactivity Trigger Rules",
      "Re-Engagement Offers",
      "List Segmentation for Inactivity",
      "Sunset Flow Design",
      "Reactivation Sequences",
      "Preference Update Emails",
      "Unsubscribe Prevention Flows",
    ],
  },
  {
    number: "04",
    title: "Behavior-Triggered Emails",
    desc: "Emails trigger automatically based on real customer actions — a click, a purchase, a browse — not a fixed, generic send schedule.",
    ctaText: "Know Our Services",
    services: [
      "Behavioral Trigger Setup",
      "Click-Based Automation",
      "Purchase-Triggered Emails",
      "Browse-Based Triggers",
      "Event-Based Sequences",
      "Dynamic Content Rules",
      "Trigger Testing",
      "Automation Rule Mapping",
    ],
  },
  {
    number: "05",
    title: "Subject Line & Content Testing",
    desc: "We test subject lines and content variations continuously, so email performance improves over time instead of staying flat.",
    ctaText: "Know Our Services",
    services: [
      "A/B Subject Line Testing",
      "Content Variation Testing",
      "Send Time Testing",
      "CTA Testing",
      "Design Testing",
      "Deliverability Testing",
      "Performance Benchmarking",
      "Test Result Reporting",
    ],
  },
  {
    number: "06",
    title: "Open Rate & Conversion Tracking",
    desc: "Every email is tracked for opens, clicks, and conversions, giving you a clear picture of what's actually working.",
    ctaText: "Know Our Services",
    services: [
      "Open Rate Tracking",
      "Click-Through Tracking",
      "Conversion Attribution",
      "Revenue Reporting",
      "Sequence Performance Dashboards",
      "List Health Reporting",
      "Deliverability Monitoring",
      "Monthly Performance Reports",
    ],
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
    title: "Sequence & Content Planning",
    desc: "We plan the specific sequences needed — welcome, cart recovery, re-engagement — and the messaging each one requires.",
  },
  {
    number: "03",
    title: "Building Sequences & Messaging",
    desc: "We design the actual email sequences and write the messaging ourselves, rather than handing you a generic tool template.",
  },
  {
    number: "04",
    title: "Connecting to Your CRM & Launch",
    desc: "Every sequence gets connected to your CRM so your sales team wakes up to warm leads, not cold silence, once it goes live.",
  },
  {
    number: "05",
    title: "Testing & Deliverability Checks",
    desc: "We test sequences end-to-end and check deliverability before launch, so emails land in inboxes, not spam folders.",
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
    title: "Timed, Tested, and Tracked",
    desc: "Every email is timed, tested, and tracked, not just scheduled and forgotten after launch.",
  },
  {
    number: "02",
    title: "Behavior-Based, Not Generic Blasts",
    desc: "Emails trigger based on real customer behavior, not a one-size-fits-all newsletter blast to your whole list.",
  },
  {
    number: "03",
    title: "We Write the Messaging Ourselves",
    desc: "We don't sell you a tool subscription and walk away — we build the sequence and write the messaging ourselves.",
  },
  {
    number: "04",
    title: "CRM-Connected",
    desc: "Email automation connects directly to your CRM, so engagement data feeds into lead status automatically.",
  },
  {
    number: "05",
    title: "Reviewed Monthly",
    desc: "Every workflow is reviewed and improved monthly, not left running on autopilot and forgotten.",
  },
  {
    number: "06",
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
      capabilitiesHeading="Built for Businesses Ready to Put Their Email List to Work"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our Email Marketing Automation"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us to Automate Their Email Marketing"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn a Quiet List Into a Working Email Channel"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Automating Email Marketing Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we build every email automation engagement, with the same rigor whether a client is nearby or overseas. We work with startups, SMBs, and enterprises across India, sizing sequences to each business's actual list size and customer journey. For businesses looking to automate email beyond India, we build email marketing automation remotely, working across time zones to reach the same standard of reliability regardless of location. Whether you're a startup sending your first welcome sequence or an enterprise segmenting a large list, our approach starts with mapping where your customers actually stall."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready to Turn Your Email List Into Real Revenue?"
      ctaText="Whether you need a welcome sequence built from scratch, cart recovery emails recovering lost sales, or a full re-engagement program for an inactive list, the right setup depends on your actual customer journey. Let's talk through your list and scope what email automation would actually involve."
      ctaPrimaryText="Talk to an Email Automation Specialist"
      ctaSecondaryText="Get Your Free Email Automation Consultation"
    />
  );
}
