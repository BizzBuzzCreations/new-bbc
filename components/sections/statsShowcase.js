"use client";

import { useRef } from "react";
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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import RichText from "@/components/ui/richText";
import AnimatedButton from "@/components/ui/animatedButton";

// What makes working with BizzBuzz Creations different — kept as 4 cards
// so the existing marquee/visual layout below (photos, client logos,
// icon grid) stays exactly as designed, just with new copy.
const STATS = [
  {
    tag: "Why It's Different",
    value: "01.",
    label: "One Team, Multiple Capabilities",
    description:
      "Get SEO, Google Ads, social media marketing, web development, AI, automation, and BPO support from one connected digital team.",
    visual: {
      type: "image",
      src: "/oneteam-multiplecapabilities.jpg",
      alt: "One team, multiple capabilities",
    },
  },
  {
    tag: "Why It's Different",
    value: "02.",
    label: "Solutions Built Around You",
    description:
      "We consider your industry, audience, market, and business needs to recommend digital solutions that fit your objectives.",
    visual: {
      type: "image",
      src: "/solutionbuilt-aroundus.jpg",
      alt: "Solutions built around you",
    },
  },
  {
    tag: "Why It's Different",
    value: "03.",
    label: "Clear From Day One",
    description:
      "Know what's included, what we're working on, and what to expect through straightforward communication and practical recommendations.",
    visual: {
      type: "image",
      src: "/clearfrom-dayone.jpg",
      alt: "Clear from day one",
    },
  },
  {
    tag: "Why It's Different",
    value: "04.",
    label: "Built to Adapt With You",
    description:
      "Start with the services you need today and expand into SEO, advertising, technology, automation, or business support as your needs evolve.",
    visual: {
      type: "image",
      src: "/builtto-adaptwithyou.jpg",
      alt: "Built to adapt with you",
    },
  },
];

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

// Card + gap width, in px — kept as plain numbers (not Tailwind classes) so
// the marquee math below can compute exact loop distances.
const CARD_WIDTH = 300;
const GAP = 20;
const STEP = CARD_WIDTH + GAP; // one prev/next press moves exactly one card
const PAD = 20; // left gutter so the first card doesn't sit flush on the screen edge
// The strip must stay wider than the widest screen plus one full set, so
// it can loop without a visible gap however few cards there are.
const MIN_STRIP_WIDTH = 2600;

// Wrap `value` into the range (-width, 0] so the strip can scroll infinitely
// in either direction without ever visibly jumping.
function wrap(value, width) {
  let v = value % width;
  if (v > 0) v -= width;
  return v;
}

export default function StatsShowcase({ content }) {
  const heading = content?.statsHeading || "Here’s Why Our Way of Working Is Different";

  // The dashboard's card list drives the strip — adding or removing a card
  // there now adds/removes it here (it used to always show exactly the 4
  // built-in cards and ignore any beyond them). A card with no uploaded
  // image falls back to one of the built-in photos, by position.
  const saved = content?.statCards;
  const stats =
    saved?.length > 0
      ? saved.map((card, i) => {
          const base = STATS[i % STATS.length];
          const { image, ...text } = card;
          return {
            ...base,
            ...text,
            visual: image ? { type: "image", src: image, alt: text.label || base.label } : base.visual,
          };
        })
      : STATS;

  const setWidth = stats.length * (CARD_WIDTH + GAP);
  const copies = Math.max(3, Math.ceil(MIN_STRIP_WIDTH / setWidth) + 1);

  // The strip no longer scrolls on its own: it moves when the visitor
  // drags it or uses the prev/next buttons (or ←/→ on them). It starts on
  // the second copy of the set, so there is a full set to either side and
  // the loop never shows a gap.
  const trackRef = useRef(null);
  const offsetRef = useRef(PAD - setWidth);
  const draggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, offset: 0 });

  const place = (offset, animate) => {
    offsetRef.current = offset;
    const track = trackRef.current;
    if (!track) return;
    track.style.transition = animate ? "transform 0.45s cubic-bezier(0.16,1,0.3,1)" : "none";
    track.style.transform = `translateX(${offset}px)`;
  };

  // Jump (invisibly — every copy is identical) back to the middle copy,
  // then slide one card.
  const step = (dir) => {
    place(wrap(offsetRef.current - PAD, setWidth) - setWidth + PAD, false);
    void trackRef.current?.offsetWidth; // commit the jump before animating
    place(offsetRef.current - dir * STEP, true);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
    else if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
  };

  const handlePointerDown = (e) => {
    draggingRef.current = true;
    dragStartRef.current = { x: e.clientX, offset: offsetRef.current };
  };

  const handlePointerMove = (e) => {
    if (!draggingRef.current) return;
    place(dragStartRef.current.offset + (e.clientX - dragStartRef.current.x), false);
  };

  const endDrag = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    place(wrap(offsetRef.current - PAD, setWidth) - setWidth + PAD, false);
  };

  return (
    <section
      className="bg-black pt-8 pb-20 overflow-hidden"
      aria-label="BizzBuzz Creations by the numbers"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center max-w-3xl mx-auto mb-10 px-5">
        {heading}
      </h2>

      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
        style={{ touchAction: "pan-y" }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
      >
        <div
          ref={trackRef}
          className="flex"
          style={{ gap: `${GAP}px`, transform: `translateX(${PAD - setWidth}px)` }}
        >
          {/* The set is repeated (3x, or more when there are only a few
              cards) so there's always a full extra set of cards on either
              side of the visible window to scroll into, regardless of drag
              distance or viewport width. */}
          {Array.from({ length: copies }, () => stats).flat().map((stat, i) => (
            <div
              key={`${stat.label}-${i}`}
              className="flex flex-col h-[460px] shrink-0 rounded-2xl overflow-hidden bg-white shadow-xl"
              style={{ width: `${CARD_WIDTH}px` }}
            >
              {/* Image — on top, with a wavy white mask along its bottom
                  edge flowing into the text panel below */}
              <div className="relative flex-1 min-h-0">
                <Visual visual={stat.visual} />
                <WaveMask position="bottom" />
              </div>

              {/* Text — below */}
              <div className="p-5 shrink-0">
                <p className="text-xs font-bold uppercase tracking-wider text-[#0B60B0] mb-2">
                  {stat.tag}
                </p>
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                  {stat.value} {stat.label}
                </h3>
                <RichText as="p" text={stat.description} className="text-sm text-gray-600 leading-relaxed mb-4" />
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
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-3" onKeyDown={onKeyDown}>
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Previous card"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/[0.08] text-white transition-colors duration-200 hover:border-[#0B60B0] hover:bg-[#0B60B0] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#40A2D8]"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Next card"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/[0.08] text-white transition-colors duration-200 hover:border-[#0B60B0] hover:bg-[#0B60B0] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#40A2D8]"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
