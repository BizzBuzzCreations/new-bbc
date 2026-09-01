"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { ShuffleGrid } from "@/components/ui/shuffle-grid";

const reveal = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

const DEFAULT_GRID_IMAGES = [
  { id: 1, src: "/image-1.jpg" },
  { id: 2, src: "/image-2.jpg" },
  { id: 3, src: "/image-3.jpg" },
  { id: 4, src: "/image-4.webp" },
  { id: 5, src: "/image-5.webp" },
  { id: 6, src: "/image-6.jpg" },
  { id: 7, src: "/image-7.jpg" },
  { id: 8, src: "/image-8.jpg" },
  { id: 9, src: "/image-9.jpg" },
];

export default function AboutHero({ content }) {
  const heading = content?.aboutHeroHeading || "India’s Digital Marketing Agency, Trusted Worldwide";
  const subheading = content?.aboutHeroSubheading || "Systems first. Campaigns second.";
  const paragraph =
    content?.aboutHeroParagraph ||
    "Built and based in India, BizzBuzz Creations helps businesses across India and worldwide grow through data-driven strategy, design, and technology, not just ads.";
  const stat1 = content?.aboutHeroStat1 || "Data-Driven Strategy, Not Guesswork";
  const stat2 = content?.aboutHeroStat2 || "Serving Businesses Across India & Worldwide";
  const buttonText = content?.aboutHeroButtonText || "Build Your Digital Growth Strategy";
  const gridImages =
    content?.aboutHeroImages?.length > 0
      ? content.aboutHeroImages.map((item, i) => ({ id: i + 1, src: item.src }))
      : DEFAULT_GRID_IMAGES;

  return (
    <div
      className="min-h-[90vh] pt-28 md:pt-32 -mt-14 md:-mt-[72px] lg:text-left text-center text-white gap-10 flex 2xl:px-15 px-5 lg:flex-row flex-col justify-center items-center bg-gray-100 pb-20"
      style={{
        background: "radial-gradient(circle at top, #1c1c1c, #000000)",
      }}
    >
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reveal}
          className="md:text-3xl xl:text-4xl text-xl font-bold mb-4"
        >
          {heading}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...reveal, delay: 0.15 }}
          className="md:text-3xl xl:text-2xl text-xl font-bold mb-4"
        >
          {subheading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...reveal, delay: 0.3 }}
          className="max-w-xl mb-10"
        >
          {paragraph}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...reveal, delay: 0.45 }}
          className="flex flex-wrap justify-center lg:justify-start items-center gap-x-6 gap-y-2"
        >
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-500" size={18} />
            <span>{stat1}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-500" size={18} />
            <span>{stat2}</span>
          </div>
        </motion.div>
        <br></br>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...reveal, delay: 0.6 }}
        >
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 mx-auto lg:mx-0 bg-white hover:bg-black text-black hover:text-white text-sm font-semibold px-7 py-3.5 rounded-full border-2 border-white transition-colors duration-300 w-fit"
          >
            {buttonText}
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ ...reveal, delay: 0.2 }}
        className="w-full max-w-2xl"
      >
        <ShuffleGrid images={gridImages} className="h-[420px] md:h-[620px]" />
      </motion.div>
    </div>
  );
}
