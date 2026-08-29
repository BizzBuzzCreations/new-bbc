import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  Users,
  Target,
  BarChart3,
  Wallet,
  RefreshCw,
  ShoppingCart,
} from "lucide-react";

export const metadata = {
  title: "Facebook & Meta Ads Agency | BizzBuzz Creations",
  description:
    "Facebook and Meta ads agency in India — performance-focused campaigns backed by data, every rupee tracked and optimized for real leads, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/social-media-marketing/facebook-meta-ads-agency",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Target,
    heading: "Audience Targeting & Segmentation",
    description:
      "We build precise audience segments based on real customer data, not broad guesses, so ad spend reaches people likely to convert.",
  },
  {
    icon: Wallet,
    heading: "Ad Budget Management",
    description:
      "Budgets are allocated and adjusted based on performance data, moving spend toward what's actually converting.",
  },
  {
    icon: ShoppingCart,
    heading: "Lead & Conversion Campaigns",
    description:
      "Campaigns are structured around lead generation and conversions, not just reach or engagement metrics that don't pay the bills.",
  },
  {
    icon: RefreshCw,
    heading: "Retargeting & Funnel Ads",
    description:
      "We build retargeting campaigns that bring back visitors who didn't convert the first time, capturing demand you'd otherwise lose.",
  },
  {
    icon: BarChart3,
    heading: "Transparent Performance Reporting",
    description:
      "Every rupee spent is tracked and reported clearly, showing cost per lead and return on ad spend, not vague summaries.",
  },
  {
    icon: Users,
    heading: "Creative Testing & Optimization",
    description:
      "We test multiple ad creatives and copy variations continuously, doubling down on what's proven to perform.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Goals & Audience Discovery",
    body: "We understand your target customer and business goals before setting a single campaign live.",
  },
  {
    title: "Campaign & Creative Setup",
    body: "Audiences, budgets, and ad creatives are built around lead generation and conversions, not vanity metrics.",
  },
  {
    title: "Launch & Real-Time Monitoring",
    body: "Campaigns launch with close monitoring in the first days, so underperforming ads get caught and fixed quickly.",
  },
  {
    title: "Optimize & Scale",
    body: "We double down on what's converting and cut what isn't, scaling spend toward your best-performing campaigns.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Performance-Focused Campaigns",
    description:
      "Every campaign is run and measured against real leads, not just clicks and impressions.",
  },
  {
    number: "002",
    title: "Data-Backed Targeting",
    description:
      "Audience segments are built from real data and performance signals, not broad guesses.",
  },
  {
    number: "003",
    title: "Full Transparency on Spend",
    description:
      "You see exactly where every rupee goes and what it's returning, not a black-box monthly invoice.",
  },
  {
    number: "004",
    title: "Continuous Creative Testing",
    description:
      "We keep testing ad creatives and copy, so campaigns improve over time instead of stagnating.",
  },
  {
    number: "005",
    title: "Retargeting Built In",
    description:
      "We capture visitors who didn't convert the first time, recovering demand competitors leave on the table.",
  },
  {
    number: "006",
    title: "Prayagraj-Based, Nationally Trusted",
    description:
      "A Facebook and Meta ads team in Prayagraj with a strong grasp of Indian audiences, serving brands across India.",
  },
];

const FAQS = [
  {
    question: "What's the difference between Facebook ads and Meta ads?",
    answer:
      "Meta ads is the umbrella term covering ads across Facebook and Instagram managed through Meta's ad platform — we run both as part of a coordinated strategy.",
  },
  {
    question: "How much should I budget for Facebook and Meta ads?",
    answer:
      "Budget depends on your goals and industry — we'll recommend a realistic starting budget and optimize allocation based on what's converting.",
  },
  {
    question: "How do you measure success for ad campaigns?",
    answer:
      "We track cost per lead, conversion rate, and return on ad spend — the metrics that actually reflect business impact, not just reach.",
  },
  {
    question: "How quickly will I see results from Facebook ads?",
    answer:
      "Initial data typically comes in within the first one to two weeks, with meaningful optimization improving results over the following month.",
  },
  {
    question: "Do you handle ad creative and copywriting too?",
    answer:
      "Yes, we create and continuously test ad creatives and copy variations as part of the campaign management service.",
  },
];

export default function FacebookMetaAdsAgency() {
  return (
    <>
      <BpoHero
        heading="Facebook & Meta Ads Agency in India"
        description="As a performance-focused Facebook and Meta ads agency, we run high-converting campaigns backed by data. Every rupee you spend is tracked and optimized for real leads, not just clicks and impressions."
        img="/socialmedia%2002.jpg"
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
              src="/meta%20ads.webp"
              alt="Facebook and Meta ads management at BizzBuzz Creations"
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
              Every Rupee Tracked, Every Campaign Optimized
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              As a performance-focused Facebook and Meta ads agency, we run
              high-converting campaigns backed by data. Every rupee you
              spend is tracked and optimized for real leads, not just clicks
              and impressions.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a social media marketing agency based in
              Prayagraj, proudly serving businesses locally across Allahabad
              and Uttar Pradesh, as well as brands across India, turning ad
              spend into measurable business results.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our Facebook & Meta Ads Management"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our Facebook & Meta Ads Process"
            description="We understand your goals and audience first, then build, launch, and continuously optimize campaigns around real leads, not vanity metrics."
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
          title="Facebook & Meta Ads Company"
          description="BizzBuzz Creations runs performance-focused Facebook and Meta ad campaigns for businesses across India, tracked and optimized for real leads."
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
