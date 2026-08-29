import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  Atom,
  Server,
  Plug,
  Gauge,
  Bot,
  Layers,
} from "lucide-react";

export const metadata = {
  title: "React & Next.js Development Company | BizzBuzz Creations",
  description:
    "High-performing, AI-integrated React and Next.js development in India — server-side rendering, fast page speed, and scalable frontends by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/web-development/react-nextjs-development",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Atom,
    heading: "Custom React & Next.js Frontends",
    description:
      "We build interactive, component-based frontends tailored to your product, moving beyond static pages into fast, app-like user experiences.",
  },
  {
    icon: Server,
    heading: "Server-Side Rendering & SEO",
    description:
      "Next.js's server-side rendering boosts load speed and Google ranking, so your React application doesn't sacrifice SEO for interactivity.",
  },
  {
    icon: Plug,
    heading: "Headless CMS & API Integration",
    description:
      "We connect your frontend to a headless CMS or existing backend and APIs, integrating seamlessly with your current team and systems.",
  },
  {
    icon: Gauge,
    heading: "Performance Optimization",
    description:
      "Code-splitting, image optimization, and caching strategies keep your React and Next.js app fast even as features and traffic grow.",
  },
  {
    icon: Bot,
    heading: "AI-Integrated Features",
    description:
      "From chat interfaces to smart recommendations, we build AI-integrated frontends that add real functionality, not just novelty.",
  },
  {
    icon: Layers,
    heading: "Scalable Component Architecture",
    description:
      "We structure components and state management so your application stays maintainable as your product and team grow.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Technical Discovery",
    body: "We assess your existing backend, team, and goals to decide the right rendering strategy and architecture for your Next.js build.",
  },
  {
    title: "Architecture & Component Planning",
    body: "Component structure, state management, and data-fetching strategy get planned upfront to avoid a tangled codebase later.",
  },
  {
    title: "Development & Integration",
    body: "We build and integrate with your APIs or CMS iteratively, with regular reviews so the product evolves the way you expect.",
  },
  {
    title: "Launch & Performance Tuning",
    body: "Before and after launch, we tune performance and Core Web Vitals so the app stays fast as real users and traffic arrive.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "React & Next.js Specialists",
    description:
      "We focus on modern JavaScript frameworks, keeping up with the ecosystem so your build uses current best practices, not outdated patterns.",
  },
  {
    number: "002",
    title: "SEO-First Rendering",
    description:
      "Server-side rendering and static generation are used deliberately to protect your search visibility, not just for speed alone.",
  },
  {
    number: "003",
    title: "Seamless Backend Integration",
    description:
      "We integrate cleanly with your existing backend, APIs, or team's workflow instead of demanding a full-stack rebuild.",
  },
  {
    number: "004",
    title: "AI-Ready Builds",
    description:
      "Our frontends are built to accommodate AI features — chatbots, recommendations, and automation — as your product needs them.",
  },
  {
    number: "005",
    title: "Component-Based Scalability",
    description:
      "Clean component architecture means new features get added without destabilizing what's already working.",
  },
  {
    number: "006",
    title: "Prayagraj-Based, Globally Trusted",
    description:
      "A full-service development team in Prayagraj, serving clients locally across Uttar Pradesh as well as businesses across the UK, USA, and India.",
  },
];

const FAQS = [
  {
    question: "What's the difference between React and Next.js?",
    answer:
      "React is a library for building user interfaces; Next.js is a framework built on React that adds server-side rendering, routing, and performance features out of the box.",
  },
  {
    question: "Is a React or Next.js site good for SEO?",
    answer:
      "Yes, when built correctly with Next.js's server-side rendering or static generation, these sites can rank just as well as traditional websites — sometimes better, due to speed.",
  },
  {
    question: "Can you migrate my existing website to React or Next.js?",
    answer:
      "Yes, we handle migrations from other platforms or older frontend stacks, planning the move to preserve your SEO rankings and content.",
  },
  {
    question: "How long does a React or Next.js project take?",
    answer:
      "Timelines depend on complexity — a focused frontend build can take a few weeks, while a larger application with custom integrations takes longer.",
  },
  {
    question: "How much does React & Next.js development cost?",
    answer:
      "Costs vary based on features, integrations, and complexity — we scope every project and provide a clear, tailored quote before starting.",
  },
];

export default function ReactNextjsDevelopment() {
  return (
    <>
      <BpoHero
        heading="React & Next.js Development Company in India"
        description="High-performing, AI-integrated frontends using server-side rendering to boost load speed and Google ranking, integrating seamlessly with your existing backend and team."
        img="/web-dev.webp"
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
              src="/web%20graphic.png"
              alt="React and Next.js development at BizzBuzz Creations"
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
              Modern Frontends That Load Fast and Rank Well
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Our React and Next.js developers build high-performing,
              AI-integrated frontends using server-side rendering to boost
              load speed and Google ranking, integrating seamlessly with
              your existing backend and team.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a full-service development team in Prayagraj,
              proudly serving clients locally across Allahabad and Uttar
              Pradesh, as well as businesses across the UK, USA, and India,
              from your first component to a fully launched product.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our React & Next.js Development"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our React & Next.js Development Process"
            description="We plan the architecture and rendering strategy before writing code, so speed, SEO, and scalability are built in, not retrofitted later."
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
          title="React & Next.js Development Company"
          description="BizzBuzz Creations is a React and Next.js development company in Prayagraj, building fast, SEO-ready, AI-integrated frontends for businesses across India and beyond."
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
