import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// The site's one button (DESIGN_DIRECTION.md): a pill that draws with the
// surface it sits on, so it works on paper and on ink alike.
//   solid   — the surface's opposite colour (ink pill on paper, paper pill on
//             ink): the main action ("ink" is the same, kept for old callers)
//   outline — a hairline pill: secondary ("line" is the same)
//   buzz    — yellow: the one loud action on a page (use once)
// The label rolls up on hover and the arrow slides; both stay (instantly)
// still with reduced motion. External links open in a new tab and say so.
const LOOKS = {
  solid: "bg-(--fg) text-(--bg) hover:opacity-85",
  outline: "border border-(--fg)/30 text-(--fg) hover:border-(--fg) hover:bg-(--fg) hover:text-(--bg)",
  buzz: "bg-buzz text-buzz-ink hover:bg-[#ffe066]",
};
const ALIAS = { ink: "solid", line: "outline" };

export default function Button({ href, children, variant = "solid", size = "md", className = "", srText, onClick, type, disabled, icon = true, ...rest }) {
  const look = LOOKS[ALIAS[variant] || variant] || LOOKS.solid;
  const dims = size === "lg" ? "h-14 px-7 text-base" : "h-12 px-6 text-[0.9375rem]";
  const classes = `group relative inline-flex select-none items-center justify-center gap-2.5 whitespace-nowrap rounded-full font-medium transition-[background-color,color,border-color,opacity] duration-300 ease-out-soft disabled:pointer-events-none disabled:opacity-50 ${dims} ${look} ${className}`;
  const label = typeof children === "string" ? children : null;
  const inner = (
    <>
      {label ? (
        <span className="roll">
          <span>{label}</span>
          <span aria-hidden="true">{label}</span>
        </span>
      ) : (
        <span>{children}</span>
      )}
      {srText && <span className="sr-only"> {srText}</span>}
      {icon && <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2} className="shrink-0 transition-transform duration-300 ease-out-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />}
    </>
  );
  if (!href) {
    return (
      <button type={type || "button"} onClick={onClick} disabled={disabled} className={classes} {...rest}>
        {inner}
      </button>
    );
  }
  const newTab = /^https?:\/\//.test(href);
  if (newTab || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
        {inner}
        {newTab && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {inner}
    </Link>
  );
}

// A plain underlined link with an arrow — "Read more", "All services".
export function TextLink({ href, children, className = "" }) {
  const newTab = /^https?:\/\//.test(href || "");
  const Comp = newTab ? "a" : Link;
  return (
    <Comp
      href={href}
      {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group inline-flex items-center gap-1.5 font-medium underline decoration-(--fg)/30 decoration-1 underline-offset-[6px] transition-colors duration-300 hover:decoration-(--fg) ${className}`}
    >
      {children}
      <ArrowUpRight aria-hidden="true" size={16} className="transition-transform duration-300 ease-out-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      {newTab && <span className="sr-only"> (opens in a new tab)</span>}
    </Comp>
  );
}
