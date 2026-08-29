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
  FileText,
  Gift,
  Target,
  BarChart3,
  PhoneCall,
} from "lucide-react";

export const metadata = {
  title: "Lead Generation Campaigns | BizzBuzz Creations",
  description:
    "Lead generation campaigns in India — smart targeting, landing pages, and offers that convert visitors into genuine, sales-ready leads, by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/paid-marketing/lead-generation-campaigns",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Target,
    heading: "Lead-Focused Targeting",
    description:
      "Campaigns are targeted at audiences most likely to actually need your product or service, not just anyone who might click.",
  },
  {
    icon: FileText,
    heading: "High-Converting Landing Pages",
    description:
      "We design landing pages specifically built to capture leads, with clear offers and forms that don't lose visitors halfway through.",
  },
  {
    icon: Gift,
    heading: "Offer & Lead Magnet Strategy",
    description:
      "We craft offers and lead magnets genuinely valuable enough for prospects to hand over their contact details.",
  },
  {
    icon: PhoneCall,
    heading: "Lead Form & Call Campaigns",
    description:
      "Lead form ads and call-focused campaigns make it effortless for interested prospects to reach out directly.",
  },
  {
    icon: BarChart3,
    heading: "Lead Quality Tracking",
    description:
      "We track not just lead volume but lead quality, so your sales team spends time on prospects genuinely worth pursuing.",
  },
  {
    icon: Users,
    heading: "Nurture-Ready Lead Handoff",
    description:
      "Leads are captured and organized in a way that makes handoff to your sales or nurture process smooth, not chaotic.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Define a Good Lead",
    body: "We learn exactly what a genuinely good, sales-ready lead looks like for your business before building any campaign.",
  },
  {
    title: "Offer & Landing Page Build",
    body: "We craft an offer and landing page designed specifically to convert visitors into leads, not just generate traffic.",
  },
  {
    title: "Launch & Real-Time Optimization",
    body: "Campaigns launch with daily monitoring, adjusting targeting and creative as real lead quality data comes in.",
  },
  {
    title: "Scale & Report on Lead Quality",
    body: "We scale what's generating genuinely good leads and report transparently on volume and quality every month.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Calendar-Filling, Not Just Inbox-Filling",
    description:
      "Our lead generation marketing services are engineered to fill your calendar, not just your inbox with unqualified contacts.",
  },
  {
    number: "002",
    title: "Quality Over Volume",
    description:
      "We track lead quality alongside volume, so your sales team's time isn't wasted chasing dead ends.",
  },
  {
    number: "003",
    title: "Conversion-Built Landing Pages",
    description:
      "Landing pages are designed specifically to capture leads, with offers and forms that don't lose visitors halfway through.",
  },
  {
    number: "004",
    title: "Smart Targeting",
    description:
      "We combine smart targeting with offers that convert visitors into genuine, sales-ready leads.",
  },
  {
    number: "005",
    title: "Transparent Numbers",
    description:
      "We're honest about lead volume and quality, obsessed with getting you a better cost per lead every month.",
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
    question: "What counts as a 'good' lead in a lead generation campaign?",
    answer:
      "A good lead is someone genuinely likely to become a customer — we define this together with you before building any campaign so quality, not just volume, is the target.",
  },
  {
    question: "Do you build the landing pages too?",
    answer:
      "Yes, we design landing pages specifically built to convert visitors into leads, with offers and forms tailored to your campaign.",
  },
  {
    question: "Which platforms do you use for lead generation?",
    answer:
      "We typically use Google and Meta ads, choosing the platform mix based on where your ideal customers actually spend time.",
  },
  {
    question: "How do you track lead quality, not just quantity?",
    answer:
      "We work with you to define what a sales-ready lead looks like, then track conversion from lead to customer, not just form fills.",
  },
  {
    question: "How much does a lead generation campaign cost?",
    answer:
      "Costs depend on your industry, targeting, and ad spend — we'll recommend a realistic budget and optimize it toward your cost-per-lead target.",
  },
];

export default function LeadGenerationCampaigns() {
  return (
    <>
      <BpoHero
        heading="Lead Generation Campaigns in India"
        description="Our lead generation marketing services are engineered to fill your calendar, not just your inbox. We combine smart targeting, landing pages, and offers that convert visitors into genuine, sales-ready leads."
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
              src="/lead%20generation.webp"
              alt="Lead generation campaigns at BizzBuzz Creations"
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
              Engineered to Fill Your Calendar, Not Just Your Inbox
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Our lead generation marketing services are engineered to fill
              your calendar, not just your inbox. We combine smart
              targeting, landing pages, and offers that convert visitors
              into genuine, sales-ready leads.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a paid marketing agency based in Prayagraj,
              proudly serving businesses locally across Allahabad and Uttar
              Pradesh, as well as brands across India, focused on lead
              quality, not just lead count.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our Lead Generation Campaigns"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our Lead Generation Process"
            description="We define what a genuinely good lead looks like for your business first, then build, launch, and optimize campaigns specifically around that outcome."
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
          title="Lead Generation Campaign Company"
          description="BizzBuzz Creations runs lead generation campaigns for businesses across India, built to fill your calendar with genuine, sales-ready leads."
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
