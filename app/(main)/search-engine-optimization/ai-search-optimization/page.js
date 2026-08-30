import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Bot,
  Rocket,
  Building2,
  Building,
  ShoppingCart,
  Handshake,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "AI Search Optimization Services | BizzBuzz Creations",
  description:
    "AI search optimization in India — get your website understood, trusted, and recommended by AI-driven platforms like Google AI Overviews and ChatGPT, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/search-engine-optimization/ai-search-optimization",
  },
};

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Startups & Early-Stage Businesses",
    desc: "Startups launching into a crowded market need visibility wherever people are actually searching, including inside AI tools. We build AI search optimization into the content plan from day one, so startups aren't playing catch-up later.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMBs often have zero presence inside AI-generated answers even when they rank well on Google. We size AI search optimization for SMB budgets, focused on the entity signals that matter most for smaller sites.",
  },
  {
    icon: Building,
    title: "Enterprises & Large Organizations",
    desc: "Enterprises need consistent, accurate representation across every AI platform customers might ask about them. We run AI search optimization at enterprise scale, covering multiple product lines and markets consistently.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce & Retail Brands",
    desc: "Shoppers increasingly ask AI tools for product recommendations before searching Google directly. We optimize product and category content so AI platforms can confidently recommend your store for relevant queries.",
  },
  {
    icon: Handshake,
    title: "Agencies Needing an AI SEO Partner",
    desc: "Marketing agencies need a specialist partner as AI search reshapes how clients get discovered. We work as a white-label AI search optimization partner, handling the technical and content work agencies can present as their own.",
  },
  {
    icon: RefreshCw,
    title: "Businesses Invisible in AI Search Today",
    desc: "Businesses that rank on Google but never appear in AI answers are losing a growing share of visibility. We audit why you're currently invisible in AI search and rebuild the signals AI platforms actually look for.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "AI Overview & Answer Visibility",
    desc: "We structure your content so Google AI Overviews and other AI answer boxes can pull from it directly, keeping your brand visible even in zero-click results.",
    ctaText: "Know Our Services",
    services: [
      "AI Overview Optimization",
      "Zero-Click Content Structuring",
      "Answer Box Formatting",
      "Featured Snippet Alignment",
      "Direct-Answer Content Blocks",
      "AI Overview Tracking",
      "Content Chunking for AI",
      "Answer Visibility Reporting",
    ],
  },
  {
    number: "02",
    title: "LLM & Chatbot Discoverability",
    desc: "We optimize how your business appears when people ask AI tools like ChatGPT or Gemini for recommendations in your industry.",
    ctaText: "Know Our Services",
    services: [
      "ChatGPT Visibility Optimization",
      "Gemini Visibility Optimization",
      "Perplexity Optimization",
      "LLM Training Data Signals",
      "Brand Mention Building",
      "Recommendation Testing",
      "Cross-Platform Query Testing",
      "Chatbot Answer Auditing",
    ],
  },
  {
    number: "03",
    title: "Entity & Structured Data Setup",
    desc: "Schema markup and clear entity signals help AI systems correctly understand who you are, what you offer, and why you're credible.",
    ctaText: "Know Our Services",
    services: [
      "Schema Markup Implementation",
      "Entity Optimization",
      "Organization Markup",
      "Knowledge Panel Optimization",
      "Structured Data Audits",
      "Product & Service Schema",
      "FAQ Schema Setup",
      "Entity Consistency Checks",
    ],
  },
  {
    number: "04",
    title: "Trust & Authority Signals",
    desc: "AI platforms favor sources they trust. We strengthen the credibility signals — citations, reviews, consistent facts — that AI systems weigh before recommending you.",
    ctaText: "Know Our Services",
    services: [
      "Citation Building",
      "Review Signal Strengthening",
      "Fact Consistency Audits",
      "Author Credibility Signals",
      "Backlink Trust Building",
      "Third-Party Mention Building",
      "Brand Consistency Audits",
      "Trust Signal Reporting",
    ],
  },
  {
    number: "05",
    title: "AI Visibility Tracking",
    desc: "We monitor how and where your brand shows up across AI search tools, not just traditional Google rankings, so you can see the real impact.",
    ctaText: "Know Our Services",
    services: [
      "AI Visibility Dashboards",
      "Multi-Platform Query Monitoring",
      "Citation Tracking",
      "Competitor AI Visibility Tracking",
      "Monthly Visibility Reports",
      "Prompt Testing",
      "Visibility Trend Analysis",
      "Alert-Based Monitoring",
    ],
  },
  {
    number: "06",
    title: "Continuous AI Algorithm Adaptation",
    desc: "AI search evolves fast. We keep adjusting your strategy as platforms change how they source and rank information.",
    ctaText: "Know Our Services",
    services: [
      "Algorithm Change Monitoring",
      "Strategy Adjustment Cycles",
      "Platform Update Tracking",
      "Ongoing Content Refreshes",
      "Testing New AI Platforms",
      "Adaptive Content Strategy",
      "Quarterly Strategy Reviews",
      "Emerging Platform Coverage",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "AI Visibility Audit",
    desc: "We check how your business currently appears — or doesn't — across Google AI Overviews, ChatGPT, and other AI search tools.",
  },
  {
    number: "02",
    title: "Entity & Content Structuring",
    desc: "We restructure key pages and add schema so AI systems can clearly parse who you are and what you offer.",
  },
  {
    number: "03",
    title: "Authority & Trust Building",
    desc: "We strengthen citations, reviews, and consistent facts about your business across the web, which AI platforms use to judge credibility.",
  },
  {
    number: "04",
    title: "Content Publishing & Optimization",
    desc: "We publish and refine content built specifically to be understood and cited by AI systems, not just traditional search crawlers.",
  },
  {
    number: "05",
    title: "Cross-Platform Testing",
    desc: "We test how your business appears across multiple AI platforms with real queries, identifying gaps before customers do.",
  },
  {
    number: "06",
    title: "Monitor & Refine",
    desc: "We track your AI search visibility monthly and adjust as platforms change how they source and present answers.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Built for How Search Works Now",
    desc: "We optimize for AI Overviews, chatbot answers, and zero-click search, not just traditional blue-link rankings.",
  },
  {
    number: "02",
    title: "Entity-First Approach",
    desc: "We make sure AI systems can clearly identify your business as a credible entity in your space, not just a page of text.",
  },
  {
    number: "03",
    title: "Trust Signal Focused",
    desc: "We strengthen the citations and consistency signals that AI platforms weigh before recommending a source.",
  },
  {
    number: "04",
    title: "Cross-Platform Visibility",
    desc: "We track and optimize for visibility across multiple AI tools, not just one platform.",
  },
  {
    number: "05",
    title: "Data-Driven Execution",
    desc: "Every recommendation is backed by real visibility data, not assumptions about how AI search works.",
  },
  {
    number: "06",
    title: "Honest Reporting",
    desc: "No agency can guarantee AI citations, and we won't pretend otherwise — you get transparent, honest progress reports instead.",
  },
];

