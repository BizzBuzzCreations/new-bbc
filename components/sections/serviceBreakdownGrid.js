"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Each card starts collapsed showing just the title + description. Clicking
// "Know Our Services" expands that one card to reveal its full service-tag
// list below — the card grows to fit, the rest of the grid is untouched.
export default function ServiceBreakdownGrid({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    // items-start so expanding one card's height doesn't stretch its
    // grid-row neighbor to match — without it, CSS grid defaults to
    // stretching every item in a row to the tallest one, making the card
    // next to an opened one look like it silently changed too.
    <div className="grid sm:grid-cols-2 gap-5 items-start">
      {items.map(({ number, title, desc, ctaText, services }, i) => {
        const open = openIndex === i;
        return (
          <div
            key={title}
            className="rounded-2xl p-6 border border-white/10 bg-white/[0.03] transition-colors duration-300"
          >
            <p className="text-xs font-bold text-[#40A2D8] mb-2">{number}</p>
            <h3 className="font-bold text-lg text-white mb-3">{title}</h3>
            <p className="text-sm leading-relaxed text-white/60 mb-5">
              {desc}
            </p>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#40A2D8] hover:text-white transition-colors duration-200"
            >
              {ctaText || "Know Our Services"}
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              />
            </button>

            {open && (
              // 4-across structured grid (4 on top, 4 below, 4 below
              // that for a 12-service list) instead of loose flex-wrap
              // pills, so the tags line up in even rows.
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-5 pt-5 border-t border-white/10">
                {services.map((service) => (
                  <span
                    key={service}
                    className="flex items-center justify-center text-center min-h-[52px] text-xs font-medium text-white/70 bg-white/5 border border-white/10 rounded-lg px-3 py-2 leading-snug transition-colors duration-200 hover:bg-[#0B60B0] hover:border-[#0B60B0] hover:text-white cursor-default"
                  >
                    {service}
                  </span>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
