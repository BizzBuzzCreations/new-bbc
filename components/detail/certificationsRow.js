import Image from "next/image";
import RichText from "@/components/ui/richText";
import { CERTIFICATIONS } from "@/lib/certifications";

// Certifications (redesign) — the four real badges in one still row (2 × 2
// on phones) under a heading, instead of a carousel: badge on a white disc
// (the logos are made for a light background), name and status, and an
// optional line about it (`title`). `items` replaces the built-in list
// (/about's badges and lines are editable); `className` sets the background
// (none on the beams). Badges lazy-load at their small size.
export default function CertificationsRow({ id, eyebrow = "Credentials", heading, subtext, items = CERTIFICATIONS, className = "bg-black", children }) {
  return (
    <section id={id} className={`scroll-mt-20 text-white ${className}`}>
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
        <div className="reveal grid gap-6 md:grid-cols-[2fr_3fr] md:items-end md:gap-16">
          <div>
            <p className="text-sm text-[#40A2D8]">{eyebrow}</p>
            <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
          </div>
          {(subtext || children) && (
            <div>
              {subtext && <RichText as="p" text={subtext} className="text-base leading-relaxed text-white/70 md:text-lg" />}
              {children}
            </div>
          )}
        </div>
        <ul className="reveal-stagger mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:mt-16 lg:grid-cols-4">
          {items.map((cert) => (
            <li key={cert.label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0b0e16] p-4 sm:p-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white sm:h-16 sm:w-16">
                <Image src={cert.src} alt={cert.alt} width={44} height={44} className="h-9 w-9 object-contain sm:h-11 sm:w-11" />
              </span>
              <span>
                <span className="block text-sm font-medium text-white sm:text-base">{cert.label}</span>
                <span className="block text-xs text-white/60 sm:text-sm">{cert.sub}</span>
                {cert.title && <RichText as="span" text={cert.title} className="mt-2 hidden text-sm leading-snug text-white/70 sm:block" />}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
