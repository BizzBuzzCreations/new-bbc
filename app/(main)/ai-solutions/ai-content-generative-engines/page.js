import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Sparkles,
  PenTool,
  Zap,
  ShoppingCart,
  Handshake,
  ShieldCheck,
  Video,
} from "lucide-react";

export const metadata = {
  title: "AI Content Generation Services | BizzBuzz Creations",
  description:
    "BizzBuzz Creations offers AI content generation services combining generative AI and strategy across India and worldwide.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/ai-solutions/ai-content-generative-engines",
  },
};

const CAPABILITIES = [
  {
    icon: PenTool,
    title: "Businesses Needing More Content Than Their Team Can Produce",
    desc: "Content demands often outpace what a small team can realistically write, edit, and publish consistently. We provide ai content generation services that scale output without sacrificing quality control.",
  },
  {
    icon: Zap,
    title: "Marketing Teams Needing Faster Content Turnaround",
    desc: "Marketing teams under pressure to ship content quickly often sacrifice quality or consistency in the rush. We work as an ai content marketing agency that speeds up production while keeping standards high.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Brands Needing Product Content at Scale",
    desc: "Ecommerce catalogs with hundreds or thousands of products need product descriptions that would take forever to write manually one by one. We provide AI-generated product content built to scale with your catalog.",
  },
  {
    icon: Handshake,
    title: "Agencies Needing AI-Assisted Content Capacity",
    desc: "Agencies serving multiple clients often need more content capacity than their internal team can deliver alone. We provide generative ai solutions company support that agencies can bring directly to client work.",
  },
  {
    icon: ShieldCheck,
    title: "Businesses Worried AI Content Will Sound Generic",
    desc: "Many businesses hesitate on AI content specifically because they've seen generic, obviously AI-written content elsewhere. We work as an ai copywriting agency focused specifically on avoiding that generic tell.",
  },
  {
    icon: Video,
    title: "Companies Needing AI Video & Image Content Production",
    desc: "Written content isn't the only bottleneck, visual and video content production is often even more resource-intensive. We provide ai video content generation alongside written content as one connected service.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "AI Content Strategy",
    desc: "A content strategy that determines where AI genuinely helps, and where it doesn't, before production begins.",
    ctaText: "Know Our Services",
    services: [
      "AI Content Strategy Consulting",
      "Content Gap Analysis",
      "Content Calendar Planning",
      "Format & Channel Strategy",
      "AI Tool Selection Guidance",
      "Content ROI Planning",
      "Workflow Design",
      "Strategy Documentation",
    ],
  },
  {
    number: "02",
    title: "AI Copywriting & Blog Content",
    desc: "Written content across formats, generated efficiently and refined to actually sound like your brand.",
    ctaText: "Know Our Services",
    services: [
      "AI Copywriting Services",
      "AI-Assisted Blog Writing",
      "Product Description Generation",
      "Ad Copy Generation",
      "Email Copy Generation",
      "Landing Page Copy Generation",
      "SEO Content Generation",
      "Multi-Format Copy Adaptation",
    ],
  },
  {
    number: "03",
    title: "AI Video & Image Content",
    desc: "Visual and video content produced at a pace manual production alone couldn't sustain.",
    ctaText: "Know Our Services",
    services: [
      "AI Video Content Generation",
      "AI Image Generation",
      "AI-Assisted Video Editing",
      "Social Media Visual Generation",
      "Product Visual Generation",
      "AI Voiceover Generation",
      "Brand-Consistent Visual Prompting",
      "Visual Content Quality Review",
    ],
  },
  {
    number: "04",
    title: "Generative AI Workflow Setup",
    desc: "A content production pipeline that actually uses AI systematically, not ad-hoc tool usage.",
    ctaText: "Know Our Services",
    services: [
      "Generative AI Workflow Design",
      "Content Production Pipeline Setup",
      "AI Tool Stack Integration",
      "Approval Workflow Automation",
      "Content Repurposing Automation",
      "Batch Content Generation Setup",
      "Workflow Documentation",
      "Team Training on AI Tools",
    ],
  },
  {
    number: "05",
    title: "Brand Voice Training for AI",
    desc: "AI trained specifically on your brand's tone and style, so output doesn't sound generic.",
    ctaText: "Know Our Services",
    services: [
      "Brand Voice Guideline Development",
      "AI Model Fine-Tuning for Voice",
      "Tone & Style Calibration",
      "Brand-Specific Prompt Engineering",
      "Voice Consistency Testing",
      "Reference Content Training",
      "Ongoing Voice Refinement",
      "Brand Safety Guardrails",
    ],
  },
  {
    number: "06",
    title: "Content Quality & Editorial Review",
    desc: "Human review built into the process, catching errors and generic-sounding output before publication.",
    ctaText: "Know Our Services",
    services: [
      "Human Editorial Review",
      "Fact-Checking & Accuracy Review",
      "Plagiarism & Originality Checks",
      "Content Performance Tracking",
      "Quality Scoring Framework",
      "Content Revision Workflows",
      "Monthly Content Reports",
      "Continuous Quality Improvement",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Brand & Content Needs Discovery",
    desc: "We start by understanding your brand voice, current content workflow, and where AI could genuinely add value without sacrificing quality.",
  },
  {
    number: "02",
    title: "AI Tool & Workflow Design",
    desc: "We design the specific AI tools and production pipeline suited to your content needs and formats.",
  },
  {
    number: "03",
    title: "Brand Voice Training",
    desc: "We train AI systems on your specific brand voice and existing content, so output stays genuinely on-brand.",
  },
  {
    number: "04",
    title: "Content Production & Generation",
    desc: "AI assists with drafting written, visual, and video content according to the workflow and strategy.",
  },
  {
    number: "05",
    title: "Editorial Review & Refinement",
    desc: "Every piece goes through human review and refinement before publishing, catching errors and generic-sounding output.",
  },
  {
    number: "06",
    title: "Ongoing Optimization & Reporting",
    desc: "We track content performance and continue refining the workflow and brand voice training based on real results.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "AI Speed Combined With Genuine Editorial Quality Control",
    desc: "We use AI to accelerate drafting and ideation, but every piece goes through human editorial review before publishing, avoiding the generic, occasionally inaccurate output unsupervised AI tends to produce.",
  },
  {
    number: "02",
    title: "Content Trained on Your Brand Voice, Not Generic Output",
    desc: "We train AI tools specifically on your brand's tone and existing content, so output actually sounds like you rather than reading like it came from any generic AI tool.",
  },
  {
    number: "03",
    title: "Video, Image, and Written Content Handled Under One Process",
    desc: "We cover written, visual, and video content generation together, rather than treating them as separate, disconnected services requiring different vendors.",
  },
  {
    number: "04",
    title: "Workflow Automation That Actually Scales Your Content Production",
    desc: "We build genuine production pipelines, not one-off AI-generated pieces, so your content output scales systematically rather than depending on manual tool usage each time.",
  },
  {
    number: "05",
    title: "Human Review on Every Piece Before It Represents Your Brand",
    desc: "We never publish AI output without human review, protecting your brand from inaccuracies or off-brand tone that unsupervised AI content can carry.",
  },
  {
    number: "06",
    title: "Transparent Reporting on What AI Content Is Actually Achieving",
    desc: "We report on content performance clearly, giving you real evidence of whether AI-assisted content is actually delivering results, not just producing volume.",
  },
];

const FAQS = [
  {
    question: "Will AI-generated content sound generic or actually match our brand?",
    answer:
      "This depends heavily on how it's set up, unsupervised AI content often does sound generic. We train tools specifically on your brand voice and review every piece before publishing, which is why our approach avoids that generic tell.",
  },
  {
    question: "How much does AI content generation cost in India?",
    answer:
      "Cost depends on volume and content type, written content alone costs less than a full production pipeline covering written, visual, and video content together. We scope pricing after understanding your specific needs, rather than a flat rate upfront.",
  },
  {
    question: "Do you offer AI video and image generation, not just written content?",
    answer:
      "Yes, AI video and image content generation is a core part of our service, covering visual and video production alongside written content as one connected offering.",
  },
  {
    question: "Is a human still reviewing content before it's published?",
    answer:
      "Yes, human editorial review is a standard part of our process, since unsupervised AI content carries real risk of inaccuracy or off-brand tone that we specifically build review steps to catch.",
  },
  {
    question: "Can AI content actually rank well for SEO?",
    answer:
      "Yes, when structured properly with genuine value and accuracy, AI-assisted content can perform well for SEO. We combine AI generation with proper SEO structuring and human quality review to support this.",
  },
  {
    question: "Can you set up an AI content workflow for our own team to use?",
    answer:
      "Yes, we build production pipelines and provide training so your internal team can continue using the AI workflow independently, rather than remaining dependent on us for every piece of content.",
  },
];

export default function AiContentGenerativeEngines() {
  return (
    <ServiceDetailPage
      sectionLabel="AI Solutions"
      label="AI Content & Generative Engines"
      icon={Sparkles}
      description="AI content generation built for speed and quality together, not content that reads generic, backed by real strategy and human review."
      heroTitle="Get Content Produced at AI Speed, Reviewed at Human Quality"
      heroDescription="AI content generation built for speed and quality together, not content that reads generic, backed by real strategy and human review."
      heroCtaText="Get a Free AI Content Consultation"
      capabilitiesHeading="Built for Businesses Needing More Content Than They Can Write"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything Between a Content Brief and Published, On-Brand Work"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us With AI Content Generation"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Combine AI Output With Real Editorial Quality"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Producing AI Content Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every AI content project, with the same editorial standards whether a client is nearby or across the world. We provide ai content generation services for businesses across India, built around each brand's specific voice and content needs. For businesses looking for a generative ai content agency beyond India, we support clients worldwide remotely, delivering the same ai copywriting agency standard of work regardless of time zone. Whether you're a marketing team in Prayagraj needing faster turnaround or an agency anywhere else needing AI-assisted content capacity, our approach starts with the same question: where can AI genuinely help without costing you your brand voice."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for Content That Scales Without Going Generic?"
      ctaText="Whether you're overwhelmed by content demands, need faster turnaround for your marketing team, or want AI video and image content alongside written work, manual production alone was never going to keep pace. Let's talk through your content needs and scope what real AI-assisted production would actually involve."
      ctaPrimaryText="Talk to an AI Content Specialist"
      ctaSecondaryText="Get Your Free AI Content Consultation"
    />
  );
}
