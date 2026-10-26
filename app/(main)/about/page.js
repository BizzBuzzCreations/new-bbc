import {
  Target,
  Rocket,
  BarChart3,
  Eye,
  Lightbulb,
  Users,
  ShieldCheck,
  Award,
  Search,
  Layers,
  HeartHandshake,
  Headset,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import PageHero from "@/components/detail/pageHero";
import PhotoMosaic from "@/components/detail/photoMosaic";
import HubIntro from "@/components/detail/hubIntro";
import MissionValues from "@/components/detail/missionValues";
import JourneyYears from "@/components/detail/journeyYears";
import WhyTrust from "@/components/detail/whyTrust";
import CultureRows from "@/components/detail/cultureRows";
import RoadmapSteps from "@/components/detail/roadmapSteps";
import CertificationsRow from "@/components/detail/certificationsRow";
import WhoItsFor from "@/components/detail/whoItsFor";
import PhotoFeatures from "@/components/detail/photoFeatures";
import FaqV2 from "@/components/home/faqV2";
import CtaV2 from "@/components/home/ctaV2";
import BeamsBlock from "@/components/home/band";
import Pill from "@/components/home/pill";
import {
  ABOUT_HERO_IMAGES,
  ABOUT_JOURNEY_YEARS,
  ABOUT_DIFFERENTIATORS,
  ABOUT_CULTURE_ROWS,
  ABOUT_RECOGNITIONS,
  ABOUT_TRUST_ITEMS,
  ABOUT_WHY_CHOOSE_FEATURES,
  ABOUT_FAQS,
} from "@/lib/aboutPageContent";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";
import PageSeoScripts from "@/components/sections/pageSeoScripts";

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

// Icons for "Why businesses choose us", matched positionally like the core
// values.
const TRUST_ICONS = [Award, Search, Layers, HeartHandshake, Headset, TrendingUp];

// The dashboard's badge image and line for each certification.
const RECOGNITION_FIELDS = {
  Clutch: ["clutchBadgeImage", "clutchTitle"],
  "Google Partner": ["googleAdsBadgeImage", "googleAdsTitle"],
  "Google Analytics": ["googleAnalyticsBadgeImage", "googleAnalyticsTitle"],
  ISO: ["isoBadgeImage", "isoTitle"],
};

export async function generateMetadata() {
  return buildPageMetadata("about", {
  title: "About BizzBuzz Creations, Prayagraj Digital Marketing Agency",
  description:
    "Meet BizzBuzz Creations, a digital marketing agency in Prayagraj helping businesses in India and worldwide grow with SEO, paid ads, social media and web design.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/about",
  },
});
}

