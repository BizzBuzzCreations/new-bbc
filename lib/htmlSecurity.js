import sanitizeHtml from "sanitize-html";

// Allow-list HTML sanitizer shared by blog bodies (sanitizeBlogContent) and
// every dashboard text field (sanitizeInlineRich). Replaces the earlier
// regex stripping, which missed unquoted on*= handlers, <iframe>, <object>,
// javascript:/data: links and similar. Anything not listed here — scripts,
// event-handler attributes, unknown tags, dangerous URL schemes — is removed.
// <style> blocks are kept on purpose (page-builder content relies on them);
// callers scope them afterwards via lib/cssScoping.js.

const EXTRA_TAGS = [
  "img", "figure", "figcaption", "picture", "source", "video", "audio",
  "h1", "h2", "section", "article", "header", "footer", "main", "aside", "nav",
  "span", "div", "small", "mark", "sub", "sup", "u", "s", "del", "ins",
  "table", "thead", "tbody", "tfoot", "tr", "th", "td", "caption", "colgroup", "col",
  "details", "summary", "iframe", "style",
];

const OPTIONS = {
  allowedTags: [...new Set([...sanitizeHtml.defaults.allowedTags, ...EXTRA_TAGS])],
  allowedAttributes: {
    "*": ["class", "id", "style", "title", "role", "lang", "dir", "aria-*", "data-*"],
    a: ["href", "name", "target", "rel"],
    img: ["src", "srcset", "sizes", "alt", "width", "height", "loading", "decoding"],
    source: ["src", "srcset", "type", "media", "sizes"],
    video: ["src", "poster", "controls", "autoplay", "muted", "loop", "playsinline", "width", "height", "preload"],
    audio: ["src", "controls", "loop", "preload"],
    iframe: ["src", "width", "height", "allow", "allowfullscreen", "frameborder", "loading", "title"],
    td: ["colspan", "rowspan"],
    th: ["colspan", "rowspan", "scope"],
    col: ["span"],
    colgroup: ["span"],
    ol: ["start", "type"],
  },
  allowedSchemes: ["http", "https", "mailto", "tel"],
  allowedSchemesByTag: { img: ["http", "https", "data"], source: ["http", "https"] },
  allowProtocolRelative: true,
  allowedIframeHostnames: ["www.youtube.com", "www.youtube-nocookie.com", "player.vimeo.com"],
  // <style> is intentionally allowed (see above); sanitize-html warns about it.
  allowVulnerableTags: true,
  transformTags: {
    a: (tagName, attribs) => {
      if (attribs.target === "_blank") attribs.rel = "noopener noreferrer";
      return { tagName, attribs };
    },
  },
};

export function sanitizeHtmlContent(html) {
  return sanitizeHtml(String(html ?? ""), OPTIONS);
}
