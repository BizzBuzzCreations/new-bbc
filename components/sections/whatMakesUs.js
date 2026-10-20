import React from "react";
import Link from "next/link";
import { Search, PenTool, Rocket, BarChart3, ArrowRight } from "lucide-react";
import RichText from "@/components/ui/richText";
import ScrollSteps from "@/components/ui/scrollSteps";
import { resolveIcon } from "@/lib/iconOptions";

// Same 4 steps, same copy — laid out as a plain horizontal stepper (each
// step in its own grid column, connected by a static arrow between
// columns) instead of the old absolutely-positioned zigzag, which let the
// curved connector lines drift into and overlap the description text
// below neighboring cards on real screen sizes. A grid can't do that —
// every step's text stays fully inside its own column, arrows stay in
// theirs. All four number badges now share the same neutral styling as
// steps 2 & 3 used to have — the first/last "accent" bookend treatment
// was dropped by request, so `accent` stays false on every step, but the
// flag (and the CSS branch reading it below) is left in place in case a
// future step ever needs the highlighted badge back.
const steps = [
  {
    icon: Search,
    title: "Free Consultation & Business Audit",
    description:
      "We study your business, competitors, and current online presence to spot quick wins and growth gaps.",
    accent: false,
  },
  {
    icon: PenTool,
    title: "Custom Strategy Design",
    description:
      "We build a data-backed digital marketing plan — SEO, ads, content, or all three — matched to your goals and budget.",
    accent: false,
  },
  {
    icon: Rocket,
    title: "Campaign Execution",
    description:
      "Our team launches and manages your campaigns across Google, Meta, and search, optimized for real results, not vanity metrics.",
    accent: false,
  },
  {
    icon: BarChart3,
    title: "Reporting & Continuous Optimization",
    description:
      "You get clear monthly reports, and we refine every campaign using performance data to keep growth compounding.",
    accent: false,
  },
];

