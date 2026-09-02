import Link from "next/link";
import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import RoadmapCarousel from "@/components/sections/roadmapCarousel";
import BpoWeAre from "@/components/sections/bpoWeAre";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import { Target, Rocket, TrendingUp, Settings, Users, MapPin } from "lucide-react";

export const metadata = {
  title: "Top Business Consulting Firm | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a business consulting firm advising on strategy, growth and operations for India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/business-consultancy",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Target,
    heading: "Business Strategy Consulting",
    description:
      "As a business strategy consulting firm, we build strategic plans you can actually execute, not a presentation that gets filed away after the meeting.",
    href: "/business-consultancy/business-strategy-consulting",
  },
  {
    icon: Rocket,
    heading: "Startup & New Business Consulting",
    description:
      "As a startup business consultant, we guide founders through validation, business planning, and early growth, not generic advice copied from a startup playbook.",
    href: "/business-consultancy/startup-new-business-consulting",
  },
  {
    icon: Settings,
    heading: "Operations & Process Consulting",
    description:
      "As an operations consulting firm, we fix the bottlenecks actually slowing your business down, redesigning processes built to scale as you grow.",
    href: "/business-consultancy/operations-process-consulting",
  },
  {
    icon: TrendingUp,
    heading: "Business Growth & Scaling Consulting",
    description:
      "As a business growth consultant, we build growth strategy that scales sustainably, planning operations and revenue together so growth doesn't outpace your team.",
    href: "/business-consultancy/business-growth-scaling-consulting",
  },
  {
    icon: MapPin,
    heading: "Local & City-Based Business Advisory",
    description:
      "As a local business advisor, we bring genuine, grounded knowledge of your specific market, not generic advice that could apply to any city anywhere.",
    href: "/business-consultancy/local-city-based-business-advisory",
  },
  {
    icon: Users,
    heading: "Business Development & Marketing Consulting",
    description:
      "As a business development consulting firm, we align sales and marketing into one connected growth strategy, not two departments working in isolation.",
    href: "/business-consultancy/business-development-marketing-consulting",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Business & Goal Discovery",
    desc: "We start by understanding your business, goals, and the specific decision or challenge you're actually facing right now.",
  },
  {
    number: "02",
    title: "Assessment & Research",
    desc: "We assess your situation honestly, grounding recommendations in real data and market research, not assumption alone.",
  },
  {
    number: "03",
    title: "Strategy Development",
    desc: "We build a plan tailored to your specific business, resources, and constraints, not a generic consulting framework.",
  },
  {
    number: "04",
    title: "Alignment & Review",
    desc: "We review the strategy with your team, ensuring genuine buy-in and understanding before execution begins.",
  },
  {
    number: "05",
    title: "Execution Support",
    desc: "We support your team through early implementation, staying involved rather than disappearing after the plan is delivered.",
  },
  {
    number: "06",
    title: "Ongoing Advisory",
    desc: "We continue as an ongoing advisor, reviewing progress and adjusting strategy as your business situation evolves.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "No Generic Playbooks",
    description:
      "As a business strategy consulting firm, every recommendation is built around your industry, your team, and your real numbers, not a template pulled off a shelf.",
  },
  {
    number: "002",
    title: "We Stay Involved",
    description:
      "From the first audit to final execution, our business consulting firm stays by your side long after the first meeting, not just handing over a strategy deck.",
  },
  {
    number: "003",
    title: "Direct & Honest",
    description:
      "As your business consultant, we're direct about what's working, honest about what isn't, and focused on outcomes you can actually measure.",
  },
  {
    number: "004",
    title: "Outcomes You Can Measure",
    description:
      "Every engagement with our business growth consultant team is focused on results you can point to, not just reports and recommendations that sit unread.",
  },
  {
    number: "005",
    title: "A Team, Not Outside Consultants",
    description:
      "Think of us less like outside consultants and more like a hired business consulting team that's genuinely invested in your growth.",
  },
  {
    number: "006",
    title: "Local Roots, India-Wide Reach",
    description:
      "Born and based in Prayagraj as a local business advisor, we understand what it takes to build a business here as well as in the metros.",
  },
];

const FAQS = [
  {
    question: "How much does business consulting cost in India?",
    answer:
      "Cost depends on scope — a focused strategic review costs less than ongoing advisory covering multiple areas of your business. We scope pricing after understanding your specific situation, rather than offering a flat rate upfront.",
  },
  {
    question: "What's the difference between a consultant and a business coach?",
    answer:
      "A consultant typically analyzes your specific business and market to develop a strategic plan, while a coach often focuses more broadly on leadership development. We combine strategic analysis with practical, ongoing support.",
  },
  {
    question: "How long does a typical consulting engagement take?",
    answer:
      "Timeline depends on scope — a focused review can take a few weeks, while ongoing advisory typically continues over several months as your business situation develops.",
  },
  {
    question: "Do you work with small businesses, or only larger companies?",
    answer:
      "We work with businesses of various sizes, scoping our approach to fit smaller businesses just as thoughtfully as larger engagements, rather than a one-size-fits-all package.",
  },
  {
    question: "Do you help with execution, or just the strategy itself?",
    answer:
      "We help with both, since a strategy that never gets executed provides little value. We build execution support directly into our engagements.",
  },
  {
    question: "Is this consulting only for established businesses, or startups too?",
    answer:
      "We work with both, covering everything from early-stage validation and business planning for startups through to growth and operations consulting for established companies.",
  },
];

