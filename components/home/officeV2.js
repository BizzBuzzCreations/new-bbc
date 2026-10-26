import { MapPin, Phone, ArrowUpRight } from "lucide-react";
import Pill from "@/components/home/pill";
import { UK_OFFICE, mapsUrl } from "@/lib/offices";

// "Our UK office" (UK location page, redesign) — the London address, phone
// and time zone with Call / Get directions, with the London skyline (the
// footer card's, larger) along the card's bottom edge (at most its own
// 840px width, so it stays sharp). Shown just before the closing call to
// action, so a UK visitor sees a local, reachable team. Office details come
// from lib/offices.js (shared with the footer).
export default function OfficeV2() {
  const o = UK_OFFICE;
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
        <div className="reveal relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0e16] p-6 sm:p-10">
          <div className="relative z-10 grid gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <p className="text-sm text-[#40A2D8]">Our UK office</p>
              <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">A team you can call in London</h2>
              <p className="mt-4 text-sm text-white/60">{o.city}</p>
            </div>
            <div className="space-y-4 text-base text-white/80">
              <p className="flex gap-3">
                <MapPin size={18} aria-hidden="true" className="mt-1 shrink-0 text-[#40A2D8]" />
                <span>
                  {o.lines.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Phone size={18} aria-hidden="true" className="shrink-0 text-[#40A2D8]" />
                <a href={o.phone.href} className="hover:text-[#40A2D8]">{o.phone.display}</a>
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Pill href={o.phone.href} variant="solid">Call our UK team</Pill>
                <a
                  href={mapsUrl(o.maps)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 rounded-full border border-white/25 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white hover:text-black"
                >
                  Get directions <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element -- pre-sized 1x / 2x skyline files (footer's); decorative */}
          <img
            src="/skyline-london-840.webp"
            srcSet="/skyline-london-420.webp 420w, /skyline-london-840.webp 840w"
            sizes="(min-width: 900px) 840px, 100vw"
            alt=""
            width={840}
            height={229}
            loading="lazy"
            decoding="async"
            className="pointer-events-none relative -mx-6 -mb-6 mt-10 block h-auto w-[calc(100%+3rem)] max-w-none opacity-70 [mask-image:linear-gradient(to_right,transparent,#000_20%,#000_80%,transparent)] sm:-mx-10 sm:-mb-10 sm:w-[calc(100%+5rem)] md:mx-auto md:w-full md:max-w-[840px]"
          />
        </div>
      </div>
    </section>
  );
}
