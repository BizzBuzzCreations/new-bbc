"use client";

import { useEffect, useState } from "react";
import {
  getPageContentForEditor,
  savePageContent,
} from "@/actions/pageContentActions";
import { LEGAL_PAGES, legalPageKey } from "@/lib/legalContentRegistry";
import RichTextEditor from "@/components/ui/richTextEditor";

const inputCls =
  "w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm outline-none focus:border-slate-400";
const labelCls = "mb-1.5 block text-xs font-semibold text-slate-500";

export default function DashboardLegal() {
  const [slug, setSlug] = useState(LEGAL_PAGES[0].slug);
  const [values, setValues] = useState(null);
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState(null);
  const pageKey = legalPageKey(slug);
  const page = LEGAL_PAGES.find((p) => p.slug === slug);

  useEffect(() => {
    let cancelled = false;
    const reset = setTimeout(() => {
      if (!cancelled) {
        setValues(null);
        setSavedAt(null);
      }
    }, 0);
    getPageContentForEditor(pageKey).then((data) => {
      if (!cancelled) setValues(data);
    });
    return () => {
      cancelled = true;
      clearTimeout(reset);
    };
  }, [pageKey]);

  const set = (key, value) => setValues((prev) => ({ ...prev, [key]: value }));

  const handleSave = async () => {
    setSaving(true);
    setSavedAt(null);
    const res = await savePageContent(pageKey, values);
    setSaving(false);
    if (res?.success) setSavedAt(Date.now());
    else alert(res?.message || "Failed to save changes.");
  };

  return (
    <section className="mt-6 rounded-2xl border border-slate-100 bg-white p-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-bold text-slate-900">Legal Pages</h2>
          <p className="text-xs text-slate-400">
            Edit the title, last-updated date, content and search-result text of
            the legal pages.
          </p>
        </div>
        <select
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          className="min-w-[200px] rounded-lg border border-slate-200 bg-white py-2.5 pl-4 pr-9 text-sm font-medium text-slate-700 outline-none focus:border-slate-400"
        >
          {LEGAL_PAGES.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.label}
            </option>
          ))}
        </select>
      </div>

      {!values ? (
        <p className="text-sm text-slate-400">Loading content...</p>
      ) : (
        <div className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelCls}>Page Title</label>
              <input
                className={inputCls}
                value={values.legalTitle ?? ""}
                onChange={(e) => set("legalTitle", e.target.value)}
              />
            </div>
            <div>
              <label className={labelCls}>Last Updated (shown as “Last Updated: …”)</label>
              <input
                className={inputCls}
                value={values.legalUpdated ?? ""}
                onChange={(e) => set("legalUpdated", e.target.value)}
              />
            </div>
            <div>
              <label className={labelCls}>Meta Title (Google / browser tab)</label>
              <input
                className={inputCls}
                value={values.metaTitle ?? ""}
                onChange={(e) => set("metaTitle", e.target.value)}
              />
            </div>
            <div>
              <label className={labelCls}>Meta Description</label>
              <input
                className={inputCls}
                value={values.metaDescription ?? ""}
                onChange={(e) => set("metaDescription", e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className={labelCls}>Page Content</label>
            <RichTextEditor
              key={pageKey}
              content={values.legalBody ?? ""}
              onChange={(html) => set("legalBody", html)}
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="rounded-[10px] bg-linear-to-br from-indigo-500 to-violet-500 px-5 py-2 text-sm font-semibold text-white disabled:opacity-60"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
            <a
              href={page.path}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-slate-500 underline"
            >
              View live page
            </a>
            {savedAt && <span className="text-sm text-emerald-600">Saved</span>}
          </div>
        </div>
      )}
    </section>
  );
}
