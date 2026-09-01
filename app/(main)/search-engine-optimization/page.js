import Link from "next/link";
import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import RoadmapCarousel from "@/components/sections/roadmapCarousel";
import BpoWeAre from "@/components/sections/bpoWeAre";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import { Bot, Sparkles, MessageCircleQuestion, MapPin, Network, Users } from "lucide-react";

export const metadata = {
  title: "Top SEO Services & Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is an SEO agency delivering search engine optimization services for businesses in India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/search-engine-optimization",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Bot,
    heading: "AI Search Optimization",
    description:
      "As an ai search optimization services provider, we help your business stay visible as search shifts toward AI-generated answers, not just traditional blue-link results, across ChatGPT, Perplexity, and Google AI Overviews.",
    href: "/search-engine-optimization/ai-search-optimization",
  },
  {
    icon: Sparkles,
    heading: "Generative Engine Optimization (GEO)",
    description:
      "As a generative engine optimization agency, we get your brand cited inside AI-generated answers from tools like ChatGPT, not just ranked in traditional search results people increasingly skip past entirely.",
    href: "/search-engine-optimization/generative-engine-optimization",
  },
  {
    icon: MessageCircleQuestion,
    heading: "Answer Engine Optimization (AEO)",
    description:
      "As an answer engine optimization agency, we structure your content to win featured snippets and AI overviews directly, so you're the answer itself, not just another link below it.",
    href: "/search-engine-optimization/answer-engine-optimization",
  },
  {
    icon: MapPin,
    heading: "High-Intent & Local SEO",
    description:
      "As a local seo agency, we target ready-to-buy customers searching nearby with precise geo targeting and Google Business Profile optimization, not broad, wasteful traffic that never actually converts.",
    href: "/search-engine-optimization/high-intent-local-seo",
  },
  {
    icon: Network,
    heading: "Semantic SEO & Content Optimization",
    description:
      "As a content optimization agency, we build genuine topical authority through semantic SEO and entity optimization, not isolated keyword targeting that search engines increasingly see straight through.",
    href: "/search-engine-optimization/semantic-seo-topical-authority",
  },
  {
    icon: Users,
    heading: "Agency Growth & White Label SEO",
    description:
      "As a white label seo agency, we deliver SEO fulfillment under your own brand, letting agencies scale delivery for clients without the cost of hiring an in-house SEO team.",
    href: "/search-engine-optimization/ai-content-optimization",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "SEO Audit & Discovery",
    desc: "We start by auditing your current site, rankings, and competitors, identifying exactly where you're losing visibility and why that's happening.",
  },
  {
    number: "02",
    title: "Keyword & Opportunity Research",
    desc: "We research the specific keywords and search intent relevant to your business, prioritizing terms most likely to actually convert.",
  },
  {
    number: "03",
    title: "Strategy & Content Planning",
    desc: "We build a strategy covering technical fixes, content, and authority building, mapped to your specific opportunities and industry.",
  },
  {
    number: "04",
    title: "On-Page & Technical Implementation",
    desc: "We implement content and technical changes, fixing what's holding your site back while building out what's genuinely missing.",
  },
  {
    number: "05",
    title: "Authority & Link Building",
    desc: "We build genuine authority through relevant links and mentions, strengthening how search engines and AI tools trust your site.",
  },
  {
    number: "06",
    title: "Ongoing Reporting & Optimization",
    desc: "We track rankings and traffic closely, refining strategy as your site, competitors, and search itself continue to evolve.",
  },
];

// "SEO Company" section — left untouched by request, same content and
// same position (between the process carousel and the FAQ) as before.
const WE_ARE_POINTS = [
  {
    number: "001",
    title: "AI-First Strategy",
    description:
      "We don't follow outdated SEO — every strategy is built for how search actually works in 2026, not five years ago.",
  },
  {
    number: "002",
    title: "Semantic SEO & Topical Authority",
    description:
      "We focus on meaning and expertise, building content clusters and entity-based SEO that establish real authority in your niche.",
  },
  {
    number: "003",
    title: "High-Intent Keyword Targeting",
    description:
      "We prioritize keywords that convert, not just ones that bring traffic — visibility that turns into leads and sales.",
  },
  {
    number: "004",
    title: "AI Search Visibility",
    description:
      "We optimize for Google AI Overviews, ChatGPT answers, and zero-click search, not just traditional blue-link rankings.",
  },
  {
    number: "005",
    title: "Data-Driven Execution",
    description:
      "Every recommendation is backed by real performance data and search behavior, not assumptions or industry guesswork.",
  },
  {
    number: "006",
    title: "Honest Reporting",
    description:
      "No ethical SEO agency can guarantee first-page rankings, and we won't pretend otherwise — you get transparent, honest progress reports instead.",
  },
];

