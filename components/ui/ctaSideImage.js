import { optimizedImageUrl, imageSrcSet } from "@/lib/getFeaturedImage";

// Optional image on the right side of a closing CTA card, set from the
// dashboard's "Closing CTA" section (ctaImage). Renders nothing when no
// image is set, so CTAs without one look exactly as before. Stacks under
// the text on mobile. Plain <img> since uploads are arbitrary Cloudinary
// sizes, same as the dashboard's own previews.
//
// Lazy + right-sized: this sits at the bottom of the page, but as an eager
// raw upload (one was a 1.4MB PNG) it downloaded during the initial load,
// competing with the hero image for bandwidth on phones.
export default function CtaSideImage({ src, alt = "" }) {
  if (!src) return null;
  return (
    <div className="shrink-0 px-6 pb-8 md:w-[38%] md:py-8 md:pl-0 md:pr-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={optimizedImageUrl(src, 800)}
        srcSet={imageSrcSet(src, [480, 800, 1100])}
        sizes="(max-width: 767px) 100vw, 38vw"
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-56 w-full rounded-2xl object-cover md:h-full md:min-h-[240px]"
      />
    </div>
  );
}
