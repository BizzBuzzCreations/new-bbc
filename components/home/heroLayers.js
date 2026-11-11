import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICE_LINES, SUB_SERVICE_COUNT } from "@/lib/siteNav";

// The hero's 3D stack for phones and tablets (the stack itself is wide-screen
// only): the same cards — the brand card, then the eight service lines — as a
// row you swipe. Each card is a slab with the stack's yellow rim and a real
// link to its service page; cards ease up to full size as they swipe in, and
// land one after another with the page. Plain scrolling row under reduced
// motion. Styles: "layers" in globals.css.
export default function HeroLayers() {
  return (
    <nav aria-label="The eight service lines" className="layers lg:hidden">
      <div className="layers-head">
        <p className="kicker text-(--mut)">One team · every layer</p>
        <p aria-hidden="true" className="layers-hint kicker text-(--mut)">
          Swipe →
        </p>
      </div>
      <ul className="layers-track no-scrollbar">
        <li aria-hidden="true" className="layers-item" style={{ "--k": 0 }}>
          <div className="layers-card layers-brand">
            <span className="layers-dot" />
            <span className="font-display layers-fig">{SUB_SERVICE_COUNT}</span>
            <span className="kicker layers-sub">
              services in
              <br />
              {SERVICE_LINES.length} lines
            </span>
          </div>
        </li>
        {SERVICE_LINES.map((l, k) => (
          <li key={l.href} className="layers-item" style={{ "--k": k + 1 }}>
            <Link
              href={l.href}
              aria-label={l.name}
              className="layers-card layers-link"
            >
              <span className="layers-dot" aria-hidden="true" />
              <span className="kicker layers-no">{l.no}</span>
              <span className="font-display layers-name">{l.short}</span>
              <ArrowUpRight
                aria-hidden="true"
                size={16}
                className="layers-arrow"
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
