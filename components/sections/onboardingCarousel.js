"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import { Search, PenTool, Rocket, BarChart3, FileCheck2 } from "lucide-react";

const ONBOARDING_STEPS = [
  {
    step: "1 TO 2 WEEKS",
    icon: Search,
    title: "Discover & Audit",
    desc: "We review your business, competitors, and current digital presence to identify real opportunities before recommending anything.",
  },
  {
    step: "1 WEEK",
    icon: PenTool,
    title: "Strategise",
    desc: "We turn audit insights into a focused roadmap across the right channels, matched to your goals and budget.",
  },
  {
    step: "ONGOING",
    icon: Rocket,
    title: "Create & Execute",
    desc: "Campaigns, content, and websites are built and launched in phases, so results start compounding early rather than all at once.",
  },
  {
    step: "CONTINUOUS",
    icon: BarChart3,
    title: "Optimise & Scale",
    desc: "We don't stop after launch — testing, refining, and scaling run throughout the engagement, not just at the start.",
  },
  {
    step: "MONTHLY",
    icon: FileCheck2,
    title: "Report & Grow",
    desc: "You receive clear reporting on a consistent monthly cycle, with strategy calls to review what's working and what's next.",
  },
];

export default function OnboardingCarousel() {
  return (
    <Splide
      options={{
        type: "loop",
        perPage: 3,
        perMove: 1,
        arrows: false,
        pagination: false,
        gap: "1.5rem",
        drag: "free",
        focus: "center",
        pauseOnHover: true,
        pauseOnFocus: false,
        autoWidth: false,

        autoScroll: {
          speed: 0.8,
          pauseOnHover: true,
          pauseOnFocus: false,
          rewind: false,
        },

        breakpoints: {
          1024: { perPage: 2 },
          640: { perPage: 1 },
        },
      }}
      extensions={{ AutoScroll }}
      className="max-w-6xl mx-auto"
    >
      {ONBOARDING_STEPS.map(({ step, icon: Icon, title, desc }) => (
        <SplideSlide key={title} className="h-auto py-2">
          <div className="group h-full flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:shadow-xl hover:shadow-black/40">
            <span className="inline-block self-start text-xs font-bold text-[#40A2D8] bg-white/10 rounded-full px-3 py-1 mb-4">
              {step}
            </span>
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B60B0] text-white">
              <Icon size={19} />
            </div>
            <h3 className="font-bold text-white mb-2 transition-colors duration-300 group-hover:text-[#40A2D8]">
              {title}
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
