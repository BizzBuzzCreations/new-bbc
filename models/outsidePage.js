import mongoose from "mongoose";

// A dashboard-created Outside Location page. The page's content lives in
// the usual PageContent collection under pageKey "outside-location-<slug>";
// this just records that the page exists (its name and its URL slug under
// /en-uk/). Its structure is always the UK page's.
const outsidePageSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, index: true },
    pageKey: { type: String, required: true, unique: true },
    label: { type: String, required: true },
    // Public URL path visitors use (e.g. "/en-ca/my-page" or "/my-page").
    // Empty = the default "/en-uk/<slug>". The real route is always
    // /en-uk/<slug>; proxy.js rewrites this path onto it.
    path: { type: String, default: "" },
  },
  { timestamps: true },
);

export default mongoose.models.OutsidePage ||
  mongoose.model("OutsidePage", outsidePageSchema);
