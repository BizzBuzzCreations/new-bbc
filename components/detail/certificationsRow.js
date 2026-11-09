import Image from "next/image";
import RichText from "@/components/ui/richText";
import SectionHead from "@/components/brand/sectionHead";
import { CERTIFICATIONS } from "@/lib/certifications";

// Certifications (about, industries) (rebuild): a paper section with each
// real certification as a tile — logo on white, name, what it is.
export default function CertificationsRow({ id, eyebrow = "Credentials", heading, subtext, items = CERTIFICATIONS, children, no }) {
  return (
    <section id={id} className="scroll-mt-20 bg-paper text-ink">
      <div className="wrap py-24 md:py-36">
        <SectionHead no={no} kicker={eyebrow} heading={heading} text={subtext} tone="dark" size="m" aside={children} />
        <ul className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-[20px] border border-ink/15 bg-ink/15 md:mt-20 lg:grid-cols-4">
          {items.map((cert) => (
            <li key={cert.label} className="flex flex-col bg-paper p-6 md:p-8">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                <Image src={cert.src} alt={cert.alt} width={44} height={44} className="h-11 w-11 object-contain" />
              </span>
              <span className="font-display mt-6 text-xl">{cert.label}</span>
              <span className="kicker mt-1 text-stone">{cert.sub}</span>
              {cert.title && <RichText as="span" text={cert.title} className="mt-4 hidden text-sm leading-relaxed text-stone sm:block" />}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
