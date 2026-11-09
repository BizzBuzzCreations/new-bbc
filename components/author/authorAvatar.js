// An author's avatar in a brand-gradient ring: their team photo when they
// are on the team (`photo`, from lib/authorTeam.js), otherwise their
// initials — so every author gets the same quiet, consistent mark.
import Image from "next/image";

export default function AuthorAvatar({ name, photo = "", size = 96, className = "" }) {
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
      className={`relative inline-flex shrink-0 items-center justify-center rounded-full bg-linear-to-br from-buzz via-buzz to-[#c9a21a] ${className}`}
      style={{ width: size, height: size }}
    >
      <span className="absolute inset-[3px] overflow-hidden rounded-full bg-paper-2">
        {photo && <Image src={photo} alt="" fill sizes={`${size}px`} className="object-cover object-top" />}
      </span>
      {!photo && (
        <span className="font-display relative leading-none tracking-wide text-(--fg)" style={{ fontSize: Math.round(size * 0.36) }}>
          {initials}
        </span>
      )}
    </span>
  );
}
