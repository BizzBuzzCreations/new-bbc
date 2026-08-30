import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  MessageCircleQuestion,
  Rocket,
  Building2,
  Building,
  ShoppingCart,
  Handshake,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "Answer Engine Optimization (AEO) Services | BizzBuzz Creations",
  description:
    "Answer Engine Optimization (AEO) in India — structure your content to become the direct answer across search engines and AI tools, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/search-engine-optimization/answer-engine-optimization",
  },
};

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Startups & Early-Stage Businesses",
    desc: "Startups need visibility fast, and featured snippets are one of the quickest wins available. We structure early content around direct-answer formatting, giving startups a shot at snippet visibility before competitors catch on.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMBs often bury useful answers deep inside long articles that never win a snippet. We restructure existing content for AEO sized for SMB budgets, targeting the questions your customers actually ask.",
  },
  {
    icon: Building,
    title: "Enterprises & Large Organizations",
    desc: "Enterprises need consistent answer-engine visibility across product lines and support content. We run AEO programs at enterprise scale, covering FAQ, support, and product content consistently.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce & Retail Brands",
    desc: "Shoppers ask specific product and comparison questions that voice search and AI answer directly. We structure product FAQs and comparison content to win featured snippets and voice search answers.",
  },
  {
    icon: Handshake,
    title: "Agencies Needing an AEO Partner",
    desc: "Content agencies need a specialist partner as answer engines become a bigger share of search traffic. We work as a white-label AEO partner, handling the restructuring work agencies can present as their own.",
  },
  {
    icon: RefreshCw,
    title: "Businesses Losing Traffic to Zero-Click Search",
    desc: "Businesses seeing traffic decline as answers get shown directly on the results page need a different strategy. We help you become the answer being shown, rather than losing visibility to zero-click search.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Question-Based Content Mapping",
    desc: "We identify the exact questions your customers ask and structure content to answer them directly, instead of burying answers deep in long articles.",
    ctaText: "Know Our Services",
    services: [
      "Question Research",
      "Customer Query Mapping",
      "Search Intent Analysis",
      "Question Clustering",
      "Content Gap Identification",
      "Voice Search Query Research",
      "People-Also-Ask Analysis",
      "Question Prioritization",
    ],
  },
  {
    number: "02",
    title: "Featured Snippet Optimization",
    desc: "Clear, concise formatting — lists, tables, short definitions — increases your odds of winning featured snippets and voice search answers.",
    ctaText: "Know Our Services",
    services: [
      "Featured Snippet Formatting",
      "List & Table Formatting",
      "Definition Block Writing",
      "Snippet Length Optimization",
      "Snippet Competitor Analysis",
      "Snippet Win Tracking",
      "Paragraph Snippet Optimization",
      "Snippet Testing",
    ],
  },
  {
    number: "03",
    title: "FAQ & Schema Markup",
    desc: "We add structured FAQ and Q&A schema so search engines and AI tools can easily lift accurate answers from your pages.",
    ctaText: "Know Our Services",
    services: [
      "FAQ Schema Implementation",
      "Q&A Schema Setup",
      "HowTo Schema Markup",
      "Structured Data Testing",
      "Schema Validation",
      "Rich Result Monitoring",
      "FAQ Page Development",
      "Schema Maintenance",
    ],
  },
  {
    number: "04",
    title: "Direct-Answer Formatting",
    desc: "Content gets restructured so the answer appears immediately, with supporting detail after, matching how users and AI systems actually scan pages.",
    ctaText: "Know Our Services",
    services: [
      "Answer-First Rewriting",
      "Content Restructuring",
      "Heading Optimization",
      "Scannable Formatting",
      "Supporting Detail Structuring",
      "Readability Optimization",
      "Content Length Auditing",
      "Format Testing",
    ],
  },
  {
    number: "05",
    title: "Answer Visibility Tracking",
    desc: "We track snippet wins, voice search appearances, and AI answer citations, giving you a clear picture of your answer-engine presence.",
    ctaText: "Know Our Services",
    services: [
      "Snippet Win Tracking",
      "Voice Search Monitoring",
      "AI Answer Citation Tracking",
      "Visibility Dashboards",
      "Competitor Snippet Tracking",
      "Monthly AEO Reports",
      "Ranking Fluctuation Alerts",
      "Answer Coverage Analysis",
    ],
  },
  {
    number: "06",
    title: "Continuous Question Research",
    desc: "Customer questions change over time. We keep refreshing question research and content to match what people are actually asking now.",
    ctaText: "Know Our Services",
    services: [
      "Ongoing Question Research",
      "Seasonal Query Updates",
      "Content Refresh Cycles",
      "Trending Question Monitoring",
      "New Query Identification",
      "Content Expansion Planning",
      "Question Bank Maintenance",
      "Quarterly AEO Reviews",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Question Research",
    desc: "We identify the real questions your customers search for, using search data and direct customer insight, not guesswork.",
  },
  {
    number: "02",
    title: "Direct-Answer Content Structuring",
    desc: "We restructure or create content so the answer appears immediately and clearly, formatted the way answer engines prefer.",
  },
  {
    number: "03",
    title: "Schema & Technical Setup",
    desc: "FAQ and Q&A schema get implemented so search engines and AI tools can accurately parse and surface your answers.",
  },
  {
    number: "04",
    title: "Snippet Targeting & Testing",
    desc: "We target specific featured snippets, testing formatting variations to improve the odds of winning the answer position.",
  },
  {
    number: "05",
    title: "Publishing & Rollout",
    desc: "We publish restructured content in batches, prioritizing the highest-opportunity questions first for faster visibility gains.",
  },
  {
    number: "06",
    title: "Track & Refresh",
    desc: "We monitor snippet wins and answer visibility, refreshing content regularly as questions and search behavior evolve.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Question-First Strategy",
    desc: "We start from what your customers are actually asking, not assumptions about what content they want.",
  },
  {
    number: "02",
    title: "Snippet & Voice Search Ready",
    desc: "Content is formatted specifically to win featured snippets and voice search answers, not just rank on a page.",
  },
  {
    number: "03",
    title: "Schema-Backed Accuracy",
    desc: "Structured FAQ and Q&A schema help search engines and AI tools surface your answers correctly and consistently.",
  },
  {
    number: "04",
    title: "Answer Visibility Tracking",
    desc: "We measure snippet wins and answer citations directly, not just proxy traffic metrics.",
  },
  {
    number: "05",
    title: "Data-Driven Execution",
    desc: "Every recommendation is backed by real search and question data, not industry guesswork.",
  },
  {
    number: "06",
    title: "Honest Reporting",
    desc: "No agency can guarantee every snippet or AI answer, and we won't pretend otherwise — you get transparent, honest progress reports instead.",
  },
];

