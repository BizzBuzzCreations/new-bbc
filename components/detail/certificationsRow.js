import Image from "next/image";
import RichText from "@/components/ui/richText";
import SectionHead from "@/components/brand/sectionHead";
import { CERTIFICATIONS } from "@/lib/certifications";

// The real certifications: a hairline row of logo, name and what it is.
export default function CertificationsRow({ id, eyebrow = "Credentials", heading, subtext, items = CERTIFICATIONS, children, no }) {
  return (
    <section id={id} className="on-paper scroll-mt-10 border-t border-(--line)">
      <div className="wrap py-7 md:py-10">
        <SectionHead no={no} kicker={eyebrow} heading={heading} text={subtext} size="m" aside={children} />
        <ul className="mt-8 grid border-t border-(--fg) sm:grid-cols-2 md:mt-10 lg:grid-cols-4">
          {items.map((cert) => (
            <li key={cert.label} className="border-b border-(--line) py-8 sm:pr-8">
              <Image src={cert.src} alt={cert.alt} width={44} height={44} className="h-11 w-11 object-contain" />
              <p className="font-display mt-6 text-xl tracking-[-0.03em]">{cert.label}</p>
              <p className="kicker mt-1 text-(--mut)">{cert.sub}</p>
              {cert.title && <RichText as="p" text={cert.title} className="mt-4 text-sm leading-relaxed text-(--mut)" />}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