export default async function About() {
  const content = await getPageContent("about");
  // Sections switched off in the dashboard (Remove section).
  const hidden = new Set(content?.hiddenSections || []);

  const storyHeading = content?.storyHeading || "Our Story";
  const storySubheading = content?.storySubheading || "From Local Projects to Global Ambition";
  const storyImage = content?.storyImage || "/team-images/team-5.jpeg";
  const storyParagraphOne =
    content?.storyParagraphOne ||
    "Every big journey starts somewhere. Ours began in Prayagraj (Allahabad), India, with a simple belief: marketing shouldn't feel like guesswork.";
  // The default paragraphs two and three carry links to the service pages
  // (saved text can carry its own links too).
  const storyParagraphTwo =
    content?.storyParagraphTwo ||
    'BizzBuzz Creations started with a small team of marketers, designers, and strategists determined to help businesses get more from their digital presence. What began locally in Prayagraj has grown into a <a href="/services">digital marketing agency</a> serving businesses across India, the UK, the US, and beyond.';
  const storyParagraphThree =
    content?.storyParagraphThree ||
    'Today, we bring together strategy, creativity, technology, <a href="/search-engine-optimization">SEO</a>, and <a href="/paid-marketing">performance marketing</a> to help businesses build stronger brands, reach the right audiences, and achieve meaningful digital growth.';
  const storyParagraphFour =
    content?.storyParagraphFour ||
    "Our ambition is global, but our approach remains personal: understand the business, build the right strategy, and focus on results that actually matter.";
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
  const roadmapSubheading = content?.roadmapSubheading || "The BizzBuzz Growth Blueprint";
  const roadmapIntro =
    content?.roadmapIntro ||
    "We follow a structured, repeatable process that has helped us deliver consistent results across 90+ projects.";
  const roadmapStepsRaw = content?.roadmapSteps?.length > 0 ? content.roadmapSteps : DEFAULT_ROADMAP_STEPS;
  const roadmapSteps = roadmapStepsRaw.map((s) => ({ title: s.title, desc: s.desc }));
  const roadmapClosing =
    content?.roadmapClosing ||
    "This roadmap is the reason our clients don't just get short-term spikes — they get compounding, long-term digital growth.";

  const trustHeading = content?.trustHeading || "Why Businesses Choose BizzBuzz Creations";
  const trustIntro =
    content?.trustIntro ||
    "If you're looking for a digital marketing agency that treats your business like a long-term partnership — not a one-off project — BizzBuzz Creations is built for that.";
  const trustClosing =
    content?.trustClosing ||
    "If you're looking for a digital marketing agency that treats your business like a long-term partnership — not a one-off project — BizzBuzz Creations is built for that.";


  // Hero
  const heroHeading = content?.aboutHeroHeading || "India’s Digital Marketing Agency, Trusted Worldwide";
  const heroTagline = content?.aboutHeroSubheading || "Systems first. Campaigns second.";
  const heroParagraph =
    content?.aboutHeroParagraph ||
    "Built and based in India, BizzBuzz Creations helps businesses across India and worldwide grow through data-driven strategy, design, and technology, not just ads.";
  const heroStats = [
    content?.aboutHeroStat1 || "Data-Driven Strategy, Not Guesswork",
    content?.aboutHeroStat2 || "Serving Businesses Across India & Worldwide",
  ];
  const heroButtonText = content?.aboutHeroButtonText || "Build Your Digital Growth Strategy";
  const heroImages = content?.aboutHeroImages?.length > 0 ? content.aboutHeroImages : ABOUT_HERO_IMAGES;

  const journeyHeading = content?.journeyHeading || "Our Journey So Far";
  const journeyYears = content?.journeyYears?.length > 0 ? content.journeyYears : ABOUT_JOURNEY_YEARS;
  const differentiators = content?.differentiatorItems?.length > 0 ? content.differentiatorItems : ABOUT_DIFFERENTIATORS;
  const cultureRows = content?.cultureRows?.length > 0 ? content.cultureRows : ABOUT_CULTURE_ROWS;

  const recognitionsHeading = content?.recognitionsHeading || "Proven Expertise. Real Recognition.";
  const recognitions = ABOUT_RECOGNITIONS.map((r) => {
    const [badgeKey, titleKey] = RECOGNITION_FIELDS[r.org] || [];
    return { src: content?.[badgeKey] || r.badge, alt: r.alt, label: r.org, sub: r.status, title: content?.[titleKey] || r.title };
  });

  const trustItemsRaw = content?.trustItems?.length > 0 ? content.trustItems : ABOUT_TRUST_ITEMS;
  const trustItems = trustItemsRaw.map((item, i) => ({ ...item, icon: TRUST_ICONS[i % TRUST_ICONS.length] }));

  const whyChooseHeading = content?.whyChooseHeading || "Why Businesses Continue Working With Us";
  const whyChooseImage = content?.whyChooseImage || "/team-images/team-5.jpeg";
  const whyChooseFeatures = content?.whyChooseFeatures?.length > 0 ? content.whyChooseFeatures : ABOUT_WHY_CHOOSE_FEATURES;

  const showJourney = !hidden.has("journey");
  const showDifferentiators = !hidden.has("differentiators");

  // Redesign, in the homepage's style: hero (photo mosaic) → our story →
  // mission, vision & values → (on the beams background) our journey + what
  // makes us different → culture → how we work → recognition → why
  // businesses choose us → why they keep working with us → FAQ → closing
  // CTA. Same dashboard fields and "Remove section" switches as before.
  return (
    <div data-no-reveal>
      <PageSeoScripts pageKey="about" />
      {/* thin reading-progress line at the top (pure CSS, see globals.css) */}
      <div aria-hidden="true" className="scroll-progress" />
      {!hidden.has("aboutHero") && (
        <PageHero
          label="About"
          title={heroHeading}
          tagline={heroTagline}
          description={heroParagraph}
          actions={[{ text: heroButtonText, href: "/services", variant: "solid" }]}
          media={<PhotoMosaic images={heroImages} eager />}
        >
          <ul className="mt-8 space-y-3 text-sm text-white/80 md:text-base">
            {heroStats.filter(Boolean).map((stat) => (
              <li key={stat} className="flex items-start gap-3">
                <CheckCircle2 size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-[#40A2D8]" />
                {stat}
              </li>
            ))}
          </ul>
        </PageHero>
      )}

      {!hidden.has("story") && (
        <HubIntro
          eyebrow={storyHeading}
          heading={storySubheading}
          paragraphs={[storyParagraphOne, storyParagraphTwo, storyParagraphThree, storyParagraphFour]}
          image={storyImage}
          alt="The BizzBuzz Creations team"
        />
      )}

      {!hidden.has("missionVision") && (
        <MissionValues
          heading={missionVisionHeading}
          mission={{ title: missionTitle, text: missionText }}
          vision={{ title: visionTitle, text: visionText }}
          valuesHeading={coreValuesHeading}
          values={coreValues}
        />
      )}

      {(showJourney || showDifferentiators) && (
        <BeamsBlock>
          {showJourney && <JourneyYears heading={journeyHeading} years={journeyYears} />}
          {showDifferentiators && (
            <WhyTrust eyebrow="What makes us different" heading={differentiatorsHeading} description={differentiatorsSubtext} items={differentiators} />
          )}
        </BeamsBlock>
      )}

      {!hidden.has("culture") && <CultureRows rows={cultureRows} />}

      {!hidden.has("roadmap") && (
        <div className="bg-black">
          <RoadmapSteps eyebrow={roadmapSubheading} heading={roadmapHeading} subtext={roadmapIntro} steps={roadmapSteps} footnote={roadmapClosing} />
        </div>
      )}

      {!hidden.has("recognitions") && (
        <CertificationsRow
          id="recognitions"
          eyebrow={content?.recognitionsEyebrow || "Recognition"}
          heading={recognitionsHeading}
          subtext={content?.recognitionsParagraph}
          items={recognitions}
        >
          {content?.recognitionsButtonText && (
            <div className="mt-6">
              <Pill href="/contact">{content.recognitionsButtonText}</Pill>
            </div>
          )}
        </CertificationsRow>
      )}

      {/* the closing line only when it says something different — the
          default (and the saved copy) repeated the intro word for word */}
      {!hidden.has("trust") && (
        <WhoItsFor
          eyebrow="Why us"
          heading={trustHeading}
          subtext={trustIntro}
          items={trustItems}
          twoUpOnPhones
          footnote={trustClosing && trustClosing.trim() !== trustIntro.trim() ? trustClosing : null}
        />
      )}

      {!hidden.has("whyChooseUs") && (
        <PhotoFeatures eyebrow="Long-term partners" heading={whyChooseHeading} image={whyChooseImage} alt="The BizzBuzz Creations team at work" features={whyChooseFeatures} />
      )}

      {!hidden.has("aboutFaq") && (
        <FaqV2
          content={{
            faqHeading: content?.aboutFaqHeading || "FAQs",
            faqItems: content?.aboutFaqItems?.length > 0 ? content.aboutFaqItems : ABOUT_FAQS,
          }}
        />
      )}

      {!hidden.has("cta") && <CtaV2 content={content} />}
    </div>
  );
}
