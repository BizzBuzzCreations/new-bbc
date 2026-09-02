import Link from "next/link";
import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import RoadmapCarousel from "@/components/sections/roadmapCarousel";
import BpoWeAre from "@/components/sections/bpoWeAre";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import { Bot, Sparkles, Workflow, Compass } from "lucide-react";

export const metadata = {
  title: "Top AI Solutions Company | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is an AI solutions company building agents, content, and automation for India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/ai-solutions",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Bot,
    heading: "Custom AI Agents & Chatbots",
    description:
      "As a custom ai agent development company, we build chatbots and voice agents that actually complete tasks, not just answer questions and hand off to a human anyway.",
    href: "/ai-solutions/custom-ai-agents-chatbots",
  },
  {
    icon: Sparkles,
    heading: "AI Content & Generative Engines",
    description:
      "As an ai content generation agency, we produce content at AI speed with human editorial review, so output never sounds generic or off-brand.",
    href: "/ai-solutions/ai-content-generative-engines",
  },
  {
    icon: Workflow,
    heading: "Workflow & Process Automation",
    description:
      "As an ai workflow automation company, we connect your tools and build AI decision steps into workflows, eliminating manual, repetitive work for good.",
    href: "/ai-solutions/workflow-process-automation",
  },
  {
    icon: Compass,
    heading: "AI Strategy & Implementation Consulting",
    description:
      "As an ai strategy consulting firm, we give you an honest readiness assessment and a realistic roadmap, not AI adoption for its own sake.",
    href: "/ai-solutions/generative-engine-optimization",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Business & Readiness Discovery",
    desc: "We start by understanding your business and honestly assessing your genuine readiness for the specific AI solution you need.",
  },
  {
    number: "02",
    title: "Use Case Identification",
    desc: "We identify specific, realistic use cases relevant to your business, prioritizing based on feasibility and actual impact.",
  },
  {
    number: "03",
    title: "Architecture & Strategy",
    desc: "We plan the technical architecture and approach, whether that's an AI agent, content workflow, or automation system.",
  },
  {
    number: "04",
    title: "Development & Training",
    desc: "We build and train the AI solution on your specific business data, knowledge, and brand voice.",
  },
  {
    number: "05",
    title: "Testing & Integration",
    desc: "We test thoroughly and integrate the solution with your existing systems before anything goes live.",
  },
  {
    number: "06",
    title: "Ongoing Optimization",
    desc: "We monitor performance and continue refining the AI solution as your business and needs evolve.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Practical, Not Generic",
    description:
      "As a generative ai solutions company, we don't sell generic AI software off a shelf, every solution is built for what your specific business actually needs.",
  },
  {
    number: "002",
    title: "Built Around Your Real Workflow",
    description:
      "As an ai workflow automation company, we start by understanding how your business actually runs before building any agent, automation, or content engine.",
  },
  {
    number: "003",
    title: "Tested With Your Team",
    description:
      "Every custom ai agent from our ai agent development agency is tested with your team before launch, not handed over as an untested demo.",
  },
  {
    number: "004",
    title: "GEO From Day One",
    description:
      "We combine AI integration with generative engine optimization from the start, so you're visible wherever customers search, including inside AI answers.",
  },
  {
    number: "005",
    title: "Refined After Launch",
    description:
      "We don't disappear after handoff, every system from our ai implementation consulting company is refined based on real usage, not left running blind.",
  },
  {
    number: "006",
    title: "Scales From Startup to Enterprise",
    description:
      "Whether you're automating your first support inbox or scaling AI across an established company, our ai strategy consulting services keep the approach practical.",
  },
];

const FAQS = [
  {
    question: "How much do AI solutions cost in India?",
    answer:
      "Cost depends heavily on complexity — a simple chatbot costs far less than a custom multi-agent system or a full content automation pipeline. We scope pricing after understanding your specific use case, rather than a flat rate upfront.",
  },
  {
    question: "How do we know if our business is actually ready for AI?",
    answer:
      "Readiness depends on your data, team, and processes, which we assess honestly during a readiness consultation. Being unprepared in some areas doesn't rule out AI — it often just means addressing specific gaps first.",
  },
  {
    question: "Will AI content or chatbots sound generic instead of like our brand?",
    answer:
      "Not when built correctly — we train AI on your specific brand voice and business data, with human review built into the process to catch anything that sounds off-brand.",
  },
  {
    question: "How long does it take to build a custom AI solution?",
    answer:
      "Timeline depends on complexity — a simple chatbot can take a few weeks, while a multi-agent system or full automation pipeline typically takes longer to build and test properly.",
  },
  {
    question: "Do you help with AI governance and risk, or just building the tools?",
    answer:
      "Yes, AI strategy consulting covers governance, risk, and responsible use guidelines, not just technical implementation, especially important for businesses adopting AI at scale.",
  },
  {
    question: "Can you help us choose between different AI tools and vendors?",
    answer:
      "Yes, independent AI vendor and tool evaluation is part of our strategy consulting service, assessed against your specific needs rather than any partnership bias.",
  },
];

