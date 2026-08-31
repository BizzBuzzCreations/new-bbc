import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Sparkles,
  Rocket,
  Building2,
  Building,
  ShoppingCart,
  Handshake,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "AI Social Media Marketing Services | BizzBuzz Creations",
  description:
    "AI social media marketing in India — smarter content planning, trend prediction, and automation for faster results and lower cost per lead, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/social-media-marketing/ai-social-media-marketing",
  },
};

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Startups & Early-Stage Businesses",
    desc: "Startups need to move fast on content without a large team to plan and produce it manually. We use AI-assisted planning to help startups build a content engine early, without the usual trial-and-error ramp-up.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMBs often can't justify a full-time strategist to track trends and plan content daily. We size AI-backed social media marketing for SMB budgets, giving smaller teams data-driven planning without the overhead.",
  },
  {
    icon: Building,
    title: "Enterprises & Large Organizations",
    desc: "Enterprises need consistent, data-informed content decisions across multiple brands and markets. We run AI-assisted social media programs at enterprise scale, keeping strategy consistent while adapting to each market.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce & Retail Brands",
    desc: "Ecommerce brands need to catch trends and shifts in shopper behavior before competitors do. We use AI-powered trend and performance analysis to keep product content ahead of what's actually resonating.",
  },
  {
    icon: Handshake,
    title: "Agencies Needing an AI-Assisted Fulfillment Partner",
    desc: "Agencies want the efficiency of AI tools without building that capability in-house. We work as a white-label AI social media partner, handling AI-backed planning and execution agencies can present as their own.",
  },
  {
    icon: RefreshCw,
    title: "Businesses Whose Content Has Stopped Performing",
    desc: "Businesses seeing declining engagement despite consistent posting need a smarter approach, not just more volume. We use AI-powered analysis to diagnose what's actually underperforming and rebuild the content strategy around it.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "AI-Assisted Content Planning",
    desc: "AI tools help identify content ideas and formats likely to perform, giving our strategists a data-backed starting point instead of guesswork.",
    ctaText: "Know Our Services",
    services: [
      "AI-Assisted Content Ideation",
      "Data-Backed Content Planning",
      "Content Format Recommendations",
      "AI Content Calendar Support",
      "Audience Interest Analysis",
      "Content Gap Identification",
      "AI-Assisted Copywriting Support",
      "Strategist-Reviewed Output",
    ],
  },
  {
    number: "02",
    title: "Early Trend Prediction",
    desc: "AI-powered trend analysis helps us spot emerging content formats and topics early, so your brand posts before a trend peaks, not after.",
    ctaText: "Know Our Services",
    services: [
      "AI-Powered Trend Monitoring",
      "Emerging Format Identification",
      "Audio & Sound Trend Tracking",
      "Topic Trend Analysis",
      "Early Adoption Content Planning",
      "Platform Trend Alerts",
      "Trend Relevance Filtering",
      "Trend-to-Content Translation",
    ],
  },
  {
    number: "03",
    title: "Smart Posting Time Optimization",
    desc: "Engagement data and AI recommendations used to post when your specific audience is most active, not a generic best-practice time.",
    ctaText: "Know Our Services",
    services: [
      "AI-Based Posting Time Analysis",
      "Audience Activity Modeling",
      "Platform-Specific Timing Optimization",
      "Automated Schedule Recommendations",
      "Time Zone-Aware Scheduling",
      "Engagement Window Testing",
      "Posting Cadence Optimization",
      "Timing Performance Reviews",
    ],
  },
  {
    number: "04",
    title: "Social Media Automation",
    desc: "Routine scheduling and workflow tasks get automated, freeing our team's time for creative strategy and genuine engagement.",
    ctaText: "Know Our Services",
    services: [
      "Automated Post Scheduling",
      "Workflow Automation Setup",
      "Content Approval Automation",
      "Cross-Platform Publishing Automation",
      "Automated Performance Alerts",
      "Reporting Automation",
      "Engagement Trigger Automation",
      "Automation Tool Integration",
    ],
  },
  {
    number: "05",
    title: "AI-Powered Performance Analysis",
    desc: "AI tools help surface patterns in what's converting across your content, sharpening the strategy faster than manual review alone.",
    ctaText: "Know Our Services",
    services: [
      "AI-Powered Analytics Review",
      "Content Pattern Recognition",
      "Performance Anomaly Detection",
      "Predictive Performance Modeling",
      "Cross-Content Comparison Analysis",
      "AI-Assisted Reporting",
      "Strategy Recommendation Generation",
      "Data-Driven Strategy Refinement",
    ],
  },
  {
    number: "06",
    title: "Human-Reviewed AI Output",
    desc: "Every AI-assisted recommendation and piece of content reviewed by our team before it goes live, keeping quality and brand voice intact.",
    ctaText: "Know Our Services",
    services: [
      "Human Editorial Review",
      "Brand Voice Quality Control",
      "AI Output Fact-Checking",
      "Tone Consistency Checks",
      "Final Approval Workflows",
      "Creative Judgment Layer",
      "AI-Human Collaboration Process",
      "Quality Assurance Standards",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "AI Audit & Data Setup",
    desc: "We connect AI tools to your existing social data to establish a baseline of what's currently working across your content.",
  },
  {
    number: "02",
    title: "AI-Backed Content Planning",
    desc: "AI-assisted trend and performance analysis feeds into a content calendar, refined by our strategists before anything is scheduled.",
  },
  {
    number: "03",
    title: "Human Review & Approval",
    desc: "Every AI-assisted recommendation gets reviewed by our team, checking tone, accuracy, and brand fit before anything is finalized.",
  },
  {
    number: "04",
    title: "Automated Scheduling & Posting",
    desc: "Approved content gets scheduled and posted at data-optimized times using automation tools, reducing delays and missed windows.",
  },
  {
    number: "05",
    title: "AI-Assisted Optimization",
    desc: "We continuously feed performance data back into our AI tools to refine future content and targeting decisions.",
  },
  {
    number: "06",
    title: "Monthly Strategy Review",
    desc: "We review AI-surfaced patterns and human judgment together each month, adjusting strategy based on what's actually working.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "AI Where It Genuinely Helps",
    desc: "We use AI for planning, trend spotting, and analysis, while creative judgment and brand voice stay human-led throughout.",
  },
  {
    number: "02",
    title: "Faster, Lower-Cost Results",
    desc: "AI-assisted planning and automation speed up execution, helping bring down cost per lead over time as the account matures.",
  },
  {
    number: "03",
    title: "Early Trend Advantage",
    desc: "AI-powered trend analysis helps your brand show up on emerging formats before they become oversaturated by competitors.",
  },
  {
    number: "04",
    title: "Human-Reviewed Quality",
    desc: "Every piece of AI-assisted content is reviewed by our team, so nothing generic or off-brand goes live under your name.",
  },
  {
    number: "05",
    title: "Data-Driven Decisions",
    desc: "AI-powered analysis surfaces patterns in your performance data faster than manual review, sharpening strategy sooner.",
  },
  {
    number: "06",
    title: "Automation That Frees Up Strategy Time",
    desc: "Routine scheduling and reporting tasks run automatically, so more time goes into strategy and creative than manual admin.",
  },
];

