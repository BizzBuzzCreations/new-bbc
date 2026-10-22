"use client";

import { forwardRef, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

// Floating BizzBee button: the animated support bubble from
// /bizzbee-support.json (a Lottie file: a chat bubble with a headset and
// typing dots) as a clickable button fixed in the bottom-right corner. Its first frames are a
// pop-in from nothing, so that plays once and then only the typing part
// loops (LOOP_FROM: frame 51 is identical to the last frame — seamless).
//
// - lottie-web is imported dynamically (after the page is idle), so it is not
//   part of the initial bundle; until it loads, the static logo shows.
// - The bubble's own animation (typing dots, the headset's sound waves)
//   ALWAYS plays — it is small and is the button's identity.
// - On top of that, the bubble floats gently up and down (4px), leans a
//   little, and tilts slightly toward a mouse pointer — kept small on
//   purpose, so it doesn't distract. Those extra movements are driven from script
//   (Web Animations API), not from stylesheet keyframes, and are switched off
//   for visitors who ask their system for reduced motion.
// - Not draggable: it stays in its corner. A click opens / minimizes the chat.
// - Steps aside: while it would sit on top of anything marked
//   `data-bizzbee-avoid` (e.g. the blog sidebar form's Submit button), it
//   fades out and can't be tapped; it comes back once that has scrolled
//   away. Never while the chat is open, or while it has keyboard focus.
// - While the chat is open it is static.
const LOOP_FROM = 51;
const REST_FRAME = 90; // shown while the chat is open

const BizzBeeLauncher = forwardRef(function BizzBeeLauncher(
  { onOpen, expanded = false, showTip, onDismissTip },
  ref,
) {
  const stageRef = useRef(null);
  const lottieBox = useRef(null);
  const roamEl = useRef(null);
  const animRef = useRef(null); // the Lottie instance
  const anims = useRef([]); // Web Animations (roam + lean), so hover can speed them up
  const [ready, setReady] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const hitRef = useRef(null); // the tappable circle around the bubble
  const [tucked, setTucked] = useState(false);

  // Step aside while overlapping a [data-bizzbee-avoid] element. Checked on
  // scroll / resize (once per frame at most) — just a few rect reads.
  useEffect(() => {
    let frame = 0;
    const check = () => {
      frame = 0;
      const hit = hitRef.current?.getBoundingClientRect();
      if (!hit) return;
      const pad = 12;
      const over = [...document.querySelectorAll("[data-bizzbee-avoid]")].some((el) => {
        const r = el.getBoundingClientRect();
        return r.width > 0 && r.left < hit.right + pad && r.right > hit.left - pad && r.top < hit.bottom + pad && r.bottom > hit.top - pad;
      });
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
  const [focused, setFocused] = useState(false);
  const away = tucked && !expanded && !focused;

  // Load the Lottie animation (lazy). It always plays.
  useEffect(() => {
    let anim;
    let cancelled = false;

    import("lottie-web").then((mod) => {
      if (cancelled || !lottieBox.current) return;
      anim = animRef.current = mod.default.loadAnimation({
        container: lottieBox.current,
        renderer: "svg",
        loop: true,
        autoplay: false,
        path: "/bizzbee-support.json?v=1", // ?v busts the browser cache when the artwork changes
        rendererSettings: { preserveAspectRatio: "xMidYMid meet", progressiveLoad: true },
      });
      anim.addEventListener("DOMLoaded", () => {
        if (cancelled) return;
        // pop in once, then loop the typing dots (the last segment repeats)
        anim.playSegments([[0, anim.totalFrames], [LOOP_FROM, anim.totalFrames]], true);
        setReady(true);
      });
    });

    return () => {
      cancelled = true;
      anim?.destroy();
      animRef.current = null;
    };
  }, []);

  // Extra motion (a gentle float, and a small lean) via the Web Animations API.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const list = [];
    if (roamEl.current?.animate) {
      list.push(
        roamEl.current.animate(
          [
            { transform: "translate3d(0,0,0)" },
            { transform: "translate3d(0,-4px,0)" },
            { transform: "translate3d(0,0,0)" },
          ],
          { duration: 4000, iterations: Infinity, easing: "ease-in-out" },
        ),
      );
    }
    if (lottieBox.current?.animate) {
      list.push(
        lottieBox.current.animate(
          [
            { transform: "rotate(-1.5deg)" },
            { transform: "rotate(1.5deg)" },
            { transform: "rotate(-1.5deg)" },
          ],
          { duration: 5200, iterations: Infinity, easing: "ease-in-out" },
        ),
      );
    }
    anims.current = list;
    return () => {
      list.forEach((a) => a.cancel());
      anims.current = [];
    };
  }, []);

  const setSpeed = (rate) => anims.current.forEach((a) => (a.playbackRate = rate));

  // While the chat is open the bubble is static: all motion stops (it rests at
  // a neutral pose) and it doesn't tilt. Minimizing the chat brings the
  // motion back.
  useEffect(() => {
    if (expanded) {
      anims.current.forEach((a) => {
        a.pause();
        a.currentTime = 0;
      });
      animRef.current?.goToAndStop(REST_FRAME, true);
      setTilt({ x: 0, y: 0 });
    } else {
      anims.current.forEach((a) => a.play());
      if (ready) animRef.current?.playSegments([LOOP_FROM, animRef.current.totalFrames], true);
    }
  }, [expanded, ready]);

  const onMove = (e) => {
    if (e.pointerType !== "mouse") return; // tilt toward a mouse pointer only
    if (expanded || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = stageRef.current?.getBoundingClientRect();
    if (!r) return;
    const px = (e.clientX - r.left) / r.width - 0.5; // -0.5 … 0.5
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -py * 8, y: px * 10 });
  };
  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      className={`fixed bottom-2 right-2 z-[9990] pb-[env(safe-area-inset-bottom)] transition-opacity duration-300 sm:right-3 ${
        away ? "opacity-0 [&_*]:!pointer-events-none" : "opacity-100"
      }`}
    >
      {showTip && !away && (
        <div
          role="status"
          className="bizzbee-enter absolute bottom-full right-1 mb-1 w-[190px] rounded-2xl rounded-br-md bg-white sm:bottom-auto sm:right-full sm:top-1/2 sm:mb-0 sm:mr-2 sm:w-[200px] sm:-translate-y-1/2 sm:rounded-br-2xl sm:rounded-r-md px-3.5 py-2.5 pr-8 text-xs font-medium text-[#0a2540] shadow-xl"
        >
          Hi! 👋 Not sure which service you need? Ask BizzBee.
          <button
            type="button"
            onClick={onDismissTip}
            aria-label="Dismiss tip"
            className="absolute right-1 top-1 rounded-full p-1.5 text-[#0a2540]/60 hover:text-[#0a2540] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B60B0]"
          >
            <X size={12} />
          </button>
        </div>
      )}
      <button
        ref={ref}
        type="button"
        onClick={onOpen}
        onPointerMove={onMove}
        onPointerEnter={() => !expanded && setSpeed(2.2)}
        onPointerLeave={() => {
          resetTilt();
          setSpeed(1);
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => {
          resetTilt();
          setFocused(false);
        }}
        aria-label={expanded ? "Minimize BizzBee AI assistant" : "Open BizzBee AI assistant"}
        aria-expanded={expanded}
        title={expanded ? "Minimize BizzBee AI" : "Ask BizzBee AI"}
        aria-haspopup="dialog"
        className={`bizzbee-fab pointer-events-none relative block h-[84px] w-[84px] sm:h-[104px] sm:w-[104px] select-none cursor-pointer focus:outline-none focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#40A2D8] [perspective:520px]`}
      >
        <span
          ref={stageRef}
          className="bizzbee-fab-stage block h-full w-full"
          style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
        >
          {/* Just the bubble (no background shape); it drifts around on its
              own, with a soft drop shadow. */}
          <span ref={roamEl} className="relative block h-full w-full [transform-style:preserve-3d]">
            {/* The only part that takes taps/clicks (the button itself is
                pointer-events-none): a circle around the bubble that floats
                with it, so the box's empty corners never swallow taps meant
                for buttons underneath, e.g. a hero CTA on a phone. */}
            <span
              ref={hitRef}
              aria-hidden="true"
              className="pointer-events-auto absolute left-1/2 top-1/2 h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-[72px] sm:w-[72px]"
            />
            {/* Static logo until the animation has loaded */}
            {!ready && (
              <Image
                src="/bizzbee-logo.png"
                alt=""
                width={160}
                height={160}
                sizes="96px"
                priority
                className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover sm:h-16 sm:w-16"
                draggable={false}
              />
            )}
            <span
              ref={lottieBox}
              aria-hidden="true"
              className={`pointer-events-none absolute inset-0 block transition-opacity duration-300 ${ready ? "opacity-100" : "opacity-0"}`}
              style={{
                filter:
                  "drop-shadow(0 10px 10px rgba(0,0,0,0.5))",
              }}
            />
          </span>
        </span>
      </button>
    </div>
  );
});

export default BizzBeeLauncher;
