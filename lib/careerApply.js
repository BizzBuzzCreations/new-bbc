// Where the career page's "Apply Now" buttons (the hero and "Grow with us")
// send a visitor: to the role's own apply link — the one saved with the job
// post in the dashboard (`applyForm`) — and not to the contact page.
//   • every open role shares one apply link (or there is just one role)
//       → that link, straight away;
//   • several roles with different links → the list of open roles, where each
//     one has its own "Apply Now" (we cannot know which role the visitor wants);
//   • no open roles (or no list shown) → the contact page, so a CV can still
//     be sent.

// "forms.gle/abc" typed without https:// would be read as a path on this
// site: give it a scheme. Full URLs, mailto:, site paths and #anchors are kept.
export function normalizeApplyLink(value) {
  const v = String(value ?? "").trim();
  if (!v) return "";
  return /^(https?:|mailto:|tel:|\/|#)/i.test(v) ? v : `https://${v}`;
}

export function careerApplyHref(jobs, { listVisible = true } = {}) {
  const list = Array.isArray(jobs) ? jobs.filter(Boolean) : [];
  const links = list.map((j) => normalizeApplyLink(j.applyForm));
  const unique = [...new Set(links.filter(Boolean))];
  if (list.length > 0 && unique.length === 1 && links.every(Boolean)) return unique[0];
  if (list.length > 0 && listVisible) return "#open-positions";
  return "/contact";
}
