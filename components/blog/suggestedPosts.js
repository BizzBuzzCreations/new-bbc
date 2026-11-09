import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PostCard from "@/components/detail/postCard";
import Pill from "@/components/home/pill";

// The end of a post — what to read next:
//  - Previous / next article by date (one card each, with the topic and title);
//  - "Keep reading": up to three suggested articles (the same topic first,
//    then the newest others), as the same cards the blog list uses, with a
//    link to the whole blog.
// `suggested`, `prev`, `next`: from lib/relatedPosts.js.
export function PrevNext({ prev, next }) {
  if (!prev && !next) return null;
  const card = (post, dir) => (
    <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col rounded-[20px] border border-(--line) bg-paper-2 p-5 transition-colors duration-300 hover:border-(--fg)/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-buzz md:p-6">
      <span className={`inline-flex items-center gap-2 text-xs uppercase tracking-wider text-(--fg) ${dir === "next" ? "justify-end" : ""}`}>
        {dir === "prev" && <ArrowLeft size={14} aria-hidden="true" className="transition-transform group-hover:-translate-x-0.5" />}
        {dir === "prev" ? "Previous article" : "Next article"}
        {dir === "next" && <ArrowRight size={14} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />}
      </span>
      <span className={`font-display mt-3 text-lg leading-snug text-(--fg) transition-colors group-hover:text-(--fg) md:text-xl ${dir === "next" ? "text-right" : ""}`}>{post.title}</span>
      {post.category && <span className={`mt-2 text-sm text-(--mut) ${dir === "next" ? "text-right" : ""}`}>{post.category}</span>}
    </Link>
  );
  return (
    <nav aria-label="More articles" className="my-12 grid gap-4 sm:grid-cols-2">
      <div>{prev && card(prev, "prev")}</div>
      <div>{next && card(next, "next")}</div>
    </nav>
  );
}

export default function SuggestedPosts({ suggested }) {
  if (!suggested?.length) return null;
  return (
    <section className="border-t border-(--line) text-(--fg)">
      <div className="wrap py-16 md:px-10 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="kicker text-(--fg)">Suggested for you</p>
            <h2 className="font-display mt-6 text-[clamp(2.2rem,4.4vw,4rem)] leading-[0.98]">Keep reading</h2>
          </div>
          <Pill href="/blog">All articles</Pill>
        </div>
        <div className="mt-12 grid gap-x-8 gap-y-14 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {suggested.map((p) => (
            <PostCard key={p.slug} post={p} excerpt={p.excerpt} headingLevel="h3" />
          ))}
        </div>
      </div>
    </section>
  );
}
