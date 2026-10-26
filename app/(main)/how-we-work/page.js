import { INDUSTRIES } from "@/lib/industriesData";
import PageHero from "@/components/detail/pageHero";
import WhoItsFor from "@/components/detail/whoItsFor";
import RoadmapSteps from "@/components/detail/roadmapSteps";
import WhyTrust from "@/components/detail/whyTrust";
import TimelineRow from "@/components/detail/timelineRow";
import LinkChips from "@/components/detail/linkChips";
import DetailCta from "@/components/detail/detailCta";
import ServicesV2 from "@/components/home/servicesV2";
import FaqV2 from "@/components/home/faqV2";
import BeamsBlock from "@/components/home/band";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";
import PageSeoScripts from "@/components/sections/pageSeoScripts";
import {
  Eye,
  Users,
  Zap,
  Unlock,
  ShieldCheck,
  Lightbulb,
  BarChart3,
  Megaphone,
  Workflow,
  Bot,
  MessageCircle,
  RefreshCw,
} from "lucide-react";

export async function generateMetadata() {
  return buildPageMetadata("how-we-work", {
  title: "How We Work | Our Process | BizzBuzz Creations",
  description:
    "No guesswork, just a structured process. See how BizzBuzz Creations plans, executes, and optimizes every campaign step by step.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/how-we-work",
  },
});
}

const PRINCIPLE_ICONS = [Eye, Users, Zap, Unlock, ShieldCheck, Lightbulb];
const DEFAULT_PRINCIPLES = [
  {
    title: "Transparency",
    tagline: "Clear From Start to Finish",
    desc: "You'll always know what we're doing, why we're doing it, and what comes next through clear communication and honest reporting.",
  },
  {
    title: "Collaboration",
    tagline: "Better Work, Built Together",
    desc: "We combine your business knowledge with our digital expertise, keeping communication open and every important decision collaborative.",
  },
  {
    title: "Speed",
    tagline: "Momentum Without Compromise",
    desc: "Focused priorities and efficient workflows help us move quickly, stay organised, and keep progress moving without sacrificing quality.",
  },
  {
    title: "Ownership",
    tagline: "Your Business Stays Yours",
    desc: "Your website, advertising accounts, analytics, data, and digital assets remain under your control, giving you complete ownership at every stage.",
  },
  {
    title: "Security",
    tagline: "Your Data, Handled Responsibly",
    desc: "We use controlled access and responsible data practices to protect sensitive information, with NDAs available when additional confidentiality is required.",
  },
  {
    title: "Innovation",
    tagline: "Ready for What Comes Next",
    desc: "We continuously explore SEO, AI search, automation, and emerging digital trends to build strategies that adapt as technology evolves.",
  },
];

const DEFAULT_ROADMAP_STEPS = [
  {
    title: "Discover & Audit",
    desc: "We analyze your brand, audience, competitors, and current digital presence to uncover real opportunities.",
  },
  {
    title: "Strategize",
    desc: "We build a custom roadmap across SEO, paid media, content, and social — tailored to your goals and budget.",
  },
  {
    title: "Create & Execute",
    desc: "Our team designs, writes, and launches everything — from landing pages to ad creatives and content calendars.",
  },
  {
    title: "Optimize & Scale",
    desc: "We track live performance, run A/B tests, and refine campaigns to steadily improve ROI.",
  },
  {
    title: "Report & Grow",
    desc: "Transparent monthly reporting and regular strategy calls keep growth compounding long after launch day.",
  },
];

const TOOL_ICONS = [BarChart3, Megaphone, Workflow, Bot];
const DEFAULT_TOOLS = [
  {
    title: "Research & Analytics",
    desc: "Google Analytics, Google Search Console, SEMrush, and Ahrefs power our audits, keyword research, and performance tracking.",
  },
  {
    title: "Advertising & Campaigns",
    desc: "Google Ads, Meta Ads Manager, and conversion tracking tools help us run and optimise every paid campaign with real data.",
  },
  {
    title: "Automation & CRM",
    desc: "We build and use our own CRM and workflow automation systems — the same infrastructure that runs our clients' campaigns and our own operations.",
  },
  {
    title: "AI & Emerging Tech",
    desc: "We work with AI-powered content, chatbot, and search optimisation tools to keep strategies ahead of how search and customer behaviour are evolving.",
  },
];

