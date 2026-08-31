import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Filter,
  Building2,
  Clock,
  TrendingUp,
  Target,
  ShoppingCart,
  Share2,
} from "lucide-react";

export const metadata = {
  title: "Lead Nurturing Automation Services | BizzBuzz Creations",
  description:
    "BizzBuzz Creations provides lead nurturing automation that moves prospects toward sales across India and worldwide.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/marketing-automation/lead-nurturing-automation",
  },
};

const CAPABILITIES = [
  {
    icon: Building2,
    title: "B2B Companies With Long Sales Cycles",
    desc: "B2B buyers often need weeks or months of consideration before they're ready to buy, and leads go cold without structured nurturing during that time. We provide b2b lead nurturing services built specifically for these longer decision journeys.",
  },
  {
    icon: Clock,
    title: "Businesses Losing Leads to Inconsistent Manual Follow-Up",
    desc: "Manual follow-up is easy to delay when sales teams get busy, and leads quietly go cold as a result. We work as a lead nurturing agency that keeps follow-up consistent regardless of sales team bandwidth.",
  },
  {
    icon: TrendingUp,
    title: "Companies Generating Leads Faster Than Sales Can Follow Up",
    desc: "Marketing generating strong lead volume means little if sales can't keep pace with timely follow-up. We provide automated lead nurturing company support that keeps every lead engaged while sales works through the queue.",
  },
  {
    icon: Target,
    title: "Businesses Needing Lead Scoring to Prioritize Sales Effort",
    desc: "Sales teams waste time on unqualified leads when there's no clear way to prioritize who's actually ready to buy. We build lead scoring and nurturing services that flag genuinely sales-ready prospects.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Brands Needing Pre-Purchase Nurture Sequences",
    desc: "Ecommerce shoppers researching higher-consideration products often need nurturing before they're ready to commit to a purchase. We build nurture sequence for sales leads applied specifically to pre-purchase ecommerce behavior.",
  },
  {
    icon: Share2,
    title: "Companies Needing Nurturing Across Multiple Channels Together",
    desc: "Leads increasingly expect follow-up across more than just email alone. We provide lead nurturing workflow design that coordinates nurturing across email, WhatsApp, and other channels together.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Lead Nurturing Strategy & Mapping",
    desc: "A nurturing plan built around your actual sales cycle and buyer journey, not a generic template.",
    ctaText: "Know Our Services",
    services: [
      "Lead Nurturing Strategy",
      "Buyer Journey Mapping",
      "Nurture Trigger Planning",
      "Content Mapping to Funnel Stage",
      "Nurture Workflow Design",
      "Sales Cycle Analysis",
      "Nurture Goal Setting",
      "Nurturing Audit",
    ],
  },
  {
    number: "02",
    title: "Nurture Sequence Development",
    desc: "Sequences that address genuine questions and objections at each stage of consideration, not generic drip content.",
    ctaText: "Know Our Services",
    services: [
      "Email Nurture Sequences",
      "Multi-Touch Drip Campaigns",
      "Educational Nurture Content",
      "Re-Engagement Sequences",
      "Objection-Handling Content Flows",
      "Case Study & Proof Sequences",
      "Event-Triggered Nurture Flows",
      "Sequence Timing Optimization",
    ],
  },
  {
    number: "03",
    title: "Lead Scoring & Qualification",
    desc: "A scoring system that reflects genuine buying intent, so sales knows exactly who to prioritize.",
    ctaText: "Know Our Services",
    services: [
      "Lead Scoring Model Development",
      "Behavioral Scoring Setup",
      "Demographic Scoring Criteria",
      "Sales-Ready Threshold Definition",
      "Scoring Automation Implementation",
      "Lead Grade & Tier Setup",
      "Scoring Model Refinement",
      "Qualification Reporting",
    ],
  },
  {
    number: "04",
    title: "Multi-Channel Nurture Automation",
    desc: "Nurturing coordinated across the channels your prospects actually use, not email alone.",
    ctaText: "Know Our Services",
    services: [
      "Multi-Channel Nurture Campaigns",
      "Email & WhatsApp Nurture Integration",
      "Retargeting Ad Nurture Sync",
      "SMS Nurture Sequences",
      "Social Media Nurture Touchpoints",
      "Cross-Channel Consistency Management",
      "Channel Performance Comparison",
      "Unified Nurture Calendar",
    ],
  },
  {
    number: "05",
    title: "CRM & Sales Handoff Integration",
    desc: "A clean, automated handoff from nurturing to sales, so sales-ready leads never sit unnoticed.",
    ctaText: "Know Our Services",
    services: [
      "CRM Integration for Nurturing",
      "Sales-Ready Lead Handoff",
      "Automated Sales Notifications",
      "Lead Activity Tracking",
      "Sales Team Alert Automation",
      "Handoff Process Documentation",
      "CRM Workflow Automation",
      "Sales & Marketing Alignment Support",
    ],
  },
  {
    number: "06",
    title: "Nurturing Analytics & Optimization",
    desc: "Clear reporting on nurture-to-sale conversion, not just engagement metrics that don't reflect real pipeline impact.",
    ctaText: "Know Our Services",
    services: [
      "Nurture Performance Analytics",
      "Conversion Rate Tracking",
      "Funnel Drop-Off Analysis",
      "A/B Testing Nurture Content",
      "Monthly Nurturing Reports",
      "Lead Velocity Tracking",
      "Nurture ROI Analysis",
      "Ongoing Strategy Refinement",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Buyer Journey & Sales Cycle Discovery",
    desc: "We start by understanding your specific sales cycle, buyer journey, and where leads are currently falling through the cracks.",
  },
  {
    number: "02",
    title: "Nurture Strategy & Scoring Design",
    desc: "We design the nurturing strategy and lead scoring model tailored to your genuine buying signals and sales priorities.",
  },
  {
    number: "03",
    title: "Sequence & Content Development",
    desc: "We build out nurture content and sequences addressing real questions and objections at each stage of consideration.",
  },
  {
    number: "04",
    title: "Automation & CRM Integration",
    desc: "We implement the automation and integrate it with your CRM, ensuring sales has full visibility into lead status.",
  },
  {
    number: "05",
    title: "Launch & Initial Testing",
    desc: "Nurturing launches with close monitoring in the early weeks, testing content and timing to identify what's actually working.",
  },
  {
    number: "06",
    title: "Ongoing Optimization & Reporting",
    desc: "We provide regular reporting on nurture-to-sale conversion, continuing to refine sequences based on real performance data.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Nurturing Built Around Your Actual Sales Cycle, Not a Generic Template",
    desc: "We design sequences that match how long and complex your specific sales process actually is, rather than applying the same nurturing timeline to every business regardless of buying complexity.",
  },
  {
    number: "02",
    title: "Lead Scoring That Actually Prioritizes Sales Team Effort",
    desc: "We build scoring models around genuine buying signals specific to your business, so sales spends time on the leads most likely to actually convert.",
  },
  {
    number: "03",
    title: "Multi-Channel Nurturing, Not Just Email Alone",
    desc: "We coordinate nurturing across email, WhatsApp, and other relevant channels, since relying on email alone increasingly misses prospects who respond better elsewhere.",
  },
  {
    number: "04",
    title: "CRM Integration That Keeps Sales and Marketing in Sync",
    desc: "We integrate nurturing directly with your CRM, ensuring sales always has visibility into where a lead is in the nurturing process without manual updates.",
  },
  {
    number: "05",
    title: "Content Mapped to Where a Prospect Actually Is in Their Journey",
    desc: "We build content specifically for each stage of consideration, awareness, evaluation, decision, rather than sending the same generic messaging regardless of where a prospect actually stands.",
  },
  {
    number: "06",
    title: "Transparent Reporting on Nurture-to-Sale Conversion, Not Just Engagement",
    desc: "We report on how nurturing actually contributes to closed sales, not just open and click rates that don't reflect genuine pipeline impact.",
  },
];

const FAQS = [
  {
    question: "How much does lead nurturing automation cost in India?",
    answer:
      "Cost depends on scope, a single nurture sequence costs less than a full multi-channel nurturing system with lead scoring and CRM integration. We scope pricing after understanding your specific sales cycle, rather than offering a flat rate upfront.",
  },
  {
    question: "What's the difference between lead nurturing and email marketing?",
    answer:
      "Email marketing broadly covers any email communication with your audience, while lead nurturing specifically focuses on moving a prospect through their buying journey toward a sale, often using multiple channels and lead scoring, not just email alone.",
  },
  {
    question: "Can you integrate nurturing with our existing CRM?",
    answer:
      "Yes, CRM integration is a core part of our service, ensuring nurturing activity and lead status stay visible to your sales team without requiring manual updates.",
  },
  {
    question: "How does lead scoring actually work?",
    answer:
      "Lead scoring assigns points based on behaviors and characteristics that indicate genuine buying intent, website visits, content downloads, email engagement, so leads crossing a certain threshold get flagged as sales-ready. We build the specific model around your actual buying signals.",
  },
  {
    question: "Can nurturing work across email, WhatsApp, and other channels together?",
    answer:
      "Yes, multi-channel nurturing is a core part of our approach, coordinating touchpoints across the channels your specific prospects actually respond to, rather than relying on email alone.",
  },
  {
    question: "How long before nurturing automation starts producing sales-ready leads?",
    answer:
      "Timeline depends on your sales cycle length, shorter B2C cycles can show results within weeks, while longer B2B cycles typically take a few months for nurturing to meaningfully move leads toward sales-readiness.",
  },
];

export default function LeadNurturingAutomation() {
  return (
    <ServiceDetailPage
      sectionLabel="Marketing Automation"
      label="Lead Nurturing Automation"
      icon={Filter}
      description="Lead nurturing automation built to move prospects toward a sale automatically, not leads that go cold waiting for follow-up."
      heroTitle="Get Leads That Warm Themselves Up Before Sales Calls"
      heroDescription="Lead nurturing automation built to move prospects toward a sale automatically, not leads that go cold waiting for follow-up."
      heroCtaText="Get a Free Lead Nurturing Audit"
      capabilitiesHeading="Built for Businesses Losing Leads to Slow Follow-Up"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything Between a New Lead and a Sales-Ready Prospect"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us With Their Lead Nurturing"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Keep Leads Warm Until They're Ready to Buy"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Nurturing Leads Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every lead nurturing project, with the same attention to sales cycle nuance whether a client is nearby or across the world. We provide lead nurturing automation services for businesses across India, built around each business's specific buyer journey and sales process. For businesses looking for a lead nurturing agency beyond India, we support clients worldwide remotely, delivering the same b2b lead nurturing services standard of work regardless of time zone. Whether you're a B2B company in Prayagraj with a long sales cycle or a business anywhere else generating leads faster than sales can follow up, our approach starts with the same question: where are your leads actually going cold."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for Leads That Nurture Themselves?"
      ctaText="Whether your leads go cold waiting for manual follow-up, your sales team can't keep pace with lead volume, or you simply don't have a nurturing process in place yet, hoping leads stay warm on their own was never a real strategy. Let's talk through your sales cycle and scope what real lead nurturing automation would actually involve."
      ctaPrimaryText="Talk to a Lead Nurturing Specialist"
      ctaSecondaryText="Get Your Free Lead Nurturing Audit"
    />
  );
}
