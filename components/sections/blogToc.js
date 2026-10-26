"use client";

import { useEffect, useState } from "react";

// The "Contents" list beside a blog post. It follows the reader: the section
// they are currently in is highlighted (and its parent section softly, when
// it is a sub-section), and the list scrolls by itself to keep that entry in
// view when the list is taller than the screen. Main sections (h2) are
// numbered 1, 2, 3…; sub-sections (h3) sit indented under them with a dash.
// `toc`: { id, text, level, number }. Nothing else moves: no progress meter,
// no blur, and the list never scrolls by itself.
// The current section is the last heading that has reached the line just
// under the navbar. Driven by scroll position (one frame at a time), so it
// stays right with tall sections; nothing is animated.
const READ_LINE = 150; // px from the top of the screen

export default function BlogToc({ toc }) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const els = toc.map((t) => document.getElementById(t.id));
    let frame = 0;
    const update = () => {
      frame = 0;
      let current = null;
      for (let i = 0; i < els.length; i++) {
        if (els[i] && els[i].getBoundingClientRect().top - READ_LINE <= 0) current = toc[i].id;
      }
      // at the very bottom the last section is current even if its heading is short of the line
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4 && toc.length) current = toc[toc.length - 1].id;
      setActiveId(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [toc]);

  return (
    <aside aria-label="Contents" className="sticky top-28 hidden w-52 shrink-0 self-start xl:block">
      <div className="max-h-[calc(100vh-8rem)] overflow-y-auto rounded-3xl border border-white/10 bg-[#0b0e16] p-5 [scrollbar-color:rgba(255,255,255,0.2)_transparent] [scrollbar-width:thin]">
        {/* a label, not a heading: it sits between the title (h1) and the
            article's own h2s, so a heading here would skip a level */}
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">Contents</p>
        <ol className="space-y-1">
          {toc.map((item) => {
            const active = item.id === activeId;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active ? "true" : undefined}
                  className={`flex gap-2 rounded-lg py-1 pr-2 text-sm transition-colors ${
                    item.level === 3 ? "pl-5" : "pl-2"
                  } ${
                    active
                      ? "bg-[#0B60B0]/30 font-semibold text-white"
                      : item.level === 3
                        ? "text-white/55 hover:bg-white/5 hover:text-white"
                        : "text-white/75 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className={`shrink-0 ${item.level === 3 ? (active ? "text-[#40A2D8]" : "text-white/40") : "font-semibold text-[#40A2D8]"}`}>
                    {item.level === 3 ? "–" : `${item.number}.`}
                  </span>
                  <span>{item.text}</span>
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </aside>
  );
}
