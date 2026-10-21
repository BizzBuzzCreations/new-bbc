import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import RichText from "@/components/ui/richText";
import { resolveServices } from "@/components/sections/ourServices";
import SpotlightList from "@/components/home/spotlightList";

// Services (redesign) — a bento grid of picture cards built around each
// service's own illustration. On wide screens (xl): three rows — two wide
// cards, four small ones, two wide — where a wide card shows the whole
// illustration (its own 512×242 shape, so never cropped) with the text over
// its dark left side, and a small card shows the illustrated part on top
// with the text below. Below xl: a two-column grid of small cards (phones
// show the name and one-line promise; the description joins from sm up).
// Hover: the border lights up, a soft light follows the mouse, the picture
// grows a touch, the arrow (bottom right, clear of the illustration; not on
// phones) fills.
// The whole card is the link. Same 8 services and dashboard text as before.
const WIDE = new Set([0, 1, 6, 7]);
const CARD_BG = "#080c18"; // the illustrations' own background, so they blend in

export default function ServicesV2({ content }) {
  const eyebrow = content?.servicesEyebrow || "Our Services";
  const heading = content?.servicesHeading || "Digital Marketing & Business Solutions";
  const subtext = content?.servicesSubtext || "";
  const services = resolveServices(content);

  return (
    <section id="services" className="scroll-mt-20 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-24">
        {/* same split and gap as the cards, so the intro starts over the third card */}
        <div className="reveal-stagger grid gap-6 md:grid-cols-2 md:gap-4 xl:gap-5">
          <div>
            <p className="text-sm text-[#40A2D8]">{eyebrow}</p>
            <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
          </div>
          {subtext && <RichText as="p" text={subtext} className="self-end text-base text-white/70 md:text-lg" />}
        </div>

        <SpotlightList className="reveal-stagger mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:mt-16 xl:grid-cols-4 xl:gap-5">
          {services.map((s, i) => {
            const wide = WIDE.has(i);
            const Icon = s.icon;
            return (
              <li
                key={s.heading}
                data-spotlight
                className={`group relative overflow-hidden rounded-2xl border border-white/10 ring-[#40A2D8] transition-colors duration-300 hover:border-[#40A2D8]/50 has-[a:focus-visible]:ring-2 sm:rounded-3xl ${
                  wide ? "xl:col-span-2 xl:aspect-[512/242]" : ""
                }`}
                style={{ backgroundColor: CARD_BG }}
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden sm:aspect-[16/10] ${
                    wide ? "xl:absolute xl:inset-0 xl:aspect-auto" : "xl:aspect-[4/3]"
                  }`}
                >
                  {s.image ? (
                    <Image
                      src={s.image}
                      alt=""
                      fill
                      sizes={wide ? "(min-width: 1280px) 600px, 50vw" : "(min-width: 1280px) 300px, 50vw"}
                      className="object-cover object-right transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  ) : (
                    Icon && <Icon aria-hidden="true" className="absolute inset-0 m-auto h-12 w-12 text-[#40A2D8]" />
                  )}
                  {/* the picture melts into the card where the text starts */}
                  <div
                    aria-hidden="true"
                    className={`absolute inset-x-0 bottom-0 h-1/3 ${wide ? "xl:hidden" : ""}`}
                    style={{ background: `linear-gradient(to top, ${CARD_BG}, transparent)` }}
                  />
                </div>

                {/* the light that follows the mouse (SpotlightList sets --x / --y) */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "radial-gradient(280px circle at var(--x, 50%) var(--y, 50%), rgba(64, 162, 216, 0.16), transparent 70%)" }}
                />
                <span className="absolute left-4 top-4 text-xs tabular-nums text-white/60 sm:left-5 sm:top-5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute bottom-5 right-5 hidden h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-colors duration-300 group-hover:border-[#40A2D8] group-hover:bg-[#40A2D8] group-hover:text-black sm:flex"
                >
                  <ArrowUpRight size={16} />
                </span>

                <div className={`relative p-4 pt-1 sm:p-5 sm:pt-1 sm:pr-16 ${wide ? "xl:flex xl:h-full xl:w-1/2 xl:flex-col xl:justify-end xl:p-7" : ""}`}>
                  <h3 className="font-display text-lg leading-snug text-white transition-colors duration-200 group-hover:text-[#40A2D8] sm:text-xl xl:text-2xl">
                    <Link href={s.href} className="after:absolute after:inset-0 after:content-[''] focus:outline-none">
                      {s.heading}
                    </Link>
                  </h3>
                  {s.subheading && <p className="mt-1.5 text-xs leading-snug text-[#40A2D8] sm:text-sm">{s.subheading}</p>}
                  <RichText
                    as="p"
                    text={s.description}
                    className={`mt-3 hidden text-sm leading-relaxed text-white/65 sm:line-clamp-3 ${wide ? "xl:line-clamp-4" : ""}`}
                  />
                </div>
              </li>
            );
          })}
        </SpotlightList>
      </div>
    </section>
  );
}
