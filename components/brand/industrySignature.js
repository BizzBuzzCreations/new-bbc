// An industry's "signature" (rebuild): a waveform field drawn from its slug,
// so every industry gets its own, always-sharp visual instead of a stock
// photo (the old industry photos were low quality). Pure SVG, deterministic
// (same slug → same picture on server and client), no script. `tone`
// "light" (on ink) | "dark" (on paper). Decorative unless `title` is given.
function seeded(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) h = Math.imul(h ^ str.charCodeAt(i), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

export default function IndustrySignature({ slug = "", title, tone = "light", className = "", lines = 26 }) {
  const rnd = seeded(slug || "bbc");
  const W = 480;
  const H = 360;
  const f1 = 0.012 + rnd() * 0.02;
  const f2 = 0.03 + rnd() * 0.05;
  const phase = rnd() * Math.PI * 2;
  const cx = W * (0.3 + rnd() * 0.4);
  const cy = H * (0.35 + rnd() * 0.3);
  const spread = 70 + rnd() * 80;
  const amp = 26 + rnd() * 34;
  const gap = H / (lines + 1);
  const paths = [];
  for (let i = 1; i <= lines; i++) {
    const y0 = i * gap;
    const dy = y0 - cy;
    const rowG = Math.exp(-(dy * dy) / (2 * (H * 0.24) ** 2));
    let d = "";
    for (let x = 0; x <= W; x += 8) {
      const dx = x - cx;
      const g = Math.exp(-(dx * dx) / (2 * spread * spread)) * rowG;
      const n = (Math.sin(x * f2 + i * 1.7 + phase) * 0.6 + Math.sin(x * f1 * 2.3 - i * 0.9) * 0.4) * gap * 0.32 * (1 - g);
      const s = Math.sin(dx * f1 * 2.2 + phase) * amp * g;
      d += `${x ? "L" : "M"}${x} ${(y0 + n - s).toFixed(1)}`;
    }
    paths.push({ d, hot: rowG > 0.55 });
  }
  const base = tone === "dark" ? "rgba(10,10,11,0.28)" : "rgba(255,255,255,0.22)";
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className={className}
      {...(title ? { role: "img", "aria-label": title } : { "aria-hidden": "true" })}
    >
      {paths.map((p, i) => (
        <path key={i} d={p.d} fill="none" stroke={p.hot ? "var(--color-buzz)" : base} strokeWidth={p.hot ? 1.4 : 1} strokeOpacity={p.hot ? 0.9 : 1} />
      ))}
    </svg>
  );
}
