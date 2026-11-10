import AccentText from "@/components/brand/accentText";
import Kicker from "@/components/brand/kicker";
import RichText from "@/components/ui/richText";

// The standard section opening: a mono kicker ("02 / 08  Services"), the
// heading huge and two-tone on the left, the supporting text (and/or a
// button) on the right, level with the heading's last line. Stacks on
// phones. `size` "xl" | "l" (default) | "m".
const SIZES = {
  xl: "text-[clamp(3rem,8.4vw,9rem)] leading-[0.9]",
  l: "text-[clamp(2.5rem,6vw,6.25rem)] leading-[0.94]",
  m: "text-[clamp(2.1rem,4.2vw,4rem)] leading-[1]",
};
export default function SectionHead({
  no,
  of,
  kicker,
  heading,
  text,
  aside,
  size = "l",
  as: H = "h2",
  accent = true,
  className = "",
  id,
}) {
  return (
    <div
      className={`grid gap-8 md:grid-cols-12 md:items-end md:gap-10 ${className}`}
    >
      <div className="md:col-span-8">
        {kicker && (
          <Kicker no={no} of={of} className="mb-8">
            {kicker}
          </Kicker>
        )}
        <H
          id={id}
          className={`head-rise font-display text-balance ${SIZES[size] || SIZES.l}`}
        >
          <AccentText text={heading} accent={accent} />
        </H>
      </div>
      {(text || aside) && (
        <div className="md:col-span-3 md:col-start-10 md:pb-2">
          {text && (
            <RichText
              as="p"
              text={text}
              className="text-base leading-relaxed text-(--mut) md:text-[1.0625rem]"
            />
          )}
          {aside && <div className={text ? "mt-6" : ""}>{aside}</div>}
        </div>
      )}
    </div>
  );
}
