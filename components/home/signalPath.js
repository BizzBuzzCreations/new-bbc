"use client";

import { useEffect, useRef, useState } from "react";
import Kicker from "@/components/brand/kicker";

// The Signal Path (rebuild, DESIGN_DIRECTION.md §1 "show, don't claim"):
// how one enquiry travels through the pieces we build and run, so the
// visitor sees why marketing, website, CRM, AI and people belong together.
//  - Desktop (lg+, motion allowed): the section is tall and its stage pins;
//    scrolling moves through the 7 steps — the current node and the path up
//    to it light up in buzz, the text on the left follows.
//  - Phones / reduced motion: no pinning — a plain list with the whole path
//    shown lit. Content is identical.
// An illustration of the flow, labelled as such — not a client's data.
const STEPS = [
  { key: "find", label: "Found", title: "Someone searches, scrolls or asks an AI", text: "SEO, Google and Meta ads, social content and AI-search optimisation put you in front of people who are already looking.", tag: "SEO · Ads · Social" },
  { key: "site", label: "Site", title: "They land on a page built to answer them", text: "A fast site with one clear next step — call, WhatsApp, form or booking — measured from the first click.", tag: "Web development" },
  { key: "crm", label: "CRM", title: "The enquiry lands in the CRM in seconds", text: "Every lead, from every channel, in one place with its source — no spreadsheets, nothing lost in an inbox.", tag: "Praxistence CRM" },
  { key: "voice", label: "AI call", title: "An AI voice agent calls back straight away", text: "Clio AI answers questions, qualifies the lead and books a slot — and hands over to a person when it should.", tag: "Clio AI" },
  { key: "follow", label: "Follow-up", title: "Follow-ups run on their own", text: "WhatsApp and email journeys keep warm leads warm — reminders, offers, documents — triggered by what each lead did.", tag: "Marketing automation" },
  { key: "team", label: "Team", title: "People close the conversation", text: "Your sales team — or our trained BPO team — picks up qualified leads with the whole history in front of them.", tag: "BPO · Your team" },
  { key: "report", label: "Report", title: "You see what turned into revenue", text: "One report from ad spend to closed deal, so the next month's budget goes where it actually worked.", tag: "Analytics & reporting" },
];

// node positions on the diagram (viewBox 0 0 640 520)
const NODES = [
  [70, 80],
  [230, 60],
  [390, 130],
  [550, 90],
  [500, 290],
  [300, 330],
  [130, 440],
];
const PATH = `M${NODES.map(([x, y]) => `${x} ${y}`).join(" L")}`;

