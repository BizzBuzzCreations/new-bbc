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
  title: "AI Content & Generative Engines | BizzBuzz Creations",
  description:
    "AI content and generative engines in India — draft, structure, and personalize copy at scale, trained on your brand voice, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/ai-solutions/ai-content-generative-engines",
  },
};

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Startups & Early-Stage Businesses",
    desc: "Startups need to publish content consistently without a large writing team. We build lean content engines trained on brand basics early, so startups can scale output without scaling headcount right away.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMBs often can't sustain a regular content schedule with a small team. We build content engines sized for SMB budgets, keeping output consistent without needing to hire additional writers.",
  },
  {
    icon: Building,
    title: "Enterprises & Large Organizations",
    desc: "Enterprises need content consistency across multiple writers, brands, or regions at volume. We build enterprise content engines structured to maintain brand voice consistently at scale.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce & Retail Brands",
    desc: "Ecommerce catalogs need product descriptions and ad copy at a volume manual writing can't sustain. We build content engines that generate and personalize product copy at scale, reviewed before publishing.",
  },
  {
    icon: Handshake,
    title: "Agencies Needing a Content Engine Partner",
    desc: "Content agencies need a technical partner to build generative systems for clients. We work as a white-label content engine partner, delivering systems agencies can present as their own.",
  },
  {
    icon: RefreshCw,
    title: "Businesses Replacing Inconsistent AI Content",
    desc: "Businesses already using generic AI writing tools often get inconsistent, off-brand output. We replace ad-hoc AI writing with a properly trained content engine that actually sounds like your brand.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Brand-Voice Trained Content Engines",
    desc: "Generative content engines are trained on your brand voice, tone, and past content, so output actually sounds like you, not a generic AI.",
    ctaText: "Know Our Services",
    services: [
      "Brand Voice Training",
      "Tone Calibration",
      "Style Guide Development",
      "Content Engine Configuration",
      "Prompt Engineering",
      "Sample Content Review",
      "Voice Consistency Testing",
      "Ongoing Voice Refinement",
    ],
  },
  {
    number: "02",
    title: "Blog & Long-Form Content Generation",
    desc: "We build systems that draft and structure blog posts and long-form content at scale, keeping quality consistent across volume.",
    ctaText: "Know Our Services",
    services: [
      "Blog Content Generation",
      "Long-Form Article Drafting",
      "Content Structuring",
      "Topic-to-Draft Workflows",
      "SEO-Aligned Drafting",
      "Content Calendar Integration",
      "Draft Quality Scoring",
      "Volume Scaling Support",
    ],
  },
  {
    number: "03",
    title: "Product Description & Ad Copy Variations",
    desc: "Generate multiple product description and ad copy variations quickly, letting you test messaging without a full manual rewrite each time.",
    ctaText: "Know Our Services",
    services: [
      "Product Description Generation",
      "Ad Copy Variation Generation",
      "A/B Testing Copy Sets",
      "Bulk Catalog Copywriting",
      "Platform-Specific Copy Formats",
      "Copy Variation Testing",
      "Messaging Consistency Checks",
      "Copy Refresh Cycles",
    ],
  },
  {
    number: "04",
    title: "Human Review Workflow",
    desc: "Every generated draft flows through a review step before publishing, keeping accuracy and quality intact, not fully automated blind output.",
    ctaText: "Know Our Services",
    services: [
      "Editorial Review Workflow",
      "Fact-Checking Process",
      "Quality Control Checklists",
      "Approval Workflow Setup",
      "Editor Assignment System",
      "Revision Tracking",
      "Publishing Sign-Off Process",
      "Review Turnaround Reporting",
    ],
  },
  {
    number: "05",
    title: "Personalization at Scale",
    desc: "Content gets personalized for different audience segments automatically, something manual content production can't keep up with.",
    ctaText: "Know Our Services",
    services: [
      "Audience Segment Personalization",
      "Dynamic Content Variation",
      "Segment-Specific Messaging",
      "Personalization Rule Setup",
      "Behavioral Content Triggers",
      "Personalization Testing",
      "Segment Performance Tracking",
      "Personalization Scaling",
    ],
  },
  {
    number: "06",
    title: "Content Performance Tracking",
    desc: "We track how AI-generated content performs, feeding results back into the engine to keep improving output quality over time.",
    ctaText: "Know Our Services",
    services: [
      "Content Performance Dashboards",
      "Engagement Tracking",
      "Conversion Tracking",
      "Content Quality Scoring",
      "Feedback Loop Integration",
      "Performance-Based Retraining",
      "Monthly Content Reports",
      "Engine Improvement Cycles",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Brand Voice & Content Audit",
    desc: "We study your existing content and brand voice so the generative engine has a genuine foundation to work from.",
  },
  {
    number: "02",
    title: "Engine Setup & Training",
    desc: "The content engine is configured and trained on your specific brand guidelines, tone, and past high-performing content.",
  },
  {
    number: "03",
    title: "Review Workflow Integration",
    desc: "We build in a human review step so every piece of generated content gets checked before it goes live.",
  },
  {
    number: "04",
    title: "Pilot Content Run",
    desc: "We run a small batch of content through the engine first, refining prompts and training based on the actual output quality.",
  },
  {
    number: "05",
    title: "Testing With Your Team",
    desc: "Your team reviews sample output against real use cases, confirming the engine's voice and quality before scaling volume.",
  },
  {
    number: "06",
    title: "Scale & Refine",
    desc: "We track content performance and refine the engine's output over time based on what's genuinely working.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Trained on Your Brand Voice",
    desc: "Content engines are trained on your actual brand voice and past content, not a generic AI writing style.",
  },
  {
    number: "02",
    title: "Scale Without Losing Quality",
    desc: "We build in review workflows so scaling content production doesn't mean sacrificing accuracy or brand fit.",
  },
  {
    number: "03",
    title: "Multiple Content Types Covered",
    desc: "From blog posts to product descriptions and ad copy, engines are built for the specific content types your business needs.",
  },
  {
    number: "04",
    title: "Personalization at Scale",
    desc: "Content can be personalized for different audience segments automatically, something manual production can't match.",
  },
  {
    number: "05",
    title: "Tested With Your Team",
    desc: "Every content engine is tested with your team before going live, not handed over as an untested demo.",
  },
  {
    number: "06",
    title: "Refined After Launch",
    desc: "We track performance and keep refining the engine's output, not leaving it running blind after handoff.",
  },
];

