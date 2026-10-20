"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import RichText from "@/components/ui/richText";

// Numbered-card carousel ("What You Get") — same manual Splide setup as
// the other card carousels: prev/next buttons, ←/→ when focused, drag or
// swipe. It no longer scrolls on its own.
export default function NumberedDeliverablesCarousel({ items }) {
  return (
    <Splide
      options={{
        type: "loop",
        perPage: 4,
        perMove: 1,
        arrows: true,
        keyboard: "focused",
        pagination: false,
        gap: "1.25rem",
        drag: true,
        autoWidth: false,


        breakpoints: {
          1024: { perPage: 3 },
          768: { perPage: 2 },
          640: { perPage: 1 },
        },
      }}
      className="bbc-carousel max-w-6xl mx-auto"
    >
      {items.map(({ number, title, desc }) => (
        <SplideSlide key={number} className="h-auto py-2">
          <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:shadow-xl hover:shadow-black/40">
            <p className="text-2xl font-bold text-[#40A2D8] mb-3">{number}</p>
            <h3 className="font-bold text-white mb-2 text-sm">{title}</h3>
            <RichText as="p" text={desc} className="text-sm text-white leading-relaxed" />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
