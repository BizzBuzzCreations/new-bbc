"use client";

import { forwardRef, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

// Floating BizzBee button: the animated robot from /bizzbee-robot.json
// (a Lottie file) as a clickable, draggable button.
//
// - lottie-web is imported dynamically (after the page is idle), so it is not
//   part of the initial bundle; until it loads, the static logo shows.
// - The robot's own animation (hovering up and down, blinking, the shadow
//   breathing) ALWAYS plays — it is small and is the button's identity.
// - On top of that, the robot drifts around, hops and turns in 3D, leans, and
//   tilts toward the pointer. Those extra movements are driven from script
//   (Web Animations API), not from stylesheet keyframes, and are switched off
//   for visitors who ask their system for reduced motion.
// - Movable: drag it anywhere on screen (the position is remembered for the
//   tab). A plain click (no drag) opens / minimizes the chat.
// - While the chat is open it is static and not draggable.
const POS_KEY = "bizzbee-fab-pos";

const BizzBeeLauncher = forwardRef(function BizzBeeLauncher(
  { onOpen, expanded = false, showTip, onDismissTip },
  ref,
) {
  const wrapRef = useRef(null);
  const stageRef = useRef(null);
  const lottieBox = useRef(null);
  const roamEl = useRef(null);
  const animRef = useRef(null); // the Lottie instance
  const anims = useRef([]); // Web Animations (roam + lean), so hover can speed them up
  const [ready, setReady] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 }); // drag offset from the default corner
  const offsetRef = useRef(offset);
  offsetRef.current = offset;
  const [dragging, setDragging] = useState(false);
  const drag = useRef({ active: false, moved: false, sx: 0, sy: 0, start: { x: 0, y: 0 }, rect: null });

  // Restore the remembered position (kept inside the viewport).
  useEffect(() => {
    try {
      const saved = JSON.parse(sessionStorage.getItem(POS_KEY) || "null");
      const r = wrapRef.current?.getBoundingClientRect();
      if (saved && r && Number.isFinite(saved.x) && Number.isFinite(saved.y)) {
        setOffset({
          x: Math.min(Math.max(saved.x, -(window.innerWidth - r.width - 8)), 0),
          y: Math.min(Math.max(saved.y, -(window.innerHeight - r.height - 8)), 0),
        });
      }
    } catch {}
  }, []);

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
        autoplay: true,
        path: "/bizzbee-robot.json?v=5", // ?v busts the browser cache when the artwork changes
        rendererSettings: { preserveAspectRatio: "xMidYMid meet", progressiveLoad: true },
      });
      anim.addEventListener("DOMLoaded", () => {
        if (cancelled) return;
        anim.play();
        setReady(true);
      });
    });

    return () => {
      cancelled = true;
      anim?.destroy();
      animRef.current = null;
    };
  }, []);

  // Extra motion (drift / hop / turn, and a lean) via the Web Animations API.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const list = [];
    if (roamEl.current?.animate) {
      list.push(
        roamEl.current.animate(
          [
            { transform: "translate3d(0,0,0) rotateY(0deg) rotateZ(0deg)", offset: 0 },
            { transform: "translate3d(12px,-14px,24px) rotateY(18deg) rotateZ(3deg)", offset: 0.12 },
            { transform: "translate3d(16px,2px,0) rotateY(8deg) rotateZ(-2deg)", offset: 0.25 },
            { transform: "translate3d(2px,-22px,30px) rotateY(-6deg) rotateZ(0deg)", offset: 0.38 }, // hop
            { transform: "translate3d(-6px,3px,0) rotateY(-14deg) rotateZ(3deg)", offset: 0.46 }, // land
            { transform: "translate3d(-16px,-10px,18px) rotateY(-20deg) rotateZ(-3deg)", offset: 0.62 },
            { transform: "translate3d(-6px,4px,0) rotateY(10deg) rotateZ(2deg)", offset: 0.8 },
            { transform: "translate3d(0,0,0) rotateY(0deg) rotateZ(0deg)", offset: 1 },
          ],
          { duration: 8000, iterations: Infinity, easing: "ease-in-out" },
        ),
      );
    }
    if (lottieBox.current?.animate) {
      list.push(
        lottieBox.current.animate(
          [
            { transform: "translateY(0) rotate(-3deg)" },
            { transform: "translateY(-5px) rotate(3deg)" },
            { transform: "translateY(0) rotate(-3deg)" },
          ],
          { duration: 2400, iterations: Infinity, easing: "ease-in-out" },
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

  // While the chat is open the robot is static: all motion stops (it rests at
  // a neutral pose), it can't be dragged, and it doesn't tilt. Minimizing the
  // chat brings the motion and dragging back.
  useEffect(() => {
    if (expanded) {
      anims.current.forEach((a) => {
        a.pause();
        a.currentTime = 0;
      });
      animRef.current?.goToAndStop(40, true);
      setTilt({ x: 0, y: 0 });
      drag.current.active = false;
      setDragging(false);
    } else {
      anims.current.forEach((a) => a.play());
      animRef.current?.play();
    }
  }, [expanded, ready]);

  const onDown = (e) => {
    if (expanded) return; // not draggable while the chat is open
    if (e.button !== undefined && e.button !== 0) return;
    const rect = wrapRef.current?.getBoundingClientRect();
    drag.current = { active: true, moved: false, sx: e.clientX, sy: e.clientY, start: offsetRef.current, rect };
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const onUp = (e) => {
    const d = drag.current;
    d.active = false;
    setDragging(false);
    e.currentTarget.releasePointerCapture?.(e.pointerId);
    if (d.moved) {
      try {
        sessionStorage.setItem(POS_KEY, JSON.stringify(offsetRef.current));
      } catch {}
    }
  };

  const onClick = () => {
    // A drag also ends with a click event — ignore that one.
    if (drag.current.moved) {
      drag.current.moved = false;
      return;
    }
    onOpen();
  };

  const onMove = (e) => {
    const d = drag.current;
    if (d.active) {
      const dx = e.clientX - d.sx;
      const dy = e.clientY - d.sy;
      if (!d.moved && Math.hypot(dx, dy) < 6) return; // still a click
      d.moved = true;
      setDragging(true);
      setTilt({ x: 0, y: 0 });
      const r = d.rect;
      const cdx = Math.min(Math.max(dx, 4 - r.left), window.innerWidth - r.right - 4);
      const cdy = Math.min(Math.max(dy, 4 - r.top), window.innerHeight - r.bottom - 4);
      setOffset({ x: d.start.x + cdx, y: d.start.y + cdy });
      return;
    }
    if (expanded || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = stageRef.current?.getBoundingClientRect();
    if (!r) return;
    const px = (e.clientX - r.left) / r.width - 0.5; // -0.5 … 0.5
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -py * 22, y: px * 26 });
  };
  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={wrapRef}
      className="fixed bottom-2 right-2 z-[9990] pb-[env(safe-area-inset-bottom)] sm:right-3"
      style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
    >
      {showTip && (
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
        onClick={onClick}
        onPointerDown={onDown}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        onPointerMove={onMove}
        onPointerEnter={() => !expanded && setSpeed(2.2)}
        onPointerLeave={() => {
          resetTilt();
          setSpeed(1);
        }}
        onBlur={resetTilt}
        aria-label={expanded ? "Minimize BizzBee AI assistant" : "Open BizzBee AI assistant"}
        aria-expanded={expanded}
        title={expanded ? "Minimize BizzBee AI" : "Ask BizzBee AI (drag to move)"}
        aria-haspopup="dialog"
        className={`bizzbee-fab relative block h-[104px] w-[127px] touch-none sm:h-[128px] sm:w-[156px] select-none ${dragging ? "cursor-grabbing" : "cursor-pointer"} focus:outline-none focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#40A2D8] [perspective:520px]`}
      >
        <span
          ref={stageRef}
          className="bizzbee-fab-stage block h-full w-full"
          style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
        >
          {/* Just the robot (no background shape); it drifts around on its
              own, and a light halo keeps its black outline readable on dark
              pages. */}
          <span ref={roamEl} className="relative block h-full w-full [transform-style:preserve-3d]">
            {/* Static logo until the animation has loaded */}
            {!ready && (
              <Image
                src="/bizzbee-logo.png"
                alt=""
                width={160}
                height={160}
                sizes="96px"
                priority
                className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover"
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
