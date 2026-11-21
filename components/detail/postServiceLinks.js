import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Under every blog post: the service pages that fit what it is about. The
// blog is where most visitors (and most of the site's search standing) come
// in, so this passes them — and the post's authority — on to the pages that
// sell, with plain descriptive link text instead of a generic "learn more".
// Picks by the post's title / category / tags; falls back to SEO, ads and
// websites. `compact` = one short line, shown above the article.
const SERVICES = [
  { href: "/search-engine-optimization", name: "SEO services", line: "Rank higher on Google and get found by AI search.", re: /\bseo\b|search engine|backlink|link.?building|listing|directory|guest post|ranking|keyword|serp|\bgeo\b|\baeo\b/i },
  { href: "/paid-marketing", name: "Google & Meta ads management", line: "Paid campaigns run for leads and sales, not clicks.", re: /\bppc\b|\bads?\b|advertis|google ads|meta ads|facebook ads|campaign|\bcpc\b|retarget/i },
  { href: "/web-development", name: "Website development", line: "Fast, secure websites built to turn visitors into enquiries.", re: /website|web ?dev|wordpress|woocommerce|shopify|next\.?js|react|landing page|saas|ecommerce|e-commerce/i },
  { href: "/social-media-marketing", name: "Social media marketing", line: "Content, reels and community on the platforms your customers use.", re: /social|instagram|facebook|linkedin|youtube|reel|influencer|community/i },
  { href: "/ai-solutions", name: "AI solutions", line: "AI agents, content and automation that save your team time.", re: /\bai\b|chatgpt|artificial|llm|perplexity|generative/i },
  { href: "/marketing-automation", name: "Marketing automation", line: "Email, CRM and WhatsApp follow-ups that run on their own.", re: /automation|crm|whatsapp|email marketing|lead nurtur|funnel/i },
  { href: "/business-consultancy", name: "Business consulting", line: "Strategy and growth planning for startups and small businesses.", re: /strategy|startup|consult|business growth|scaling|sales marketing/i },
  { href: "/bpo-services", name: "BPO & outsourcing", line: "Call centre, data entry and support teams without the overhead.", re: /bpo|outsourc|call cent|customer support|back.?office|data entry/i },
];
const DEFAULT = ["/search-engine-optimization", "/paid-marketing", "/web-development"];

export function pickServices(post, count = 3) {
  const text = [post?.title, post?.category, Array.isArray(post?.tags) ? post.tags.join(" ") : post?.tags].filter(Boolean).join(" ");
  const hits = SERVICES.filter((s) => s.re.test(text));
  const out = [...hits];
  for (const href of DEFAULT) {
    const s = SERVICES.find((x) => x.href === href);
    if (!out.includes(s)) out.push(s);
  }
  return out.slice(0, count);
}

export default function PostServiceLinks({ post, compact = false }) {
  const picks = pickServices(post, compact ? 1 : 3);
  if (compact) {
    const s = picks[0];
    return (
      <p className="mb-8 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/80">
        Want this done for you?{" "}
        <Link href={s.href} className="font-medium text-[#40A2D8] underline-offset-2 hover:text-white hover:underline">
          See our {s.name}
        </Link>{" "}
        or{" "}
        <Link href="/contact" className="font-medium text-[#40A2D8] underline-offset-2 hover:text-white hover:underline">
          talk to us
        </Link>
        .
      </p>
    );
  }
  return (
    <section aria-labelledby="post-services" className="my-12 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
      <h2 id="post-services" className="font-display text-2xl text-white md:text-3xl">
        Want us to do this for you?
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-white/70 md:text-base">
        BizzBuzz Creations is a digital marketing and business solutions agency in Prayagraj, India. Here is where we can help with what you just read.
      </p>
      <ul className="mt-6 grid gap-3 md:grid-cols-3">
        {picks.map((s) => (
          <li key={s.href}>
            <Link href={s.href} className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 p-4 transition-colors hover:border-[#40A2D8] hover:bg-white/[0.04]">
              <span className="flex items-start justify-between gap-3 font-display text-lg text-white">
                {s.name}
                <ArrowUpRight size={18} aria-hidden="true" className="mt-1 shrink-0 text-[#40A2D8]" />
              </span>
              <span className="mt-2 text-sm text-white/65">{s.line}</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-white/70">
        Not sure which one you need?{" "}
        <Link href="/contact" className="font-medium text-[#40A2D8] underline-offset-2 hover:text-white hover:underline">
          Get a free consultation
        </Link>
        .
      </p>
    </section>
  );
}
