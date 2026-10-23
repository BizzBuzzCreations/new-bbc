import Link from "next/link";
import RichText from "@/components/ui/richText";

// Heading + text + a cloud of linked pills (/how-we-work's industries,
// redesign): each pill has the page's icon and name and links to it.
// `links`: { href, label, icon }.
export default function LinkChips({ eyebrow, heading, tagline, text, links }) {
  if (!links?.length) return null;
  return (
    <section className="bg-black text-white">
      <div className="reveal-stagger mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[2fr_3fr] md:gap-16 md:px-10 py-16 md:py-20">
        <div>
          {eyebrow && <p className="text-sm text-[#40A2D8]">{eyebrow}</p>}
          <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
          {tagline && <p className="mt-4 text-lg text-[#40A2D8]">{tagline}</p>}
          {text && <RichText as="p" text={text} className="mt-5 text-base leading-relaxed text-white/70 md:text-lg" />}
        </div>
        <ul className="flex flex-wrap content-start gap-2.5 md:self-end">
          {links.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <Link
                href={href}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm text-white transition-colors duration-200 hover:border-[#40A2D8] hover:bg-[#40A2D8] hover:text-black focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#40A2D8]"
              >
                {Icon && <Icon size={16} aria-hidden="true" />}
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
