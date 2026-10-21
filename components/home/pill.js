import Link from "next/link";

// The homepage's one button style: a rounded pill with a small dot before
// the label (GPG-style) that grows on hover. Every homepage call to action
// uses this.
//   variant "solid"   — filled brand blue, for the main action of a section
//   variant "outline" — thin white border, for everything else
// External links (http…) open in a new tab.
export default function Pill({ href, children, variant = "outline", className = "", srText, onClick, type }) {
  const look =
    variant === "solid"
      ? "bg-[#0B60B0] text-white border border-[#0B60B0] hover:bg-[#0d70cf] hover:border-[#0d70cf]"
      : "border border-white/25 text-white hover:border-white hover:bg-white hover:text-black";
  const classes = `group inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#40A2D8] ${look} ${className}`;
  const inner = (
    <>
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current opacity-80 transition-transform duration-200 group-hover:scale-[1.7]" />
      {children}
      {srText && <span className="sr-only"> {srText}</span>}
    </>
  );
  if (!href) {
    return (
      <button type={type || "button"} onClick={onClick} className={classes}>
        {inner}
      </button>
    );
  }
  const external = /^https?:\/\//.test(href);
  return (
    <Link href={href} className={classes} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {inner}
    </Link>
  );
}
