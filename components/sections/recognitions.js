"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";

// Real certifications/partnerships already vetted and used elsewhere on the
// site (the popup consultation form) — no invented awards or fabricated
// years, since BizzBuzz hasn't actually won press-level industry awards.
const RECOGNITIONS = [
  {
    org: "Clutch",
    status: "Verified Partner",
    title: "Listed among trusted digital marketing agencies on Clutch",
    badge: "/clutch.png",
    alt: "Clutch Partner",
  },
  {
    org: "Google Partner",
    status: "Certified",
    title: "Certified Google Ads & Marketing Partner",
    badge: "/CDL.png",
    alt: "Google Partner",
  },
  {
    org: "Google Analytics",
    status: "Certified",
    title: "Certified Google Analytics Partner",
    badge: "/GA.png",
    alt: "Google Analytics Partner",
  },
  {
    org: "ISO",
    status: "Certified",
    title: "Quality-certified business processes",
    badge: "/ISO.png",
    alt: "ISO Certified",
  },
];

const DEFAULT_HEADING = "Proven Expertise. Real Recognition.";

export default function Recognitions({ content }) {
  const [active, setActive] = useState(0);

  const recognitions = RECOGNITIONS.map((item) => {
    if (item.org === "Clutch")
      return { ...item, badge: content?.clutchBadgeImage || item.badge, title: content?.clutchTitle || item.title };
    if (item.org === "Google Partner")
      return { ...item, badge: content?.googleAdsBadgeImage || item.badge, title: content?.googleAdsTitle || item.title };
    if (item.org === "Google Analytics")
      return { ...item, badge: content?.googleAnalyticsBadgeImage || item.badge, title: content?.googleAnalyticsTitle || item.title };
    if (item.org === "ISO")
      return { ...item, badge: content?.isoBadgeImage || item.badge, title: content?.isoTitle || item.title };
    return item;
  });

  const current = recognitions[active];
  const eyebrow = content?.recognitionsEyebrow || "";
  const heading = content?.recognitionsHeading || DEFAULT_HEADING;
  const isDefaultHeading = heading === DEFAULT_HEADING;

  return (
    <section className="relative bg-black text-white py-24 px-6 md:px-12 overflow-hidden">

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#40A2D8] mb-4 text-center lg:text-left">
            {eyebrow}
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-12">
            <Award className="text-[#40A2D8] shrink-0" size={44} />
            <h2 className="text-4xl md:text-5xl font-bold text-center lg:text-left leading-tight">
              {isDefaultHeading ? (
                <>
                  Proven Expertise. <br className="hidden sm:block" />
                  Real Recognition.
                </>
              ) : (
                heading
              )}
            </h2>
            <Award className="text-[#40A2D8] shrink-0 scale-x-[-1]" size={44} />
          </div>

          <ul className="space-y-3">
            {recognitions.map((item, i) => (
              <li
                key={item.org}
                onMouseEnter={() => setActive(i)}
                className={`group flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6 rounded-2xl border px-6 py-5 cursor-default transition-all duration-300 ${
                  active === i
                    ? "border-[#40A2D8]/50 bg-[#0B60B0]/[0.08] shadow-lg shadow-[#0B60B0]/10"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                <span className="flex items-center gap-3 font-bold text-lg shrink-0">
                  <span
                    className={`flex items-center justify-center w-8 h-8 rounded-full shrink-0 transition-colors duration-300 ${
                      active === i ? "bg-[#0B60B0] text-white" : "bg-white/10 text-white/40"
                    }`}
                  >
                    <Trophy size={16} />
                  </span>
                  {item.org} <span className="text-white/40 font-medium">— {item.status}</span>
                </span>
                <span className="text-base text-white/70 sm:text-right leading-relaxed">
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Featured badge — grows and gets a trophy pop-in whenever a row
            above is hovered. */}
        <div className="relative flex justify-center items-center h-[340px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.org}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1.08 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-72 h-72 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center shadow-2xl"
            >
              <div
                className="absolute inset-0 rounded-3xl opacity-40"
                style={{
                  background:
                    "radial-gradient(circle at 30% 20%, rgba(64,162,216,0.3), transparent 60%)",
                }}
                aria-hidden="true"
              />
              <Image
                src={current.badge}
                alt={current.alt}
                width={170}
                height={170}
                className="relative object-contain"
              />

              <motion.div
                key={`trophy-${current.org}`}
                initial={{ opacity: 0, scale: 0.4, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15, type: "spring", stiffness: 260, damping: 18 }}
                className="absolute -top-7 -right-7 bg-[#0B60B0] text-white rounded-full p-4 shadow-xl"
              >
                <Trophy size={30} />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
