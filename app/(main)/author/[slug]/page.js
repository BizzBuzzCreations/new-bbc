import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { ChevronRight, Quote } from "lucide-react";
import { getAuthor, plainText, clipText } from "@/lib/authors";
import RichText from "@/components/ui/richText";
import Pill from "@/components/home/pill";
import BeamsBlock from "@/components/home/band";
import CtaV2 from "@/components/home/ctaV2";
import AuthorAvatar from "@/components/author/authorAvatar";
import AuthorCard from "@/components/author/authorCard";
import AuthorPosts from "@/components/author/authorPosts";
import { optimizedImageUrl, imageSrcSet } from "@/lib/getFeaturedImage";

// ISR like the blog posts: cached, refreshed at most every 60s, and
// refreshed straight away when the dashboard saves a post (those call
// revalidatePath("/", "layout")). Nothing is pre-built (the build can't
// reach MongoDB): each author's page is rendered on its first visit.
export const revalidate = 60;
export function generateStaticParams() {
  return [];
}

const SITE = "https://bizzbuzzcreations.com";
const fmt = (iso) => new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await getAuthor(slug);
  if (!data) return { title: "Author not found" };
  const { author } = data;
  const topics = author.categories.slice(0, 3).map((c) => c.name).join(", ");
  const description = clipText(plainText(author.bio) || `Articles by ${author.name} on the BizzBuzz Creations blog${topics ? `, covering ${topics}` : ""}.`, 155);
  const title = `${author.name} | Author at BizzBuzz Creations`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE}/author/${author.slug}` },
    openGraph: { title, description, type: "profile", url: `${SITE}/author/${author.slug}` },
  };
}

export default async function AuthorPage({ params }) {
  const { slug } = await params;
  const data = await getAuthor(slug);
  if (!data) notFound();
  const { author, posts, others } = data;
  // another spelling of the same person (e.g. "Shakib" for "Md. Shaquib"): one address
  if (slug !== author.slug) permanentRedirect(`/author/${author.slug}`);

  const first = author.name.split(/\s+/)[0];
  // a team member: their team photo, role and a link to where they're listed
  const member = author.member;
  const latest = posts[0];
  const topics = author.categories.map((c) => c.name);
  // their own words: the excerpts of their newest articles
  const quotes = posts.filter((p) => p.excerpt.length >= 40).slice(0, 3);
  const stats = [
    { value: author.count, label: author.count === 1 ? "Article" : "Articles" },
    { value: topics.length, label: topics.length === 1 ? "Topic" : "Topics" },
    author.since && { value: author.since, label: "Writing since" },
  ].filter(Boolean);
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: author.name,
      url: `${SITE}/author/${author.slug}`,
      ...(plainText(author.bio) && { description: plainText(author.bio) }),
      ...(member?.role && { jobTitle: member.role }),
      ...(member?.photo && { image: member.photo.startsWith("/") ? `${SITE}${member.photo}` : member.photo }),
      worksFor: { "@type": "Organization", name: "BizzBuzz Creations", url: SITE },
      ...(topics.length && { knowsAbout: topics }),
    },
  };

  return (
    <div data-no-reveal>
      {/* thin reading-progress line at the top (pure CSS, see globals.css) */}
      <div aria-hidden="true" className="scroll-progress" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <BeamsBlock>
        <section className="text-white">
          <div className="mx-auto max-w-7xl px-6 pt-8 pb-16 md:px-10 md:pt-14 md:pb-24">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
                <li><Link href="/" className="text-[#40A2D8] hover:text-white">Home</Link></li>
                <li aria-hidden="true"><ChevronRight size={14} /></li>
                <li><Link href="/blog" className="text-[#40A2D8] hover:text-white">Blog</Link></li>
                <li aria-hidden="true"><ChevronRight size={14} /></li>
                <li><Link href="/author" className="text-[#40A2D8] hover:text-white">Authors</Link></li>
                <li aria-hidden="true"><ChevronRight size={14} /></li>
                <li aria-current="page" className="text-white/80">{author.name}</li>
              </ol>
            </nav>

            <div className="mt-8 grid gap-12 md:mt-12 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-16">
              <div>
                <div className="flex items-center gap-5">
                  <AuthorAvatar name={author.name} photo={member?.photo} size={member ? 112 : 88} />
                  <div className="text-sm">
                    <p className="text-[#40A2D8]">{member?.role ? `${member.role} at BizzBuzz Creations` : "Author at BizzBuzz Creations"}</p>
                    {member && (
                      <Link href={member.team.href} className="mt-1 inline-block text-white/60 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white">
                        Part of the {member.team.label}
                      </Link>
                    )}
                  </div>
                </div>
                <h1 className="font-display mt-6 text-[2.6rem] leading-[1.05] sm:text-6xl">{author.name}</h1>
                {topics.length > 0 && <p className="mt-4 text-lg text-[#40A2D8]">Writes about {topics.slice(0, 3).join(" · ")}</p>}
                {author.bio ? (
                  <RichText as="div" text={author.bio} className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-white/75 md:text-lg" />
                ) : (
                  <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                    {first} writes for the BizzBuzz Creations blog. Every article {first} has published is below.
                  </p>
                )}

                <dl className="mt-9 grid max-w-md border-t border-white/10 pt-6" style={{ gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))` }}>
                  {stats.map(({ value, label }) => (
                    <div key={label} className="flex flex-col-reverse justify-end border-l border-white/10 px-4 first:border-l-0 first:pl-0 sm:px-6">
                      <dt className="mt-1 text-[11px] uppercase leading-snug tracking-wider text-white/60 sm:text-xs">{label}</dt>
                      <dd className="font-display text-4xl text-white md:text-5xl">{value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-9 flex flex-wrap gap-3">
                  <Pill href="#articles" variant="solid" className="px-6 py-3 text-base">Read {first}&rsquo;s articles</Pill>
                  <Pill href="/contact" className="px-6 py-3 text-base">Work with us</Pill>
                </div>
              </div>

              {latest && (
                <Link href={`/blog/${latest.slug}`} className="group relative block rounded-3xl border border-white/10 bg-[#0b0e16] p-3 transition-colors duration-300 hover:border-[#40A2D8]/50 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#40A2D8]">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#0a0a0a]">
                    {latest.image && (
                      // eslint-disable-next-line @next/next/no-img-element -- dashboard-supplied URL (Cloudinary etc.), not a fixed host
                      <img
                        src={optimizedImageUrl(latest.image, 800)}
                        srcSet={imageSrcSet(latest.image, [480, 800, 1100])}
                        sizes="(min-width: 1024px) 480px, 100vw"
                        alt=""
                        fetchPriority="high"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    )}
                    <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-xs text-white backdrop-blur-md">Latest article</span>
                  </div>
                  <div className="p-4 md:p-5">
                    <p className="text-xs uppercase tracking-wider text-white/60">
                      {latest.category && <>{latest.category} &middot; </>}
                      {fmt(latest.date)} &middot; {latest.minutes} min read
                    </p>
                    <h2 className="font-display mt-3 text-xl leading-snug text-white transition-colors group-hover:text-[#40A2D8] md:text-2xl">{latest.title}</h2>
                    {latest.excerpt && <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/60">{latest.excerpt}</p>}
                  </div>
                </Link>
              )}
            </div>
          </div>
        </section>

        {quotes.length > 0 && (
          <section className="text-white">
            <div className="mx-auto max-w-7xl px-6 pb-16 md:px-10 md:pb-24">
              <div className="reveal max-w-3xl">
                <p className="text-sm text-[#40A2D8]">In their words</p>
                <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">What {first} has been saying</h2>
              </div>
              <ul className="reveal-stagger mt-12 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-5">
                {quotes.map((q) => (
                  <li key={q.slug} className="group relative flex flex-col rounded-3xl border border-white/10 bg-[#0b0e16]/80 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-[#40A2D8]/50 md:p-8">
                    <Quote aria-hidden="true" size={28} className="text-[#40A2D8]" />
                    <blockquote className="font-display mt-5 text-xl leading-snug text-white/90 md:text-2xl">{q.excerpt}</blockquote>
                    <p className="mt-auto pt-8 text-sm text-white/60">
                      From{" "}
                      <Link href={`/blog/${q.slug}`} className="text-[#40A2D8] after:absolute after:inset-0 after:content-[''] hover:text-white focus-visible:underline focus-visible:outline-none">
                        {q.title}
                      </Link>
                      <span className="block text-xs">{fmt(q.date)}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </BeamsBlock>

      <section id="articles" className="scroll-mt-20 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="reveal max-w-3xl">
            <p className="text-sm text-[#40A2D8]">All articles</p>
            <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">Everything {first} has written</h2>
          </div>
          <div className="mt-10 md:mt-12">
            <AuthorPosts posts={posts} categories={author.categories} authorName={author.name} />
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section className="bg-black text-white">
          <div className="mx-auto max-w-7xl px-6 pb-16 md:px-10 md:pb-20">
            <div className="reveal flex flex-wrap items-end justify-between gap-6 border-t border-white/10 pt-16">
              <div>
                <p className="text-sm text-[#40A2D8]">More from our team</p>
                <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">Meet the other authors</h2>
              </div>
              <Pill href="/author">All authors</Pill>
            </div>
            {/* the columns follow how many authors there are, so the row is never half empty */}
            <ul className={`reveal-stagger mt-12 grid gap-4 md:mt-16 ${others.length === 1 ? "max-w-md" : others.length === 2 ? "sm:grid-cols-2" : others.length === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4"}`}>
              {others.map((a) => (
                <li key={a.slug}>
                  <AuthorCard author={a} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaV2 />
    </div>
  );
}
