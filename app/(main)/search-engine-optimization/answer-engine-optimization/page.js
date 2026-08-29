import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  MessageCircleQuestion,
  ListChecks,
  Code2,
  Target,
  BarChart3,
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

const SERVICE_ITEMS = [
  {
    icon: MessageCircleQuestion,
    heading: "Question-Based Content Mapping",
    description:
      "We identify the exact questions your customers ask and structure content to answer them directly, instead of burying answers deep in long articles.",
  },
  {
    icon: ListChecks,
    heading: "Featured Snippet Optimization",
    description:
      "Clear, concise formatting — lists, tables, short definitions — increases your odds of winning featured snippets and voice search answers.",
  },
  {
    icon: Code2,
    heading: "FAQ & Schema Markup",
    description:
      "We add structured FAQ and Q&A schema so search engines and AI tools can easily lift accurate answers from your pages.",
  },
  {
    icon: Target,
    heading: "Direct-Answer Formatting",
    description:
      "Content gets restructured so the answer appears immediately, with supporting detail after, matching how users and AI systems actually scan pages.",
  },
  {
    icon: BarChart3,
    heading: "Answer Visibility Tracking",
    description:
      "We track snippet wins, voice search appearances, and AI answer citations, giving you a clear picture of your answer-engine presence.",
  },
  {
    icon: RefreshCw,
    heading: "Continuous Question Research",
    description:
      "Customer questions change over time. We keep refreshing question research and content to match what people are actually asking now.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Question Research",
    body: "We identify the real questions your customers search for, using search data and direct customer insight, not guesswork.",
  },
  {
    title: "Direct-Answer Content Structuring",
    body: "We restructure or create content so the answer appears immediately and clearly, formatted the way answer engines prefer.",
  },
  {
    title: "Schema & Technical Setup",
    body: "FAQ and Q&A schema get implemented so search engines and AI tools can accurately parse and surface your answers.",
  },
  {
    title: "Track & Refresh",
    body: "We monitor snippet wins and answer visibility, refreshing content regularly as questions and search behavior evolve.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Question-First Strategy",
    description:
      "We start from what your customers are actually asking, not assumptions about what content they want.",
  },
  {
    number: "002",
    title: "Snippet & Voice Search Ready",
    description:
      "Content is formatted specifically to win featured snippets and voice search answers, not just rank on a page.",
  },
  {
    number: "003",
    title: "Schema-Backed Accuracy",
    description:
      "Structured FAQ and Q&A schema help search engines and AI tools surface your answers correctly and consistently.",
  },
  {
    number: "004",
    title: "Answer Visibility Tracking",
    description:
      "We measure snippet wins and answer citations directly, not just proxy traffic metrics.",
  },
  {
    number: "005",
    title: "Data-Driven Execution",
    description:
      "Every recommendation is backed by real search and question data, not industry guesswork.",
  },
  {
    number: "006",
    title: "Honest Reporting",
    description:
      "No agency can guarantee every snippet or AI answer, and we won't pretend otherwise — you get transparent, honest progress reports instead.",
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
    <>
      <BpoHero
        heading="Answer Engine Optimization (AEO) Services in India"
        description="Modern users want quick answers without scrolling through pages. We optimize your content so it becomes the direct answer across search engines and AI tools."
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
              src="/BizzBuzz-Creations-5.png"
              alt="Answer Engine Optimization at BizzBuzz Creations"
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
              Be the Direct Answer, Not Just Another Result
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Modern users want quick answers without scrolling through
              pages. We optimize your content so it becomes the direct
              answer across search engines and AI tools, formatted the way
              answer engines actually prefer.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re an SEO services company based in Prayagraj, serving
              clients locally across Allahabad and Uttar Pradesh, as well as
              businesses across India, building content that gets chosen as
              the answer.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our AEO Services"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our AEO Process"
            description="We research the real questions your customers ask, then structure and mark up content so it's the answer search engines and AI tools reach for."
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
          title="Answer Engine Optimization Company"
          description="BizzBuzz Creations helps businesses across India become the direct answer in featured snippets, voice search, and AI-generated responses."
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
