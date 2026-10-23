// Fades a full-bleed hero photo / video into the black page at its bottom
// edge, so the hero never ends in a hard line. Place it inside the hero's
// `relative` section after the photo layers and before the text (the text,
// coming later, stays on top).
export default function HeroBottomFade({ className = "h-40 md:h-56" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 bottom-0 ${className}`}
      style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 50%, #000000 100%)" }}
    />
  );
}
