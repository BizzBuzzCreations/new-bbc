import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  TrendingUp,
  Rocket,
  Building2,
  Building,
  ShoppingCart,
  Handshake,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "Performance Marketing & ROI Campaigns | BizzBuzz Creations",
  description:
    "Performance marketing and ROI-focused campaigns in India — every rupee tracked against one metric that matters: return on investment, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/paid-marketing/performance-marketing-roi-campaigns",
  },
};

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Startups & Early-Stage Businesses",
    desc: "Startups need every rupee of limited budget proving itself. We build performance marketing around a clear ROI target from campaign one, so startups know exactly what's working before scaling spend.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMBs often run ads across channels without a unified view of what's actually returning money. We manage performance marketing sized for SMB budgets, tracking ROI across every channel in one place.",
  },
  {
    icon: Building,
    title: "Enterprises & Large Organizations",
    desc: "Enterprises need ROI tracking that holds up across multiple campaigns, channels, and business units. We run performance marketing at enterprise scale, with attribution built to survive complex, multi-touch buying journeys.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce & D2C Brands",
    desc: "Ecommerce brands live and die by return on ad spend across every channel they run. We manage performance marketing tied directly to revenue and margin, not just clicks and impressions.",
  },
  {
    icon: Handshake,
    title: "Agencies Needing a Performance Partner",
    desc: "Agencies need a specialist partner for the tracking and optimization side of performance marketing. We work as a white-label performance marketing partner, handling the ROI-focused execution agencies can present as their own.",
  },
  {
    icon: RefreshCw,
    title: "Businesses Without Reliable Tracking Today",
    desc: "Businesses running ads without proper conversion tracking are essentially flying blind. We set up accurate tracking and attribution first, so every future decision is based on real data.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "ROI-Focused Campaign Strategy",
    desc: "Every campaign is planned around a target return on investment from day one, not built around impressions or reach for their own sake.",
    ctaText: "Know Our Services",
    services: [
      "ROI Target Setting",
      "Campaign Strategy Development",
      "Channel Selection Planning",
      "Budget-to-ROI Modeling",
      "Goal Alignment Workshops",
      "Success Metric Definition",
      "Baseline Performance Analysis",
      "Strategy Documentation",
    ],
  },
  {
    number: "02",
    title: "Cross-Platform Budget Allocation",
    desc: "We shift budget across Google, Meta, and other channels based on where it's actually generating the best return.",
    ctaText: "Know Our Services",
    services: [
      "Cross-Channel Budget Planning",
      "Channel Performance Comparison",
      "Dynamic Budget Reallocation",
      "Multi-Platform Campaign Management",
      "Channel Mix Optimization",
      "Spend Forecasting",
      "Platform ROI Benchmarking",
      "Budget Governance Reporting",
    ],
  },
  {
    number: "03",
    title: "Conversion Tracking Setup",
    desc: "Proper conversion tracking and attribution get set up first, so every decision after that is based on real data, not guesses.",
    ctaText: "Know Our Services",
    services: [
      "Conversion Tracking Setup",
      "Pixel & Tag Implementation",
      "Attribution Model Setup",
      "CRM Integration",
      "Server-Side Tracking Setup",
      "Multi-Touch Attribution",
      "Tracking Audit & QA",
      "Analytics Configuration",
    ],
  },
  {
    number: "04",
    title: "Continuous Testing & Iteration",
    desc: "We continuously test creatives, audiences, and landing pages, keeping what performs and cutting what doesn't.",
    ctaText: "Know Our Services",
    services: [
      "A/B Testing Programs",
      "Creative Testing",
      "Audience Testing",
      "Landing Page Testing",
      "Bid Strategy Testing",
      "Test Result Analysis",
      "Iterative Optimization Cycles",
      "Testing Roadmap Planning",
    ],
  },
  {
    number: "05",
    title: "Revenue & ROI Reporting",
    desc: "Reports focus on revenue and return on ad spend, not vanity numbers like impressions or generic engagement.",
    ctaText: "Know Our Services",
    services: [
      "Revenue Reporting",
      "ROAS Dashboards",
      "Cost-Per-Acquisition Reporting",
      "Custom ROI Dashboards",
      "Weekly Performance Reviews",
      "Monthly Business Reviews",
      "Channel-Level ROI Breakdown",
      "Executive Summary Reporting",
    ],
  },
  {
    number: "06",
    title: "Scaling What Works",
    desc: "Once a campaign proves its ROI, we scale spend into it methodically, rather than spreading budget thin across untested ideas.",
    ctaText: "Know Our Services",
    services: [
      "Scaling Strategy Development",
      "Incremental Budget Scaling",
      "Diminishing Returns Monitoring",
      "New Channel Expansion",
      "Scaled Campaign Structuring",
      "Growth Forecasting",
      "Risk-Managed Scaling",
      "Long-Term Growth Planning",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Define Success Metrics",
    desc: "We agree on what a genuinely good result looks like for your business — revenue, cost per acquisition, or a specific ROI target.",
  },
  {
    number: "02",
    title: "Tracking & Attribution Setup",
    desc: "We set up proper conversion tracking so every campaign decision after this point is based on real data, not assumptions.",
  },
  {
    number: "03",
    title: "Channel & Budget Strategy",
    desc: "We decide which channels to run and how to split budget across them, based on where your specific audience actually converts.",
  },
  {
    number: "04",
    title: "Launch & Continuous Testing",
    desc: "Campaigns launch across the right channels with ongoing testing of creatives, audiences, and landing pages.",
  },
  {
    number: "05",
    title: "Cross-Channel Optimization",
    desc: "We shift budget between channels based on real ROI data, moving spend toward what's actually generating returns.",
  },
  {
    number: "06",
    title: "Scale & Report on ROI",
    desc: "We scale spend into what's proving its return and report transparently on revenue and ROI, not vanity metrics.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Performance-First Campaigns",
    desc: "Every campaign we run is tracked against one metric that matters: return on investment — no vanity numbers, no fluff.",
  },
  {
    number: "02",
    title: "Cross-Platform Optimization",
    desc: "We move budget across Google, Meta, and other channels based on real performance data, not a fixed split.",
  },
  {
    number: "03",
    title: "Tracking Done Right",
    desc: "Proper conversion tracking and attribution are set up first, so every later decision is based on accurate data.",
  },
  {
    number: "04",
    title: "Continuous Testing",
    desc: "We test creatives, audiences, and landing pages continuously, rather than launching once and leaving campaigns untouched.",
  },
  {
    number: "05",
    title: "Transparent ROI Reporting",
    desc: "We're honest about what's working and what isn't, reporting on revenue and return, not just clicks and impressions.",
  },
  {
    number: "06",
    title: "A Team, Not a Vendor",
    desc: "Think of us less like a vendor and more like a hired performance marketing team pushing for your growth every day.",
  },
];

