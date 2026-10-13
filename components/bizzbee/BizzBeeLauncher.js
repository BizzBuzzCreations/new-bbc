"use client";

import { forwardRef, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

// Floating BizzBee button: the animated robot from /bizzbee-robot.json
// (a Lottie file) as a clickable, draggable button.
//
// - lottie-web is imported dynamically (after the page is idle), so it is not
//   part of the initial bundle; until it loads, the static logo shows.
// - 3D: the robot constantly "roams" in 3D (CSS keyframes: drifts, swings
//   toward/away from the viewer, turns left and right) over a floor shadow
//   that shrinks and grows with it, and also tilts toward the pointer.
// - Movable: drag it anywhere on screen (the position is remembered for the
//   tab). A plain click (no drag) opens / minimizes the chat.
// - Reduced motion: still frame, no roaming, no tilt.
const POS_KEY = "bizzbee-fab-pos";

const BizzBeeLauncher = forwardRef(function BizzBeeLauncher(
  { onOpen, expanded = false, showTip, onDismissTip },
  ref,
) {
  const wrapRef = useRef(null);
  const stageRef = useRef(null);
  const lottieBox = useRef(null);
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

  // Load the Lottie animation (lazy).
  useEffect(() => {
    let anim;
    let cancelled = false;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    import("lottie-web").then((mod) => {
      if (cancelled || !lottieBox.current) return;
      anim = mod.default.loadAnimation({
        container: lottieBox.current,
        renderer: "svg",
        loop: true,
        autoplay: !reduced,
        path: "/bizzbee-robot.json",
        rendererSettings: { preserveAspectRatio: "xMidYMid meet", progressiveLoad: true },
      });
      anim.addEventListener("DOMLoaded", () => {
        if (cancelled) return;
        if (reduced) anim.goToAndStop(10, true);
        setReady(true);
      });
    });

    return () => {
      cancelled = true;
      anim?.destroy();
    };
  }, []);

  const onDown = (e) => {
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
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
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
      className="fixed bottom-2 right-3 z-[9990]"
      style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
    >
      {showTip && (
        <div
          role="status"
          className="bizzbee-enter absolute right-full top-1/2 mr-2 w-[200px] -translate-y-1/2 rounded-2xl rounded-r-md bg-white px-3.5 py-2.5 pr-8 text-xs font-medium text-[#0a2540] shadow-xl"
        >
          Hi! 👋 Not sure which service you need? Ask BizzBee.
          <button
            type="button"
            onClick={onDismissTip}
            aria-label="Dismiss tip"
            className="absolute right-1.5 top-1.5 rounded-full p-1 text-[#0a2540]/60 hover:text-[#0a2540] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B60B0]"
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
        onPointerLeave={resetTilt}
        onBlur={resetTilt}
        aria-label={expanded ? "Minimize BizzBee AI assistant" : "Open BizzBee AI assistant"}
        aria-expanded={expanded}
        title="Ask BizzBee AI (drag to move)"
        aria-haspopup="dialog"
        className={`bizzbee-fab relative block h-[128px] w-[156px] touch-none select-none ${dragging ? "cursor-grabbing" : "cursor-pointer"} focus:outline-none focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#40A2D8] [perspective:520px]`}
      >
        {/* Floor shadow: shrinks and softens as the robot lifts toward you */}
        <span
          className="bizzbee-robot-shadow pointer-events-none absolute bottom-1 left-[38px] h-3 w-20 rounded-full bg-black/45 blur-[6px]"
          aria-hidden="true"
        />
        <span
          ref={stageRef}
          className="bizzbee-fab-stage block h-full w-full"
          style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
        >
          <span className="bizzbee-robot-roam block h-full w-full">
            {/* Static logo until the animation has loaded */}
            {!ready && (
              <Image
                src="/bizzbee-ai.png"
                alt=""
                width={160}
                height={160}
                sizes="96px"
                priority
                className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 object-contain"
                draggable={false}
              />
            )}
            <span
              ref={lottieBox}
              aria-hidden="true"
              className={`pointer-events-none block h-full w-full [filter:drop-shadow(0_8px_10px_rgba(0,0,0,0.45))] transition-opacity duration-300 ${ready ? "opacity-100" : "opacity-0"}`}
            />
          </span>
        </span>
      </button>
    </div>
  );
});

export default BizzBeeLauncher;
