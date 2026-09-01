import Link from "next/link";
import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import RoadmapCarousel from "@/components/sections/roadmapCarousel";
import BpoWeAre from "@/components/sections/bpoWeAre";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import { TrendingUp, Camera, Users, Linkedin, Sparkles, Video } from "lucide-react";

export const metadata = {
  title: "Top Social Media Marketing Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a social media marketing agency managing strategy, ads, and content for businesses in India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/social-media-marketing",
  },
};

const SERVICE_ITEMS = [
  {
    icon: TrendingUp,
    heading: "Social Media Management Service",
    description:
      "As a full-service social media management company, we plan, create, and post content consistently across your platforms, so your brand stays active and on-brand without demanding your daily attention.",
    href: "/social-media-marketing/social-media-management-services",
  },
  {
    icon: Camera,
    heading: "Instagram Marketing Agency",
    description:
      "As an Instagram marketing agency, we grow real followers and engagement through strategy, Reels, and ads, not just vanity numbers, matched to what your specific audience actually responds to.",
    href: "/social-media-marketing/instagram-marketing-agency",
  },
  {
    icon: Users,
    heading: "Facebook & Meta Ads Agency",
    description:
      "As a Meta ads agency, we run Facebook and Instagram ad campaigns tracked on ROAS, not just reach, built to turn ad spend into genuine leads and sales for your business.",
    href: "/social-media-marketing/facebook-meta-ads-agency",
  },
  {
    icon: Linkedin,
    heading: "LinkedIn Marketing for B2B Growth",
    description:
      "As a LinkedIn marketing agency, we build B2B content, outreach, and ads that reach real decision-makers, positioning your company as a category authority buyers actually trust before they ever call.",
    href: "/social-media-marketing/linkedin-marketing-b2b-growth",
  },
  {
    icon: Sparkles,
    heading: "AI Social Media Marketing",
    description:
      "As an AI social media marketing agency, we combine automation with human oversight, producing content faster without losing your brand voice or sacrificing the quality control your brand needs.",
    href: "/social-media-marketing/ai-social-media-marketing",
  },
  {
    icon: Video,
    heading: "Reels & Short Video Marketing",
    description:
      "As a Reels marketing agency, we script, film, and edit short-form video built to stop the scroll and actually drive engagement, not just views that go nowhere afterward.",
    href: "/social-media-marketing/reels-short-video-marketing",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Brand & Audience Discovery",
    desc: "We start by understanding your brand, audience, and current social media performance, identifying what's actually working and where the real growth opportunity is.",
  },
  {
    number: "02",
    title: "Platform & Content Strategy",
    desc: "We decide which platforms genuinely matter for your audience and build a content strategy covering pillars, formats, and posting cadence around that.",
  },
  {
    number: "03",
    title: "Content & Campaign Creation",
    desc: "We produce content, ad creative, and Reels according to the strategy, keeping quality consistent across every platform we manage for you.",
  },
  {
    number: "04",
    title: "Posting, Ads & Community Management",
    desc: "We publish content on schedule, run any agreed ad campaigns, and manage community engagement as comments and messages come in daily.",
  },
  {
    number: "05",
    title: "Performance Tracking",
    desc: "We track growth, engagement, and conversion metrics against your goals, reporting clearly on what's actually happening across every channel.",
  },
  {
    number: "06",
    title: "Ongoing Optimization & Scaling",
    desc: "We refine strategy based on real performance data, scaling what's working and adjusting content and campaigns that aren't landing.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Platform-Specific Strategy",
    description:
      "Instagram, Facebook, and LinkedIn each get their own strategy — we don't run the same content everywhere and call it a campaign.",
  },
  {
    number: "002",
    title: "AI-Backed Campaign Planning",
    description:
      "AI marketing tools help us plan smarter content and predict trends early, paired with human strategy for judgment calls.",
  },
  {
    number: "003",
    title: "Local Roots, National Reach",
    description:
      "Being based in Prayagraj means we understand Indian audiences closely, while our strategies scale brands nationally too.",
  },
  {
    number: "004",
    title: "No Copy-Paste Templates",
    description:
      "Every campaign is shaped around your audience, budget, and goals — not a bloated, generic package.",
  },
  {
    number: "005",
    title: "Full-Funnel Content",
    description:
      "From daily social media management to reels production and paid ads, everything runs under one roof, one coordinated strategy.",
  },
  {
    number: "006",
    title: "Real Engagement Over Vanity Metrics",
    description:
      "We combine creative content, sharp ad targeting, and AI-backed strategy to get you real results, not just likes and impressions.",
  },
];

