import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  Bot,
  Search,
  MessageSquareText,
  ShieldCheck,
  BarChart3,
  Sparkles,
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

const SERVICE_ITEMS = [
  {
    icon: Bot,
    heading: "AI Overview & Answer Visibility",
    description:
      "We structure your content so Google AI Overviews and other AI answer boxes can pull from it directly, keeping your brand visible even in zero-click results.",
  },
  {
    icon: MessageSquareText,
    heading: "LLM & Chatbot Discoverability",
    description:
      "We optimize how your business appears when people ask AI tools like ChatGPT or Gemini for recommendations in your industry.",
  },
  {
    icon: Search,
    heading: "Entity & Structured Data Setup",
    description:
      "Schema markup and clear entity signals help AI systems correctly understand who you are, what you offer, and why you're credible.",
  },
  {
    icon: ShieldCheck,
    heading: "Trust & Authority Signals",
    description:
      "AI platforms favor sources they trust. We strengthen the credibility signals — citations, reviews, consistent facts — that AI systems weigh before recommending you.",
  },
  {
    icon: BarChart3,
    heading: "AI Visibility Tracking",
    description:
      "We monitor how and where your brand shows up across AI search tools, not just traditional Google rankings, so you can see the real impact.",
  },
  {
    icon: Sparkles,
    heading: "Continuous AI Algorithm Adaptation",
    description:
      "AI search evolves fast. We keep adjusting your strategy as platforms change how they source and rank information.",
  },
];

const PROCESS_STEPS = [
  {
    title: "AI Visibility Audit",
    body: "We check how your business currently appears — or doesn't — across Google AI Overviews, ChatGPT, and other AI search tools.",
  },
  {
    title: "Entity & Content Structuring",
    body: "We restructure key pages and add schema so AI systems can clearly parse who you are and what you offer.",
  },
  {
    title: "Authority & Trust Building",
    body: "We strengthen citations, reviews, and consistent facts about your business across the web, which AI platforms use to judge credibility.",
  },
  {
    title: "Monitor & Refine",
    body: "We track your AI search visibility monthly and adjust as platforms change how they source and present answers.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Built for How Search Works Now",
    description:
      "We optimize for AI Overviews, chatbot answers, and zero-click search, not just traditional blue-link rankings.",
  },
  {
    number: "002",
    title: "Entity-First Approach",
    description:
      "We make sure AI systems can clearly identify your business as a credible entity in your space, not just a page of text.",
  },
  {
    number: "003",
    title: "Trust Signal Focused",
    description:
      "We strengthen the citations and consistency signals that AI platforms weigh before recommending a source.",
  },
  {
    number: "004",
    title: "Cross-Platform Visibility",
    description:
      "We track and optimize for visibility across multiple AI tools, not just one platform.",
  },
  {
    number: "005",
    title: "Data-Driven Execution",
    description:
      "Every recommendation is backed by real visibility data, not assumptions about how AI search works.",
  },
  {
    number: "006",
    title: "Honest Reporting",
    description:
      "No agency can guarantee AI citations, and we won't pretend otherwise — you get transparent, honest progress reports instead.",
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
    <>
      <BpoHero
        heading="AI Search Optimization Services in India"
        description="AI is transforming how people search, and your business needs to adapt to stay visible. We optimize your website for AI-driven platforms so your content gets understood, trusted, and recommended."
        img="/seO2.jpg"
      />

      {/* Intro — dark section, glow accents behind the copy */}
      <section className="relative overflow-hidden bg-black py-20">
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ background: "radial-gradient(circle, #0B60B0, transparent 70%)" }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 -right-20 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #40A2D8, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative flex lg:flex-row flex-col px-5 lg:gap-20 gap-10 justify-center items-center max-w-6xl mx-auto">
          <div className="relative w-full lg:w-[440px] aspect-[4/5] shrink-0 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/seoGraph.png"
              alt="AI search optimization at BizzBuzz Creations"
              fill
              sizes="(max-width: 1024px) 100vw, 440px"
              className="object-cover"
            />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(200deg, rgba(5,11,22,0.75) 0%, rgba(11,96,176,0.3) 45%, transparent 75%)",
              }}
              aria-hidden="true"
            />
          </div>
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-3 text-white">
              Get Understood, Trusted, and Recommended by AI
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              AI is transforming how people search, and your business needs
              to adapt to stay visible. We optimize your website for
              AI-driven platforms so your content gets understood, trusted,
              and recommended, not just crawled and ignored.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re an SEO services company based in Prayagraj, serving
              clients locally across Allahabad and Uttar Pradesh, as well as
              businesses across India, building strategies for how search
              actually works today.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our AI Search Optimization"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our AI Search Optimization Process"
            description="We audit your current AI visibility first, then structure content and strengthen trust signals so AI platforms have real reason to recommend you."
            steps={PROCESS_STEPS}
          />
        </div>
      </section>

      <div className="bg-black px-5">
        <div className="max-w-5xl mx-auto border-t border-white" />
      </div>

      {/* We are */}
      <section className="bg-black pt-20 pb-20 px-5">
        <BpoWeAre
          title="AI Search Optimization Company"
          description="BizzBuzz Creations helps businesses across India get discovered, understood, and recommended by AI search platforms, not just traditional search engines."
          points={WE_ARE_POINTS}
        />
      </section>

      <DarkFAQSection faqs={FAQS} heading="Frequently Asked Questions" />

      <BpoWhyChooseDark />
      <div className="bg-black pt-10">
        <CTA />
      </div>
    </>
  );
}
