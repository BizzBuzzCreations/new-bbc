import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  Compass,
  Smartphone,
  MousePointerClick,
  Code2,
  Gauge,
  LifeBuoy,
} from "lucide-react";

export const metadata = {
  title: "Custom Web Development & Design Company | BizzBuzz Creations",
  description:
    "Custom web development and design services in India — mobile-first, conversion-focused websites built around your business goals, with clean, maintainable code by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/web-development/custom-web-development",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Compass,
    heading: "Discovery-Led Design",
    description:
      "Before a single pixel is drawn, we map out your goals — lead generation, bookings, or online sales — so the site's structure and features actually serve your business, not a template's assumptions.",
  },
  {
    icon: Smartphone,
    heading: "Mobile-First, Responsive Builds",
    description:
      "Most of your visitors are on a phone. Every custom website we build is designed mobile-first, then scaled up, so it looks sharp and works reliably on any screen size.",
  },
  {
    icon: MousePointerClick,
    heading: "Conversion-Focused UX",
    description:
      "Clean design is only half the job. We structure layouts, calls-to-action, and user flows around getting visitors to actually book, enquire, or buy.",
  },
  {
    icon: Code2,
    heading: "Clean, Maintainable Code",
    description:
      "No bloated page builders or fragile hacks. Our developers write solid, well-structured code that's easy to extend as your business grows.",
  },
  {
    icon: Gauge,
    heading: "Core Web Vitals & Speed Optimization",
    description:
      "A slow site loses customers before they even see your offer. We optimize load speed and Core Web Vitals from day one, not as an afterthought.",
  },
  {
    icon: LifeBuoy,
    heading: "Post-Launch Support",
    description:
      "Launch day isn't the finish line. We stick around for monitoring, updates, and fixes so your custom website keeps performing long after it goes live.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Discovery & Strategy",
    body: "We start with your business goals and map out the pages, features, and structure your site actually needs — nothing generic, nothing bolted on.",
  },
  {
    title: "Wireframing & UI Design",
    body: "Layouts and visual design come together around your brand and your users, reviewed with you before a single line of code is written.",
  },
  {
    title: "Development & QA",
    body: "Mobile-first, clean code gets built and tested across devices and browsers, so the finished site behaves the same way everywhere.",
  },
  {
    title: "Launch & Support",
    body: "We handle the technical launch, then stay on for monitoring, updates, and fixes so your investment keeps performing.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Custom-Built, Not Templated",
    description:
      "Every site is designed around your specific goals and how your business actually works, not squeezed into a generic template.",
  },
  {
    number: "002",
    title: "Mobile-First & Fast-Loading",
    description:
      "We design for speed and mobile visitors first, so your site holds up under real-world traffic, not just in a demo.",
  },
  {
    number: "003",
    title: "Built to Convert",
    description:
      "Layouts, copy structure, and calls-to-action are planned around turning visitors into enquiries, bookings, or sales.",
  },
  {
    number: "004",
    title: "Clean, Scalable Code",
    description:
      "We build on solid foundations so new pages, features, or integrations can be added later without a rebuild.",
  },
  {
    number: "005",
    title: "SEO-Ready Foundations",
    description:
      "Technical SEO and Core Web Vitals are built in from the start, giving your custom site a real shot at ranking.",
  },
  {
    number: "006",
    title: "Prayagraj-Based, Globally Trusted",
    description:
      "A full-service custom web development team in Prayagraj, serving clients locally across Uttar Pradesh as well as businesses across the UK, USA, and India.",
  },
];

const FAQS = [
  {
    question: "How much does custom web development cost?",
    answer:
      "It depends on the pages, features, and integrations you need — we scope every project and give you a clear, tailored quote before work begins.",
  },
  {
    question: "How long does it take to build a custom website?",
    answer:
      "Most custom sites take a few weeks from discovery to launch, depending on complexity. We'll give you a realistic timeline once we understand your requirements.",
  },
  {
    question: "Can you redesign my existing website instead of building new?",
    answer:
      "Yes — if your current site just needs a refresh rather than a rebuild, we can redesign it in place. See our Website Redesign & Management service for details.",
  },
  {
    question: "Will my custom website be easy to update myself?",
    answer:
      "Yes, we build on content management systems where it makes sense, so you can update text and images without calling a developer for every small change.",
  },
  {
    question: "Do you offer support after the website launches?",
    answer:
      "Yes, we provide ongoing maintenance, monitoring, and support packages so your site keeps running smoothly after launch.",
  },
];

export default function CustomWebDevelopment() {
  return (
    <>
      <BpoHero
        heading="Custom Web Development & Design Services in India"
        description="Websites built around your business, not squeezed into a template. Mobile-first design, clean code, and conversion-focused UX from a team in Prayagraj serving clients across India."
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
              src="/Web-Development-Promotion-Instagram-Post-4.webp"
              alt="Custom web development and design at BizzBuzz Creations"
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
              Custom Websites Built Around Your Business
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              A generic template can only take your business so far. Our
              custom web development team designs and builds websites around
              your specific goals — whether that's generating leads, taking
              bookings, or selling online — combining clean design with
              solid, maintainable code underneath.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a full-service web development company in
              Prayagraj, proudly serving clients locally across Allahabad
              and Uttar Pradesh, as well as businesses across the UK, USA,
              and India. No juggling five freelancers — we handle strategy,
              design, and code under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our Custom Web Development"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our Custom Web Development Process"
            description="A results-driven approach — not just a site that looks good, but one that sells. Our four-step process bakes in Core Web Vitals and technical SEO from the start."
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
          title="Custom Web Development Company"
          description="BizzBuzz Creations is a custom web development company in Prayagraj, building fast, secure, and scalable websites for businesses across India and beyond, tailored to how your business actually works."
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
