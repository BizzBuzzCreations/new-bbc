import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Button from "@/components/brand/button";
import SignalField from "@/components/brand/signalField";
import Clock from "@/components/brand/clock";
import { SERVICE_LINES, INDUSTRIES, COMPANY_LINKS, INSIGHT_LINKS, LEGAL_LINKS, CONTACT, SOCIALS, OFFICES, mapsUrl } from "@/lib/siteNav";

// The site footer (rebuild, DESIGN_DIRECTION.md §6): the brand sign-off over
// a quiet Signal Field, the three offices with their live local time, link
// columns, the real certifications (Clutch, Google Partner), socials and
// the legal links. Server component; only the field and the clocks run on
// the client.
export default function Footer() {
  const year = new Date().getFullYear();
  const col = (title, items) => (
    <div>
      <p className="kicker mb-5 text-fog">{title}</p>
      <ul className="space-y-2.5">
        {items.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-[0.9375rem] text-white/80 transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-ink text-white">
      {/* sign-off: the brand line over a quiet Signal Field */}
      <div className="relative">
        <div className="absolute inset-0 -z-10 opacity-70">
          <SignalField variant="quiet" />
        </div>
        <div className="wrap flex flex-wrap items-end justify-between gap-8 py-20 md:py-28">
          <p className="font-display text-[clamp(2.75rem,8vw,8rem)] leading-[0.88]" aria-hidden="true">
            Signal from
            <br />
            the <span className="font-accent">noise.</span>
          </p>
          <div className="max-w-xs">
            <p className="text-fog">Marketing, software, AI and the people to run it — one team.</p>
            <div className="mt-6">
              <Button href="/contact" variant="solid">
                Start a project
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* offices */}
      <div className="wrap">
        <ul className="grid border-t border-white/10 md:grid-cols-3">
          {OFFICES.map((o, i) => (
            <li key={o.city} className={`py-8 md:px-8 ${i ? "border-t border-white/10 md:border-l md:border-t-0" : "md:pl-0"}`}>
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-display text-2xl">{o.city}</p>
                <Clock tz={o.tz} zone={o.zone} className="kicker text-buzz" />
              </div>
              <p className="kicker mt-1 text-fog">
                {o.tag} · {o.country}
              </p>
              <address className="mt-5 text-[0.9375rem] not-italic leading-relaxed text-white/75">
                {o.lines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                <a href={o.phone.href} className="text-white underline decoration-white/25 underline-offset-4 hover:decoration-buzz">
                  {o.phone.display}
                </a>
                <a href={mapsUrl(o.maps)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-fog hover:text-white">
                  Directions <ArrowUpRight aria-hidden="true" size={14} />
                  <span className="sr-only"> to our {o.city} office (opens in a new tab)</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* links */}
      <div className="wrap grid gap-12 border-t border-white/10 py-16 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link href="/" aria-label="BizzBuzz Creations — home" className="inline-block">
            <Image src="/bbc logo white.png" alt="BizzBuzz Creations" width={447} height={143} className="h-10 w-auto" />
          </Link>
          <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-fog">
            Digital marketing, software, AI and BPO from one team in Prayagraj, Kanpur and London — for businesses in India, the UK and beyond.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 px-3.5 py-2.5">
              <Image src="/clutch.png" alt="" width={24} height={24} className="h-6 w-6 object-contain" />
              <span className="text-xs leading-tight">
                <span className="block font-semibold">Clutch</span>
                <span className="text-fog">Verified partner</span>
              </span>
            </span>
            <span className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 px-3.5 py-2.5">
              <Image src="/CDL.png" alt="" width={24} height={24} className="h-6 w-6 object-contain" />
              <span className="text-xs leading-tight">
                <span className="block font-semibold">Google Partner</span>
                <span className="text-fog">Certified</span>
              </span>
            </span>
          </div>
        </div>
        <div className="lg:col-span-3">{col("Services", SERVICE_LINES.map((s) => ({ label: s.name, href: s.href })))}</div>
        <div className="lg:col-span-2">{col("Industries", INDUSTRIES.slice(0, 7).concat([{ label: "All industries", href: "/industries" }]))}</div>
        <div className="lg:col-span-3">
          {col("Company", COMPANY_LINKS.concat(INSIGHT_LINKS))}
          <div className="mt-8">
            <p className="kicker mb-3 text-fog">Contact</p>
            <a href={`mailto:${CONTACT.email}`} className="text-[0.9375rem] text-white underline decoration-white/25 underline-offset-4 hover:decoration-buzz">
              {CONTACT.email}
            </a>
          </div>
        </div>
      </div>

      {/* base */}
      <div className="wrap flex flex-col gap-6 border-t border-white/10 py-8 text-sm text-fog lg:flex-row lg:items-center lg:justify-between">
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {SOCIALS.map((s) => (
            <li key={s.href}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-6 items-center gap-1 hover:text-white">
                {s.label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {LEGAL_LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="inline-flex min-h-6 items-center hover:text-white">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <p>© {year} BizzBuzz Creations</p>
      </div>
    </footer>
  );
}
