import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Bot,
  Search,
  Building2,
  MapPin,
  ShoppingCart,
  Newspaper,
  Handshake,
} from "lucide-react";

export const metadata = {
  title: "AI Search Optimization Services | BizzBuzz Creations",
  description:
    "BizzBuzz Creations offers AI search optimization services that improve visibility across AI search results in India and worldwide.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/search-engine-optimization/ai-search-optimization",
  },
};

const CAPABILITIES = [
  {
    icon: Search,
    title: "Businesses Relying Heavily on Organic Search Traffic",
    desc: "Businesses that depend on organic search are already seeing traffic shift toward AI-generated answers that never send a click through. We provide ai search optimization services built to keep your business visible as search itself changes shape.",
  },
  {
    icon: Building2,
    title: "B2B & SaaS Companies Being Researched via AI Tools",
    desc: "Buyers increasingly research vendors by asking AI tools directly, rather than clicking through a list of search results. We help B2B and SaaS companies optimize for ai search so they show up when a buyer asks an AI tool for a recommendation.",
  },
  {
    icon: MapPin,
    title: "Local Businesses Needing AI Visibility Alongside Google",
    desc: "Local searches are increasingly answered directly by AI overviews, not just a list of nearby businesses. We build ai search visibility agency strategies that keep local businesses visible in both traditional and AI-generated local results.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Brands Needing Product Visibility in AI Answers",
    desc: "Shoppers are starting to ask AI tools for product recommendations directly, bypassing traditional product search entirely. We optimize product content so ecommerce brands can rank in AI search results, not just standard search listings.",
  },
  {
    icon: Newspaper,
    title: "Content Publishers & Blogs Losing Traffic to AI Summaries",
    desc: "Publishers are seeing real traffic loss as AI search engines summarize content instead of sending readers to the source. We help publishers restructure content to remain a cited, visible source rather than an invisible input.",
  },
  {
    icon: Handshake,
    title: "Agencies Needing AI Search Strategy for Their Own Clients",
    desc: "Agencies are increasingly asked by clients about AI search visibility without necessarily having the specialized expertise yet. We provide ai search engine optimization company support agencies can bring to their own client relationships.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "AI Search Strategy & Audits",
    desc: "A clear picture of where your business currently stands across AI search platforms, and what actually needs to change.",
    ctaText: "Know Our Services",
    services: [
      "AI Search Visibility Audit",
      "AI Search Readiness Assessment",
      "Competitor AI Visibility Analysis",
      "AI Search Opportunity Mapping",
      "Content Gap Analysis for AI",
      "AI Search Strategy Development",
      "Query Intent Mapping",
      "AI Search KPI Planning",
    ],
  },
  {
    number: "02",
    title: "Content Structuring for AI Retrieval",
    desc: "Content restructured the way AI models actually retrieve and summarize information, not just formatted for human scanning.",
    ctaText: "Know Our Services",
    services: [
      "AI-Friendly Content Structuring",
      "Question-Based Content Formatting",
      "Structured Data Implementation",
      "Content Chunking for AI Retrieval",
      "Clear Answer Formatting",
      "FAQ & Q&A Content Development",
      "Content Clarity Optimization",
      "Source Citation Optimization",
    ],
  },
  {
    number: "03",
    title: "AI Search Visibility Across Platforms",
    desc: "Optimization across the specific AI tools your audience is actually using to search and research.",
    ctaText: "Know Our Services",
    services: [
      "ChatGPT Search Optimization",
      "Perplexity Search Optimization",
      "Google AI Overviews Optimization",
      "Gemini Search Optimization",
      "Bing Copilot Optimization",
      "Multi-Platform AI Visibility Strategy",
      "LLM Search Optimization",
      "Cross-Platform Consistency Checks",
    ],
  },
  {
    number: "04",
    title: "Technical Optimization for AI Crawlers",
    desc: "A technical foundation that makes your content genuinely accessible to AI crawlers, not just search engine bots.",
    ctaText: "Know Our Services",
    services: [
      "AI Crawler Accessibility Audits",
      "Robots.txt & AI Crawler Configuration",
      "Schema Markup Implementation",
      "Site Speed for AI Indexing",
      "Crawlability Optimization",
      "XML Sitemap Optimization",
      "Technical SEO for AI Search",
      "Structured Content Architecture",
    ],
  },
  {
    number: "05",
    title: "Brand & Entity Presence Building",
    desc: "A brand presence that extends beyond your website, since AI tools draw on sources across the entire web.",
    ctaText: "Know Our Services",
    services: [
      "Brand Entity Optimization",
      "Knowledge Panel Optimization",
      "Digital PR for AI Visibility",
      "Third-Party Mention Building",
      "Wikipedia & Wikidata Presence",
      "Authoritative Backlink Building",
      "Brand Consistency Across the Web",
      "Entity Relationship Building",
    ],
  },
  {
    number: "06",
    title: "AI Search Monitoring & Reporting",
    desc: "Ongoing tracking of where and how your brand actually appears across AI search platforms.",
    ctaText: "Know Our Services",
    services: [
      "AI Search Ranking Monitoring",
      "AI Citation Tracking",
      "Visibility Reporting Across Platforms",
      "Competitor Benchmarking",
      "Content Performance in AI Answers",
      "Monthly AI Search Reports",
      "Strategy Refinement Based on Data",
      "AI Search Trend Monitoring",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "AI Search Visibility Audit",
    desc: "We assess your current visibility across major AI search platforms, identifying where you currently appear, where you're missing, and why.",
  },
  {
    number: "02",
    title: "Content & Technical Gap Analysis",
    desc: "We identify what's preventing your content from being retrieved and cited properly, covering both content structure and technical accessibility.",
  },
  {
    number: "03",
    title: "Strategy & Structuring Plan",
    desc: "We build a plan for restructuring content and building the technical foundation AI search visibility actually requires.",
  },
  {
    number: "04",
    title: "Content & Technical Implementation",
    desc: "We implement content restructuring, schema markup, and technical fixes according to the strategy, prioritizing your highest-opportunity content first.",
  },
  {
    number: "05",
    title: "Entity & Authority Building",
    desc: "We build brand presence and authority signals across relevant third-party sources, extending your visibility beyond your own website.",
  },
  {
    number: "06",
    title: "Monitoring & Ongoing Optimization",
    desc: "We track AI search visibility over time, adjusting strategy as platforms and algorithms continue to evolve.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "AI Search Optimization Built for How Search Is Actually Changing",
    desc: "We treat AI search as a genuine shift in how people find information, not a temporary trend, building strategy around where search behavior is actually heading rather than optimizing exclusively for traditional rankings.",
  },
  {
    number: "02",
    title: "Multi-Platform Strategy, Not Just One AI Tool",
    desc: "We optimize across ChatGPT, Perplexity, Google AI Overviews, and other relevant platforms, since your audience isn't using just one AI tool, and neither should your visibility strategy be limited to just one.",
  },
  {
    number: "03",
    title: "Technical Foundation That Makes Content Actually Retrievable",
    desc: "We ensure AI crawlers can actually access and parse your content correctly, since even excellent content that AI systems can't retrieve properly won't show up in AI-generated answers regardless of quality.",
  },
  {
    number: "04",
    title: "Content Structured the Way AI Models Actually Read It",
    desc: "We format content around clear, citable answers rather than traditional SEO structure alone, because AI systems retrieve and summarize information differently than a person scanning a search results page.",
  },
  {
    number: "05",
    title: "Entity and Brand Presence Built Beyond Your Own Website",
    desc: "We build authority signals across third-party sources, since AI tools draw on information from across the web, not just your own site, when generating answers about your business or industry.",
  },
  {
    number: "06",
    title: "Transparent Reporting on Visibility You Can Actually See",
    desc: "We track and report on actual AI citations and mentions, giving you real evidence of visibility rather than vague assurances about an emerging channel that's genuinely difficult to measure without the right tools.",
  },
];

const FAQS = [
  {
    question: "What is AI search optimization, and how is it different from SEO?",
    answer:
      "AI search optimization focuses specifically on getting content retrieved and cited by AI-generated answers, like Google AI Overviews or ChatGPT responses, rather than just ranking in traditional search results. It shares foundations with SEO but requires different content structuring and technical considerations specific to how AI systems retrieve information.",
  },
  {
    question: "How do you rank in AI search results like ChatGPT or Google AI Overviews?",
    answer:
      "Ranking in AI search involves clear, well-structured content, technical accessibility for AI crawlers, and strong authority signals across the web, since AI systems draw on multiple sources when generating answers. There's no single trick, it's a combination of content quality, structure, and broader online presence.",
  },
  {
    question: "How much does AI search optimization cost in India?",
    answer:
      "Cost depends on scope, whether you need a full strategy including content restructuring and authority building, or a lighter technical audit and fix. We scope pricing after understanding your current visibility and specific goals, rather than offering a flat rate upfront.",
  },
  {
    question: "Can AI search optimization work alongside our existing SEO?",
    answer:
      "Yes, AI search optimization complements traditional SEO rather than replacing it, since both traditional search and AI-generated answers remain relevant channels. Many of the technical and content improvements benefit both simultaneously.",
  },
  {
    question: "How do you measure whether AI search optimization is working?",
    answer:
      "We track actual citations and mentions across AI platforms, along with any traceable referral traffic, giving you real evidence of visibility. This remains a genuinely evolving measurement space, and we're transparent about what can and can't be tracked precisely.",
  },
  {
    question: "How long does it take to see results from AI search optimization?",
    answer:
      "Timeline varies since this is an emerging, fast-changing space, but initial technical and content improvements can show visibility changes within a few weeks, while broader authority building typically takes longer to compound meaningfully across platforms.",
  },
];

export default function AiSearchOptimization() {
  return (
    <ServiceDetailPage
      sectionLabel="SEO Services"
      label="AI Search Optimization"
      icon={Bot}
      description="AI search optimization is built to get your business found in AI-generated answers, not just standard search rankings, and engineered for how search is changing."
      heroTitle="Get Visible in AI Search, Not Just Traditional Google Results"
      heroDescription="AI search optimization is built to get your business found in AI-generated answers, not just standard search rankings, and engineered for how search is changing."
      heroCtaText="Get a Free AI Search Visibility Audit"
      capabilitiesHeading="Built for Businesses Not Ready to Disappear From AI Answers"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything Between Your Content and an AI-Generated Answer"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Businesses Trust Us With AI Search Visibility"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Get Your Business Into AI Search Results"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Optimizing for AI Search Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach AI search optimization for every client, with the same technical rigor whether a client is nearby or across the world. We provide ai search optimization services for businesses across India, helping them stay visible as search behavior shifts toward AI-generated answers. For businesses looking for an ai search visibility agency beyond India, we support clients worldwide remotely, delivering the same ai search engine optimization company standard of work regardless of time zone. Whether you're a local business in Prayagraj or a SaaS company anywhere else being researched through AI tools, our approach starts with the same question: how is your specific audience actually searching now."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready to Show Up Where Search Is Actually Heading?"
      ctaText="Whether your traffic is already shifting toward AI-generated answers, your content isn't being retrieved properly, or you simply haven't started thinking about AI search visibility yet, traditional rankings alone are no longer the full picture. Let's audit your current visibility and scope what AI search optimization would actually involve."
      ctaPrimaryText="Talk to an AI Search Optimization Specialist"
      ctaSecondaryText="Get Your Free AI Search Visibility Audit"
    />
  );
}
