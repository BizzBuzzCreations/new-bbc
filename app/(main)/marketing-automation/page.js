import Link from "next/link";
import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import RoadmapCarousel from "@/components/sections/roadmapCarousel";
import BpoWeAre from "@/components/sections/bpoWeAre";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import { Mail, Filter, Contact, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Top Marketing Automation Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a marketing automation agency connecting email, CRM and WhatsApp for India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/marketing-automation",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Mail,
    heading: "Email Marketing Automation",
    description:
      "As an email marketing automation agency, we build sequences that nurture and convert automatically, from welcome flows to abandoned cart recovery, not just newsletters.",
    href: "/marketing-automation/email-marketing-automation",
  },
  {
    icon: Filter,
    heading: "Lead Nurturing Automation",
    description:
      "As a lead nurturing agency, we build automation that moves prospects toward a sale on their own, so leads stop going cold waiting for manual follow-up.",
    href: "/marketing-automation/lead-nurturing-automation",
  },
  {
    icon: Contact,
    heading: "CRM Marketing Automation",
    description:
      "As a crm automation agency, we turn your CRM into an active growth tool, triggering campaigns from real customer data instead of sitting idle.",
    href: "/marketing-automation/crm-marketing-automation",
  },
  {
    icon: MessageCircle,
    heading: "WhatsApp Marketing Automation",
    description:
      "As a whatsapp automation agency, we build chatbots and broadcast campaigns that reach customers on the app they actually check, not one they ignore.",
    href: "/marketing-automation/whatsapp-marketing-automation",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Business & Funnel Discovery",
    desc: "We start by understanding your business, customer journey, and where leads or customers are currently falling through the cracks.",
  },
  {
    number: "02",
    title: "Automation Strategy & Mapping",
    desc: "We map out the specific sequences and triggers that make sense for your business, from welcome flows to CRM workflows.",
  },
  {
    number: "03",
    title: "Sequence & Workflow Development",
    desc: "We build out the content, sequences, and workflows according to the strategy, keeping your brand voice consistent throughout.",
  },
  {
    number: "04",
    title: "Setup & Integration",
    desc: "We configure the automation platforms and integrate them with your website, CRM, or e-commerce store as needed.",
  },
  {
    number: "05",
    title: "Launch & Initial Testing",
    desc: "Automation launches with close monitoring in the early weeks, testing content and timing to identify what's resonating.",
  },
  {
    number: "06",
    title: "Ongoing Optimization",
    desc: "We provide regular reporting and continue refining automation based on real subscriber and customer behavior.",
  },
];

// "Marketing Automation Agency" section — left untouched by request,
// same content and same position (between the process carousel and the
// FAQ) as before.
const WE_ARE_POINTS = [
  {
    number: "001",
    title: "One Connected System",
    description:
      "We treat email, WhatsApp, and lead nurturing as one connected system, not separate campaigns running blind.",
  },
  {
    number: "002",
    title: "We Build the Workflow Ourselves",
    description:
      "We don't sell you a tool subscription and walk away — we build the workflow and write the messaging ourselves.",
  },
  {
    number: "003",
    title: "CRM-Connected, Not Manual",
    description:
      "Every call, form fill, or reply automatically updates lead status and triggers the next action — no manual data entry required.",
  },
  {
    number: "004",
    title: "Scales With Real Volume",
    description:
      "Startups get plans that scale with real volume, not enterprise pricing from day one.",
  },
  {
    number: "005",
    title: "Reviewed Monthly",
    description:
      "Every workflow is reviewed and improved monthly, not left running on autopilot and forgotten.",
  },
  {
    number: "006",
    title: "Built Around Real Behavior",
    description:
      "We build the system around how your customers actually behave, not a generic funnel template.",
  },
];

const FAQS = [
  {
    question: "How much does marketing automation cost in India?",
    answer:
      "Cost depends on scope — a single email sequence costs less than a full automation suite covering email, CRM, and WhatsApp together. We scope pricing after understanding your specific requirements, rather than a flat rate upfront.",
  },
  {
    question: "Which platform or tool do you use for automation?",
    answer:
      "We work with major email, CRM, and WhatsApp automation platforms, either within tools you already use or recommending one if you haven't chosen yet, based on your specific needs.",
  },
  {
    question: "Will automated messages feel robotic or impersonal to customers?",
    answer:
      "Not if built correctly — we design sequences and triggers around genuine customer behavior and keep your brand voice consistent, rather than generic, one-size-fits-all automation.",
  },
  {
    question: "How long does it take to set up marketing automation?",
    answer:
      "Timeline depends on scope — a single sequence can take a couple of weeks, while a full suite across email, CRM, and WhatsApp typically takes longer to build and test properly.",
  },
  {
    question: "Can automation work with the tools we already use?",
    answer:
      "Yes, we build automation around your existing tech stack wherever possible, connecting platforms rather than requiring you to switch systems entirely.",
  },
  {
    question: "Do you provide ongoing management after automation is set up?",
    answer:
      "Yes, ongoing optimization is part of our standard approach, since automation needs continued refinement as customer behavior and your business evolve.",
  },
];