const FAQS = [
  {
    question: "How much do SEO services cost in India?",
    answer:
      "Cost depends on scope, competition level, and whether technical, content, and link building work are all included. We scope pricing after understanding your specific website and goals, rather than offering a flat rate that doesn't reflect what your project actually needs.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "Timeline varies by competition and your site's current authority, but most businesses see initial movement within a few months, with meaningful, compounding results typically building over six months to a year of consistent work.",
  },
  {
    question: "What's the difference between local SEO and general SEO?",
    answer:
      "Local SEO focuses specifically on ranking for nearby searches and Google Business Profile visibility, while general SEO covers broader organic rankings across your whole site. Most local businesses need both working together for genuine visibility.",
  },
  {
    question: "Do you handle both technical SEO and content together?",
    answer:
      "Yes, technical fixes and content strategy are handled as one connected process, since strong content on a technically weak site, or a fast site with thin content, both underperform on their own.",
  },
  {
    question: "Can SEO help my business show up in AI search results like ChatGPT?",
    answer:
      "Yes, AI search and generative engine optimization are part of our core SEO services now, since search behavior is genuinely shifting toward AI-generated answers alongside traditional results.",
  },
  {
    question: "Do you offer white label SEO for agencies?",
    answer:
      "Yes, white label SEO fulfillment is one of our core services, letting agencies deliver SEO work under their own brand without building an in-house team themselves.",
  },
];

