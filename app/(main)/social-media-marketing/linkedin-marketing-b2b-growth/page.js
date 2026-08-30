import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Linkedin,
  Briefcase,
  Users,
  PenTool,
  Target,
  BarChart3,
} from "lucide-react";

export const metadata = {
  title: "LinkedIn Marketing for B2B Growth | BizzBuzz Creations",
  description:
    "LinkedIn marketing for B2B growth in India — connect with decision-makers, build industry authority, and turn LinkedIn into a steady lead source, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/social-media-marketing/linkedin-marketing-b2b-growth",
  },
};

const CAPABILITIES = [
  {
    icon: Briefcase,
    title: "Company Page Optimization",
    desc: "We optimize your LinkedIn company page to clearly communicate what you do and why decision-makers should pay attention.",
  },
  {
    icon: PenTool,
    title: "Thought Leadership Content",
    desc: "We plan and write posts that position your leadership as genuine experts in your industry, not generic corporate updates.",
  },
  {
    icon: Users,
    title: "Decision-Maker Targeting",
    desc: "Content and outreach are aimed at the specific job titles and industries most likely to become real B2B customers.",
  },
  {
    icon: Target,
    title: "LinkedIn Ads for Lead Generation",
    desc: "We run LinkedIn ad campaigns built specifically for B2B lead generation, tracked against real pipeline impact.",
  },
  {
    icon: Linkedin,
    title: "Employee Advocacy & Networking",
    desc: "We help your team extend organic reach by sharing and engaging with company content on their own profiles.",
  },
  {
    icon: BarChart3,
    title: "Pipeline & Lead Tracking",
    desc: "We measure actual leads and connections generated, not just impressions, so LinkedIn's ROI is clear to you.",
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "B2B Audience & Goal Mapping",
    desc: "We identify the exact decision-makers and industries you want to reach before planning a single post or ad.",
  },
  {
    number: "02",
    title: "Profile & Content Strategy",
    desc: "We optimize your company page and plan thought leadership content that builds credibility with your target audience.",
  },
  {
    number: "03",
    title: "Content & Ad Launch",
    desc: "Posts and LinkedIn ad campaigns go live together, aimed at generating genuine B2B leads, not just visibility.",
  },
  {
    number: "04",
    title: "Track Pipeline & Refine",
    desc: "We track leads and connections generated, refining targeting and content based on what's actually building pipeline.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "001",
    title: "Built for B2B Lead Generation",
    desc: "Every strategy is designed around generating real business leads, not just LinkedIn engagement for its own sake.",
  },
  {
    number: "002",
    title: "Decision-Maker Focused",
    desc: "Content and targeting are aimed at the specific roles and industries that actually make purchasing decisions.",
  },
  {
    number: "003",
    title: "Thought Leadership Positioning",
    desc: "We help build genuine authority for your leadership team, which drives trust with B2B buyers.",
  },
  {
    number: "004",
    title: "Pipeline-Tracked Results",
    desc: "We measure leads and connections generated, giving you a clear picture of LinkedIn's business impact.",
  },
  {
    number: "005",
    title: "Coordinated Organic & Paid",
    desc: "Organic content and LinkedIn ads work together as one strategy, not disconnected efforts.",
  },
  {
    number: "006",
    title: "Prayagraj-Based, Nationally Trusted",
    desc: "A LinkedIn marketing team in Prayagraj with a strong grasp of Indian B2B audiences, serving brands across India.",
  },
];

const FAQS = [
  {
    question: "Is LinkedIn marketing worth it for B2B businesses?",
    answer:
      "Yes, LinkedIn is one of the most effective platforms for reaching decision-makers directly, especially for B2B lead generation and industry authority building.",
  },
  {
    question: "How is LinkedIn marketing different from Instagram or Facebook?",
    answer:
      "LinkedIn content and targeting focus on professional decision-makers and B2B relationships, while Instagram and Facebook typically suit broader consumer engagement.",
  },
  {
    question: "Do you run LinkedIn ads as well as organic content?",
    answer:
      "Yes, we combine organic thought leadership content with targeted LinkedIn ad campaigns for a coordinated lead generation strategy.",
  },
  {
    question: "How long does it take to see B2B leads from LinkedIn?",
    answer:
      "Ads can generate initial leads within weeks, while organic thought leadership and authority-building typically takes a few months to compound.",
  },
  {
    question: "Can you help our leadership team build a personal presence too?",
    answer:
      "Yes, we can plan thought leadership content for founders or executives alongside your company page strategy.",
  },
];

export default function LinkedinMarketingB2bGrowth() {
  return (
    <ServiceDetailPage
      sectionLabel="Social Media Marketing"
      label="LinkedIn Marketing for B2B Growth"
      icon={Linkedin}
      description="Our LinkedIn marketing strategy is built for B2B lead generation. We help you connect with decision-makers, build authority in your industry, and turn LinkedIn into a steady source of business leads."
      heroTitle="LinkedIn Marketing for B2B Growth in India"
      heroDescription="Our LinkedIn marketing strategy is built for B2B lead generation. We help you connect with decision-makers, build authority in your industry, and turn LinkedIn into a steady source of business leads."
      capabilitiesHeading="What's Included in Our LinkedIn Marketing"
      capabilities={CAPABILITIES}
      roadmapCarouselHeading="Our LinkedIn Marketing Process"
      roadmapCarouselSteps={ROADMAP_STEPS}
      differentiatorsHeading="What Makes Our LinkedIn Marketing Different"
      differentiators={DIFFERENTIATORS}
      faqs={FAQS}
      whyChooseUsHeading="LinkedIn Marketing Company"
      whyChooseUsText="BizzBuzz Creations builds LinkedIn strategies for B2B businesses across India, turning industry authority and decision-maker connections into a real pipeline. We're a social media marketing agency based in Prayagraj, proudly serving businesses locally across Allahabad and Uttar Pradesh, as well as B2B brands across India."
    />
  );
}
