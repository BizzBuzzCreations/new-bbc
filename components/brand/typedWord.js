"use client";

import { useEffect, useState } from "react";

// A word that types itself, holds, deletes and moves to the next
// ("Working with  Healthcare▮"). Purely decorative: screen readers get the
// whole list once, the animated text is hidden from them. With reduced
// motion it shows the first word, still. Starts after load (never competes
// with the first paint).
export default function TypedWord({ words, className = "" }) {
  const list = (words || []).filter(Boolean);
  const [state, setState] = useState({ i: 0, n: list[0]?.length || 0 });

  useEffect(() => {
    if (list.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let i = 0;
    let n = list[0].length;
    let dir = "hold";
    let timer;
    const tick = () => {
      const word = list[i];
      if (dir === "hold") {
        dir = "del";
        timer = setTimeout(tick, 1700);
        return;
      }
      if (dir === "del") {
        n -= 1;
        setState({ i, n });
        if (n <= 0) {
          i = (i + 1) % list.length;
          dir = "type";
        }
        timer = setTimeout(tick, 38);
        return;
      }
      n += 1;
      setState({ i, n });
      if (n >= word.length) dir = "hold";
      timer = setTimeout(tick, 70);
    };
    const start = setTimeout(tick, 2600);
    return () => {
      clearTimeout(start);
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list.join("|")]);

  if (!list.length) return null;
  return (
    <span className={className}>
      <span className="sr-only">{list.join(", ")}</span>
      <span aria-hidden="true">
        {list[state.i].slice(0, state.n)}
        <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.15em] bg-buzz motion-safe:animate-pulse" />
      </span>
    </span>
  );
}
