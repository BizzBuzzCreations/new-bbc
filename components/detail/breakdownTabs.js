"use client";

import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import RichText from "@/components/ui/richText";
import Pill from "@/components/home/pill";

// Service breakdown (sub-service pages, redesign) — the page's service
// groups (6 × 8 services) as one panel instead of 6 flip cards: on desktop
// the group names are a list on the left and the chosen group's text and
// services show on the right; on phones the same markup is an accordion
// (a group's services open under its name). One markup for both, so nothing
// is duplicated, and every group's text is in the page for search (closed
// groups are just hidden). The first group starts open.
export default function BreakdownTabs({ heading, items }) {
  const [active, setActive] = useState(0);
  if (!items?.length) return null;
  const rows = items.length;

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
        <div className="reveal max-w-3xl">
          <p className="text-sm text-[#40A2D8]">What we do</p>
          <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
        </div>

        <div className="reveal mt-12 overflow-hidden rounded-3xl border border-white/10 bg-[#0b0e16] md:mt-16 md:grid md:grid-cols-[19rem_1fr]">
          {items.map((item, i) => {
            const open = i === active;
            const services = item.services || [];
            return (
              <div key={item.title} className="contents">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-expanded={open}
                  aria-controls={`breakdown-${i}`}
                  style={{ gridRow: i + 1 }}
                  className={`flex w-full items-center justify-between gap-3 border-b border-white/10 px-6 py-5 text-left text-base transition-colors md:col-start-1 md:border-r ${i === rows - 1 ? "md:border-b-0" : ""} ${
                    open ? "bg-[#0B60B0]/15 text-[#40A2D8]" : "text-white/80 hover:bg-white/[0.03] hover:text-white"
                  }`}
                >
                  <span>
                    <span className="mr-3 font-display text-sm text-white/60">{String(i + 1).padStart(2, "0")}</span>
                    {item.title}
                  </span>
                  <ChevronDown size={18} aria-hidden="true" className={`shrink-0 transition-transform md:-rotate-90 ${open ? "rotate-180 md:rotate-0 md:opacity-0" : ""}`} />
                </button>
                <div
                  id={`breakdown-${i}`}
                  role="region"
                  aria-label={item.title}
                  hidden={!open}
                  style={{ gridRow: `1 / span ${rows}` }}
                  className="border-b border-white/10 px-6 py-8 md:col-start-2 md:border-b-0 md:p-10"
                >
                  <h3 className="font-display text-2xl leading-snug text-white md:text-3xl">{item.title}</h3>
                  <RichText as="p" text={item.desc} className="mt-3 max-w-2xl text-base leading-relaxed text-white/70" />
                  {services.length > 0 && (
                    <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                      {services.map((s) => (
                        <li key={s} className="flex items-start gap-3 text-sm text-white/85">
                          <span aria-hidden="true" className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0B60B0]/25 text-[#40A2D8]">
                            <Check size={12} strokeWidth={3} />
                          </span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-8">
                    <Pill href="/contact" srText={`about ${item.title}`}>Ask about this</Pill>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
