import RichText from "@/components/ui/richText";

// A heading's text with its accent word in Newsreader italic
// (DESIGN_DIRECTION.md §4: one accent word per heading). The accent is the
// word(s) wrapped in *stars* if the text has any — so the dashboard can
// choose ("Websites that *sell*") — otherwise the last word. Headings of one
// word, or with `accent={false}`, stay plain. Punctuation after the accent
// word stays upright ("results." → *results*.).
export default function AccentText({ text, accent = true }) {
  const value = String(text ?? "").trim();
  if (!value) return null;
  // dashboard text with HTML in it (a <b>, a link): shown as written
  if (/<[a-z!/]/i.test(value)) return <RichText as="span" text={value} />;
  if (/\*[^*]+\*/.test(value)) {
    return value.split(/(\*[^*]+\*)/g).map((part, i) =>
      part.startsWith("*") && part.endsWith("*") ? (
        <span key={i} className="font-accent">
          {part.slice(1, -1)}
        </span>
      ) : (
        part
      ),
    );
  }
  const words = value.split(/\s+/);
  if (!accent || words.length < 2) return value;
  const last = words.pop();
  const m = last.match(/^(.*?)([.,!?:;)”"’]*)$/);
  return (
    <>
      {words.join(" ")}{" "}
      <span className="font-accent">{m[1]}</span>
      {m[2]}
    </>
  );
}

// Plain text of an accent string (for aria-labels, alt text, titles).
export const plainText = (text) => String(text ?? "").replace(/\*/g, "");