const FAQS = [
  {
    question: "Does AI replace human strategists in social media marketing?",
    answer:
      "No, AI assists with planning, trend prediction, and analysis, while our human strategists make the creative and brand-voice decisions.",
  },
  {
    question: "Will AI-generated content look robotic or generic?",
    answer:
      "No, every AI-assisted output is reviewed and refined by our team before publishing, so content stays genuine and on-brand.",
  },
  {
    question: "How does AI help lower cost per lead?",
    answer:
      "AI-assisted targeting, timing, and content planning improve efficiency, meaning ad and content spend goes further toward results that convert.",
  },
  {
    question: "What tools do you use for AI social media marketing?",
    answer:
      "We use a mix of AI-powered scheduling, trend analysis, and performance tools, chosen based on what fits your platforms and goals best.",
  },
  {
    question: "Is AI social media marketing more expensive than standard management?",
    answer:
      "Not necessarily — AI-assisted efficiency often helps offset costs over time by improving targeting and reducing wasted spend.",
  },
];

export default function AiSocialMediaMarketing() {
  return (
    <ServiceDetailPage
      sectionLabel="Social Media Marketing"
      label="AI Social Media Marketing"
      icon={Sparkles}
      description="AI marketing tools and social media automation used to plan smarter content, predict trends early, and post at the best time for engagement."
      heroTitle="Get Social Media Results Faster With AI-Backed Strategy"
      heroDescription="AI marketing tools and social media automation used to plan smarter content, predict trends early, and post at the best time for engagement."
      heroCtaText="Get a Free AI Social Media Consultation"
      capabilitiesHeading="Built for Businesses Ready for Smarter, Faster Social Media"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our AI Social Media Marketing"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="What Makes Our AI Social Media Marketing Different"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="Our AI Social Media Marketing Process"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Running AI-Backed Campaigns Nationally"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we combine AI tools with human strategy for every client, with the same rigor whether a client is nearby or across the country. We provide AI-assisted social media marketing for startups, SMBs, and enterprises across India, sizing automation and planning to each business's actual content volume. Whether you're a startup in Prayagraj wanting a data-backed content engine from day one or an enterprise managing multiple brands, our approach starts with the same question: what does your performance data actually say is working."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for Social Media Backed by Real Data?"
      ctaText="Whether your current content is guesswork dressed up as strategy, you want to catch trends before they peak, or you simply need results faster without ballooning cost per lead, manual planning alone was never going to keep pace. Let's talk through your content and scope what AI-backed social media marketing would actually involve."
      ctaPrimaryText="Talk to an AI Social Media Specialist"
      ctaSecondaryText="Get Your Free AI Social Media Consultation"
    />
  );
}
