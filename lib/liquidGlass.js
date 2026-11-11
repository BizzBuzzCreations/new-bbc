// Liquid-glass refraction maps (browser only).
//
// `backdrop-filter: url(#filter)` lets an SVG filter bend the pixels behind an
// element. The filter is feDisplacementMap, which moves every pixel by an
// amount read from a "map" picture: red = horizontal shift, green = vertical
// shift, 128 = no shift. Here the map is drawn for a rounded rectangle (a
// pill, a circle, a card): flat in the middle, and along the edge — the bezel
// — it pushes the backdrop outward along the surface normal, strongest at the
// very rim and easing to nothing inside, like light bent by the curved edge of
// a glass slab. A lens (circle) can also pull the centre outward a little, a
// gentle magnification. Only Chromium accepts url() in backdrop-filter, so
// components/brand/liquidGlass.js uses this only when CSS.supports says so.

export const supportsLiquid = () => typeof CSS !== "undefined" && CSS.supports("backdrop-filter", "url(#a) blur(1px)");

// w, h: size in CSS px; radius: corner radius (px); bezel: width of the curved
// rim (px); lens: also magnify the middle (0 = no; a number is the strength,
// ~0.2 gentle, ~0.6 strong; the falloff follows the shape, so a pill magnifies
// along its whole length). Returns a PNG data URL.
export function displacementMap({ w, h, radius, bezel, lens = 0 }) {
  const W = Math.max(2, Math.round(w));
  const H = Math.max(2, Math.round(h));
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  const img = ctx.createImageData(W, H);
  const px = new Uint32Array(img.data.buffer);
  px.fill(0xff808080); // opaque, R = G = B = 128 (little-endian ABGR)
  const r = Math.min(radius, W / 2, H / 2);
  const B = Math.max(2, Math.min(bezel, Math.min(W, H) / 2));
  const cx = W / 2;
  const cy = H / 2;
  const hx = W / 2 - r;
  const hy = H / 2 - r;
  const d = img.data;
  for (let y = 0; y < H; y++) {
    const dy = y + 0.5 - cy;
    const ay = Math.abs(dy);
    for (let x = 0; x < W; x++) {
      const dx = x + 0.5 - cx;
      const ax = Math.abs(dx);
      const qx = ax - hx;
      const qy = ay - hy;
      // signed distance to the rounded rectangle (negative inside) → depth from the rim
      const ox = qx > 0 ? qx : 0;
      const oy = qy > 0 ? qy : 0;
      const sd = Math.sqrt(ox * ox + oy * oy) + Math.min(Math.max(qx, qy), 0) - r;
      const depth = -sd;
      let m = 0; // outward push, -1 … 1
      let nx = 0;
      let ny = 0;
      if (depth < B) {
        const t = 1 - Math.max(depth, 0) / B; // 1 at the rim → 0 where the bezel ends
        m = t * t * t * (t * (t * 6 - 15) + 10) * 0.6 + t * t * 0.4; // smooth, steep at the rim
        if (qx > 0 && qy > 0) {
          const L = Math.hypot(qx, qy) || 1;
          nx = (qx / L) * Math.sign(dx);
          ny = (qy / L) * Math.sign(dy);
        } else if (qx > qy) {
          nx = Math.sign(dx);
        } else {
          ny = Math.sign(dy);
        }
      } else if (lens) {
        // inside a lens: sample slightly toward the centre → the middle looks
        // magnified; u runs 0 at the centre → 1 at the edge of the (elliptical) shape
        const ex = dx / (W / 2);
        const ey = dy / (H / 2);
        const u = Math.min(1, Math.hypot(ex, ey));
        m = -lens * u * (1 - u * u * u);
        const L = Math.hypot(ex, ey) || 1;
        nx = ex / L;
        ny = ey / L;
      }
      if (m !== 0) {
        const i = (y * W + x) * 4;
        d[i] = 128 + 127 * m * nx;
        d[i + 1] = 128 + 127 * m * ny;
      }
    }
  }
  ctx.putImageData(img, 0, 0);
  return canvas.toDataURL("image/png");
}

const NS = "http://www.w3.org/2000/svg";
const el = (name, attrs) => {
  const e = document.createElementNS(NS, name);
  for (const k in attrs) e.setAttribute(k, attrs[k]);
  return e;
};

// An SVG <filter> that refracts the backdrop through `map`. `chroma` splits
// red / green / blue by slightly different amounts (dispersion at the rim).
export function buildFilter({ id, w, h, scale, map, chroma = false }) {
  const f = el("filter", { id, x: "0", y: "0", width: String(w), height: String(h), filterUnits: "userSpaceOnUse", primitiveUnits: "userSpaceOnUse", "color-interpolation-filters": "sRGB" });
  f.appendChild(el("feImage", { href: map, x: "0", y: "0", width: String(w), height: String(h), preserveAspectRatio: "none", result: "map" }));
  const disp = (s, result) => f.appendChild(el("feDisplacementMap", { in: "SourceGraphic", in2: "map", scale: String(s), xChannelSelector: "R", yChannelSelector: "G", result }));
  if (!chroma) {
    disp(scale, "out");
    return f;
  }
  const only = (src, row, result) => f.appendChild(el("feColorMatrix", { in: src, type: "matrix", values: row, result }));
  disp(scale * 1.0, "dr");
  disp(scale * 0.93, "dg");
  disp(scale * 0.86, "db");
  only("dr", "1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0", "r");
  only("dg", "0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0", "g");
  only("db", "0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0", "b");
  f.appendChild(el("feBlend", { in: "r", in2: "g", mode: "screen", result: "rg" }));
  f.appendChild(el("feBlend", { in: "rg", in2: "b", mode: "screen" }));
  return f;
}
