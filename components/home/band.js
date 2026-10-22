import BackgroundBeams from "@/components/ui/backgroundBeams";

// One background for Our Process, Industries and Reviews together: plain
// black like the rest of the page, with ONE layer of beams — thin grey lines
// and the moving blue beams, nothing else (no tint, no glow). The layer is
// pinned to the screen (sticky) for as long as the block is on screen, so
// the three sections scroll over a single background with no seams, and it
// fades in and out over FADE at the block's top and bottom. Under reduced
// motion only the still grey lines show.
const FADE = 480;
const LAYER_FADE = `linear-gradient(to bottom, transparent 0, #000 ${FADE}px, #000 calc(100% - ${FADE}px), transparent 100%)`;

export default function BeamsBlock({ children }) {
  return (
    <div className="relative bg-black text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ maskImage: LAYER_FADE, WebkitMaskImage: LAYER_FADE }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          <BackgroundBeams lineOpacity={0.12} className="opacity-60" />
        </div>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
