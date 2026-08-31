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
  title: "Facebook & Meta Ads Agency | BizzBuzz Creations",
  description:
    "Facebook and Meta ads agency in India — performance-focused campaigns backed by data, every rupee tracked and optimized for real leads, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/social-media-marketing/facebook-meta-ads-agency",
  },
};

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Startups & Early-Stage Businesses",
    desc: "Startups need to validate demand quickly without burning through a limited ad budget on guesswork. We build Facebook and Meta ad campaigns focused on early, measurable signal, so startups learn what converts before scaling spend.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMBs often run ads without a clear system for tracking what's actually converting versus what's just spending. We manage Meta ads sized for SMB budgets, focused on cost per lead, not vanity reach numbers.",
  },
  {
    icon: Building,
    title: "Enterprises & Large Organizations",
    desc: "Enterprises need ad accounts managed consistently across multiple campaigns, products, and markets at once. We run Meta ads at enterprise scale, maintaining consistent tracking and reporting across every account.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce & Retail Brands",
    desc: "Ecommerce brands need ads that drive actual purchases, not just clicks to a product page. We build conversion-focused Facebook and Instagram ad campaigns tied directly to sales and return on ad spend.",
  },
  {
    icon: Handshake,
    title: "Agencies Needing a Meta Ads Fulfillment Partner",
    desc: "Agencies managing client ad accounts need a specialist who can execute campaigns reliably in the background. We work as a white-label Meta ads partner, handling setup and optimization agencies can present as their own.",
  },
  {
    icon: RefreshCw,
    title: "Businesses With Underperforming Ad Accounts",
    desc: "Businesses running ads with rising costs and declining returns need a structural fix, not just a bigger budget. We audit underperforming ad accounts and rebuild targeting and creative around what's actually converting.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Audience Targeting & Segmentation",
    desc: "Precise audience segments built from real customer data, not broad guesses, so ad spend reaches people likely to convert.",
    ctaText: "Know Our Services",
    services: [
      "Audience Research & Segmentation",
      "Lookalike Audience Building",
      "Custom Audience Setup",
      "Interest & Behavior Targeting",
      "Retargeting Audience Setup",
      "Audience Exclusion Rules",
      "Demographic Targeting",
      "Audience Performance Analysis",
    ],
  },
  {
    number: "02",
    title: "Campaign Setup & Ad Budget Management",
    desc: "Budgets allocated and adjusted based on performance data, moving spend toward what's actually converting.",
    ctaText: "Know Our Services",
    services: [
      "Campaign Structure Planning",
      "Budget Allocation Strategy",
      "Bid Strategy Management",
      "Ad Set Configuration",
      "Daily Budget Monitoring",
      "Spend Pacing Management",
      "Campaign Objective Selection",
      "Budget Scaling Rules",
    ],
  },
  {
    number: "03",
    title: "Lead & Conversion Campaigns",
    desc: "Campaigns structured around lead generation and conversions, not just reach or engagement metrics that don't pay the bills.",
    ctaText: "Know Our Services",
    services: [
      "Lead Generation Campaigns",
      "Conversion Campaign Setup",
      "Landing Page Alignment",
      "Pixel & Conversion Tracking Setup",
      "Form Ad Optimization",
      "Sales Campaign Structuring",
      "Funnel-Stage Campaign Mapping",
      "Conversion Rate Optimization",
    ],
  },
  {
    number: "04",
    title: "Retargeting & Funnel Ads",
    desc: "Retargeting campaigns that bring back visitors who didn't convert the first time, capturing demand you'd otherwise lose.",
    ctaText: "Know Our Services",
    services: [
      "Website Retargeting Campaigns",
      "Cart Abandonment Retargeting",
      "Engagement Retargeting",
      "Video View Retargeting",
      "Multi-Stage Funnel Ads",
      "Dynamic Product Retargeting",
      "Cross-Sell & Upsell Ads",
      "Retargeting Sequence Planning",
    ],
  },
  {
    number: "05",
    title: "Creative Testing & Optimization",
    desc: "Multiple ad creatives and copy variations tested continuously, doubling down on what's proven to perform.",
    ctaText: "Know Our Services",
    services: [
      "Ad Creative Development",
      "Ad Copywriting",
      "A/B Creative Testing",
      "Creative Refresh Cycles",
      "Video Ad Production Support",
      "Static & Carousel Ad Design",
      "Hook & Headline Testing",
      "Creative Performance Analysis",
    ],
  },
  {
    number: "06",
    title: "Transparent Performance Reporting",
    desc: "Every rupee spent tracked and reported clearly, showing cost per lead and return on ad spend, not vague summaries.",
    ctaText: "Know Our Services",
    services: [
      "Cost Per Lead Reporting",
      "Return on Ad Spend Tracking",
      "Campaign Performance Dashboards",
      "Weekly Performance Summaries",
      "Attribution Reporting",
      "Spend vs. Results Breakdown",
      "Competitor Benchmarking",
      "Monthly Strategy Reviews",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Goals & Audience Discovery",
    desc: "We understand your target customer and business goals before setting a single campaign live.",
  },
  {
    number: "02",
    title: "Tracking & Pixel Setup",
    desc: "We set up conversion tracking and pixels correctly upfront, so every result reported actually reflects reality.",
  },
  {
    number: "03",
    title: "Campaign & Creative Setup",
    desc: "Audiences, budgets, and ad creatives are built around lead generation and conversions, not vanity metrics.",
  },
  {
    number: "04",
    title: "Launch & Real-Time Monitoring",
    desc: "Campaigns launch with close monitoring in the first days, so underperforming ads get caught and fixed quickly.",
  },
  {
    number: "05",
    title: "Optimize & Scale",
    desc: "We double down on what's converting and cut what isn't, scaling spend toward your best-performing campaigns.",
  },
  {
    number: "06",
    title: "Ongoing Reporting & Refinement",
    desc: "We report on performance regularly and keep refining targeting and creative as the account matures.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Performance-Focused Campaigns",
    desc: "Every campaign is run and measured against real leads, not just clicks and impressions that look good but don't convert.",
  },
  {
    number: "02",
    title: "Data-Backed Targeting",
    desc: "Audience segments are built from real data and performance signals, not broad guesses about who might be interested.",
  },
  {
    number: "03",
    title: "Full Transparency on Spend",
    desc: "You see exactly where every rupee goes and what it's returning, not a black-box monthly invoice with no real breakdown.",
  },
  {
    number: "04",
    title: "Continuous Creative Testing",
    desc: "We keep testing ad creatives and copy, so campaigns improve over time instead of stagnating on the same tired assets.",
  },
  {
    number: "05",
    title: "Retargeting Built In From Day One",
    desc: "We capture visitors who didn't convert the first time, recovering demand competitors typically leave on the table.",
  },
  {
    number: "06",
    title: "Tracking Set Up Correctly, Not Assumed",
    desc: "We verify pixel and conversion tracking before scaling spend, so optimization decisions are based on accurate data.",
  },
];

