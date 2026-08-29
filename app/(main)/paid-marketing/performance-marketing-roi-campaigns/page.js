import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  TrendingUp,
  Wallet,
  BarChart3,
  Target,
  RefreshCw,
  LineChart,
} from "lucide-react";

export const metadata = {
  title: "Performance Marketing & ROI Campaigns | BizzBuzz Creations",
  description:
    "Performance marketing and ROI-focused campaigns in India — every rupee tracked against one metric that matters: return on investment, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/paid-marketing/performance-marketing-roi-campaigns",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Target,
    heading: "ROI-Focused Campaign Strategy",
    description:
      "Every campaign is planned around a target return on investment from day one, not built around impressions or reach for their own sake.",
  },
  {
    icon: Wallet,
    heading: "Cross-Platform Budget Allocation",
    description:
      "We shift budget across Google, Meta, and other channels based on where it's actually generating the best return.",
  },
  {
    icon: LineChart,
    heading: "Conversion Tracking Setup",
    description:
      "Proper conversion tracking and attribution get set up first, so every decision after that is based on real data, not guesses.",
  },
  {
    icon: RefreshCw,
    heading: "Continuous Testing & Iteration",
    description:
      "We continuously test creatives, audiences, and landing pages, keeping what performs and cutting what doesn't.",
  },
  {
    icon: BarChart3,
    heading: "Revenue & ROI Reporting",
    description:
      "Reports focus on revenue and return on ad spend, not vanity numbers like impressions or generic engagement.",
  },
  {
    icon: TrendingUp,
    heading: "Scaling What Works",
    description:
      "Once a campaign proves its ROI, we scale spend into it methodically, rather than spreading budget thin across untested ideas.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Define Success Metrics",
    body: "We agree on what a genuinely good result looks like for your business — revenue, cost per acquisition, or a specific ROI target.",
  },
  {
    title: "Tracking & Attribution Setup",
    body: "We set up proper conversion tracking so every campaign decision after this point is based on real data, not assumptions.",
  },
  {
    title: "Launch & Continuous Testing",
    body: "Campaigns launch across the right channels with ongoing testing of creatives, audiences, and landing pages.",
  },
  {
    title: "Scale & Report on ROI",
    body: "We scale spend into what's proving its return and report transparently on revenue and ROI, not vanity metrics.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Performance-First Campaigns",
    description:
      "Every campaign we run is tracked against one metric that matters: return on investment — no vanity numbers, no fluff.",
  },
  {
    number: "002",
    title: "Cross-Platform Optimization",
    description:
      "We move budget across Google, Meta, and other channels based on real performance data, not a fixed split.",
  },
  {
    number: "003",
    title: "Tracking Done Right",
    description:
      "Proper conversion tracking and attribution are set up first, so every later decision is based on accurate data.",
  },
  {
    number: "004",
    title: "Continuous Testing",
    description:
      "We test creatives, audiences, and landing pages continuously, rather than launching once and leaving campaigns untouched.",
  },
  {
    number: "005",
    title: "Transparent ROI Reporting",
    description:
      "We're honest about what's working and what isn't, reporting on revenue and return, not just clicks and impressions.",
  },
  {
    number: "006",
    title: "A Team, Not a Vendor",
    description:
      "Think of us less like a vendor and more like a hired performance marketing team pushing for your growth every day.",
  },
];

const FAQS = [
  {
    question: "What is performance marketing?",
    answer:
      "Performance marketing focuses campaigns and reporting around measurable outcomes like leads, sales, and return on investment, rather than impressions or clicks alone.",
  },
  {
    question: "How is performance marketing different from regular ad management?",
    answer:
      "Performance marketing puts ROI and revenue tracking at the center of every decision, from targeting to budget allocation, not just running ads and hoping they convert.",
  },
  {
    question: "What tracking do I need in place before starting?",
    answer:
      "At minimum, conversion tracking on your website or landing pages — we help set this up properly if it isn't already in place.",
  },
  {
    question: "How do you decide where to allocate budget?",
    answer:
      "We allocate and shift budget across channels based on real performance data and return on investment, not a fixed split decided upfront.",
  },
  {
    question: "How long before I see a positive ROI?",
    answer:
      "It varies by industry and starting point, but most campaigns show meaningful ROI trends within the first two to three months of optimization.",
  },
];

export default function PerformanceMarketingRoiCampaigns() {
  return (
    <>
      <BpoHero
        heading="Performance Marketing & ROI Campaigns in India"
        description="As a dedicated performance marketing agency, every campaign we run is tracked against one metric that matters: return on investment. No vanity numbers, no fluff, just campaigns built to hit your revenue targets."
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
              src="/digitalmarketing.webp"
              alt="Performance marketing and ROI campaigns at BizzBuzz Creations"
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
              No Vanity Numbers, Just Return on Investment
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              As a dedicated performance marketing agency, every campaign we
              run is tracked against one metric that matters: return on
              investment. No vanity numbers, no fluff, just campaigns built
              to hit your revenue targets.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a paid marketing agency based in Prayagraj,
              proudly serving businesses locally across Allahabad and Uttar
              Pradesh, as well as brands across India, focused on outcomes
              that actually move your business forward.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our Performance Marketing"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our Performance Marketing Process"
            description="We define what success actually means for your business first, then track, test, and scale campaigns specifically around that outcome."
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
          title="Performance Marketing Agency"
          description="BizzBuzz Creations runs ROI-focused performance marketing campaigns for businesses across India, tracked against revenue, not vanity metrics."
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
