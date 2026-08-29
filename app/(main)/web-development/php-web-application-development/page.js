import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  Server,
  Database,
  Lock,
  Plug,
  RefreshCw,
  Wrench,
} from "lucide-react";

export const metadata = {
  title: "PHP Web Application Development Company | BizzBuzz Creations",
  description:
    "Custom PHP web application development and legacy system modernization in India — secure, scalable backend builds for internal tools and customer-facing platforms by BizzBuzz Creations.",
  alternates: {
    canonical:
      "https://bizzbuzzcreations.com/web-development/php-web-application-development",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Server,
    heading: "Custom PHP Application Development",
    description:
      "From internal tools to customer-facing platforms, our full-stack PHP developers build applications tailored to your exact workflow instead of forcing you into off-the-shelf software.",
  },
  {
    icon: RefreshCw,
    heading: "Legacy System Modernization",
    description:
      "Running an old PHP codebase that's become a liability? We modernize legacy systems for better security, speed, and maintainability without disrupting your business.",
  },
  {
    icon: Database,
    heading: "Database Design & Integration",
    description:
      "Well-structured databases underpin every reliable application. We design schemas and integrations that stay fast and consistent as your data grows.",
  },
  {
    icon: Plug,
    heading: "API Development & Integration",
    description:
      "We build and integrate APIs so your PHP application talks cleanly to other systems — payment gateways, CRMs, third-party tools, or your own internal services.",
  },
  {
    icon: Lock,
    heading: "Security Hardening",
    description:
      "Custom applications are a common attack target. We follow secure coding practices and harden deployments against common vulnerabilities.",
  },
  {
    icon: Wrench,
    heading: "Ongoing Maintenance & Support",
    description:
      "Applications need upkeep long after launch. We provide ongoing bug fixes, updates, and performance monitoring to keep things running smoothly.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Requirement Analysis",
    body: "We dig into your actual workflow and technical constraints before proposing an architecture, so the build matches how your business really operates.",
  },
  {
    title: "Architecture & Database Design",
    body: "We plan the application structure and database schema upfront, avoiding the shortcuts that turn into expensive rewrites later.",
  },
  {
    title: "Development & Testing",
    body: "Features get built and tested iteratively, with regular check-ins so you see progress and can course-correct early.",
  },
  {
    title: "Deployment & Support",
    body: "We handle deployment and stay on for maintenance, security patches, and feature updates as your needs evolve.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Full-Stack PHP Team",
    description:
      "From frontend to database, our developers handle the complete stack, so you're not coordinating between multiple vendors.",
  },
  {
    number: "002",
    title: "Legacy Modernization Experts",
    description:
      "We specialize in updating aging PHP systems for better security and performance without a risky full rebuild.",
  },
  {
    number: "003",
    title: "Secure by Design",
    description:
      "Security isn't bolted on at the end — we build with secure coding practices from the first line of code.",
  },
  {
    number: "004",
    title: "Scalable Architecture",
    description:
      "We design applications to handle growth in users and data, not just the demo you saw in the pitch.",
  },
  {
    number: "005",
    title: "Transparent Communication",
    description:
      "Regular updates and clear technical explanations, so you always know where your project stands.",
  },
  {
    number: "006",
    title: "Prayagraj-Based, Globally Trusted",
    description:
      "A full-service PHP development team in Prayagraj, serving clients locally across Uttar Pradesh as well as businesses across the UK, USA, and India.",
  },
];

const FAQS = [
  {
    question: "What PHP frameworks do you work with?",
    answer:
      "We work with Laravel and other modern PHP frameworks, choosing the right fit based on your project's complexity and long-term maintenance needs.",
  },
  {
    question: "Can you take over and modernize an existing PHP application?",
    answer:
      "Yes, we regularly step into legacy codebases, audit them, and modernize them for better security and performance without disrupting your business.",
  },
  {
    question: "How much does PHP application development cost?",
    answer:
      "It depends on the complexity of the features and integrations required — we scope every project and provide a clear, tailored quote.",
  },
  {
    question: "How do you handle application security?",
    answer:
      "We follow secure coding practices, harden deployments, and can add ongoing monitoring to catch vulnerabilities before they become incidents.",
  },
  {
    question: "How long does a typical PHP project take?",
    answer:
      "Timelines vary with scope, from a few weeks for a focused tool to several months for a full platform — we'll give you a realistic estimate upfront.",
  },
];

export default function PhpWebApplicationDevelopment() {
  return (
    <>
      <BpoHero
        heading="PHP Web Application Development Company in India"
        description="Custom PHP applications and legacy system modernization for businesses with complex backend needs — built for security, speed, and long-term maintainability."
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
              src="/Dev%20(1).webp"
              alt="PHP web application development at BizzBuzz Creations"
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
              Backend Applications Built for Complex Needs
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              For businesses with complex backend needs, our full-stack PHP
              developers build and modernize custom web applications, from
              internal tools to customer-facing platforms, updating legacy
              systems for better security and speed.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a full-service development team in Prayagraj,
              proudly serving clients locally across Allahabad and Uttar
              Pradesh, as well as businesses across the UK, USA, and India,
              handling everything from architecture to ongoing support.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="What's Included in Our PHP Web Application Development"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our PHP Application Development Process"
            description="We plan thoroughly before we build, so your application is architected for security and scale from day one, not patched together under deadline pressure."
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
          title="PHP Web Application Development Company"
          description="BizzBuzz Creations is a PHP web application development company in Prayagraj, building secure, scalable backend systems for businesses across India and beyond."
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
