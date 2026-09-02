import Link from "next/link";
import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import RoadmapCarousel from "@/components/sections/roadmapCarousel";
import BpoWeAre from "@/components/sections/bpoWeAre";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import { Bot, PhoneCall, Workflow, UserCheck, Clock, FileText } from "lucide-react";

export const metadata = {
  title: "Top BPO & Outsourcing Company | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a BPO and outsourcing company providing call center, automation, and support services worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/bpo-services",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Bot,
    heading: "AI-Powered BPO & Call Center Solutions",
    description:
      "As an ai powered call center company, we blend AI voice agents with trained human agents, delivering 24/7 coverage without 24/7 headcount costs.",
    href: "/bpo-services/ai-powered-bpo-call-center-solutions",
  },
  {
    icon: PhoneCall,
    heading: "Inbound & Outbound Call Center Services",
    description:
      "As a call center outsourcing company, we handle inbound support and outbound sales calling professionally, so missed calls stop costing you customers.",
    href: "/bpo-services/inbound-outbound-call-center-services",
  },
  {
    icon: Workflow,
    heading: "Business Process Automation Services",
    description:
      "As a business process automation company, we eliminate repetitive manual work through workflow automation and RPA, freeing your team for work that needs them.",
    href: "/bpo-services/business-process-automation-services",
  },
  {
    icon: UserCheck,
    heading: "Virtual Assistant & Startup Outsourcing",
    description:
      "As a virtual assistant agency, we provide dedicated, trained support for admin, ecommerce, and customer communication, matched to your specific startup needs.",
    href: "/bpo-services/virtual-assistant-startup-outsourcing",
  },
  {
    icon: Clock,
    heading: "24/7 & E-commerce Customer Support",
    description:
      "As an ecommerce customer support outsourcing partner, we provide genuine round-the-clock coverage across chat, email, and social, not just business-hours support.",
    href: "/bpo-services/24-7-ecommerce-customer-support",
  },
  {
    icon: FileText,
    heading: "Data Entry & Back-Office Outsourcing",
    description:
      "As a data entry outsourcing company, we handle bulk data processing and back-office work accurately at volume, without you hiring an in-house team.",
    href: "/bpo-services/data-entry-back-office-outsourcing",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Business & Volume Discovery",
    desc: "We start by understanding your current call, support, or data volume, and what's genuinely taking up your team's time.",
  },
  {
    number: "02",
    title: "Process & Requirements Assessment",
    desc: "We assess your specific processes and requirements, identifying exactly what needs to be handled and how.",
  },
  {
    number: "03",
    title: "Team & System Setup",
    desc: "We set up the team, systems, and any automation required, integrated with your existing tools.",
  },
  {
    number: "04",
    title: "Training & Integration",
    desc: "We train the team on your specific business, products, and policies, ensuring accurate, on-brand support.",
  },
  {
    number: "05",
    title: "Launch & Initial Monitoring",
    desc: "We launch with close monitoring in the early weeks, refining processes based on real interactions.",
  },
  {
    number: "06",
    title: "Ongoing Reporting & Support",
    desc: "We provide regular reporting and continued support as your volume and requirements evolve.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Trained, Dedicated Teams",
    description:
      "Every account with our BPO company gets agents trained specifically on your scripts, tone, and product, not a generic script read out from a random floor.",
  },
  {
    number: "002",
    title: "Transparent Reporting",
    description:
      "Our call center outsourcing services include weekly performance reporting and call recordings on request, so you always know what's happening on your account, not just a monthly summary.",
  },
  {
    number: "003",
    title: "Data Security First",
    description:
      "Every business process outsourcing engagement starts with an NDA before any project details or access are shared, with account access scoped to what's needed and handling built around India's DPDP Act, 2023.",
  },
  {
    number: "004",
    title: "AI-Assisted, Human-Led",
    description:
      "As an ai powered bpo and customer service outsourcing partner, we use AI only where it genuinely helps, routing, transcription, first responses, while trained agents handle everything that needs real judgment.",
  },
  {
    number: "005",
    title: "Scalable Engagement",
    description:
      "Our outsourcing services scale with your business, not ahead of it, start with what you need today and add capacity as your workload actually grows.",
  },
  {
    number: "006",
    title: "One Direct Point of Contact",
    description:
      "As an outsourced customer service company, we don't run ticket queues for active clients, you reach your point of contact directly by phone or email, not a rotating cast of agents.",
  },
];

