import AccentText from "@/components/brand/accentText";
import Kicker from "@/components/brand/kicker";
import RichText from "@/components/ui/richText";

// The standard section opening (DESIGN_DIRECTION.md §5): kicker + display
// heading on the left, the supporting text on the right on the same
// baseline (stacked on phones). `size` "xl" | "l" (default) | "m".
// `tone` "light" (on ink) | "dark" (on paper). `aside` replaces the text
// column (e.g. a button). `as` the heading tag.
const SIZES = {
  xl: "text-[clamp(3rem,8.5vw,8.5rem)] leading-[0.9]",
  l: "text-[clamp(2.4rem,5.6vw,5.5rem)] leading-[0.95]",
  m: "text-[clamp(2rem,4vw,3.75rem)] leading-[1]",
};
export default function SectionHead({ no, kicker, heading, text, aside, size = "l", tone = "light", as: H = "h2", accent = true, className = "", id }) {
  const textColor = tone === "dark" ? "text-stone" : "text-fog";
  return (
    <div className={`grid gap-8 md:grid-cols-12 md:items-end md:gap-10 ${className}`}>
      <div className="md:col-span-7">
        {kicker && (
          <Kicker no={no} tone={tone} className="mb-6">
            {kicker}
          </Kicker>
        )}
        <H id={id} className={`font-display text-balance ${SIZES[size] || SIZES.l}`}>
          <AccentText text={heading} accent={accent} />
        </H>
      </div>
      {(text || aside) && (
        <div className="md:col-span-4 md:col-start-9 md:pb-2">
          {text && <RichText as="p" text={text} className={`text-base leading-relaxed md:text-lg ${textColor}`} />}
          {aside && <div className={text ? "mt-6" : ""}>{aside}</div>}
        </div>
      )}
    </div>
  );
}
