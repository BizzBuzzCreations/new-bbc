import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Video,
  Film,
  Scissors,
  TrendingUp,
  BarChart3,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Reels & Short Video Marketing Services | BizzBuzz Creations",
  description:
    "Reels and short video marketing in India — scripted, shot, and edited scroll-stopping reels that bring your brand in front of new audiences daily, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/social-media-marketing/reels-short-video-marketing",
  },
};

const CAPABILITIES = [
  {
    icon: Film,
    title: "Reel Scripting & Concepting",
    desc: "We script reel concepts around your brand and what's actually resonating in short-form video right now, not random trend-chasing.",
  },
  {
    icon: Video,
    title: "Shooting & Production",
    desc: "Our team handles the shoot, whether on location or in-studio, capturing content built specifically for vertical, short-form formats.",
  },
  {
    icon: Scissors,
    title: "Editing & Post-Production",
    desc: "Fast-paced editing, captions, and sound design get applied to keep viewers watching until the end, not scrolling past in seconds.",
  },
  {
    icon: TrendingUp,
    title: "Trend & Audio Tracking",
    desc: "We track trending audio and formats across platforms and adapt them to fit your brand authentically, not force-fit irrelevant trends.",
  },
  {
    icon: Sparkles,
    title: "Multi-Platform Distribution",
    desc: "Reels get formatted and distributed across Instagram, Facebook, and other short-form platforms to maximize reach from one shoot.",
  },
  {
    icon: BarChart3,
    title: "Reach & Engagement Tracking",
    desc: "We track views, completion rate, and engagement to see which reel styles are actually bringing in new audiences.",
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Concept & Script Development",
    desc: "We develop reel concepts and scripts aligned with your brand voice and what's genuinely performing in short-form video right now.",
  },
  {
    number: "02",
    title: "Shoot & Production",
    desc: "Our team shoots content built specifically for vertical, short-form formats, whether on location or in-studio.",
  },
  {
    number: "03",
    title: "Editing & Publishing",
    desc: "Reels are edited with fast pacing, captions, and sound design, then published and distributed across relevant platforms.",
  },
  {
    number: "04",
    title: "Track & Refine",
    desc: "We track views, completion rate, and engagement, refining future reel concepts based on what's actually working.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "001",
    title: "Built for Short-Form First",
    desc: "Content is scripted and shot specifically for vertical, short-form video, not repurposed from other formats.",
  },
  {
    number: "002",
    title: "Trend-Aware, Brand-Authentic",
    desc: "We adapt trending formats to fit your brand genuinely, instead of force-fitting irrelevant trends.",
  },
  {
    number: "003",
    title: "Full Production Handled",
    desc: "From scripting to shooting to editing, the entire reel production process runs under one roof.",
  },
  {
    number: "004",
    title: "Reach-Driven Strategy",
    desc: "Short-form video drives the most reach in 2026 — our strategy is built around getting your brand in front of new audiences daily.",
  },
  {
    number: "005",
    title: "Performance Tracked",
    desc: "We measure views, completion rate, and engagement to double down on the reel styles genuinely working for your brand.",
  },
  {
    number: "006",
    title: "Prayagraj-Based, Nationally Trusted",
    desc: "A reels and video production team in Prayagraj with a strong grasp of Indian audiences, serving brands across India.",
  },
];

const FAQS = [
  {
    question: "Do I need to provide footage, or do you shoot everything?",
    answer:
      "Our team can handle the full shoot, whether on location or in-studio, or work with footage you already have — whichever fits your setup better.",
  },
  {
    question: "How many reels do you produce per month?",
    answer:
      "Volume depends on your plan and goals — we'll recommend a realistic, sustainable production schedule during onboarding.",
  },
  {
    question: "Do reels work for every kind of business?",
    answer:
      "Most businesses can benefit from short-form video, though the content style and platform focus will vary based on your industry and audience.",
  },
  {
    question: "How do you decide which trends to use?",
    answer:
      "We track trending audio and formats, then adapt only the ones that genuinely fit your brand voice, rather than chasing every trend.",
  },
  {
    question: "How is reels marketing priced?",
    answer:
      "Pricing depends on production volume and complexity — we'll give you a clear, tailored quote based on what you need.",
  },
];

export default function ReelsShortVideoMarketing() {
  return (
    <ServiceDetailPage
      sectionLabel="Social Media Marketing"
      label="Reels & Short Video Marketing"
      icon={Video}
      description="Short-form video drives the most reach in 2026. Our reels and video marketing team scripts, shoots, and edits scroll-stopping reels that bring your brand in front of new audiences daily."
      heroTitle="Reels & Short Video Marketing Services in India"
      heroDescription="Short-form video drives the most reach in 2026. Our reels and video marketing team scripts, shoots, and edits scroll-stopping reels that bring your brand in front of new audiences daily."
      capabilitiesHeading="What's Included in Our Reels & Video Marketing"
      capabilities={CAPABILITIES}
      roadmapCarouselHeading="Our Reels & Video Marketing Process"
      roadmapCarouselSteps={ROADMAP_STEPS}
      differentiatorsHeading="What Makes Our Reels & Video Marketing Different"
      differentiators={DIFFERENTIATORS}
      faqs={FAQS}
      whyChooseUsHeading="Reels & Short Video Marketing Company"
      whyChooseUsText="BizzBuzz Creations produces scroll-stopping reels and short-form video for brands across India, built to reach new audiences daily. We're a social media marketing agency based in Prayagraj, proudly serving businesses locally across Allahabad and Uttar Pradesh, as well as brands across India."
    />
  );
}
