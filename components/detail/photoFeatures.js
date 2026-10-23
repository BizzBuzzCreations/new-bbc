import Image from "next/image";
import { Check } from "lucide-react";
import RichText from "@/components/ui/richText";
import Pill from "@/components/home/pill";

// Photo + heading + a short list of reasons (/about's "Why businesses
// continue working with us", redesign): the photo on the left, the heading
// and the reasons as a 2 × 2 thin-line list on the right (phones: text,
// then photo). `features`: { title, description }. Photo lazy-loads. Also
// /career's "Grow beyond your job description", with a `tagline`, `text`,
// a button (`action`: { text, href }) and its 2 × 2 photos as `media`.
export default function PhotoFeatures({ eyebrow, heading, tagline, text, image, alt = "", media, features, action }) {
  if (!features?.length) return null;
  return (
    <section className="overflow-x-clip bg-black text-white">
      <div className="reveal-sides mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[2fr_3fr] md:items-center md:gap-16 md:px-10 py-16 md:py-20">
        {media ? (
          <div className="order-2 md:order-none">{media}</div>
        ) : (
          image && (
            <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-3xl bg-[#0a0a0a] md:order-none md:aspect-[4/5]">
              <Image src={image} alt={alt} fill sizes="(min-width: 1280px) 460px, (min-width: 768px) 38vw, 100vw" className="object-cover" />
            </div>
          )
        )}
        <div className="order-1 md:order-none">
          {eyebrow && <p className="text-sm text-[#40A2D8]">{eyebrow}</p>}
          <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
          {tagline && <p className="mt-4 text-lg text-[#40A2D8]">{tagline}</p>}
          {text && <RichText as="p" text={text} className="mt-5 text-base leading-relaxed text-white/70 md:text-lg" />}
          <ul className="mt-10 grid border-t border-white/10 sm:grid-cols-2 sm:gap-x-10">
            {features.map(({ title, description }) => (
              <li key={title} className="flex gap-4 border-b border-white/10 py-6">
                <span aria-hidden="true" className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0B60B0]/25 text-[#40A2D8]">
                  <Check size={12} strokeWidth={3} />
                </span>
                <div>
                  <h3 className="text-base font-medium leading-snug text-white">{title}</h3>
                  <RichText as="p" text={description} className="mt-2 text-sm leading-relaxed text-white/65" />
                </div>
              </li>
            ))}
          </ul>
          {action?.text && action?.href && (
            <div className="mt-8">
              <Pill href={action.href} variant="solid">{action.text}</Pill>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
