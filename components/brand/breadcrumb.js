import Link from "next/link";

// HOME / SERVICES / SEO — the last item is the current page.
export default function Breadcrumb({ items = [], className = "" }) {
  const list = items.filter((i) => i?.label);
  if (!list.length) return null;
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="kicker flex flex-wrap items-center gap-x-2 gap-y-1 text-(--mut)">
        {list.map((item, i) => {
          const last = i === list.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-2">
              {last || !item.href ? (
                <span aria-current={last ? "page" : undefined} className="text-(--fg)">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="transition-colors hover:text-(--fg)">
                  {item.label}
                </Link>
              )}
              {!last && <span aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
