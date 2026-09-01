import Link from "next/link";
import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import RoadmapCarousel from "@/components/sections/roadmapCarousel";
import BpoWeAre from "@/components/sections/bpoWeAre";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import { Target, MessageCircle, TrendingUp, Users, ShoppingCart, MapPin } from "lucide-react";

export const metadata = {
  title: "Top Paid Marketing Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a paid marketing agency running Google, Meta, and e-commerce ad campaigns for India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/paid-marketing",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Target,
    heading: "Google & Search Ads Management",
    description:
      "As a google ads management company, we run search and Shopping campaigns tracked on cost-per-result, not just clicks, keeping your budget focused on searches that actually convert.",
    href: "/paid-marketing/google-search-ads-management",
  },
  {
    icon: MessageCircle,
    heading: "Meta & Social Ads Management",
    description:
      "As a social media ads management agency, we run Facebook, Instagram, and TikTok campaigns tracked on ROAS, not just reach, built to turn ad spend into genuine sales.",
    href: "/paid-marketing/meta-social-ads-management",
  },
  {
    icon: TrendingUp,
    heading: "Performance & ROI Campaigns",
    description:
      "As a performance marketing agency, we manage every channel toward measurable ROI, connecting ads, landing pages, and conversion tracking into one accountable system.",
    href: "/paid-marketing/performance-marketing-roi-campaigns",
  },
  {
    icon: Users,
    heading: "Lead Generation Campaigns",
    description:
      "As a lead generation agency, we build funnels that deliver genuinely qualified leads, not just cheap form fills that waste your sales team's time following up.",
    href: "/paid-marketing/lead-generation-campaigns",
  },
  {
    icon: ShoppingCart,
    heading: "E-commerce & Retargeting Ads",
    description:
      "As an ecommerce ads agency, we run Shopping, social, and dynamic retargeting campaigns built to recover abandoned carts and turn browsers into buyers.",
    href: "/paid-marketing/ecommerce-retargeting-ads",
  },
  {
    icon: MapPin,
    heading: "Local & City-Based Ad Campaigns",
    description:
      "As a local ppc advertising agency, we target ready-to-buy customers in your exact service area, not a broad, wasteful audience spread across an entire region.",
    href: "/paid-marketing/local-city-based-ad-campaigns",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Business & Account Discovery",
    desc: "We start by understanding your business goals and auditing any existing ad accounts, identifying where budget is currently being wasted.",
  },
  {
    number: "02",
    title: "Audience & Channel Strategy",
    desc: "We define target audiences and identify which channels genuinely make sense for your specific business and budget.",
  },
  {
    number: "03",
    title: "Campaign & Creative Development",
    desc: "We build campaigns, ad creative, and landing page alignment according to the strategy, with accurate tracking from day one.",
  },
  {
    number: "04",
    title: "Launch & Initial Testing",
    desc: "Campaigns launch with A/B testing built in, comparing creative and targeting to identify what's actually resonating early.",
  },
  {
    number: "05",
    title: "Optimization & Scaling",
    desc: "We optimize based on real performance data, reallocating budget toward what's delivering the strongest return.",
  },
  {
    number: "06",
    title: "Ongoing Reporting & Refinement",
    desc: "We provide regular reporting on ROI and cost-per-result, continuing to refine campaigns as they mature.",
  },
];

