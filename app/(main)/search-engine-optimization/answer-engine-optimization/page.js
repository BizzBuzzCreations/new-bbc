import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  MessageCircleQuestion,
  Search,
  BookOpen,
  MapPin,
  ShoppingCart,
  Building2,
  Mic,
} from "lucide-react";

export const metadata = {
  title: "Answer Engine Optimization Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations offers answer engine optimization services that get your content featured in AI overviews and snippets worldwide.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/search-engine-optimization/answer-engine-optimization",
  },
};

const CAPABILITIES = [
  {
    icon: Search,
    title: "Businesses Losing Clicks to Featured Snippets & AI Overviews",
    desc: "Ranking first no longer guarantees a click when Google answers the question directly above your result. We provide answer engine optimization built to get your content featured in the answer itself, not just listed beneath it.",
  },
  {
    icon: BookOpen,
    title: "Informational & Educational Content Sites",
    desc: "Educational content is exactly the type of material Google and AI tools most often extract into direct answers. We optimize this content specifically for featured snippet optimization services, positioning it to be the source the answer pulls from.",
  },
  {
    icon: MapPin,
    title: "Local Businesses Needing to Answer \"Near Me\" Queries Directly",
    desc: "Local \"near me\" searches are increasingly answered with a direct box, not just a list of nearby businesses to click through. We help local businesses optimize for ai overviews and local answer boxes specifically.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Brands Needing Product Q&A Visibility",
    desc: "Shoppers ask specific product questions that search engines increasingly answer directly from product pages and reviews. We structure product content so ecommerce brands can win these answer placements, not just product listing rankings.",
  },
  {
    icon: Building2,
    title: "B2B Companies Answering Complex Buyer Questions",
    desc: "B2B buyers research detailed, specific questions during evaluation, and being the featured answer builds credibility early in that process. We build aeo services tailored to complex B2B queries, not just simple factual questions.",
  },
  {
    icon: Mic,
    title: "Voice Search-Dependent Businesses Needing Concise Answers",
    desc: "Voice search assistants typically read out a single answer, making it critical to be the one source selected. We optimize content for voice search optimization, structuring answers concisely enough to be read aloud clearly.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "AEO Strategy & Query Research",
    desc: "Research into the exact questions your audience is asking, and where the current answer opportunity actually is.",
    ctaText: "Know Our Services",
    services: [
      "AEO Strategy Development",
      "Question & Query Research",
      "Search Intent Mapping",
      "Competitor Snippet Analysis",
      "Answer Opportunity Identification",
      "Content Gap Analysis for AEO",
      "Query Clustering",
      "AEO KPI Planning",
    ],
  },
  {
    number: "02",
    title: "Featured Snippet Optimization",
    desc: "Content formatted specifically to win the featured snippet position, not just rank somewhere on page one.",
    ctaText: "Know Our Services",
    services: [
      "Featured Snippet Optimization",
      "Paragraph Snippet Formatting",
      "List & Table Snippet Formatting",
      "Snippet-Ready Content Structuring",
      "Position Zero Targeting",
      "Snippet Competitor Analysis",
      "Snippet Content Testing",
      "Snippet Recovery Strategy",
    ],
  },
  {
    number: "03",
    title: "AI Overview & Answer Box Optimization",
    desc: "Content structured to be the source Google's AI Overviews and answer boxes actually pull from.",
    ctaText: "Know Our Services",
    services: [
      "Google AI Overview Optimization",
      "Answer Box Optimization",
      "Direct Answer Formatting",
      "Concise Answer Writing",
      "AI Overview Citation Strategy",
      "Multi-Query Answer Coverage",
      "Answer Accuracy Optimization",
      "AI Overview Monitoring",
    ],
  },
  {
    number: "04",
    title: "FAQ & Structured Q&A Content",
    desc: "Structured question-and-answer content built around the real questions your audience is actually searching for.",
    ctaText: "Know Our Services",
    services: [
      "FAQ Page Development",
      "Structured Q&A Content Writing",
      "FAQ Schema Markup",
      "Common Question Research",
      "Long-Tail Question Targeting",
      "Q&A Content Expansion",
      "Help Center Content Development",
      "Question-Based Blog Content",
    ],
  },
  {
    number: "05",
    title: "Voice Search Optimization",
    desc: "Content formatted for how voice assistants read out a single, concise answer, not a full search results page.",
    ctaText: "Know Our Services",
    services: [
      "Voice Search Optimization",
      "Conversational Query Optimization",
      "Natural Language Content Writing",
      "Local Voice Search Optimization",
      "Voice Search Featured Answers",
      "Smart Speaker Optimization Strategy",
      "Voice Query Research",
      "Voice Search Performance Tracking",
    ],
  },
  {
    number: "06",
    title: "AEO Monitoring & Reporting",
    desc: "Ongoing tracking of your snippet and answer box visibility, since these placements shift more often than standard rankings.",
    ctaText: "Know Our Services",
    services: [
      "Snippet & AI Overview Tracking",
      "Answer Visibility Reporting",
      "Competitor Answer Benchmarking",
      "Query Performance Analysis",
      "Monthly AEO Reports",
      "Answer Retention Monitoring",
      "Strategy Refinement",
      "AEO Trend Monitoring",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Query & Question Research",
    desc: "We research the actual questions your audience is asking, including the specific phrasing that tends to trigger snippets and AI overviews.",
  },
  {
    number: "02",
    title: "Content & Snippet Gap Analysis",
    desc: "We identify which queries you're currently missing the featured answer for, and what's preventing your content from winning that position.",
  },
  {
    number: "03",
    title: "AEO Content Strategy",
    desc: "We build a plan for restructuring and creating content formatted specifically to win snippet and answer box placements.",
  },
  {
    number: "04",
    title: "Content Structuring & Implementation",
    desc: "We implement the content changes, including formatting, schema markup, and concise answer writing, prioritizing your highest-opportunity queries first.",
  },
  {
    number: "05",
    title: "Answer Box & Snippet Targeting",
    desc: "We monitor early results and refine content structure based on which formats are actually winning placements for your specific queries.",
  },
  {
    number: "06",
    title: "Monitoring & Ongoing Optimization",
    desc: "We track snippet and answer box performance over time, since these placements shift more frequently than standard search rankings.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "AEO Built Around Being the Answer, Not Just a Link",
    desc: "We structure content specifically to win featured snippets and answer boxes, recognizing that a page-one ranking below a direct answer often gets far fewer clicks than the featured answer itself.",
  },
  {
    number: "02",
    title: "Content Structured Specifically for Snippets and AI Overviews",
    desc: "We format answers in the paragraph, list, or table structure each platform actually favors for extraction, rather than hoping general good content happens to get pulled into a featured position.",
  },
  {
    number: "03",
    title: "Voice Search Optimization for How People Actually Ask Questions",
    desc: "We write content in the natural, conversational phrasing voice search actually uses, since voice queries differ meaningfully from how people type the same question into a search box.",
  },
  {
    number: "04",
    title: "Query Research Based on Real Questions, Not Assumptions",
    desc: "We research the actual questions your audience is searching, including long-tail variations, rather than guessing at likely queries based on general keyword volume alone.",
  },
  {
    number: "05",
    title: "Continuous Monitoring as Answer Boxes and Snippets Change",
    desc: "Featured snippets and AI overviews shift more frequently than standard rankings, and we track these changes actively rather than treating an initial win as a permanent, unmonitored result.",
  },
  {
    number: "06",
    title: "Transparent Reporting on Answer Visibility You Can Verify",
    desc: "You see exactly which queries you're winning the featured answer for, and which remain an opportunity, giving you a clear, verifiable picture of AEO performance.",
  },
];

const FAQS = [
  {
    question: "What is answer engine optimization, and how is it different from SEO?",
    answer:
      "AEO focuses specifically on winning featured snippets, AI overviews, and answer boxes, positions where your content becomes the direct answer rather than just a ranked link. It builds on SEO fundamentals but requires content formatted specifically for extraction into these answer formats.",
  },
  {
    question: "What's the difference between AEO and traditional SEO (AEO vs SEO)?",
    answer:
      "Traditional SEO focuses on ranking your page as high as possible in search results, while AEO focuses specifically on winning the featured answer position above those results. They overlap significantly but require different content formatting and query research approaches.",
  },
  {
    question: "How much does answer engine optimization cost in India?",
    answer:
      "Cost depends on scope, how many query opportunities you're targeting and how much content restructuring is required. We scope pricing after understanding your current content and specific query opportunities, rather than offering a flat rate upfront.",
  },
  {
    question: "How do you get featured in Google's AI overviews?",
    answer:
      "Getting featured typically requires clear, well-structured, factually accurate content that directly answers a specific question, combined with strong overall site authority. We optimize for this through targeted content structuring and technical implementation.",
  },
  {
    question: "Can AEO help with voice search results too?",
    answer:
      "Yes, voice search optimization is part of our AEO service, since voice assistants typically read out featured answers or snippets. Content optimized for AEO often performs well for voice search since both favor clear, concise, directly-answered content.",
  },
  {
    question: "How long does it take to start appearing in featured answers?",
    answer:
      "Timeline varies by query competitiveness and your site's existing authority, but well-optimized content can start winning snippets within a few weeks in less competitive queries, while competitive terms typically take longer to win and hold.",
  },
];

export default function AnswerEngineOptimization() {
  return (
    <ServiceDetailPage
      sectionLabel="SEO Services"
      label="Answer Engine Optimization (AEO)"
      icon={MessageCircleQuestion}
      description="Answer engine optimization is built to get your content featured directly in AI overviews and snippets, not just ranked below them."
      heroTitle="Get Your Answer Featured, Not Buried on Page One"
      heroDescription="Answer engine optimization is built to get your content featured directly in AI overviews and snippets, not just ranked below them."
      heroCtaText="Get a Free AEO Audit"
      capabilitiesHeading="Built for Businesses Tired of Ranking Below the Answer"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything Between Your Content and Being the Featured Answer"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us With Answer Engine Optimization"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Get Your Content Featured as the Answer"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Running AEO Campaigns Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach answer engine optimization for every client, with the same attention to query research whether a client is nearby or across the world. We provide answer engine optimization for businesses across India, helping them win featured answer placements for the queries that matter most to their audience. For businesses looking for an answer engine optimization agency beyond India, we support clients worldwide remotely, delivering the same AEO service standard of work regardless of time zone. Whether you're a local business in Prayagraj answering \"near me\" queries or a B2B company anywhere else answering complex buyer questions, our approach starts with the same question: what is your audience actually asking?"
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready to Be the Answer, Not Just a Result?"
      ctaText="Whether you're losing clicks to a competitor's featured snippet, missing out on AI overview placements entirely, or simply haven't started optimizing for answer positions yet, ranking below the answer was never going to capture that traffic. Let's audit your current visibility and scope of what AEO would actually involve."
      ctaPrimaryText="Talk to an AEO Specialist"
      ctaSecondaryText="Get Your Free AEO Audit"
    />
  );
}
