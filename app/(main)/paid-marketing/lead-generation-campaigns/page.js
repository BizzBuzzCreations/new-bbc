import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Users,
  Rocket,
  Building2,
  Building,
  ShoppingCart,
  Handshake,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "Lead Generation Campaigns | BizzBuzz Creations",
  description:
    "Lead generation campaigns in India — smart targeting, landing pages, and offers that convert visitors into genuine, sales-ready leads, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/paid-marketing/lead-generation-campaigns",
  },
};

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Startups & Early-Stage Businesses",
    desc: "Startups need a steady stream of leads to prove demand and fuel early sales conversations. We build lean lead generation campaigns focused on volume that's actually sales-ready, not just cheap form fills.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMBs often generate leads that never convert because targeting and offers aren't aligned to what buyers want. We build lead generation sized for SMB budgets, focused on quality over raw volume.",
  },
  {
    icon: Building,
    title: "Enterprises & Large Organizations",
    desc: "Enterprises need lead generation that feeds into structured sales processes across multiple teams. We run lead generation at enterprise scale, integrated with CRM systems and sales handoff workflows.",
  },
  {
    icon: ShoppingCart,
    title: "B2B & Service Businesses",
    desc: "B2B and service businesses need leads that are genuinely ready for a sales conversation, not just curious clicks. We build offers and landing pages specifically designed to qualify leads before they reach your sales team.",
  },
  {
    icon: Handshake,
    title: "Agencies Needing a Lead Gen Partner",
    desc: "Agencies need a specialist partner for the campaign execution side of lead generation. We work as a white-label lead generation partner, delivering campaigns agencies can present as their own.",
  },
  {
    icon: RefreshCw,
    title: "Businesses Getting Leads That Never Close",
    desc: "Businesses generating leads that go nowhere need a structural fix to targeting and qualification, not more spend. We rebuild the targeting and offer strategy so leads actually match what your sales team can close.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Lead-Focused Targeting",
    desc: "Campaigns are targeted at audiences most likely to actually need your product or service, not just anyone who might click.",
    ctaText: "Know Our Services",
    services: [
      "Ideal Customer Profiling",
      "Audience Targeting Setup",
      "Intent-Based Targeting",
      "B2B Targeting Strategy",
      "Exclusion List Management",
      "Lookalike Audience Building",
      "Targeting Refinement",
      "Audience Performance Analysis",
    ],
  },
  {
    number: "02",
    title: "High-Converting Landing Pages",
    desc: "We design landing pages specifically built to capture leads, with clear offers and forms that don't lose visitors halfway through.",
    ctaText: "Know Our Services",
    services: [
      "Landing Page Design",
      "Landing Page Copywriting",
      "Form Optimization",
      "Landing Page A/B Testing",
      "Mobile Landing Page Optimization",
      "Load Speed Optimization",
      "Trust Signal Placement",
      "Conversion Rate Optimization",
    ],
  },
  {
    number: "03",
    title: "Offer & Lead Magnet Strategy",
    desc: "We craft offers and lead magnets genuinely valuable enough for prospects to hand over their contact details.",
    ctaText: "Know Our Services",
    services: [
      "Lead Magnet Development",
      "Offer Strategy",
      "Content Upgrade Creation",
      "Discount & Incentive Structuring",
      "Free Consultation Offers",
      "Webinar & Demo Offers",
      "Offer Testing",
      "Offer Performance Analysis",
    ],
  },
  {
    number: "04",
    title: "Lead Form & Call Campaigns",
    desc: "Lead form ads and call-focused campaigns make it effortless for interested prospects to reach out directly.",
    ctaText: "Know Our Services",
    services: [
      "Lead Form Ad Setup",
      "Call Extension Setup",
      "Click-to-Call Campaigns",
      "Instant Form Integration",
      "Call Tracking Setup",
      "Lead Form Optimization",
      "Multi-Step Form Setup",
      "Form Abandonment Reduction",
    ],
  },
  {
    number: "05",
    title: "Lead Quality Tracking",
    desc: "We track not just lead volume but lead quality, so your sales team spends time on prospects genuinely worth pursuing.",
    ctaText: "Know Our Services",
    services: [
      "Lead Scoring Setup",
      "Lead Quality Reporting",
      "Sales Feedback Loops",
      "Cost-Per-Qualified-Lead Tracking",
      "Lead Source Attribution",
      "Conversion-to-Sale Tracking",
      "Lead Quality Dashboards",
      "Disqualified Lead Analysis",
    ],
  },
  {
    number: "06",
    title: "Nurture-Ready Lead Handoff",
    desc: "Leads are captured and organized in a way that makes handoff to your sales or nurture process smooth, not chaotic.",
    ctaText: "Know Our Services",
    services: [
      "CRM Integration",
      "Lead Routing Setup",
      "Handoff Workflow Design",
      "Lead Notification Automation",
      "Sales Team Handoff Documentation",
      "Nurture Sequence Handoff",
      "Response Time Tracking",
      "Handoff Process Auditing",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Define a Good Lead",
    desc: "We learn exactly what a genuinely good, sales-ready lead looks like for your business before building any campaign.",
  },
  {
    number: "02",
    title: "Offer & Landing Page Build",
    desc: "We craft an offer and landing page designed specifically to convert visitors into leads, not just generate traffic.",
  },
  {
    number: "03",
    title: "Targeting & Campaign Setup",
    desc: "We build campaigns around audiences most likely to match your ideal customer profile, not broad reach for its own sake.",
  },
  {
    number: "04",
    title: "Launch & Real-Time Optimization",
    desc: "Campaigns launch with daily monitoring, adjusting targeting and creative as real lead quality data comes in.",
  },
  {
    number: "05",
    title: "Lead Handoff & Feedback Loop",
    desc: "We set up handoff to your sales team and build a feedback loop so lead quality insights inform ongoing optimization.",
  },
  {
    number: "06",
    title: "Scale & Report on Lead Quality",
    desc: "We scale what's generating genuinely good leads and report transparently on volume and quality every month.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Calendar-Filling, Not Just Inbox-Filling",
    desc: "Our lead generation marketing services are engineered to fill your calendar, not just your inbox with unqualified contacts.",
  },
  {
    number: "02",
    title: "Quality Over Volume",
    desc: "We track lead quality alongside volume, so your sales team's time isn't wasted chasing dead ends.",
  },
  {
    number: "03",
    title: "Conversion-Built Landing Pages",
    desc: "Landing pages are designed specifically to capture leads, with offers and forms that don't lose visitors halfway through.",
  },
  {
    number: "04",
    title: "Smart Targeting",
    desc: "We combine smart targeting with offers that convert visitors into genuine, sales-ready leads.",
  },
  {
    number: "05",
    title: "Transparent Numbers",
    desc: "We're honest about lead volume and quality, obsessed with getting you a better cost per lead every month.",
  },
  {
    number: "06",
    title: "A Team, Not a Vendor",
    desc: "Think of us less like a vendor and more like a hired paid marketing team pushing for your growth every day.",
  },
];

