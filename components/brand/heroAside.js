import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// A short list of related links beside a page's title (so the right of the
// hero is useful, not empty): a mono title and up to eight links.
// `links`: [{ label, href }]; `current` an href to mark.
export default function HeroAside({ title, links = [], current, className = "" }) {
  const list = links.filter((l) => l?.label && l?.href).slice(0, 8);
  if (!list.length) return null;
  return (
    <aside aria-label={title} className={className}>
      <p className="kicker border-b border-(--fg) pb-3 text-(--mut)">{title}</p>
      <ul>
        {list.map((l, i) => (
          <li key={l.href}>
            <Link href={l.href} aria-current={l.href === current ? "page" : undefined} className="group flex items-baseline gap-3 border-b border-(--line) py-2.5 text-[0.9375rem] transition-colors hover:text-(--mut) aria-[current=page]:font-medium">
              <span className="kicker w-5 shrink-0 text-(--mut)">{String(i + 1).padStart(2, "0")}</span>
              <span className="flex-1">{l.label}</span>
              <ArrowUpRight aria-hidden="true" size={14} className="shrink-0 opacity-40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