export default function AISolutions() {
  return (
    <>
      <BpoHero
        heading="AI Solutions That Actually Get Work Done"
        description="AI solutions built around real business tasks, not AI for its own sake, for businesses in Prayagraj, across India and worldwide, backed by human oversight."
        img="/aiservice.webp"
        ctaText="Get a Free AI Readiness Consultation"
      />

      {/* Intro — dark section, glow accents behind the copy */}
      <section className="relative overflow-hidden bg-black py-20">

        <div className="relative flex lg:flex-row flex-col px-5 lg:gap-20 gap-10 justify-center items-center max-w-6xl mx-auto">
          <div className="relative w-full lg:w-[440px] aspect-[4/5] shrink-0 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/image-1.jpg"
              alt="BizzBuzz Creations AI team at work"
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
              AI Built Around Real Tasks, Not Just Hype
            </h2>
            <h3 className="text-base font-semibold text-[#40A2D8] mb-4">
              Who we build AI for, and why hype alone isn&rsquo;t a
              strategy.
            </h3>
            <p className="text-white/70 leading-relaxed mb-4">
              Adopting AI because it&rsquo;s trending, without a genuine
              use case behind it, is a common way businesses waste time
              and budget. At BizzBuzz Creations, we build AI solutions
              judged on real tasks they actually complete, not generic AI
              features added for their own sake. Whether you&rsquo;re a
              local business in Prayagraj looking for an ai solutions
              company near me, a brand elsewhere in India searching for a
              custom ai agent development company that understands your
              specific workflow, or a business needing ai strategy
              consulting before committing budget, our team builds AI
              tailored to how your business actually operates.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a full-service AI solutions company based in
              Prayagraj, proudly serving clients locally across Allahabad
              and Uttar Pradesh, nationally across India, and
              internationally across the UK, USA, and worldwide. From
              custom agents and content generation to workflow automation
              and strategy, we handle the full AI adoption journey so
              you&rsquo;re not piecing it together yourself.
            </p>
          </div>
        </div>
      </section>

      {/* "Four Ways We Put AI to Work for Your Business" */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="Four Ways We Put AI to Work for Your Business"
            subheading="Everything we offer, matched to where AI could genuinely help your business."
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* "How We Turn AI Interest Into Working Systems" — auto-scrolling
          carousel (right-to-left, pauses on hover) instead of a static
          accordion, so the six-step process reads as motion. */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            How We Turn AI Interest Into Working Systems
          </h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-14">
            Our six-step process, from readiness discovery to ongoing
            optimization.
          </p>
          <RoadmapCarousel steps={PROCESS_STEPS} />
        </div>
      </section>

      <div className="bg-black px-5">
        <div className="max-w-5xl mx-auto border-t border-white" />
      </div>

      <section className="bg-black pt-20 pb-20 px-5">
        <BpoWeAre
          title="How We Make AI Actually Useful"
          description="What actually backs every AI project, not vague promises."
          points={WE_ARE_POINTS}
        />
      </section>

      <DarkFAQSection faqs={FAQS} heading="Frequently Asked Questions" />

      {/* "Why Businesses Trust Us With AI, and Where We're Rooted" —
          heading on top, copy on the left, image on the right. */}
      <section className="relative overflow-hidden bg-black py-20">
        <div className="relative max-w-6xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
            Why Businesses Trust Us With AI, and Where We&rsquo;re Rooted
          </h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-12">
            What genuinely sets us apart from others, and where we&rsquo;re
            actually rooted.
          </p>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <p className="text-white/70 leading-relaxed mb-4">
                We treat every AI project as accountable to a real
                business outcome, not a feature added because it&rsquo;s
                currently trending. A well-run AI solutions company should
                be judged on tasks genuinely completed and time genuinely
                saved, which is exactly why businesses trust us as their
                AI partner of choice.
              </p>
              <p className="text-white/70 leading-relaxed">
                BizzBuzz Creations is based in Prayagraj, Uttar Pradesh — a
                city many still know as Allahabad — and that local
                grounding shapes how we approach every AI project, with
                the same standard of work whether a client is nearby or
                across the world. We build AI solutions locally across
                Prayagraj and Allahabad, nationally across India, and
                internationally across the UK, USA, and worldwide, as an
                AI solutions company that understands how to build for
                real business results, not just impressive demos.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/why-choose-image.png"
                alt="Why businesses trust BizzBuzz Creations with AI"
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
              Ready to Put AI to Work for Your Business?
            </h2>
            <h3 className="text-base font-semibold text-[#40A2D8] mb-5">
              The next step, if you&rsquo;re ready to talk about what comes
              next.
            </h3>
            <p className="max-w-3xl text-white/70 mb-8">
              Whether you&rsquo;re a local business in Prayagraj, a growing
              company anywhere else in India, or a business overseas
              needing a partner that understands both AI capability and
              genuine business fit, AI is only worth what it actually does
              for you. Let&rsquo;s talk about where AI could genuinely
              help.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-black text-sm font-semibold px-7 py-3.5 rounded-full transition"
              >
                Get a Free AI Readiness Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/50 hover:bg-white/10 text-white text-sm font-semibold px-7 py-3.5 rounded-full transition"
              >
                Talk to an AI Solutions Specialist
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
