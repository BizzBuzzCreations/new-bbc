import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Clock from "@/components/brand/clock";
import {
  SERVICE_LINES,
  INDUSTRIES,
  COMPANY_LINKS,
  INSIGHT_LINKS,
  LEGAL_LINKS,
  CONTACT,
  SOCIALS,
  OFFICES,
  mapsUrl,
} from "@/lib/siteNav";

// The footer: three offices with their live local time, the site's links,
// the real certifications and socials, and the name set huge across the
// bottom edge (Kerna, Pier Gorelli). Ink surface. Server component; only the
// clocks run on the client.
export default function Footer() {
  const year = new Date().getFullYear();
  const col = (title, items) => (
    <div>
      <p className="kicker mb-5 text-(--mut)">{title}</p>
      <ul className="space-y-2.5">
        {items.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-[0.9375rem] text-(--fg)/85 transition-colors hover:text-(--fg)"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <footer className="on-ink relative overflow-clip">
      <div className="wrap">
        <ul className="grid border-b border-(--line) md:grid-cols-3">
          {OFFICES.map((o, i) => (
            <li
              key={o.city}
              className={`py-10 md:px-8 ${i ? "border-t border-(--line) md:border-l md:border-t-0" : "md:pl-0"}`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-display text-3xl">{o.city}</p>
                <Clock
                  tz={o.tz}
                  zone={o.zone}
                  className="kicker text-(--mut)"
                />
              </div>
              <p className="kicker mt-1 text-(--mut)">
                {o.tag} · {o.country}
              </p>
              <address className="mt-6 text-[0.9375rem] not-italic leading-relaxed text-(--fg)/80">
                {o.lines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
              <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm">
                <a
                  href={o.phone.href}
                  className="underline decoration-(--fg)/25 underline-offset-4 hover:decoration-(--fg)"
                >
                  {o.phone.display}
                </a>
                <a
                  href={mapsUrl(o.maps)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-(--mut) hover:text-(--fg)"
                >
                  Directions <ArrowUpRight aria-hidden="true" size={13} />
                  <span className="sr-only">
                    {" "}
                    to our {o.city} office (opens in a new tab)
                  </span>
                </a>
              </p>
            </li>
          ))}
        </ul>

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="kicker mb-5 text-(--mut)">Contact</p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-lg underline decoration-(--fg)/25 underline-offset-4 hover:decoration-(--fg)"
            >
              {CONTACT.email}
            </a>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-(--line) py-1.5 pl-1.5 pr-4">
                <Image
                  src="/clutch.png"
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-full bg-white object-contain p-0.5"
                />
                <span className="text-xs leading-tight">
                  <span className="block font-medium">Clutch</span>
                  <span className="text-(--mut)">Verified partner</span>
                </span>
              </span>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-(--line) py-1.5 pl-1.5 pr-4">
                <Image
                  src="/CDL.png"
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-full bg-white object-contain p-0.5"
                />
                <span className="text-xs leading-tight">
                  <span className="block font-medium">Google Partner</span>
                  <span className="text-(--mut)">Certified</span>
                </span>
              </span>
            </div>
          </div>
          <div className="lg:col-span-3">
            {col(
              "Services",
              SERVICE_LINES.map((s) => ({ label: s.name, href: s.href })),
            )}
          </div>
          <div className="lg:col-span-3">
            {col(
              "Industries",
              INDUSTRIES.slice(0, 7).concat([
                { label: "All industries", href: "/industries" },
              ]),
            )}
          </div>
          <div className="lg:col-span-3">
            {col("Company", COMPANY_LINKS.concat(INSIGHT_LINKS))}
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-(--line) py-7 text-sm text-(--mut) lg:flex-row lg:items-center lg:justify-between">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {SOCIALS.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-6 items-center hover:text-(--fg)"
                >
                  {s.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {LEGAL_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-flex min-h-6 items-center hover:text-(--fg)"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p>© {year} BizzBuzz Creations</p>
        </div>
      </div>
      <p
        aria-hidden="true"
        className="wordmark-rise font-display wrap -mb-[0.16em] select-none whitespace-nowrap pb-0 text-[min(10.2vw,9.5rem)] leading-[0.82] tracking-[-0.06em]"
      >
        BizzBuzz Creations
      </p>
    </footer>
  );
}
