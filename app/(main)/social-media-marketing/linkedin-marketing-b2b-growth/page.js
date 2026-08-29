import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  Linkedin,
  Briefcase,
  Users,
  PenTool,
  Target,
  BarChart3,
} from "lucide-react";

export const metadata = {
  title: "LinkedIn Marketing for B2B Growth | BizzBuzz Creations",
  description:
    "LinkedIn marketing for B2B growth in India — connect with decision-makers, build industry authority, and turn LinkedIn into a steady lead source, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/social-media-marketing/linkedin-marketing-b2b-growth",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Briefcase,
    heading: "Company Page Optimization",
    description:
      "We optimize your LinkedIn company page to clearly communicate what you do and why decision-makers should pay attention.",
  },
  {
    icon: PenTool,
    heading: "Thought Leadership Content",
    description:
      "We plan and write posts that position your leadership as genuine experts in your industry, not generic corporate updates.",
  },
  {
    icon: Users,
    heading: "Decision-Maker Targeting",
    description:
      "Content and outreach are aimed at the specific job titles and industries most likely to become real B2B customers.",
  },
  {
    icon: Target,
    heading: "LinkedIn Ads for Lead Generation",
    description:
      "We run LinkedIn ad campaigns built specifically for B2B lead generation, tracked against real pipeline impact.",
  },
  {
    icon: Linkedin,
    heading: "Employee Advocacy & Networking",
    description:
      "We help your team extend organic reach by sharing and engaging with company content on their own profiles.",
  },
  {
    icon: BarChart3,
    heading: "Pipeline & Lead Tracking",
    description:
      "We measure actual leads and connections generated, not just impressions, so LinkedIn's ROI is clear to you.",
  },
];

const PROCESS_STEPS = [
  {
    title: "B2B Audience & Goal Mapping",
    body: "We identify the exact decision-makers and industries you want to reach before planning a single post or ad.",
  },
  {
    title: "Profile & Content Strategy",
    body: "We optimize your company page and plan thought leadership content that builds credibility with your target audience.",
  },
  {
    title: "Content & Ad Launch",
    body: "Posts and LinkedIn ad campaigns go live together, aimed at generating genuine B2B leads, not just visibility.",
  },
  {
    title: "Track Pipeline & Refine",
    body: "We track leads and connections generated, refining targeting and content based on what's actually building pipeline.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Built for B2B Lead Generation",
    description:
      "Every strategy is designed around generating real business leads, not just LinkedIn engagement for its own sake.",
  },
  {
    number: "002",
    title: "Decision-Maker Focused",
    description:
      "Content and targeting are aimed at the specific roles and industries that actually make purchasing decisions.",
  },
  {
    number: "003",
    title: "Thought Leadership Positioning",
    description:
      "We help build genuine authority for your leadership team, which drives trust with B2B buyers.",
  },
  {
    number: "004",
    title: "Pipeline-Tracked Results",
    description:
      "We measure leads and connections generated, giving you a clear picture of LinkedIn's business impact.",
  },
  {
    number: "005",
    title: "Coordinated Organic & Paid",
    description:
      "Organic content and LinkedIn ads work together as one strategy, not disconnected efforts.",
  },
  {
    number: "006",
    title: "Prayagraj-Based, Nationally Trusted",
    description:
      "A LinkedIn marketing team in Prayagraj with a strong grasp of Indian B2B audiences, serving brands across India.",
  },
];

const FAQS = [
  {
    question: "Is LinkedIn marketing worth it for B2B businesses?",
    answer:
      "Yes, LinkedIn is one of the most effective platforms for reaching decision-makers directly, especially for B2B lead generation and industry authority building.",
  },
  {
    question: "How is LinkedIn marketing different from Instagram or Facebook?",
    answer:
      "LinkedIn content and targeting focus on professional decision-makers and B2B relationships, while Instagram and Facebook typically suit broader consumer engagement.",
  },
  {
    question: "Do you run LinkedIn ads as well as organic content?",
    answer:
      "Yes, we combine organic thought leadership content with targeted LinkedIn ad campaigns for a coordinated lead generation strategy.",
  },
  {
    question: "How long does it take to see B2B leads from LinkedIn?",
    answer:
      "Ads can generate initial leads within weeks, while organic thought leadership and authority-building typically takes a few months to compound.",
  },
  {
    question: "Can you help our leadership team build a personal presence too?",
    answer:
      "Yes, we can plan thought leadership content for founders or executives alongside your company page strategy.",
  },
];

export default function LinkedinMarketingB2bGrowth() {
  return (
    <>
      <BpoHero
        heading="LinkedIn Marketing for B2B Growth in India"
        description="Our LinkedIn marketing strategy is built for B2B lead generation. We help you connect with decision-makers, build authority in your industry, and turn LinkedIn into a steady source of business leads."
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
              src="/smm2%20(1).webp"
              alt="LinkedIn marketing for B2B growth at BizzBuzz Creations"
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
              Turn LinkedIn Into a Steady B2B Lead Source
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Our LinkedIn marketing strategy is built for B2B lead
              generation. We help you connect with decision-makers, build
              authority in your industry, and turn LinkedIn into a steady
              source of business leads.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a social media marketing agency based in
              Prayagraj, proudly serving businesses locally across Allahabad
              and Uttar Pradesh, as well as B2B brands across India, growing
              pipelines through smarter LinkedIn strategy.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our LinkedIn Marketing"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our LinkedIn Marketing Process"
            description="We map your target decision-makers first, then build content and ad campaigns designed specifically to turn LinkedIn connections into real B2B leads."
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
          title="LinkedIn Marketing Company"
          description="BizzBuzz Creations builds LinkedIn strategies for B2B businesses across India, turning industry authority and decision-maker connections into a real pipeline."
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
