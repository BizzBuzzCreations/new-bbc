// Sanitizes blog HTML before rendering it (allow-list, see
// lib/htmlSecurity.js) — scripts, inline event handlers, and remote-loading
// tags are a real injection risk.
// <style> blocks are kept: content pasted from page builders (Elementor
// exports, etc.) relies on them for the custom colors/boxes/design. But
// they're rewritten (via lib/cssScoping.js) so every selector is scoped
// under ".article" — without this, a rule as generic as `a { color: green }`
// or `div { margin-top: 40px }` inside the post's own <style> block leaks
// out and restyles the whole page (table of contents links, footer,
// spacing around the featured image, etc). This same function runs on the
// real published post AND on the editor's HTML-mode preview, so what you
// see in preview is exactly what goes live.
import { scopeStyleBlocks } from "./cssScoping";
import { sanitizeHtmlContent } from "./htmlSecurity";

const SCOPE_CLASS = ".article";

export function sanitizeBlogContent(html) {
  if (!html) return html;
  // Allow-list sanitize (scripts, event handlers, <iframe>/<object>, unsafe
  // URL schemes, <link>...) — then scope the surviving <style> blocks.
  return scopeStyleBlocks(sanitizeHtmlContent(html), SCOPE_CLASS);
}
