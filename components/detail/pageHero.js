import Image from "next/image";
import RichText from "@/components/ui/richText";
import Button from "@/components/brand/button";
import AccentText from "@/components/brand/accentText";
import Breadcrumb from "@/components/brand/breadcrumb";
import HeroAside from "@/components/brand/heroAside";

const EXPLORE = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Insights & blog", href: "/blog" },
  { label: "About us", href: "/about" },
  { label: "Careers", href: "/career" },
  { label: "Contact", href: "/contact" },
];

// Hero of the company pages (about, team, careers, FAQ, guides, blog, the
// services and industries indexes…): breadcrumb, the title huge and two-tone,
// an optional tagline, the description and buttons below on the right. A
// real photograph (`image` with `photo`, or any `media`) goes in a wide frame
// under the text — pages pass `photo` only for real photographs; stock or
// illustrated images are left out. `actions`: [{ text, href, variant }].
export default function PageHero({ label, parent, title, tagline, description, actions = [], image, photo = false, imageAlt = "", media, aside, children }) {
  const buttons = actions.filter((a) => a?.text && a?.href);
  const showPhoto = photo && image;
  return (
    <section className="on-paper relative pt-24 md:pt-32">
      <div className="wrap pb-7 md:pb-10">
        <Breadcrumb items={[{ label: "Home", href: "/" }, parent, { label }].filter(Boolean)} />
        <div className="mt-6 grid gap-10 md:mt-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <h1 className="font-display max-w-[17ch] text-balance text-[clamp(2.7rem,8vw,8.5rem)] leading-[0.92] tracking-[-0.055em] motion-safe:animate-[fade-up_0.9s_var(--ease-out-soft)_both]">
              <AccentText text={title} />
            </h1>
          </div>
          {(aside || !(media || showPhoto)) && (
            <HeroAside title={aside?.title || "Explore"} links={aside?.links || EXPLORE.filter((l) => l.label.toLowerCase() !== String(label).toLowerCase())} className="lg:col-span-3 lg:col-start-10 lg:pt-3" />
          )}
        </div>
        <div className="mt-6 grid gap-8 border-t border-(--line) pt-8 md:mt-12 md:grid-cols-12 md:gap-10">
          <p className="kicker text-(--mut) md:col-span-3">{tagline || label}</p>
          <div className="md:col-span-5">
            {description && <RichText as="p" text={description} className="text-lg leading-relaxed md:text-xl" />}
            {children}
          </div>
          {buttons.length > 0 && (
            <div className="flex flex-wrap items-start gap-3 md:col-span-4">
              {buttons.map(({ text, href, variant }, i) => (
                <Button key={text} href={href} data-bizzbee-avoid size="lg" variant={variant === "outline" || i > 0 ? "outline" : "solid"}>
                  {text}
                </Button>
              ))}
            </div>
          )}
        </div>
        {(media || showPhoto) && (
          <div className="mt-6 md:mt-8">
            {media || (
              <div style={{ position: "relative" }} className="relative aspect-[16/9] overflow-hidden bg-paper-2 md:aspect-[21/9]">
                <Image src={image} alt={imageAlt} fill preload fetchPriority="high" sizes="(min-width: 1440px) 1360px, 100vw" className="object-cover" />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
