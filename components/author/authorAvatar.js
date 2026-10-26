// An author's avatar: their initials in the brand gradient, inside a
// gradient ring. (Authors have no photo field — the name and bio come from
// the blog editor — so every author gets the same quiet, consistent mark.)
export default function AuthorAvatar({ name, size = 96, className = "" }) {
  const initials = String(name || "?")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  return (
    <span
      aria-hidden="true"
      className={`relative inline-flex shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#0B60B0] via-[#7b74f7] to-[#b57cff] ${className}`}
      style={{ width: size, height: size }}
    >
      <span className="absolute inset-[3px] rounded-full bg-[#0b0e16]" />
      <span className="font-display relative leading-none tracking-wide text-white" style={{ fontSize: Math.round(size * 0.36) }}>
        {initials}
      </span>
    </span>
  );
}
