"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import RichText from "@/components/ui/richText";

// Same manual Splide setup as the other card carousels: prev/next
// buttons (styled by .bbc-carousel in globals.css), ←/→ when focused, drag
// or swipe. It no longer scrolls on its own.
export default function RoadmapCarousel({ steps }) {
  return (
    <Splide
      options={{
        type: "loop",
        perPage: 3,
        perMove: 1,
        arrows: true,
        keyboard: "focused",
        pagination: false,
        gap: "1.5rem",
        drag: true,
        autoWidth: false,


        breakpoints: {
          1024: { perPage: 2 },
          640: { perPage: 1 },
        },
      }}
      className="bbc-carousel max-w-6xl mx-auto"
    >
      {steps.map(({ number, title, desc }) => (
        <SplideSlide key={title} className="h-auto py-2">
          <div className="group h-full flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:bg-[#0B60B0] hover:shadow-xl hover:shadow-black/40">
            <span className="inline-block self-start text-xs font-bold text-[#40A2D8] bg-white/10 rounded-full px-3 py-1 mb-4 transition-colors duration-300 group-hover:bg-white group-hover:text-[#0B60B0]">
              {number}
            </span>
            <h3 className="font-bold text-white mb-2 transition-colors duration-300">
              {title}
            </h3>
            <RichText
              as="p"
              text={desc}
              className="text-sm text-white leading-relaxed transition-colors duration-300 group-hover:text-white/85"
            />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
