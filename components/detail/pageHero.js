import Image from "next/image";
import RichText from "@/components/ui/richText";
import Button from "@/components/brand/button";
import AccentText from "@/components/brand/accentText";
import Breadcrumb from "@/components/brand/breadcrumb";

// Hero of the company pages (about, team, careers, FAQ, guides, blog,
// services and industries indexes…) (rebuild): breadcrumb, a big H1 with
// its accent word, an optional tagline, the description and buttons; with
// an `image` (or any `media`) the visual sits beside the text, otherwise the
// text uses the full width (heading left, body right). `actions`:
// [{ text, href, variant }]. `children` go under the body.
export default function PageHero({ label, parent, title, tagline, description, actions = [], image, imageAlt = "", imageAspect = "aspect-[4/3]", imageClassName = "", media, background = "bg-ink", children }) {
  const buttons = actions.filter((a) => a?.text && a?.href);
  const crumbs = <Breadcrumb items={[{ label: "Home", href: "/" }, parent, { label }].filter(Boolean)} />;
  const heading = (
    <>
      <h1 className="font-display text-balance text-[clamp(2.6rem,6.4vw,6.5rem)] leading-[0.93] motion-safe:animate-[hero-rise_0.9s_var(--ease-out-soft)_both]">
        <AccentText text={title} />
      </h1>
      {tagline && <p className="mt-6 text-xl text-white">{tagline}</p>}
    </>
  );
  const body = (
    <div className="motion-safe:animate-[hero-rise_0.9s_0.12s_var(--ease-out-soft)_both]">
      {description && <RichText as="p" text={description} className="text-lg leading-relaxed text-fog" />}
      {buttons.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-3">
          {buttons.map(({ text, href, variant }, i) => (
            <Button key={text} href={href} variant={variant === "solid" || (!variant && i === 0) ? "solid" : "outline"}>
              {text}
            </Button>
          ))}
        </div>
      )}
      {children}
    </div>
  );

  return (
    <section className={`grain relative isolate overflow-hidden ${background} pt-28 text-white md:pt-36`}>
      <div className="wrap pb-16 md:pb-24">
        {crumbs}
        {image || media ? (
          <div className="mt-12 grid gap-12 md:mt-20 lg:grid-cols-12 lg:items-center lg:gap-10">
            <div className="lg:col-span-6">
              {heading}
              <div className="mt-8">{body}</div>
            </div>
            <div className="lg:col-span-6">
              {media || (
                <div className={`relative w-full overflow-hidden rounded-[20px] border border-white/10 bg-ink-2 ${imageAspect}`}>
                  <Image src={image} alt={imageAlt} fill preload fetchPriority="high" sizes="(min-width: 1440px) 680px, (min-width: 1024px) 48vw, 100vw" className={`object-cover ${imageClassName}`} />
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="mt-12 grid gap-10 md:mt-20 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="lg:col-span-8">{heading}</div>
            <div className="lg:col-span-4">{body}</div>
          </div>
        )}
      </div>
    </section>
  );
}