const FAQS = [
  {
    question: "Will AI-generated content sound generic?",
    answer:
      "No, the content engine is trained specifically on your brand voice and existing content, and every draft goes through a human review step before publishing.",
  },
  {
    question: "What types of content can these engines produce?",
    answer:
      "Blog posts, product descriptions, ad copy variations, and other content types tailored to what your business actually needs.",
  },
  {
    question: "Do you still review the content before it's published?",
    answer:
      "Yes, we build a human review workflow into every content engine, so nothing goes live without a quality check.",
  },
  {
    question: "Can content be personalized for different customer segments?",
    answer:
      "Yes, generative engines can personalize messaging for different audience segments automatically, at a scale manual writing can't match.",
  },
  {
    question: "How long does it take to set up a content engine?",
    answer:
      "Setup typically takes a few weeks, depending on how much brand training and integration with your existing content workflow is needed.",
  },
];

export default function AiContentGenerativeEngines() {
  return (
    <ServiceDetailPage
      sectionLabel="AI Solutions"
      label="AI Content & Generative Engines"
      icon={Sparkles}
      description="Our generative AI content engines draft, structure, and personalize copy at scale, including blog posts, product descriptions, and ad variations, trained on your brand voice."
      heroTitle="AI Content & Generative Engines in India"
      heroDescription="Our generative AI content engines draft, structure, and personalize copy at scale, including blog posts, product descriptions, and ad variations, trained on your brand voice."
      capabilitiesHeading="Built for Businesses Ready to Scale Content Without Losing Their Voice"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our AI Content Engines"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us to Build Their Content Engines"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Your Brand Voice Into a Scalable Content Engine"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Building Content Engines Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we build every content engine project, with the same care whether a client is nearby or overseas. We work with startups, SMBs, and enterprises across India, building engines sized to each business's actual content volume and brand complexity. For businesses looking to build content engines beyond India, we support clients worldwide remotely, working across time zones to deliver the same quality standard regardless of location. Whether you're a startup automating your first blog cadence or an enterprise scaling copy across multiple product lines, our approach starts with training the engine on your actual brand voice first."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for Content That Scales Without Losing Your Voice?"
      ctaText="Whether you need a content engine for blog production, a system for generating product copy at scale, or a replacement for inconsistent AI writing you're already using, a generic tool was never going to get you there. Let's talk through your content needs and scope what a custom content engine would actually involve."
      ctaPrimaryText="Talk to an AI Content Specialist"
      ctaSecondaryText="Get Your Free AI Content Consultation"
    />
  );
}
