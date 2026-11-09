import RichText from "@/components/ui/richText";

// A heading's text set in two tones (DESIGN_DIRECTION.md §3): the leading
// words in the surface's ink, the trailing words in the same ink at 55 % —
// hierarchy without a second typeface. The grey part is the words wrapped in
// *stars* when the text has any ("Websites that *sell*"); otherwise the last
// third of the words (at least one). One-word headings stay solid, and so does
// `accent={false}`. Dashboard text with HTML in it is shown as written.
export default function AccentText({ text, accent = true }) {
  const value = String(text ?? "").trim();
  if (!value) return null;
  if (/<[a-z!/]/i.test(value)) return <RichText as="span" text={value} />;
  if (/\*[^*]+\*/.test(value)) {
    return value.split(/(\*[^*]+\*)/g).map((part, i) =>
      part.startsWith("*") && part.endsWith("*") ? (
        <span key={i} className="text-current/55">
          {part.slice(1, -1)}
        </span>
      ) : (
        part
      ),
    );
  }
  const words = value.split(/\s+/);
  if (!accent || words.length < 2) return value;
  const n = Math.max(1, Math.round(words.length / 3));
  return (
    <>
      {words.slice(0, -n).join(" ")} <span className="text-current/55">{words.slice(-n).join(" ")}</span>
    </>
  );
}

// Plain text of an accent string (for aria-labels, alt text, titles).
export const plainText = (text) => String(text ?? "").replace(/\*/g, "");

// The words of a heading as [{ w, grey }] — the same two-tone rule as
// AccentText, for layouts that set the words themselves (the staggered hero).
export function toneWords(text) {
  const value = String(text ?? "").replace(/<[^>]+>/g, "").trim();
  if (!value) return [];
  if (/\*[^*]+\*/.test(value)) {
    const out = [];
    value.split(/(\*[^*]+\*)/g).forEach((part) => {
      const grey = part.startsWith("*") && part.endsWith("*");
      (grey ? part.slice(1, -1) : part).split(/\s+/).filter(Boolean).forEach((w) => out.push({ w, grey }));
    });
    return out;
  }
  const words = value.split(/\s+/);
  const n = words.length < 2 ? 0 : Math.max(1, Math.round(words.length / 3));
  return words.map((w, i) => ({ w, grey: i >= words.length - n }));
}
