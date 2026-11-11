import Image from "next/image";

// The team page's photographs as a film strip: the photos run sideways across
// the screen, big and sharp, as you scroll down the page — the strip pins to
// the screen while a yellow line fills and the pictures slide past each other
// (every other one is smaller and sits higher, so the strip has a rhythm), each
// moving a little slower inside its frame for depth. Pure CSS (see "film" in
// globals.css): where scroll-linked animation is not supported, or with
// reduced motion, it is a plain grid of the same photos. Real photographs
// only; each is served at the size it is shown (quality 90), not as a small
// thumbnail stretched. `slides`: image paths / URLs.
const pad = (n) => String(n).padStart(2, "0");

export default function PhotoFilm({ slides, label = "Inside BizzBuzz Creations" }) {
  const list = (slides || []).filter(Boolean);
  if (!list.length) return null;
  return (
    <section
      aria-label="Photos of the BizzBuzz Creations team"
      className="film on-paper"
      style={{ "--n": list.length }}
    >
      <div className="film-pin">
        <div className="wrap">
          <div className="film-head">
            <p className="kicker text-(--mut)">{label}</p>
            <p aria-hidden="true" className="film-hint kicker text-(--mut)">
              Keep scrolling →
            </p>
          </div>
          <div aria-hidden="true" className="film-rail">
            <span className="film-progress" />
          </div>
        </div>
        <ul className="film-strip">
          {list.map((src, i) => (
            <li key={i} className="film-frame">
              <figure>
                <div className="film-img">
                  <Image
                    src={src}
                    alt={`The BizzBuzz Creations team at work — photo ${i + 1} of ${list.length}`}
                    fill
                    quality={90}
                    sizes="(min-width: 1024px) 760px, 80vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="film-cap">
                  <span className="font-display">{pad(i + 1)}</span>
                  <span className="kicker text-(--mut)">/ {pad(list.length)}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
