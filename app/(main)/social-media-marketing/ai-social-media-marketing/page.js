import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Sparkles,
  Bot,
  Clock,
  TrendingUp,
  BarChart3,
  Wand2,
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
    icon: Bot,
    title: "AI-Assisted Content Planning",
    desc: "AI tools help identify content ideas and formats likely to perform, giving our strategists a data-backed starting point instead of guesswork.",
  },
  {
    icon: TrendingUp,
    title: "Early Trend Prediction",
    desc: "AI-powered trend analysis helps us spot emerging content formats and topics early, so your brand posts before a trend peaks, not after.",
  },
  {
    icon: Clock,
    title: "Smart Posting Time Optimization",
    desc: "We use engagement data and AI recommendations to post when your specific audience is most active, not a generic best-practice time.",
  },
  {
    icon: Wand2,
    title: "Social Media Automation",
    desc: "Routine scheduling and workflow tasks get automated, freeing our team's time for creative strategy and genuine engagement.",
  },
  {
    icon: BarChart3,
    title: "AI-Powered Performance Analysis",
    desc: "AI tools help surface patterns in what's converting across your content, sharpening the strategy faster than manual review alone.",
  },
  {
    icon: Sparkles,
    title: "Human-Reviewed AI Output",
    desc: "Every AI-assisted recommendation and piece of content is reviewed by our team before it goes live, keeping quality and brand voice intact.",
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
    title: "Automated Scheduling & Posting",
    desc: "Approved content gets scheduled and posted at data-optimized times using automation tools, reducing delays and missed windows.",
  },
  {
    number: "04",
    title: "AI-Assisted Optimization",
    desc: "We continuously feed performance data back into our AI tools to refine future content and targeting decisions.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "001",
    title: "AI Where It Genuinely Helps",
    desc: "We use AI for planning, trend spotting, and analysis, while creative judgment and brand voice stay human-led.",
  },
  {
    number: "002",
    title: "Faster, Lower-Cost Results",
    desc: "AI-assisted planning and automation speed up execution, helping bring down cost per lead over time.",
  },
  {
    number: "003",
    title: "Early Trend Advantage",
    desc: "AI-powered trend analysis helps your brand show up on emerging formats before they become oversaturated.",
  },
  {
    number: "004",
    title: "Human-Reviewed Quality",
    desc: "Every piece of AI-assisted content is reviewed by our team, so nothing generic or off-brand goes live.",
  },
  {
    number: "005",
    title: "Data-Driven Decisions",
    desc: "AI-powered analysis surfaces patterns in your performance data faster than manual review, sharpening strategy sooner.",
  },
  {
    number: "006",
    title: "Prayagraj-Based, Nationally Trusted",
    desc: "A social media team in Prayagraj combining AI tools with human strategy, serving brands across India.",
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
      description="We use AI marketing tools and social media automation to plan smarter content, predict trends early, and post at the best time for engagement — faster results, lower cost per lead."
      heroTitle="AI Social Media Marketing Services in India"
      heroDescription="We use AI marketing tools and social media automation to plan smarter content, predict trends early, and post at the best time for engagement — faster results, lower cost per lead."
      capabilitiesHeading="What's Included in Our AI Social Media Marketing"
      capabilities={CAPABILITIES}
      roadmapCarouselHeading="Our AI Social Media Marketing Process"
      roadmapCarouselSteps={ROADMAP_STEPS}
      differentiatorsHeading="What Makes Our AI Social Media Marketing Different"
      differentiators={DIFFERENTIATORS}
      faqs={FAQS}
      whyChooseUsHeading="AI Social Media Marketing Company"
      whyChooseUsText="BizzBuzz Creations combines AI-powered planning and automation with human strategy to deliver faster, more efficient social media marketing for brands across India. We're a social media marketing agency based in Prayagraj, proudly serving businesses locally across Allahabad and Uttar Pradesh, as well as brands across India."
    />
  );
}