const FAQS = [
  {
    question: "What is AI search optimization?",
    answer:
      "It's the practice of structuring and strengthening your online presence so AI-driven platforms like Google AI Overviews and ChatGPT understand, trust, and recommend your business.",
  },
  {
    question: "How is AI search optimization different from traditional SEO?",
    answer:
      "Traditional SEO targets ranking positions on a search results page; AI search optimization also targets being cited or recommended directly inside AI-generated answers.",
  },
  {
    question: "Can you guarantee my business appears in AI answers?",
    answer:
      "No ethical agency can guarantee AI citations, but the right entity structuring and trust signals meaningfully improve your odds of being referenced.",
  },
  {
    question: "How long does AI search optimization take to show results?",
    answer:
      "Some visibility improvements can appear within weeks, but building strong, lasting authority signals typically takes a few months.",
  },
  {
    question: "Do I still need traditional SEO alongside AI search optimization?",
    answer:
      "Yes, traditional SEO and AI search optimization work together — a technically strong, well-ranked site gives AI systems more to work with.",
  },
];

export default function AiSearchOptimization() {
  return (
    <ServiceDetailPage
      sectionLabel="SEO Services"
      label="AI Search Optimization"
      icon={Bot}
      description="AI is transforming how people search, and your business needs to adapt to stay visible. We optimize your website for AI-driven platforms so your content gets understood, trusted, and recommended."
      heroTitle="AI Search Optimization Services in India"
      heroDescription="AI is transforming how people search, and your business needs to adapt to stay visible. We optimize your website for AI-driven platforms so your content gets understood, trusted, and recommended."
      capabilitiesHeading="Built for Businesses Ready to Be Found Inside AI Answers"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our AI Search Optimization"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us to Build Their AI Search Visibility"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Your Content Into an AI-Trusted Source"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Building AI Search Visibility Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every AI search optimization engagement, with the same rigor whether a client is nearby or overseas. We work with startups, SMBs, and enterprises across India, building AI visibility sized to each business's actual market and competition. For businesses looking to improve AI search visibility beyond India, we deliver this work remotely, tracking visibility across platforms and time zones to the same standard regardless of location. Whether you're a startup appearing in AI answers for the first time or an enterprise protecting visibility across multiple markets, our approach starts with auditing where you actually stand today."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready to Show Up Where AI Is Sending Your Customers?"
      ctaText="Whether you need an audit of your current AI visibility, a full entity and content overhaul, or ongoing tracking across multiple AI platforms, the right approach depends on where you stand today. Let's talk through your current visibility and scope what AI search optimization would actually involve."
      ctaPrimaryText="Talk to an AI Search Specialist"
      ctaSecondaryText="Get Your Free AI Visibility Audit"
    />
  );
}