export default function BusinessConsultancy() {
  return (
    <>
      <BpoHero
        heading="Business Consulting That Leads to Real Action"
        description="Business consulting built around decisions you can actually execute, not slide decks that sit unused, for businesses in Prayagraj, across India, and worldwide."
        img="/businesscons.webp"
        ctaText="Get a Free Business Consulting Session"
      />

      {/* Intro — dark section, glow accents behind the copy */}
      <section className="relative overflow-hidden bg-black py-20">

        <div className="relative flex lg:flex-row flex-col px-5 lg:gap-20 gap-10 justify-center items-center max-w-6xl mx-auto">
          <div className="relative w-full lg:w-[440px] aspect-[4/5] shrink-0 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/bc-img.png"
              alt="BizzBuzz Creations business consultants at work"
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
              Consulting Built Around Decisions, Not Just Reports
            </h2>
            <h3 className="text-base font-semibold text-[#40A2D8] mb-4">
              Who we consult for, and why decisions matter more than
              presentations.
            </h3>
            <p className="text-white/70 leading-relaxed mb-4">
              A polished strategy deck that nobody actually follows
              afterward is a common outcome of consulting done without
              real accountability. At BizzBuzz Creations, we run
              consulting judged on decisions that actually get made and
              executed, not a report that gets filed away. Whether
              you&rsquo;re a local business in Prayagraj looking for a
              business consultant near me, a founder elsewhere in India
              searching for a startup business consultant who understands
              early-stage decisions, or a company needing an operations
              consulting firm without hiring in-house, our team builds
              guidance tailored to how your business actually operates.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a full-service business consulting firm based in
              Prayagraj, proudly serving clients locally across Allahabad
              and Uttar Pradesh, nationally across India, and
              internationally across the UK, USA, and worldwide. From
              strategy and startup guidance to operations and growth
              planning, we handle the full advisory relationship so
              you&rsquo;re not coordinating five different consultants
              yourself.
            </p>
          </div>
        </div>
      </section>

      {/* "Six Ways We Help Your Business Move Forward" */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="Six Ways We Help Your Business Move Forward"
            subheading="Everything we offer, matched to the specific decision you're actually facing."
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* "How We Turn Advice Into Action" — auto-scrolling carousel
          (right-to-left, pauses on hover) instead of a static accordion,
          so the six-step process reads as motion. */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            How We Turn Advice Into Action
          </h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-14">
            Our six-step process, from understanding your business to
            ongoing advisory.
          </p>
          <RoadmapCarousel steps={PROCESS_STEPS} />
        </div>
      </section>

      <div className="bg-black px-5">
        <div className="max-w-5xl mx-auto border-t border-white" />
      </div>

      <section className="bg-black pt-20 pb-20 px-5">
        <BpoWeAre
          title="How We Work With Every Client"
          description="What actually backs every business consulting engagement, not vague promises."
          points={WE_ARE_POINTS}
        />
      </section>

      <DarkFAQSection
        faqs={FAQS}
        heading="Questions Before You Hire a Business Consultant"
        subheading="Straight answers to the questions businesses usually ask before starting."
      />

      {/* "Why Businesses Trust Our Advice, and Where We're Rooted" —
          heading on top, copy on the left, image on the right. */}
      <section className="relative overflow-hidden bg-black py-20">
        <div className="relative max-w-6xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
            Why Businesses Trust Our Advice, and Where We&rsquo;re Rooted
          </h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-12">
            What genuinely sets us apart from others, and where we&rsquo;re
            actually rooted.
          </p>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <p className="text-white/70 leading-relaxed mb-4">
                We treat every engagement as accountable to real decisions
                and outcomes, not a polished presentation that sits unused
                afterward. A well-run business consulting firm should be
                judged on advice that actually gets followed, which is
                exactly why businesses trust us as their business
                consultant of choice.
              </p>
              <p className="text-white/70 leading-relaxed">
                BizzBuzz Creations is based in Prayagraj, Uttar Pradesh — a
                city many still know as Allahabad — and that local
                grounding shapes how we approach every engagement, with
                the same standard of work whether a client is nearby or
                across the world. We advise businesses locally across
                Prayagraj and Allahabad, nationally across India, and
                internationally across the UK, USA, and worldwide, as a
                business consulting firm that understands how to build for
                real business results, not just recommendations.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/why-choose-image.png"
                alt="Why businesses trust BizzBuzz Creations' advice"
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
              Ready for Advice You&rsquo;ll Actually Use?
            </h2>
            <h3 className="text-base font-semibold text-[#40A2D8] mb-5">
              The next step, if you&rsquo;re ready to talk about what comes
              next.
            </h3>
            <p className="max-w-3xl text-white/70 mb-8">
              Whether you&rsquo;re a local business in Prayagraj, a growing
              company anywhere else in India, or a business overseas
              needing a consultant who understands both strategy and
              execution, advice is only worth what you actually do with
              it. Let&rsquo;s talk about the decision you&rsquo;re facing
              right now.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-black text-sm font-semibold px-7 py-3.5 rounded-full transition"
              >
                Get a Free Business Consulting Session
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/50 hover:bg-white/10 text-white text-sm font-semibold px-7 py-3.5 rounded-full transition"
              >
                Talk to a Business Consulting Specialist
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
