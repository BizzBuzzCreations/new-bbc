"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Particles from "@/components/ui/Particles";

// Scroll-pinned zoom-text transition — sits between "Powered by What We
// Build" (CaseStudies) and the rest of the homepage. The outer wrapper is
// tall (180vh) so there's scroll distance to animate through; the inner
// panel is `sticky top-0 h-screen`, so it stays pinned filling the
// viewport while the user scrolls past it, and the text scales up purely
// as a function of how far they've scrolled through that tall wrapper.
// No fade, no color wash — the text just grows until a single letter is
// filling the screen, and the pin releases at that exact instant so the
// next section scrolls straight in on top of it.
export default function ScrollZoomReveal() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 16]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.06], [0, 1]);

  return (
    <div ref={containerRef} className="relative h-[180vh] bg-black">
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

        <motion.h2
          style={{ scale, opacity: textOpacity }}
          className="relative text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center px-6 whitespace-nowrap"
        >
          Know More <span className="text-[#40A2D8]">About Us</span>
        </motion.h2>
      </div>
    </div>
  );
}