const FAQS = [
  {
    question: "What counts as a 'good' lead in a lead generation campaign?",
    answer:
      "A good lead is someone genuinely likely to become a customer — we define this together with you before building any campaign so quality, not just volume, is the target.",
  },
  {
    question: "Do you build the landing pages too?",
    answer:
      "Yes, we design landing pages specifically built to convert visitors into leads, with offers and forms tailored to your campaign.",
  },
  {
    question: "Which platforms do you use for lead generation?",
    answer:
      "We typically use Google and Meta ads, choosing the platform mix based on where your ideal customers actually spend time.",
  },
  {
    question: "How do you track lead quality, not just quantity?",
    answer:
      "We work with you to define what a sales-ready lead looks like, then track conversion from lead to customer, not just form fills.",
  },
  {
    question: "How much does a lead generation campaign cost?",
    answer:
      "Costs depend on your industry, targeting, and ad spend — we'll recommend a realistic budget and optimize it toward your cost-per-lead target.",
  },
];

export default function LeadGenerationCampaigns() {
  return (
    <ServiceDetailPage
      sectionLabel="Paid Marketing"
      label="Lead Generation Campaigns"
      icon={Users}
      description="Our lead generation marketing services are engineered to fill your calendar, not just your inbox. We combine smart targeting, landing pages, and offers that convert visitors into genuine, sales-ready leads."
      heroTitle="Lead Generation Campaigns in India"
      heroDescription="Our lead generation marketing services are engineered to fill your calendar, not just your inbox. We combine smart targeting, landing pages, and offers that convert visitors into genuine, sales-ready leads."
      capabilitiesHeading="Built for Businesses Ready for Leads That Actually Close"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our Lead Generation Campaigns"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us to Run Their Lead Generation"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Visitors Into Sales-Ready Leads"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Generating Leads Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we build every lead generation campaign, with the same rigor whether a client is nearby or overseas. We work with startups, SMBs, and enterprises across India, sizing campaigns to each business's actual sales process and lead quality bar. For businesses looking to run lead generation beyond India, we manage campaigns remotely, tracking lead quality across markets and time zones to the same standard regardless of location. Whether you're a startup filling your first sales pipeline or an enterprise feeding leads into multiple sales teams, our approach starts with defining what a genuinely good lead looks like for you."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready to Fill Your Calendar, Not Just Your Inbox?"
      ctaText="Whether you need a fresh lead generation campaign built from scratch, better-qualified leads from your current channels, or a full-funnel program feeding your sales team, the right approach depends on what a good lead looks like for your business. Let's talk through your sales process and scope what lead generation would actually involve."
      ctaPrimaryText="Talk to a Lead Generation Specialist"
      ctaSecondaryText="Get Your Free Lead Gen Consultation"
    />
  );
}
