import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  MessageCircle,
  Camera,
  Target,
  PenTool,
  BarChart3,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "Meta & Social Ads Management | BizzBuzz Creations",
  description:
    "Meta and social ads management in India — Facebook and Instagram ad creatives and targeting that turn casual scrollers into genuine leads, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/paid-marketing/meta-social-ads-management",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Camera,
    heading: "Facebook & Instagram Ad Creatives",
    description:
      "We design scroll-stopping ad creatives built specifically for feed and story placements, not repurposed banners that feel out of place.",
  },
  {
    icon: Target,
    heading: "Audience Targeting & Segmentation",
    description:
      "Ads are targeted using real customer data and lookalike audiences, reaching people genuinely likely to convert.",
  },
  {
    icon: PenTool,
    heading: "Ad Copy & Messaging",
    description:
      "We write ad copy that starts conversations and prompts action, matched to how people actually scroll and read on social platforms.",
  },
  {
    icon: RefreshCw,
    heading: "Retargeting & Funnel Campaigns",
    description:
      "We build retargeting campaigns that bring back visitors who engaged but didn't convert, recovering demand you'd otherwise lose.",
  },
  {
    icon: MessageCircle,
    heading: "Lead & Message Ads",
    description:
      "Lead form and click-to-message ads make it effortless for interested prospects to reach out directly from the ad itself.",
  },
  {
    icon: BarChart3,
    heading: "Transparent Performance Reporting",
    description:
      "You see exactly what your Meta ad spend is generating — leads, cost per result, and return — not a vague monthly summary.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Audience & Goal Discovery",
    body: "We understand your target customer and campaign goals before setting a single ad live on Facebook or Instagram.",
  },
  {
    title: "Creative & Targeting Setup",
    body: "Ad creatives, copy, and audience segments are built to stop the scroll and start conversations with the right people.",
  },
  {
    title: "Launch & Real-Time Monitoring",
    body: "Campaigns launch with close monitoring in the first days, so underperforming ads get caught and adjusted quickly.",
  },
  {
    title: "Optimize & Scale",
    body: "We double down on what's converting and cut what isn't, scaling spend toward your best-performing creatives and audiences.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Scroll-Stopping Creative",
    description:
      "Ad creatives are designed specifically for how people scroll Facebook and Instagram, not repurposed from other channels.",
  },
  {
    number: "002",
    title: "Data-Backed Targeting",
    description:
      "Audience segments are built from real customer data and lookalikes, not broad guesses.",
  },
  {
    number: "003",
    title: "Conversation-Starting Copy",
    description:
      "We write ad copy designed to prompt action and start real conversations, not just generate impressions.",
  },
  {
    number: "004",
    title: "Retargeting Built In",
    description:
      "We capture visitors who engaged but didn't convert, recovering demand competitors leave on the table.",
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
    question: "What's the difference between Meta ads and Facebook ads?",
    answer:
      "Meta ads is the umbrella term covering ads across both Facebook and Instagram, managed through Meta's ad platform as one coordinated strategy.",
  },
  {
    question: "How much should I budget for Meta ads?",
    answer:
      "Budget depends on your goals and industry — we'll recommend a realistic starting budget and optimize allocation based on what's converting.",
  },
  {
    question: "Do you design the ad creatives, or do I need to provide them?",
    answer:
      "Our team designs ad creatives specifically for Facebook and Instagram placements, or we can work with brand assets you already have.",
  },
  {
    question: "How is Meta ads performance measured?",
    answer:
      "We track cost per lead, conversion rate, and return on ad spend — the metrics that actually reflect business impact, not just reach.",
  },
  {
    question: "How quickly will I see results from Meta ads?",
    answer:
      "Initial data typically comes in within the first one to two weeks, with meaningful optimization improving results over the following month.",
  },
];

export default function MetaSocialAdsManagement() {
  return (
    <>
      <BpoHero
        heading="Meta & Social Ads Management in India"
        description="From Facebook to Instagram, our paid media services are designed to stop the scroll and start conversations. We craft ad creatives and targeting strategies that turn casual scrollers into genuine leads for your brand."
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
              src="/meta%20ads.webp"
              alt="Meta and social ads management at BizzBuzz Creations"
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
              Stop the Scroll, Start the Conversation
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              From Facebook to Instagram, our paid media services are
              designed to stop the scroll and start conversations. We craft
              ad creatives and targeting strategies that turn casual
              scrollers into genuine leads for your brand.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a paid marketing agency based in Prayagraj,
              proudly serving businesses locally across Allahabad and Uttar
              Pradesh, as well as brands across India, turning social ad
              spend into measurable business growth.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our Meta & Social Ads Management"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our Meta & Social Ads Process"
            description="We understand your audience and goals first, then build, launch, and continuously optimize creatives and targeting around real leads, not vanity metrics."
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
          title="Meta & Social Ads Management Company"
          description="BizzBuzz Creations runs Facebook and Instagram ad campaigns for businesses across India, built to stop the scroll and turn attention into genuine leads."
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