export default function SignalPath() {
  const wrap = useRef(null);
  const [active, setActive] = useState(STEPS.length - 1);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = wrap.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 1;
      setActive(Math.min(STEPS.length - 1, Math.floor(p * STEPS.length * 0.999)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const apply = () => {
      setPinned(mq.matches);
      if (mq.matches) {
        update();
        window.addEventListener("scroll", onScroll, { passive: true });
      } else {
        window.removeEventListener("scroll", onScroll);
        setActive(STEPS.length - 1);
      }
    };
    apply();
    mq.addEventListener("change", apply);
    return () => {
      mq.removeEventListener("change", apply);
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const lit = (i) => i <= active;
  // how much of the path is drawn: up to the current node
  const segs = NODES.slice(1).map(([x, y], i) => Math.hypot(x - NODES[i][0], y - NODES[i][1]));
  const total = segs.reduce((a, b) => a + b, 0);
  const drawn = segs.slice(0, active).reduce((a, b) => a + b, 0);

  const diagram = (
    <svg viewBox="0 0 640 520" className="h-auto w-full" role="img" aria-label="Diagram: an enquiry moves from search to the website, the CRM, an AI call-back, automated follow-up, your team and the report.">
      <defs>
        <pattern id="sp-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="640" height="520" fill="url(#sp-grid)" />
      <path d={PATH} fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" strokeDasharray="4 6" />
      <path
        d={PATH}
        fill="none"
        stroke="var(--color-buzz)"
        strokeWidth="2"
        strokeDasharray={total}
        strokeDashoffset={total - drawn}
        style={{ transition: "stroke-dashoffset 0.7s cubic-bezier(0.22,1,0.36,1)" }}
      />
      {NODES.map(([x, y], i) => (
        <g key={STEPS[i].key} style={{ transition: "opacity 0.5s" }} opacity={lit(i) ? 1 : 0.8}>
          {i === active && pinned && <circle cx={x} cy={y} r="26" fill="none" stroke="var(--color-buzz)" strokeOpacity="0.35" className="motion-safe:animate-[sp-ping_1.6s_ease-out_infinite]" style={{ transformOrigin: `${x}px ${y}px` }} />}
          <circle cx={x} cy={y} r="16" fill={lit(i) ? "var(--color-buzz)" : "#1a1a1d"} stroke={lit(i) ? "var(--color-buzz)" : "rgba(255,255,255,0.25)"} />
          <text x={x} y={y + 4} textAnchor="middle" fontSize="11" fontFamily="var(--font-dm-mono)" fill={lit(i) ? "#1c1700" : "rgba(255,255,255,0.85)"}>
            {String(i + 1).padStart(2, "0")}
          </text>
          <text x={x} y={i === 3 ? y - 28 : y + 40} textAnchor="middle" fontSize="13" fontFamily="var(--font-dm-mono)" letterSpacing="1" fill={lit(i) ? "#fff" : "rgba(255,255,255,0.78)"}>
            {STEPS[i].label.toUpperCase()}
          </text>
        </g>
      ))}
    </svg>
  );

  return (
    <section aria-labelledby="signal-heading" className="relative bg-ink text-white">
      <div ref={wrap} className={pinned ? "h-[420vh]" : ""}>
        <div className={pinned ? "sticky top-0 flex h-screen items-center overflow-hidden" : ""}>
          <div className="wrap grid gap-12 py-24 lg:grid-cols-12 lg:gap-10 lg:py-0">
            <div className="lg:col-span-5">
              <Kicker no="03">How the pieces connect</Kicker>
              <h2 id="signal-heading" className="font-display mt-6 text-[clamp(2.4rem,4.6vw,4.4rem)] leading-[0.96]">
                One enquiry, <span className="font-accent">seven</span> hand-offs. None dropped.
              </h2>
              {pinned ? (
                <div className="mt-12 min-h-[15rem]" aria-live="polite">
                  <p className="kicker text-buzz">
                    {String(active + 1).padStart(2, "0")} / {String(STEPS.length).padStart(2, "0")} · {STEPS[active].tag}
                  </p>
                  <p key={STEPS[active].key} className="font-display mt-4 text-3xl leading-tight motion-safe:animate-[hero-rise_0.6s_var(--ease-out-soft)_both]">
                    {STEPS[active].title}
                  </p>
                  <p className="mt-4 max-w-md text-lg leading-relaxed text-fog">{STEPS[active].text}</p>
                  <div className="mt-8 flex gap-1.5" aria-hidden="true">
                    {STEPS.map((s, i) => (
                      <span key={s.key} className={`h-1 flex-1 rounded-full transition-colors duration-500 ${lit(i) ? "bg-buzz" : "bg-white/15"}`} />
                    ))}
                  </div>
                </div>
              ) : (
                <p className="mt-6 max-w-md text-lg leading-relaxed text-fog">Most businesses buy these pieces from different suppliers and lose leads in the gaps. We build and run them as one system.</p>
              )}
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-[20px] border border-white/10 bg-ink-2 p-4 md:p-8">
                {diagram}
                <p className="kicker mt-4 text-fog">Illustration · how our systems hand an enquiry along</p>
              </div>
            </div>
            {!pinned && (
              <ol className="grid gap-0 border-t border-white/10 lg:col-span-12">
                {STEPS.map((s, i) => (
                  <li key={s.key} className="grid gap-2 border-b border-white/10 py-6 md:grid-cols-12 md:gap-10">
                    <span className="kicker text-buzz md:col-span-2">
                      {String(i + 1).padStart(2, "0")} · {s.label}
                    </span>
                    <p className="font-display text-xl md:col-span-4">{s.title}</p>
                    <p className="leading-relaxed text-fog md:col-span-6">
                      {s.text} <span className="kicker ml-1 text-white/50">{s.tag}</span>
                    </p>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
