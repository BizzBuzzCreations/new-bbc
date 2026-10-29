// Client video testimonials (YouTube Shorts): the built-in list and the
// resolver the homepage and the UK / location pages share. A video is
// { name, role, youtube, cover }: `youtube` is a link or just the video id;
// `cover` is the picture shown before play (the cards are plain pictures —
// YouTube's player only loads when someone clicks play). The built-in
// covers are YouTube's own vertical frames, saved on this site.
// Plain data, no "use client".
export const DEFAULT_CLIENT_VIDEOS = [
  { name: "Marcus Bennett", role: "", youtube: "kDjsYHy7VbY", cover: "/testimonials/kDjsYHy7VbY.webp" },
  { name: "Bruce Vigna", role: "", youtube: "IX-PxD3lKCg", cover: "/testimonials/IX-PxD3lKCg.webp" },
  { name: "Robert Plank", role: "", youtube: "IM8HLHl_Qfg", cover: "/testimonials/IM8HLHl_Qfg.webp" },
  { name: "Laura Fernandes", role: "", youtube: "Oiw0r8m0v9U", cover: "/testimonials/Oiw0r8m0v9U.webp" },
  { name: "Mike Wilson", role: "", youtube: "xeVTjoPjN-U", cover: "/testimonials/xeVTjoPjN-U.webp" },
  { name: "Chris Stevenson", role: "Founder, Open Path Project — United Kingdom", youtube: "a4C74YFwhGw", cover: "/testimonials/a4C74YFwhGw.webp" },
];

// the 11-character video id from a watch / youtu.be / shorts / embed link,
// or the id itself; "" when it isn't one
export function youtubeId(input) {
  const text = String(input || "").trim();
  if (/^[\w-]{11}$/.test(text)) return text;
  const m = text.match(/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/|v\/))([\w-]{11})/);
  return m ? m[1] : "";
}

// the videos to show: saved ones (dashboard) or the built-in five; a saved
// entry without a usable link is skipped; no cover falls back to YouTube's
// own vertical frame.
export function resolveClientVideos(content) {
  const saved = content?.clientVideos;
  const list = Array.isArray(saved) && saved.length > 0 ? saved : DEFAULT_CLIENT_VIDEOS;
  return list
    .map((v) => {
      const id = youtubeId(v?.youtube);
      return id ? { id, name: String(v?.name || "").trim() || "Our client", role: String(v?.role || "").trim(), cover: v?.cover || `https://i.ytimg.com/vi/${id}/oar2.jpg` } : null;
    })
    .filter(Boolean);
}
