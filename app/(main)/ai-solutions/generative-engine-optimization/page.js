import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Radar,
  Rocket,
  Building2,
  Building,
  ShoppingCart,
  Handshake,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "GEO (Generative Engine Optimization) | BizzBuzz Creations",
  description:
    "Generative Engine Optimization (GEO) in India — structure your content and website so AI engines like ChatGPT and Google AI Overviews cite and recommend your business, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/ai-solutions/generative-engine-optimization",
  },
};

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Startups & Early-Stage Businesses",
    desc: "Startups building content from scratch have a rare chance to structure it for AI citation from day one. We build GEO into the content plan early, so startups get cited in AI answers before competitors catch up.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMBs often have thin, disconnected content that AI engines skip over for citations. We rework existing content into citable, connected material sized for SMB budgets and content volume.",
  },
  {
    icon: Building,
    title: "Enterprises & Large Organizations",
    desc: "Enterprises need consistent citation across product lines and markets inside AI engines. We run GEO programs at enterprise scale, covering multiple content hubs and maintaining consistency across them.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce & Retail Brands",
    desc: "Shoppers increasingly ask AI engines to compare products before visiting a store directly. We structure product and comparison content so AI engines can accurately cite your offerings.",
  },
  {
    icon: Handshake,
    title: "Agencies Needing a GEO Partner",
    desc: "Content and marketing agencies need a specialist partner as AI engines reshape content strategy. We work as a white-label GEO partner, handling the restructuring work agencies can present as their own.",
  },
  {
    icon: RefreshCw,
    title: "Businesses With Content That Never Gets Cited",
    desc: "Businesses publishing regularly but never appearing in AI-generated answers need a structural fix, not more volume. We audit why your content isn't being cited and rebuild it into a format AI engines can actually use.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Answer-Ready Content Structuring",
    desc: "We restructure key pages into clear, citable chunks — definitions, comparisons, step-by-step answers — the format generative engines pull from most.",
    ctaText: "Know Our Services",
    services: [
      "Content Chunking",
      "Definition Block Formatting",
      "Comparison Table Structuring",
      "Step-by-Step Formatting",
      "Answer-First Rewriting",
      "Heading Structure Optimization",
      "Citable Format Auditing",
      "Content Restructuring Reports",
    ],
  },
  {
    number: "02",
    title: "Citation & Source Optimization",
    desc: "We strengthen the facts, data, and sourcing on your pages so AI engines have clean, quotable material to draw from.",
    ctaText: "Know Our Services",
    services: [
      "Fact Verification",
      "Data Sourcing Improvements",
      "Quotable Statement Writing",
      "Statistic & Data Formatting",
      "Source Attribution Cleanup",
      "Original Research Development",
      "Citation-Ready Summaries",
      "Fact Consistency Audits",
    ],
  },
  {
    number: "03",
    title: "Entity & Topic Authority Building",
    desc: "We build interconnected content around your core topics and entities, giving AI systems a fuller picture of your expertise.",
    ctaText: "Know Our Services",
    services: [
      "Entity Research",
      "Topic Cluster Mapping",
      "Entity-Rich Content Writing",
      "Pillar Content Development",
      "Entity Relationship Building",
      "Knowledge Graph Alignment",
      "Entity Schema Markup",
      "Authority Depth Auditing",
    ],
  },
  {
    number: "04",
    title: "Multi-Platform AI Visibility",
    desc: "We optimize for how your business appears across multiple AI engines — ChatGPT, Perplexity, Google AI Overviews, and more.",
    ctaText: "Know Our Services",
    services: [
      "Multi-Platform Optimization",
      "Google AI Overviews Optimization",
      "ChatGPT Citation Building",
      "Perplexity Optimization",
      "Platform-Specific Testing",
      "Coverage Gap Analysis",
      "Emerging Platform Monitoring",
      "Cross-Platform Reporting",
    ],
  },
  {
    number: "05",
    title: "AI Citation Tracking",
    desc: "We track when and how your brand gets cited or recommended in AI-generated answers, beyond traditional search rankings.",
    ctaText: "Know Our Services",
    services: [
      "Citation Tracking",
      "Prompt Testing",
      "Visibility Dashboards",
      "Competitor Citation Tracking",
      "Monthly Visibility Reports",
      "Trend Analysis",
      "Alert-Based Monitoring",
      "Citation Attribution Analysis",
    ],
  },
  {
    number: "06",
    title: "Continuous Model Adaptation",
    desc: "Generative engines update constantly. We continuously adjust content and structure as these systems change how they select sources.",
    ctaText: "Know Our Services",
    services: [
      "Algorithm Update Monitoring",
      "Content Refresh Cycles",
      "Structure Adaptation",
      "Testing New Formats",
      "Model Behavior Tracking",
      "Strategy Adjustment Reviews",
      "Quarterly GEO Audits",
      "Emerging Model Coverage",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "GEO Readiness Audit",
    desc: "We assess how citable your current content actually is, and where the gaps are compared to what generative engines favor.",
  },
  {
    number: "02",
    title: "Content Restructuring",
    desc: "We rework key pages into clear, well-sourced, citable formats that AI engines can pull from directly.",
  },
  {
    number: "03",
    title: "Authority & Entity Building",
    desc: "We strengthen entity signals and topic depth, which AI systems weigh heavily before recommending a source.",
  },
  {
    number: "04",
    title: "Publishing & Rollout",
    desc: "Restructured content gets published in priority order, focusing first on pages with the highest citation potential.",
  },
  {
    number: "05",
    title: "Cross-Platform Testing",
    desc: "We test real prompts across multiple AI platforms to see where your content is being cited and where it's still missing.",
  },
  {
    number: "06",
    title: "Track & Iterate",
    desc: "We monitor citations across AI platforms and refine the approach as models and their sourcing behavior evolve.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "GEO From Day One",
    desc: "We combine AI integration with GEO from the start, so you're visible wherever customers search, including inside AI answers.",
  },
  {
    number: "02",
    title: "Answer-First Content",
    desc: "Content is structured specifically to be the source AI systems pull from, not just content that ranks traditionally.",
  },
  {
    number: "03",
    title: "Multi-Platform Coverage",
    desc: "We optimize for visibility across multiple generative engines, not a single AI platform.",
  },
  {
    number: "04",
    title: "Entity-First Approach",
    desc: "We make sure AI systems can clearly identify your business as a credible entity in your space, not just a page of text.",
  },
  {
    number: "05",
    title: "Citation Tracking",
    desc: "We measure actual citations and mentions in AI-generated answers, not just proxy metrics.",
  },
  {
    number: "06",
    title: "Honest Reporting",
    desc: "No agency can guarantee citations in every AI answer, and we won't pretend otherwise — you get transparent, honest progress reports instead.",
  },
];