const EXPECTATION_ICONS = [MessageCircle, BarChart3, Users, RefreshCw];
const DEFAULT_EXPECTATIONS = [
  {
    title: "Clear Communication",
    desc: "Regular updates, accessible communication, and straightforward explanations keep everyone aligned.",
  },
  {
    title: "Transparent Reporting",
    desc: "Understand your performance, progress, priorities, and opportunities without confusing marketing jargon.",
  },
  {
    title: "Dedicated Expertise",
    desc: "Your work is supported by specialists across strategy, marketing, creative, technology, and performance.",
  },
  {
    title: "Continuous Optimisation",
    desc: "We keep analysing, testing, learning, and improving as your business and digital landscape evolve.",
  },
];

// Same industry list as lib/industriesData.js, just reordered to match the
// display order requested for this section — icons/slugs stay sourced from
// that single data file so this isn't a second source of truth.
const INDUSTRY_ORDER = [
  "healthcare",
  "finance",
  "real-estate",
  "ecommerce",
  "education",
  "restaurant",
  "travel",
  "fitness",
  "fashion-apparel",
  "manufacturing",
  "construction",
  "gaming",
  "events",
  "entertainment",
  "wearables",
];
const INDUSTRY_LINKS = INDUSTRY_ORDER.map((slug) =>
  INDUSTRIES.find((industry) => industry.slug === slug),
).filter(Boolean);

const DEFAULT_FAQS = [
  {
    question: "How long does it take to see results with BizzBuzz Creations?",
    answer:
      "Timelines vary by service — paid campaigns can show results within days, while SEO typically takes 3 to 6 months for measurable ranking growth.",
  },
  {
    question: "Do I get reports on how my campaigns are performing?",
    answer:
      "Yes. Every client receives transparent monthly reporting along with regular strategy calls to review progress and next steps.",
  },
  {
    question: "Will I own my website, ad accounts, and data?",
    answer:
      "Yes. Your website, advertising accounts, analytics, and digital assets remain fully under your ownership and control at every stage.",
  },
  {
    question: "What happens after the strategy is created?",
    answer:
      "Our specialists execute the strategy across the relevant channels — SEO, content, paid ads, or website — then continuously optimise based on real performance data.",
  },
  {
    question: "Do you follow this same process for every industry?",
    answer:
      "Yes. The core process stays consistent, but strategy, channels, and priorities are adapted to fit each industry's audience and goals.",
  },
  {
    question: "What if my business needs change halfway through?",
    answer:
      "Our process is built to adapt — strategy, priorities, and services can be adjusted at any stage as your goals or market conditions evolve.",
  },
];

// "What to expect, and when" — how long each stage typically takes.
const DEFAULT_ONBOARDING_STEPS = [
  {
    step: "1 TO 2 WEEKS",
    title: "Discover & Audit",
    desc: "We review your business, competitors, and current digital presence to identify real opportunities before recommending anything.",
  },
  {
    step: "1 WEEK",
    title: "Strategise",
    desc: "We turn audit insights into a focused roadmap across the right channels, matched to your goals and budget.",
  },
  {
    step: "ONGOING",
    title: "Create & Execute",
    desc: "Campaigns, content, and websites are built and launched in phases, so results start compounding early rather than all at once.",
  },
  {
    step: "CONTINUOUS",
    title: "Optimise & Scale",
    desc: "We don't stop after launch — testing, refining, and scaling run throughout the engagement, not just at the start.",
  },
  {
    step: "MONTHLY",
    title: "Report & Grow",
    desc: "You receive clear reporting on a consistent monthly cycle, with strategy calls to review what's working and what's next.",
  },
];