// "Paid Marketing Agency" section — left untouched by request, same
// content and same position (between the process carousel and the FAQ)
// as before.
const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Performance-First Campaigns",
    description:
      "Every campaign we run is tracked against one metric that matters: return on investment — no vanity numbers, no fluff.",
  },
  {
    number: "002",
    title: "Industry-Tailored Strategy",
    description:
      "We don't believe in one-size-fits-all packages — every campaign is built around your industry, your customers, and your goals.",
  },
  {
    number: "003",
    title: "Transparent Numbers",
    description:
      "We're honest about what's working and what isn't, obsessed with getting you a better cost per lead every month.",
  },
  {
    number: "004",
    title: "Daily Optimization",
    description:
      "From strategy to daily optimisation, we handle it all — campaigns don't sit untouched between monthly check-ins.",
  },
  {
    number: "005",
    title: "Full-Funnel Ad Management",
    description:
      "Google, Meta, e-commerce retargeting, and hyper-local campaigns, all run from strategy through execution under one roof.",
  },
  {
    number: "006",
    title: "A Team, Not a Vendor",
    description:
      "Think of us less like a vendor and more like a hired paid marketing team sitting inside your business, pushing for growth every day.",
  },
];

const FAQS = [
  {
    question: "How much does paid marketing cost in India?",
    answer:
      "Cost typically includes both our management fee and your ad spend budget, kept separate. We scope management pricing after understanding your goals and channels, rather than offering a flat rate that doesn't reflect what your campaigns actually need.",
  },
  {
    question: "Which platform is right for my business — Google, Meta, or both?",
    answer:
      "It depends on where your specific customers actually search and browse, which we assess during strategy planning. Many businesses benefit from running both together rather than committing to just one channel.",
  },
  {
    question: "What's a good ROAS or cost-per-lead to expect?",
    answer:
      "Benchmarks vary significantly by industry and margin — there's no universal number that applies to every business. We help establish a realistic target based on your specific numbers, then optimize campaigns toward that goal.",
  },
  {
    question: "How long before paid marketing starts showing results?",
    answer:
      "Initial data usually comes in within one to two weeks, though meaningful optimization typically takes four to six weeks as campaigns gather enough data to perform efficiently.",
  },
  {
    question: "Can you manage ecommerce ads and lead generation together?",
    answer:
      "Yes, we run both ecommerce campaigns tracked on ROAS and lead generation campaigns tracked on cost-per-qualified-lead, since the strategy differs between the two but often needs to work together.",
  },
  {
    question: "Can you fix a paid ad account that isn't converting?",
    answer:
      "Yes, auditing and rebuilding underperforming accounts is a core part of what we do, reviewing targeting, creative, and tracking to find what's actually causing poor performance.",
  },
];

