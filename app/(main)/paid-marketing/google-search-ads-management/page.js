import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Target,
  Rocket,
  Building2,
  Building,
  ShoppingCart,
  Handshake,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "Google & Search Ads Management | BizzBuzz Creations",
  description:
    "Google and search ads management in India — search, display, and shopping campaigns built around real buyer intent, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/paid-marketing/google-search-ads-management",
  },
};

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Startups & Early-Stage Businesses",
    desc: "Startups need leads fast without burning through limited budget on untested campaigns. We build Google Ads campaigns around a small, high-intent keyword set, letting startups test demand before scaling spend.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMBs often waste budget on broad campaigns that generate clicks but not customers. We manage Google Ads sized for SMB budgets, focused tightly on the searches most likely to convert.",
  },
  {
    icon: Building,
    title: "Enterprises & Large Organizations",
    desc: "Enterprises need campaign management across multiple product lines and markets without losing control of spend. We run Google Ads at enterprise scale, structured for multi-campaign management and clear attribution.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce & Retail Brands",
    desc: "Ecommerce brands need shopping and search campaigns that actually move product, not just generate impressions. We build Google Shopping and search campaigns structured around your actual catalog and margins.",
  },
  {
    icon: Handshake,
    title: "Agencies Needing a Google Ads Partner",
    desc: "Marketing agencies need a specialist partner to execute Google Ads management for clients. We work as a white-label Google Ads partner, handling campaign execution agencies can present as their own.",
  },
  {
    icon: RefreshCw,
    title: "Businesses Switching From Another Agency",
    desc: "Businesses unhappy with underperforming Google Ads management need a careful account transition. We take over existing accounts, auditing what's working before making changes, rather than rebuilding blindly.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Search Campaign Management",
    desc: "We target keywords tied to real buyer intent, so your ads show up when someone is actively searching for what you offer.",
    ctaText: "Know Our Services",
    services: [
      "Search Campaign Setup",
      "Keyword Research",
      "Ad Copywriting",
      "Negative Keyword Management",
      "Bid Strategy Setup",
      "Ad Extensions Setup",
      "Search Campaign Optimization",
      "Quality Score Improvement",
    ],
  },
  {
    number: "02",
    title: "Google Shopping Campaigns",
    desc: "Product listing ads are structured and optimized to get your catalog in front of shoppers ready to buy, not just browse.",
    ctaText: "Know Our Services",
    services: [
      "Shopping Campaign Setup",
      "Product Feed Optimization",
      "Merchant Center Management",
      "Product Group Structuring",
      "Shopping Bid Optimization",
      "Performance Max Setup",
      "Product Title Optimization",
      "Shopping ROAS Tracking",
    ],
  },
  {
    number: "03",
    title: "Display & Remarketing Ads",
    desc: "Visual display ads keep your brand visible across the web, while remarketing brings back visitors who didn't convert the first time.",
    ctaText: "Know Our Services",
    services: [
      "Display Campaign Setup",
      "Remarketing List Setup",
      "Display Creative Design",
      "Audience Targeting",
      "Remarketing Campaign Optimization",
      "Dynamic Remarketing",
      "Display Placement Management",
      "Frequency Capping",
    ],
  },
  {
    number: "04",
    title: "Keyword & Bid Strategy",
    desc: "We continuously refine keyword lists and bidding strategy, cutting wasted spend on searches that never convert.",
    ctaText: "Know Our Services",
    services: [
      "Keyword List Refinement",
      "Bid Strategy Optimization",
      "Search Term Report Analysis",
      "Wasted Spend Elimination",
      "Match Type Optimization",
      "Automated Bidding Setup",
      "Budget Allocation Strategy",
      "Bid Adjustment Management",
    ],
  },
  {
    number: "05",
    title: "Budget & Bid Optimization",
    desc: "Budgets get allocated toward campaigns and keywords that are actually driving results, adjusted as real data comes in.",
    ctaText: "Know Our Services",
    services: [
      "Budget Allocation",
      "Campaign-Level Optimization",
      "Cost-Per-Conversion Tracking",
      "Bid Cap Management",
      "Daily Budget Monitoring",
      "Spend Pacing",
      "ROI-Based Reallocation",
      "Budget Forecasting",
    ],
  },
  {
    number: "06",
    title: "Transparent Performance Reporting",
    desc: "You see exactly what your ad spend is generating — clicks, conversions, and cost per lead — not vague monthly summaries.",
    ctaText: "Know Our Services",
    services: [
      "Conversion Tracking Setup",
      "Custom Dashboard Reporting",
      "Cost-Per-Lead Reporting",
      "Weekly Performance Updates",
      "Monthly Performance Reports",
      "Call Tracking Integration",
      "Attribution Reporting",
      "ROI Reporting",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Business & Keyword Research",
    desc: "We study your business, customers, and the exact search terms real buyers use before building a single campaign.",
  },
  {
    number: "02",
    title: "Campaign & Ad Copy Setup",
    desc: "Search, shopping, and display campaigns get structured around buyer intent, with ad copy written to actually convert clicks.",
  },
  {
    number: "03",
    title: "Tracking & Conversion Setup",
    desc: "We set up conversion tracking before launch, so every click and conversion is measured accurately from day one.",
  },
  {
    number: "04",
    title: "Launch & Daily Optimization",
    desc: "Campaigns go live with daily monitoring — bids, budgets, and keywords get adjusted as real performance data comes in.",
  },
  {
    number: "05",
    title: "Testing & Refinement",
    desc: "We test ad copy, landing pages, and targeting variations, doubling down on what's proving to convert.",
  },
  {
    number: "06",
    title: "Scale & Report",
    desc: "Once a campaign proves itself, we scale spend into what's working and report honestly on cost per lead every month.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Intent-First Targeting",
    desc: "We target keywords tied to real buyer intent, so your budget reaches people actually ready to act.",
  },
  {
    number: "02",
    title: "Full Google Ads Coverage",
    desc: "Search, shopping, and display campaigns are all managed under one strategy, not siloed separately.",
  },
  {
    number: "03",
    title: "Daily Optimization",
    desc: "Campaigns don't sit untouched between monthly check-ins — we adjust bids and budgets as data comes in daily.",
  },
  {
    number: "04",
    title: "Wasted Spend Reduction",
    desc: "We continuously refine keyword lists and negative keywords to cut spend on searches that never convert.",
  },
  {
    number: "05",
    title: "Transparent Numbers",
    desc: "We're honest about what's working and what isn't, obsessed with getting you a better cost per lead every month.",
  },
  {
    number: "06",
    title: "A Team, Not a Vendor",
    desc: "Think of us less like a vendor and more like a hired paid marketing team pushing for your growth every day.",
  },
];

