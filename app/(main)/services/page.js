import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  Search,
  PenTool,
  Rocket,
  BarChart3,
  Users,
  ShieldCheck,
  FileSignature,
  BarChart2,
  Layers,
  Unlock,
} from "lucide-react";
import CTA from "@/components/sections/CTA";
import Particles from "@/components/ui/Particles";
import ServiceScenariosCarousel from "@/components/sections/serviceScenariosCarousel";
import { SERVICES } from "@/lib/industriesData";

// Real, short descriptions already used elsewhere on the site (the
// homepage's Categories showcase) — reused here rather than invented,
// so this index and that widget never say different things about the
// same service.
const SERVICE_DETAILS = {
  seo: "On-page fixes, technical audits, content, and link building focused on rankings that actually convert — not just traffic for the sake of it.",
  smm: "Content calendars, community management, and paid social campaigns across Instagram, Facebook, and LinkedIn built around your brand voice.",
  paidAds: "Google Ads and paid social campaigns built for ROAS, with transparent budgets and reporting — never a black box.",
  webDev: "Fast, responsive websites and web apps built on modern stacks, handed over with full ownership — no vendor lock-in.",
  bpo: "Trained support teams handling customer queries, order support, and back-office work so your core team can focus on growth.",
  ai: "AI chatbots, workflow copilots, and custom automations that cut manual work without replacing the judgment calls that need a human.",
  automation: "Email sequences, CRM workflows, and lifecycle automations that keep leads warm and follow-ups consistent, on autopilot.",
  consultancy: "Workshops, audits, and roadmaps for teams that need a clear strategic direction before committing budget to execution.",
};

// Same 4-step process already established on the homepage ("Our Process")
// — reused verbatim rather than inventing a different process for this
// page, so the two never contradict each other.
const PROCESS_STEPS = [
  {
    icon: Search,
    title: "Free Consultation & Business Audit",
    description:
      "We study your business, competitors, and current online presence to spot quick wins and growth gaps.",
  },
  {
    icon: PenTool,
    title: "Custom Strategy Design",
    description:
      "We build a data-backed digital marketing plan — SEO, ads, content, or all three — matched to your goals and budget.",
  },
  {
    icon: Rocket,
    title: "Campaign Execution",
    description:
      "Our team launches and manages your campaigns across Google, Meta, and search, optimized for real results, not vanity metrics.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Continuous Optimization",
    description:
      "You get clear monthly reports, and we refine every campaign using performance data to keep growth compounding.",
  },
];

// Real, company-wide facts about how an engagement actually works —
// already established elsewhere on the site (industry pages, how-we-work)
// — reused here instead of a fabricated testimonial/stat block.
const ENGAGEMENT_FEATURES = [
  {
    icon: Users,
    title: "Free Consultation First",
    desc: "Every engagement starts with a free consultation — no fixed package, just what your business actually needs.",
  },
  {
    icon: Unlock,
    title: "No Vendor Lock-In",
    desc: "Your Google Ads, Analytics, and website accounts stay owned by you, always.",
  },
  {
    icon: FileSignature,
    title: "NDA Available",
    desc: "An NDA is available before any project details or account access are shared.",
  },
  {
    icon: BarChart2,
    title: "Transparent Reporting",
    desc: "Clear, regular reporting — you always know what's happening and why.",
  },
  {
    icon: ShieldCheck,
    title: "Scoped, Careful Access",
    desc: "Access to your accounts is scoped to only what's needed for the work, nothing more.",
  },
  {
    icon: Layers,
    title: "Combined or Standalone",
    desc: "Take one service or several — every engagement is built around your actual goals, not a fixed bundle.",
  },
];

// Helps a visitor self-select a service based on their actual problem,
// rather than making them guess from a list of 8 labels.
const SERVICE_SCENARIOS = [
  {
    question: "Not showing up when people search for you?",
    service: "seo",
  },
  {
    question: "Getting traffic, but not enough leads or sales?",
    service: "paidAds",
  },
  {
    question: "Need a website that actually converts visitors?",
    service: "webDev",
  },
  {
    question: "Drowning in customer calls and queries?",
    service: "bpo",
  },
  {
    question: "Repeating the same manual work every week?",
    service: "automation",
  },
  {
    question: "Need a clear strategy before spending on execution?",
    service: "consultancy",
  },
];

export const metadata = {
  title: "Our Services | BizzBuzz Creations",
  description:
    "Digital marketing, BPO, web development, AI solutions, marketing automation, and business consultancy — explore every service BizzBuzz Creations offers.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/services",
  },
};

