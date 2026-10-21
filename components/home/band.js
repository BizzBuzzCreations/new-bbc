import BackgroundBeams from "@/components/ui/backgroundBeams";

// One background for Our Process, Industries and Reviews together: a faded
// navy block (black at its very top and bottom, so it melts into the black
// sections around it) with ONE layer of beams. The beams layer is pinned to
// the screen (sticky) for as long as the block is on screen, so the three
// sections scroll over a single background instead of each drawing its own
// copy with a seam between them. Still beams for the texture, the moving
// ones on top (they only run while on screen, and not at all under reduced
// motion). The fades are fixed heights so they look the same however tall
// the block is. Solid colours only — see-through ones let the page's white
// background show as grey stripes.
// Eased over FADE (black → navy follows a smooth S-curve), so there's no
// visible edge where the block starts or ends.
const FADE = 480;
const RAMP = ["#000000", "#000102", "#020408", "#030810", "#040c17", "#060f1d", "#06101f"];
const STEP = FADE / (RAMP.length - 1);
const NAVY_BLOCK = `linear-gradient(to bottom, ${[
  ...RAMP.map((c, i) => `${c} ${i * STEP}px`),
  ...RAMP.map((c, i) => `${c} calc(100% - ${i * STEP}px)`).reverse(),
].join(", ")})`;

// The beams and glow fade in and out over the same distance as the colour.
const LAYER_FADE = `linear-gradient(to bottom, transparent 0, #000 ${FADE}px, #000 calc(100% - ${FADE}px), transparent 100%)`;

// A soft blue glow in the middle of the screen, travelling with the beams.
const GLOW = "radial-gradient(60% 45% at 50% 45%, rgba(11, 96, 176, 0.16), transparent 100%)";

export default function NavyBlock({ children }) {
  return (
    <div className="relative text-white" style={{ background: NAVY_BLOCK }}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ maskImage: LAYER_FADE, WebkitMaskImage: LAYER_FADE }}>
        <div className="sticky top-0 h-screen overflow-hidden" style={{ background: GLOW }}>
          <BackgroundBeams still className="opacity-40" />
          <BackgroundBeams className="opacity-50" />
        </div>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
