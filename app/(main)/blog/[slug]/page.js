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
import CtaV2 from "@/components/home/ctaV2";
import Pill from "@/components/home/pill";
import ArticleBody from "@/components/blog/articleBody";
import ShareRow from "@/components/blog/shareRow";
import PostFaq from "@/components/blog/postFaq";
import SuggestedPosts, { PrevNext } from "@/components/blog/suggestedPosts";
import { getSuggestedPosts, getNeighbourPosts, readingMinutes } from "@/lib/relatedPosts";
import Link from "next/link";
import Breadcrumb from "@/components/brand/breadcrumb";
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

      {/* Plain black behind the whole post (no beams): nothing moves behind
          the text while you read. */}
      <div className="on-paper">
        <header className="on-paper relative pt-24 md:pt-32">
          <div className="wrap pb-7 md:pb-10">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Insights", href: "/blog" }, post?.category ? { label: post.category, href: `/blog?category=${encodeURIComponent(post.category)}` } : null, { label: "Article" }].filter(Boolean)} />
            <h1 className="font-display mt-8 max-w-[20ch] text-balance text-[clamp(2.5rem,6.4vw,6.5rem)] leading-[0.94] tracking-[-0.055em] md:mt-10">{post?.title}</h1>
            <div className="mt-12 flex flex-wrap items-center justify-between gap-x-8 gap-y-5 border-t border-(--fg) pt-5">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link href={authorPath(post?.author)} className="group flex items-center gap-3">
                  <AuthorAvatar name={post?.author} photo={member?.photo} size={44} />
                  <span className="leading-tight">
                    <span className="block font-medium transition-opacity group-hover:opacity-70">{post?.author}</span>
                    <span className="kicker block text-(--mut)">{member?.role || "Author"}</span>
                  </span>
                </Link>
                <p className="kicker text-(--mut)">
                  <time dateTime={post?.publishedAt}>{formattedDate}</time>
                  <span className="mx-2" aria-hidden="true">·</span>
                  {minutes} min read
                </p>
              </div>
              <ShareRow url={postUrl} title={post?.title} />
            </div>
          </div>
          {featuredImage && (
            <div className="wrap">
              <div className="relative aspect-[1.91/1] max-w-[60rem] overflow-hidden bg-paper-2">
                {/* eslint-disable-next-line @next/next/no-img-element -- Cloudinary upload with its own srcset */}
                <img
                  src={optimizedImageUrl(featuredImage, 1400)}
                  srcSet={imageSrcSet(featuredImage)}
                  sizes="(min-width: 1024px) 960px, 100vw"
                  alt={post?.title}
                  fetchPriority="high"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-contain"
                />
              </div>
            </div>
          )}
        </header>

        <div className="wrap grid gap-12 pb-24 pt-14 md:pt-20 lg:grid-cols-12 lg:gap-10">
          {/* Contents: follows the reader (see blogToc.js) */}
          <div className="hidden lg:col-span-3 lg:block">{toc.length > 0 && <BlogToc toc={toc} />}</div>

          <div className="min-w-0 lg:col-span-6">
            <ArticleBody html={filteredData} />

            <PostFaq faqs={post.faqs} />

            <div className="my-12 flex flex-wrap items-center justify-between gap-5 border-y border-(--line) py-6">
              <p className="font-display text-xl text-(--fg)">Found this useful? Share it.</p>
              <ShareRow url={postUrl} title={post?.title} label="" />
            </div>

            <div className="rounded-[20px] border border-(--line) bg-paper-2 p-6 backdrop-blur-sm md:p-8">
              <div className="flex items-center gap-4">
                <Link href={authorPath(post?.author)} aria-label={`${post?.author}'s profile`}>
                  <AuthorAvatar name={post?.author} photo={member?.photo} size={64} />
                </Link>
                <div>
                  <p className="text-sm text-(--mut)">Written by</p>
                  <p className="font-display text-xl text-(--fg)">
                    <Link href={authorPath(post?.author)} className="transition-colors hover:text-(--fg)">{post?.author}</Link>
                  </p>
                  {member?.role && <p className="kicker text-(--fg)">{member.role}</p>}
                </div>
              </div>
              <RichText as="p" text={post?.authorBio} className="mt-5 text-sm leading-relaxed text-(--mut) md:text-base" />
              <div className="mt-6">
                <Pill href={authorPath(post?.author)}>View profile and all articles</Pill>
              </div>
            </div>

            <PrevNext prev={neighbours.prev} next={neighbours.next} />
          </div>

          {/* Contact form */}
          <aside className="self-start lg:sticky lg:top-28 lg:col-span-3">
            <BlogContactForm />
          </aside>
        </div>

        <SuggestedPosts suggested={suggested} />
      </div>

      <CtaV2 />
    </>
  );
}