const FAQS = [
  {
    question: "How much does BPO and outsourcing cost in India?",
    answer:
      "Cost depends on volume, service type, and coverage hours needed — call handling costs differently than data entry or virtual assistant support. We scope pricing after understanding your specific requirements, rather than a flat rate upfront.",
  },
  {
    question: "Is our data and customer information kept secure?",
    answer:
      "Yes, we follow proper data security and confidentiality practices across every service, treating this as a standard requirement rather than an optional add-on.",
  },
  {
    question: "How do you ensure quality when work is outsourced?",
    answer:
      "We monitor quality through training, call and interaction review, and regular reporting, adjusting processes based on real performance rather than assuming quality without verification.",
  },
  {
    question: "Can support scale up or down as our needs change?",
    answer:
      "Yes, flexible scaling is built into how we work, whether that's seasonal call volume, growing data entry needs, or expanding virtual assistant hours.",
  },
  {
    question: "Which BPO service actually fits what my business needs?",
    answer:
      "It depends on where you're losing the most time — calls, support tickets, manual data, or admin work. We help identify this during your initial consultation.",
  },
  {
    question: "How do you handle communication if something goes wrong?",
    answer:
      "We flag issues promptly with clear documentation, keeping you informed rather than letting problems go unnoticed until they become bigger issues.",
  },
];

