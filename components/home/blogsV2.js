import Link from "next/link";
import he from "he";
import { getLatestThreeBlogsMongo } from "@/actions/blogActions";
import { getFeaturedImage, optimizedImageUrl, imageSrcSet } from "@/lib/getFeaturedImage";
import Pill from "@/components/home/pill";

// Latest blogs (redesign) — three posts, minimal: image, date, title; the
// whole card is the link. Same latest-three query and dashboard text.
const excerpt = (html, limit = 110) => {
  const text = he.decode(String(html || "").replace(/<[^>]*>/g, ""));
  return text.length > limit ? `${text.slice(0, limit).replace(/\s+\S*$/, "")}…` : text;
};

export default async function BlogsV2({ content }) {
  const eyebrow = content?.blogsEyebrow || "From Our Blog";
  const heading = content?.blogsHeading || "Our Latest Blogs";
  const buttonText = content?.blogsButtonText || "View All Blogs";
  const buttonLink = content?.blogsButtonLink || "/blog";
  const res = await getLatestThreeBlogsMongo();
  const blogs = res?.data || [];
  if (!blogs.length) return null;

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-24">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm text-[#40A2D8]">{eyebrow}</p>
            <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">{heading}</h2>
          </div>
          <Pill href={buttonLink}>{buttonText}</Pill>
        </div>

        {/* Phones: a swipe row; from md up: three columns. */}
        <div className="reveal-stagger -mx-6 mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-6 px-6 pb-2 md:mx-0 md:mt-20 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 md:pb-0">
          {blogs.map((b) => {
            const img = getFeaturedImage(b);
            return (
              <article key={b.slug} className="group relative w-[85%] shrink-0 snap-start md:w-auto">
                <div className="aspect-[1.91/1] overflow-hidden rounded-2xl bg-[#0a0a0a]">
                  {img && (
                    // eslint-disable-next-line @next/next/no-img-element -- dashboard-supplied URL (Cloudinary etc.)
                    <img
                      src={optimizedImageUrl(img, 640)}
                      srcSet={imageSrcSet(img, [400, 640, 900])}
                      sizes="(max-width: 768px) 85vw, 380px"
                      loading="lazy"
                      decoding="async"
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  )}
                </div>
                <p className="mt-5 text-xs uppercase tracking-wider text-white/60">
                  {new Date(b.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </p>
                <h3 className="font-display mt-2 text-xl leading-snug text-white transition-colors duration-200 group-hover:text-[#40A2D8]">
                  <Link href={`/blog/${b.slug}`} className="after:absolute after:inset-0 after:content-[''] focus-visible:underline focus-visible:outline-none">
                    {b.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{excerpt(b.excerpt)}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
