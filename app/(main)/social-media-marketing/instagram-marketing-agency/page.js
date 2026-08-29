import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  Camera,
  Film,
  Target,
  Users,
  BarChart3,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Instagram Marketing Agency | BizzBuzz Creations",
  description:
    "Instagram marketing agency in India — reels, story strategy, and targeted ads that turn followers into genuine paying customers, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/social-media-marketing/instagram-marketing-agency",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Film,
    heading: "Reels & Story Strategy",
    description:
      "We plan and produce reels and stories designed to stop the scroll, matched to what's actually working on Instagram right now.",
  },
  {
    icon: Camera,
    heading: "Scroll-Stopping Content Creation",
    description:
      "Feed posts, carousels, and visuals are created to look native to Instagram, not like recycled content from another platform.",
  },
  {
    icon: Target,
    heading: "Targeted Instagram Ads",
    description:
      "We run Instagram ad campaigns targeted at the audiences most likely to convert, tracked and optimized for real results, not just reach.",
  },
  {
    icon: Users,
    heading: "Influencer & Collaboration Support",
    description:
      "Where it fits your brand, we help identify and coordinate influencer collaborations that extend your reach authentically.",
  },
  {
    icon: BarChart3,
    heading: "Engagement & Growth Tracking",
    description:
      "We track real engagement and follower growth, not just impressions, so you know the strategy is actually building an audience.",
  },
  {
    icon: Sparkles,
    heading: "Trend-Responsive Planning",
    description:
      "Content plans adapt to emerging Instagram trends and formats quickly, so your brand doesn't fall behind the platform's shifts.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Audience & Content Audit",
    body: "We review your current Instagram presence and audience to see what's working and where the real opportunity is.",
  },
  {
    title: "Content & Reels Planning",
    body: "We plan a content mix of reels, stories, and feed posts built around what actually drives engagement for your niche.",
  },
  {
    title: "Production & Ad Launch",
    body: "Content gets produced and published, with targeted Instagram ads launched alongside organic content for coordinated growth.",
  },
  {
    title: "Track & Optimize",
    body: "We monitor engagement, follower growth, and ad performance, adjusting creative and targeting to keep results improving.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Real Engagement Focus",
    description:
      "We build genuine engagement, not just likes, so your audience actually becomes customers over time.",
  },
  {
    number: "002",
    title: "Reels-First Content",
    description:
      "Short-form video gets prioritized in our content mix since it drives the most reach on Instagram today.",
  },
  {
    number: "003",
    title: "Performance-Tracked Ads",
    description:
      "Every rupee spent on Instagram ads is tracked and optimized for real leads, not just clicks and impressions.",
  },
  {
    number: "004",
    title: "Platform-Native Creative",
    description:
      "Content is made to look and feel native to Instagram, not repurposed filler from another channel.",
  },
  {
    number: "005",
    title: "Trend-Aware Strategy",
    description:
      "We keep pace with Instagram's format shifts so your brand stays visible as the platform evolves.",
  },
  {
    number: "006",
    title: "Prayagraj-Based, Nationally Trusted",
    description:
      "An Instagram marketing team in Prayagraj with a strong grasp of Indian audiences, serving brands across India.",
  },
];

const FAQS = [
  {
    question: "How does Instagram marketing help my business grow?",
    answer:
      "It builds brand awareness and engagement through content and reels, while targeted ads convert that attention into real leads and customers.",
  },
  {
    question: "Do you create the reels and content yourselves?",
    answer:
      "Yes, our team scripts, shoots, and edits reels and content, or works with material you provide, depending on what fits your brand best.",
  },
  {
    question: "How much do Instagram ads cost?",
    answer:
      "Ad spend is set based on your goals and budget — we recommend a starting budget and optimize it for the best return as data comes in.",
  },
  {
    question: "How long before I see growth on Instagram?",
    answer:
      "Organic growth typically builds over a few months of consistent posting, while targeted ads can drive faster, measurable results.",
  },
  {
    question: "Can you also handle influencer collaborations?",
    answer:
      "Yes, where it fits your brand, we help identify and coordinate influencer partnerships that extend your reach authentically.",
  },
];

export default function InstagramMarketingAgency() {
  return (
    <>
      <BpoHero
        heading="Instagram Marketing Agency in India"
        description="From reels to story strategy, our Instagram marketing team builds real engagement, not just likes. We create scroll-stopping content and run targeted Instagram ads that turn followers into genuine paying customers."
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
              src="/social%20phone.webp"
              alt="Instagram marketing at BizzBuzz Creations"
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
              Content That Stops the Scroll and Converts
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              From reels to story strategy, our Instagram marketing team
              builds real engagement, not just likes. We create
              scroll-stopping content and run targeted Instagram ads that
              turn followers into genuine paying customers.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a social media marketing agency based in
              Prayagraj, proudly serving businesses locally across Allahabad
              and Uttar Pradesh, as well as brands across India, growing
              Instagram presences that actually drive business.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our Instagram Marketing"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our Instagram Marketing Process"
            description="We audit what's currently working on your profile, then plan and produce content and ads built specifically for how Instagram's audience actually behaves."
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
          title="Instagram Marketing Company"
          description="BizzBuzz Creations grows Instagram presences for businesses across India through scroll-stopping content and performance-tracked ads."
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
