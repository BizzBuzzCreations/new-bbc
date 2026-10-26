import he from "he";
import { getLatestThreeBlogsMongo } from "@/actions/blogActions";
import PageHero from "@/components/detail/pageHero";
import PostCard from "@/components/detail/postCard";
import AllBLogs from "@/components/sections/allBLogs";
import CtaV2 from "@/components/home/ctaV2";
import BeamsBlock from "@/components/home/band";

// Same reasoning as the single-post page: blog content is edited/scheduled
// via the dashboard, so this listing must always read fresh from the DB.
// (Stays dynamic: AllBLogs reads useSearchParams, which can't be prerendered.)
export const dynamic = "force-dynamic";

export const metadata = {
  title: "BizzBuzz Creations Blog | Digital Marketing & SEO Insights",
  description:
    "Explore expert tips on SEO, performance marketing, and lead generation. Learn how BizzBuzz Creations helps businesses grow with data-driven strategies.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/blog",
  },
};

export default async function Blogs() {
  const res = await getLatestThreeBlogsMongo();
  const blogs = res.data || [];

  function truncateHTML(html, limit = 120) {
    if (!html) return "";

    const text = he.decode(html.replace(/<[^>]*>/g, "")); // remove HTML tags

    return text.length > limit ? text.slice(0, limit) + "..." : text;
  }

  // Redesign, in the homepage's style: the page heading, the three latest
  // posts, then every post (category menu and pages) → closing CTA.
  return (
    <div data-no-reveal>
      {/* the site's beams background behind the heading, the posts and the list */}
      <BeamsBlock>
      <PageHero background="" label="Blog" title="Our Latest Blogs" description="Explore, discover, and find inspiration through these exciting blogs." />

      {blogs.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 md:pb-20">
          <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {/* only the first card can be above the fold on phones */}
            {blogs.map((e, index) => (
              <PostCard key={e?.slug || index} post={e} excerpt={truncateHTML(e?.excerpt, 150)} headingLevel="h2" eager={index === 0} />
            ))}
          </div>
        </section>
      )}

      <AllBLogs />
      <div className="pb-16 md:pb-20" />
      </BeamsBlock>

      <CtaV2 />
    </div>
  );
}
