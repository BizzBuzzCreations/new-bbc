import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// The site's one button (DESIGN_DIRECTION.md §7). A pill whose label rolls
// up on hover (CSS .roll in globals.css) and whose arrow slides out and back.
//   variant "solid"   — buzz yellow; the main action of a section
//   variant "outline" — hairline on ink; secondary actions
//   variant "ink"     — black; the main action on a paper (light) section
//   variant "line"    — hairline on paper; secondary on light sections
// size "md" (default) | "lg". External links (http…) open in a new tab and
// say so to screen readers. With no href it renders a <button>.
const LOOKS = {
  solid: "bg-buzz text-buzz-ink hover:bg-[#ffe066]",
  outline: "border border-white/25 text-white hover:border-white hover:bg-white hover:text-ink",
  ink: "bg-ink text-white hover:bg-ink-3",
  line: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-white",
};

export default function Button({ href, children, variant = "solid", size = "md", className = "", srText, onClick, type, disabled, icon = true, ...rest }) {
  const sizing = size === "lg" ? "h-14 pl-7 pr-2 text-base gap-4" : "h-12 pl-5 pr-1.5 text-[0.9375rem] gap-3";
  const iconBox = size === "lg" ? "h-10 w-10" : "h-9 w-9";
  const tone = variant === "solid" ? "bg-buzz-ink/10" : variant === "ink" ? "bg-white/10" : "bg-current/10";
  const classes = `group relative inline-flex select-none items-center justify-between rounded-full font-medium transition-[background-color,color,border-color] duration-300 ease-out-soft disabled:pointer-events-none disabled:opacity-50 ${icon ? sizing : `${size === "lg" ? "h-14 px-7 text-base" : "h-12 px-5 text-[0.9375rem]"}`} ${LOOKS[variant] || LOOKS.solid} ${className}`;
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
      {icon && (
        <span aria-hidden="true" className={`relative flex ${iconBox} shrink-0 items-center justify-center overflow-hidden rounded-full ${tone}`}>
          <ArrowUpRight size={17} strokeWidth={2} className="transition-transform duration-500 ease-out-soft group-hover:translate-x-5 group-hover:-translate-y-5" />
          <ArrowUpRight size={17} strokeWidth={2} className="absolute -translate-x-5 translate-y-5 transition-transform duration-500 ease-out-soft group-hover:translate-x-0 group-hover:translate-y-0" />
        </span>
      )}
    </>
  );
  if (!href) {
    return (
      <button type={type || "button"} onClick={onClick} disabled={disabled} className={classes} {...rest}>
        {inner}
      </button>
    );
  }
  const external = /^https?:\/\//.test(href) || href.startsWith("tel:") || href.startsWith("mailto:");
  const newTab = /^https?:\/\//.test(href);
  if (external) {
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

// A quiet text link with an arrow — "Read more", "View all services".
export function TextLink({ href, children, tone = "light", className = "" }) {
  const color = tone === "dark" ? "text-ink decoration-ink/30 hover:decoration-ink" : "text-white decoration-white/30 hover:decoration-buzz";
  const newTab = /^https?:\/\//.test(href || "");
  const Comp = newTab ? "a" : Link;
  return (
    <Comp
      href={href}
      {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group inline-flex items-center gap-1.5 font-medium underline decoration-1 underline-offset-[6px] transition-colors duration-300 ${color} ${className}`}
    >
      {children}
      <ArrowUpRight aria-hidden="true" size={16} className="transition-transform duration-300 ease-out-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      {newTab && <span className="sr-only"> (opens in a new tab)</span>}
    </Comp>
  );
}
