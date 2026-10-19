"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

// The globe pulls in three.js (~130KB gzipped). Imported directly, it was
// part of the /contact route's code — and since most pages show a link to
// /contact (hero CTAs), Next's link prefetching downloaded and parsed
// three.js on those pages too, for a globe they never show (mobile Total
// Blocking Time / INP). Loading it through next/dynamic, only once the
// section comes near the screen, keeps it out of every route's bundle.
const Globe = dynamic(() => import("./globe"), { ssr: false });

export default function LazyGlobe(props) {
  const ref = useRef(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // The wrapper fills the same fixed-size box the globe did, so nothing
  // shifts when it mounts.
  return (
    <div ref={ref} className="w-full h-full">
      {near && <Globe {...props} />}
    </div>
  );
}