export default function BPO() {
  return (
    <>
      <BpoHero
        heading="BPO Outsourcing That Adds Support, Not Payroll"
        description="BPO and outsourcing services built to scale your support and operations without scaling headcount, for businesses in Prayagraj, across India and worldwide."
        img="/BPO service.png"
        ctaText="Get a Free BPO Consultation"
      />

      {/* "Outsourcing Built to Scale You, Not Slow You Down" — dark
          section, glow accents behind the copy so the black background
          doesn't feel flat/empty. */}
      <section className="relative overflow-hidden bg-black py-20">

        <div className="relative flex lg:flex-row flex-col px-5 lg:gap-20 gap-10 justify-center items-center max-w-6xl mx-auto">
          {/* /bpo.jpg doesn't exist in /public — was rendering as a
              permanently broken image icon. Swapped for a real photo. */}
          <div className="hidden lg:block relative w-full lg:w-[440px] aspect-[4/5] shrink-0 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/image-1.jpg"
              alt="BizzBuzz Creations support agent handling client work"
              fill
              sizes="440px"
              className="object-cover"
            />
            {/* Dotted texture overlay — matches the hero treatment */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
              aria-hidden="true"
            />
            {/* Gradient fade — matches the hero treatment */}
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
              Outsourcing Built to Scale You, Not Slow You Down
            </h2>
            <h3 className="text-base font-semibold text-[#40A2D8] mb-4">
              Who we support, and why outsourcing should scale you, not
              slow you down.
            </h3>
            {/* Mobile-only — image between the tagline and the
                paragraphs; desktop shows its own copy on the left via
                lg:flex-row above. */}
            <div className="lg:hidden relative w-full max-w-sm mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-xl mb-6">
              <Image
                src="/image-1.jpg"
                alt="BizzBuzz Creations support agent handling client work"
                fill
                sizes="100vw"
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
            <p className="text-white/70 leading-relaxed mb-4">
              Missed calls, overwhelmed support inboxes, and manual data
              entry are common outcomes of growth outpacing internal
              capacity. At BizzBuzz Creations, we run BPO and outsourcing
              judged on how much it genuinely takes off your plate, not
              just headcount added elsewhere. Whether you&rsquo;re a local
              business in Prayagraj looking for a call center outsourcing
              company near me, a brand elsewhere in India searching for a
              bpo company that understands your specific volume, or a
              startup needing virtual assistant services without hiring
              in-house, our team builds support tailored to how your
              business actually operates.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a full-service BPO company based in Prayagraj,
              proudly serving clients locally across Allahabad and Uttar
              Pradesh, nationally across India, and internationally across
              the UK, USA, and worldwide. From call handling and
              automation to virtual assistants and back-office work, we
              handle the full outsourcing stack so you&rsquo;re not
              coordinating five different vendors yourself.
            </p>
          </div>
        </div>
      </section>

      {/* "Six Ways We Support Your Operations" — fanned card deck over a
          half-circle badge, same dark treatment, continuous with the
          section above. */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="Six Ways We Support Your Operations"
            subheading="Everything we offer, matched to what's actually taking up your team's time."
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* "How We Take Work Off Your Plate" — auto-scrolling carousel
          (right-to-left, pauses on hover) instead of a static accordion,
          so the six-step process reads as motion. */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            How We Take Work Off Your Plate
          </h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-14">
            Our six-step process, from understanding your volume to
            ongoing support.
          </p>
          <RoadmapCarousel steps={PROCESS_STEPS} />
        </div>
      </section>

      {/* Divider, contained to content width (not edge-to-edge) so the
          two black sections still read as separate. */}
      <div className="bg-black px-5">
        <div className="max-w-5xl mx-auto border-t border-white" />
      </div>

      <section className="bg-black pt-20 pb-20 px-5">
        <BpoWeAre
          title="How We Run Every Outsourced Account"
          description="The specifics behind our BPO outsourcing and customer support delivery, not vague promises."
          points={WE_ARE_POINTS}
        />
      </section>

      <DarkFAQSection faqs={FAQS} heading="Frequently Asked Questions" />

      {/* "Why Businesses Trust Us With Their Operations, and Where We're
          Rooted" — heading on top, copy on the left, image on the right. */}
      <section className="relative overflow-hidden bg-black py-20">
        <div className="relative max-w-6xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
            Why Businesses Trust Us With Their Operations, and Where
            We&rsquo;re Rooted
          </h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-12">
            What genuinely sets us apart from others and where we&rsquo;re
            actually rooted.
          </p>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              {/* /why-choose-image.png doesn't exist in /public — was
                  rendering as a broken image icon. Swapped for a real
                  photo, and duplicated (mobile only) ahead of the
                  paragraphs; desktop keeps its own copy in the second
                  grid column below. */}
              <div className="md:hidden relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg mb-6">
                <Image
                  src="/image-2.jpg"
                  alt="Why businesses trust BizzBuzz Creations with their operations"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <p className="text-white/70 leading-relaxed mb-4">
                We treat every engagement as an extension of your own
                team, not a distant vendor relationship with no real
                accountability. A well-run BPO company should be judged on
                how much time and stress it genuinely removes, which is
                exactly why businesses trust us as their outsourcing
                partner of choice.
              </p>
              <p className="text-white/70 leading-relaxed">
                BizzBuzz Creations is based in Prayagraj, Uttar Pradesh — a
                city many still know as Allahabad — and that local
                grounding shapes how we approach every engagement, with
                the same standard of work whether a client is nearby or
                across the world. We support operations locally across
                Prayagraj and Allahabad, nationally across India, and
                internationally across the UK, USA, and worldwide, as a
                BPO company that understands how to build for real
                business results, not just added capacity.
              </p>
            </div>
            <div className="hidden md:block relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/image-2.jpg"
                alt="Why businesses trust BizzBuzz Creations with their operations"
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
              Ready to Scale Without Scaling Headcount?
            </h2>
            <h3 className="text-base font-semibold text-[#40A2D8] mb-5">
              The next step, if you&rsquo;re ready to talk about what comes
              next.
            </h3>
            <p className="max-w-3xl text-white/70 mb-8">
              Whether you&rsquo;re a local business in Prayagraj, a growing
              company anywhere else in India, or a business overseas
              needing a partner that understands both cost and quality,
              outsourcing is only worth what it actually takes off your
              plate. Let&rsquo;s talk about what&rsquo;s currently taking
              up too much of your time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-black text-sm font-semibold px-7 py-3.5 rounded-full transition"
              >
                Get a Free BPO Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/50 hover:bg-white/10 text-white text-sm font-semibold px-7 py-3.5 rounded-full transition"
              >
                Talk to a BPO Solutions Specialist
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
