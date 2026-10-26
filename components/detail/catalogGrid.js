import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import RichText from "@/components/ui/richText";
import SpotlightList from "@/components/home/spotlightList";

// Picture cards linking to the pages below an index page (redesign): the 8
// services on /services, the 15 industries on /industries. Each card: its
// picture on top, melting into the card, then the name, text and link
// text; the whole card is the link. `cols` sets the wide-screen columns
// (4 by default), 2 on tablets and phones (phones show the picture and name
// only, like the homepage's services; the text joins from sm up).
// `imageAspect`: the picture's shape (phone, then sm up). Same hover as the
// homepage's services: the border lights up, a soft light follows the
// mouse, the picture grows a touch. `items`: { key, label, href, icon,
// description, buttonText, image } — a removed image ("") shows the icon.
// Pictures lazy-load.
const CARD_BG = "#080c18";

export default function CatalogGrid({ id, eyebrow, heading, subtext, items, cols = "xl:grid-cols-4", imageAspect = "aspect-[4/3] sm:aspect-[1296/1017]" }) {
  if (!items?.length) return null;
  return (
    <section id={id} className="scroll-mt-24 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
        <div className="reveal grid gap-6 md:grid-cols-[2fr_3fr] md:items-end md:gap-16">
          <div>
            {eyebrow && <p className="mb-4 text-sm text-[#40A2D8]">{eyebrow}</p>}
            <h2 className="font-display text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
          </div>
          {subtext && <RichText as="p" text={subtext} className="text-base leading-relaxed text-white/70 md:text-lg" />}
        </div>

        <SpotlightList className={`reveal-stagger mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:mt-16 xl:gap-5 ${cols}`}>
          {items.map(({ key, label, href, icon: Icon, description, buttonText, image }, i) => (
            <li
              key={key}
              data-spotlight
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 ring-[#40A2D8] transition-colors duration-300 hover:border-[#40A2D8]/50 has-[a:focus-visible]:ring-2 sm:rounded-3xl"
              style={{ backgroundColor: CARD_BG }}
            >
              <div className={`relative overflow-hidden ${imageAspect}`}>
                {image ? (
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(min-width: 1280px) 300px, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                ) : (
                  Icon && <Icon aria-hidden="true" className="absolute inset-0 m-auto h-12 w-12 text-[#40A2D8]" />
                )}
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3" style={{ background: `linear-gradient(to top, ${CARD_BG}, transparent)` }} />
              </div>

              {/* the light that follows the mouse (SpotlightList sets --x / --y) */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: "radial-gradient(280px circle at var(--x, 50%) var(--y, 50%), rgba(64, 162, 216, 0.16), transparent 70%)" }}
              />

              <div className="relative flex flex-1 flex-col p-4 pt-1 sm:p-5 sm:pt-1 md:p-6 md:pt-1">
                <h3 className="font-display text-base leading-snug text-white transition-colors duration-200 group-hover:text-[#40A2D8] sm:text-xl">
                  <Link href={href} className="after:absolute after:inset-0 after:content-[''] focus:outline-none">
                    {label}
                  </Link>
                </h3>
                {/* noLink — the whole card is already a link */}
                <RichText as="p" text={description} noLink className="mt-3 hidden text-sm leading-relaxed text-white/65 sm:block" />
                {buttonText && (
                  <span className="mt-auto hidden items-center gap-1.5 pt-5 text-sm font-medium text-[#40A2D8] sm:inline-flex">
                    {buttonText}
                    <ArrowUpRight size={16} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                )}
              </div>
            </li>
          ))}
        </SpotlightList>
      </div>
    </section>
  );
}
