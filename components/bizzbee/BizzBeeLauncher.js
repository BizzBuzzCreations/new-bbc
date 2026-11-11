"use client";

import { forwardRef, useEffect, useRef, useState } from "react";
import { ChevronDown, X } from "lucide-react";
import BizzBeeMark from "./BizzBeeMark";

// The BizzBee launcher: a quiet ink pill in the bottom-right corner — the
// yellow mark and "Ask BizzBee" (phones: just the round mark). It replaced an
// animated blue robot with floating icons, which fought the rest of the site
// (one accent colour, type-led, still).
//
// - Calm: the only motion is a short yellow ring around the mark for the first
//   few seconds, and none with reduced motion. Nothing floats, nothing follows
//   the pointer, and no animation library is loaded. Hover changes colour only.
// - A one-time tip (desktop, after a few seconds, once per tab session) sits
//   above it as a small paper card — no emoji, easy to dismiss.
// - Steps aside: while it would sit on top of anything marked
//   `data-bizzbee-avoid` (hero buttons, form fields, open menus) it fades out
//   and can't be tapped; it comes back once that has scrolled away. Never
//   while the chat is open, or while it has keyboard focus.
// - A click opens / minimises the chat (the pill then reads "Minimize").
const BizzBeeLauncher = forwardRef(function BizzBeeLauncher(
  { onOpen, expanded = false, showTip, onDismissTip },
  ref,
) {
  const box = useRef(null);
  const [tucked, setTucked] = useState(false);
  const [focused, setFocused] = useState(false);

  // Step aside while overlapping a [data-bizzbee-avoid] element. Checked on
  // scroll / resize (once per frame at most) — just a few rect reads.
  useEffect(() => {
    let frame = 0;
    const check = () => {
      frame = 0;
      const hit = box.current?.getBoundingClientRect();
      if (!hit) return;
      const pad = 2;
      const over = [...document.querySelectorAll("[data-bizzbee-avoid]")].some(
        (el) => {
          const r = el.getBoundingClientRect();
          return (
            r.width > 0 &&
            r.left < hit.right + pad &&
            r.right > hit.left - pad &&
            r.top < hit.bottom + pad &&
            r.bottom > hit.top - pad
          );
        },
      );
      setTucked(over);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);
  const away = tucked && !expanded && !focused;

  return (
    <div
      ref={box}
      className={`fixed bottom-4 right-4 z-[9990] mb-[env(safe-area-inset-bottom)] transition-opacity duration-300 sm:bottom-4 sm:right-6 ${
        away ? "opacity-0 [&_*]:!pointer-events-none" : "opacity-100"
      }`}
    >
      {showTip && !away && (
        <div
          role="status"
          className="bizzbee-enter absolute bottom-full right-0 mb-3 w-[270px] rounded-[20px] border border-ink/15 bg-paper p-4 pr-10 text-[0.9375rem] leading-snug text-ink shadow-[0_18px_40px_-18px_rgba(17,17,16,0.45)]"
        >
          <span className="font-medium">Not sure which service you need?</span>
          <span className="mt-0.5 block text-stone">
            Ask BizzBee, our AI assistant.
          </span>
          <button
            type="button"
            onClick={onDismissTip}
            aria-label="Dismiss tip"
            className="absolute right-1.5 top-1.5 flex h-8 w-8 items-center justify-center rounded-full text-stone transition-colors hover:bg-ink/10 hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
          >
            <X size={14} aria-hidden="true" />
          </button>
        </div>
      )}
      <button
        ref={ref}
        type="button"
        onClick={onOpen}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        aria-label={
          expanded
            ? "Minimize BizzBee AI assistant"
            : "Open BizzBee AI assistant"
        }
        aria-expanded={expanded}
        title={expanded ? "Minimize BizzBee AI" : "Ask BizzBee AI"}
        aria-haspopup="dialog"
        className="bizzbee-fab group flex h-[52px] items-center gap-3 rounded-full bg-ink p-1 text-paper shadow-[0_16px_34px_-14px_rgba(17,17,16,0.6),0_0_0_1px_rgba(245,244,240,0.14)_inset] transition-colors duration-300 hover:bg-[#262624] focus:outline-none focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-buzz sm:pr-5"
      >
        <span className="relative">
          {expanded ? (
            <span
              aria-hidden="true"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-buzz text-buzz-ink"
            >
              <ChevronDown size={20} strokeWidth={2.2} />
            </span>
          ) : (
            <BizzBeeMark className="h-11 w-11" />
          )}
          {!expanded && (
            <span
              aria-hidden="true"
              className="bizzbee-ring pointer-events-none absolute inset-0 rounded-full"
            />
          )}
        </span>
        <span className="hidden text-[0.9375rem] font-medium sm:inline">
          {expanded ? "Minimize" : "Ask BizzBee"}
        </span>
      </button>
    </div>
  );
});

export default BizzBeeLauncher;
