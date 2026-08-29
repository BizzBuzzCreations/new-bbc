import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  Radar,
  FileSearch,
  Quote,
  Layers,
  BarChart3,
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

const SERVICE_ITEMS = [
  {
    icon: FileSearch,
    heading: "Answer-Ready Content Structuring",
    description:
      "We restructure key pages into clear, citable chunks — definitions, comparisons, step-by-step answers — the format generative engines pull from most.",
  },
  {
    icon: Quote,
    heading: "Citation & Source Optimization",
    description:
      "We strengthen the facts, data, and sourcing on your pages so AI engines have clean, quotable material to draw from.",
  },
  {
    icon: Layers,
    heading: "Entity & Topic Authority Building",
    description:
      "We build interconnected content around your core topics and entities, giving AI systems a fuller picture of your expertise.",
  },
  {
    icon: Radar,
    heading: "Multi-Platform AI Visibility",
    description:
      "We optimize for how your business appears across multiple AI engines — ChatGPT, Perplexity, Google AI Overviews, and more.",
  },
  {
    icon: BarChart3,
    heading: "AI Citation Tracking",
    description:
      "We track when and how your brand gets cited or recommended in AI-generated answers, beyond traditional search rankings.",
  },
  {
    icon: RefreshCw,
    heading: "Continuous Model Adaptation",
    description:
      "Generative engines update constantly. We continuously adjust content and structure as these systems change how they select sources.",
  },
];

const PROCESS_STEPS = [
  {
    title: "GEO Readiness Audit",
    body: "We assess how citable your current content actually is, and where the gaps are compared to what generative engines favor.",
  },
  {
    title: "Content Restructuring",
    body: "We rework key pages into clear, well-sourced, citable formats that AI engines can pull from directly.",
  },
  {
    title: "Authority & Entity Building",
    body: "We strengthen entity signals and topic depth, which AI systems weigh heavily before recommending a source.",
  },
  {
    title: "Track & Iterate",
    body: "We monitor citations across AI platforms and refine the approach as models and their sourcing behavior evolve.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "GEO From Day One",
    description:
      "We combine AI integration with GEO from the start, so you're visible wherever customers search, including inside AI answers.",
  },
  {
    number: "002",
    title: "Answer-First Content",
    description:
      "Content is structured specifically to be the source AI systems pull from, not just content that ranks traditionally.",
  },
  {
    number: "003",
    title: "Multi-Platform Coverage",
    description:
      "We optimize for visibility across multiple generative engines, not a single AI platform.",
  },
  {
    number: "004",
    title: "Entity-First Approach",
    description:
      "We make sure AI systems can clearly identify your business as a credible entity in your space, not just a page of text.",
  },
  {
    number: "005",
    title: "Citation Tracking",
    description:
      "We measure actual citations and mentions in AI-generated answers, not just proxy metrics.",
  },
  {
    number: "006",
    title: "Honest Reporting",
    description:
      "No agency can guarantee citations in every AI answer, and we won't pretend otherwise — you get transparent, honest progress reports instead.",
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
    <>
      <BpoHero
        heading="GEO (Generative Engine Optimization) in India"
        description="Our GEO service structures your content and website so AI engines like ChatGPT, Perplexity, and Google AI Overviews actually cite and recommend your business."
        img="/aiservice.webp"
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
              src="/blue-bg.webp"
              alt="GEO Generative Engine Optimization at BizzBuzz Creations"
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
              Be the Source AI Recommends, Not Just Ranks
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Our GEO service structures your content and website so AI
              engines like ChatGPT, Perplexity, and Google AI Overviews
              actually cite and recommend your business, not just crawl it
              and move on.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re an AI solutions company based in Prayagraj,
              helping businesses locally across Allahabad and Uttar
              Pradesh, as well as across India, get discovered wherever
              customers search, including inside AI answers.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our GEO Services"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our GEO Process"
            description="We audit how citable your content currently is, then restructure and strengthen it so generative engines have real reason to reference you."
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
          title="Generative Engine Optimization Company"
          description="BizzBuzz Creations helps businesses across India get cited inside AI-generated answers, not just ranked on a traditional results page."
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
