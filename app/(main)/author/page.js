import PageHero from "@/components/detail/pageHero";
import AuthorCard from "@/components/author/authorCard";
import CtaV2 from "@/components/home/ctaV2";
import { getAuthors } from "@/lib/authors";

export const revalidate = 60;

export const metadata = {
  title: "Authors | BizzBuzz Creations Blog",
  description: "Meet the people who write the BizzBuzz Creations blog, and read everything each of them has published.",
  alternates: { canonical: "https://bizzbuzzcreations.com/author" },
};

export default async function AuthorsIndex() {
  const authors = await getAuthors();
  return (
    <div data-no-reveal>
      <PageHero
        label="Authors"
        parent={{ label: "Blog", href: "/blog" }}
        title="Meet the People Behind Our Blog"
        description="The marketers, strategists and developers who write what we publish. Pick an author to read about them and see everything they have written."
        actions={[{ text: "Read the blog", href: "/blog", variant: "solid" }]}
      />
      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 pb-20 md:px-10 md:pb-24">
          {authors.length > 0 ? (
            <ul className={`reveal-stagger grid gap-4 ${authors.length === 1 ? "max-w-md" : authors.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
              {authors.map((a) => (
                <li key={a.slug}>
                  <AuthorCard author={a} headingLevel="h2" />
                </li>
              ))}
            </ul>
          ) : (
            <p className="border-y border-white/10 py-10 text-white/70">No articles have been published yet.</p>
          )}
        </div>
      </section>
      <CtaV2 />
    </div>
  );
}
