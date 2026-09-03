"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Users, Briefcase, ArrowRight } from "lucide-react";
import Particles from "@/components/ui/Particles";

// Quick-link buttons for the left panel, and the "Who We Are" blurb for
// the right panel — real destinations already on the site, not filler.
const QUICK_LINKS = [
  { icon: Briefcase, label: "Our Services", href: "/services" },
  { icon: Users, label: "Meet The Team", href: "/our-team" },
  { icon: Search, label: "How We Work", href: "/how-we-work" },
];

// Scroll-pinned zoom-text transition — sits between "Powered by What We
// Build" (CaseStudies) and the rest of the homepage. The outer wrapper is
// tall enough to give a generous amount of scroll distance to animate
// through (was only 5vh of pinned scroll — the whole zoom played out in
// one quick wheel-flick, reading as "appears and vanishes instantly"
// instead of an actual slow-motion effect; now there's real distance for
// it to play out over); the inner panel is `sticky top-0 h-screen`, so it
// stays pinned filling the viewport while the user scrolls past it, and
// the text scales up purely as a function of how far they've scrolled.
// The pin releases right as the zoom finishes, so the next section
// scrolls straight in on top of it with no dead gap in between.
export default function ScrollZoomReveal() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Slow build for the first half, fast rush for the rest — an
  // accelerating zoom reads much closer to a "flying through the text"
  // effect than a constant-speed scale ever could.
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 4, 22]);
  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 6]);
  const filter = useTransform(blur, (v) => `blur(${v}px)`);
  // Hidden at the very top of the section, fades in as the user scrolls
  // (growing at the same time via `scale` above), then fades back out
  // right at the end as it finishes zooming past frame.
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.85, 1], [0, 1, 1, 0]);

  // The side panels fade out early (by 30% of the scroll) so they're
  // gone well before the zoom text grows large enough to reach that same
  // screen area — no z-index layering needed, they simply aren't there
  // anymore by the time it would matter.
  const chromeOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Same moving-particle backdrop used behind the contact form. */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <Particles
            particleColors={["#40A2D8", "#0B60B0", "#8fd0f2", "#ffffff"]}
            particleCount={220}
            particleSpread={14}
            speed={0.08}
            particleBaseSize={110}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* Corner glow — soft ambient light, not the focal content. */}
        <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-[#0B60B0]/25 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-[#40A2D8]/20 blur-3xl pointer-events-none" aria-hidden="true" />

        {/* Left panel — quick-link buttons, stacked. Hidden below lg since
            there isn't room next to the centered heading on narrower
            screens without the two colliding. */}
        <motion.div
          style={{ opacity: chromeOpacity }}
          className="hidden lg:flex absolute left-10 xl:left-20 top-1/2 -translate-y-1/2 flex-col gap-3 w-56"
        >
          {QUICK_LINKS.map(({ icon: Icon, label, href }) => (
            <Link
              key={label}
              href={href}
              className="group flex items-center gap-3 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-5 py-3 text-sm font-semibold text-white/80 transition-all duration-300 hover:border-[#40A2D8]/50 hover:bg-[#0B60B0] hover:text-white"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-[#40A2D8] transition-colors duration-300 group-hover:bg-white group-hover:text-[#0B60B0]">
                <Icon size={15} />
              </span>
              {label}
              <ArrowRight size={14} className="ml-auto opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
            </Link>
          ))}
        </motion.div>

        {/* Right panel — heading + short blurb. Same lg-and-up visibility
            as the left panel. */}
        <motion.div
          style={{ opacity: chromeOpacity }}
          className="hidden lg:block absolute right-10 xl:right-20 top-1/2 -translate-y-1/2 w-72 text-right"
        >
          <h3 className="text-lg font-bold text-white mb-3">Who We Are</h3>
          <p className="text-sm text-white/60 leading-relaxed mb-5">
            A full-stack digital marketing and business solutions agency
            based in Prayagraj, India — serving clients across India, the
            UK, and worldwide with real strategy, not guesswork.
          </p>
          <Link href="/about" className="inline-block">
            <button className="animated-button whitespace-nowrap">
              <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">Learn Our Story</span>
              <span className="circle"></span>
              <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </Link>
        </motion.div>

        {/* Center — the zooming headline: hidden at scroll position zero,
            fading in and growing together as the user scrolls, then
            fading back out right as it finishes zooming past frame. */}
        <div className="relative flex flex-col items-center text-center px-6">
          <motion.p
            style={{ opacity: chromeOpacity }}
            className="text-xs font-bold uppercase tracking-widest text-[#40A2D8] mb-3 lg:hidden"
          >
            Who We Are
          </motion.p>

          <motion.div
            style={{ scale, opacity: textOpacity, filter }}
            className="relative will-change-transform"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/80 leading-tight whitespace-nowrap">
              Know More
            </h2>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#40A2D8] leading-tight whitespace-nowrap">
              About Us
            </h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
