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
import RichText from "@/components/ui/richText";
import { FAQSection } from "@/components/ui/faq-accordion";
import CTA from "@/components/sections/CTA";
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
    {/* Title band in the site's dark style; the article itself stays on
        white below it, for easy reading. */}
    <header className="bg-black text-white">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 md:pt-16 md:pb-16">
        <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-[#40A2D8] hover:text-white transition-colors">
          <ChevronLeft size={16} aria-hidden="true" /> All blogs
        </Link>
        <h1 className="font-display mt-5 max-w-4xl text-3xl leading-[1.12] md:text-5xl">
          {post?.title}
        </h1>
        <p className="mt-5 text-sm text-white/60">
          {post?.author && (
            <>
              By <Link href={authorPath(post.author)} className="text-white/85 underline decoration-white/30 underline-offset-4 transition-colors hover:text-[#40A2D8] hover:decoration-[#40A2D8]">{post.author}</Link>
              <span className="mx-2 text-white/30" aria-hidden="true">·</span>
            </>
          )}
          Published on <time dateTime={post?.publishedAt}>{formattedDate}</time>
        </p>
      </div>
    </header>
    <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-12 pb-20 lg:flex lg:items-start gap-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Table of Contents: follows the reader (see blogToc.js) */}
      {toc.length > 0 && <BlogToc toc={toc} />}

      {/* Blog content */}
      <div className="max-w-[52rem] mx-auto lg:mx-0 flex-1 min-w-0">
        {/* Featured Image */}
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
            className="w-full h-auto [aspect-ratio:auto_16/9] mb-8 rounded-lg"
          />
        ) : (
          <div className="w-full aspect-[1.91/1] mb-8 rounded-lg flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-gray-50 to-gray-200 text-gray-600">
            <ImageOff size={36} />
            <span className="text-sm font-medium">Image unavailable</span>
          </div>
        )}
        {/* Content */}
        <div
          className="article"
          dangerouslySetInnerHTML={{ __html: filteredData }}
        />

        {/* FAQs */}
        {post.faqs?.length > 0 && (
          <div className="my-12">
            <FAQSection
              faqs={post.faqs}
              heading="Frequently Asked Questions"
              headingClassName="text-2xl font-bold mb-6"
            />
          </div>
        )}

        <div className="my-12 p-6 border border-gray-200 rounded-2xl bg-white shadow-md hover:shadow-lg transition duration-300">
          <div className="flex items-center gap-4 mb-4">
            {/* Avatar (the author's page is one click away) */}
            <Link href={authorPath(post?.author)} aria-label={`${post?.author}'s profile`}>
              <AuthorAvatar name={post?.author} size={52} />
            </Link>

            {/* Author Info */}
            <div>
              <p className="text-sm text-gray-500">Written by</p>
              <p className="text-lg font-semibold text-gray-900">
                <Link href={authorPath(post?.author)} className="transition-colors hover:text-[#0B60B0]">{post?.author}</Link>
              </p>
            </div>
          </div>

          {/* Author Bio */}
          <RichText as="p" text={post?.authorBio} className="text-gray-600 leading-relaxed text-sm" />
          <Link href={authorPath(post?.author)} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B60B0] hover:underline">
            View profile and all articles by {post?.author} <ChevronRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Contact Form */}
      <aside className="lg:w-72 shrink-0 sticky top-28 self-start mt-8 lg:mt-0">
        <BlogContactForm />
      </aside>
    </div>

      {/* CTA — just above the footer. White background here only — every
          other page keeps CTA's original dark version. */}
      <div className="bg-white pt-4">
        <CTA white />
      </div>
    </>
  );
}