const FAQS = [
  {
    question: "What's the difference between Facebook ads and Meta ads?",
    answer:
      "Meta ads is the umbrella term covering ads across Facebook and Instagram managed through Meta's ad platform — we run both as part of a coordinated strategy.",
  },
  {
    question: "How much should I budget for Facebook and Meta ads?",
    answer:
      "Budget depends on your goals and industry — we'll recommend a realistic starting budget and optimize allocation based on what's converting.",
  },
  {
    question: "How do you measure success for ad campaigns?",
    answer:
      "We track cost per lead, conversion rate, and return on ad spend — the metrics that actually reflect business impact, not just reach.",
  },
  {
    question: "How quickly will I see results from Facebook ads?",
    answer:
      "Initial data typically comes in within the first one to two weeks, with meaningful optimization improving results over the following month.",
  },
  {
    question: "Do you handle ad creative and copywriting too?",
    answer:
      "Yes, we create and continuously test ad creatives and copy variations as part of the campaign management service.",
  },
];

export default function FacebookMetaAdsAgency() {
  return (
    <ServiceDetailPage
      sectionLabel="Social Media Marketing"
      label="Facebook & Meta Ads Agency"
      icon={Users}
      description="Performance-focused Facebook and Meta ad campaigns backed by data, every rupee tracked and optimized for real leads, not just clicks and impressions."
      heroTitle="Get Meta Ads That Are Tracked for Leads, Not Just Clicks"
      heroDescription="Performance-focused Facebook and Meta ad campaigns backed by data, every rupee tracked and optimized for real leads, not just clicks and impressions."
      heroCtaText="Get a Free Meta Ads Audit"
      capabilitiesHeading="Built for Businesses Ready for Ads That Actually Convert"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our Facebook & Meta Ads Management"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="What Makes Our Facebook & Meta Ads Different"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="Our Facebook & Meta Ads Process"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Running Meta Ads Nationally"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we manage every Meta ads account, with the same discipline on tracking and spend whether a client is nearby or across the country. We run Facebook and Meta ad campaigns for startups, SMBs, and enterprises across India, sizing budgets and targeting to each business's actual sales process. Whether you're a startup validating your first campaign in Prayagraj or an ecommerce brand anywhere else scaling ad spend, our approach starts with the same question: what does a converted lead actually look like for you."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for Meta Ads That Actually Convert?"
      ctaText="Whether your current ads are generating clicks without real leads, you're starting from scratch, or costs have crept up without a clear reason, more budget alone was never going to fix a targeting or tracking problem. Let's audit your account and scope what real Meta ads management would actually involve."
      ctaPrimaryText="Talk to a Meta Ads Specialist"
      ctaSecondaryText="Get Your Free Meta Ads Audit"
    />
  );
}
