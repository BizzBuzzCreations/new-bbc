"use client";

// A <ul> whose cards get a soft light that follows the mouse. Each card marks
// itself with `data-spotlight` and draws the light from the --x / --y set
// here (see servicesV2.js). Mouse only — touch and pen never trigger it —
// and it only writes two CSS variables on the hovered card, so it costs no
// layout and nothing runs until the pointer moves over the list.
export default function SpotlightList({ className, children }) {
  const onPointerMove = (e) => {
    if (e.pointerType !== "mouse") return;
    const card = e.target.closest("[data-spotlight]");
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--x", `${Math.round(e.clientX - r.left)}px`);
    card.style.setProperty("--y", `${Math.round(e.clientY - r.top)}px`);
  };
  return (
    <ul className={className} onPointerMove={onPointerMove}>
      {children}
    </ul>
  );
}
