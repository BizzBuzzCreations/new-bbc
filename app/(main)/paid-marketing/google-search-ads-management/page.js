import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  Target,
  Search,
  ShoppingBag,
  Image as ImageIcon,
  BarChart3,
  Wallet,
} from "lucide-react";

export const metadata = {
  title: "Google & Search Ads Management | BizzBuzz Creations",
  description:
    "Google and search ads management in India — search, display, and shopping campaigns built around real buyer intent, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/paid-marketing/google-search-ads-management",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Search,
    heading: "Search Campaign Management",
    description:
      "We target keywords tied to real buyer intent, so your ads show up when someone is actively searching for what you offer.",
  },
  {
    icon: ShoppingBag,
    heading: "Google Shopping Campaigns",
    description:
      "Product listing ads are structured and optimized to get your catalog in front of shoppers ready to buy, not just browse.",
  },
  {
    icon: ImageIcon,
    heading: "Display & Remarketing Ads",
    description:
      "Visual display ads keep your brand visible across the web, while remarketing brings back visitors who didn't convert the first time.",
  },
  {
    icon: Target,
    heading: "Keyword & Bid Strategy",
    description:
      "We continuously refine keyword lists and bidding strategy, cutting wasted spend on searches that never convert.",
  },
  {
    icon: Wallet,
    heading: "Budget & Bid Optimization",
    description:
      "Budgets get allocated toward campaigns and keywords that are actually driving results, adjusted as real data comes in.",
  },
  {
    icon: BarChart3,
    heading: "Transparent Performance Reporting",
    description:
      "You see exactly what your ad spend is generating — clicks, conversions, and cost per lead — not vague monthly summaries.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Business & Keyword Research",
    body: "We study your business, customers, and the exact search terms real buyers use before building a single campaign.",
  },
  {
    title: "Campaign & Ad Copy Setup",
    body: "Search, shopping, and display campaigns get structured around buyer intent, with ad copy written to actually convert clicks.",
  },
  {
    title: "Launch & Daily Optimization",
    body: "Campaigns go live with daily monitoring — bids, budgets, and keywords get adjusted as real performance data comes in.",
  },
  {
    title: "Scale & Report",
    body: "Once a campaign proves itself, we scale spend into what's working and report honestly on cost per lead every month.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Intent-First Targeting",
    description:
      "We target keywords tied to real buyer intent, so your budget reaches people actually ready to act.",
  },
  {
    number: "002",
    title: "Full Google Ads Coverage",
    description:
      "Search, shopping, and display campaigns are all managed under one strategy, not siloed separately.",
  },
  {
    number: "003",
    title: "Daily Optimization",
    description:
      "Campaigns don't sit untouched between monthly check-ins — we adjust bids and budgets as data comes in daily.",
  },
  {
    number: "004",
    title: "Wasted Spend Reduction",
    description:
      "We continuously refine keyword lists and negative keywords to cut spend on searches that never convert.",
  },
  {
    number: "005",
    title: "Transparent Numbers",
    description:
      "We're honest about what's working and what isn't, obsessed with getting you a better cost per lead every month.",
  },
  {
    number: "006",
    title: "A Team, Not a Vendor",
    description:
      "Think of us less like a vendor and more like a hired paid marketing team pushing for your growth every day.",
  },
];

const FAQS = [
  {
    question: "What's the difference between search, shopping, and display ads?",
    answer:
      "Search ads appear in Google search results for specific queries, shopping ads showcase product listings, and display ads appear as visual banners across websites — we use each where it fits your goals.",
  },
  {
    question: "How much should I budget for Google Ads?",
    answer:
      "Budget depends on your industry and competition — we recommend a realistic starting budget and optimize allocation as performance data comes in.",
  },
  {
    question: "How quickly do Google Ads start generating leads?",
    answer:
      "Search campaigns can start generating clicks and leads within days of launch, though optimization improves results significantly over the following weeks.",
  },
  {
    question: "Do you write the ad copy and keyword lists?",
    answer:
      "Yes, we handle keyword research, ad copywriting, and ongoing refinement as part of campaign management.",
  },
  {
    question: "How do you report on ad performance?",
    answer:
      "We provide transparent reporting on clicks, conversions, and cost per lead, so you always know what your spend is generating.",
  },
];

export default function GoogleSearchAdsManagement() {
  return (
    <>
      <BpoHero
        heading="Google & Search Ads Management in India"
        description="Get found the moment someone is ready to buy. Our digital ads management services cover search, display, and shopping campaigns built around real buyer intent, so your business shows up when it matters most, not just when budgets allow."
        img="/ads.webp"
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
              src="/google%20ad.webp"
              alt="Google and search ads management at BizzBuzz Creations"
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
              Show Up the Moment Someone's Ready to Buy
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Get found the moment someone is ready to buy. Our digital ads
              management services cover search, display, and shopping
              campaigns built around real buyer intent, so your business
              shows up when it matters most, not just when budgets allow.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a paid marketing agency based in Prayagraj,
              proudly serving businesses locally across Allahabad and Uttar
              Pradesh, as well as brands across India, turning ad spend into
              measurable business growth.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our Google & Search Ads Management"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our Google & Search Ads Process"
            description="We research your business and buyer intent first, then build, launch, and continuously optimize campaigns around real conversions, not vanity clicks."
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
          title="Google & Search Ads Management Company"
          description="BizzBuzz Creations manages Google search, shopping, and display campaigns for businesses across India, built around real buyer intent and tracked against real results."
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
