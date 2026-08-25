"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import { SERVICES } from "@/lib/industriesData";

// Continuously auto-scrolling (left to right) strip of problem -> service
// cards — same Splide + AutoScroll setup already used elsewhere on the
// site, reused here so this reads as a flowing strip instead of a static
// grid people have to scan all at once.
export default function ServiceScenariosCarousel({ items }) {
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
          speed: 0.7,
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
      {items.map(({ question, service: key, detail }, i) => {
        const service = SERVICES[key];
        const Icon = service.icon;
        return (
          <SplideSlide key={i} className="h-auto py-2">
            <Link
              href={service.href}
              className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:shadow-xl hover:shadow-black/40"
            >
              <div>
                <p className="text-white font-semibold leading-snug mb-3">
                  {question}
                </p>
                <p className="text-sm text-white/50 leading-relaxed mb-6">
                  {detail}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#40A2D8]">
                  <Icon size={16} />
                  {service.label}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-white/30 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </Link>
          </SplideSlide>
        );
      })}
    </Splide>
  );
}
