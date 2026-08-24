import mongoose from "mongoose";

// One document per page. `fields` is a flat key -> value map (text
// strings or image URLs) — which keys exist and what they mean is
// defined by lib/pageContentRegistry.js, not by this schema, so adding
// a new editable field to a page never requires a migration.
const pageContentSchema = new mongoose.Schema(
  {
    pageKey: { type: String, required: true, unique: true, index: true },
    fields: { type: mongoose.Schema.Types.Mixed, default: {} },
  },
  { timestamps: true },
);

export default mongoose.models.PageContent ||
  mongoose.model("PageContent", pageContentSchema);
