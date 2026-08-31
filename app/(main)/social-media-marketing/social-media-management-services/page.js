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
  title: "Social Media Management Services | BizzBuzz Creations",
  description:
    "Social media management services in India — daily posting, content calendars, and audience engagement handled end-to-end by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/social-media-marketing/social-media-management-services",
  },
};

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Startups & Early-Stage Businesses",
    desc: "Startups need an active social presence fast, without a founder personally posting every day. We build a content calendar and posting rhythm early, so startups show up consistently without it eating into founder time.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMBs often post reactively, whenever there's time, rather than on a planned schedule. We manage social media sized for SMB budgets, keeping profiles active and on-brand without you having to think about it daily.",
  },
  {
    icon: Building,
    title: "Enterprises & Multi-Brand Companies",
    desc: "Enterprises need consistent voice and quality maintained across multiple brands, teams, and platforms at once. We run social media management at enterprise scale, keeping tone and visual identity aligned across every profile.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce & Retail Brands Needing Daily Content",
    desc: "Ecommerce brands need a steady stream of product and lifestyle content to stay visible between campaigns. We build daily content and posting schedules that keep your store's social presence active and shoppable.",
  },
  {
    icon: Handshake,
    title: "Agencies Needing a Social Media Fulfillment Partner",
    desc: "Agencies managing multiple client accounts need a reliable partner to handle day-to-day execution. We work as a white-label social media management partner, handling content and engagement agencies can present as their own.",
  },
  {
    icon: RefreshCw,
    title: "Businesses With Inconsistent or Abandoned Profiles",
    desc: "Businesses with profiles that go quiet for weeks at a time lose the audience they've already built. We audit and rebuild inactive accounts into a properly managed, consistently active presence.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Social Media Strategy & Content Calendars",
    desc: "A content calendar planned around your brand's key dates, campaigns, and audience activity, not a random posting schedule.",
    ctaText: "Know Our Services",
    services: [
      "Social Media Strategy Development",
      "Monthly Content Calendar Planning",
      "Campaign-Aligned Scheduling",
      "Platform Mix Planning",
      "Audience Activity Analysis",
      "Content Theme Planning",
      "Posting Frequency Strategy",
      "Content Calendar Documentation",
    ],
  },
  {
    number: "02",
    title: "Content Creation & Daily Posting",
    desc: "Captions, visuals, and posts produced and published on schedule, so your profiles stay active without your involvement.",
    ctaText: "Know Our Services",
    services: [
      "Social Media Content Creation",
      "Caption Writing",
      "Graphic & Visual Design",
      "Daily Post Scheduling",
      "Content Batching",
      "Platform-Specific Formatting",
      "Post Approval Workflows",
      "Content Library Management",
    ],
  },
  {
    number: "03",
    title: "Community & Audience Engagement",
    desc: "Comments, DMs, and mentions handled promptly and on-brand, turning casual followers into an engaged community.",
    ctaText: "Know Our Services",
    services: [
      "Comment Management",
      "DM & Inbox Management",
      "Mention Monitoring",
      "Community Engagement",
      "Response Time Optimization",
      "Follower Interaction Strategy",
      "Crisis & Negative Comment Handling",
      "Engagement Reporting",
    ],
  },
  {
    number: "04",
    title: "Brand Consistency Across Platforms",
    desc: "Visual style, tone, and messaging kept consistent across Instagram, Facebook, and LinkedIn, so your brand feels like one voice everywhere.",
    ctaText: "Know Our Services",
    services: [
      "Brand Voice Documentation",
      "Cross-Platform Style Guides",
      "Visual Identity Consistency",
      "Multi-Platform Coordination",
      "Tone & Messaging Alignment",
      "Brand Guideline Development",
      "Platform-Specific Adaptation",
      "Consistency Audits",
    ],
  },
  {
    number: "05",
    title: "Performance Reporting & Analytics",
    desc: "Regular reports showing what's actually working, reach, engagement, and follower growth, not just vanity numbers.",
    ctaText: "Know Our Services",
    services: [
      "Monthly Performance Reports",
      "Reach & Engagement Tracking",
      "Follower Growth Analysis",
      "Content Performance Breakdown",
      "Platform Analytics Review",
      "Competitor Benchmarking",
      "Custom Reporting Dashboards",
      "Strategy Refinement Based on Data",
    ],
  },
  {
    number: "06",
    title: "Ongoing Optimization & Trend Adaptation",
    desc: "Continuous adjustment of content types, timing, and formats as platforms and audience behavior shift.",
    ctaText: "Know Our Services",
    services: [
      "Posting Time Optimization",
      "Content Format Testing",
      "Trend Monitoring & Adaptation",
      "AI-Backed Content Planning",
      "Seasonal Campaign Planning",
      "Platform Algorithm Monitoring",
      "Content Refresh Cycles",
      "Quarterly Strategy Reviews",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Brand & Audience Discovery",
    desc: "We learn your brand's story, tone, and audience before planning a single post, so the content actually fits who you are.",
  },
  {
    number: "02",
    title: "Content Calendar Build",
    desc: "We map out a month-by-month content calendar aligned to your goals, key dates, and platform mix.",
  },
  {
    number: "03",
    title: "Content Production & Approval",
    desc: "Captions and visuals get produced and shared for your review, keeping you in the loop before anything goes live.",
  },
  {
    number: "04",
    title: "Daily Posting & Engagement",
    desc: "Posts go out on schedule while we actively manage comments, DMs, and community engagement in your brand voice.",
  },
  {
    number: "05",
    title: "Reporting & Refinement",
    desc: "We review performance regularly and adjust content types and timing based on what's genuinely resonating.",
  },
  {
    number: "06",
    title: "Ongoing Scaling & Optimization",
    desc: "As your audience grows, we scale content volume and platform coverage to match, refining the strategy continuously.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Consistent, On-Brand Presence",
    desc: "Your profiles stay active and cohesive across platforms, professional and on-brand at all times, rather than going quiet between campaigns.",
  },
  {
    number: "02",
    title: "No One-Size-Fits-All Packages",
    desc: "Every content calendar is shaped around your specific brand, audience, and goals, not a generic template applied across every client.",
  },
  {
    number: "03",
    title: "Real Community Engagement, Not a Checkbox",
    desc: "We treat comments and DMs as real conversations, building genuine follower relationships instead of just marking engagement as handled.",
  },
  {
    number: "04",
    title: "AI-Backed Planning With Human Judgment",
    desc: "AI marketing tools help plan smarter content and predict trends early, paired with human judgment on tone and creative calls.",
  },
  {
    number: "05",
    title: "Transparent, Honest Reporting",
    desc: "You get regular, honest reports on reach and engagement, not just a vague monthly summary with no real detail behind it.",
  },
  {
    number: "06",
    title: "Built to Scale as Your Brand Grows",
    desc: "Content volume and platform coverage scale with your business, so management doesn't need rebuilding every time you grow.",
  },
];

