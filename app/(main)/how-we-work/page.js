import Link from "next/link";
import RoadmapTimeline from "@/components/sections/roadmapTimeline";
import { FAQSection } from "@/components/ui/faq-accordion";
import OnboardingCarousel from "@/components/sections/onboardingCarousel";
import CategoriesShowcase from "@/components/sections/categoriesShowcase";
import { INDUSTRIES } from "@/lib/industriesData";
import {
  Eye,
  Users,
  Zap,
  Unlock,
  ShieldCheck,                 
  Lightbulb,
  FileSignature,
  BarChart3,
  Megaphone,
  Workflow,
  Bot,
  MessageCircle,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "How We Work | Our Process | BizzBuzz Creations",
  description:
    "No guesswork, just a structured process. See how BizzBuzz Creations plans, executes, and optimizes every campaign step by step.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/how-we-work",
  },
};

const PRINCIPLES = [
  {
    icon: Eye,
    title: "Transparency",
    tagline: "Clear From Start to Finish",
    desc: "You'll always know what we're doing, why we're doing it, and what comes next through clear communication and honest reporting.",
  },
  {
    icon: Users,
    title: "Collaboration",
    tagline: "Better Work, Built Together",
    desc: "We combine your business knowledge with our digital expertise, keeping communication open and every important decision collaborative.",
  },
  {
    icon: Zap,
    title: "Speed",
    tagline: "Momentum Without Compromise",
    desc: "Focused priorities and efficient workflows help us move quickly, stay organised, and keep progress moving without sacrificing quality.",
  },
  {
    icon: Unlock,
    title: "Ownership",
    tagline: "Your Business Stays Yours",
    desc: "Your website, advertising accounts, analytics, data, and digital assets remain under your control, giving you complete ownership at every stage.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    tagline: "Your Data, Handled Responsibly",
    desc: "We use controlled access and responsible data practices to protect sensitive information, with NDAs available when additional confidentiality is required.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    tagline: "Ready for What Comes Next",
    desc: "We continuously explore SEO, AI search, automation, and emerging digital trends to build strategies that adapt as technology evolves.",
  },
];

const roadmapSteps = [
  {
    number: 1,
    title: "Discover & Audit",
    desc: "We analyze your brand, audience, competitors, and current digital presence to uncover real opportunities.",
  },
  {
    number: 2,
    title: "Strategize",
    desc: "We build a custom roadmap across SEO, paid media, content, and social — tailored to your goals and budget.",
  },
  {
    number: 3,
    title: "Create & Execute",
    desc: "Our team designs, writes, and launches everything — from landing pages to ad creatives and content calendars.",
  },
  {
    number: 4,
    title: "Optimize & Scale",
    desc: "We track live performance, run A/B tests, and refine campaigns to steadily improve ROI.",
  },
  {
    number: 5,
    title: "Report & Grow",
    desc: "Transparent monthly reporting and regular strategy calls keep growth compounding long after launch day.",
  },
];

const TOOLS = [
  {
    icon: BarChart3,
    title: "Research & Analytics",
    desc: "Google Analytics, Google Search Console, SEMrush, and Ahrefs power our audits, keyword research, and performance tracking.",
  },
  {
    icon: Megaphone,
    title: "Advertising & Campaigns",
    desc: "Google Ads, Meta Ads Manager, and conversion tracking tools help us run and optimise every paid campaign with real data.",
  },
  {
    icon: Workflow,
    title: "Automation & CRM",
    desc: "We build and use our own CRM and workflow automation systems — the same infrastructure that runs our clients' campaigns and our own operations.",
  },
  {
    icon: Bot,
    title: "AI & Emerging Tech",
    desc: "We work with AI-powered content, chatbot, and search optimisation tools to keep strategies ahead of how search and customer behaviour are evolving.",
  },
];

