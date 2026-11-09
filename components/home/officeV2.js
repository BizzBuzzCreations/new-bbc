import { ArrowUpRight } from "lucide-react";
import Button from "@/components/brand/button";
import Kicker from "@/components/brand/kicker";
import Clock from "@/components/brand/clock";
import { UK_OFFICE, mapsUrl } from "@/lib/offices";

// The UK office (UK page) (rebuild): a paper section — heading, the London
// time live, address, phone, call / directions, and the London skyline as a
// line drawing along the bottom.
export default function OfficeV2() {
  const o = UK_OFFICE;
  return (
    <section className="relative overflow-hidden bg-paper text-ink">
      <div className="wrap grid gap-12 pb-10 pt-24 md:pt-36 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <Kicker tone="dark">Our UK office</Kicker>
          <h2 className="font-display mt-6 text-[clamp(2.4rem,5vw,4.75rem)] leading-[0.95]">
            A team you can call in <span className="font-accent">London</span>
          </h2>
          <p className="kicker mt-8 text-stone">
            Local time · <Clock tz="Europe/London" className="text-ink" />
          </p>
        </div>
        <div className="lg:col-span-5 lg:col-start-8 lg:pt-14">
          <address className="text-xl not-italic leading-relaxed">
            {o.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <p className="mt-4 text-lg">
            <a href={o.phone.href} className="underline decoration-ink/30 underline-offset-4 hover:decoration-ink">
              {o.phone.display}
            </a>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={o.phone.href} variant="ink">
              Call our UK team
            </Button>
            <a href={mapsUrl(o.maps)} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center gap-1.5 rounded-full border border-ink/25 px-5 text-[0.9375rem] font-medium transition-colors hover:border-ink hover:bg-ink hover:text-white">
              Get directions <ArrowUpRight size={16} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element -- pre-sized skyline line drawing; decorative */}
      <img
        src="/skyline-london-840.webp"
        srcSet="/skyline-london-420.webp 420w, /skyline-london-840.webp 840w"
        sizes="(min-width: 900px) 840px, 100vw"
        alt=""
        width={840}
        height={229}
        loading="lazy"
        decoding="async"
        className="pointer-events-none mx-auto block h-auto w-full max-w-[1100px] opacity-60 invert [mask-image:linear-gradient(to_right,transparent,#000_15%,#000_85%,transparent)]"
      />
    </section>
  );
}
