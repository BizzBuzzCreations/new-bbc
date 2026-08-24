import AboutHero from "@/components/sections/aboutHero";
import CTA from "@/components/sections/CTA";
import Reviews from "@/components/sections/reviews";
import React from "react";
import Image from "next/image";
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
import AboutCulture from "@/components/sections/aboutCulture";
import OurJourney from "@/components/sections/ourJourney";
import { getPageContent } from "@/actions/pageContentActions";

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
    "Learn about BizzBuzz Creations, a digital marketing agency in Prayagraj helping businesses across India grow with SEO, ads, social media & AI strategies.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/about",
  },
};

export default async function About() {
  const content = await getPageContent("about");

  const storyHeading = content?.storyHeading || "Our Story";
  const storySubheading = content?.storySubheading || "How Bizzbuzz Creations Began";
  const storyImage = content?.storyImage || "/banner.png";
  const storyParagraphOne =
    content?.storyParagraphOne ||
    "Every big brand starts with a small idea — ours was simple: marketing shouldn't feel like guesswork.\n\nBizzbuzz Creations was founded by a small team of marketers, designers, and strategists who were tired of watching businesses waste money on campaigns that looked good but didn't perform. We wanted to build a digital marketing agency that actually cared about outcomes — not vanity metrics.\n\nWhat started as a handful of local projects in India quickly grew into something bigger. Word spread. Clients returned. Referrals came in from the UK and the US. Today, we've delivered 90+ successful projects for 50+ clients spanning multiple industries — from D2C startups to established enterprises — and our footprint continues to grow across India, the UK, and the United States.";
  const storyParagraphTwo =
    content?.storyParagraphTwo ||
    "We're still the same team at heart: hands-on, curious, and obsessed with results. The only thing that's changed is scale.";

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

  const roadmapHeading = content?.roadmapHeading || "The Roadmap Behind Every Digital Success";
  const roadmapSubheading = content?.roadmapSubheading || "The Bizzbuzz Growth Blueprint";
  const roadmapIntro =
    content?.roadmapIntro ||
    "We follow a structured, repeatable process that has helped us deliver consistent results across 90+ projects.";
  const roadmapStepsRaw = content?.roadmapSteps?.length > 0 ? content.roadmapSteps : DEFAULT_ROADMAP_STEPS;
  const roadmapSteps = roadmapStepsRaw.map((s, i) => ({ number: i + 1, title: s.title, desc: s.desc }));
  const roadmapClosing =
    content?.roadmapClosing ||
    "This roadmap is the reason our clients don't just get short-term spikes — they get compounding, long-term digital growth.";

  const trustHeading = content?.trustHeading || "Why Businesses Across India Trust Us";
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
              {storyParagraphTwo}
            </p>
          </div>
        </div>
      </div>

      {/* Our Mission & Vision */}
      <div className="bg-black py-20 px-5">
        <div className="mx-auto 2xl:px-10 flex lg:flex-row flex-col justify-center items-start gap-15">
        <div>
          <h2 className="text-3xl font-bold mb-10 text-center text-white">
            {missionVisionHeading}
          </h2>
          <div className="flex flex-wrap justify-center items-stretch gap-8">
            <div className="group relative flex flex-1 min-w-[280px] max-w-lg flex-col items-center rounded-2xl border-2 border-white/10 bg-white/5 p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:shadow-2xl hover:shadow-black/40">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-[#40A2D8] transition-colors duration-300 group-hover:bg-[#0B60B0] group-hover:text-white">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center text-white">
                {missionTitle}
              </h3>
              <p className="text-lg leading-relaxed text-center max-w-xl mx-auto mb-4 text-white/60">
                {missionText}
              </p>
            </div>
            <div className="group relative flex flex-1 min-w-[280px] max-w-lg flex-col items-center rounded-2xl border-2 border-white/10 bg-white/5 p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:shadow-2xl hover:shadow-black/40">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-[#40A2D8] transition-colors duration-300 group-hover:bg-[#0B60B0] group-hover:text-white">
                <Rocket size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center text-white">
                {visionTitle}
              </h3>
              <p className="text-lg leading-relaxed text-center max-w-xl mx-auto mb-4 text-white/60">
                {visionText}
              </p>
            </div>
          </div>

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
            </div>
        </div>
        </div>
      </div>

      {/* Our Journey — 2022 to 2026 */}
      <OurJourney content={content} />

      {/* What Makes BizzBuzz Creations Different */}
      <div className="bg-black py-20 px-5">
        <div>
          <h2 className="text-3xl font-bold mb-10 text-center text-white">
            {differentiatorsHeading}
          </h2>
          <p className="text-center max-w-4xl mx-auto mb-10 text-white/70">
            {differentiatorsSubtext}
          </p>
          <DifferentiatorsCarousel items={content?.differentiatorItems} />
        </div>
      </div>

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
        </p>

        {/* Desktop: flowing zig-zag timeline */}
        <div className="hidden lg:block">
          <RoadmapTimeline steps={roadmapSteps} dark />
        </div>

        {/* Mobile / tablet: stacked timeline */}
        <div className="lg:hidden relative max-w-2xl mx-auto">
          <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-white/15" />
          <div className="space-y-10">
            {roadmapSteps.map((step) => (
              <div key={step.number} className="relative flex gap-6 items-start">
                <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#0B60B0] text-white font-bold shadow-lg shrink-0">
                  {step.number}
                </div>
                <div className="flex-1 border border-white/10 rounded-xl bg-white/5 shadow-md p-5">
                  <h4 className="font-bold text-lg mb-2 text-white">
                    Step {step.number}: {step.title}
                  </h4>
                  <p className="leading-relaxed text-white/60">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mt-16 font-medium text-white/70">
          {roadmapClosing}
        </p>
      </div>

      {/* Why Businesses Across India Trust Us */}
      <div className="bg-black py-20 px-5">
        <h2 className="text-3xl font-bold mb-5 text-center text-white">
          {trustHeading}
        </h2>
        <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12 text-white/70">
          {trustIntro}
        </p>

        <TrustAdvantage content={content} />

        <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mt-12 font-medium text-white/70">
          {trustClosing}
        </p>
      </div>

      {/* FAQ's */}
      <AboutFAQ content={content} />

      <WhyChooseUs dark />
      <Reviews />
      <CTA />
    </>
  );
}
