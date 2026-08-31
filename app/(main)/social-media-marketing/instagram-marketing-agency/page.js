import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Camera,
  TrendingUp,
  ShoppingCart,
  User,
  MapPin,
  Target,
  Film,
} from "lucide-react";

export const metadata = {
  title: "Instagram Marketing Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is an Instagram marketing agency helping brands grow followers and sales across India and worldwide.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/social-media-marketing/instagram-marketing-agency",
  },
};

const CAPABILITIES = [
  {
    icon: TrendingUp,
    title: "Brands Wanting Real Followers, Not Just Numbers",
    desc: "A large follower count means little if it doesn't translate into engagement or sales. We provide instagram marketing services focused on attracting followers who actually engage with and buy from your brand, not just inflate a vanity metric.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce & D2C Brands Selling Through Instagram",
    desc: "Instagram is often a primary sales channel for D2C brands, making content and shopping features critical to revenue. We build instagram marketing agency strategies around product discovery and conversion, not just aesthetic posting.",
  },
  {
    icon: User,
    title: "Personal Brands & Influencers Growing an Audience",
    desc: "Personal brands need consistent, authentic content to grow, but rarely have time to produce it themselves daily. We support instagram growth agency work for personal brands, keeping their voice intact while handling the consistent output growth requires.",
  },
  {
    icon: MapPin,
    title: "Local Businesses Needing Local Instagram Visibility",
    desc: "Local businesses need Instagram content that reaches people nearby, not just a broad, undifferentiated audience. We build location-aware content and hashtag strategy that helps local businesses show up for the audience that can actually visit or buy.",
  },
  {
    icon: Target,
    title: "Businesses Needing Instagram Ads Management",
    desc: "Organic reach alone often isn't enough to grow quickly, making paid promotion necessary for faster results. We provide instagram ads agency services built around real conversion goals, not just boosted posts with no clear objective.",
  },
  {
    icon: Film,
    title: "Brands Needing Consistent Reels & Content Production",
    desc: "Instagram increasingly favors accounts that post Reels consistently, which most brands struggle to sustain internally. We provide instagram content marketing agency support with a steady production pipeline built to match how the platform actually rewards consistency.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Instagram Strategy & Growth Planning",
    desc: "A clear growth strategy built around your specific audience and goals, not generic advice copied across every account.",
    ctaText: "Know Our Services",
    services: [
      "Instagram Growth Strategy",
      "Audience Research",
      "Content Pillar Planning",
      "Hashtag Strategy",
      "Competitor Analysis",
      "Bio & Profile Optimization",
      "Posting Schedule Planning",
      "Growth Goal Setting",
    ],
  },
  {
    number: "02",
    title: "Instagram Content Creation",
    desc: "Consistent, brand-aligned content across feed posts, stories, and carousels, built to match how your audience actually browses.",
    ctaText: "Know Our Services",
    services: [
      "Instagram Content Creation",
      "Feed Post Design",
      "Story Content Creation",
      "Caption Writing",
      "Carousel Post Design",
      "Brand-Consistent Visuals",
      "Content Calendar Management",
      "Seasonal Content Campaigns",
    ],
  },
  {
    number: "03",
    title: "Instagram Ads Management",
    desc: "Ad campaigns built around real business objectives, tracked and optimized rather than run and forgotten.",
    ctaText: "Know Our Services",
    services: [
      "Instagram Ads Management",
      "Instagram Ad Creative Design",
      "Audience Targeting",
      "Retargeting Campaigns",
      "Ad Budget Optimization",
      "Conversion Tracking",
      "Story & Reels Ads",
      "Shopping Ads Setup",
    ],
  },
  {
    number: "04",
    title: "Instagram Reels Production",
    desc: "Regular Reels production built to match how Instagram's algorithm currently rewards consistent short-form video content.",
    ctaText: "Know Our Services",
    services: [
      "Instagram Reels Production",
      "Reels Scripting",
      "Reels Editing",
      "Trend-Based Reels Content",
      "UGC-Style Reels",
      "Reels Performance Optimization",
      "Reels Repurposing",
      "Reels Posting Strategy",
    ],
  },
  {
    number: "05",
    title: "Instagram Influencer Collaborations",
    desc: "Creator partnerships matched to your specific audience, not selected on follower count alone.",
    ctaText: "Know Our Services",
    services: [
      "Influencer Identification",
      "Influencer Outreach",
      "Collaboration Management",
      "UGC Content Sourcing",
      "Micro-Influencer Campaigns",
      "Influencer Performance Tracking",
      "Gifting & Barter Campaigns",
      "Influencer Contract Support",
    ],
  },
  {
    number: "06",
    title: "Instagram Analytics & Optimization",
    desc: "Clear reporting on what's actually driving growth, so strategy adjusts based on real performance data.",
    ctaText: "Know Our Services",
    services: [
      "Instagram Analytics & Reporting",
      "Engagement Rate Tracking",
      "Follower Growth Analysis",
      "Content Performance Review",
      "A/B Testing Content",
      "Monthly Reporting",
      "Strategy Adjustment",
      "Competitor Benchmarking",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Brand & Audience Discovery",
    desc: "We start by understanding your brand, audience, and current Instagram performance, identifying what's working and where the real growth opportunity is.",
  },
  {
    number: "02",
    title: "Content & Growth Strategy",
    desc: "We build a content strategy covering pillars, formats, and posting cadence, aligned with what your specific audience actually engages with.",
  },
  {
    number: "03",
    title: "Content & Reels Production",
    desc: "We produce feed content, stories, and Reels consistently, keeping quality high while maintaining the posting frequency growth requires.",
  },
  {
    number: "04",
    title: "Posting, Ads & Engagement",
    desc: "We publish content on schedule, run any agreed ad campaigns, and manage community engagement as it comes in.",
  },
  {
    number: "05",
    title: "Performance Tracking",
    desc: "We track growth, engagement, and conversion metrics against your goals, reporting clearly on what's actually happening.",
  },
  {
    number: "06",
    title: "Ongoing Optimization & Scaling",
    desc: "We refine strategy based on real performance data, scaling what's working and adjusting content that isn't landing.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Instagram Marketing Built Around Conversion, Not Just Followers",
    desc: "We track engagement and conversion alongside follower count, since a growing follower number that doesn't translate into business results isn't actually achieving what most brands need Instagram to do.",
  },
  {
    number: "02",
    title: "Reels Production That Keeps Up With How the Platform Actually Works",
    desc: "Instagram consistently favors accounts posting Reels regularly, and we build a production pipeline that sustains this cadence, rather than treating Reels as an occasional extra alongside static posts.",
  },
  {
    number: "03",
    title: "Ads Management Focused on Real Sales, Not Just Reach",
    desc: "Every ad campaign is built around a specific business objective, sales, leads, or traffic, and tracked accordingly, rather than run as a generic boost with no defined success metric.",
  },
  {
    number: "04",
    title: "Influencer Collaborations Matched to Your Actual Audience",
    desc: "We select creators based on audience fit and engagement quality, not just follower count, since a mismatched influencer partnership rarely delivers the trust transfer a brand is actually paying for.",
  },
  {
    number: "05",
    title: "Content Built for Your Brand, Not a Trend Template",
    desc: "We adapt trends and formats to fit your specific brand voice, rather than posting generic trending content that could belong to any account, keeping your Instagram presence recognizably yours.",
  },
  {
    number: "06",
    title: "Transparent Reporting on Growth That Actually Matters",
    desc: "You receive clear reporting on engagement, growth, and where relevant, sales or leads generated, giving you a real picture of what your Instagram investment is delivering each month.",
  },
];

const FAQS = [
  {
    question: "How much does Instagram marketing cost in India?",
    answer:
      "Cost depends on scope, organic content management alone costs less than a package including Reels production, ads management, and influencer collaborations. We scope pricing after understanding your specific goals and current Instagram presence, rather than offering a flat rate upfront.",
  },
  {
    question: "Can you help us get more followers, or just more engagement?",
    answer:
      "We focus on both, since sustainable follower growth and genuine engagement tend to move together when content and targeting are aligned with the right audience. Follower count alone without engagement rarely translates into real business value, so we track both metrics together.",
  },
  {
    question: "Do you manage Instagram ads as well as organic content?",
    answer:
      "Yes, instagram ads agency work is part of our core service, run alongside organic content strategy so both channels reinforce each other rather than operating as disconnected efforts with separate goals and messaging.",
  },
  {
    question: "Can you find and manage influencers for our brand?",
    answer:
      "Yes, influencer identification and collaboration management is a core service, matching creators to your specific audience and brand fit rather than selecting based on follower count alone, which rarely delivers the trust transfer brands are actually paying for.",
  },
  {
    question: "How often will you post on our Instagram account?",
    answer:
      "Posting frequency depends on your strategy and goals, though consistency matters more than sheer volume for most brands. We agree on a realistic, sustainable cadence during strategy planning rather than committing to an arbitrary daily posting schedule that sacrifices quality.",
  },
  {
    question: "How do you measure whether Instagram marketing is working?",
    answer:
      "We track follower growth, engagement rate, Reels performance, and where relevant, traffic or sales generated from Instagram, reporting on these clearly each month. This gives a real picture of impact rather than vanity metrics that don't reflect actual results.",
  },
];

export default function InstagramMarketingAgency() {
  return (
    <ServiceDetailPage
      sectionLabel="Social Media Marketing"
      label="Instagram Marketing Agency"
      icon={Camera}
      description="Instagram marketing built to turn followers into customers, not just grow a number, backed by content and strategy that converts."
      heroTitle="Get Real Instagram Growth, Not Just More Followers"
      heroDescription="Instagram marketing built to turn followers into customers, not just grow a number, backed by content and strategy that converts."
      heroCtaText="Get a Free Instagram Growth Audit"
      capabilitiesHeading="Built for Brands Chasing More Than Vanity Followers"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything Between an Instagram Post and a Real Customer"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Brands Hire Us for Instagram Marketing"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Instagram Content Into Actual Growth"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Growing Instagram Accounts Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every Instagram account, with the same attention to detail whether a client is nearby or across the world. We work as an instagram marketing agency for brands and personal accounts across India, providing instagram growth agency support built around each account's specific audience and goals. For businesses looking to hire an instagram marketer beyond India, we support clients worldwide remotely, delivering the same instagram content marketing agency standard of work regardless of time zone. Whether you're a local business in Prayagraj or an ecommerce brand anywhere else selling through Instagram, our approach starts with the same question: what does your audience actually want to see and buy."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for Instagram Growth That Actually Converts?"
      ctaText="Whether your follower count has plateaued, your Reels aren't getting traction, or your Instagram simply isn't translating into real business results, more posts alone won't fix that. Let's audit your current account and scope what real Instagram growth would actually involve."
      ctaPrimaryText="Talk to an Instagram Marketing Specialist"
      ctaSecondaryText="Get Your Free Instagram Growth Audit"
    />
  );
}
