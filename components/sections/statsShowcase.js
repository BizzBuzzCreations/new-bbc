"use client";

import Image from "next/image";
import {
  Headphones,
  Globe,
  Search,
  Share2,
  Megaphone,
  Bot,
  Workflow,
  Handshake,
} from "lucide-react";
import RichText from "@/components/ui/richText";
import AnimatedButton from "@/components/ui/animatedButton";
import { resolveStatCards } from "@/lib/statCards";

// What makes working with BizzBuzz Creations different — kept as 4 cards
// so the existing card/visual layout below (photos, client logos,
// icon grid) stays exactly as designed, just with new copy.

const CLIENT_LOGOS = [
  { src: "/avondale-1.png", alt: "Avondale Finance" },
  { src: "/fibernet.png", alt: "Fibernet" },
  { src: "/WILLIAM.png", alt: "William" },
  { src: "/GRAND WEDDINZ1.png", alt: "Grand WeddinZ" },
  { src: "/LA PRISTINE1.png", alt: "La Pristine" },
  { src: "/PARIVARTAN1.png", alt: "Parivartan" },
];

const SERVICE_ICONS = [
  Headphones,
  Globe,
  Search,
  Share2,
  Megaphone,
  Bot,
  Workflow,
  Handshake,
];

function Visual({ visual }) {
  if (visual.type === "image") {
    return (
      <div className="relative w-full h-full">
        <Image
          src={visual.src}
          alt={visual.alt}
          fill
          sizes="320px"
          className="object-cover"
          draggable={false}
        />
      </div>
    );
  }

  if (visual.type === "logos") {
    return (
      <div className="w-full h-full bg-linear-to-br from-[#0B60B0] to-[#40A2D8] p-5 flex items-center">
        <div className="grid grid-cols-3 gap-3 w-full">
          {CLIENT_LOGOS.map((logo) => (
            <div
              key={logo.alt}
              className="bg-white rounded-xl aspect-square flex items-center justify-center p-2"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={60}
                height={60}
                className="object-contain w-full h-full"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // icons grid
  return (
    <div className="w-full h-full bg-linear-to-br from-[#0B60B0] to-[#40A2D8] p-5 flex items-center justify-center">
      <div className="grid grid-cols-4 gap-3">
        {SERVICE_ICONS.map((Icon, index) => (
          <div
            key={index}
            className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#0B60B0]"
          >
            <Icon size={20} />
          </div>
        ))}
      </div>
    </div>
  );
}

// The scalloped edge where the white text panel meets the image below it —
// same idea as the site's WavyDivider, but filled (not just stroked) so it
// masks the top of the image with a wavy white edge instead of a hard line.
function buildWaveMaskPath(waves, width, height) {
  const segment = width / waves;
  const base = height * 0.55;
  const amplitude = height * 0.45;
  let path = `M 0 ${base}`;

  for (let i = 0; i < waves; i++) {
    const x0 = i * segment;
    const xEnd = x0 + segment;
    const peakY = i % 2 === 0 ? base - amplitude : base + amplitude;
    const c1x = x0 + segment / 4;
    const c2x = xEnd - segment / 4;
    path += ` C ${c1x} ${peakY}, ${c2x} ${peakY}, ${xEnd} ${base}`;
  }

  path += ` L ${width} 0 L 0 0 Z`;
  return path;
}

const WAVE_MASK_HEIGHT = 28;
const WAVE_MASK_PATH = buildWaveMaskPath(3, 1000, WAVE_MASK_HEIGHT);

function WaveMask({ position = "top" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 1000 ${WAVE_MASK_HEIGHT}`}
      preserveAspectRatio="none"
      className={`absolute left-0 w-full ${
        position === "top" ? "top-0" : "bottom-0 -scale-y-100"
      }`}
      style={{ height: WAVE_MASK_HEIGHT }}
    >
      <path d={WAVE_MASK_PATH} fill="white" />
    </svg>
  );
}

export default function StatsShowcase({ content }) {
  const heading = content?.statsHeading || "Here’s Why Our Way of Working Is Different";
  const eyebrow = content?.statsEyebrow ?? "Why Us";
  const stats = resolveStatCards(content);

  return (
    <section className="bg-black pt-8 pb-14 md:pb-20" aria-label="BizzBuzz Creations by the numbers">
      {eyebrow && <p className="text-xs font-bold uppercase tracking-widest text-[#40A2D8] text-center mb-3 px-5">{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center max-w-3xl mx-auto mb-10 px-5">
        {heading}
      </h2>

      {/* Desktop: the cards sit side by side, centred (four fit in one
          row), so there is nothing to scroll. Phones: a swipe row — each
          card snaps into place and the next one peeks in. Focusable so
          keyboard users can scroll it with the arrow keys. */}
      <div
        role="region"
        aria-label={heading}
        tabIndex={0}
        className="mx-auto flex max-w-[1320px] snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 pb-2 md:flex-wrap md:justify-center md:overflow-visible md:pb-0 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#40A2D8]"
      >
        {stats.map((stat, i) => (
          <div
            key={`${stat.label}-${i}`}
            className="flex min-h-[460px] w-[280px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-white shadow-xl transition-transform duration-300 hover:-translate-y-1.5 sm:w-[300px]"
          >
            {/* Image — on top, with a wavy white mask along its bottom
                edge flowing into the text panel below. Fixed height so
                every card's text starts at the same line, whether its
                title takes one line or two. */}
            <div className="relative h-[200px] shrink-0">
              <Visual visual={stat.visual} />
              <WaveMask position="bottom" />
            </div>

            {/* Text — below; the button sits at the bottom so the
                buttons line up across the row. */}
            <div className="flex flex-1 flex-col p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-[#0B60B0] mb-2">
                {stat.tag}
              </p>
              <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                {stat.value} {stat.label}
              </h3>
              <RichText as="p" text={stat.description} className="text-sm text-gray-600 leading-relaxed mb-4" />
              <div className="mt-auto">
                {/* buttonText / buttonLink are only editable on the
                    Outside Location page; elsewhere never saved. */}
                <AnimatedButton
                  href={stat.buttonLink || "/about"}
                  variant="blue"
                  size="sm"
                  srText={`about ${stat.value} ${stat.label}`.replace(/\s+/g, " ").trim()}
                >
                  {stat.buttonText || "Learn More"}
                </AnimatedButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
