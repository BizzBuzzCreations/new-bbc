import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Camera,
  Rocket,
  Building2,
  Building,
  ShoppingCart,
  Handshake,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "Instagram Marketing Agency | BizzBuzz Creations",
  description:
    "Instagram marketing agency in India — reels, story strategy, and targeted ads that turn followers into genuine paying customers, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/social-media-marketing/instagram-marketing-agency",
  },
};

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Startups & Early-Stage Businesses",
    desc: "Startups need to build an Instagram presence from zero without years of organic growth to rely on. We combine reels-first content with targeted ads early, giving startups a faster path to a real, engaged following.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMBs often post inconsistently on Instagram without a real content or ad strategy behind it. We build Instagram marketing sized for SMB budgets, focused on genuine engagement, not just posting for its own sake.",
  },
  {
    icon: Building,
    title: "Enterprises & Multi-Brand Companies",
    desc: "Enterprises need Instagram content and ad management coordinated across multiple brands or product lines. We run Instagram marketing at enterprise scale, keeping creative quality and targeting consistent across accounts.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce & Retail Brands",
    desc: "Ecommerce brands need Instagram to actually drive purchases, not just likes on product photos. We build shoppable content and targeted ad campaigns that turn Instagram traffic into real store revenue.",
  },
  {
    icon: Handshake,
    title: "Agencies Needing an Instagram Fulfillment Partner",
    desc: "Agencies managing client Instagram accounts need reliable production and ad management support. We work as a white-label Instagram partner, handling content and ads agencies can present as their own.",
  },
  {
    icon: RefreshCw,
    title: "Brands With Stalled Instagram Growth",
    desc: "Brands whose Instagram growth has plateaued despite regular posting need a structural fix, not just more content volume. We audit stalled accounts and rebuild the content and targeting strategy around what's actually working.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Reels & Story Strategy",
    desc: "Reels and stories planned and produced to stop the scroll, matched to what's actually working on Instagram right now.",
    ctaText: "Know Our Services",
    services: [
      "Reels Strategy Development",
      "Story Content Planning",
      "Reel Scripting & Concepting",
      "Trend-Aligned Reel Ideas",
      "Story Highlight Strategy",
      "Interactive Story Features",
      "Reels Distribution Planning",
      "Reels Performance Tracking",
    ],
  },
  {
    number: "02",
    title: "Scroll-Stopping Content Creation",
    desc: "Feed posts, carousels, and visuals created to look native to Instagram, not like recycled content from another platform.",
    ctaText: "Know Our Services",
    services: [
      "Feed Post Design",
      "Carousel Content Creation",
      "Instagram-Native Visual Design",
      "Caption Writing",
      "Content Batching",
      "Brand-Aligned Visual Style",
      "Product Photography Direction",
      "Content Calendar Execution",
    ],
  },
  {
    number: "03",
    title: "Targeted Instagram Ads",
    desc: "Instagram ad campaigns targeted at the audiences most likely to convert, tracked and optimized for real results, not just reach.",
    ctaText: "Know Our Services",
    services: [
      "Instagram Ad Campaign Setup",
      "Audience Targeting & Segmentation",
      "Story & Reel Ad Formats",
      "Shopping Ad Integration",
      "Retargeting Campaign Setup",
      "Conversion Tracking Setup",
      "Ad Creative Testing",
      "Ad Performance Reporting",
    ],
  },
  {
    number: "04",
    title: "Influencer & Collaboration Support",
    desc: "Influencer collaborations identified and coordinated where they genuinely fit your brand, extending reach authentically.",
    ctaText: "Know Our Services",
    services: [
      "Influencer Identification",
      "Collaboration Outreach",
      "Content Brief Development",
      "Partnership Negotiation Support",
      "Collaboration Performance Tracking",
      "Micro-Influencer Strategy",
      "Affiliate & UGC Coordination",
      "Influencer Content Repurposing",
    ],
  },
  {
    number: "05",
    title: "Engagement & Growth Tracking",
    desc: "Real engagement and follower growth tracked, not just impressions, so you know the strategy is actually building an audience.",
    ctaText: "Know Our Services",
    services: [
      "Engagement Rate Tracking",
      "Follower Growth Analysis",
      "Audience Quality Assessment",
      "Content Performance Breakdown",
      "Reach vs. Engagement Reporting",
      "Growth Benchmarking",
      "Monthly Performance Reports",
      "Strategy Adjustment Based on Data",
    ],
  },
  {
    number: "06",
    title: "Trend-Responsive Planning",
    desc: "Content plans adapted to emerging Instagram trends and formats quickly, so your brand doesn't fall behind the platform's shifts.",
    ctaText: "Know Our Services",
    services: [
      "Trend Monitoring",
      "Format Adaptation Strategy",
      "Audio & Sound Trend Tracking",
      "Algorithm Update Monitoring",
      "Rapid Content Turnaround",
      "Seasonal Trend Planning",
      "Platform Feature Adoption",
      "Quarterly Strategy Refresh",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Audience & Content Audit",
    desc: "We review your current Instagram presence and audience to see what's working and where the real opportunity is.",
  },
  {
    number: "02",
    title: "Content & Reels Planning",
    desc: "We plan a content mix of reels, stories, and feed posts built around what actually drives engagement for your niche.",
  },
  {
    number: "03",
    title: "Content Production",
    desc: "Reels, carousels, and feed content get scripted, shot, and edited according to the approved content plan.",
  },
  {
    number: "04",
    title: "Publishing & Ad Launch",
    desc: "Content gets published, with targeted Instagram ads launched alongside organic content for coordinated growth.",
  },
  {
    number: "05",
    title: "Track & Optimize",
    desc: "We monitor engagement, follower growth, and ad performance, adjusting creative and targeting to keep results improving.",
  },
  {
    number: "06",
    title: "Monthly Strategy Review",
    desc: "We review what's genuinely working each month and adjust content mix, ad spend, and trend focus accordingly.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Real Engagement Focus",
    desc: "We build genuine engagement, not just likes, so your audience actually becomes customers over time.",
  },
  {
    number: "02",
    title: "Reels-First Content",
    desc: "Short-form video gets prioritized in our content mix since it drives the most reach on Instagram today.",
  },
  {
    number: "03",
    title: "Performance-Tracked Ads",
    desc: "Every rupee spent on Instagram ads is tracked and optimized for real leads, not just clicks and impressions.",
  },
  {
    number: "04",
    title: "Platform-Native Creative",
    desc: "Content is made to look and feel native to Instagram, not repurposed filler from another channel.",
  },
  {
    number: "05",
    title: "Trend-Aware Strategy",
    desc: "We keep pace with Instagram's format shifts so your brand stays visible as the platform evolves.",
  },
  {
    number: "06",
    title: "Organic and Paid Working Together",
    desc: "Content and ads are planned as one coordinated strategy, not two disconnected efforts pulling in different directions.",
  },
];

