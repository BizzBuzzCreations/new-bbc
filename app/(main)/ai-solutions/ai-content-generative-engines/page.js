import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  Sparkles,
  PenTool,
  Layers,
  Wand2,
  FileCheck2,
  BarChart3,
} from "lucide-react";

export const metadata = {
  title: "AI Content & Generative Engines | BizzBuzz Creations",
  description:
    "AI content and generative engines in India — draft, structure, and personalize copy at scale, trained on your brand voice, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/ai-solutions/ai-content-generative-engines",
  },
};

const SERVICE_ITEMS = [
  {
    icon: PenTool,
    heading: "Brand-Voice Trained Content Engines",
    description:
      "Generative content engines are trained on your brand voice, tone, and past content, so output actually sounds like you, not a generic AI.",
  },
  {
    icon: Layers,
    heading: "Blog & Long-Form Content Generation",
    description:
      "We build systems that draft and structure blog posts and long-form content at scale, keeping quality consistent across volume.",
  },
  {
    icon: Wand2,
    heading: "Product Description & Ad Copy Variations",
    description:
      "Generate multiple product description and ad copy variations quickly, letting you test messaging without a full manual rewrite each time.",
  },
  {
    icon: FileCheck2,
    heading: "Human Review Workflow",
    description:
      "Every generated draft flows through a review step before publishing, keeping accuracy and quality intact, not fully automated blind output.",
  },
  {
    icon: Sparkles,
    heading: "Personalization at Scale",
    description:
      "Content gets personalized for different audience segments automatically, something manual content production can't keep up with.",
  },
  {
    icon: BarChart3,
    heading: "Content Performance Tracking",
    description:
      "We track how AI-generated content performs, feeding results back into the engine to keep improving output quality over time.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Brand Voice & Content Audit",
    body: "We study your existing content and brand voice so the generative engine has a genuine foundation to work from.",
  },
  {
    title: "Engine Setup & Training",
    body: "The content engine is configured and trained on your specific brand guidelines, tone, and past high-performing content.",
  },
  {
    title: "Review Workflow Integration",
    body: "We build in a human review step so every piece of generated content gets checked before it goes live.",
  },
  {
    title: "Scale & Refine",
    body: "We track content performance and refine the engine's output over time based on what's genuinely working.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Trained on Your Brand Voice",
    description:
      "Content engines are trained on your actual brand voice and past content, not a generic AI writing style.",
  },
  {
    number: "002",
    title: "Scale Without Losing Quality",
    description:
      "We build in review workflows so scaling content production doesn't mean sacrificing accuracy or brand fit.",
  },
  {
    number: "003",
    title: "Multiple Content Types Covered",
    description:
      "From blog posts to product descriptions and ad copy, engines are built for the specific content types your business needs.",
  },
  {
    number: "004",
    title: "Personalization at Scale",
    description:
      "Content can be personalized for different audience segments automatically, something manual production can't match.",
  },
  {
    number: "005",
    title: "Tested With Your Team",
    description:
      "Every content engine is tested with your team before going live, not handed over as an untested demo.",
  },
  {
    number: "006",
    title: "Refined After Launch",
    description:
      "We track performance and keep refining the engine's output, not leaving it running blind after handoff.",
  },
];

const FAQS = [
  {
    question: "Will AI-generated content sound generic?",
    answer:
      "No, the content engine is trained specifically on your brand voice and existing content, and every draft goes through a human review step before publishing.",
  },
  {
    question: "What types of content can these engines produce?",
    answer:
      "Blog posts, product descriptions, ad copy variations, and other content types tailored to what your business actually needs.",
  },
  {
    question: "Do you still review the content before it's published?",
    answer:
      "Yes, we build a human review workflow into every content engine, so nothing goes live without a quality check.",
  },
  {
    question: "Can content be personalized for different customer segments?",
    answer:
      "Yes, generative engines can personalize messaging for different audience segments automatically, at a scale manual writing can't match.",
  },
  {
    question: "How long does it take to set up a content engine?",
    answer:
      "Setup typically takes a few weeks, depending on how much brand training and integration with your existing content workflow is needed.",
  },
];

export default function AiContentGenerativeEngines() {
  return (
    <>
      <BpoHero
        heading="AI Content & Generative Engines in India"
        description="Our generative AI content engines draft, structure, and personalize copy at scale, including blog posts, product descriptions, and ad variations, trained on your brand voice."
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
              src="/image-5.webp"
              alt="AI content and generative engines at BizzBuzz Creations"
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
              Content That Scales Without Losing Your Voice
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Our generative AI content engines draft, structure, and
              personalize copy at scale, including blog posts, product
              descriptions, and ad variations, trained on your brand voice
              so output actually sounds like you.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re an AI solutions company based in Prayagraj,
              helping businesses locally across Allahabad and Uttar
              Pradesh, as well as across India, produce content at scale
              without sacrificing quality.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our AI Content Engines"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our AI Content Engine Process"
            description="We train every content engine on your actual brand voice first, then build in a review workflow so scale never comes at the cost of quality."
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
          title="AI Content & Generative Engines Company"
          description="BizzBuzz Creations builds AI content engines for businesses across India, trained on real brand voice and reviewed by humans before anything goes live."
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
