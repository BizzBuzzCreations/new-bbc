import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { authorPath } from "@/lib/authorSlug";
import { getFeaturedImage, optimizedImageUrl, imageSrcSet } from "@/lib/getFeaturedImage";

// One blog post as a card (/blog, suggested posts): the cover when the post
// has one (nothing in its place when it doesn't — no placeholder), the date,
// category and author in mono, the title and a line of the excerpt; the whole
// card links to the post, the author's name to their page. The cover is shown
// WHOLE: the covers are 1.91:1 graphics with text near their edges, so the frame
// is 1.91:1 and nothing is cropped (object-contain, no zoom on hover — a zoom
// would cut the edges); another shape gets quiet bars, never a crop. `eager`: the first
// card on /blog (can be the phone's LCP).
export default function PostCard({ post, excerpt, headingLevel = "h3", eager = false }) {
  const Title = headingLevel;
  const img = getFeaturedImage(post);
  const date = post?.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) : "";
  return (
    <article className="group relative flex h-full flex-col border-t border-(--fg) pt-5">
      {img && (
        <div className="relative mb-6 aspect-[1.91/1] overflow-hidden bg-paper-2">
          {/* eslint-disable-next-line @next/next/no-img-element -- Cloudinary upload with its own srcset */}
          <img
            src={optimizedImageUrl(img, 640)}
            srcSet={imageSrcSet(img, [400, 640, 900])}
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 440px"
            loading={eager ? "eager" : "lazy"}
            fetchPriority={eager ? "high" : "low"}
            decoding="async"
            alt=""
            className="h-full w-full object-contain"
          />
        </div>
      )}
      <p className="kicker text-(--mut)">
        {date}
        {post?.category && <> · {post.category}</>}
        {post?.author && (
          <>
            {" "}·{" "}
            <Link href={authorPath(post.author)} className="relative z-10 transition-colors hover:text-(--fg)">
              {post.author}
            </Link>
          </>
        )}
      </p>
      <Title className="font-display mt-4 text-[1.7rem] leading-[1.05] tracking-[-0.04em]">
        <Link href={`/blog/${post?.slug}`} className="after:absolute after:inset-0 after:content-[''] group-hover:underline group-hover:decoration-1 group-hover:underline-offset-[6px]">
          {post?.title}
        </Link>
      </Title>
      {excerpt && <p className="mt-3 line-clamp-3 leading-relaxed text-(--mut)">{excerpt}</p>}
      <span aria-hidden="true" className="kicker mt-auto inline-flex items-center gap-1 pt-6">
        Read <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </article>
  );
}
