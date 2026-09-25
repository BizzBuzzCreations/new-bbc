import { v2 as cloudinary } from "cloudinary";

// Trim stray whitespace / wrapping quotes (e.g. a "\r" from a .env edited
// on Windows) — any extra character makes every signature invalid.
const clean = (value) => (value || "").trim().replace(/^["']|["']$/g, "");

cloudinary.config({
  cloud_name: clean(process.env.CLOUDINARY_CLOUD_NAME),
  api_key: clean(process.env.CLOUDINARY_API_KEY),
  api_secret: clean(process.env.CLOUDINARY_API_SECRET),
});

export default cloudinary;
