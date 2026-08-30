import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  TrendingUp,
  CalendarDays,
  PenTool,
  MessageCircle,
  BarChart3,
  Palette,
  Clock,
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
    icon: CalendarDays,
    title: "Content Calendar Planning",
    desc: "We plan posts around your brand's key dates, campaigns, and audience activity, so content goes out with purpose, not at random.",
  },
  {
    icon: PenTool,
    title: "Daily Posting & Content Creation",
    desc: "From captions to visuals, we handle the day-to-day content production and posting so your profiles stay active and on-brand.",
  },
  {
    icon: MessageCircle,
    title: "Community & Audience Engagement",
    desc: "Comments, DMs, and mentions get responded to promptly and on-brand, turning casual followers into an engaged community.",
  },
  {
    icon: Palette,
    title: "Brand Consistency Across Platforms",
    desc: "Visual style, tone, and messaging stay consistent across Instagram, Facebook, and LinkedIn, so your brand feels like one voice everywhere.",
  },
  {
    icon: BarChart3,
    title: "Performance Reporting",
    desc: "Regular reports show what's actually working — reach, engagement, and follower growth — not just vanity numbers.",
  },
  {
    icon: Clock,
    title: "Consistent Posting Schedule",
    desc: "We keep your profiles active on a reliable schedule, so momentum doesn't stall between campaigns or busy periods.",
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
    title: "Daily Management & Engagement",
    desc: "Posts go out on schedule while we actively manage comments, DMs, and community engagement in your brand voice.",
  },
  {
    number: "04",
    title: "Reporting & Refinement",
    desc: "We review performance regularly and adjust content types and timing based on what's genuinely resonating.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "001",
    title: "Consistent, On-Brand Presence",
    desc: "Your profiles stay active and cohesive across platforms, professional and on-brand at all times.",
  },
  {
    number: "002",
    title: "No One-Size-Fits-All Packages",
    desc: "Every content calendar is shaped around your specific brand, audience, and goals, not a generic template.",
  },
  {
    number: "003",
    title: "Real Community Engagement",
    desc: "We treat comments and DMs as real conversations, not a box to tick, building genuine follower relationships.",
  },
  {
    number: "004",
    title: "AI-Backed Planning",
    desc: "AI marketing tools help plan smarter content and predict trends early, paired with human judgment on tone and creative calls.",
  },
  {
    number: "005",
    title: "Transparent Reporting",
    desc: "You get regular, honest reports on reach and engagement, not just a vague monthly summary.",
  },
  {
    number: "006",
    title: "Prayagraj-Based, Nationally Trusted",
    desc: "A social media team in Prayagraj with a strong grasp of Indian audiences, serving brands across India.",
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
      description="We handle your daily posting, content calendar, and audience engagement so your brand stays active and consistent — professional, on-brand, and always ready to convert visitors into loyal followers."
      heroTitle="Social Media Management Services in India"
      heroDescription="We handle your daily posting, content calendar, and audience engagement so your brand stays active and consistent — professional, on-brand, and always ready to convert visitors into loyal followers."
      capabilitiesHeading="What's Included in Our Social Media Management"
      capabilities={CAPABILITIES}
      roadmapCarouselHeading="Our Social Media Management Process"
      roadmapCarouselSteps={ROADMAP_STEPS}
      differentiatorsHeading="What Makes Our Social Media Management Different"
      differentiators={DIFFERENTIATORS}
      faqs={FAQS}
      whyChooseUsHeading="Social Media Management Company"
      whyChooseUsText="BizzBuzz Creations manages social media profiles for businesses across India, keeping content consistent, on-brand, and genuinely engaging. We're a social media marketing agency based in Prayagraj, proudly serving businesses locally across Allahabad and Uttar Pradesh, as well as brands across India."
    />
  );
}
