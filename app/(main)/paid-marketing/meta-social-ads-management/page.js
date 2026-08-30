import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  MessageCircle,
  Rocket,
  Building2,
  Building,
  ShoppingCart,
  Handshake,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "Meta & Social Ads Management | BizzBuzz Creations",
  description:
    "Meta and social ads management in India — Facebook and Instagram ad creatives and targeting that turn casual scrollers into genuine leads, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/paid-marketing/meta-social-ads-management",
  },
};

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Startups & Early-Stage Businesses",
    desc: "Startups need to test messaging and audiences fast without burning through a small budget. We run lean Meta ad tests early, letting startups find what resonates before scaling spend into it.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMBs often run Meta ads without a real targeting or creative strategy behind them. We manage Meta ads sized for SMB budgets, built around audience data instead of boosted posts.",
  },
  {
    icon: Building,
    title: "Enterprises & Large Organizations",
    desc: "Enterprises need Meta ad management across multiple campaigns and audiences without losing consistency. We run Meta ads at enterprise scale, structured for multi-campaign management and clear reporting.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce & D2C Brands",
    desc: "D2C brands rely on Meta ads for both new customer acquisition and retargeting. We build full-funnel Meta campaigns covering prospecting and retargeting, structured around your actual product margins.",
  },
  {
    icon: Handshake,
    title: "Agencies Needing a Meta Ads Partner",
    desc: "Marketing agencies need a specialist partner to execute Meta ads management for clients. We work as a white-label Meta ads partner, handling campaign execution agencies can present as their own.",
  },
  {
    icon: RefreshCw,
    title: "Businesses Switching From Another Agency",
    desc: "Businesses unhappy with underperforming Meta ads management need a careful account transition. We take over existing ad accounts, auditing performance history before making changes.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Facebook & Instagram Ad Creatives",
    desc: "We design scroll-stopping ad creatives built specifically for feed and story placements, not repurposed banners that feel out of place.",
    ctaText: "Know Our Services",
    services: [
      "Ad Creative Design",
      "Video Ad Production",
      "Story Ad Design",
      "Carousel Ad Design",
      "UGC-Style Creative",
      "Creative Testing",
      "Placement-Specific Creative",
      "Creative Refresh Cycles",
    ],
  },
  {
    number: "02",
    title: "Audience Targeting & Segmentation",
    desc: "Ads are targeted using real customer data and lookalike audiences, reaching people genuinely likely to convert.",
    ctaText: "Know Our Services",
    services: [
      "Audience Research",
      "Lookalike Audience Setup",
      "Custom Audience Creation",
      "Interest-Based Targeting",
      "Behavioral Targeting",
      "Audience Segmentation",
      "Audience Testing",
      "Audience Exclusions",
    ],
  },
  {
    number: "03",
    title: "Ad Copy & Messaging",
    desc: "We write ad copy that starts conversations and prompts action, matched to how people actually scroll and read on social platforms.",
    ctaText: "Know Our Services",
    services: [
      "Ad Copywriting",
      "Headline Testing",
      "CTA Optimization",
      "Messaging Frameworks",
      "Hook Development",
      "Copy A/B Testing",
      "Tone & Voice Alignment",
      "Platform-Specific Copy",
    ],
  },
  {
    number: "04",
    title: "Retargeting & Funnel Campaigns",
    desc: "We build retargeting campaigns that bring back visitors who engaged but didn't convert, recovering demand you'd otherwise lose.",
    ctaText: "Know Our Services",
    services: [
      "Retargeting Campaign Setup",
      "Website Visitor Retargeting",
      "Engagement Retargeting",
      "Funnel Stage Mapping",
      "Cart Abandonment Retargeting",
      "Cross-Sell Retargeting",
      "Retargeting Frequency Management",
      "Full-Funnel Strategy",
    ],
  },
  {
    number: "05",
    title: "Lead & Message Ads",
    desc: "Lead form and click-to-message ads make it effortless for interested prospects to reach out directly from the ad itself.",
    ctaText: "Know Our Services",
    services: [
      "Lead Form Ad Setup",
      "Click-to-Message Ads",
      "Lead Form Optimization",
      "Instant Reply Setup",
      "Lead Ad Integration With CRM",
      "Message Ad Copywriting",
      "Lead Quality Filtering",
      "Lead Follow-Up Workflow Setup",
    ],
  },
  {
    number: "06",
    title: "Transparent Performance Reporting",
    desc: "Every rupee spent is tracked and reported clearly, showing cost per lead and return on ad spend, not vague summaries.",
    ctaText: "Know Our Services",
    services: [
      "Conversion Tracking Setup",
      "Pixel & CAPI Setup",
      "Custom Dashboard Reporting",
      "Cost-Per-Lead Reporting",
      "ROAS Reporting",
      "Weekly Performance Updates",
      "Monthly Performance Reports",
      "Attribution Reporting",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Goals & Audience Discovery",
    desc: "We understand your target customer and campaign goals before setting a single ad live on Facebook or Instagram.",
  },
  {
    number: "02",
    title: "Creative & Targeting Setup",
    desc: "Ad creatives, copy, and audience segments are built to stop the scroll and start conversations with the right people.",
  },
  {
    number: "03",
    title: "Tracking & Pixel Setup",
    desc: "We set up pixel and conversion tracking before launch, so every result is measured accurately from day one.",
  },
  {
    number: "04",
    title: "Launch & Real-Time Monitoring",
    desc: "Campaigns launch with close monitoring in the first days, so underperforming ads get caught and adjusted quickly.",
  },
  {
    number: "05",
    title: "Creative & Audience Testing",
    desc: "We test multiple creatives and audience segments in parallel, identifying what's actually converting fastest.",
  },
  {
    number: "06",
    title: "Optimize & Scale",
    desc: "We double down on what's converting and cut what isn't, scaling spend toward your best-performing campaigns.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Scroll-Stopping Creative",
    desc: "Ad creatives are designed specifically for how people scroll Facebook and Instagram, not repurposed from other channels.",
  },
  {
    number: "02",
    title: "Data-Backed Targeting",
    desc: "Audience segments are built from real customer data and lookalikes, not broad guesses.",
  },
  {
    number: "03",
    title: "Conversation-Starting Copy",
    desc: "We write ad copy designed to prompt action and start real conversations, not just generate impressions.",
  },
  {
    number: "04",
    title: "Retargeting Built In",
    desc: "We capture visitors who engaged but didn't convert, recovering demand competitors leave on the table.",
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
    question: "What's the difference between Meta ads and Facebook ads?",
    answer:
      "Meta ads is the umbrella term covering ads across Facebook and Instagram managed through Meta's ad platform — we run both as part of a coordinated strategy.",
  },
  {
    question: "How much should I budget for Meta ads?",
    answer:
      "Budget depends on your goals and industry — we'll recommend a realistic starting budget and optimize allocation based on what's converting.",
  },
  {
    question: "Do you design the ad creatives, or do I need to provide them?",
    answer:
      "Our team designs ad creatives specifically for Facebook and Instagram placements, or we can work with brand assets you already have.",
  },
  {
    question: "How is Meta ads performance measured?",
    answer:
      "We track cost per lead, conversion rate, and return on ad spend — the metrics that actually reflect business impact, not just reach.",
  },
  {
    question: "How quickly will I see results from Meta ads?",
    answer:
      "Initial data typically comes in within the first one to two weeks, with meaningful optimization improving results over the following month.",
  },
];

