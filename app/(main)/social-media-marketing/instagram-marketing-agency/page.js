import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Camera,
  Film,
  Target,
  Users,
  BarChart3,
  Sparkles,
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
    icon: Film,
    title: "Reels & Story Strategy",
    desc: "We plan and produce reels and stories designed to stop the scroll, matched to what's actually working on Instagram right now.",
  },
  {
    icon: Camera,
    title: "Scroll-Stopping Content Creation",
    desc: "Feed posts, carousels, and visuals are created to look native to Instagram, not like recycled content from another platform.",
  },
  {
    icon: Target,
    title: "Targeted Instagram Ads",
    desc: "We run Instagram ad campaigns targeted at the audiences most likely to convert, tracked and optimized for real results, not just reach.",
  },
  {
    icon: Users,
    title: "Influencer & Collaboration Support",
    desc: "Where it fits your brand, we help identify and coordinate influencer collaborations that extend your reach authentically.",
  },
  {
    icon: BarChart3,
    title: "Engagement & Growth Tracking",
    desc: "We track real engagement and follower growth, not just impressions, so you know the strategy is actually building an audience.",
  },
  {
    icon: Sparkles,
    title: "Trend-Responsive Planning",
    desc: "Content plans adapt to emerging Instagram trends and formats quickly, so your brand doesn't fall behind the platform's shifts.",
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
    title: "Production & Ad Launch",
    desc: "Content gets produced and published, with targeted Instagram ads launched alongside organic content for coordinated growth.",
  },
  {
    number: "04",
    title: "Track & Optimize",
    desc: "We monitor engagement, follower growth, and ad performance, adjusting creative and targeting to keep results improving.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "001",
    title: "Real Engagement Focus",
    desc: "We build genuine engagement, not just likes, so your audience actually becomes customers over time.",
  },
  {
    number: "002",
    title: "Reels-First Content",
    desc: "Short-form video gets prioritized in our content mix since it drives the most reach on Instagram today.",
  },
  {
    number: "003",
    title: "Performance-Tracked Ads",
    desc: "Every rupee spent on Instagram ads is tracked and optimized for real leads, not just clicks and impressions.",
  },
  {
    number: "004",
    title: "Platform-Native Creative",
    desc: "Content is made to look and feel native to Instagram, not repurposed filler from another channel.",
  },
  {
    number: "005",
    title: "Trend-Aware Strategy",
    desc: "We keep pace with Instagram's format shifts so your brand stays visible as the platform evolves.",
  },
  {
    number: "006",
    title: "Prayagraj-Based, Nationally Trusted",
    desc: "An Instagram marketing team in Prayagraj with a strong grasp of Indian audiences, serving brands across India.",
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
      description="From reels to story strategy, our Instagram marketing team builds real engagement, not just likes. We create scroll-stopping content and run targeted Instagram ads that turn followers into genuine paying customers."
      heroTitle="Instagram Marketing Agency in India"
      heroDescription="From reels to story strategy, our Instagram marketing team builds real engagement, not just likes. We create scroll-stopping content and run targeted Instagram ads that turn followers into genuine paying customers."
      capabilitiesHeading="What's Included in Our Instagram Marketing"
      capabilities={CAPABILITIES}
      roadmapCarouselHeading="Our Instagram Marketing Process"
      roadmapCarouselSteps={ROADMAP_STEPS}
      differentiatorsHeading="What Makes Our Instagram Marketing Different"
      differentiators={DIFFERENTIATORS}
      faqs={FAQS}
      whyChooseUsHeading="Instagram Marketing Company"
      whyChooseUsText="BizzBuzz Creations grows Instagram presences for businesses across India through scroll-stopping content and performance-tracked ads. We're a social media marketing agency based in Prayagraj, proudly serving businesses locally across Allahabad and Uttar Pradesh, as well as brands across India."
    />
  );
}
