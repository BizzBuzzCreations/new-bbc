import Link from "next/link";

// Breadcrumb in the instrument style: HOME / SERVICES / SEO. `items`:
// [{ label, href? }] — the last one is the current page. `tone` light | dark.
export default function Breadcrumb({ items = [], tone = "light", className = "" }) {
  const list = items.filter((i) => i?.label);
  if (!list.length) return null;
  const muted = tone === "dark" ? "text-stone hover:text-ink" : "text-fog hover:text-white";
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="kicker flex flex-wrap items-center gap-x-2 gap-y-1">
        {list.map((item, i) => {
          const last = i === list.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-2">
              {last || !item.href ? (
                <span aria-current={last ? "page" : undefined} className={tone === "dark" ? "text-ink" : "text-white"}>
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className={`transition-colors ${muted}`}>
                  {item.label}
                </Link>
              )}
              {!last && (
                <span aria-hidden="true" className={tone === "dark" ? "text-ink/30" : "text-white/30"}>
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
