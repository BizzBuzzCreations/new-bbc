import { getBlogBySlugMongo } from "@/actions/blogActions";
import { cache } from "react";
import { getFeaturedImage, optimizedImageUrl, imageSrcSet } from "@/lib/getFeaturedImage";
import { extractTableOfContents } from "@/lib/extractTableOfContents";
import { sanitizeBlogContent } from "@/lib/sanitizeBlogContent";
import { removeDeadWordpressImages } from "@/lib/removeDeadWordpressImages";
import BlogContactForm from "@/components/sections/blogContactForm";
import BlogToc from "@/components/sections/blogToc";
import AuthorAvatar from "@/components/author/authorAvatar";
import { authorPath } from "@/lib/authorSlug";
import { getTeamMember } from "@/lib/authorTeam";
import RichText from "@/components/ui/richText";
import BeamsBlock from "@/components/home/band";
import CtaV2 from "@/components/home/ctaV2";
import Pill from "@/components/home/pill";
import ArticleBody from "@/components/blog/articleBody";
import ShareRow from "@/components/blog/shareRow";
import PostFaq from "@/components/blog/postFaq";
import SuggestedPosts, { PrevNext } from "@/components/blog/suggestedPosts";
import { getSuggestedPosts, getNeighbourPosts, readingMinutes } from "@/lib/relatedPosts";
import Link from "next/link";
import { ImageOff, ChevronLeft, ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";

// ISR: served from cache and regenerated at most every 60s. Dashboard
// saves/deletes call revalidatePath("/", "layout") and the scheduled-post
// cron route does too, so edits and newly-published posts still go live
// right away. Replaces force-dynamic, which hit MongoDB (and ran the
// scheduled-post publisher) on every single request — the main cause of
// the slow mobile LCP on blog posts.
export const revalidate = 60;

// No posts are pre-built (the build can't rely on reaching MongoDB) — an empty
// list just opts the route into on-demand ISR: each post is rendered on its
// first visit, then cached and refreshed per `revalidate` above.
export function generateStaticParams() {
  return [];
}

// generateMetadata and the page both need the post — fetch it once.
const getPost = cache((slug) => getBlogBySlugMongo(slug));

// Search results cut descriptions at roughly 155–160 characters, and many
// saved posts use a long excerpt here. Shorten on a word boundary so the
// snippet ends cleanly instead of mid-word.
function metaDescription(post) {
  const text = (post.metaDescription || post.excerpt || "").replace(/\s+/g, " ").trim();
  if (text.length <= 155) return text;
  const cut = text.slice(0, 154);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[\s,;:.\-–—]+$/, "")}…`;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const res = await getPost(slug);

  if (!res?.success) {
    return {
      title: "Blog Not Found",
    };
  }

  const post = res?.data;
  const title = post.metaTitle || post.title;
  const description = metaDescription(post);
  const image = post.ogImage || post.featuredImage;

  return {
    title,
    description,
    alternates: {
      canonical: `https://bizzbuzzcreations.com/blog/${slug}`,
    },
    openGraph: {
      title,
      description,
      images: image ? [{ url: image }] : undefined,
    },
  };
}

