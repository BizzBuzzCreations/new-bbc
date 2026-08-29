import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  Video,
  Film,
  Scissors,
  TrendingUp,
  BarChart3,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Reels & Short Video Marketing Services | BizzBuzz Creations",
  description:
    "Reels and short video marketing in India — scripted, shot, and edited scroll-stopping reels that bring your brand in front of new audiences daily, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/social-media-marketing/reels-short-video-marketing",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Film,
    heading: "Reel Scripting & Concepting",
    description:
      "We script reel concepts around your brand and what's actually resonating in short-form video right now, not random trend-chasing.",
  },
  {
    icon: Video,
    heading: "Shooting & Production",
    description:
      "Our team handles the shoot, whether on location or in-studio, capturing content built specifically for vertical, short-form formats.",
  },
  {
    icon: Scissors,
    heading: "Editing & Post-Production",
    description:
      "Fast-paced editing, captions, and sound design get applied to keep viewers watching until the end, not scrolling past in seconds.",
  },
  {
    icon: TrendingUp,
    heading: "Trend & Audio Tracking",
    description:
      "We track trending audio and formats across platforms and adapt them to fit your brand authentically, not force-fit irrelevant trends.",
  },
  {
    icon: Sparkles,
    heading: "Multi-Platform Distribution",
    description:
      "Reels get formatted and distributed across Instagram, Facebook, and other short-form platforms to maximize reach from one shoot.",
  },
  {
    icon: BarChart3,
    heading: "Reach & Engagement Tracking",
    description:
      "We track views, completion rate, and engagement to see which reel styles are actually bringing in new audiences.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Concept & Script Development",
    body: "We develop reel concepts and scripts aligned with your brand voice and what's genuinely performing in short-form video right now.",
  },
  {
    title: "Shoot & Production",
    body: "Our team shoots content built specifically for vertical, short-form formats, whether on location or in-studio.",
  },
  {
    title: "Editing & Publishing",
    body: "Reels are edited with fast pacing, captions, and sound design, then published and distributed across relevant platforms.",
  },
  {
    title: "Track & Refine",
    body: "We track views, completion rate, and engagement, refining future reel concepts based on what's actually working.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Built for Short-Form First",
    description:
      "Content is scripted and shot specifically for vertical, short-form video, not repurposed from other formats.",
  },
  {
    number: "002",
    title: "Trend-Aware, Brand-Authentic",
    description:
      "We adapt trending formats to fit your brand genuinely, instead of force-fitting irrelevant trends.",
  },
  {
    number: "003",
    title: "Full Production Handled",
    description:
      "From scripting to shooting to editing, the entire reel production process runs under one roof.",
  },
  {
    number: "004",
    title: "Reach-Driven Strategy",
    description:
      "Short-form video drives the most reach in 2026 — our strategy is built around getting your brand in front of new audiences daily.",
  },
  {
    number: "005",
    title: "Performance Tracked",
    description:
      "We measure views, completion rate, and engagement to double down on the reel styles genuinely working for your brand.",
  },
  {
    number: "006",
    title: "Prayagraj-Based, Nationally Trusted",
    description:
      "A reels and video production team in Prayagraj with a strong grasp of Indian audiences, serving brands across India.",
  },
];

const FAQS = [
  {
    question: "Do I need to provide footage, or do you shoot everything?",
    answer:
      "Our team can handle the full shoot, whether on location or in-studio, or work with footage you already have — whichever fits your setup better.",
  },
  {
    question: "How many reels do you produce per month?",
    answer:
      "Volume depends on your plan and goals — we'll recommend a realistic, sustainable production schedule during onboarding.",
  },
  {
    question: "Do reels work for every kind of business?",
    answer:
      "Most businesses can benefit from short-form video, though the content style and platform focus will vary based on your industry and audience.",
  },
  {
    question: "How do you decide which trends to use?",
    answer:
      "We track trending audio and formats, then adapt only the ones that genuinely fit your brand voice, rather than chasing every trend.",
  },
  {
    question: "How is reels marketing priced?",
    answer:
      "Pricing depends on production volume and complexity — we'll give you a clear, tailored quote based on what you need.",
  },
];

export default function ReelsShortVideoMarketing() {
  return (
    <>
      <BpoHero
        heading="Reels & Short Video Marketing Services in India"
        description="Short-form video drives the most reach in 2026. Our reels and video marketing team scripts, shoots, and edits scroll-stopping reels that bring your brand in front of new audiences daily."
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
              src="/socialmedia.jpg"
              alt="Reels and short video marketing at BizzBuzz Creations"
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
              Scroll-Stopping Video That Reaches New Audiences
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Short-form video drives the most reach in 2026. Our reels and
              video marketing team scripts, shoots, and edits
              scroll-stopping reels that bring your brand in front of new
              audiences daily.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a social media marketing agency based in
              Prayagraj, proudly serving businesses locally across Allahabad
              and Uttar Pradesh, as well as brands across India, producing
              video content built for how people actually scroll.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our Reels & Video Marketing"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our Reels & Video Marketing Process"
            description="We script and shoot content built specifically for short-form video, then edit and track performance to keep improving reach and engagement."
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
          title="Reels & Short Video Marketing Company"
          description="BizzBuzz Creations produces scroll-stopping reels and short-form video for brands across India, built to reach new audiences daily."
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
