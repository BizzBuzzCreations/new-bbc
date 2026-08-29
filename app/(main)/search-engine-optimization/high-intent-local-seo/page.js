import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  MapPin,
  Target,
  Star,
  Building2,
  BarChart3,
  Search,
} from "lucide-react";

export const metadata = {
  title: "High-Intent & Local SEO Services | BizzBuzz Creations",
  description:
    "High-intent and local SEO services in India — target ready-to-buy and location-based searches to generate real business results, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/search-engine-optimization/high-intent-local-seo",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Target,
    heading: "High-Intent Keyword Targeting",
    description:
      "We prioritize keywords that signal real buying intent, not just traffic volume, so visits are more likely to turn into leads.",
  },
  {
    icon: MapPin,
    heading: "Google Business Profile Optimization",
    description:
      "We optimize your Google Business Profile with accurate categories, photos, and posts, so you show up in local map results that drive calls and visits.",
  },
  {
    icon: Building2,
    heading: "Local Citation Building",
    description:
      "Consistent business listings across relevant directories strengthen local trust signals and improve your visibility in nearby searches.",
  },
  {
    icon: Star,
    heading: "Review Generation & Management",
    description:
      "We help build a steady flow of genuine customer reviews and respond to them professionally, which strongly influences local rankings and trust.",
  },
  {
    icon: Search,
    heading: "Location-Based Landing Pages",
    description:
      "For businesses serving multiple areas, we build dedicated location pages that rank for city and neighborhood-specific searches.",
  },
  {
    icon: BarChart3,
    heading: "Lead & Call Tracking",
    description:
      "We track calls, form fills, and direction requests generated from local search, not just impressions, so you see real business impact.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Intent & Local Audit",
    body: "We review your current local presence and identify high-intent keywords your actual customers use when they're ready to act.",
  },
  {
    title: "Profile & Citation Optimization",
    body: "We optimize your Google Business Profile and build consistent citations across relevant directories to strengthen local trust.",
  },
  {
    title: "Content & Landing Page Build",
    body: "We create or refine location-specific pages and content targeting the high-intent searches your customers actually make.",
  },
  {
    title: "Track Leads & Refine",
    body: "We track calls, form fills, and direction requests, refining targeting based on what's actually converting into business.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Intent Over Volume",
    description:
      "We prioritize keywords that convert, not just ones that bring traffic — visibility that turns into leads and sales.",
  },
  {
    number: "002",
    title: "Local Search Specialists",
    description:
      "We focus on the specific signals that drive local map pack rankings — profile accuracy, citations, and reviews.",
  },
  {
    number: "003",
    title: "Review-Driven Trust",
    description:
      "We actively help build genuine review volume and quality, a major factor in both local rankings and customer trust.",
  },
  {
    number: "004",
    title: "Multi-Location Ready",
    description:
      "We build dedicated, properly structured location pages for businesses serving more than one area or city.",
  },
  {
    number: "005",
    title: "Lead Tracking, Not Just Traffic",
    description:
      "We measure calls, form fills, and direction requests, giving you visibility into real business results, not just visits.",
  },
  {
    number: "006",
    title: "Honest Reporting",
    description:
      "No agency can guarantee first-page local rankings, and we won't pretend otherwise — you get transparent, honest progress reports instead.",
  },
];

const FAQS = [
  {
    question: "What is high-intent SEO?",
    answer:
      "High-intent SEO targets keywords that signal a searcher is close to making a decision or purchase, prioritizing conversion potential over raw traffic volume.",
  },
  {
    question: "How does local SEO help my business?",
    answer:
      "Local SEO improves your visibility in nearby searches and Google Maps results, helping customers in your service area find and choose you over competitors.",
  },
  {
    question: "Do I need a Google Business Profile for local SEO?",
    answer:
      "Yes, an optimized Google Business Profile is one of the strongest factors in local search visibility, especially for map pack rankings.",
  },
  {
    question: "How important are customer reviews for local rankings?",
    answer:
      "Very — genuine review volume, recency, and your responses to them are a significant factor search engines use to rank local businesses.",
  },
  {
    question: "Can you help if I serve multiple cities or areas?",
    answer:
      "Yes, we build dedicated, properly structured location pages so you can rank for searches specific to each area you serve.",
  },
];

export default function HighIntentLocalSeo() {
  return (
    <>
      <BpoHero
        heading="High-Intent & Local SEO Services in India"
        description="Driving traffic is not enough; you need customers ready to take action. We target high-intent and location-based searches to generate real business results."
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
              alt="High-intent and local SEO at BizzBuzz Creations"
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
              Customers Ready to Act, Not Just Traffic
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Driving traffic is not enough; you need customers ready to
              take action. We target high-intent and location-based searches
              to generate real business results — calls, form fills, and
              store visits, not just page views.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re an SEO services company based in Prayagraj, serving
              clients locally across Allahabad and Uttar Pradesh, as well as
              businesses across India, helping local and multi-location
              businesses get found by the right customers.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our High-Intent & Local SEO"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our High-Intent & Local SEO Process"
            description="We audit your local presence and target keywords with real buying intent, then track calls and leads, not just clicks."
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
          title="High-Intent & Local SEO Company"
          description="BizzBuzz Creations helps local and multi-location businesses across India target high-intent, ready-to-buy searches that turn into real leads."
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
