"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Search, X } from "lucide-react";
import Pill from "@/components/home/pill";
import { optimizedImageUrl, imageSrcSet } from "@/lib/getFeaturedImage";

// An author's articles, made to be explored: search by words in the title or
// text, filter by topic (with counts), sort newest / oldest, "Show more"
// nine at a time. The cards re-flow with a short animation (skipped for
// visitors who ask for reduced motion — the site's MotionConfig handles it).
// `posts`: { slug, title, excerpt, image, category, date, minutes };
// `categories`: { name, count }.
const PAGE = 9;

const fmt = (iso) => new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

export default function AuthorPosts({ posts, categories, authorName }) {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("all");
  const [newestFirst, setNewestFirst] = useState(true);
  const [shown, setShown] = useState(PAGE);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    const out = posts.filter((p) => (topic === "all" || p.category === topic) && (!q || `${p.title} ${p.excerpt}`.toLowerCase().includes(q)));
    return newestFirst ? out : [...out].reverse();
  }, [posts, query, topic, newestFirst]);

  const visible = list.slice(0, shown);
  const reset = () => {
    setQuery("");
    setTopic("all");
    setShown(PAGE);
  };
  const chip = (active) =>
    `rounded-full border px-4 py-2 text-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-buzz ${
      active ? "border-(--fg) bg-buzz text-buzz-ink" : "border-(--line) text-(--mut) hover:border-(--fg)/50 hover:text-(--fg)"
    }`;

  return (
    <div>
      {/* tools */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-sm">
          <label htmlFor="author-search" className="sr-only">Search {authorName}&rsquo;s articles</label>
          <Search size={16} aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-(--mut)" />
          <input
            id="author-search"
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShown(PAGE);
            }}
            placeholder="Search these articles…"
            className="w-full rounded-full border border-(--line) bg-white/[0.04] py-3 pl-11 pr-11 text-base text-(--fg) placeholder:text-(--mut) focus:border-(--fg) focus:outline-none md:text-sm"
          />
          {query && (
            <button type="button" onClick={() => setQuery("")} aria-label="Clear search" className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-(--mut) hover:bg-(--fg)/5 hover:text-(--fg)">
              <X size={16} aria-hidden="true" />
            </button>
          )}
        </div>
        <div role="group" aria-label="Sort articles" className="flex w-fit gap-1 rounded-full border border-(--line) p-1">
          {[
            [true, "Newest"],
            [false, "Oldest"],
          ].map(([value, label]) => (
            <button
              key={label}
              type="button"
              aria-pressed={newestFirst === value}
              onClick={() => setNewestFirst(value)}
              className={`rounded-full px-4 py-1.5 text-sm transition-colors ${newestFirst === value ? "bg-white text-black" : "text-(--mut) hover:text-(--fg)"}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {categories.length > 1 && (
        <div role="group" aria-label="Filter by topic" className="mt-5 flex flex-wrap gap-2">
          <button
            type="button"
            aria-pressed={topic === "all"}
            onClick={() => {
              setTopic("all");
              setShown(PAGE);
            }}
            className={chip(topic === "all")}
          >
            All <span className={topic === "all" ? "text-(--fg)/85" : "text-(--mut)"}>{posts.length}</span>
          </button>
          {categories.map((c) => (
            <button
              key={c.name}
              type="button"
              aria-pressed={topic === c.name}
              onClick={() => {
                setTopic(c.name);
                setShown(PAGE);
              }}
              className={chip(topic === c.name)}
            >
              {c.name} <span className={topic === c.name ? "text-(--fg)/85" : "text-(--mut)"}>{c.count}</span>
            </button>
          ))}
        </div>
      )}

      <p aria-live="polite" className="mt-8 text-sm text-(--mut)">
        {list.length === 0 ? "No articles match." : `Showing ${Math.min(shown, list.length)} of ${list.length} article${list.length === 1 ? "" : "s"}`}
      </p>

      {list.length === 0 ? (
        <div className="mt-6 flex flex-col items-start gap-4 border-y border-(--line) py-10">
          <p className="text-base text-(--mut)">Nothing matches that search. Try a different word, or clear the filters.</p>
          <Pill onClick={reset}>Clear filters</Pill>
        </div>
      ) : (
        <ul className="mt-6 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((p) => (
              <motion.li key={p.slug} layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
                <article className="group relative h-full">
                  <div className="relative aspect-[1.91/1] overflow-hidden rounded-[20px] border border-(--line) bg-paper-2">
                    {p.image ? (
                      // eslint-disable-next-line @next/next/no-img-element -- dashboard-supplied URL (Cloudinary etc.), not a fixed host
                      <img
                        src={optimizedImageUrl(p.image, 640)}
                        srcSet={imageSrcSet(p.image, [400, 640, 900])}
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 400px"
                        loading="lazy"
                        decoding="async"
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    ) : (
                      <span aria-hidden="true" className="kicker absolute inset-0 flex items-end p-4 text-(--mut)">{p.category}</span>
                    )}
                    {p.category && <span className="absolute bottom-3 left-3 rounded-full border border-(--line) bg-(--bg)/60 px-3 py-1 text-xs text-(--fg) backdrop-blur-md">{p.category}</span>}
                  </div>
                  <p className="kicker mt-5 text-(--mut)">
                    {fmt(p.date)} &middot; {p.minutes} min read
                  </p>
                  <h3 className="font-display mt-2 text-xl leading-snug text-(--fg) transition-colors duration-200 group-hover:text-(--fg) md:text-2xl">
                    <Link href={`/blog/${p.slug}`} className="after:absolute after:inset-0 after:content-[''] focus-visible:underline focus-visible:outline-none">
                      {p.title}
                    </Link>
                  </h3>
                  {p.excerpt && <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-(--mut)">{p.excerpt}</p>}
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-(--fg)">
                    Read article
                    <ArrowUpRight size={16} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </article>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}

      {list.length > shown && (
        <div className="mt-8 flex justify-center">
          <Pill onClick={() => setShown((s) => s + PAGE)}>Show more articles</Pill>
        </div>
      )}
    </div>
  );
}