export default function MarketingAutomation() {
  return (
    <>
      <BpoHero
        heading="Marketing Automation That Sells While You Sleep"
        description="Marketing automation built to nurture and convert customers automatically, not just fill a content calendar, for businesses in Prayagraj, across India and worldwide."
        img="/digitalmarketing.webp"
        ctaText="Get a Free Marketing Automation Audit"
      />

      {/* Intro — dark section, glow accents behind the copy */}
      <section className="relative overflow-hidden bg-black py-20">

        <div className="relative flex lg:flex-row flex-col px-5 lg:gap-20 gap-10 justify-center items-center max-w-6xl mx-auto">
          <div className="relative w-full lg:w-[440px] aspect-[4/5] shrink-0 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/digital.webp"
              alt="BizzBuzz Creations marketing automation team at work"
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
              Automation Built to Work While You Focus Elsewhere
            </h2>
            <h3 className="text-base font-semibold text-[#40A2D8] mb-4">
              Who we automate for, and why manual follow-up isn&rsquo;t the
              answer.
            </h3>
            <p className="text-white/70 leading-relaxed mb-4">
              Leads going cold, emails sent inconsistently, and a CRM that
              just sits there storing contacts are common signs of
              marketing that isn&rsquo;t actually automated. At BizzBuzz
              Creations, we build marketing automation judged on genuine
              conversions it generates, not just workflows that exist for
              their own sake. Whether you&rsquo;re a local business in
              Prayagraj looking for a marketing automation agency near me,
              a brand elsewhere in India searching for an email marketing
              automation company that understands your customer journey,
              or a business needing crm automation without hiring an
              in-house team, our team builds systems tailored to how your
              business actually sells.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a full-service marketing automation agency based
              in Prayagraj, proudly serving clients locally across
              Allahabad and Uttar Pradesh, nationally across India, and
              internationally across the UK, USA, and worldwide. From
              email and lead nurturing to CRM and WhatsApp, we handle the
              full automation stack so you&rsquo;re not coordinating
              separate tools and vendors yourself.
            </p>
          </div>
        </div>
      </section>

      {/* "Four Ways We Automate Your Marketing" */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="Four Ways We Automate Your Marketing"
            subheading="Everything we offer, matched to where your leads are actually going cold."
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* "How We Automate Without Losing Your Brand Voice" — auto-
          scrolling carousel (right-to-left, pauses on hover) instead of a
          static accordion, so the six-step process reads as motion. */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            How We Automate Without Losing Your Brand Voice
          </h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-14">
            Our six-step process, from mapping your funnel to ongoing
            optimization.
          </p>
          <RoadmapCarousel steps={PROCESS_STEPS} />
        </div>
      </section>

      <div className="bg-black px-5">
        <div className="max-w-5xl mx-auto border-t border-white" />
      </div>

      {/* "Marketing Automation Agency" — left untouched by request. */}
      <section className="bg-black pt-20 pb-20 px-5">
        <BpoWeAre
          title="Marketing Automation Agency"
          description="BizzBuzz Creations is a marketing automation agency helping businesses across India close the follow-up gap — email, CRM, WhatsApp, and lead nurturing built into one connected system around how your customers actually behave."
          points={WE_ARE_POINTS}
        />
      </section>

      <DarkFAQSection faqs={FAQS} heading="Frequently Asked Questions" />

      {/* "Why Businesses Trust Our Automation, and Where We're Rooted" —
          heading on top, copy on the left, image on the right. */}
      <section className="relative overflow-hidden bg-black py-20">
        <div className="relative max-w-6xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
            Why Businesses Trust Our Automation, and Where We&rsquo;re
            Rooted
          </h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-12">
            What genuinely sets us apart from others and where we&rsquo;re
            actually rooted.
          </p>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <p className="text-white/70 leading-relaxed mb-4">
                We treat every automation build as accountable to real
                conversions, not workflows that exist just to look
                sophisticated. A well-run marketing automation agency
                should be judged on leads that actually convert, which is
                exactly why businesses trust us as their marketing
                automation partner of choice.
              </p>
              <p className="text-white/70 leading-relaxed">
                BizzBuzz Creations is based in Prayagraj, Uttar Pradesh — a
                city many still know as Allahabad — and that local
                grounding shapes how we approach every automation project,
                with the same standard of work whether a client is nearby
                or across the world. We build automation locally across
                Prayagraj and Allahabad, nationally across India, and
                internationally across the UK, USA, and worldwide, as a
                marketing automation agency that understands how to build
                for real business results, not just active workflows.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/why-choose-image.png"
                alt="Why businesses trust BizzBuzz Creations' automation"
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
              Ready for Marketing That Works While You Don&rsquo;t?
            </h2>
            <h3 className="text-base font-semibold text-[#40A2D8] mb-5">
              The next step, if you&rsquo;re ready to talk about what comes
              next.
            </h3>
            <p className="max-w-3xl text-white/70 mb-8">
              Whether you&rsquo;re a local business in Prayagraj, a growing
              brand anywhere else in India, or a business overseas needing
              a team that understands both automation and conversion,
              workflows are only worth what they actually generate.
              Let&rsquo;s talk about where your leads are currently going
              cold.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-black text-sm font-semibold px-7 py-3.5 rounded-full transition"
              >
                Get a Free Marketing Automation Audit
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/50 hover:bg-white/10 text-white text-sm font-semibold px-7 py-3.5 rounded-full transition"
              >
                Talk to a Marketing Automation Specialist
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
