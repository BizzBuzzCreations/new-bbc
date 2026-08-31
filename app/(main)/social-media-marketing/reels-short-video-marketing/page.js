import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Video,
  Rocket,
  Building2,
  Building,
  ShoppingCart,
  Handshake,
  RefreshCw,
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
    icon: Rocket,
    title: "Startups & Early-Stage Businesses",
    desc: "Startups need reach fast without an existing following to build on. We produce reels built specifically to get new audiences discovering your brand early, without relying on years of organic growth.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMBs often know short-form video matters but lack the in-house production capacity to do it consistently. We handle reel production sized for SMB budgets, keeping output steady without you hiring a video team.",
  },
  {
    icon: Building,
    title: "Enterprises & Multi-Location Brands",
    desc: "Enterprises need short-form video produced consistently across multiple brands, products, or locations. We run reel production at enterprise scale, keeping quality and brand fit consistent across every output.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce & Retail Brands",
    desc: "Ecommerce brands need product content that actually stops the scroll instead of looking like a static ad. We produce shoppable, trend-aware reels built to drive traffic straight to your product pages.",
  },
  {
    icon: Handshake,
    title: "Agencies Needing a Video Production Partner",
    desc: "Agencies serving clients need reliable short-form video production without building an internal studio. We work as a white-label reels partner, delivering production agencies can present as their own.",
  },
  {
    icon: RefreshCw,
    title: "Brands With Underperforming Video Content",
    desc: "Brands producing video that isn't gaining traction need a structural fix, not just more uploads. We audit underperforming reels and rebuild concepts and editing style around what's actually working now.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Reel Scripting & Concepting",
    desc: "Reel concepts scripted around your brand and what's actually resonating in short-form video right now, not random trend-chasing.",
    ctaText: "Know Our Services",
    services: [
      "Reel Concept Development",
      "Script Writing",
      "Hook & Opening Line Strategy",
      "Storyboard Planning",
      "Brand-Aligned Concepting",
      "Trend-to-Concept Translation",
      "Series & Format Planning",
      "Concept Approval Workflow",
    ],
  },
  {
    number: "02",
    title: "Shooting & Production",
    desc: "The shoot handled by our team, whether on location or in-studio, capturing content built specifically for vertical, short-form formats.",
    ctaText: "Know Our Services",
    services: [
      "On-Location Video Shoots",
      "In-Studio Production",
      "Vertical Format Filming",
      "Lighting & Audio Setup",
      "Talent & Presenter Coordination",
      "Product Shoot Direction",
      "B-Roll Capture",
      "Multi-Take Production Management",
    ],
  },
  {
    number: "03",
    title: "Editing & Post-Production",
    desc: "Fast-paced editing, captions, and sound design applied to keep viewers watching until the end, not scrolling past in seconds.",
    ctaText: "Know Our Services",
    services: [
      "Fast-Paced Video Editing",
      "Caption & Subtitle Design",
      "Sound Design & Music Selection",
      "Color Grading",
      "Motion Graphics & Text Overlays",
      "Hook Optimization Editing",
      "Multi-Version Cutdowns",
      "Final Quality Review",
    ],
  },
  {
    number: "04",
    title: "Trend & Audio Tracking",
    desc: "Trending audio and formats tracked across platforms and adapted to fit your brand authentically, not force-fit irrelevant trends.",
    ctaText: "Know Our Services",
    services: [
      "Trending Audio Monitoring",
      "Format Trend Tracking",
      "Trend Relevance Filtering",
      "Brand-Fit Trend Adaptation",
      "Rapid Trend Response",
      "Platform Algorithm Awareness",
      "Trend Performance Analysis",
      "Trend Calendar Planning",
    ],
  },
  {
    number: "05",
    title: "Multi-Platform Distribution",
    desc: "Reels formatted and distributed across Instagram, Facebook, and other short-form platforms to maximize reach from one shoot.",
    ctaText: "Know Our Services",
    services: [
      "Cross-Platform Formatting",
      "Instagram Reels Distribution",
      "Facebook Reels Distribution",
      "YouTube Shorts Distribution",
      "Platform-Specific Optimization",
      "Repurposing for Multiple Channels",
      "Distribution Scheduling",
      "Platform Performance Comparison",
    ],
  },
  {
    number: "06",
    title: "Reach & Engagement Tracking",
    desc: "Views, completion rate, and engagement tracked to see which reel styles are actually bringing in new audiences.",
    ctaText: "Know Our Services",
    services: [
      "View & Reach Tracking",
      "Completion Rate Analysis",
      "Engagement Rate Reporting",
      "New Audience Growth Tracking",
      "Content Style Performance Comparison",
      "Monthly Performance Reports",
      "Format Effectiveness Analysis",
      "Strategy Refinement Based on Data",
    ],
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
    title: "Shoot Planning",
    desc: "We plan the shoot logistics, whether on location or in-studio, and prepare everything needed before filming begins.",
  },
  {
    number: "03",
    title: "Shoot & Production",
    desc: "Our team shoots content built specifically for vertical, short-form formats, whether on location or in-studio.",
  },
  {
    number: "04",
    title: "Editing & Post-Production",
    desc: "Reels are edited with fast pacing, captions, and sound design to keep viewers watching until the end.",
  },
  {
    number: "05",
    title: "Publishing & Distribution",
    desc: "Finished reels are published and distributed across relevant platforms to maximize reach from each shoot.",
  },
  {
    number: "06",
    title: "Track & Refine",
    desc: "We track views, completion rate, and engagement, refining future reel concepts based on what's actually working.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Built for Short-Form First",
    desc: "Content is scripted and shot specifically for vertical, short-form video, not repurposed from other formats.",
  },
  {
    number: "02",
    title: "Trend-Aware, Brand-Authentic",
    desc: "We adapt trending formats to fit your brand genuinely, instead of force-fitting irrelevant trends onto your content.",
  },
  {
    number: "03",
    title: "Full Production Handled",
    desc: "From scripting to shooting to editing, the entire reel production process runs under one roof with one point of contact.",
  },
  {
    number: "04",
    title: "Reach-Driven Strategy",
    desc: "Short-form video drives the most reach today, our strategy is built around getting your brand in front of new audiences daily.",
  },
  {
    number: "05",
    title: "Performance Tracked",
    desc: "We measure views, completion rate, and engagement to double down on the reel styles genuinely working for your brand.",
  },
  {
    number: "06",
    title: "One Shoot, Multiple Platforms",
    desc: "Content gets formatted and distributed across multiple short-form platforms, maximizing reach from every production day.",
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
      description="Scroll-stopping reels scripted, shot, and edited to bring your brand in front of new audiences daily, not just recycled content."
      heroTitle="Get Reels That Actually Bring You New Audiences Daily"
      heroDescription="Scroll-stopping reels scripted, shot, and edited to bring your brand in front of new audiences daily, not just recycled content."
      heroCtaText="Get a Free Reels Marketing Consultation"
      capabilitiesHeading="Built for Brands Ready to Be Seen by New Audiences"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our Reels & Video Marketing"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="What Makes Our Reels & Video Marketing Different"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="Our Reels & Video Marketing Process"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Producing Reels Nationally"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we produce every reel, with the same production standard whether a client is nearby or across the country. We produce reels and short-form video for startups, SMBs, and enterprises across India, sizing production volume to each brand's actual content needs. Whether you're a startup in Prayagraj needing your first batch of reels or an ecommerce brand anywhere else scaling shoppable video content, our approach starts with the same question: what will actually stop someone from scrolling past."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for Reels That Actually Get Watched?"
      ctaText="Whether your current videos aren't gaining traction, you need consistent production without building an in-house team, or you're starting short-form video from scratch, uploading alone was never going to build real reach. Let's talk through your brand and scope what reels production would actually involve."
      ctaPrimaryText="Talk to a Reels Marketing Specialist"
      ctaSecondaryText="Get Your Free Reels Marketing Consultation"
    />
  );
}
