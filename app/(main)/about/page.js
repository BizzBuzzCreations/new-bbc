import AboutHero from "@/components/sections/aboutHero";
import LogoSlider from "@/components/sections/logoSlider";
import Counter from "@/components/sections/counter";
import CTA from "@/components/sections/CTA";
import CTA2 from "@/components/sections/CTA-2";
import Reviews from "@/components/sections/reviews";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Rocket,
  BarChart3,
  Eye,
  Lightbulb,
  Users,
  ShieldCheck,
} from "lucide-react";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import AboutFAQ from "@/components/sections/AboutFAQ";
import DifferentiatorsCarousel from "@/components/sections/differentiatorsCarousel";
import TrustAdvantage from "@/components/sections/trustAdvantage";
import RoadmapTimeline from "@/components/sections/roadmapTimeline";
<<<<<<< HEAD
import AboutCulture from "@/components/sections/aboutCulture";
import OurJourney from "@/components/sections/ourJourney";
import { getPageContent } from "@/actions/pageContentActions";
=======
>>>>>>> be2d797bb3e0611a2f1255d51d0dffc81a848556

// icons stay code-driven (design), matched positionally to whichever core
// value cards are saved.
const CORE_VALUE_ICONS = [BarChart3, Eye, Lightbulb, Users, ShieldCheck];

const DEFAULT_CORE_VALUES = [
  { title: "Results Over Reports", description: "We measure success in real growth, not just polished monthly PDFs." },
  { title: "Transparency First", description: "Clear communication, honest timelines, and zero hidden agendas, always." },
  { title: "Innovation-Led Thinking", description: "We track algorithm shifts and AI search trends before they trend." },
  { title: "Client-Centric Culture", description: "Every strategy is built around your business, never a generic template." },
  { title: "Integrity in Execution", description: "Ethical, white-hat practices that protect your brand's reputation long-term." },
];

const DEFAULT_ROADMAP_STEPS = [
  { title: "Discover & Audit", desc: "We analyze your brand, audience, competitors, and current digital presence to uncover real opportunities." },
  { title: "Strategize", desc: "We build a custom roadmap across SEO, paid media, content, and social — tailored to your goals." },
  { title: "Create & Execute", desc: "Our team designs, writes, and launches everything — from landing pages to ad creatives and content." },
  { title: "Optimize & Scale", desc: "We track live performance, run A/B tests, and refine campaigns to steadily improve ROI." },
  { title: "Report & Grow", desc: "Transparent reporting and regular strategy calls keep growth compounding long after launch day." },
];

export const metadata = {
  title: "About BizzBuzz Creations | Digital Marketing Agency in Prayagraj",
  description:
    "Meet BizzBuzz Creations, a digital marketing agency in Prayagraj helping businesses across India and worldwide grow through SEO, paid ads, social media, web and digital strategy.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/about",
  },
};