const FAQS = [
  {
    question: "What is Answer Engine Optimization (AEO)?",
    answer:
      "AEO is the practice of structuring content so it becomes the direct answer shown in featured snippets, voice search results, and AI-generated responses.",
  },
  {
    question: "How is AEO different from traditional SEO?",
    answer:
      "Traditional SEO focuses on ranking a page; AEO focuses specifically on your content being pulled out and shown as the direct answer to a question.",
  },
  {
    question: "Does AEO help with voice search?",
    answer:
      "Yes, direct-answer formatting is one of the main factors that helps content get selected for voice search responses.",
  },
  {
    question: "How long does AEO take to show results?",
    answer:
      "Snippet and answer visibility improvements can appear within weeks for well-structured content, though building broader coverage takes longer.",
  },
  {
    question: "Do I need traditional SEO alongside AEO?",
    answer:
      "Yes, a technically strong, well-ranked site gives search engines and AI tools more confidence to pull answers from your pages.",
  },
];

export default function AnswerEngineOptimization() {
  return (
    <ServiceDetailPage
      sectionLabel="SEO Services"
      label="Answer Engine Optimization (AEO)"
      icon={MessageCircleQuestion}
      description="Modern users want quick answers without scrolling through pages. We optimize your content so it becomes the direct answer across search engines and AI tools."
      heroTitle="Answer Engine Optimization (AEO) Services in India"
      heroDescription="Modern users want quick answers without scrolling through pages. We optimize your content so it becomes the direct answer across search engines and AI tools."
      capabilitiesHeading="Built for Businesses Ready to Become the Direct Answer"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into Our AEO Services"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us to Build Their Answer Visibility"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Your Content Into the Direct Answer"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Building Answer Visibility Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every AEO engagement, with the same rigor whether a client is nearby or overseas. We work with startups, SMBs, and enterprises across India, restructuring content sized to each business's actual question volume and competition. For businesses looking to improve answer-engine visibility beyond India, we deliver AEO remotely, testing snippet wins across platforms and time zones to the same standard regardless of location. Whether you're a startup winning your first featured snippet or an enterprise protecting answer visibility across product lines, our approach starts with the real questions your customers are asking."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready to Be the Answer, Not Just Another Result?"
      ctaText="Whether you need a question research and content mapping project, direct-answer restructuring for existing content, or ongoing snippet and voice search tracking, the right approach depends on what your customers are actually asking. Let's talk through your content and scope what AEO would actually involve."
      ctaPrimaryText="Talk to an AEO Specialist"
      ctaSecondaryText="Get Your Free AEO Audit"
    />
  );
}