export default function PaidMarketing() {
  return (
    <>
      <BpoHero
        heading="Paid Marketing Built to Pay You Back"
        description="Paid marketing campaigns built to turn ad spend into real leads and sales for businesses in Prayagraj, across India and worldwide, not just clicks."
        img="/ads.webp"
        ctaText="Get a Free Paid Marketing Audit"
      />

      {/* Intro — dark section, glow accents behind the copy */}
      <section className="relative overflow-hidden bg-black py-20">

        <div className="relative flex lg:flex-row flex-col px-5 lg:gap-20 gap-10 justify-center items-center max-w-6xl mx-auto">
          <div className="relative w-full lg:w-[440px] aspect-[4/5] shrink-0 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/meta ads.webp"
              alt="BizzBuzz Creations paid ads team at work"
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
              Paid Marketing Built Around ROI, Not Just Reach
            </h2>
            <h3 className="text-base font-semibold text-[#40A2D8] mb-4">
              Who we run paid marketing for, and why reaching alone isn&rsquo;t
              the goal.
            </h3>
            <p className="text-white/70 leading-relaxed mb-4">
              Ad spend that generates clicks without generating sales is a
              common outcome of campaigns run without real strategy behind
              them. At BizzBuzz Creations, we run paid marketing judged on
              leads and sales it actually produces, not vanity metrics like
              reach or impressions. Whether you&rsquo;re a local business
              in Prayagraj looking for a ppc management company near me, a
              brand elsewhere in India searching for a digital advertising
              agency that understands your specific margins, or a business
              needing a performance marketing agency without hiring an
              in-house team, our team builds campaigns tailored to how your
              business actually converts customers.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a full-service paid marketing agency based in
              Prayagraj, proudly serving clients locally across Allahabad
              and Uttar Pradesh, nationally across India, and
              internationally across the UK, USA, and worldwide. From
              Google and Meta ads to ecommerce retargeting and local
              campaigns, we handle the full paid media stack so
              you&rsquo;re not coordinating five different specialists
              yourself.
            </p>
          </div>
        </div>
      </section>

      {/* "Six Ways We Turn Ad Spend Into Sales" */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="Six Ways We Turn Ad Spend Into Sales"
            subheading="Everything we offer, matched to what actually drives your specific business."
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* "How We Turn Ad Budget Into Real Customers" — auto-scrolling
          carousel (right-to-left, pauses on hover) instead of a static
          accordion, so the six-step process reads as motion. */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            How We Turn Ad Budget Into Real Customers
          </h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-14">
            Our six-step process, from account discovery to ongoing
            scaling.
          </p>
          <RoadmapCarousel steps={PROCESS_STEPS} />
        </div>
      </section>

      <div className="bg-black px-5">
        <div className="max-w-5xl mx-auto border-t border-white" />
      </div>

      {/* "Paid Marketing Agency" — left untouched by request. */}
      <section className="bg-black pt-20 pb-20 px-5">
        <BpoWeAre
          title="Paid Marketing Agency"
          description="BizzBuzz Creations is a paid marketing agency based in Prayagraj, built for businesses done experimenting and ready to invest in results. As an established online advertising partner, we run Google Ads, Meta Ads, and performance campaigns for brands across India."
          points={WE_ARE_POINTS}
        />
      </section>

      <DarkFAQSection faqs={FAQS} heading="Frequently Asked Questions" />

      {/* "Why Businesses Trust Us With Their Ad Spend, and Where We're
          Rooted" — heading on top, copy on the left, image on the right. */}
      <section className="relative overflow-hidden bg-black py-20">
        <div className="relative max-w-6xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
            Why Businesses Trust Us With Their Ad Spend, and Where
            We&rsquo;re Rooted
          </h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-12">
            What genuinely sets us apart from others, and where we&rsquo;re
            actually rooted.
          </p>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <p className="text-white/70 leading-relaxed mb-4">
                We treat every campaign as accountable to real business
                outcomes, not just impressions or clicks that look busy in
                a dashboard. A well-run paid marketing agency should be
                judged on cost-per-result and actual ROI, not vanity
                metrics, which is exactly why businesses trust us as their
                performance marketing agency of choice.
              </p>
              <p className="text-white/70 leading-relaxed">
                BizzBuzz Creations is based in Prayagraj, Uttar Pradesh — a
                city many still know as Allahabad — and that local
                grounding shapes how we approach every ad account, with
                the same standard of work whether a client is nearby or
                across the world. We manage paid marketing locally across
                Prayagraj and Allahabad, nationally across India, and
                internationally across the UK, USA, and worldwide, as a
                paid marketing agency that understands how to build for
                real business results, not just impressions.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/why-choose-image.png"
                alt="Why businesses trust BizzBuzz Creations with their ad spend"
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
              Ready for Ad Spend That Actually Pays Off?
            </h2>
            <h3 className="text-base font-semibold text-[#40A2D8] mb-5">
              The next step, if you&rsquo;re ready to talk about what comes
              next.
            </h3>
            <p className="max-w-3xl text-white/70 mb-8">
              Whether you&rsquo;re a local business in Prayagraj, a growing
              brand anywhere else in India, or a business overseas needing
              a team that understands both campaigns and ROI, ad spend is
              only worth what it actually brings back. Let&rsquo;s talk
              about what your paid marketing should be doing for your
              business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-black text-sm font-semibold px-7 py-3.5 rounded-full transition"
              >
                Get a Free Paid Marketing Audit
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/50 hover:bg-white/10 text-white text-sm font-semibold px-7 py-3.5 rounded-full transition"
              >
                Talk to a Paid Marketing Specialist
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
