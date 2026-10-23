"use client";
import React, { useEffect, useState, useRef } from "react";
import { getBlogCategoriesMongo, getPublishedBlogsMongo } from "@/actions/blogActions";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import Pill from "@/components/home/pill";
import PostCard from "@/components/detail/postCard";

export default function AllBLogs() {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  const [blogs, setBlogs] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [totalPages, setTotalPages] = useState(null);
  const [currPage, setCurrPage] = useState(1);
  const [posts, setPosts] = useState(0);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState({
    name: "All Categories",
    count: 0,
    id: "all",
  });
  const ref = useRef(null);

  const getBlogs = async (pages, cate, posts) => {
    if (loading) return;

    setLoading(true);
    const res = await getPublishedBlogsMongo(pages, cate, posts);
    if (res?.success) {
      setBlogs(res?.data);
      setTotalPages(res?.totalPages);
    }
    setLoading(false);
  };

  useEffect(() => {
    getBlogCategoriesMongo().then((res) => {
      if (res?.success) {
        const total = res?.data.reduce((acc, cat) => acc + cat.count, 0);
        res?.data.unshift({
          name: "All Categories",
          count: total,
          id: "all",
        });
        setCategories(res?.data);

        // A guide/other page can deep-link here with ?category=<name> to
        // jump straight into that category's blogs — takes priority over
        // any cookie-restored selection. Matched case-insensitively since
        // the linking page's label casing may differ slightly from the
        // category as stored in the CMS.
        if (categoryFromUrl) {
          const match = res.data.find(
            (cat) => cat.name?.toLowerCase() === categoryFromUrl.toLowerCase(),
          );
          setSelected(
            match || { name: categoryFromUrl, count: 0, id: categoryFromUrl },
          );
          setShowAll(true);
          setCurrPage(1);
          // without a page size nothing is fetched (the list stayed empty)
          setPosts(9);
        }
      }
    });
  }, [categoryFromUrl]);

  useEffect(() => {
    // Skip the cookie-restored selection when a category came in via the
    // URL — that deep link should win over whatever was browsed last time.
    if (categoryFromUrl) return;

    const savedPage = Cookies.get("blogPage");
    const savedPosts = Cookies.get("blogPosts");
    const savedShowAll = Cookies.get("blogShowAll");
    const savedSelectedCat = Cookies.get("selectedCat");

    // Deferred (not called synchronously in the effect body) so this
    // doesn't trip react-hooks/set-state-in-effect — same end result,
    // just scheduled a tick later instead of during the render commit.
    const timer = setTimeout(() => {
      if (savedPage) setCurrPage(Number(savedPage));
      if (savedPosts) setPosts(Number(savedPosts));
      if (savedShowAll) setShowAll(savedShowAll === "true");
      if (savedSelectedCat) setSelected(JSON.parse(savedSelectedCat));
    }, 0);
    return () => clearTimeout(timer);
  }, [categoryFromUrl]);

  useEffect(() => {
    if (posts === 0) return;
    window.scrollTo({
      top: document.documentElement.scrollHeight * 0.2,
      behavior: "smooth",
    });

    // Deferred for the same reason as above — getBlogs synchronously
    // calls setLoading(true) as soon as it starts running.
    const timer = setTimeout(() => {
      getBlogs(currPage, selected.id, posts);
    }, 0);
    Cookies.set("blogPage", currPage, { expires: 1 / 24 });
    Cookies.set("blogPosts", posts, { expires: 1 / 24 });
    Cookies.set("blogShowAll", showAll, { expires: 1 / 24 });
    Cookies.set("selectedCat", JSON.stringify(selected), { expires: 1 / 24 });
    return () => clearTimeout(timer);
    // getBlogs is re-created every render; re-running on it would loop.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showAll, currPage, posts, selected]);

  // The browser's own HTML parser strips the tags and decodes entities
  // (&amp;, &rsquo;, ...) — this used the `he` library, which shipped its
  // whole ~2,000-entity table to every visitor of /blog. Posts are only
  // fetched client-side (blogs starts empty), so this never runs on the
  // server; the guard is just a safety net there.
  function truncateHTML(html, limit = 120) {
      if (!html) return "";

      const text =
        typeof DOMParser === "undefined"
          ? html.replace(/<[^>]*>/g, "")
          : new DOMParser().parseFromString(html, "text/html").body.textContent || "";

      return text.length > limit ? text.slice(0, limit) + "..." : text;
    }

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = (cat) => {
    setSelected(cat);
    setCurrPage(1);
    setOpen(false);
  };

  function decodeHTML(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  const goToPage = (step) => {
    if (loading) return;
    setPosts(9);
    setCurrPage((prev) => prev + step);
  };
  const pagerButton = "flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-white hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-white";
  const pager = (
    <div className="flex items-center gap-3">
      <button type="button" aria-label="Previous page" disabled={currPage === 1 || loading} onClick={() => goToPage(-1)} className={pagerButton}>
        <ArrowLeft size={16} aria-hidden="true" />
      </button>
      <p className="text-sm text-white/70">
        Page {currPage} of {totalPages}
      </p>
      <button type="button" aria-label="Next page" disabled={currPage == totalPages || loading} onClick={() => goToPage(1)} className={pagerButton}>
        <ArrowRight size={16} aria-hidden="true" />
      </button>
    </div>
  );

  // Redesign (dark, like the homepage's latest posts): the heading with the
  // category menu and pager beside it, then the posts as plain cards
  // (PostCard), the pager again underneath. Same fetching, paging, category
  // deep links and remembered selection as before.
  return (
    <div className="mx-auto max-w-7xl px-6 text-white md:px-10">
      {showAll && (
        <div className="flex flex-wrap items-end justify-between gap-6 border-t border-white/10 pt-16 md:pt-20">
          <div>
            <p className="text-sm text-[#40A2D8]">Every post</p>
            <h2 className="font-display mt-4 text-4xl leading-[1.08] md:text-5xl">All Blogs</h2>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative w-64" ref={ref}>
              <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                aria-haspopup="listbox"
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-3 rounded-full border border-white/25 px-5 py-2.5 text-sm text-white transition-colors hover:border-white"
              >
                <span className="truncate">{decodeHTML(selected.name)}</span>
                <ChevronDown size={16} aria-hidden="true" className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
              </button>
              {/* inert while closed: hidden from keyboards and screen readers */}
              <div
                inert={!open}
                className={`absolute z-50 mt-2 max-h-80 w-full origin-top overflow-y-auto rounded-2xl border border-white/10 bg-[#0c0d12] shadow-xl shadow-black/60 transition-all duration-200 ${
                  open ? "pointer-events-auto scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
                }`}
              >
                <ul className="space-y-0.5 p-1.5">
                  {categories.map((cat) => (
                    <li key={cat.name}>
                      <button
                        type="button"
                        onClick={() => handleSelect(cat)}
                        className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-left text-sm transition-colors duration-150 ${
                          cat.name === selected.name ? "bg-[#0B60B0] text-white" : "text-white/80 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span>{decodeHTML(cat.name)}</span>
                        <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs">{cat.count}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {pager}
          </div>
        </div>
      )}

      {loading ? (
        <div className="grid gap-8 py-12 md:grid-cols-3">
          {[0, 1, 2].map((k) => (
            <div key={k} className="space-y-3">
              <div className="aspect-[1.91/1] w-full rounded-2xl animate-shimmer" />
              <div className="h-4 w-3/4 rounded animate-shimmer" />
              <div className="h-3 w-1/2 rounded animate-shimmer" />
            </div>
          ))}
        </div>
      ) : (
        blogs.length > 0 && (
          <div className="grid gap-x-8 gap-y-14 pt-12 md:grid-cols-2 md:pt-16 lg:grid-cols-3">
            {blogs.map((e, index) => (
              <PostCard key={e?.slug || index} post={e} excerpt={truncateHTML(e?.excerpt, 150)} />
            ))}
          </div>
        )
      )}

      {!showAll && (
        <div className="flex justify-center">
          <Pill
            onClick={() => {
              setPosts(9);
              setShowAll(true);
            }}
          >
            View all blogs
          </Pill>
        </div>
      )}
      {showAll && !loading && <div className="mt-14 flex justify-center">{pager}</div>}
    </div>
  );
}