export default async function About() {
  const content = await getPageContent("about");

  const storyHeading = content?.storyHeading || "Our Story";
  const storySubheading = content?.storySubheading || "From Local Projects to Global Ambition";
  const storyImage = content?.storyImage || "/banner.png";
  const storyParagraphOne =
    content?.storyParagraphOne ||
    "Every big journey starts somewhere. Ours began in Prayagraj (Allahabad), India, with a simple belief: marketing shouldn't feel like guesswork.";
  const storyParagraphTwo =
    content?.storyParagraphTwo ||
    "BizzBuzz Creations started with a small team of marketers, designers, and strategists determined to help businesses get more from their digital presence. What began locally in Prayagraj has grown into a digital marketing agency serving businesses across India, the UK, the US, and beyond.";
  const storyParagraphThree =
    content?.storyParagraphThree ||
    "Today, we bring together strategy, creativity, technology, SEO, and performance marketing to help businesses build stronger brands, reach the right audiences, and achieve meaningful digital growth.";
  const storyParagraphFour =
    content?.storyParagraphFour ||
    "Our ambition is global, but our approach remains personal: understand the business, build the right strategy, and focus on results that actually matter.";
  // Links inside paragraphs two and three only render on the real,
  // un-edited default copy — an admin override falls back to plain text
  // since a textarea can't carry embedded links.
  const storyParagraphTwoIsDefault = !content?.storyParagraphTwo;
  const storyParagraphThreeIsDefault = !content?.storyParagraphThree;

  const missionVisionHeading = content?.missionVisionHeading || "Our Mission, Vision & Core Values";
  const missionTitle = content?.missionTitle || "Our Mission";
  const missionText =
    content?.missionText ||
    "To help every business unlock measurable growth through smart, ethical, and future-ready digital marketing — no fluff, no shortcuts, only strategy that works.";
  const visionTitle = content?.visionTitle || "Our Vision";
  const visionText =
    content?.visionText ||
    "To become India's most trusted digital marketing partner, known for turning ambitious brands into industry leaders through innovation and consistency.";
  const coreValuesHeading = content?.coreValuesHeading || "Our Core Values";
  const coreValuesRaw = content?.coreValues?.length > 0 ? content.coreValues : DEFAULT_CORE_VALUES;
  const coreValues = coreValuesRaw.map((v, i) => ({ ...v, Icon: CORE_VALUE_ICONS[i % CORE_VALUE_ICONS.length] }));

  const differentiatorsHeading = content?.differentiatorsHeading || "Built Different, Built to Perform";
  const differentiatorsSubtext =
    content?.differentiatorsSubtext ||
    `In a market flooded with agencies promising "guaranteed rankings," we chose a different path — building sustainable digital growth systems instead of chasing quick wins.`;

  const roadmapHeading = content?.roadmapHeading || "How Our Digital Marketing Process Works";
  const roadmapSubheading = content?.roadmapSubheading || "The Bizzbuzz Growth Blueprint";
  const roadmapIntro =
    content?.roadmapIntro ||
    "We follow a structured, repeatable process that has helped us deliver consistent results across 90+ projects.";
  const roadmapStepsRaw = content?.roadmapSteps?.length > 0 ? content.roadmapSteps : DEFAULT_ROADMAP_STEPS;
  const roadmapSteps = roadmapStepsRaw.map((s, i) => ({ number: i + 1, title: s.title, desc: s.desc }));
  const roadmapClosing =
    content?.roadmapClosing ||
    "This roadmap is the reason our clients don't just get short-term spikes — they get compounding, long-term digital growth.";

  const trustHeading = content?.trustHeading || "Why Businesses Choose BizzBuzz Creations";
  const trustIntro =
    content?.trustIntro ||
    "If you're looking for a digital marketing agency that treats your business like a long-term partnership — not a one-off project — Bizzbuzz Creations is built for that.";
  const trustClosing =
    content?.trustClosing ||
    "If you're looking for a digital marketing agency that treats your business like a long-term partnership — not a one-off project — Bizzbuzz Creations is built for that.";

  return (
    <>
      <AboutHero content={content} />

      {/* Who we are */}
<<<<<<< HEAD
      <div className="bg-black py-20">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">{storyHeading}</h2>
        <div className="mx-auto 2xl:px-15 px-5 flex lg:flex-row flex-col justify-center items-center gap-15">
          <Image src={storyImage} alt="team" width={500} height={500} />
          <div className="text-white">
            <h2 className="text-white"><b>{storySubheading}</b></h2>
            <p className="leading-relaxed lg:text-left text-center max-w-xl mx-auto mb-4 text-white/70 whitespace-pre-line">
              {storyParagraphOne}
            </p>
            <p className="leading-relaxed lg:text-left text-center max-w-xl mx-auto mb-4 text-white/70 whitespace-pre-line">
              {storyParagraphTwoIsDefault ? (
                <>
                  BizzBuzz Creations started with a small team of marketers, designers, and
                  strategists determined to help businesses get more from their digital
                  presence. What began locally in Prayagraj has grown into a{" "}
                  <Link href="/services" className="text-[#40A2D8] hover:underline">
                    digital marketing agency
                  </Link>{" "}
                  serving businesses across India, the UK, the US, and beyond.
                </>
              ) : (
                storyParagraphTwo
              )}
            </p>
            <p className="leading-relaxed lg:text-left text-center max-w-xl mx-auto mb-4 text-white/70 whitespace-pre-line">
              {storyParagraphThreeIsDefault ? (
                <>
                  Today, we bring together strategy, creativity, technology,{" "}
                  <Link href="/search-engine-optimization" className="text-[#40A2D8] hover:underline">
                    SEO
                  </Link>
                  , and{" "}
                  <Link href="/paid-marketing" className="text-[#40A2D8] hover:underline">
                    performance marketing
                  </Link>{" "}
                  to help businesses build stronger brands, reach the right audiences, and
                  achieve meaningful digital growth.
                </>
              ) : (
                storyParagraphThree
              )}
            </p>
            <p className="leading-relaxed lg:text-left text-center max-w-xl mx-auto mb-4 text-white/70 whitespace-pre-line">
              {storyParagraphFour}
=======
      <div className="">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Story</h2>
        <div className="mx-auto 2xl:px-15 px-5 flex lg:flex-row flex-col justify-center items-center gap-15 mb-20">
          <Image src="/banner.png" alt="team" width={500} height={500} />
          <div className="text-gray-900">
          <h2><b>How Bizzbuzz Creations Began</b></h2>
            <p className="leading-relaxed lg:text-left text-center max-w-xl mx-auto mb-4">
              Every big brand starts with a small idea — ours was simple: marketing shouldn't feel like guesswork.
              <br></br>
              Bizzbuzz Creations was founded by a small team of marketers, designers, and strategists who were tired of watching businesses waste money on campaigns that looked good but didn't perform. 
              We wanted to build a digital marketing agency that actually cared about outcomes — not vanity metrics.
              <br></br>
              What started as a handful of local projects in India quickly grew into something bigger. Word spread. Clients returned. Referrals came in from the UK and the US. 
              Today, we've delivered <b>90+ successful projects</b> for <b>50+ clients</b> spanning multiple industries — from D2C startups to established enterprises — and our footprint continues to grow across India, the UK, and the United States.
            </p>
            <p className="leading-relaxed lg:text-left text-center max-w-xl mx-auto mb-4">
              We're still the same team at heart: hands-on, curious, and obsessed with results. The only thing that's changed is scale.
>>>>>>> be2d797bb3e0611a2f1255d51d0dffc81a848556
            </p>
          </div>
        </div>
      </div>

      {/* Our Mission & Vision */}
      <div className="mx-auto 2xl:px-15 px-5 flex lg:flex-row flex-col justify-center items-start gap-15 mb-25">
        <div>
<<<<<<< HEAD
          <h2 className="text-3xl font-bold mb-10 text-center text-white">
            {missionVisionHeading}
=======
          <h2 className="text-3xl font-bold mb-10 text-center">
            Our Mission, Vision & Core Values
>>>>>>> be2d797bb3e0611a2f1255d51d0dffc81a848556
          </h2>
          <div className="flex flex-wrap justify-center items-stretch gap-8">
            <div className="group relative flex flex-1 min-w-[280px] max-w-lg flex-col items-center rounded-2xl border-2 border-blue-200 bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-100">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                <Target size={32} />
              </div>
<<<<<<< HEAD
              <h3 className="text-2xl font-semibold mb-4 text-center text-white">
                {missionTitle}
              </h3>
              <p className="text-lg leading-relaxed text-center max-w-xl mx-auto mb-4 text-white/60">
                {missionText}
=======
              <h3 className="text-2xl font-semibold mb-4 text-center text-gray-900">
                Our Mission
              </h3>
              <p className="text-lg leading-relaxed text-center max-w-xl mx-auto mb-4 text-gray-600">
                To help every business unlock measurable growth through smart, ethical,
                and future-ready digital marketing — no fluff, no shortcuts, only strategy that works.
>>>>>>> be2d797bb3e0611a2f1255d51d0dffc81a848556
              </p>
            </div>
            <div className="group relative flex flex-1 min-w-[280px] max-w-lg flex-col items-center rounded-2xl border-2 border-blue-200 bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-100">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                <Rocket size={32} />
              </div>
<<<<<<< HEAD
              <h3 className="text-2xl font-semibold mb-4 text-center text-white">
                {visionTitle}
              </h3>
              <p className="text-lg leading-relaxed text-center max-w-xl mx-auto mb-4 text-white/60">
                {visionText}
=======
              <h3 className="text-2xl font-semibold mb-4 text-center text-gray-900">
                Our Vision
              </h3>
              <p className="text-lg leading-relaxed text-center max-w-xl mx-auto mb-4 text-gray-600">
                To become India's most trusted digital marketing partner,
                known for turning ambitious brands into industry leaders through innovation and consistency.
>>>>>>> be2d797bb3e0611a2f1255d51d0dffc81a848556
              </p>
            </div>
          </div>

<<<<<<< HEAD
          <h3 className="text-2xl font-bold mt-15 mb-10 text-center text-white">
            {coreValuesHeading}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {coreValues.map((value, i) => (
                <div
                  key={i}
                  className="group relative flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 pt-8 w-full text-center shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:shadow-xl hover:shadow-black/40"
                >
                  {i > 0 && (
                    <span className="hidden lg:block absolute -left-6 top-[60px] w-6 h-0.5 bg-[#40A2D8]/30" aria-hidden="true" />
                  )}
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-[#40A2D8] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0B60B0] group-hover:text-white">
                    <value.Icon size={26} />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-center text-white">
                    {value.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-center text-white/60">
                    {value.description}
                  </p>
                </div>
              ))}
=======
          <h3 className="text-2xl font-bold mt-15 mb-10 text-center">
            Our Core Values
          </h3>
          <div className="relative">
            <div className="hidden lg:block absolute left-[10%] right-[10%] top-[60px] h-0.5 bg-linear-to-r from-blue-200 via-blue-400 to-blue-200" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
              <div className="group relative flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 pt-8 w-full text-center shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100">
                <div className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600 ring-4 ring-white transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                  <BarChart3 size={26} />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center text-gray-900">
                  Results Over Reports
                </h4>
                <p className="text-sm leading-relaxed text-center text-gray-600">
                  We measure success in real growth, not just polished monthly
                  PDFs.
                </p>
              </div>
              <div className="group relative flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 pt-8 w-full text-center shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100">
                <div className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600 ring-4 ring-white transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                  <Eye size={26} />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center text-gray-900">
                  Transparency First
                </h4>
                <p className="text-sm leading-relaxed text-center text-gray-600">
                  Clear communication, honest timelines, and zero hidden
                  agendas, always.
                </p>
              </div>
              <div className="group relative flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 pt-8 w-full text-center shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100">
                <div className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600 ring-4 ring-white transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                  <Lightbulb size={26} />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center text-gray-900">
                  Innovation-Led Thinking
                </h4>
                <p className="text-sm leading-relaxed text-center text-gray-600">
                  We track algorithm shifts and AI search trends before they
                  trend.
                </p>
              </div>
              <div className="group relative flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 pt-8 w-full text-center shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100">
                <div className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600 ring-4 ring-white transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                  <Users size={26} />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center text-gray-900">
                  Client-Centric Culture
                </h4>
                <p className="text-sm leading-relaxed text-center text-gray-600">
                  Every strategy is built around your business, never a generic
                  template.
                </p>
              </div>
              <div className="group relative flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 pt-8 w-full text-center shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100">
                <div className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600 ring-4 ring-white transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                  <ShieldCheck size={26} />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center text-gray-900">
                  Integrity in Execution
                </h4>
                <p className="text-sm leading-relaxed text-center text-gray-600">
                  Ethical, white-hat practices that protect your brand&apos;s
                  reputation long-term.
                </p>
              </div>
>>>>>>> be2d797bb3e0611a2f1255d51d0dffc81a848556
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Our Journey — 2022 to 2026 */}
      <OurJourney content={content} />

=======
>>>>>>> be2d797bb3e0611a2f1255d51d0dffc81a848556
      {/* What Makes BizzBuzz Creations Different */}
      <div className="mx-auto 2xl:px-15 px-5 gap-15 mb-25">
        <div>
<<<<<<< HEAD
          <h2 className="text-3xl font-bold mb-10 text-center text-white">
            {differentiatorsHeading}
          </h2>
          <p className="text-center max-w-4xl mx-auto mb-10 text-white/70">
            {differentiatorsSubtext}
=======
          <h2 className="text-3xl font-bold mb-10 text-center">
            Built Different, Built to Perform
          </h2>
          <p className="text-center max-w-4xl mx-auto mb-10">
            In a market flooded with agencies promising &quot;guaranteed
            rankings,&quot; we chose a different path — building sustainable
            digital growth systems instead of chasing quick wins.
>>>>>>> be2d797bb3e0611a2f1255d51d0dffc81a848556
          </p>
          <DifferentiatorsCarousel items={content?.differentiatorItems} />
        </div>
      </div>

<<<<<<< HEAD
      {/* Culture — real ownership, one team, growing together */}
      <AboutCulture content={content} />

      {/* The Roadmap Behind Every Digital Success */}
      <div className="bg-black py-20 px-5">
        <h2 className="text-3xl font-bold mb-2 text-center text-white">
          {roadmapHeading}
        </h2>
        <h3 className="text-xl font-semibold mb-4 text-center text-[#40A2D8]">
          {roadmapSubheading}
        </h3>
        <p className="text-lg leading-relaxed text-center max-w-2xl mx-auto mb-16 text-white/70">
          {roadmapIntro}
=======
      {/* The Roadmap Behind Every Digital Success */}
      <div className="mx-auto 2xl:px-15 px-5 mb-25">
        <h2 className="text-3xl font-bold mb-2 text-center">
          The Roadmap Behind Every Digital Success
        </h2>
        <h3 className="text-xl font-semibold mb-4 text-center text-blue-600">
          The Bizzbuzz Growth Blueprint
        </h3>
        <p className="text-lg leading-relaxed text-center max-w-2xl mx-auto mb-16">
          We follow a structured, repeatable process that has helped us
          deliver consistent results across 90+ projects.
>>>>>>> be2d797bb3e0611a2f1255d51d0dffc81a848556
        </p>

        {/* Desktop: flowing zig-zag timeline */}
        <div className="hidden lg:block">
          <RoadmapTimeline steps={roadmapSteps} />
        </div>

        {/* Mobile / tablet: stacked timeline */}
        <div className="lg:hidden relative max-w-2xl mx-auto">
          <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-blue-200" />
          <div className="space-y-10">
            {roadmapSteps.map((step) => (
              <div key={step.number} className="relative flex gap-6 items-start">
                <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold shadow-lg shrink-0">
                  {step.number}
                </div>
                <div className="flex-1 border border-black rounded-xl bg-white shadow-md p-5">
                  <h4 className="font-bold text-lg mb-2 text-gray-900">
                    Step {step.number}: {step.title}
                  </h4>
                  <p className="leading-relaxed text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

<<<<<<< HEAD
        <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mt-16 font-medium text-white/70">
          {roadmapClosing}
=======
        <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mt-16 font-medium">
          This roadmap is the reason our clients don&apos;t just get
          short-term spikes — they get compounding, long-term digital growth.
>>>>>>> be2d797bb3e0611a2f1255d51d0dffc81a848556
        </p>
      </div>

      {/* Why Businesses Across India Trust Us */}
<<<<<<< HEAD
      <div className="bg-black py-20 px-5">
        <h2 className="text-3xl font-bold mb-5 text-center text-white">
          {trustHeading}
        </h2>
        <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12 text-white/70">
          {trustIntro}
=======
      <div className="mx-auto 2xl:px-15 px-5 mb-25">
        <h2 className="text-3xl font-bold mb-5 text-center">
          Why Businesses Across India Trust Us
        </h2>
        <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
          If you&apos;re looking for a digital marketing agency that treats
          your business like a long-term partnership — not a one-off project
          — Bizzbuzz Creations is built for that.
>>>>>>> be2d797bb3e0611a2f1255d51d0dffc81a848556
        </p>

        <TrustAdvantage content={content} />

<<<<<<< HEAD
        <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mt-12 font-medium text-white/70">
          {trustClosing}
=======
        <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mt-12 font-medium">
          If you&apos;re looking for a digital marketing agency that treats
          your business like a long-term partnership — not a one-off project
          — Bizzbuzz Creations is built for that.
>>>>>>> be2d797bb3e0611a2f1255d51d0dffc81a848556
        </p>
      </div>

      {/* FAQ's */}
      <AboutFAQ content={content} />

      <WhyChooseUs />
      <CTA2 />
      <div className="mb-5">
        <LogoSlider />
      </div>
      <Reviews />
      <Counter />
      <CTA />
    </>
  );
}
