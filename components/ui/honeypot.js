// Hidden spam trap for the enquiry forms: an ordinary-looking text field that
// real visitors never see or reach (off-screen, skipped by Tab, hidden from
// screen readers, browser autofill off). Bots that fill in every field fill
// it; the server (sendMail in actions/serverActions.js) then drops the
// submission. Keep the input's name in step with `website_url` there.
export default function Honeypot({ value, onChange }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute left-0 top-0 -z-10 h-0 w-0 overflow-hidden opacity-0">
      <label>
        Leave this field empty
        <input type="text" name="website_url" value={value} onChange={onChange} tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}
