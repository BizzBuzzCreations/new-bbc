import BackgroundBeams from "@/components/ui/backgroundBeams";

// One background for Our Process, Industries and Reviews together: a faded
// navy block (black at its very top and bottom, so it melts into the black
// sections around it) with ONE layer of beams. The beams layer is pinned to
// the screen (sticky) for as long as the block is on screen, so the three
// sections scroll over a single background instead of each drawing its own
// copy with a seam between them. Still beams for the texture, the moving
// ones on top (they only run while on screen, and not at all under reduced
// motion). The fades are fixed heights so they look the same however tall
// the block is. Solid stops only — see-through ones let the page's white
// background show as grey stripes.
const NAVY_BLOCK =
  "linear-gradient(to bottom, #000000 0, #03070e 70px, #050e1a 140px, #06101f 220px, #06101f calc(100% - 220px), #050e1a calc(100% - 140px), #03070e calc(100% - 70px), #000000 100%)";

// A soft blue glow in the middle of the screen, travelling with the beams.
const GLOW = "radial-gradient(60% 45% at 50% 45%, rgba(11, 96, 176, 0.16), transparent 100%)";

export default function NavyBlock({ children }) {
  return (
    <div className="relative text-white" style={{ background: NAVY_BLOCK }}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="sticky top-0 h-screen overflow-hidden" style={{ background: GLOW }}>
          <BackgroundBeams still className="opacity-40" />
          <BackgroundBeams className="opacity-50" />
        </div>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