const FAQS = [
  {
    question: "What is GEO, and do I need it?",
    answer:
      "GEO helps AI tools recommend your business in search results, making it essential alongside traditional SEO as more searches happen through AI assistants.",
  },
  {
    question: "How is GEO different from traditional SEO?",
    answer:
      "Traditional SEO aims for a ranked position on a results page; GEO aims for your content being the actual source an AI system quotes or summarizes in its answer.",
  },
  {
    question: "Which AI platforms does GEO target?",
    answer:
      "We optimize for visibility across multiple generative platforms, including ChatGPT, Perplexity, and Google's AI Overviews.",
  },
  {
    question: "Can you guarantee my business appears in AI answers?",
    answer:
      "No ethical agency can guarantee AI citations, but the right entity structuring and content restructuring meaningfully improve your odds of being referenced.",
  },
  {
    question: "How long does GEO take to show results?",
    answer:
      "Some citation improvements can appear within weeks of restructuring key content, though building broader topical authority takes longer.",
  },
];

export default function GenerativeEngineOptimization() {
  return (
    <ServiceDetailPage
      sectionLabel="AI Solutions"
      label="GEO (Generative Engine Optimization)"
      icon={Radar}
      description="Our GEO service structures your content and website so AI engines like ChatGPT, Perplexity, and Google AI Overviews actually cite and recommend your business."
      heroTitle="GEO (Generative Engine Optimization) in India"
      heroDescription="Our GEO service structures your content and website so AI engines like ChatGPT, Perplexity, and Google AI Overviews actually cite and recommend your business."
      capabilitiesHeading="Built for Businesses Ready to Be Cited by AI, Not Just Ranked"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our GEO Services"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us to Build Their GEO Strategy"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Your Content Into an AI-Cited Source"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Building GEO Visibility Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every GEO engagement, with the same rigor whether a client is nearby or overseas. We work with startups, SMBs, and enterprises across India, restructuring content sized to each business's actual topic depth and competition. For businesses looking to improve AI engine visibility beyond India, we deliver GEO remotely, testing citations across platforms and time zones to the same standard regardless of location. Whether you're a startup structuring your first content cluster or an enterprise protecting citations across multiple product lines, our approach starts with auditing how citable your content actually is today."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready to Be the Source AI Actually Recommends?"
      ctaText="Whether you need a GEO readiness audit, a full content restructuring project, or ongoing citation tracking across multiple AI platforms, the right approach depends on how citable your content is today. Let's talk through your content and scope what GEO would actually involve."
      ctaPrimaryText="Talk to a GEO Specialist"
      ctaSecondaryText="Get Your Free GEO Audit"
    />
  );
}
