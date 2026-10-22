// City skyline along the bottom edge of a footer office card (India: heritage
// monuments, UK: London). From lg up it sits in the card's bottom-right
// corner, fading in from the left so it melts into the card; on narrower
// cards it becomes a full-width strip under the text, so it never covers the
// address. The card needs `overflow-hidden` (rounded corner), `group`
// (brightens on hover) and `flex flex-col` (so the strip stays on the bottom
// edge when the card is stretched to its neighbour's height). Pre-sized
// 1x / 2x WebPs, lazy-loaded, decorative.
const SKYLINES = {
  india: { w: 420, h: 76 },
  london: { w: 420, h: 114 },
};

export default function OfficeSkyline({ city }) {
  const { w, h } = SKYLINES[city];
  return (
    <div className="mt-auto pt-5 lg:p-0">
      {/* eslint-disable-next-line @next/next/no-img-element -- pre-sized 1x / 2x files; next/image would only recompress them */}
      <img
        src={`/skyline-${city}-${w}.webp`}
        srcSet={`/skyline-${city}-${w}.webp ${w}w, /skyline-${city}-${w * 2}.webp ${w * 2}w`}
        sizes="(min-width: 1024px) 420px, 100vw"
        alt=""
        width={w}
        height={h}
        loading="lazy"
        decoding="async"
        className="pointer-events-none -mx-6 -mb-6 block h-auto w-[calc(100%+3rem)] max-w-none opacity-80 transition-opacity duration-300 [mask-image:linear-gradient(to_right,transparent,#000_22%)] group-hover:opacity-100 lg:absolute lg:bottom-0 lg:right-0 lg:m-0 lg:w-[55%] lg:max-w-[26.25rem]"
      />
    </div>
  );
}
