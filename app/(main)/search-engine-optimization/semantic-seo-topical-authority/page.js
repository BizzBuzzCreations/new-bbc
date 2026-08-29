import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  Network,
  Layers,
  Link2,
  BookOpen,
  BarChart3,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "Semantic SEO & Topical Authority Services | BizzBuzz Creations",
  description:
    "Semantic SEO and topical authority services in India — build your website into a trusted authority within your niche through content clusters and entity SEO, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/search-engine-optimization/semantic-seo-topical-authority",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Network,
    heading: "Topic Cluster Architecture",
    description:
      "We map out core topics and supporting subtopics into a connected content structure, instead of isolated pages competing with each other.",
  },
  {
    icon: Link2,
    heading: "Internal Linking Strategy",
    description:
      "Strategic internal links connect related content, helping both users and search engines understand how your topics relate to each other.",
  },
  {
    icon: BookOpen,
    heading: "Entity-Based Content",
    description:
      "Content is built around real-world entities and concepts your niche cares about, not just keyword variations.",
  },
  {
    icon: Layers,
    heading: "Content Gap Analysis",
    description:
      "We identify the subtopics competitors and search engines expect to see but that your site is currently missing.",
  },
  {
    icon: BarChart3,
    heading: "Authority & Ranking Tracking",
    description:
      "We track how your topical authority builds over time through rankings across your entire content cluster, not just one page.",
  },
  {
    icon: RefreshCw,
    heading: "Ongoing Cluster Expansion",
    description:
      "We keep expanding and refreshing your topic clusters as your niche and search demand evolve.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Topic & Entity Mapping",
    body: "We map the core topics and entities that define real authority in your niche, based on what search engines already associate with expertise there.",
  },
  {
    title: "Content Gap Analysis",
    body: "We identify the subtopics your site is missing compared to what a genuine authority in your space would cover.",
  },
  {
    title: "Cluster Build-Out",
    body: "We create and interlink supporting content around each core topic, building a structure search engines can clearly map to expertise.",
  },
  {
    title: "Track & Expand",
    body: "We monitor rankings across the full cluster and keep expanding coverage as your niche and search demand evolve.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Meaning Over Keywords",
    description:
      "We focus on topics and entities search engines associate with real expertise, not just keyword density.",
  },
  {
    number: "002",
    title: "Structured Content Clusters",
    description:
      "Content is built as connected clusters, not isolated pages competing against each other for the same terms.",
  },
  {
    number: "003",
    title: "Entity-Based SEO",
    description:
      "We build content around real-world entities and concepts, helping search engines place your business correctly within your niche.",
  },
  {
    number: "004",
    title: "Gap-Driven Content Planning",
    description:
      "New content is planned based on genuine gaps versus what a topical authority would be expected to cover.",
  },
  {
    number: "005",
    title: "Data-Driven Execution",
    description:
      "Every recommendation is backed by real ranking and content-gap data, not assumptions about your niche.",
  },
  {
    number: "006",
    title: "Honest Reporting",
    description:
      "No agency can guarantee topical authority overnight, and we won't pretend otherwise — you get transparent, honest progress reports instead.",
  },
];

const FAQS = [
  {
    question: "What is semantic SEO?",
    answer:
      "Semantic SEO focuses on the meaning and context behind search queries and content, helping search engines understand what your site is genuinely about, not just which keywords appear on it.",
  },
  {
    question: "What is topical authority and why does it matter?",
    answer:
      "Topical authority is how much search engines trust your site as a genuine expert on a subject. Higher authority generally means better rankings across related searches, not just one keyword.",
  },
  {
    question: "How long does it take to build topical authority?",
    answer:
      "Building genuine topical authority typically takes several months of consistent, connected content publishing — it isn't a quick fix.",
  },
  {
    question: "Do I need to publish a lot of new content for this?",
    answer:
      "Often yes, but we start with a gap analysis so new content fills real missing subtopics rather than adding volume for its own sake.",
  },
  {
    question: "How is this different from regular content marketing?",
    answer:
      "Semantic SEO content is deliberately structured and interlinked around topic clusters and entities, planned specifically to build search authority, not just general brand content.",
  },
];

export default function SemanticSeoTopicalAuthority() {
  return (
    <>
      <BpoHero
        heading="Semantic SEO & Topical Authority Services in India"
        description="Search engines now focus on meaning and expertise rather than just keywords. We build your website into a trusted authority within your niche."
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
              alt="Semantic SEO and topical authority at BizzBuzz Creations"
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
              Built as an Authority, Not Just a Website
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Search engines now focus on meaning and expertise rather than
              just keywords. We build your website into a trusted authority
              within your niche through connected content clusters and
              entity-based SEO.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re an SEO services company based in Prayagraj, serving
              clients locally across Allahabad and Uttar Pradesh, as well as
              businesses across India, building strategies for how search
              actually evaluates expertise today.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our Semantic SEO Services"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our Semantic SEO Process"
            description="We map the topics and entities that define real authority in your niche, then build and interlink content that closes the gaps."
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
          title="Semantic SEO & Topical Authority Company"
          description="BizzBuzz Creations builds businesses across India into trusted topical authorities through connected content clusters and entity-based SEO."
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