const FAQS = [
  {
    question: "What's the difference between search, shopping, and display ads?",
    answer:
      "Search ads appear in Google search results for specific queries, shopping ads showcase product listings, and display ads appear as visual banners across websites — we use each where it fits your goals.",
  },
  {
    question: "How much should I budget for Google Ads?",
    answer:
      "Budget depends on your industry and competition — we recommend a realistic starting budget and optimize allocation as performance data comes in.",
  },
  {
    question: "How quickly do Google Ads start generating leads?",
    answer:
      "Search campaigns can start generating clicks and leads within days of launch, though optimization improves results significantly over the following weeks.",
  },
  {
    question: "Do you write the ad copy and keyword lists?",
    answer:
      "Yes, we handle keyword research, ad copywriting, and ongoing refinement as part of campaign management.",
  },
  {
    question: "How do you report on ad performance?",
    answer:
      "We provide transparent reporting on clicks, conversions, and cost per lead, so you always know what your spend is generating.",
  },
];

export default function GoogleSearchAdsManagement() {
  return (
    <ServiceDetailPage
      sectionLabel="Paid Marketing"
      label="Google & Search Ads Management"
      icon={Target}
      description="Get found the moment someone is ready to buy. Our digital ads management services cover search, display, and shopping campaigns built around real buyer intent, so your business shows up when it matters most, not just when budgets allow."
      heroTitle="Google & Search Ads Management in India"
      heroDescription="Get found the moment someone is ready to buy. Our digital ads management services cover search, display, and shopping campaigns built around real buyer intent, so your business shows up when it matters most, not just when budgets allow."
      capabilitiesHeading="Built for Businesses Ready to Stop Wasting Ad Spend"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our Google Ads Management"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us to Run Their Google Ads"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Your Budget Into Real Conversions"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Running Google Ads Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we manage every Google Ads account, with the same rigor whether a client is nearby or overseas. We work with startups, SMBs, and enterprises across India, sizing campaigns to each business's actual budget and buyer intent. For businesses looking to run Google Ads beyond India, we manage accounts remotely, working across time zones and markets to deliver the same performance standard regardless of location. Whether you're a startup running your first campaign or an enterprise managing spend across multiple product lines, our approach starts with the same question: what does a genuinely good lead look like for your business."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready to Stop Paying for Clicks That Go Nowhere?"
      ctaText="Whether you need a fresh Google Ads account built from scratch, a takeover of an underperforming campaign, or full coverage across search, shopping, and display, the right setup depends on your actual buyer intent and budget. Let's talk through your goals and scope what Google Ads management would actually involve."
      ctaPrimaryText="Talk to a Google Ads Specialist"
      ctaSecondaryText="Get Your Free Google Ads Audit"
    />
  );
}