export default async function HowWeWorkPage() {
  const content = await getPageContent("how-we-work");
  // Sections switched off in the dashboard (Remove section).
  const hidden = new Set(content?.hiddenSections || []);

  const heroHeading =
    content?.hwwHeroHeading || "We Don't Wing It. Here's Our Process";
  const heroSubheading =
    content?.hwwHeroSubheading ||
    "A Clear, Repeatable System Behind Every Campaign We Run";
  const heroParagraph =
    content?.hwwHeroParagraph ||
    "No vague promises, no \"we'll figure it out as we go.\" Every project at BizzBuzz Creations follows the same structured process of audit, strategy, execution, and reporting — so you always know what's happening, why it's happening, and what results to expect.";
  const heroCtaText = content?.hwwHeroCtaText || "See How It Works";
  const heroImage = content?.hwwHeroImage || "/how we work and function.png";

  const principlesHeading =
    content?.principlesHeading ||
    "The Principles That Power Every Client Partnership";
  const principlesParagraph =
    content?.principlesParagraph ||
    "No complicated playbooks or hidden processes. Just six principles that shape how we communicate, collaborate, execute, and grow with every client.";
  const principlesRaw =
    content?.principles?.length > 0 ? content.principles : DEFAULT_PRINCIPLES;
  const principles = principlesRaw.map((p, i) => ({
    ...p,
    icon: PRINCIPLE_ICONS[i % PRINCIPLE_ICONS.length],
  }));

  const roadmapHeading =
    content?.hwwRoadmapHeading || "Our 5-Step Engagement Roadmap";
  const roadmapStepsRaw =
    content?.hwwRoadmapSteps?.length > 0
      ? content.hwwRoadmapSteps
      : DEFAULT_ROADMAP_STEPS;
  const roadmapSteps = roadmapStepsRaw.map((s, i) => ({
    number: i + 1,
    title: s.title,
    desc: s.desc,
  }));

  const toolsHeading =
    content?.toolsHeading || "The Tools Behind Every Strategy";
  const toolsParagraph =
    content?.toolsParagraph ||
    "We combine industry-leading platforms with our own in-house systems to plan, execute, and track every campaign with precision.";
  const toolsRaw = content?.tools?.length > 0 ? content.tools : DEFAULT_TOOLS;
  const tools = toolsRaw.map((t, i) => ({
    ...t,
    icon: TOOL_ICONS[i % TOOL_ICONS.length],
  }));

  const onboardingHeading =
    content?.onboardingHeading || "What to Expect, and When";
  const onboardingParagraph =
    content?.onboardingParagraph ||
    "Every business is different, but here's a realistic timeline for how our process typically unfolds.";

  const expectationsHeading =
    content?.expectationsHeading || "What You Can Expect";
  const expectationsSubheading =
    content?.expectationsSubheading ||
    "Clear Communication. Accountable Execution. Continuous Improvement.";
  const expectationsParagraph =
    content?.expectationsParagraph ||
    "Working with BizzBuzz Creations means knowing where your project stands, what we're working toward, and how we're improving it along the way.";
  const expectationsRaw =
    content?.expectations?.length > 0
      ? content.expectations
      : DEFAULT_EXPECTATIONS;
  const expectations = expectationsRaw.map((e, i) => ({
    ...e,
    icon: EXPECTATION_ICONS[i % EXPECTATION_ICONS.length],
  }));

  const industriesHeading =
    content?.hwwIndustriesHeading || "Industries We Apply This Process To";
  const industriesSubheading =
    content?.hwwIndustriesSubheading || "One Process. Every Industry.";
  const industriesParagraph =
    content?.hwwIndustriesParagraph ||
    "This same structured process — discover, strategize, execute, optimize, and report — powers digital growth across every industry we work with, from healthcare and real estate to e-commerce, education, and beyond.";

  const categoriesHeading =
    content?.categoriesHeading ||
    "Everything Your Business Needs to Grow Digitally";
  const categoriesParagraph =
    content?.categoriesParagraph ||
    "One connected team across marketing, technology, automation, and business growth.";

  const faqHeading = content?.hwwFaqHeading || "Frequently Asked Questions";
  const faqs =
    content?.hwwFaqItems?.length > 0 ? content.hwwFaqItems : DEFAULT_FAQS;

  const ctaHeading =
    content?.ctaHeading || "Ready to See This Process Work for Your Business?";
  const ctaParagraph =
    content?.ctaParagraph ||
    "No guesswork, no vague timelines — just a clear process built to turn strategy into measurable growth. Book a free consultation and see exactly how we'd approach your business.";
  const ctaButtonText = content?.ctaButtonText || "Get a Free Consultation";


  const onboardingSteps = content?.onboardingSteps?.length > 0 ? content.onboardingSteps : DEFAULT_ONBOARDING_STEPS;
  const showRoadmap = !hidden.has("hwwRoadmap");
  const showTools = !hidden.has("tools");
  const showOnboarding = !hidden.has("onboarding");

  // Redesign, in the homepage's style: hero → principles → (on the beams
  // background) the engagement roadmap, the tools and the timeline → what
  // you can expect → industries → services → FAQ → closing CTA. Same
  // dashboard fields and "Remove section" switches as before.
  return (
    <div data-no-reveal>
      <PageSeoScripts pageKey="how-we-work" />
      {/* thin reading-progress line at the top (pure CSS, see globals.css) */}
      <div aria-hidden="true" className="scroll-progress" />
      {!hidden.has("hwwHero") && (
        <PageHero
          label="How We Work"
          title={heroHeading}
          tagline={heroSubheading}
          description={heroParagraph}
          actions={[{ text: heroCtaText, href: "/contact", variant: "solid" }]}
          image={heroImage}
          imageAspect="aspect-[4/3]"
          imageClassName="object-[62%_50%]"
        />
      )}

      {!hidden.has("principles") && <WhoItsFor eyebrow="Our principles" heading={principlesHeading} subtext={principlesParagraph} items={principles} />}

      {(showRoadmap || showTools || showOnboarding) && (
        <BeamsBlock>
          {showRoadmap && <RoadmapSteps eyebrow="Engagement roadmap" heading={roadmapHeading} steps={roadmapSteps} />}
          {showTools && <WhyTrust eyebrow="Our tools" heading={toolsHeading} description={toolsParagraph} items={tools} />}
          {showOnboarding && <TimelineRow heading={onboardingHeading} subtext={onboardingParagraph} steps={onboardingSteps} />}
        </BeamsBlock>
      )}

      {!hidden.has("expectations") && (
        <WhoItsFor
          eyebrow={expectationsSubheading}
          heading={expectationsHeading}
          subtext={expectationsParagraph}
          items={expectations}
          cols="lg:grid-cols-4"
          twoUpOnPhones
        />
      )}

      {!hidden.has("hwwIndustries") && (
        <LinkChips
          eyebrow="Industries"
          heading={industriesHeading}
          tagline={industriesSubheading}
          text={industriesParagraph}
          links={INDUSTRY_LINKS.map(({ slug, label, icon }) => ({ href: `/industries/${slug}`, label, icon }))}
        />
      )}

      {/* the homepage's services grid, with this page's heading */}
      {!hidden.has("categories") && (
        <ServicesV2 content={{ servicesEyebrow: "What we do", servicesHeading: categoriesHeading, servicesSubtext: categoriesParagraph }} />
      )}

      {!hidden.has("hwwFaq") && <FaqV2 content={{ faqHeading, faqItems: faqs }} />}

      {!hidden.has("cta") && <DetailCta heading={ctaHeading} text={ctaParagraph} primaryText={ctaButtonText} />}
    </div>
  );
}