const FAQS = [
  {
    question: "How much does social media marketing cost in India?",
    answer:
      "Cost depends on scope, platforms managed, content volume, and whether paid ads are included alongside organic management. We scope pricing after understanding your specific goals and current presence, rather than offering a flat rate that doesn't reflect what your brand actually needs.",
  },
  {
    question:
      "What's the difference between social media management and social media marketing?",
    answer:
      "Social media management typically covers day-to-day content, posting, and community engagement, while social media marketing is the broader strategy — including paid ads, growth planning, and campaigns designed to hit specific business goals. Most brands need both working together, which is why we offer them as one connected service.",
  },
  {
    question: "Do you handle both organic content and paid ads together?",
    answer:
      "Yes, managing organic content and paid advertising together is a core part of our approach, since both channels perform better when coordinated under one strategy rather than run separately by disconnected teams with no shared plan.",
  },
  {
    question: "How long before we see real results from social media marketing?",
    answer:
      "Timeline depends on your starting point and goals — organic growth typically builds over a few months of consistent effort, while paid ads can show initial results within weeks. We set realistic expectations during your first strategy conversation based on your specific industry.",
  },
  {
    question:
      "Can you manage multiple platforms (Instagram, Facebook, LinkedIn) at once?",
    answer:
      "Yes, managing multiple platforms together through one coordinated team is a core part of what we do, keeping your brand voice and messaging consistent everywhere instead of fragmenting across separate people or agencies for each platform.",
  },
  {
    question:
      "Do we need a dedicated social media manager, or can an agency handle everything?",
    answer:
      "Most businesses find an agency more cost-effective than a full-time hire, since you get a full team — strategist, content creator, ads specialist — rather than one person handling every responsibility alone. We scope our involvement to match exactly what your brand needs.",
  },
];