export default function MetaSocialAdsManagement() {
  return (
    <ServiceDetailPage
      sectionLabel="Paid Marketing"
      label="Meta & Social Ads Management"
      icon={MessageCircle}
      description="From Facebook to Instagram, our paid media services are designed to stop the scroll and start conversations. We craft ad creatives and targeting strategies that turn casual scrollers into genuine leads for your brand."
      heroTitle="Meta & Social Ads Management in India"
      heroDescription="From Facebook to Instagram, our paid media services are designed to stop the scroll and start conversations. We craft ad creatives and targeting strategies that turn casual scrollers into genuine leads for your brand."
      capabilitiesHeading="Built for Brands Ready to Stop the Scroll"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our Meta Ads Management"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Brands Trust Us to Run Their Meta Ads"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Scrollers Into Genuine Leads"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Running Meta Ads Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we manage every Meta ads account, with the same rigor whether a client is nearby or overseas. We work with startups, SMBs, and enterprises across India, sizing campaigns to each brand's actual budget and audience. For brands looking to run Meta ads beyond India, we manage accounts remotely, working across time zones and markets to deliver the same performance standard regardless of location. Whether you're a startup testing your first creative or an enterprise managing spend across multiple audiences, our approach starts with understanding who you're actually trying to reach."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready to Turn Attention Into Leads?"
      ctaText="Whether you need a fresh Meta ads account built from scratch, a takeover of an underperforming campaign, or full-funnel coverage from prospecting to retargeting, the right setup depends on your actual audience and budget. Let's talk through your goals and scope what Meta ads management would actually involve."
      ctaPrimaryText="Talk to a Meta Ads Specialist"
      ctaSecondaryText="Get Your Free Meta Ads Audit"
    />
  );
}
