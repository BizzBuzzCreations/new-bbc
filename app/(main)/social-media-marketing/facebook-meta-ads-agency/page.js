import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Users,
  Target,
  BarChart3,
  Wallet,
  RefreshCw,
  ShoppingCart,
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
    icon: Target,
    title: "Audience Targeting & Segmentation",
    desc: "We build precise audience segments based on real customer data, not broad guesses, so ad spend reaches people likely to convert.",
  },
  {
    icon: Wallet,
    title: "Ad Budget Management",
    desc: "Budgets are allocated and adjusted based on performance data, moving spend toward what's actually converting.",
  },
  {
    icon: ShoppingCart,
    title: "Lead & Conversion Campaigns",
    desc: "Campaigns are structured around lead generation and conversions, not just reach or engagement metrics that don't pay the bills.",
  },
  {
    icon: RefreshCw,
    title: "Retargeting & Funnel Ads",
    desc: "We build retargeting campaigns that bring back visitors who didn't convert the first time, capturing demand you'd otherwise lose.",
  },
  {
    icon: BarChart3,
    title: "Transparent Performance Reporting",
    desc: "Every rupee spent is tracked and reported clearly, showing cost per lead and return on ad spend, not vague summaries.",
  },
  {
    icon: Users,
    title: "Creative Testing & Optimization",
    desc: "We test multiple ad creatives and copy variations continuously, doubling down on what's proven to perform.",
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
    title: "Campaign & Creative Setup",
    desc: "Audiences, budgets, and ad creatives are built around lead generation and conversions, not vanity metrics.",
  },
  {
    number: "03",
    title: "Launch & Real-Time Monitoring",
    desc: "Campaigns launch with close monitoring in the first days, so underperforming ads get caught and fixed quickly.",
  },
  {
    number: "04",
    title: "Optimize & Scale",
    desc: "We double down on what's converting and cut what isn't, scaling spend toward your best-performing campaigns.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "001",
    title: "Performance-Focused Campaigns",
    desc: "Every campaign is run and measured against real leads, not just clicks and impressions.",
  },
  {
    number: "002",
    title: "Data-Backed Targeting",
    desc: "Audience segments are built from real data and performance signals, not broad guesses.",
  },
  {
    number: "003",
    title: "Full Transparency on Spend",
    desc: "You see exactly where every rupee goes and what it's returning, not a black-box monthly invoice.",
  },
  {
    number: "004",
    title: "Continuous Creative Testing",
    desc: "We keep testing ad creatives and copy, so campaigns improve over time instead of stagnating.",
  },
  {
    number: "005",
    title: "Retargeting Built In",
    desc: "We capture visitors who didn't convert the first time, recovering demand competitors leave on the table.",
  },
  {
    number: "006",
    title: "Prayagraj-Based, Nationally Trusted",
    desc: "A Facebook and Meta ads team in Prayagraj with a strong grasp of Indian audiences, serving brands across India.",
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
      description="As a performance-focused Facebook and Meta ads agency, we run high-converting campaigns backed by data. Every rupee you spend is tracked and optimized for real leads, not just clicks and impressions."
      heroTitle="Facebook & Meta Ads Agency in India"
      heroDescription="As a performance-focused Facebook and Meta ads agency, we run high-converting campaigns backed by data. Every rupee you spend is tracked and optimized for real leads, not just clicks and impressions."
      capabilitiesHeading="What's Included in Our Facebook & Meta Ads Management"
      capabilities={CAPABILITIES}
      roadmapCarouselHeading="Our Facebook & Meta Ads Process"
      roadmapCarouselSteps={ROADMAP_STEPS}
      differentiatorsHeading="What Makes Our Facebook & Meta Ads Different"
      differentiators={DIFFERENTIATORS}
      faqs={FAQS}
      whyChooseUsHeading="Facebook & Meta Ads Company"
      whyChooseUsText="BizzBuzz Creations runs performance-focused Facebook and Meta ad campaigns for businesses across India, tracked and optimized for real leads. We're a social media marketing agency based in Prayagraj, proudly serving businesses locally across Allahabad and Uttar Pradesh, as well as brands across India."
    />
  );
}
