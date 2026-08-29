import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  PenTool,
  FileCheck2,
  Bot,
  BarChart3,
  RefreshCw,
  Users,
} from "lucide-react";

export const metadata = {
  title: "AI Content Optimization Services | BizzBuzz Creations",
  description:
    "AI content optimization in India — content that ranks, gets cited by AI systems, and drives real engagement, built for both humans and machines, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/search-engine-optimization/ai-content-optimization",
  },
};

const SERVICE_ITEMS = [
  {
    icon: FileCheck2,
    heading: "Content Audits & Refresh",
    description:
      "We audit existing content for accuracy, structure, and depth, refreshing what's underperforming instead of only writing new pages.",
  },
  {
    icon: PenTool,
    heading: "Human-First, AI-Ready Writing",
    description:
      "Content is written to genuinely help readers first, then structured so AI systems can parse and cite it accurately.",
  },
  {
    icon: Bot,
    heading: "AI Citation Optimization",
    description:
      "We format facts, definitions, and data points so AI tools can lift them cleanly and correctly when generating answers.",
  },
  {
    icon: Users,
    heading: "Experience & Expertise Signals",
    description:
      "We strengthen author credibility, first-hand experience, and expertise signals that both readers and search engines value.",
  },
  {
    icon: BarChart3,
    heading: "Engagement & Ranking Tracking",
    description:
      "We track how optimized content performs on both traditional engagement metrics and AI citation visibility.",
  },
  {
    icon: RefreshCw,
    heading: "Ongoing Content Maintenance",
    description:
      "Content gets revisited and updated regularly, so it stays accurate and competitive rather than going stale after publication.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Content Audit",
    body: "We review your existing content for accuracy, structure, depth, and how well it currently performs for both readers and AI systems.",
  },
  {
    title: "Rewrite & Restructure",
    body: "Underperforming or thin content gets rewritten and restructured to genuinely help readers while staying easy for AI systems to parse.",
  },
  {
    title: "Authority & Trust Signals",
    body: "We strengthen author credibility and expertise signals across key content, which both readers and AI systems weigh heavily.",
  },
  {
    title: "Monitor & Refresh",
    body: "We track engagement and citation performance, refreshing content regularly instead of letting it go stale after publication.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Human-First, Machine-Ready",
    description:
      "Every piece is written to genuinely help the reader first, then structured for AI systems, not the other way around.",
  },
  {
    number: "002",
    title: "Depth Over Filler",
    description:
      "We prioritize real depth and accuracy over word count padding, which both readers and search engines can tell apart.",
  },
  {
    number: "003",
    title: "Citation-Ready Structuring",
    description:
      "Content is formatted so AI systems can lift facts and definitions cleanly and correctly.",
  },
  {
    number: "004",
    title: "Expertise Signals Built In",
    description:
      "We strengthen author credibility and experience signals that build trust with readers and search engines alike.",
  },
  {
    number: "005",
    title: "Data-Driven Execution",
    description:
      "Every recommendation is backed by real engagement and citation data, not assumptions about what content should work.",
  },
  {
    number: "006",
    title: "Honest Reporting",
    description:
      "No agency can guarantee every citation or ranking, and we won't pretend otherwise — you get transparent, honest progress reports instead.",
  },
];

const FAQS = [
  {
    question: "What is AI content optimization?",
    answer:
      "It's the practice of writing and structuring content so it genuinely helps readers while also being easy for AI systems to accurately parse, cite, and recommend.",
  },
  {
    question: "Will AI-optimized content still sound natural to readers?",
    answer:
      "Yes — we write for humans first and structure for AI systems second, so content stays genuinely readable and useful, not robotic.",
  },
  {
    question: "Do you use AI tools to write the content?",
    answer:
      "We may use AI tools to assist with research and drafts, but every piece is reviewed, refined, and fact-checked by our team before publishing.",
  },
  {
    question: "How often should content be refreshed?",
    answer:
      "It depends on the topic, but most content benefits from a review every few months to keep facts, data, and rankings current.",
  },
  {
    question: "Can you optimize content I already have instead of writing new pages?",
    answer:
      "Yes, we start with an audit and often get better results refreshing and restructuring existing content before adding new pages.",
  },
];

export default function AiContentOptimization() {
  return (
    <>
      <BpoHero
        heading="AI Content Optimization Services in India"
        description="Content must now work for both humans and AI systems. We create and refine content that ranks, gets cited, and drives real engagement."
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
              src="/SEO.webp"
              alt="AI content optimization at BizzBuzz Creations"
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
              Content Built for Readers and AI Alike
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Content must now work for both humans and AI systems. We
              create and refine content that ranks, gets cited, and drives
              real engagement — not just word count for its own sake.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re an SEO services company based in Prayagraj, serving
              clients locally across Allahabad and Uttar Pradesh, as well as
              businesses across India, building content strategies for how
              search actually works today.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our AI Content Optimization"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our AI Content Optimization Process"
            description="We audit existing content first, then rewrite and structure it to genuinely help readers while staying easy for AI systems to cite."
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
          title="AI Content Optimization Company"
          description="BizzBuzz Creations creates and refines content for businesses across India that ranks, gets cited by AI systems, and drives real engagement."
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
