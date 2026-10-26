// Lazy wrapper, not ./globe directly — keeps three.js out of the /contact
// route bundle so other pages' links to /contact don't prefetch it.
import Globe from "@/components/ui/lazyGlobe";
import RichText from "@/components/ui/richText";

// BizzBuzz's two real offices (same coordinates as the address cards on
// /contact) — marked on the globe instead of a placeholder location.
const OFFICE_MARKERS = [
  { lat: 25.4358, lng: 81.8463 }, // Prayagraj, India
  { lat: 51.5072, lng: -0.1276 }, // London, UK
];

export default function GlobeTrust({ content }) {
  const eyebrow = content?.globeEyebrow || "Trusted by Growing Businesses";
  const heading = content?.globeHeading || "In Prayagraj, Across India & Worldwide";
  const paragraph =
    content?.globeParagraph ||
    "From local businesses to growing enterprises, we help brands across Prayagraj, India, and global markets build a digital presence that drives leads and sales — real results, not vanity metrics. Whether you're a small business just getting started online or an established company looking to expand into new markets, our team combines local market understanding with strategies that work across borders, so your growth never stays confined to one city or one country.";

  // Redesign: the heading block in the site's style (small blue eyebrow,
  // big light heading) beside the globe; on phones heading → globe → text.
  return (
    <section className="relative overflow-hidden bg-black px-6 py-16 text-white md:px-10 md:py-20">
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <p className="text-sm text-[#40A2D8]">{eyebrow}</p>
          <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
          <RichText as="p" text={paragraph} className="mt-6 hidden text-base leading-relaxed text-white/70 md:block" />
        </div>

        {/* Interactive 3D globe — real dot-mapped world map (Three.js +
            d3-geo), drag to spin, markers on our actual India + UK
            offices. Replaces the old orbiting-rings visual. */}
        <div className="relative mx-auto h-80 w-80 shrink-0 sm:h-96 sm:w-96 md:mx-0 md:h-[480px] md:w-[480px]">
          <Globe
            speed={1.5}
            direction="left"
            scale={8}
            smoothing={8}
            dragSpeed={5}
            stopOnHover
            oceanColor="#000000"
            outlineColor="#40A2D8"
            outlineWidth={1}
            showGrid
            graticuleColor="rgba(64,162,216,0.18)"
            dots={{ color: "#40A2D8", size: 4, density: 7, allDots: false }}
            markerConfig={{ markers: OFFICE_MARKERS, color: "#ffffff", size: 55 }}
            initialLatitude={20}
            initialLongitude={-15}
          />
        </div>

        {/* Mobile-only paragraph, placed after the globe. */}
        <RichText as="p" text={paragraph} className="text-base leading-relaxed text-white/70 md:hidden" />
      </div>
    </section>
  );
}
