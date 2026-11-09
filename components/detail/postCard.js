import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { authorPath } from "@/lib/authorSlug";
import { getFeaturedImage, optimizedImageUrl, imageSrcSet } from "@/lib/getFeaturedImage";
import IndustrySignature from "@/components/brand/industrySignature";

// One blog post as a card (/blog, suggested posts) (rebuild): the featured
// image (or, without one, the post's own generated signature — never an
// "image unavailable" box), date and author in mono, the title and a line
// of the excerpt; the whole card links to the post, the author's name to
// their page. `eager`: the first card on /blog (can be the phone's LCP).
export default function PostCard({ post, excerpt, headingLevel = "h3", eager = false }) {
  const Title = headingLevel;
  const img = getFeaturedImage(post);
  const date = post?.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) : "";
  return (
    <article className="group relative">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] border border-white/10 bg-ink-2">
        {img ? (
          // eslint-disable-next-line @next/next/no-img-element -- Cloudinary upload with its own srcset
          <img
            src={optimizedImageUrl(img, 640)}
            srcSet={imageSrcSet(img, [400, 640, 900])}
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 440px"
            loading={eager ? "eager" : "lazy"}
            fetchPriority={eager ? "high" : "low"}
            decoding="async"
            alt=""
            className="h-full w-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.04]"
          />
        ) : (
          <IndustrySignature slug={post?.slug} lines={18} className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out-soft group-hover:scale-[1.04]" />
        )}
        {post?.category && <span className="kicker absolute left-4 top-4 rounded-full bg-ink/75 px-3 py-1.5 text-white backdrop-blur-md">{post.category}</span>}
      </div>
      <p className="kicker mt-5 text-fog">
        {date}
        {post?.author && (
          <>
            {" "}·{" "}
            <Link href={authorPath(post.author)} className="relative z-10 transition-colors hover:text-white">
              {post.author}
            </Link>
          </>
        )}
      </p>
      <Title className="font-display mt-3 text-2xl leading-[1.1] md:text-[1.75rem]">
        <Link href={`/blog/${post?.slug}`} className="after:absolute after:inset-0 after:content-[''] group-hover:underline group-hover:decoration-buzz group-hover:decoration-2 group-hover:underline-offset-[6px]">
          {post?.title}
        </Link>
      </Title>
      {excerpt && <p className="mt-3 line-clamp-3 leading-relaxed text-fog">{excerpt}</p>}
      <span aria-hidden="true" className="kicker mt-4 inline-flex items-center gap-1 text-white transition-colors group-hover:text-buzz">
        Read <ArrowUpRight size={14} />
      </span>
    </article>
  );
}
