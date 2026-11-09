// Was the shared "beams" background behind groups of sections. In the
// rebuild every section sets its own surface (ink / paper / buzz), so this
// is now a plain wrapper — kept so the page templates that group sections
// with it don't have to change.
export default function BeamsBlock({ children }) {
  return <>{children}</>;
}
