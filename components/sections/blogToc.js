"use client";

import { useEffect, useRef, useState } from "react";

// The "Contents" list beside a blog post. It follows the reader: the section
// they are currently in is highlighted (and its parent section softly, when
// it is a sub-section), and the list scrolls by itself to keep that entry in
// view when the list is taller than the screen. Main sections (h2) are
// numbered 1, 2, 3…; sub-sections (h3) sit indented under them with a dash.
// `toc`: { id, text, level, number }.
// The current section is the last heading that has reached the line just
// under the navbar. Driven by scroll position (one frame at a time), so it
// stays right with tall sections; nothing is animated.
const READ_LINE = 150; // px from the top of the screen

export default function BlogToc({ toc }) {
  const [activeId, setActiveId] = useState(null);
  const listRef = useRef(null);

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

  // keep the current entry inside the list's own scroll area (the page isn't touched)
  useEffect(() => {
    const box = listRef.current;
    const link = box?.querySelector('a[aria-current="true"]');
    if (!box || !link) return;
    const top = link.offsetTop; // the box is `relative`, so this is within it
    if (top < box.scrollTop + 8) box.scrollTop = Math.max(0, top - 8);
    else if (top + link.offsetHeight > box.scrollTop + box.clientHeight - 8) box.scrollTop = top + link.offsetHeight - box.clientHeight + 8;
  }, [activeId]);

  // an h3's parent section: the closest h2 above it
  const parentOf = {};
  let lastH2 = null;
  toc.forEach((t) => {
    if (t.level === 2) lastH2 = t.id;
    else parentOf[t.id] = lastH2;
  });
  const activeParent = activeId ? parentOf[activeId] : null;

  return (
    <aside aria-label="Contents" className="sticky top-28 hidden w-52 shrink-0 self-start xl:block">
      <div ref={listRef} className="relative max-h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        {/* a label, not a heading: it sits between the title (h1) and the
            article's own h2s, so a heading here would skip a level */}
        <p className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-900">Contents</p>
        <ol className="space-y-1">
          {toc.map((item) => {
            const active = item.id === activeId;
            const parent = item.id === activeParent;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active ? "true" : undefined}
                  className={`flex gap-2 rounded-lg py-1 pr-2 text-sm transition-colors ${
                    item.level === 3 ? "pl-5" : "pl-2"
                  } ${
                    active
                      ? "bg-[#0B60B0]/10 font-semibold text-[#0B60B0]"
                      : parent
                        ? "text-[#0B60B0] hover:bg-gray-50"
                        : item.level === 3
                          ? "text-gray-500 hover:bg-gray-50 hover:text-[#0B60B0]"
                          : "text-gray-700 hover:bg-gray-50 hover:text-[#0B60B0]"
                  }`}
                >
                  <span className={`shrink-0 ${item.level === 3 ? (active ? "text-[#0B60B0]" : "text-gray-400") : "font-semibold text-[#0B60B0]"}`}>
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
