import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RichText from "@/components/ui/richText";
import AuthorAvatar from "@/components/author/authorAvatar";

// One author as a card (the authors index and the "More from our team" row
// on a profile): avatar, name, a line of their bio, how many articles and
// their top topics; the whole card links to their page. `author`: from
// lib/authors.js. `headingLevel`: the name's heading level (h2 on the index,
// where the cards follow the page's h1 directly).
export default function AuthorCard({ author, headingLevel = "h3" }) {
  const Name = headingLevel;
  const topics = author.categories.slice(0, 3).map((c) => c.name);
  return (
    <article className="group relative flex h-full flex-col rounded-3xl border border-white/10 bg-[#0b0e16] p-6 transition-colors duration-300 hover:border-[#40A2D8]/50 md:p-7">
      <div className="flex items-center gap-4">
        <AuthorAvatar name={author.name} size={56} />
        <div className="min-w-0">
          <Name className="font-display text-xl leading-snug text-white transition-colors group-hover:text-[#40A2D8]">
            <Link href={`/author/${author.slug}`} className="after:absolute after:inset-0 after:content-[''] focus-visible:underline focus-visible:outline-none">
              {author.name}
            </Link>
          </Name>
          <p className="text-sm text-white/60">
            {author.count} article{author.count === 1 ? "" : "s"}
          </p>
        </div>
      </div>
      {author.bio && <RichText as="p" text={author.bio} noLink className="mt-5 line-clamp-3 text-sm leading-relaxed text-white/65" />}
      {topics.length > 0 && <p className="mt-4 text-xs leading-relaxed text-white/60">Writes about {topics.join(" · ")}</p>}
      <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-[#40A2D8]">
        View profile
        <ArrowUpRight size={16} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </article>
  );
}