export default function WhatMAkesUs({ content, className = "" }) {
  const heading = content?.processHeading || "Our Process";
  const subtext = content?.processSubtext || "A Proven Framework for Measurable Digital Growth.";

  // Icon + accent stay fixed (structural); title/description come from
  // the saved override, matched by position.
  const displaySteps = steps.map((step, i) => {
    const override = content?.processSteps?.[i];
    if (!override) return step;
    // `icon` is only editable on the Outside Location page (its registry
    // adds the field); elsewhere it's never saved, so the built-in wins.
    const { icon, ...text } = override;
    return { ...step, ...text, icon: resolveIcon(icon, step.icon) };
  });

  return (
    <div className={`relative overflow-hidden bg-black container px-4 py-14 md:py-20 mx-auto flex flex-col justify-center gap-5 items-center max-w-none ${className}`}>



      <div className="relative text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 max-w-4xl text-white">
          {heading}
        </h2>
        <p className="text-lg text-white max-w-2xl mb-10">
          <b className="text-[#40A2D8]">{subtext}</b>
        </p>
      </div>

      {/* Desktop: horizontal stepper — every step lives in its own grid
          column (icon, card, description all inside one bordered panel),
          so nothing can ever drift over neighboring text. All four sit
          on one line at the same height (the old up/down zigzag looked
          uneven), with the arrows centred between them. Whole card
          lights up blue on hover — not just the title bar.
          Scrolling through fills the blue line behind the row and lights
          each step up as the line reaches it (ScrollSteps). */}
      <ScrollSteps className="relative w-full flex flex-col items-center">
      <div className="relative hidden md:grid w-full max-w-6xl grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-stretch gap-x-2">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-[10%] top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-white/10">
          <div
            className="h-full origin-left rounded-full bg-gradient-to-r from-[#0B60B0] to-[#40A2D8] transition-transform duration-200 ease-out"
            style={{ transform: "scaleX(var(--steps-progress, 0))" }}
          />
        </div>
        {displaySteps.map((step, i) => {
          const Icon = step.icon;
          const isLast = i === steps.length - 1;

          return (
            <React.Fragment key={step.title}>
              <div
                data-step={i}
                data-steps={displaySteps.length}
                data-active="false"
                className={`group relative z-10 flex flex-col items-center text-center rounded-2xl border border-white/10 bg-[#0a0a0a] px-4 pt-6 pb-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#0B60B0] hover:bg-[#0B60B0] hover:shadow-xl hover:shadow-[#0B60B0]/30 data-[active=true]:border-[#40A2D8]/70 data-[active=true]:shadow-lg data-[active=true]:shadow-[#0B60B0]/25 scale-[0.96] data-[active=true]:scale-100 motion-reduce:scale-100`}
              >
                <span
                  className={`absolute -top-4 right-4 flex items-center justify-center w-7 h-7 rounded-full text-[11px] font-bold transition-colors duration-300 ${
                    step.accent
                      ? "bg-[#40A2D8] text-white"
                      : "bg-white/10 text-white group-data-[active=true]:bg-[#40A2D8] group-hover:bg-white group-hover:text-[#0B60B0]"
                  }`}
                >
                  {i + 1}
                </span>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-[#40A2D8] mb-4 transition-all duration-500 group-data-[active=true]:bg-[#0B60B0]/40 group-data-[active=true]:text-white scale-90 group-data-[active=true]:scale-100 motion-reduce:scale-100 group-hover:bg-white group-hover:text-[#0B60B0] group-hover:scale-110">
                  <Icon size={20} />
                </div>
                <h3 className="font-bold text-sm leading-snug text-white mb-2">
                  {step.title}
                </h3>
                <RichText
                  as="p"
                  text={step.description}
                  className="text-xs text-white leading-relaxed transition-colors duration-300 group-hover:text-white/85"
                />
              </div>

              {!isLast && (
                <div className="group relative z-10 flex items-center justify-center" aria-hidden="true" data-step={i + 0.5} data-steps={displaySteps.length} data-active="false">
                  {/* fills blue once the progress line passes it */}
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black border border-[#40A2D8]/50 text-[#40A2D8] shrink-0 transition-colors duration-500 group-data-[active=true]:bg-[#0B60B0] group-data-[active=true]:border-[#40A2D8] group-data-[active=true]:text-white">
                    <ArrowRight size={14} />
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Mobile / tablet: 2-per-row grid — same card + hover treatment */}
      <div className="relative w-full max-w-xl grid grid-cols-2 gap-4 md:hidden">
        {displaySteps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div
              key={step.title}
              data-step={i}
              data-steps={displaySteps.length}
              data-active="false"
              className="group relative flex flex-col items-center text-center rounded-2xl border border-white/10 bg-white/[0.03] px-4 pt-7 pb-5 transition-all duration-500 hover:border-[#0B60B0] hover:bg-[#0B60B0] hover:shadow-xl hover:shadow-[#0B60B0]/30 data-[active=true]:border-[#40A2D8]/70 data-[active=true]:shadow-lg data-[active=true]:shadow-[#0B60B0]/25 scale-[0.96] data-[active=true]:scale-100 motion-reduce:scale-100"
            >
              <span className="absolute -top-3 right-4 flex items-center justify-center w-7 h-7 rounded-full bg-white/10 text-[11px] font-bold text-white transition-colors duration-500 group-data-[active=true]:bg-[#40A2D8]">
                {i + 1}
              </span>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3 bg-white/10 text-[#40A2D8] transition-all duration-500 group-data-[active=true]:bg-[#0B60B0]/40 group-data-[active=true]:text-white scale-90 group-data-[active=true]:scale-100 motion-reduce:scale-100 group-hover:bg-white group-hover:text-[#0B60B0]">
                <Icon size={20} />
              </div>
              <h3 className="font-semibold text-sm mb-2 text-white">{step.title}</h3>
              <RichText
                as="p"
                text={step.description}
                className="text-xs text-white transition-colors duration-300 group-hover:text-white/85"
              />
            </div>
          );
        })}
      </div>

      </ScrollSteps>

      <Link href="/contact" className="relative inline-block mt-10">
        <button
          className="animated-button mx-auto"
          style={{ backgroundColor: "#0B60B0" }}
        >
          <svg
            viewBox="0 0 24 24"
            className="arr-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
          <span className="text">Book Your Free Audit</span>
          <span className="circle"></span>
          <svg
            viewBox="0 0 24 24"
            className="arr-1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </button>
      </Link>
    </div>
  );
}
