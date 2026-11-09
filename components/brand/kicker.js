// The small mono label above a heading: "01 / 08  Services". `no` is the
// section's number (optional) and `of` how many there are on the page.
export default function Kicker({ no, of, children, className = "", as: Tag = "p" }) {
  return (
    <Tag className={`kicker flex items-center gap-3 text-(--mut) ${className}`}>
      {no && (
        <span className="text-(--fg)">
          {no}
          {of ? <span className="text-(--mut)"> / {of}</span> : null}
        </span>
      )}
      <span>{children}</span>
    </Tag>
  );
}