export default function SocialMediaMarketing() {
  return (
    <>
      <BpoHero
        heading="Social Media Marketing That Goes Beyond Posting"
        description="Social media marketing is built to grow real engagement and sales for businesses in Prayagraj, across India and worldwide, not just follower counts."
        img="/socialmedia 02.jpg"
        ctaText="Get a Free Social Media Audit"
      />

      {/* Intro — dark section, glow accents behind the copy */}
      <section className="relative overflow-hidden bg-black py-20">

        <div className="relative flex lg:flex-row flex-col px-5 lg:gap-20 gap-10 justify-center items-center max-w-6xl mx-auto">
          <div className="relative w-full lg:w-[440px] aspect-[4/5] shrink-0 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/smm1 (1).webp"
              alt="BizzBuzz Creations social media team at work"
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
              Social Media Marketing Built Around Real Growth, Not Just Posts
            </h2>
            <h3 className="text-base font-semibold text-[#40A2D8] mb-4">
              Who we build social media marketing for, and why it goes
              beyond posting.
            </h3>
            <p className="text-white/70 leading-relaxed mb-4">
              Posting consistently isn&rsquo;t the same as growing, and most
              businesses have learned that the hard way after months of
              content with little to show for it. At BizzBuzz Creations, we
              run social media marketing that&rsquo;s judged on followers
              who actually engage, leads that actually convert, and sales
              that actually happen — not just a full content calendar.
              Whether you&rsquo;re a local business in Prayagraj or
              Allahabad looking for a social media marketing agency near
              me, a brand elsewhere in India searching for a social media
              marketing company that understands your specific audience,
              or a business needing full social media management without
              hiring an in-house team, our team builds strategy-led
              marketing tailored to how your business actually grows.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a full-service social media marketing agency
              based in Prayagraj, proudly serving clients locally across
              Allahabad and Uttar Pradesh, nationally across India, and
              internationally across the UK, USA, and worldwide. From
              strategy and content to paid ads and reporting, we handle the
              full social media marketing plan so you don&rsquo;t have to
              coordinate five different specialists yourself.
            </p>
          </div>
        </div>
      </section>

      {/* "Six Ways We Grow Your Social Media Presence" */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="Six Ways We Grow Your Social Media Presence"
            subheading="Everything we offer, matched to what your specific brand actually needs to grow."
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* "How We Turn a Content Calendar Into Real Growth" — auto-
          scrolling carousel (right-to-left, pauses on hover) instead of a
          static accordion, so the six-step process reads as motion. */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            How We Turn a Content Calendar Into Real Growth
          </h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-14">
            Our six-step process, from understanding your brand to ongoing
            scaling.
          </p>
          <RoadmapCarousel steps={PROCESS_STEPS} />
        </div>
      </section>

      <div className="bg-black px-5">
        <div className="max-w-5xl mx-auto border-t border-white" />
      </div>

      {/* "Social Media Marketing Agency" */}
      <section className="bg-black pt-20 pb-20 px-5">
        <BpoWeAre
          title="Social Media Marketing Agency"
          description="BizzBuzz Creations is a social media marketing agency based in Prayagraj, helping brands across India grow through Instagram, Facebook, LinkedIn, and AI-powered strategy. Being rooted locally gives us a strong understanding of Indian audiences, while our approach scales brands nationally."
          points={WE_ARE_POINTS}
        />
      </section>

      <DarkFAQSection faqs={FAQS} heading="Frequently Asked Questions" />

      {/* "Why Brands Choose Us, and Where We're Rooted" — heading on top,
          copy on the left, image on the right. */}
      <section className="relative overflow-hidden bg-black py-20">
        <div className="relative max-w-6xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
            Why Brands Choose Us, and Where We&rsquo;re Rooted
          </h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-12">
            What genuinely sets us apart from others and where we&rsquo;re
            actually rooted.
          </p>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <p className="text-white/70 leading-relaxed mb-4">
                We treat every post and campaign as part of a larger
                strategy toward real growth, not consistent posting for its
                own sake. A well-run social media marketing agency should
                be judged on engagement that actually converts and ad spend
                that actually pays off, not just a busy content calendar,
                which is exactly why brands trust us as their social media
                marketing company of choice.
              </p>
              <p className="text-white/70 leading-relaxed">
                BizzBuzz Creations is based in Prayagraj, Uttar Pradesh — a
                city many still know as Allahabad — and that local
                grounding shapes how we approach every social media
                account, with the same standard of work whether a client is
                nearby or across the world. We manage social media locally
                across Prayagraj and Allahabad, nationally across India,
                and internationally across the UK, USA, and worldwide, as a
                social media marketing agency that understands how to
                build for real business results, not just a working feed.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/why-choose-image.png"
                alt="Why brands choose BizzBuzz Creations"
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
              Ready for Social Media That Actually Grows Your Business?
            </h2>
            <h3 className="text-base font-semibold text-[#40A2D8] mb-5">
              The next step is if you&rsquo;re ready to talk about what
              comes next.
            </h3>
            <p className="max-w-3xl text-white/70 mb-8">
              Whether you&rsquo;re a local business in Prayagraj, a growing
              brand anywhere else in India, or a business overseas needing
              a team that understands both content and results, social
              media is only worth what it actually does for you.
              Let&rsquo;s talk about what your social media should be
              doing for your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-black text-sm font-semibold px-7 py-3.5 rounded-full transition"
              >
                Get a Free Social Media Audit
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/50 hover:bg-white/10 text-white text-sm font-semibold px-7 py-3.5 rounded-full transition"
              >
                Talk to a Social Media Marketing Specialist
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
