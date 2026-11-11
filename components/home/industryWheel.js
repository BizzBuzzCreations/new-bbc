"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// "Working with — Healthcare": the industries we serve as a wheel that rolls
// up one at a time, the current one set in full ink, the ones before and after
// it faded. The current industry is a link to its page; the wheel holds still
// while the pointer or focus is on it (so the link never changes under it) and
// is a still list under reduced motion. The list is repeated three times so it
// can roll round without a long rewind: when it reaches the third copy it
// snaps back to the second (same words, so nothing visibly jumps). Phones show
// only the current row (the first screen is tight there); screen readers get
// the whole list once and only the current row is exposed to them.
export default function IndustryWheel({ items }) {
  const list = (items || []).filter((x) => x?.label);
  const n = list.length;
  const [pos, setPos] = useState(n);
  const [snap, setSnap] = useState(false);
  const hold = useRef(false);

  useEffect(() => {
    if (n < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    let timer;
    const start = setTimeout(() => {
      timer = setInterval(() => {
        if (!hold.current && !document.hidden) setPos((p) => p + 1);
      }, 2600);
    }, 3200);
    return () => {
      clearTimeout(start);
      clearInterval(timer);
    };
  }, [n]);

  useEffect(() => {
    if (pos < 2 * n) return;
    const t = setTimeout(() => {
      setSnap(true);
      setPos((p) => p - n);
    }, 800);
    return () => clearTimeout(t);
  }, [pos, n]);

  useEffect(() => {
    if (!snap) return;
    let b = 0;
    const a = requestAnimationFrame(() => {
      b = requestAnimationFrame(() => setSnap(false));
    });
    return () => {
      cancelAnimationFrame(a);
      cancelAnimationFrame(b);
    };
  }, [snap]);

  if (!n) return null;
  const cur = pos % n;
  const rows = [...list, ...list, ...list];
  return (
    <div
      onPointerEnter={() => (hold.current = true)}
      onPointerLeave={() => (hold.current = false)}
      onFocus={() => (hold.current = true)}
      onBlur={() => (hold.current = false)}
    >
      <p className="kicker flex items-baseline justify-between gap-3 text-(--mut)">
        <span>Working with</span>
        <span aria-hidden="true" className="tabular-nums">
          {String(cur + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
        </span>
      </p>
      <span className="sr-only">
        Industries we serve: {list.map((x) => x.label).join(", ")}
      </span>
      <div className="wheel mt-2">
        <ul
          className="wheel-list"
          data-snap={snap ? "" : undefined}
          style={{ "--p": pos }}
        >
          {rows.map((x, k) => {
            const on = k === pos;
            return (
              <li
                key={k}
                data-cur={on ? "" : undefined}
                aria-hidden={on ? undefined : "true"}
                className="font-display"
              >
                {on ? (
                  <Link
                    href={x.href}
                    aria-label={`${x.label} — how we help this industry`}
                    className="group inline-flex items-center gap-1.5"
                  >
                    {x.label}
                    <ArrowUpRight
                      size={18}
                      aria-hidden="true"
                      className="shrink-0 -translate-x-1 text-(--fg) opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                    />
                  </Link>
                ) : (
                  <span>{x.label}</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
