"use client";

import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import RichText from "@/components/ui/richText";
import Button from "@/components/brand/button";
import SectionHead from "@/components/brand/sectionHead";

// "What we do" (rebuild): the service groups as a tab list (desktop: the
// groups listed on the left, the chosen one's detail on the right; phones:
// an accordion). Arrow keys move between the groups. `items`:
// { title, desc, services: [string] }.
export default function BreakdownTabs({ heading, items, no = "02" }) {
  const [active, setActive] = useState(0);
  if (!items?.length) return null;
  const onKey = (e) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const next = (active + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length;
    setActive(next);
    e.currentTarget.querySelectorAll("button[data-tab]")[next]?.focus();
  };

  return (
    <section className="bg-ink text-white">
      <div className="wrap py-24 md:py-36">
        <SectionHead no={no} kicker="What we do" heading={heading} size="m" />
        <div className="mt-16 grid gap-0 border-t border-white/10 md:mt-20 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4" onKeyDown={onKey}>
            {items.map((item, i) => {
              const open = i === active;
              return (
                <div key={item.title} className="border-b border-white/10">
                  <button
                    type="button"
                    data-tab
                    onClick={() => setActive(open && typeof window !== "undefined" && window.innerWidth < 1024 ? -1 : i)}
                    aria-expanded={open}
                    aria-controls={`breakdown-${i}`}
                    className={`group flex w-full items-center gap-4 py-5 text-left transition-colors ${open ? "text-white" : "text-white/55 hover:text-white"}`}
                  >
                    <span className={`kicker w-6 shrink-0 ${open ? "text-buzz" : ""}`}>{String(i + 1).padStart(2, "0")}</span>
                    <span className="flex-1 text-lg font-medium leading-snug">{item.title}</span>
                    <ChevronDown aria-hidden="true" size={18} className={`shrink-0 transition-transform lg:-rotate-90 ${open ? "rotate-180 text-buzz lg:rotate-0 lg:opacity-0" : ""}`} />
                    <span aria-hidden="true" className={`hidden h-2 w-2 rounded-full bg-buzz lg:block ${open ? "" : "opacity-0"}`} />
                  </button>
                  {/* phones: the panel opens under its button */}
                  <div className="lg:hidden" hidden={!open}>
                    <Panel item={item} id={`breakdown-m-${i}`} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="hidden lg:col-span-7 lg:col-start-6 lg:block">
            {items.map((item, i) => (
              <div key={item.title} id={`breakdown-${i}`} role="region" aria-label={item.title} hidden={i !== active} className="pt-8 motion-safe:animate-[hero-rise_0.5s_var(--ease-out-soft)_both]">
                <Panel item={item} large />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Panel({ item, large = false, id }) {
  const services = item.services || [];
  return (
    <div id={id} className={large ? "" : "pb-8"}>
      {large && <h3 className="font-display text-4xl leading-tight">{item.title}</h3>}
      <RichText as="p" text={item.desc} className={`max-w-2xl leading-relaxed text-fog ${large ? "mt-5 text-lg" : ""}`} />
      {services.length > 0 && (
        <ul className={`grid gap-x-8 sm:grid-cols-2 ${large ? "mt-10 border-t border-white/10" : "mt-6"}`}>
          {services.map((s) => (
            <li key={s} className="flex items-start gap-3 border-b border-white/10 py-3.5 text-[0.9375rem] text-white/85">
              <Check aria-hidden="true" size={16} strokeWidth={2.5} className="mt-0.5 shrink-0 text-buzz" />
              {s}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-8">
        <Button href="/contact" variant="outline" srText={`about ${item.title}`}>
          Ask about this
        </Button>
      </div>
    </div>
  );
}
