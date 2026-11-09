"use client";

import { useEffect, useState } from "react";

// A live local time for an office ("IST 14:32"), updated every 20s.
// Rendered as "--:--" on the server and filled in after mount, so the
// server and client markup always match (no hydration warning).
const fmt = (tz) => new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: tz });

export default function Clock({ tz, zone, className = "" }) {
  const [time, setTime] = useState(null);
  useEffect(() => {
    const f = fmt(tz);
    const tick = () => setTime(f.format(new Date()));
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, 20000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, [tz]);
  return (
    <span className={`tabular-nums ${className}`}>
      {zone && <span className="opacity-60">{zone} </span>}
      <time suppressHydrationWarning>{time || "--:--"}</time>
    </span>
  );
}

// Both time zones we work in, one line: "IST 14:32 · UK 09:02".
// `className` sets the display (e.g. "hidden md:inline-flex"); default inline-flex.
export function ClockLine({ className = "inline-flex" }) {
  const display = /(^|\s)(hidden|inline-flex|flex)(\s|$)/.test(className) ? "" : "inline-flex";
  return (
    <span className={`kicker items-center gap-3 ${display} ${className}`}>
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-buzz motion-safe:animate-pulse" />
      <span className="sr-only">Local time at our offices:</span>
      <Clock tz="Asia/Kolkata" zone="IST" />
      <span aria-hidden="true" className="opacity-40">·</span>
      <Clock tz="Europe/London" zone="UK" />
    </span>
  );
}
