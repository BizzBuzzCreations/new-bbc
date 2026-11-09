import Link from "next/link";
import he from "he";
import { ArrowUpRight } from "lucide-react";
import { getLatestThreeBlogsMongo } from "@/actions/blogActions";
import { getFeaturedImage, optimizedImageUrl, imageSrcSet } from "@/lib/getFeaturedImage";
import Button from "@/components/brand/button";
import SectionHead from "@/components/brand/sectionHead";
import IndustrySignature from "@/components/brand/industrySignature";

const excerpt = (html, limit = 140) => {
  const text = he.decode(String(html || "").replace(/<[^>]*>/g, ""));
  return text.length > limit ? `${text.slice(0, limit).replace(/\s+\S*$/, "")}…` : text;
};
const date = (d) => (d ? new Date(d).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) : "");

// Insights (rebuild): the latest three posts — the newest large on the left,
// the other two stacked on the right as rows. Whole card is the link. Same
// fields as before (blogsEyebrow, blogsHeading, blogsButtonText/Link).
export default async function BlogsV2({ content }) {
  const eyebrow = content?.blogsEyebrow || "Insights";
  const heading = content?.blogsHeading || "Our Latest Blogs";
  const buttonText = content?.blogsButtonText || "View All Blogs";
  const buttonLink = content?.blogsButtonLink || "/blog";
  const res = await getLatestThreeBlogsMongo();
  const blogs = res?.data || [];
  if (!blogs.length) return null;
  const [first, ...rest] = blogs;
  const img = (b, w) => {
    const src = getFeaturedImage(b);
    return src ? { src: optimizedImageUrl(src, w), srcSet: imageSrcSet(src, [400, 640, 900, 1200]) } : null;
  };
  const f = img(first, 900);

  return (
    <section aria-labelledby="blogs-heading" className="bg-ink text-white">
      <div className="wrap py-24 md:py-40">
        <SectionHead id="blogs-heading" no="09" kicker={eyebrow} heading={heading} aside={<Button href={buttonLink} variant="outline">{buttonText}</Button>} />
        <div className="mt-16 grid gap-10 md:mt-24 lg:grid-cols-12 lg:gap-10">
          <article className="group relative lg:col-span-7">
            <div className="aspect-[16/10] overflow-hidden rounded-[20px] bg-ink-2">
              {f ? (
                // eslint-disable-next-line @next/next/no-img-element -- Cloudinary upload with its own srcset
                <img src={f.src} srcSet={f.srcSet} sizes="(min-width: 1024px) 58vw, 100vw" loading="lazy" decoding="async" alt="" className="h-full w-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]" />
              ) : (
                <IndustrySignature slug={first.slug} className="h-full w-full" />
              )}
            </div>
            <p className="kicker mt-6 text-fog">
              <span className="text-buzz">01</span> · {date(first.publishedAt)}
            </p>
            <h3 className="font-display mt-3 text-3xl leading-[1.05] md:text-[2.5rem]">
              <Link href={`/blog/${first.slug}`} className="after:absolute after:inset-0 after:content-[''] group-hover:underline group-hover:decoration-buzz group-hover:decoration-2 group-hover:underline-offset-8">
                {first.title}
              </Link>
            </h3>
            <p className="mt-4 max-w-2xl leading-relaxed text-fog">{excerpt(first.excerpt, 200)}</p>
          </article>
          <div className="grid content-start gap-0 border-t border-white/10 lg:col-span-5">
            {rest.map((b, i) => {
              const im = img(b, 400);
              return (
                <article key={b.slug} className="group relative grid grid-cols-[1fr_7.5rem] gap-5 border-b border-white/10 py-7 sm:grid-cols-[1fr_10rem]">
                  <div>
                    <p className="kicker text-fog">
                      <span className="text-buzz">{String(i + 2).padStart(2, "0")}</span> · {date(b.publishedAt)}
                    </p>
                    <h3 className="font-display mt-3 text-xl leading-snug md:text-2xl">
                      <Link href={`/blog/${b.slug}`} className="after:absolute after:inset-0 after:content-[''] group-hover:underline group-hover:decoration-buzz group-hover:underline-offset-4">
                        {b.title}
                      </Link>
                    </h3>
                    <span aria-hidden="true" className="kicker mt-4 inline-flex items-center gap-1 text-fog transition-colors group-hover:text-buzz">
                      Read <ArrowUpRight size={14} />
                    </span>
                  </div>
                  <div className="aspect-square overflow-hidden rounded-xl bg-ink-2">
                    {im ? (
                      // eslint-disable-next-line @next/next/no-img-element -- Cloudinary upload with its own srcset
                      <img src={im.src} srcSet={im.srcSet} sizes="160px" loading="lazy" decoding="async" alt="" className="h-full w-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.05]" />
                    ) : (
                      <IndustrySignature slug={b.slug} lines={14} className="h-full w-full" />
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
