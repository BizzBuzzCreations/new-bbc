// A page section on one of the two surfaces (DESIGN_DIRECTION.md §2).
//   on "paper" (default) | "ink";  `rule`: a hairline on top;
//   `pad`: the standard vertical air (off for full-bleed sections);
//   `inner`: classes for the .wrap container (e.g. grid layouts).
export default function Section({ on = "paper", id, label, className = "", inner = "", rule = false, pad = true, children, ...rest }) {
  return (
    <section id={id} aria-labelledby={label} className={`on-${on} relative ${rule ? "border-t border-(--line)" : ""} ${className}`} {...rest}>
      <div className={`wrap ${pad ? "py-7 md:py-10" : ""} ${inner}`}>{children}</div>
    </section>
  );
}
