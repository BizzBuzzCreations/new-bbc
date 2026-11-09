// The instrument label above a heading: "[01] SERVICES" in DM Mono.
// `no` optional; `tone` "light" (on ink) | "dark" (on paper).
export default function Kicker({ no, children, tone = "light", className = "", as: Tag = "p" }) {
  const color = tone === "dark" ? "text-stone" : "text-fog";
  return (
    <Tag className={`kicker flex items-center gap-2 ${color} ${className}`}>
      {no && <span className={tone === "dark" ? "text-ink" : "text-buzz"}>[{no}]</span>}
      <span>{children}</span>
    </Tag>
  );
}
