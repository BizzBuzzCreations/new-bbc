import Image from "next/image";

// A still mosaic of team / office photos (redesign): 3 × 3 beside the /about
// hero, 2 × 2 on /career (`cols` 2) — square tiles with small gaps, every
// second column set a little lower so it doesn't read as a plain table.
// `eager`: the first photo loads eagerly (when the mosaic is in the first
// screen); otherwise all lazy. `images`: { src }.
export default function PhotoMosaic({ images, cols = 3, eager = false }) {
  const tiles = (images || []).filter((img) => img?.src).slice(0, cols * cols);
  if (!tiles.length) return null;
  return (
    <ul aria-hidden="true" className={`grid gap-2 pb-6 sm:gap-3 ${cols === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
      {tiles.map(({ src }, i) => (
        <li key={`${src}-${i}`} className={`relative aspect-square overflow-hidden rounded-2xl bg-[#0a0a0a] ${i % cols === 1 ? "translate-y-4 sm:translate-y-6" : ""}`}>
          <Image
            src={src}
            alt=""
            fill
            sizes={cols === 2 ? "(min-width: 1280px) 340px, (min-width: 768px) 28vw, 50vw" : "(min-width: 1280px) 190px, (min-width: 768px) 15vw, 30vw"}
            preload={eager && i === 0}
            loading={eager && i === 0 ? "eager" : "lazy"}
            className="object-cover"
          />
        </li>
      ))}
    </ul>
  );
}