function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <Link
      href={service.href}
      className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:bg-[#0B60B0] hover:shadow-xl hover:shadow-[#0B60B0]/20"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-[#40A2D8] transition-colors duration-300 group-hover:bg-white group-hover:text-[#0B60B0]">
          <Icon size={22} />
        </span>
        <ArrowUpRight
          size={18}
          className="text-white/30 group-hover:text-white transition-colors"
        />
      </div>
      <h3 className="font-bold text-white mb-2">{service.label}</h3>
      <p className="text-sm text-white/60 leading-relaxed line-clamp-3 transition-colors duration-300 group-hover:text-white/85">
        {SERVICE_DETAILS[service.key]}
      </p>
    </Link>
  );
}

export default function ServicesIndexPage() {
  const services = Object.values(SERVICES);

  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-24 md:pt-28 pb-20 px-6 md:px-12 lg:px-24 text-white"
        style={{ background: "radial-gradient(circle at top, #0d1b2e, #000000)" }}
      >
        <div
          className="absolute top-10 -right-24 w-[420px] h-[420px] rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ background: "radial-gradient(circle, #0B60B0, transparent 70%)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 -left-24 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #40A2D8, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-1.5 text-sm text-white/50 mb-6">
              <Link href="/" className="hover:text-[#40A2D8] transition">
                Home
              </Link>
              <ChevronRight size={14} />
              <span className="font-semibold text-[#40A2D8]">Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Everything You Need to Grow, Under One Roof
            </h1>
            <p className="text-white/70 leading-relaxed mb-9 max-w-lg">
              From getting found in search to handling the calls that come
              from it — BizzBuzz Creations covers the full stack of digital
              growth, so you're not juggling five different vendors.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0B60B0] hover:bg-[#0d72cf] text-white text-sm font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-[#0B60B0]/30 transition"
            >
              Get Started
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Real services, laid out as a small floating grid instead of a
              fabricated 3D render */}
          <div className="relative hidden lg:grid grid-cols-3 gap-4">
            {services.slice(0, 6).map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.key}
                  className={`flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-sm ${
                    i % 2 === 0 ? "translate-y-3" : "-translate-y-3"
                  }`}
                  style={{ aspectRatio: "1 / 1" }}
                >
                  <Icon size={28} className="text-[#40A2D8]" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="relative bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10 overflow-hidden">
        {/* Same animated particle backdrop used on the contact page */}
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <Particles
            particleColors={["#40A2D8", "#0B60B0", "#8fd0f2", "#ffffff"]}
            particleCount={200}
            particleSpread={14}
            speed={0.08}
            particleBaseSize={110}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-3">
            See Our All Services
          </h2>
          <p className="text-center text-white/60 max-w-xl mx-auto mb-14">
            Pick a service below to see how we approach it — or combine a few
            for a full-funnel engagement.
          </p>

          {/* 3 / 2 / 3 layout — the middle row's 2 cards sit centered
              instead of trailing off to one side. */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.slice(0, 3).map((service) => (
                <ServiceCard key={service.key} service={service} />
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {services.slice(3, 5).map((service) => (
                <ServiceCard key={service.key} service={service} />
              ))}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.slice(5, 8).map((service) => (
                <ServiceCard key={service.key} service={service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What every engagement includes — real, company-wide facts */}
      <section className="bg-[#050505] py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#40A2D8] text-center mb-3">
            How We Work
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
            What Every Engagement Includes
          </h2>
          <p className="text-white/60 text-center max-w-xl mx-auto mb-14 leading-relaxed">
            The same standards we hold ourselves to, no matter which service
            or combination of services you pick.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ENGAGEMENT_FEATURES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:bg-[#0B60B0] hover:shadow-xl hover:shadow-[#0B60B0]/20"
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

      {/* Not sure where to start — self-select by problem, flowing carousel */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto mb-14 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#40A2D8] mb-3">
            Not Sure Where to Start?
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Find the Right Service for Your Problem
          </h2>
          <p className="text-white/60 max-w-xl mx-auto leading-relaxed">
            Most businesses don't walk in asking for "SEO" or "marketing
            automation" — they walk in with a problem. Skip the guesswork:
            pick whichever sounds like you, and we'll point you to the
            service actually built for it.
          </p>
        </div>

        <ServiceScenariosCarousel
          items={SERVICE_SCENARIOS.map(({ question, service: key }) => ({
            question,
            service: key,
            detail: SERVICE_DETAILS[key],
          }))}
        />
      </section>

      {/* Process */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-3">
            Proven Process for Smarter Growth
          </h2>
          <p className="text-center text-white/60 max-w-xl mx-auto mb-14">
            We simplify your growth journey, so you can focus on your
            business, not the process.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:bg-[#0B60B0] hover:shadow-xl hover:shadow-[#0B60B0]/20"
              >
                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 text-[#40A2D8] mb-4 transition-colors duration-300 group-hover:bg-white group-hover:text-[#0B60B0]">
                  <Icon size={20} />
                </span>
                <h3 className="font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-white/60 leading-relaxed transition-colors duration-300 group-hover:text-white/85">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
