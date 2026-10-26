import Link from "next/link";
import { authorPath } from "@/lib/authorSlug";
import { ImageOff } from "lucide-react";
import { getFeaturedImage, optimizedImageUrl, imageSrcSet } from "@/lib/getFeaturedImage";

// One blog post as a card (/blog, redesign; same look as the homepage's
// latest posts): the featured image, date and author, the title and a line
// of the excerpt; the whole card links to the post. `excerpt`: plain text,
// already shortened. `eager`: the first card on /blog, which can be the
// LCP image on phones.
export default function PostCard({ post, excerpt, headingLevel = "h3", eager = false }) {
  const Title = headingLevel;
  const img = getFeaturedImage(post);
  const date = post?.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    : "";
  return (
    <article className="group relative">
      <div className="aspect-[1.91/1] overflow-hidden rounded-2xl bg-[#0a0a0a]">
        {img ? (
          // eslint-disable-next-line @next/next/no-img-element -- dashboard-supplied URL (Cloudinary etc.), not a fixed host
          <img
            src={optimizedImageUrl(img, 640)}
            srcSet={imageSrcSet(img, [400, 640, 900])}
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 400px"
            loading={eager ? "eager" : "lazy"}
            fetchPriority={eager ? "high" : "low"}
            decoding="async"
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-white/60">
            <ImageOff size={28} aria-hidden="true" />
            <span className="text-xs">Image unavailable</span>
          </div>
        )}
      </div>
      <p className="mt-5 text-xs uppercase tracking-wider text-white/60">
        {date}
        {post?.author && (
          <>
            {" "}&middot;{" "}
            {/* above the card's whole-card link, so the author's name goes to their page */}
            <Link href={authorPath(post.author)} className="relative z-10 transition-colors hover:text-white hover:underline">
              {post.author}
            </Link>
          </>
        )}
      </p>
      <Title className="font-display mt-2 text-xl leading-snug text-white transition-colors duration-200 group-hover:text-[#40A2D8] md:text-2xl">
        <Link href={`/blog/${post?.slug}`} className="after:absolute after:inset-0 after:content-[''] focus-visible:underline focus-visible:outline-none">
          {post?.title}
        </Link>
      </Title>
      {excerpt && <p className="mt-3 text-sm leading-relaxed text-white/60">{excerpt}</p>}
    </article>
  );
}
