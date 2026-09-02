import Link from "next/link";
import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import RoadmapCarousel from "@/components/sections/roadmapCarousel";
import BpoWeAre from "@/components/sections/bpoWeAre";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  LayoutTemplate,
  Newspaper,
  ShoppingCart,
  Atom,
  Server,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "Top Website Development Company | BizzBuzz Creations",
  description:
    "BizzBuzz Creations builds fast, secure, high-converting websites — custom, WordPress, Shopify — for businesses in Prayagraj, Allahabad, India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/web-development",
  },
};

const SERVICE_ITEMS = [
  {
    icon: LayoutTemplate,
    heading: "Custom Web Development & Design",
    description:
      "As a trusted custom web development company, we build mobile-first, responsive websites around your specific goals — leads, bookings, or sales — with code that scales as your business grows instead of going outdated in a year.",
    href: "/web-development/custom-web-development",
  },
  {
    icon: Newspaper,
    heading: "WordPress Development",
    description:
      "Our WordPress development company builds high-performance, SEO-ready WordPress sites with strong security and ongoing threat monitoring, ideal for businesses that want full control over updates without needing a developer for every change.",
    href: "/web-development/wordpress-development",
  },
  {
    icon: ShoppingCart,
    heading: "Shopify & Ecommerce Development",
    description:
      "As a specialist Shopify development agency and ecommerce website developer, we build fast-loading, conversion-focused online stores with smooth checkouts, designed for speed, mobile shoppers, and scalability — from 20 products to 20,000.",
    href: "/web-development/shopify-ecommerce-development",
  },
  {
    icon: Atom,
    heading: "React, Next.js & Frontend Development",
    description:
      "As a react js development company and next js development agency, we build high-performing frontends using server-side rendering to boost load speed and search visibility, plus pixel-perfect HTML, CSS, and JavaScript.",
    href: "/web-development/react-nextjs-development",
  },
  {
    icon: Server,
    heading: "PHP Web Application Development",
    description:
      "As a php web application development company, our full-stack PHP developers build and modernize custom web applications, from internal tools to customer-facing platforms, often improving security and speed dramatically.",
    href: "/web-development/php-web-application-development",
  },
  {
    icon: RefreshCw,
    heading: "Website Redesign & Management",
    description:
      "Our website redesign services modernize your UI/UX and fix Core Web Vitals without losing rankings you've earned, followed by ongoing website management, monitoring, updates, and backups so your site stays online 24/7.",
    href: "/web-development/website-redesign-management",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery & Requirements",
    desc: "We start by understanding your business, goals, and what your website actually needs to do — generate leads, sell products, or showcase services — before any design or development begins.",
  },
  {
    number: "02",
    title: "Planning & Platform Selection",
    desc: "We recommend the right platform for your specific needs — WordPress, Shopify, custom development, or a React-based frontend — based on what you're actually trying to achieve, not a default choice.",
  },
  {
    number: "03",
    title: "Design & Prototyping",
    desc: "We design the look and structure of your site around your brand and users, creating a version you can review and refine before development starts.",
  },
  {
    number: "04",
    title: "Development & Build",
    desc: "We build the site using clean, maintainable code, keeping mobile performance, security, and search visibility in mind throughout, not bolted on at the end.",
  },
  {
    number: "05",
    title: "Testing & Launch",
    desc: "We test functionality, speed, and responsiveness across devices before launch, catching issues while they're still easy to fix rather than after going live.",
  },
  {
    number: "06",
    title: "Ongoing Support & Growth",
    desc: "We provide ongoing maintenance, monitoring, and updates after launch, so your website keeps performing as your business and traffic grow.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Custom-Built, Not Templated",
    description:
      "As a custom web development company, every site is built around your specific goals and how your business actually works, not squeezed into a generic template.",
  },
  {
    number: "002",
    title: "Mobile-First & Fast-Loading",
    description:
      "We design for speed and mobile shoppers first, handling real-world traffic reliably rather than just looking good in a demo.",
  },
  {
    number: "003",
    title: "Built to Rank",
    description:
      "Strong Core Web Vitals and technical SEO are built in from the start, our sites are built to rank, not just launch and be forgotten.",
  },
  {
    number: "004",
    title: "Full-Stack Capability",
    description:
      "As a php web application development company, wordpress development company, shopify development agency, and react js development company and next js development agency all under one roof, we pick the right stack for your project instead of forcing one tool on everything.",
  },
  {
    number: "005",
    title: "Ongoing Management & Security",
    description:
      "Our website redesign and management services include monitoring, updates, performance checks, and AI-assisted threat monitoring to keep your site secure and online long after launch.",
  },
  {
    number: "006",
    title: "Prayagraj-Based, Globally Trusted",
    description:
      "A full-service web development company based in Prayagraj, serving clients locally across Uttar Pradesh as well as businesses across the UK, USA, and India.",
  },
];