export default async function SingleBlog({ params }) {
  const { slug } = await params;

  const res = await getPost(slug);

  if (!res?.success) {
    return notFound();
  }
  const post = res?.data;
  // a team member who wrote it shows their photo and role in the "Written by" box
  const [member, suggested, neighbours] = await Promise.all([getTeamMember(post?.author), getSuggestedPosts(post), getNeighbourPosts(post)]);
  const minutes = readingMinutes(post?.content);

  const featuredImage = getFeaturedImage(post);

  const formattedDate = new Date(post?.publishedAt).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const rawContent = removeDeadWordpressImages(sanitizeBlogContent(post?.content));
  const { html: extractedHtml, toc: headings } = extractTableOfContents(rawContent);
  // number the main sections only (a post that has no h2 numbers its h3s)
  const hasH2 = headings.some((h) => h.level === 2);
  let section = 0;
  const toc = headings.map((h) => ({ ...h, level: hasH2 ? h.level : 2, number: !hasH2 || h.level === 2 ? ++section : null }));
  // Images inside the article body sit below the fold — lazy-load them so
  // they don't compete with the featured image (the LCP element).
  const filteredData = extractedHtml?.replace(
    /<img(?![^>]*loading=)/gi,
    '<img loading="lazy" decoding="async"',
  );

  const postUrl = `https://bizzbuzzcreations.com/blog/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: metaDescription(post),
    ...(post.featuredImage ? { image: post.featuredImage } : {}),
    author: { "@type": "Person", name: post.author, url: `https://bizzbuzzcreations.com${authorPath(post.author)}` },
    publisher: {
      "@type": "Organization",
      name: "Digital Marketing Agency",
      logo: {
        "@type": "ImageObject",
        url: "https://bizzbuzzcreations.com/favicon.png",
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://bizzbuzzcreations.com/blog/${slug}`,
    },
  };

  const faqSchema = post.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : null;

  return (
    <>
      {/* thin reading-progress line at the top (pure CSS, see globals.css) */}
      <div aria-hidden="true" className="scroll-progress" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      {/* The whole post sits on the site's beams background (like the
          homepage): the title band, the article, the suggestions. */}
      <BeamsBlock>
        <header className="text-white">
          <div className="mx-auto max-w-[88rem] px-4 pt-8 pb-10 sm:px-6 md:pt-14 md:pb-14 lg:px-8">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
                <li><Link href="/" className="text-[#40A2D8] hover:text-white">Home</Link></li>
                <li aria-hidden="true"><ChevronRight size={14} /></li>
                <li><Link href="/blog" className="text-[#40A2D8] hover:text-white">Blog</Link></li>
                {post?.category && (
                  <>
                    <li aria-hidden="true"><ChevronRight size={14} /></li>
                    <li><Link href={`/blog?category=${encodeURIComponent(post.category)}`} className="text-[#40A2D8] hover:text-white">{post.category}</Link></li>
                  </>
                )}
              </ol>
            </nav>
            <h1 className="font-display mt-6 max-w-5xl text-[2rem] leading-[1.1] sm:text-5xl xl:text-6xl">{post?.title}</h1>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-x-8 gap-y-5">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                <Link href={authorPath(post?.author)} className="group flex items-center gap-3">
                  <AuthorAvatar name={post?.author} photo={member?.photo} size={44} />
                  <span className="leading-tight">
                    <span className="block text-sm text-white transition-colors group-hover:text-[#40A2D8]">{post?.author}</span>
                    <span className="block text-xs text-white/60">{member?.role || "Author"}</span>
                  </span>
                </Link>
                <span className="hidden h-6 w-px bg-white/15 sm:block" aria-hidden="true" />
                <p className="text-sm text-white/60">
                  <time dateTime={post?.publishedAt}>{formattedDate}</time>
                  <span className="mx-2 text-white/30" aria-hidden="true">·</span>
                  {minutes} min read
                </p>
              </div>
              <ShareRow url={postUrl} title={post?.title} />
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-[88rem] gap-8 px-4 pb-16 sm:px-6 lg:flex lg:items-start lg:px-8">
          {/* Contents: follows the reader (see blogToc.js) */}
          {toc.length > 0 && <BlogToc toc={toc} />}

          <div className="mx-auto min-w-0 max-w-[52rem] flex-1 lg:mx-0">
            {featuredImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={optimizedImageUrl(featuredImage, 1100)}
                srcSet={imageSrcSet(featuredImage)}
                sizes="(max-width: 768px) 100vw, 832px"
                alt={post?.title}
                fetchPriority="high"
                decoding="async"
                // Reserves a 16:9 box (what most featured images are) until the
                // image loads, then switches to its real ratio. With no
                // dimensions it rendered 0px tall first and pushed the whole
                // article down on load — a 0.27 CLS on mobile.
                className="mb-8 h-auto w-full rounded-3xl border border-white/10 shadow-[0_20px_60px_-20px_rgba(11,96,176,0.45)] [aspect-ratio:auto_16/9]"
              />
            ) : (
              <div className="mb-8 flex aspect-[1.91/1] w-full flex-col items-center justify-center gap-2 rounded-3xl border border-white/10 bg-white/[0.03] text-white/60">
                <ImageOff size={36} aria-hidden="true" />
                <span className="text-sm">Image unavailable</span>
              </div>
            )}

            <ArticleBody html={filteredData} />

            <PostFaq faqs={post.faqs} />

            <div className="my-12 flex flex-wrap items-center justify-between gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
              <p className="font-display text-xl text-white">Found this useful? Share it.</p>
              <ShareRow url={postUrl} title={post?.title} label="" />
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0b0e16]/85 p-6 backdrop-blur-sm md:p-8">
              <div className="flex items-center gap-4">
                <Link href={authorPath(post?.author)} aria-label={`${post?.author}'s profile`}>
                  <AuthorAvatar name={post?.author} photo={member?.photo} size={64} />
                </Link>
                <div>
                  <p className="text-sm text-white/60">Written by</p>
                  <p className="font-display text-xl text-white">
                    <Link href={authorPath(post?.author)} className="transition-colors hover:text-[#40A2D8]">{post?.author}</Link>
                  </p>
                  {member?.role && <p className="text-sm text-[#40A2D8]">{member.role}</p>}
                </div>
              </div>
              <RichText as="p" text={post?.authorBio} className="mt-5 text-sm leading-relaxed text-white/70 md:text-base" />
              <div className="mt-6">
                <Pill href={authorPath(post?.author)}>View profile and all articles</Pill>
              </div>
            </div>

            <PrevNext prev={neighbours.prev} next={neighbours.next} />
          </div>

          {/* Contact form */}
          <aside className="mt-8 shrink-0 self-start lg:sticky lg:top-28 lg:mt-0 lg:w-72">
            <BlogContactForm />
          </aside>
        </div>

        <SuggestedPosts suggested={suggested} />
      </BeamsBlock>

      <CtaV2 />
    </>
  );
}
