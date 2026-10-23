import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import RichText from "@/components/ui/richText";
import Pill from "@/components/home/pill";
import { AccentTitle } from "@/components/detail/detailHero";

// Hero for the one-off pages (/services, /about, /career, …), in the
// detail pages' style: a breadcrumb back to the homepage, the big light
// headline (last three words in the blue → violet gradient), the page's
// text and buttons (`actions`: { text, href, variant }; the first is
// usually "solid"). With an `image` the text sits on the left and the photo
// on the right in a rounded frame at `imageAspect` (a Tailwind aspect
// class, so the photo keeps its own shape; on phones it comes after the
// text; `imageClassName` can move the crop, e.g. "object-[62%_50%]");
// without one the headline and the text sit side by side. The photo
// is the LCP element: loaded eagerly at high priority. `media` replaces the
// photo with anything else (e.g. /about's photo mosaic); `tagline` is a
// short blue line under the headline; `children` go under the buttons (e.g.
// a small list of facts); `parent` ({ label, href }) adds a crumb between
// Home and this page.
export default function PageHero({ label, parent, title, tagline, description, actions = [], image, imageAlt = "", imageAspect = "aspect-[4/3]", imageClassName = "", media, children }) {
  const buttons = actions.filter((a) => a?.text && a?.href);
  const crumbs = (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
        <li>
          <Link href="/" className="text-[#40A2D8] hover:text-white">Home</Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight size={14} />
        </li>
        {parent && (
          <>
            <li>
              <Link href={parent.href} className="text-[#40A2D8] hover:text-white">{parent.label}</Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight size={14} />
            </li>
          </>
        )}
        <li aria-current="page" className="text-white/80">{label}</li>
      </ol>
    </nav>
  );
  const heading = (
    <>
      <h1 className="font-display text-[2.3rem] leading-[1.06] sm:text-5xl xl:text-6xl">
        <AccentTitle title={title} />
      </h1>
      {tagline && <p className="mt-4 text-lg text-[#40A2D8]">{tagline}</p>}
    </>
  );
  const body = (
    <>
      {description && <RichText as="p" text={description} className="text-base leading-relaxed text-white/70 md:text-lg" />}
      {buttons.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3">
          {buttons.map(({ text, href, variant }) => (
            <Pill key={text} href={href} variant={variant} className="px-6 py-3 text-base">{text}</Pill>
          ))}
        </div>
      )}
      {children}
    </>
  );

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 pt-8 pb-12 md:px-10 md:pt-14 md:pb-16">
        {crumbs}
        {image || media ? (
          <div className="mt-6 grid gap-10 md:mt-8 md:grid-cols-2 md:items-center md:gap-16">
            <div>
              {heading}
              <div className="mt-6">{body}</div>
            </div>
            {media || (
              <div className={`relative w-full overflow-hidden rounded-3xl bg-[#0a0a0a] ${imageAspect}`}>
                <Image src={image} alt={imageAlt} fill preload fetchPriority="high" sizes="(min-width: 1280px) 580px, (min-width: 768px) 46vw, 100vw" className={`object-cover ${imageClassName}`} />
              </div>
            )}
          </div>
        ) : (
          <div className="mt-6 grid gap-8 md:mt-8 md:grid-cols-[3fr_2fr] md:items-end md:gap-16">
            <div>{heading}</div>
            <div>{body}</div>
          </div>
        )}
      </div>
    </section>
  );
}