const FAQS = [
  {
    question: "What is performance marketing?",
    answer:
      "Performance marketing focuses campaigns and reporting around measurable outcomes like leads, sales, and return on investment, rather than impressions or clicks alone.",
  },
  {
    question: "How is performance marketing different from regular ad management?",
    answer:
      "Performance marketing puts ROI and revenue tracking at the center of every decision, from targeting to budget allocation, not just running ads and hoping they convert.",
  },
  {
    question: "What tracking do I need in place before starting?",
    answer:
      "At minimum, conversion tracking on your website or landing pages — we help set this up properly if it isn't already in place.",
  },
  {
    question: "How do you decide where to allocate budget?",
    answer:
      "We allocate and shift budget across channels based on real performance data and return on investment, not a fixed split decided upfront.",
  },
  {
    question: "How long before I see a positive ROI?",
    answer:
      "It varies by industry and starting point, but most campaigns show meaningful ROI trends within the first two to three months of optimization.",
  },
];

export default function PerformanceMarketingRoiCampaigns() {
  return (
    <ServiceDetailPage
      sectionLabel="Paid Marketing"
      label="Performance Marketing & ROI Campaigns"
      icon={TrendingUp}
      description="As a dedicated performance marketing agency, every campaign we run is tracked against one metric that matters: return on investment. No vanity numbers, no fluff, just campaigns built to hit your revenue targets."
      heroTitle="Performance Marketing & ROI Campaigns in India"
      heroDescription="As a dedicated performance marketing agency, every campaign we run is tracked against one metric that matters: return on investment. No vanity numbers, no fluff, just campaigns built to hit your revenue targets."
      capabilitiesHeading="Built for Businesses Ready to Track Revenue, Not Vanity Metrics"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our Performance Marketing"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us to Run Their Performance Marketing"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Ad Spend Into Tracked Return on Investment"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Running Performance Marketing Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we run every performance marketing engagement, with the same discipline whether a client is nearby or overseas. We work with startups, SMBs, and enterprises across India, tracking ROI sized to each business's actual revenue goals and channel mix. For businesses looking to run performance marketing beyond India, we manage campaigns remotely, tracking ROI across markets and time zones to the same standard regardless of location. Whether you're a startup proving your first campaign or an enterprise scaling spend across multiple business units, our approach starts with defining what a genuinely good result looks like for your business."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for Campaigns That Prove Their Own Value?"
      ctaText="Whether you need proper conversion tracking set up for the first time, a cross-channel budget strategy built around ROI, or a full performance marketing program managing spend across platforms, the right approach depends on where your tracking currently stands. Let's talk through your goals and scope what performance marketing would actually involve."
      ctaPrimaryText="Talk to a Performance Marketing Specialist"
      ctaSecondaryText="Get Your Free ROI Audit"
    />
  );
}