const FAQS = [
  {
    question: "How much does website development cost in India?",
    answer:
      "Cost depends on complexity — a simple brochure site costs far less than a custom web application or a full ecommerce store with integrations. We scope pricing after understanding your specific requirements, features, and platform — WordPress, Shopify, or custom development — rather than offering a flat rate that doesn't reflect what your project actually needs.",
  },
  {
    question: "Why does my business need a professional website?",
    answer:
      "A website is often the first interaction a potential customer has with your business, and most people decide whether to trust you within seconds of landing on it. Beyond credibility, a proper website gives you a lead-generating asset you fully own and control, unlike a social media profile where you're renting attention.",
  },
  {
    question: "Will my website work on all devices?",
    answer:
      "Yes, every website we build is fully responsive and tested across mobile, tablet, and desktop, since most visitors today arrive on a phone first. We also check Core Web Vitals and load speed specifically on mobile, since a slow or broken mobile experience quietly costs businesses real customers.",
  },
  {
    question: "Can you add AI features like chatbots to my website?",
    answer:
      "Yes, we integrate AI tools like chatbots, automated forms, and smart recommendations where they genuinely add value, not as a gimmick. We assess whether a specific AI feature actually helps your visitors and business goals before recommending it, rather than adding AI just for its own sake.",
  },
  {
    question: "Do you provide support and maintenance after launch?",
    answer:
      "Yes, ongoing website management is one of our core services, covering security updates, performance monitoring, backups, and bug fixes after launch. A website needs continued attention to stay fast and secure, so most clients work with us on an ongoing basis rather than a single one-time handoff.",
  },
  {
    question:
      "Which platform is right for my business — WordPress, Shopify, or custom development?",
    answer:
      "It depends on your goals — WordPress suits content-heavy sites needing easy updates, Shopify fits ecommerce stores needing built-in selling tools, and custom development suits businesses with specific functionality no template can provide. We help you choose the right fit during your free consultation, based on what you're actually trying to achieve.",
  },
];