const EXPECTATIONS = [
  {
    icon: MessageCircle,
    title: "Clear Communication",
    desc: "Regular updates, accessible communication, and straightforward explanations keep everyone aligned.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    desc: "Understand your performance, progress, priorities, and opportunities without confusing marketing jargon.",
  },
  {
    icon: Users,
    title: "Dedicated Expertise",
    desc: "Your work is supported by specialists across strategy, marketing, creative, technology, and performance.",
  },
  {
    icon: RefreshCw,
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

const FAQS = [
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

export default function HowWeWorkPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden min-h-[440px] sm:min-h-[500px] flex items-center pt-20 pb-16 px-6 md:px-12 lg:px-24"
        style={{ background: "#050b16" }}
      >
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              "conic-gradient(from 200deg at 75% 10%, transparent, rgba(64,162,216,0.6), transparent 35%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "conic-gradient(from 30deg at 15% 95%, transparent, rgba(124,58,237,0.5), transparent 30%)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-3xl">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
            We Don&rsquo;t Wing It. Here&rsquo;s Our Process
          </h1>
          <h2 className="text-lg sm:text-xl font-semibold text-[#8fd0f2] mb-6">
            A Clear, Repeatable System Behind Every Campaign We Run
          </h2>
          <p className="text-white/70 leading-relaxed mb-8 max-w-xl">
            No vague promises, no &ldquo;we&rsquo;ll figure it out as we
            go.&rdquo; Every project at BizzBuzz Creations follows the same
            structured process of audit, strategy, execution, and reporting — so
            you always know what&rsquo;s happening, why it&rsquo;s happening,
            and what results to expect.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white hover:bg-black text-black hover:text-white text-sm font-semibold px-7 py-3.5 rounded-lg transition-colors duration-300"
          >
            See How It Works
          </a>
        </div>
      </section>

      {/* Our principles */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 max-w-2xl">
            The Principles That Power Every Client Partnership
          </h2>
          <p className="text-white/70 max-w-2xl mb-14">
            No complicated playbooks or hidden processes. Just six principles
            that shape how we communicate, collaborate, execute, and grow with
            every client.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {PRINCIPLES.map(({ icon: Icon, title, tagline, desc }) => (
              <div
                key={title}
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-white hover:shadow-xl hover:shadow-black/20"
              >
                <span className="shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-white/15 text-white transition-colors duration-300 group-hover:bg-[#0B60B0] group-hover:text-white">
                  <Icon size={20} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#40A2D8] mb-1.5 transition-colors duration-300 group-hover:text-[#0B60B0]">
                    {title}
                  </p>
                  <h3 className="font-bold text-lg mb-1.5 transition-colors duration-300 group-hover:text-black">
                    {tagline}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-600">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement roadmap */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-16">
            Our 5-Step Engagement Roadmap
          </h2>
          <RoadmapTimeline steps={roadmapSteps} dark />
        </div>
      </section>

      {/* The Tools Behind Every Strategy */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            The Tools Behind Every Strategy
          </h2>
          <p className="text-white/70 leading-relaxed max-w-2xl mb-14">
            We combine industry-leading platforms with our own in-house systems
            to plan, execute, and track every campaign with precision.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TOOLS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#40A2D8]/50 hover:bg-[#0B60B0] hover:shadow-xl hover:shadow-black/40"
              >
                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 text-[#40A2D8] mb-4 transition-all duration-300 group-hover:bg-white group-hover:text-[#0B60B0]">
                  <Icon size={20} />
                </span>
                <h3 className="font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-white/60 leading-relaxed transition-colors duration-300 group-hover:text-white/85">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we onboard new clients */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 max-w-2xl">
            What to Expect, and When
          </h2>
          <p className="text-white/60 max-w-2xl mb-14 leading-relaxed">
            Every business is different, but here&rsquo;s a realistic timeline
            for how our process typically unfolds.
          </p>

          <OnboardingCarousel />
        </div>
      </section>

      {/* What You Can Expect */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            What You Can Expect
          </h2>
          <h3 className="text-lg font-semibold text-[#40A2D8] mb-4">
            Clear Communication. Accountable Execution. Continuous Improvement.
          </h3>
          <p className="text-white/60 max-w-2xl mx-auto mb-14 leading-relaxed">
            Working with BizzBuzz Creations means knowing where your project
            stands, what we&rsquo;re working toward, and how we&rsquo;re
            improving it along the way.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {EXPECTATIONS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:bg-[#0B60B0] hover:shadow-xl hover:shadow-black/40"
              >
                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 text-[#40A2D8] mb-4 transition-all duration-300 group-hover:bg-white group-hover:text-[#0B60B0] group-hover:scale-110">
                  <Icon size={20} />
                </span>
                <h4 className="font-bold text-white mb-2">{title}</h4>
                <p className="text-sm text-white/60 leading-relaxed transition-colors duration-300 group-hover:text-white/85">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries we apply this process to */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 text-white border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Industries We Apply This Process To
          </h2>
          <h3 className="text-lg font-semibold text-[#40A2D8] mb-4">
            One Process. Every Industry.
          </h3>
          <p className="text-white/60 max-w-2xl mx-auto mb-2 leading-relaxed">
            This same structured process — discover, strategize, execute,
            optimize, and report — powers digital growth across every industry
            we work with, from healthcare and real estate to e-commerce,
            education, and beyond.
          </p>
          <p className="text-white/50 text-sm mb-10"></p>

          <div className="flex flex-wrap justify-center gap-3">
            {INDUSTRY_LINKS.map(({ slug, label, icon: Icon }) => (
              <Link
                key={slug}
                href={`/industries/${slug}`}
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#40A2D8]/50 hover:bg-[#0B60B0] hover:text-white hover:shadow-lg hover:shadow-black/40"
              >
                <Icon
                  size={15}
                  className="text-[#40A2D8] transition-colors duration-300 group-hover:text-white"
                />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories we work across */}
      <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 max-w-2xl">
            Everything Your Business Needs to Grow Digitally
          </h2>
          <p className="text-white/60 max-w-2xl mb-10 leading-relaxed">
            One connected team across marketing, technology, automation, and
            business growth.
          </p>

          <CategoriesShowcase />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-black pt-20 pb-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <FAQSection
          faqs={FAQS}
          defaultValue="item-0"
          className="max-w-4xl mx-auto"
          headingClassName="text-2xl md:text-3xl font-bold text-center mb-12 text-white"
          heading="Frequently Asked Questions"
          triggerClassName="bg-white/5 border-[#0B60B0]/50 hover:border-[#0B60B0] text-white hover:bg-white/10 hover:shadow-none"
          iconClassName="text-[#40A2D8]"
          questionTextClassName="text-white"
          chevronWrapClassName="bg-white/10"
          chevronClassName="text-white"
          answerClassName="bg-white/5 border border-[#0B60B0]/30 shadow-none"
          answerTextClassName="text-white/70"
          answerIconWrapClassName="bg-white/10"
          answerIconClassName="text-[#40A2D8]"
        />
      </section>

      {/* CTA — page-specific content (not the shared site-wide CTA), same
          visual treatment as it, with a button instead of an email form. */}
      <div className="bg-black px-5 pt-4 pb-10 scroll-mt-34" id="CTA">
        <div
          className="rounded-3xl border-2 border-[#0B60B0] shadow-lg shadow-black md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto container"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
          }}
        >
          <div className="py-8 md:py-10 px-10 z-10 text-white">
            <h3 className="md:text-3xl text-2xl font-bold mb-5">
              Ready to See This Process Work for Your Business?
            </h3>
            <p className="max-w-3xl text-white/70 mb-8">
              No guesswork, no vague timelines — just a clear process built to
              turn strategy into measurable growth. Book a free consultation and
              see exactly how we&rsquo;d approach your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white hover:bg-gray-100 text-black text-sm font-semibold px-7 py-3.5 rounded-lg transition"
            >
              Book Your Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Full-width white divider before the footer — same as the shared
          CTA's divider, so this page still ends the same way. */}
      <div className="w-full bg-black pt-8 md:pt-10">
        <div className="w-full border-t border-white" />
      </div>
    </>
  );
}
