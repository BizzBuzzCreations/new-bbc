import Link from "next/link";
import he from "he";
import { ArrowUpRight } from "lucide-react";
import { getLatestThreeBlogsMongo } from "@/actions/blogActions";
import { getFeaturedImage, optimizedImageUrl } from "@/lib/getFeaturedImage";
import Button from "@/components/brand/button";
import SectionHead from "@/components/brand/sectionHead";

const excerpt = (html, limit = 150) => {
  const text = he.decode(String(html || "").replace(/<[^>]*>/g, ""));
  return text.length > limit ? `${text.slice(0, limit).replace(/\s+\S*$/, "")}…` : text;
};
const date = (d) => (d ? new Date(d).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) : "");

// Insights: the latest three posts as plain rows — date, title, category,
// an arrow (Pier Gorelli's blog list). On wide screens the post's own cover
// fades in, in its own cell beside the category, when you point at a row (it
// never covers the title); posts without one show nothing.
// Dashboard fields as before (blogsEyebrow, blogsHeading, blogsButtonText/Link).
export default async function BlogsV2({ content }) {
  const eyebrow = content?.blogsEyebrow || "Insights";
  const heading = content?.blogsHeading || "Our Latest Blogs";
  const buttonText = content?.blogsButtonText || "View All Blogs";
  const buttonLink = content?.blogsButtonLink || "/blog";
  const res = await getLatestThreeBlogsMongo();
  const blogs = res?.data || [];
  if (!blogs.length) return null;
  return (
    <section aria-labelledby="blogs-heading" className="on-paper">
      <div className="wrap">
        <SectionHead id="blogs-heading" no="08" of="08" kicker={eyebrow} heading={heading} size="m" aside={<Button href={buttonLink} variant="outline">{buttonText}</Button>} />
        <ol className="mt-8 border-t border-(--fg) md:mt-10">
          {blogs.map((b, i) => {
            const img = getFeaturedImage(b);
            return (
              <li key={b.slug} className="group relative border-b border-(--line)">
                <article className="grid gap-3 py-8 transition-[padding] duration-500 ease-out-soft md:grid-cols-12 md:items-baseline md:gap-10 md:py-10 md:group-hover:pl-4">
                  <p className="kicker text-(--mut) md:col-span-2">
                    <span className="text-(--fg)">{String(i + 1).padStart(2, "0")}</span> · {date(b.publishedAt)}
                  </p>
                  <div className="md:col-span-7 xl:col-span-6">
                    <h3 className="font-display text-[clamp(1.5rem,2.8vw,2.6rem)] leading-[1.05] tracking-[-0.04em]">
                      <Link href={`/blog/${b.slug}`} className="after:absolute after:inset-0 after:content-['']">
                        {b.title}
                      </Link>
                    </h3>
                    <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-(--mut)">{excerpt(b.excerpt)}</p>
                  </div>
                  {/* the post's cover has its own cell, so it never covers the title: it fades in beside the category when the row is pointed at (shown whole, not cropped) */}
                  <div className="flex items-center justify-between gap-4 md:col-span-3 md:justify-end md:self-center xl:col-span-4 xl:gap-8">
                    {img && (
                      // eslint-disable-next-line @next/next/no-img-element -- Cloudinary cover shown on hover
                      <img src={optimizedImageUrl(img, 480)} alt="" loading="lazy" decoding="async" className="pointer-events-none hidden h-auto w-56 scale-95 rounded-sm opacity-0 shadow-xl transition-[opacity,transform] duration-500 ease-out-soft group-hover:scale-100 group-hover:opacity-100 xl:block" />
                    )}
                    <p className="kicker flex items-center gap-2 text-(--mut)">
                      {b.category}
                      <ArrowUpRight aria-hidden="true" size={18} className="text-(--fg) transition-transform duration-500 ease-out-soft group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </p>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