export default function SearchEngineOptimization() {
  return (
    <>
      <BpoHero
        heading="SEO That Gets You Ranked and Clicked"
        description="SEO services built to grow real organic traffic and rankings for businesses in Prayagraj, across India and worldwide, not just vanity keyword positions."
        img="/seO2.jpg"
        ctaText="Get a Free SEO Audit"
      />

      {/* Intro — dark section, glow accents behind the copy */}
      <section className="relative overflow-hidden bg-black py-20">

        <div className="relative flex lg:flex-row flex-col px-5 lg:gap-20 gap-10 justify-center items-center max-w-6xl mx-auto">
          <div className="relative w-full lg:w-[440px] aspect-[4/5] shrink-0 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/BizzBuzz-Creations-5.png"
              alt="BizzBuzz Creations SEO team at work"
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
            <h2 className="text-3xl font-bold mb-2 text-white">
              SEO Built Around Real Rankings, Not Just Reports
            </h2>
            <h3 className="text-base font-semibold text-[#40A2D8] mb-4">
              Who we build SEO for, and why it goes beyond keyword reports.
            </h3>
            <p className="text-white/70 leading-relaxed mb-4">
              Ranking for the wrong keywords, or ranking well with no
              traffic behind it, is a common outcome of SEO done without
              real strategy. At BizzBuzz Creations, we run SEO judged on
              organic traffic that actually converts, not just position
              tracking that looks good in a report. Whether you&rsquo;re a
              local business in Prayagraj looking for an SEO agency near
              me, a brand elsewhere in India searching for an SEO company
              that understands your specific industry, or a business
              needing a dedicated SEO consultant without hiring an
              in-house team, our team builds strategy-led SEO tailored to
              how your business actually grows.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a full-service SEO agency based in Prayagraj,
              proudly serving clients locally across Allahabad and Uttar
              Pradesh, nationally across India, and internationally across
              the UK, USA, and worldwide. From technical SEO and content
              to local visibility and AI search readiness, we handle the
              full search engine optimization services stack so
              you&rsquo;re not coordinating five different specialists
              yourself.
            </p>
          </div>
        </div>
      </section>

      {/* "Six Ways We Help Your Business Get Found" */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="Six Ways We Help Your Business Get Found"
            subheading="Everything we offer is matched to how search is actually changing right now."
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* "How We Turn Search Traffic Into Real Customers" — auto-scrolling
          carousel (right-to-left, pauses on hover) instead of a static
          accordion, so the six-step process reads as motion. */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            How We Turn Search Traffic Into Real Customers
          </h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-14">
            Our six-step process, from auditing your site to ongoing
            optimization.
          </p>
          <RoadmapCarousel steps={PROCESS_STEPS} />
        </div>
      </section>

      <div className="bg-black px-5">
        <div className="max-w-5xl mx-auto border-t border-white" />
      </div>

      {/* "SEO Company" — left untouched by request. */}
      <section className="bg-black pt-20 pb-20 px-5">
        <BpoWeAre
          title="SEO Services Company"
          description="BizzBuzz Creations is an SEO services company helping businesses in Prayagraj and across India rank higher, get discovered in AI search, and attract customers ready to buy. As a dedicated SEO partner, we build AI-first strategies designed for how search actually works today."
          points={WE_ARE_POINTS}
        />
      </section>

      <DarkFAQSection faqs={FAQS} heading="Frequently Asked Questions" />

      {/* "Why Businesses Trust Us to Rank, and Where We're Rooted" —
          heading on top, copy on the left, image on the right. */}
      <section className="relative overflow-hidden bg-black py-20">
        <div className="relative max-w-6xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
            Why Businesses Trust Us to Rank, and Where We&rsquo;re Rooted
          </h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-12">
            What genuinely sets us apart from others, and where we&rsquo;re
            actually rooted.
          </p>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <p className="text-white/70 leading-relaxed mb-4">
                We treat every SEO engagement as a growth strategy, not a
                checklist of technical fixes and keyword reports. A
                well-run SEO agency should be judged on organic traffic
                that actually converts and rankings that actually hold,
                not just a monthly report full of numbers, which is
                exactly why businesses trust us as their SEO company of
                choice.
              </p>
              <p className="text-white/70 leading-relaxed">
                BizzBuzz Creations is based in Prayagraj, Uttar Pradesh — a
                city many still know as Allahabad — and that local
                grounding shapes how we approach every SEO project, with
                the same standard of work whether a client is nearby or
                across the world. We handle SEO locally across Prayagraj
                and Allahabad, nationally across India, and internationally
                across the UK, USA, and worldwide, as an SEO agency that
                understands how to build for real business results, not
                just improved rankings.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/why-choose-image.png"
                alt="Why businesses trust BizzBuzz Creations to rank"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Page-local CTA — heading + paragraph + two buttons, both pointing
          to /contact, instead of the shared email-form CTA. */}
      <div className="bg-black px-5 py-10 scroll-mt-34" id="CTA">
        <div
          className="rounded-3xl border-2 border-[#0B60B0] shadow-lg shadow-black md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto container"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
          }}
        >
          <div className="py-8 md:py-10 px-10 z-10 text-white">
            <h2 className="md:text-3xl text-2xl font-bold mb-2">
              Ready to Rank for What Actually Matters?
            </h2>
            <h3 className="text-base font-semibold text-[#40A2D8] mb-5">
              The next step, if you&rsquo;re ready to talk about what comes
              next.
            </h3>
            <p className="max-w-3xl text-white/70 mb-8">
              Whether you&rsquo;re a local business in Prayagraj, a growing
              brand anywhere else in India, or a business overseas needing
              an SEO partner that understands both technical work and
              results, rankings are only worth what they actually bring
              you. Let&rsquo;s talk about what your SEO should be doing
              for your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-black text-sm font-semibold px-7 py-3.5 rounded-full transition"
              >
                Get a Free SEO Audit
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/50 hover:bg-white/10 text-white text-sm font-semibold px-7 py-3.5 rounded-full transition"
              >
                Talk to an SEO Specialist
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Same full-width divider the shared CTA ends with, so this page
          still transitions into the footer the same way. */}
      <div className="w-full bg-black pt-8 md:pt-10">
        <div className="w-full border-t border-white" />
      </div>
    </>
  );
}
