// BizzBee's mark: a yellow disc with a small robot face in ink (inline SVG — no
// image to load). Matches the site's one accent colour; replaces the old
// bright-blue robot picture.
export default function BizzBeeMark({ className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`relative inline-flex shrink-0 items-center justify-center rounded-full bg-buzz text-buzz-ink ${className}`}
    >
      <svg
        viewBox="0 0 32 32"
        className="h-[62%] w-[62%]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 4.6v3.4" />
        <circle cx="16" cy="3.8" r="1.1" fill="currentColor" stroke="none" />
        <path d="M8.2 10.2h15.6a3.6 3.6 0 0 1 3.6 3.6v6.4a3.6 3.6 0 0 1-3.6 3.6H17l-5.2 3.8v-3.8H8.2a3.6 3.6 0 0 1-3.6-3.6v-6.4a3.6 3.6 0 0 1 3.6-3.6z" />
        <circle cx="12.4" cy="17" r="1.35" fill="currentColor" stroke="none" />
        <circle cx="19.6" cy="17" r="1.35" fill="currentColor" stroke="none" />
      </svg>
    </span>
  );
}
