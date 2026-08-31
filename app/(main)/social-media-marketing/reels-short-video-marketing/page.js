import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Video,
  ShoppingCart,
  User,
  Users,
  MapPin,
  Layers,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "Reels & Short Video Marketing Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a Reels and short video marketing agency creating scroll-stopping content for brands across India and worldwide.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/social-media-marketing/reels-short-video-marketing",
  },
};

const CAPABILITIES = [
  {
    icon: ShoppingCart,
    title: "Ecommerce Brands Needing Product-Focused Reels",
    desc: "Ecommerce brands need Reels that show products in action, not just static photos repurposed into video format. We provide instagram reels production services built around demonstrating real product value in the first few seconds.",
  },
  {
    icon: User,
    title: "Personal Brands & Founders Needing Consistent Video Content",
    desc: "Personal brands rely heavily on video to build genuine connection, but consistency is hard to maintain alone. We work with founders as a reels marketing agency partner, keeping their voice intact while producing content consistently.",
  },
  {
    icon: Users,
    title: "Businesses Needing UGC-Style Video Content",
    desc: "Polished, ad-like videos often perform worse than authentic, UGC-style content that feels native to the platform. We work as a ugc video marketing agency, producing content that looks and feels genuinely native, not overly produced.",
  },
  {
    icon: MapPin,
    title: "Local Businesses Needing Local Short-Form Visibility",
    desc: "Local businesses need short-form video that captures what makes their specific location or offering worth visiting. We produce short video marketing agency content that highlights genuine local appeal, not generic stock-style footage.",
  },
  {
    icon: Layers,
    title: "Brands Needing High-Volume, Consistent Reels Production",
    desc: "Growing on short-form video usually requires volume and consistency that most internal teams can't sustain. We provide hire reels editor for business support with a production pipeline built to match the platform's actual demands.",
  },
  {
    icon: RefreshCw,
    title: "Businesses Repurposing Long-Form Content Into Shorts",
    desc: "Businesses already creating podcasts, webinars, or long-form video are sitting on content that could be repurposed into dozens of Reels. We handle video content marketing for social media that extracts far more value from content you've already made.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Reels Strategy & Scripting",
    desc: "A clear content strategy and script behind every Reel, not improvised filming without a plan.",
    ctaText: "Know Our Services",
    services: [
      "Reels Content Strategy",
      "Video Scripting",
      "Trend Research & Adaptation",
      "Hook Writing",
      "Content Calendar Planning",
      "Platform-Specific Strategy (Reels/Shorts/TikTok)",
      "Storyboarding",
      "Concept Development",
    ],
  },
  {
    number: "02",
    title: "Reels & Short Video Production",
    desc: "Professional production covering everything from product demos to founder-led talking content.",
    ctaText: "Know Our Services",
    services: [
      "Instagram Reels Production",
      "YouTube Shorts Production",
      "Product Video Production",
      "Behind-the-Scenes Content",
      "Talking-Head Video Production",
      "Location & Studio Shoots",
      "Founder-Led Video Content",
      "Multi-Format Video Shoots",
    ],
  },
  {
    number: "03",
    title: "UGC-Style Video Content",
    desc: "Authentic-feeling content that performs the way native, unpolished video often outperforms traditional ads.",
    ctaText: "Know Our Services",
    services: [
      "UGC Video Production",
      "UGC Creator Sourcing",
      "Authentic-Style Content Direction",
      "Testimonial-Style Videos",
      "Unboxing & Review-Style Content",
      "UGC Content Editing",
      "UGC Campaign Management",
      "UGC Usage Rights Management",
    ],
  },
  {
    number: "04",
    title: "Editing & Post-Production",
    desc: "Fast, polished editing that keeps content moving at the pace short-form video actually demands.",
    ctaText: "Know Our Services",
    services: [
      "Reels Editing",
      "Motion Graphics & Text Overlays",
      "Sound & Music Selection",
      "Color Grading",
      "Caption & Subtitle Addition",
      "Transition & Effects Editing",
      "Multi-Version Editing (Platform Sizes)",
      "Rapid Turnaround Editing",
    ],
  },
  {
    number: "05",
    title: "Content Repurposing",
    desc: "Getting significantly more value from content you've already created, rather than starting from zero every time.",
    ctaText: "Know Our Services",
    services: [
      "Long-Form to Short-Form Repurposing",
      "Podcast-to-Reels Repurposing",
      "Webinar Clip Extraction",
      "Blog-to-Video Repurposing",
      "Multi-Platform Reformatting",
      "Evergreen Content Recycling",
      "Batch Repurposing Workflows",
      "Content Library Management",
    ],
  },
  {
    number: "06",
    title: "Reels Performance & Distribution",
    desc: "Distribution and optimization that ensures your Reels are actually seen, not just posted and forgotten.",
    ctaText: "Know Our Services",
    services: [
      "Reels Performance Analytics",
      "Posting Time Optimization",
      "Hashtag & Caption Optimization",
      "Cross-Platform Distribution",
      "A/B Testing Hooks",
      "Monthly Performance Reporting",
      "Trend Performance Analysis",
      "Strategy Refinement",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Brand & Content Discovery",
    desc: "We start by understanding your brand, audience, and any existing content, identifying what kind of short-form video actually fits your specific business.",
  },
  {
    number: "02",
    title: "Strategy & Scripting",
    desc: "We plan content pillars and script individual Reels around strong hooks, ensuring every piece has a clear structure before filming begins.",
  },
  {
    number: "03",
    title: "Filming & Production",
    desc: "We produce the video, whether that's a studio shoot, location filming, or founder-led talking content, following the agreed script and style.",
  },
  {
    number: "04",
    title: "Editing & Post-Production",
    desc: "We edit quickly, adding captions, music, and motion graphics as needed, keeping pacing tight for how people actually watch short-form video.",
  },
  {
    number: "05",
    title: "Posting & Distribution",
    desc: "We publish content at optimal times across relevant platforms, ensuring each Reel reaches your audience where they're actually active.",
  },
  {
    number: "06",
    title: "Performance Tracking & Optimization",
    desc: "We track which content performs best and refine future scripts and formats based on real data, not assumption.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Reels Built to Perform, Not Just Look Good",
    desc: "Every Reel is built around a hook and structure proven to hold attention, rather than treating production quality alone as the goal, since a beautifully shot Reel that loses viewers in the first second still fails.",
  },
  {
    number: "02",
    title: "Consistent Production Volume Without Sacrificing Quality",
    desc: "We build a repeatable production pipeline that sustains the posting frequency short-form video demands, without each individual piece feeling rushed or lower quality than the last.",
  },
  {
    number: "03",
    title: "UGC-Style Content That Builds Genuine Trust",
    desc: "We understand why authentic, native-feeling content frequently outperforms polished ads, and produce accordingly, rather than defaulting to overly produced video that feels like an obvious advertisement.",
  },
  {
    number: "04",
    title: "Fast Turnaround for Trend-Sensitive Content",
    desc: "Trends move quickly on short-form platforms, and we build workflows fast enough to capture relevant moments while they're still culturally current, not weeks after the trend has already passed.",
  },
  {
    number: "05",
    title: "Repurposing That Gets More Value From Content You Already Have",
    desc: "We extract Reels-ready clips from podcasts, webinars, and other existing content, getting significantly more mileage from material you've already invested in producing.",
  },
  {
    number: "06",
    title: "Performance Tracking That Shows What's Actually Working",
    desc: "We track which hooks, formats, and topics are actually performing, refining future content based on real data rather than continuing to guess at what your audience wants to see.",
  },
];

const FAQS = [
  {
    question: "How much does Reels and short video production cost in India?",
    answer:
      "Cost depends on volume and production style, a few UGC-style Reels per month cost less than a full studio production schedule. We scope pricing after understanding your specific content needs and posting frequency, rather than offering a flat rate upfront.",
  },
  {
    question: "Do you handle filming, or just editing existing footage?",
    answer:
      "We handle both, full production including filming, and editing-only services for businesses that already have raw footage. We scope this based on what you actually need, rather than assuming every client wants the same level of involvement.",
  },
  {
    question: "Can you produce UGC-style content without hiring outside creators?",
    answer:
      "Yes, we can produce UGC-style content in-house using your products or team, or source creators when a genuinely external voice better suits the content. We scope this based on what will actually feel most authentic for your specific brand.",
  },
  {
    question: "How many Reels can you produce per month?",
    answer:
      "Volume depends on your plan and content complexity, ranging from a handful of polished pieces to a higher-volume, faster-turnaround schedule. We agree on a realistic, sustainable volume during strategy planning rather than committing to more than can be produced well.",
  },
  {
    question: "Can you repurpose our existing long-form content into Reels?",
    answer:
      "Yes, repurposing podcasts, webinars, or other long-form content into short-form clips is a core part of what we do, often producing significantly more Reels-ready material than starting from scratch would allow within the same budget.",
  },
  {
    question: "How do you decide what type of Reels will actually perform?",
    answer:
      "We base this on platform trends, your specific audience's behavior, and ongoing performance data from your own account, rather than applying a generic template that ignores what your particular audience actually responds to.",
  },
];

export default function ReelsShortVideoMarketing() {
  return (
    <ServiceDetailPage
      sectionLabel="Social Media Marketing"
      label="Reels & Short Video Marketing"
      icon={Video}
      description="Reels and short-form video built to stop the scroll and drive real engagement, not just views, produced for how people actually watch."
      heroTitle="Get Reels That Stop the Scroll and Drive Real Results"
      heroDescription="Reels and short-form video built to stop the scroll and drive real engagement, not just views, produced for how people actually watch."
      heroCtaText="Get a Free Reels Strategy Consultation"
      capabilitiesHeading="Built for Brands Competing for Attention in Three Seconds"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything Between a Video Idea and a Reel That Performs"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Brands Trust Us With Their Reels & Video Content"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn an Idea Into a Reel That Actually Gets Watched"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Producing Reels for Brands Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every video project, with the same attention to pacing and hooks whether a client is nearby or across the world. We work as a reels marketing agency for brands across India, providing instagram reels production services built around each brand's specific audience and products. For businesses looking to hire a reels editor beyond India, we support clients worldwide remotely, delivering the same ugc video marketing agency standard of work regardless of time zone. Whether you're a local business in Prayagraj or an ecommerce brand anywhere else scaling video content, our approach starts with the same question: what will actually make someone stop scrolling for your content specifically."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for Reels That Actually Drive Business Results?"
      ctaText="Whether you need consistent product-focused Reels, UGC-style content that builds trust, or want to repurpose existing long-form content into dozens of clips, views alone were never the actual goal. Let's talk through your content and scope what a real Reels strategy would actually involve."
      ctaPrimaryText="Talk to a Reels & Video Marketing Specialist"
      ctaSecondaryText="Get Your Free Reels Strategy Consultation"
    />
  );
}
