import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Users,
  ShoppingCart,
  MapPin,
  Building2,
  RefreshCw,
  Rocket,
  BarChart3,
} from "lucide-react";

export const metadata = {
  title: "Facebook & Meta Ads Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a Facebook & Meta ads agency running conversion-focused campaigns for brands across India and worldwide.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/social-media-marketing/facebook-meta-ads-agency",
  },
};

const CAPABILITIES = [
  {
    icon: ShoppingCart,
    title: "Ecommerce Brands Needing Meta Ads for Sales",
    desc: "Ecommerce brands often run ads that generate clicks without generating sales, wasting budget on the wrong audience or offer. We build meta ads agency for ecommerce campaigns tracked specifically on ROAS, not vanity engagement metrics.",
  },
  {
    icon: MapPin,
    title: "Local Businesses Needing Nearby Customer Reach",
    desc: "Local businesses need ads that reach people actually near them, not a broad, wasteful audience spread across an entire city or region. We build facebook advertising agency near me campaigns using precise local targeting built for foot traffic and local enquiries.",
  },
  {
    icon: Building2,
    title: "B2B & Service Businesses Needing Lead Generation Ads",
    desc: "Service businesses need qualified leads, not just form fills from people who were never going to buy. We run facebook ads for lead generation campaigns with qualification built into the funnel, not just the ad itself.",
  },
  {
    icon: RefreshCw,
    title: "Businesses With Ad Spend That Isn't Converting",
    desc: "Many businesses are already running Facebook ads, just not profitably, often due to poor targeting or weak creative. We audit and rebuild underperforming accounts as part of our meta ads audit services, fixing what's actually broken.",
  },
  {
    icon: Rocket,
    title: "Startups Running Their First Ever Ad Campaigns",
    desc: "First-time advertisers need guidance on budget, targeting, and creative without wasting early spend on trial and error. We provide facebook ads management services structured to avoid the common early mistakes that burn through a startup's first ad budget.",
  },
  {
    icon: BarChart3,
    title: "Businesses Needing Ongoing Ad Management & Optimization",
    desc: "Ad accounts need continuous attention as performance shifts, audiences fatigue, and costs change over time. We provide ongoing meta ads management agency support, not a set-and-forget campaign left unmonitored after launch.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Facebook & Instagram Ads Strategy",
    desc: "A clear campaign strategy built around your specific business goals, not a generic boosted-post approach.",
    ctaText: "Know Our Services",
    services: [
      "Meta Ads Strategy Development",
      "Campaign Objective Planning",
      "Audience Research",
      "Competitor Ad Analysis",
      "Budget Planning",
      "Funnel Strategy Design",
      "Platform Selection (FB/IG)",
      "Ad Account Structure Setup",
    ],
  },
  {
    number: "02",
    title: "Campaign Setup & Creative Development",
    desc: "Campaigns built and launched properly from day one, with creative tested rather than guessed at.",
    ctaText: "Know Our Services",
    services: [
      "Campaign Setup & Launch",
      "Ad Creative Design",
      "Ad Copywriting",
      "Video Ad Production",
      "Carousel Ad Design",
      "A/B Ad Testing",
      "Landing Page Alignment",
      "Pixel & Conversion Tracking Setup",
    ],
  },
  {
    number: "03",
    title: "Audience Targeting & Retargeting",
    desc: "Precise audience targeting that reaches the people most likely to actually convert, not a broad, wasteful net.",
    ctaText: "Know Our Services",
    services: [
      "Custom Audience Targeting",
      "Lookalike Audience Creation",
      "Retargeting Campaigns",
      "Interest & Behavior Targeting",
      "Audience Segmentation",
      "Exclusion Audience Setup",
      "Cross-Platform Audience Sync",
      "Audience Performance Analysis",
    ],
  },
  {
    number: "04",
    title: "Meta Ads for Ecommerce",
    desc: "Campaigns built around real product sales, tracked on ROAS rather than reach or impressions alone.",
    ctaText: "Know Our Services",
    services: [
      "Ecommerce Ad Campaigns",
      "Product Catalog Ads",
      "Dynamic Retargeting Ads",
      "Shopping Ads Setup",
      "Abandoned Cart Ads",
      "Sales & Promotion Campaigns",
      "Collection Ads",
      "Ecommerce Conversion Tracking",
    ],
  },
  {
    number: "05",
    title: "Lead Generation Campaigns",
    desc: "Lead campaigns built with qualification in mind, so you receive genuine prospects, not just cheap form fills.",
    ctaText: "Know Our Services",
    services: [
      "Lead Generation Ad Campaigns",
      "Lead Form Ads",
      "B2B Lead Campaigns",
      "Local Lead Generation Ads",
      "Lead Qualification Setup",
      "CRM Integration for Leads",
      "Cost-Per-Lead Optimization",
      "Follow-Up Funnel Design",
    ],
  },
  {
    number: "06",
    title: "Ads Analytics, ROAS & Optimization",
    desc: "Continuous monitoring and optimization, since ad performance shifts constantly and needs ongoing attention to stay efficient.",
    ctaText: "Know Our Services",
    services: [
      "ROAS Tracking & Reporting",
      "Conversion Rate Optimization",
      "Budget Reallocation",
      "Ad Fatigue Monitoring",
      "Performance Reporting",
      "Monthly Ad Audits",
      "Scaling Winning Campaigns",
      "Pausing Underperforming Ads",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Business & Ad Account Discovery",
    desc: "We start by understanding your business goals and auditing any existing ad account, identifying what's working, what isn't, and where budget is currently being wasted.",
  },
  {
    number: "02",
    title: "Audience & Funnel Strategy",
    desc: "We define target audiences and build a funnel strategy, whether the goal is sales, leads, or local foot traffic, before any creative development begins.",
  },
  {
    number: "03",
    title: "Creative Development & Campaign Setup",
    desc: "We build ad creative, copy, and campaign structure according to the strategy, setting up proper tracking so results can be measured accurately from day one.",
  },
  {
    number: "04",
    title: "Launch & Initial Testing",
    desc: "Campaigns launch with A/B testing built in, comparing creative and targeting variations to identify what's actually resonating with your audience early.",
  },
  {
    number: "05",
    title: "Optimization & Scaling",
    desc: "We optimize based on real performance data, reallocating budget toward what's working and scaling the campaigns delivering the strongest return.",
  },
  {
    number: "06",
    title: "Ongoing Reporting & Refinement",
    desc: "We provide regular reporting on ROAS and performance, continuing to refine targeting and creative as the account matures and audiences shift.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Meta Ads Built Around ROAS, Not Just Reach or Clicks",
    desc: "Every campaign is tracked and judged on actual return, sales or qualified leads generated, rather than vanity metrics like reach or clicks that don't reflect whether the ad spend is actually working for your business.",
  },
  {
    number: "02",
    title: "Ecommerce Ad Expertise for Campaigns That Actually Sell",
    desc: "As a meta ads agency for ecommerce, we understand catalog ads, dynamic retargeting, and abandoned cart campaigns in detail, going beyond generic boosted posts to campaigns built specifically for online sales.",
  },
  {
    number: "03",
    title: "Lead Generation Campaigns That Deliver Qualified Leads",
    desc: "We build qualification directly into lead generation funnels, so you receive genuine prospects rather than cheap, low-intent form fills that waste your sales team's time following up on unqualified leads.",
  },
  {
    number: "04",
    title: "Constant Optimization Instead of Set-and-Forget Campaigns",
    desc: "We monitor performance continuously, adjusting targeting, budget, and creative as ad fatigue sets in or costs shift, rather than launching a campaign and leaving it unmonitored until results decline.",
  },
  {
    number: "05",
    title: "Creative That's Tested, Not Just Published",
    desc: "We A/B test ad creative and copy before scaling budget behind a single version, since even small creative changes can significantly affect cost-per-result across a campaign.",
  },
  {
    number: "06",
    title: "Transparent Reporting on Real Spend and Real Results",
    desc: "You see exactly what's being spent and what it's generating, ROAS, cost-per-lead, and conversion data, rather than a vague summary that doesn't clarify whether your ad budget is actually paying off.",
  },
];

const FAQS = [
  {
    question: "How much does Facebook and Meta ads management cost in India?",
    answer:
      "Cost typically includes both our management fee and your ad spend budget, which are separate. We scope management pricing after understanding your goals, industry, and target audience, since campaign complexity varies significantly between a simple local campaign and a full ecommerce funnel.",
  },
  {
    question: "What's a good ROAS for Facebook and Instagram ads?",
    answer:
      "A \"good\" ROAS varies significantly by industry, margin, and business model, there's no universal benchmark that applies to every business. We help establish a realistic target based on your specific margins and goals, then optimize campaigns toward that number over time.",
  },
  {
    question: "Can you manage ads for ecommerce and lead generation both?",
    answer:
      "Yes, we run both ecommerce-focused campaigns tracked on ROAS and lead generation campaigns tracked on cost-per-qualified-lead, since the strategy and creative approach differ significantly between the two. We scope each based on your specific business model and goals.",
  },
  {
    question: "How long before Facebook ads start showing results?",
    answer:
      "Initial data usually comes in within the first one to two weeks, though meaningful optimization typically takes four to six weeks as the algorithm gathers enough data to target effectively. We set realistic expectations during onboarding based on your budget and industry.",
  },
  {
    question: "Do you handle ad creative, or do we need to provide it?",
    answer:
      "We handle ad creative development as part of our service, including design, copywriting, and video where needed, though we're happy to incorporate brand assets or existing content you already have rather than starting entirely from scratch.",
  },
  {
    question: "Can you fix an underperforming Facebook ads account we already have?",
    answer:
      "Yes, auditing and rebuilding underperforming accounts is a core part of what we do. We review targeting, creative, tracking setup, and account structure to identify what's actually causing poor performance before making changes, rather than rebuilding everything unnecessarily.",
  },
];

export default function FacebookMetaAdsAgency() {
  return (
    <ServiceDetailPage
      sectionLabel="Social Media Marketing"
      label="Facebook & Meta Ads Agency"
      icon={Users}
      description="Facebook and Instagram ad campaigns built around ROAS, not just reach, engineered to turn ad spend into real leads and sales."
      heroTitle="Get Leads and Sales From Meta Ads That Actually Convert"
      heroDescription="Facebook and Instagram ad campaigns built around ROAS, not just reach, engineered to turn ad spend into real leads and sales."
      heroCtaText="Get a Free Meta Ads Audit"
      capabilitiesHeading="Built for Businesses Tired of Ad Spend That Doesn't Convert"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything Between a Meta Ad and a Paying Customer"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us With Their Meta Ad Spend"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Ad Budget Into Actual Leads"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Running Meta Ads Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every ad account, with the same attention to ROAS whether a client is nearby or across the world. We work as a facebook ads agency for businesses across India, providing meta ads management agency support built around each business's specific goals and margins. For businesses looking to hire a facebook ads expert beyond India, we support clients worldwide remotely, delivering the same meta ads agency for ecommerce standard of work regardless of time zone. Whether you're a local business in Prayagraj or an ecommerce brand anywhere else scaling ad spend, our approach starts with the same question: what does your specific audience actually respond to."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for Meta Ads That Actually Pay Off?"
      ctaText="Whether you're launching your first Facebook ad campaign, trying to fix an account that isn't converting, or scaling an ecommerce store's ad spend, boosted posts alone were never going to deliver real ROAS. Let's audit your current setup and scope what a properly managed Meta ads account would actually involve."
      ctaPrimaryText="Talk to a Meta Ads Specialist"
      ctaSecondaryText="Get Your Free Meta Ads Audit"
    />
  );
}
