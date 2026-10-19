// Posts migrated from the old WordPress site still embed images from its
// upload folder (https://bizzbuzzcreations.com/wp-content/uploads/...).
// Those files were never moved to this site or to Cloudinary, so every one
// 404s and showed as a broken-image box in the article (18 posts, ~60
// images as of Oct 2026). Until the originals are found and re-uploaded,
// drop them from the public post — together with a <figure> (and its
// caption) or a link that only wrapped that image, so no empty frame,
// orphan caption or invisible link is left behind. The saved post content
// is untouched, so the editor still shows which images need replacing.
const DEAD_IMG =
  String.raw`<img\b[^>]*\bsrc=["'](?:https?:\/\/(?:www\.)?bizzbuzzcreations\.com)?\/wp-content\/uploads\/[^"']*["'][^>]*>`;

const FIGURE = new RegExp(
  String.raw`<figure\b[^>]*>\s*(?:<a\b[^>]*>\s*)?${DEAD_IMG}(?:\s*<\/a>)?\s*(?:<figcaption\b[^>]*>[\s\S]*?<\/figcaption>\s*)?<\/figure>`,
  "gi",
);
const LINKED = new RegExp(String.raw`<a\b[^>]*>\s*${DEAD_IMG}\s*<\/a>`, "gi");
const BARE = new RegExp(DEAD_IMG, "gi");

export function removeDeadWordpressImages(html) {
  if (!html || !html.includes("/wp-content/uploads/")) return html;
  return html.replace(FIGURE, "").replace(LINKED, "").replace(BARE, "");
}