export default function WebDevelopment() {
  return (
    <>
      <BpoHero
        heading="Website Development That Actually Earns Its Keep"
        description="Custom, high-performance websites for businesses in Prayagraj, across India and worldwide, built to load fast and convert visitors into paying customers."
        img="/web-dev.webp"
        ctaText="Get a Free Consultation"
      />

      {/* Intro — dark section, glow accents behind the copy */}
      <section className="relative overflow-hidden bg-black py-20">

        <div className="relative flex lg:flex-row flex-col px-5 lg:gap-20 gap-10 justify-center items-center max-w-6xl mx-auto">
          <div className="relative w-full lg:w-[440px] aspect-[4/5] shrink-0 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/Web-Development-Promotion-Instagram-Post-3.webp"
              alt="BizzBuzz Creations web development team at work"
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
              Built in Prayagraj, Built for Businesses Everywhere
            </h2>
            <h3 className="text-base font-semibold text-[#40A2D8] mb-4">
              Who we build for, and why local roots shape how we work.
            </h3>
            <p className="text-white/70 leading-relaxed mb-4">
              Your website is usually the first conversation you have with a
              customer, and most people decide whether to trust a business
              within seconds of landing on it. At BizzBuzz Creations, we
              build websites that don&rsquo;t just look sharp — they convert
              visitors into customers. Whether you&rsquo;re a local business
              in Prayagraj or Allahabad looking for a website development
              company near you, a small business owner elsewhere in India
              searching for a website developer you can rely on, or a
              startup needing a custom website developer built for how
              startups actually move, our team builds fast, secure, scalable
              websites tailored to how your business actually works.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a full-service web development company based in
              Prayagraj, proudly serving clients locally across Allahabad
              and Uttar Pradesh, nationally across India, and
              internationally across the UK, USA, and worldwide. From your
              first idea to a fully launched, search-optimized website, we
              handle the strategy, design, and code so you don&rsquo;t have
              to juggle five different freelancers to get it right.
            </p>
          </div>
        </div>
      </section>

      {/* "Web Development Services We Offer" */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="Six Ways We Build Websites That Actually Work"
            subheading="Everything we build, matched to what your business actually needs to grow."
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* "How We Turn Your Website Into a Working Sales Tool" — auto-
          scrolling carousel (right-to-left, pauses on hover) instead of a
          static accordion, so the six-step process reads as motion. */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            How We Turn Your Website Into a Working Sales Tool
          </h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-14">
            Our six-step process, from that first conversation to a fully
            live website.
          </p>
          <RoadmapCarousel steps={PROCESS_STEPS} />
        </div>
      </section>

      <div className="bg-black px-5">
        <div className="max-w-5xl mx-auto border-t border-white" />
      </div>

      <section className="bg-black pt-20 pb-20 px-5">
        <BpoWeAre
          title="How We Build Every Website"
          description="What actually backs every website development project, not vague promises."
          points={WE_ARE_POINTS}
        />
      </section>

      <DarkFAQSection faqs={FAQS} heading="Frequently Asked Questions" />

      {/* "Why Businesses Choose Us, and Where We're Rooted" — heading on
          top, copy on the left, image on the right. */}
      <section className="relative overflow-hidden bg-black py-20">
        <div className="relative max-w-6xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
            Why Businesses Choose Us, and Where We&rsquo;re Rooted
          </h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-12">
            What genuinely sets us apart from others, and where we&rsquo;re
            actually rooted.
          </p>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <p className="text-white/70 leading-relaxed mb-4">
                We follow a results-driven approach, building websites that
                don&rsquo;t just look good — they sell. A well-built website
                often outperforms social media alone for building trust and
                driving consistent traffic, and gives you clearer insight
                into customer intent than any social platform can. Combined
                with strong Core Web Vitals and technical SEO, our sites are
                built to rank, which is exactly why businesses trust us as
                their website development company of choice.
              </p>
              <p className="text-white/70 leading-relaxed">
                BizzBuzz Creations is based in Prayagraj, Uttar Pradesh — a
                city many still know as Allahabad — and that local
                grounding shapes how we approach every project, with the
                same standard of work whether a client is nearby or across
                the world. We build for businesses locally across Prayagraj
                and Allahabad, nationally across India, and internationally
                across the UK, USA, and worldwide, as a website development
                company that understands how to build for real business
                results, not just a working site.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/why-choose-image.png"
                alt="Why businesses choose BizzBuzz Creations"
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
              Ready for a Website Built to Actually Perform?
            </h2>
            <h3 className="text-base font-semibold text-[#40A2D8] mb-5">
              The next step, if you&rsquo;re ready to talk about what comes
              next.
            </h3>
            <p className="max-w-3xl text-white/70 mb-8">
              Whether you&rsquo;re a local business in Prayagraj, a growing
              company anywhere else in India, or a business overseas
              needing a team that understands both design and results, a
              website is only worth what it actually does for you.
              Let&rsquo;s talk about what your website should be doing for
              your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-black text-sm font-semibold px-7 py-3.5 rounded-full transition"
              >
                Get a Free Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/50 hover:bg-white/10 text-white text-sm font-semibold px-7 py-3.5 rounded-full transition"
              >
                Talk to a Web Development Specialist
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
