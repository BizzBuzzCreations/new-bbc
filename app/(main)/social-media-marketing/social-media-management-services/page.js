import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  CalendarDays,
  PenTool,
  MessageCircle,
  BarChart3,
  Palette,
  Clock,
} from "lucide-react";

export const metadata = {
  title: "Social Media Management Services | BizzBuzz Creations",
  description:
    "Social media management services in India — daily posting, content calendars, and audience engagement handled end-to-end by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/social-media-marketing/social-media-management-services",
  },
};

const SERVICE_ITEMS = [
  {
    icon: CalendarDays,
    heading: "Content Calendar Planning",
    description:
      "We plan posts around your brand's key dates, campaigns, and audience activity, so content goes out with purpose, not at random.",
  },
  {
    icon: PenTool,
    heading: "Daily Posting & Content Creation",
    description:
      "From captions to visuals, we handle the day-to-day content production and posting so your profiles stay active and on-brand.",
  },
  {
    icon: MessageCircle,
    heading: "Community & Audience Engagement",
    description:
      "Comments, DMs, and mentions get responded to promptly and on-brand, turning casual followers into an engaged community.",
  },
  {
    icon: Palette,
    heading: "Brand Consistency Across Platforms",
    description:
      "Visual style, tone, and messaging stay consistent across Instagram, Facebook, and LinkedIn, so your brand feels like one voice everywhere.",
  },
  {
    icon: BarChart3,
    heading: "Performance Reporting",
    description:
      "Regular reports show what's actually working — reach, engagement, and follower growth — not just vanity numbers.",
  },
  {
    icon: Clock,
    heading: "Consistent Posting Schedule",
    description:
      "We keep your profiles active on a reliable schedule, so momentum doesn't stall between campaigns or busy periods.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Brand & Audience Discovery",
    body: "We learn your brand's story, tone, and audience before planning a single post, so the content actually fits who you are.",
  },
  {
    title: "Content Calendar Build",
    body: "We map out a month-by-month content calendar aligned to your goals, key dates, and platform mix.",
  },
  {
    title: "Daily Management & Engagement",
    body: "Posts go out on schedule while we actively manage comments, DMs, and community engagement in your brand voice.",
  },
  {
    title: "Reporting & Refinement",
    body: "We review performance regularly and adjust content types and timing based on what's genuinely resonating.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Consistent, On-Brand Presence",
    description:
      "Your profiles stay active and cohesive across platforms, professional and on-brand at all times.",
  },
  {
    number: "002",
    title: "No One-Size-Fits-All Packages",
    description:
      "Every content calendar is shaped around your specific brand, audience, and goals, not a generic template.",
  },
  {
    number: "003",
    title: "Real Community Engagement",
    description:
      "We treat comments and DMs as real conversations, not a box to tick, building genuine follower relationships.",
  },
  {
    number: "004",
    title: "AI-Backed Planning",
    description:
      "AI marketing tools help plan smarter content and predict trends early, paired with human judgment on tone and creative calls.",
  },
  {
    number: "005",
    title: "Transparent Reporting",
    description:
      "You get regular, honest reports on reach and engagement, not just a vague monthly summary.",
  },
  {
    number: "006",
    title: "Prayagraj-Based, Nationally Trusted",
    description:
      "A social media team in Prayagraj with a strong grasp of Indian audiences, serving brands across India.",
  },
];

const FAQS = [
  {
    question: "What's included in social media management services?",
    answer:
      "Content calendar planning, daily posting, community engagement, and performance reporting across your chosen social platforms.",
  },
  {
    question: "Which platforms do you manage?",
    answer:
      "We typically manage Instagram, Facebook, and LinkedIn, and can tailor the mix to whichever platforms matter most for your business.",
  },
  {
    question: "How often will you post on our profiles?",
    answer:
      "Posting frequency is planned around your brand and goals — we'll recommend a realistic, sustainable schedule during onboarding.",
  },
  {
    question: "Do you also handle comments and messages?",
    answer:
      "Yes, community engagement — responding to comments and DMs in your brand voice — is part of our management service.",
  },
  {
    question: "How much do social media management services cost?",
    answer:
      "Pricing depends on platform count, posting frequency, and content complexity — we'll give you a clear, tailored quote.",
  },
];

export default function SocialMediaManagementServices() {
  return (
    <>
      <BpoHero
        heading="Social Media Management Services in India"
        description="We handle your daily posting, content calendar, and audience engagement so your brand stays active and consistent — professional, on-brand, and always ready to convert visitors into loyal followers."
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
              src="/smm-img.png"
              alt="Social media management at BizzBuzz Creations"
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
              Consistent, On-Brand Profiles Without the Daily Grind
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              We handle your daily posting, content calendar, and audience
              engagement so your brand stays active and consistent —
              professional, on-brand, and always ready to convert visitors
              into loyal followers.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a social media marketing agency based in
              Prayagraj, proudly serving businesses locally across Allahabad
              and Uttar Pradesh, as well as brands across India, keeping
              your presence active without you lifting a finger.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our Social Media Management"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our Social Media Management Process"
            description="We learn your brand and audience first, then build a content calendar and manage it day-to-day so your profiles stay active and consistent."
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
          title="Social Media Management Company"
          description="BizzBuzz Creations manages social media profiles for businesses across India, keeping content consistent, on-brand, and genuinely engaging."
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
