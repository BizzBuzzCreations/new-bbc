// The landing animation: the first time someone opens the homepage in a tab, a
// dark screen holds the wordmark split across a seam, a hairline fills along
// the seam while a counter runs 00 → 100, then the two halves slide apart
// (up and down) and the hero rises into place behind them. ~2.8 s in total.
//
// Built to cost nothing: it is plain HTML + CSS (no client JavaScript, no
// images, no layout), the page underneath is already painted and fully usable
// in the HTML, and the whole thing hides itself with a CSS animation even if
// scripts never run. Whether it plays is decided by a tiny inline script in the
// root layout (components/home/introGate.js) BEFORE first paint: homepage only,
// once per tab session, never with reduced motion or Data Saver; client-side
// navigation back to "/" never replays it. See globals.css ".intro".
// Decorative: aria-hidden, takes no focus, and `inert` once it is over.
const TOP = "BizzBuzz".split("");
const BOTTOM = "Creations".split("");

export default function Intro() {
  return (
    <div className="intro" aria-hidden="true">
      <div className="intro-half intro-top">
        <p className="intro-word font-display">
          {TOP.map((c, i) => (
            <span key={i} style={{ "--k": i }}>
              {c}
            </span>
          ))}
        </p>
      </div>
      <div className="intro-half intro-bot">
        <p className="intro-word intro-word-low font-display">
          {BOTTOM.map((c, i) => (
            <span key={i} style={{ "--k": i + 2 }}>
              {c}
            </span>
          ))}
        </p>
      </div>
      <div className="intro-seam">
        <span className="intro-bar" />
      </div>
      <div className="intro-hud">
        <p className="kicker intro-k intro-k-tl">
          Digital marketing · Software · AI · BPO
        </p>
        <p className="kicker intro-k intro-k-tr">Prayagraj · Kanpur · London</p>
        <p className="kicker intro-k intro-k-bl">
          Systems first. Campaigns second.
        </p>
        <p className="intro-count font-display" />
      </div>
    </div>
  );
}
