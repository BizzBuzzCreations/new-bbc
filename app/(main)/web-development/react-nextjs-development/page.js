import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import {
  Atom,
  Rocket,
  Building2,
  Building,
  Layers,
  Handshake,
  RefreshCw,
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

const CAPABILITIES = [
  {
    icon: Rocket,
    title: "Startups & Early-Stage Businesses",
    desc: "Startups need a frontend that can iterate fast as the product changes direction. We build on React and Next.js's component architecture, letting startups ship new features and pages without a rebuild every time the roadmap shifts.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "SMBs often need a fast, SEO-friendly site that a template can't quite deliver. We build custom React and Next.js frontends sized for SMB budgets, giving growing businesses speed and search visibility without enterprise overhead.",
  },
  {
    icon: Building,
    title: "Enterprises & Large Organizations",
    desc: "Enterprises need frontends that handle high traffic and integrate with existing backend systems reliably. We build Next.js applications structured for enterprise-scale traffic, strict performance requirements, and integration with existing APIs.",
  },
  {
    icon: Layers,
    title: "SaaS & Product Companies",
    desc: "SaaS companies need a marketing site and product app that work together seamlessly. We build React and Next.js frontends covering both the public-facing site and the authenticated product experience as one connected system.",
  },
  {
    icon: Handshake,
    title: "Agencies Needing a Frontend Partner",
    desc: "Design and marketing agencies often need a technical frontend partner to build what they've designed. We work as a white-label or direct React and Next.js development partner, delivering builds agencies can present as their own.",
  },
  {
    icon: RefreshCw,
    title: "Businesses Migrating From Older Frontends",
    desc: "Businesses on outdated frontend stacks or slow-loading sites need a careful, SEO-safe migration to React or Next.js. We handle structured migrations, preserving rankings and content while upgrading the underlying technology.",
  },
];

const SERVICE_BREAKDOWN = [
  {
    number: "01",
    title: "Custom React & Next.js Frontends",
    desc: "We build interactive, component-based frontends tailored to your product, moving beyond static pages into fast, app-like user experiences.",
    ctaText: "Know Our Services",
    services: [
      "Custom Frontend Development",
      "Component-Based Architecture",
      "React Application Development",
      "Next.js Application Development",
      "Interactive UI Development",
      "Single Page Application Builds",
      "Progressive Web App Development",
      "Frontend Documentation",
    ],
  },
  {
    number: "02",
    title: "Server-Side Rendering & SEO",
    desc: "Next.js's server-side rendering boosts load speed and Google ranking, so your React application doesn't sacrifice SEO for interactivity.",
    ctaText: "Know Our Services",
    services: [
      "Server-Side Rendering Setup",
      "Static Site Generation",
      "Incremental Static Regeneration",
      "Technical SEO for React Apps",
      "Metadata & Schema Setup",
      "Core Web Vitals Optimization",
      "Sitemap & Indexing Setup",
      "SEO Migration Support",
    ],
  },
  {
    number: "03",
    title: "Headless CMS & API Integration",
    desc: "We connect your frontend to a headless CMS or existing backend and APIs, integrating seamlessly with your current team and systems.",
    ctaText: "Know Our Services",
    services: [
      "Headless CMS Integration",
      "REST & GraphQL API Integration",
      "Backend Integration",
      "Content Modeling",
      "Third-Party Service Integration",
      "Authentication Integration",
      "Data Fetching Strategy",
      "API Documentation Support",
    ],
  },
  {
    number: "04",
    title: "Performance Optimization",
    desc: "Code-splitting, image optimization, and caching strategies keep your React and Next.js app fast even as features and traffic grow.",
    ctaText: "Know Our Services",
    services: [
      "Code Splitting",
      "Image Optimization",
      "Caching Strategy Setup",
      "Bundle Size Optimization",
      "Lazy Loading Implementation",
      "Performance Auditing",
      "Core Web Vitals Monitoring",
      "Load Testing",
    ],
  },
  {
    number: "05",
    title: "AI-Integrated Features",
    desc: "From chat interfaces to smart recommendations, we build AI-integrated frontends that add real functionality, not just novelty.",
    ctaText: "Know Our Services",
    services: [
      "AI Chat Interface Development",
      "Recommendation Engine Integration",
      "AI API Integration",
      "Personalization Features",
      "Smart Search Implementation",
      "AI-Assisted Content Rendering",
      "Voice & NLP Feature Integration",
      "AI Feature Testing",
    ],
  },
  {
    number: "06",
    title: "Scalable Component Architecture",
    desc: "We structure components and state management so your application stays maintainable as your product and team grow.",
    ctaText: "Know Our Services",
    services: [
      "Component Library Development",
      "Design System Implementation",
      "State Management Setup",
      "Code Architecture Planning",
      "Reusable Component Patterns",
      "Type Safety with TypeScript",
      "Testing Infrastructure Setup",
      "Team Onboarding Documentation",
    ],
  },
];

const ROADMAP_STEPS = [
  {
    number: "01",
    title: "Technical Discovery",
    desc: "We assess your existing backend, team, and goals to decide the right rendering strategy and architecture for your Next.js build.",
  },
  {
    number: "02",
    title: "Architecture & Component Planning",
    desc: "Component structure, state management, and data-fetching strategy get planned upfront to avoid a tangled codebase later.",
  },
  {
    number: "03",
    title: "Design & Prototyping",
    desc: "We design key screens and interactions, creating prototypes you can review before full frontend development begins.",
  },
  {
    number: "04",
    title: "Development & Integration",
    desc: "We build and integrate with your APIs or CMS iteratively, with regular reviews so the product evolves the way you expect.",
  },
  {
    number: "05",
    title: "Performance Testing & QA",
    desc: "We test performance, responsiveness, and functionality across devices, catching issues before they reach real users.",
  },
  {
    number: "06",
    title: "Launch & Performance Tuning",
    desc: "Before and after launch, we tune performance and Core Web Vitals so the app stays fast as real users and traffic arrive.",
  },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "React & Next.js Specialists",
    desc: "We focus on modern JavaScript frameworks, keeping up with the ecosystem so your build uses current best practices, not outdated patterns.",
  },
  {
    number: "02",
    title: "SEO-First Rendering",
    desc: "Server-side rendering and static generation are used deliberately to protect your search visibility, not just for speed alone.",
  },
  {
    number: "03",
    title: "Seamless Backend Integration",
    desc: "We integrate cleanly with your existing backend, APIs, or team's workflow instead of demanding a full-stack rebuild.",
  },
  {
    number: "04",
    title: "AI-Ready Builds",
    desc: "Our frontends are built to accommodate AI features — chatbots, recommendations, and automation — as your product needs them.",
  },
  {
    number: "05",
    title: "Component-Based Scalability",
    desc: "Clean component architecture means new features get added without destabilizing what's already working.",
  },
  {
    number: "06",
    title: "Prayagraj-Based, Globally Trusted",
    desc: "A full-service development team in Prayagraj, serving clients locally across Uttar Pradesh as well as businesses across the UK, USA, and India.",
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
    <ServiceDetailPage
      sectionLabel="Website Development"
      label="React & Next.js Development"
      icon={Atom}
      description="High-performing, AI-integrated frontends using server-side rendering to boost load speed and Google ranking, integrating seamlessly with your existing backend and team."
      heroTitle="React & Next.js Development Company in India"
      heroDescription="High-performing, AI-integrated frontends using server-side rendering to boost load speed and Google ranking, integrating seamlessly with your existing backend and team."
      capabilitiesHeading="Built for Products Ready to Load Fast and Rank Well"
      capabilities={CAPABILITIES}
      serviceBreakdownHeading="Everything That Goes Into a Frontend Built to Perform"
      serviceBreakdown={SERVICE_BREAKDOWN}
      differentiatorsHeading="Why Teams Trust Us to Build Their React & Next.js Frontend"
      differentiators={DIFFERENTIATORS}
      roadmapCarouselHeading="How We Turn Your Requirements Into a Fast, Working Frontend"
      roadmapCarouselSteps={ROADMAP_STEPS}
      showStats={false}
      localityHeading="Based in Prayagraj, Building Frontends Worldwide"
      localityText="BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, and that local grounding shapes how we approach every React and Next.js project, with the same care whether a client is nearby or overseas. We work with startups, SMBs, and enterprises across India, building frontends sized to each product's actual traffic and feature needs. For teams looking to hire React and Next.js developers beyond India, we support clients worldwide remotely, working across time zones to deliver the same performance standard regardless of location. Whether you're a startup shipping your first component or an enterprise scaling a high-traffic application, our approach starts with the same question: what does your product actually need this frontend to do."
      faqs={FAQS}
      showWhyChooseUs={false}
      ctaHeading="Ready for a Frontend That Actually Performs?"
      ctaText="Whether you need a new React or Next.js frontend built from scratch, a migration from an older stack, or an AI-integrated product experience, an off-the-shelf template was never going to get you there. Let's talk through your requirements and scope what a custom frontend build would actually involve."
      ctaPrimaryText="Talk to a React & Next.js Specialist"
      ctaSecondaryText="Get Your Free Development Consultation"
    />
  );
}