const FAQS = [
  {
    question: "How does Instagram marketing help my business grow?",
    answer:
      "It builds brand awareness and engagement through content and reels, while targeted ads convert that attention into real leads and customers.",
  },
  {
    question: "Do you create the reels and content yourselves?",
    answer:
      "Yes, our team scripts, shoots, and edits reels and content, or works with material you provide, depending on what fits your brand best.",
  },
  {
    question: "How much do Instagram ads cost?",
    answer:
      "Ad spend is set based on your goals and budget — we recommend a starting budget and optimize it for the best return as data comes in.",
  },
  {
    question: "How long before I see growth on Instagram?",
    answer:
      "Organic growth typically builds over a few months of consistent posting, while targeted ads can drive faster, measurable results.",
  },
  {
    question: "Can you also handle influencer collaborations?",
    answer:
      "Yes, where it fits your brand, we help identify and coordinate influencer partnerships that extend your reach authentically.",
  },
];

export default function InstagramMarketingAgency() {
  return (
    <ServiceDetailPage
      sectionLabel="Social Media Marketing"
      label="Instagram Marketing Agency"
      icon={Camera}
      description="Reels, story strategy, and targeted ads built to turn followers into genuine paying customers, not just chase likes."
      heroTitle="Get an Instagram Presence That Turns Followers Into Customers"
      heroDescription="Reels, story strategy, and targeted ads built to turn followers into genuine paying customers, not just chase likes."
      heroCtaText="Get a Free Instagram Marketing Consultation"
      capabilitiesHeading="Built for Brands Ready to Turn Followers Into Customers"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our Instagram Marketing"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="What Makes Our Instagram Marketing Different"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="Our Instagram Marketing Process"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Growing Instagram Accounts Nationally"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we build every Instagram strategy, with the same creative standard whether a client is nearby or across the country. We run Instagram marketing for startups, SMBs, and enterprises across India, sizing content production and ad spend to each brand's actual audience. Whether you're a startup building your first real following in Prayagraj or an ecommerce brand anywhere else scaling shoppable content, our approach starts with the same question: what's actually stopping people from following through."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for an Instagram Presence That Actually Converts?"
      ctaText="Whether your reels aren't gaining traction, your ad spend isn't converting into real leads, or you're starting an Instagram presence from scratch, posting alone was never going to build a paying audience. Let's talk through your brand and scope what real Instagram marketing would actually involve."
      ctaPrimaryText="Talk to an Instagram Marketing Specialist"
      ctaSecondaryText="Get Your Free Instagram Marketing Consultation"
    />
  );
}