const FAQS = [
  {
    question: "What's included in social media management services?",
    answer:
      "Content calendar planning, daily posting, community engagement, and performance reporting across your chosen social platforms.",
  },
  {
    question: "Which platforms do you manage?",
    answer:
      "We typically manage Instagram, Facebook, and LinkedIn, and can tailor the mix to whichever platforms matter most for your business.",
  },
  {
    question: "How often will you post on our profiles?",
    answer:
      "Posting frequency is planned around your brand and goals — we'll recommend a realistic, sustainable schedule during onboarding.",
  },
  {
    question: "Do you also handle comments and messages?",
    answer:
      "Yes, community engagement — responding to comments and DMs in your brand voice — is part of our management service.",
  },
  {
    question: "How much do social media management services cost?",
    answer:
      "Pricing depends on platform count, posting frequency, and content complexity — we'll give you a clear, tailored quote.",
  },
];

export default function SocialMediaManagementServices() {
  return (
    <ServiceDetailPage
      sectionLabel="Social Media Marketing"
      label="Social Media Management Services"
      icon={TrendingUp}
      description="Daily posting, content calendars, and audience engagement handled end-to-end, keeping your brand active and consistent across every platform."
      heroTitle="Get a Social Media Presence That Actually Stays Active"
      heroDescription="Daily posting, content calendars, and audience engagement handled end-to-end, keeping your brand active and consistent across every platform."
      heroCtaText="Get a Free Social Media Consultation"
      capabilitiesHeading="Built for Businesses Ready for a Consistent Social Presence"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our Social Media Management"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="What Makes Our Social Media Management Different"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="Our Social Media Management Process"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Managing Social Media Nationally"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we manage every social media account, with the same consistency whether a client is nearby or across the country. We provide social media management services for startups, SMBs, and enterprises across India, sizing content calendars and posting cadence to each business's actual audience. Whether you're a startup building your first real presence in Prayagraj or a multi-brand company managing several accounts at once, our approach starts with the same question: what does your audience actually want to see from you."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for Social Media That Actually Stays Active?"
      ctaText="Whether your profiles have gone quiet, you need a proper content calendar for the first time, or you're ready to hand off day-to-day posting entirely, inconsistent effort was never going to build a real audience. Let's talk through your brand and scope what social media management would actually involve."
      ctaPrimaryText="Talk to a Social Media Management Specialist"
      ctaSecondaryText="Get Your Free Social Media Consultation"
    />
  );
}
