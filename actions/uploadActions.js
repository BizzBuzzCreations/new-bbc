"use server";
import cloudinary from "@/lib/cloudinary";
import { getSession } from "@/actions/authActions";

// Folders the dashboard is allowed to upload into — a signature is only
// ever issued for one of these, so a leaked signature can't be used to
// write anywhere else in the Cloudinary account.
const ALLOWED_FOLDERS = [
  "bizzbuzz-page-content",
  "bizzbuzz-media-library",
  "bizzbuzz-blog",
];

// Signs a direct browser -> Cloudinary upload. Previously every file was
// sent through a Server Action as base64, which hit the 10MB Server Action
// body limit (base64 adds ~33%, so even a ~7.5MB photo or any real video
// failed before reaching Cloudinary). Now only this tiny signature request
// goes through our server; the file itself goes straight to Cloudinary.
// The API secret never leaves the server.
export async function getUploadSignature(folder) {
  const session = await getSession();
  if (!session) return { success: false, message: "Unauthorized." };

  if (!ALLOWED_FOLDERS.includes(folder)) {
    return { success: false, message: "Invalid upload folder." };
  }

  const { cloud_name, api_key, api_secret } = cloudinary.config();
  if (!cloud_name || !api_key || !api_secret) {
    console.error("Cloudinary env vars are missing on the server.");
    return {
      success: false,
      message: "Uploads are not configured on the server (Cloudinary keys missing).",
    };
  }

  const timestamp = Math.round(Date.now() / 1000);
  const signature = cloudinary.utils.api_sign_request(
    { folder, timestamp },
    api_secret,
  );

  return {
    success: true,
    cloudName: cloud_name,
    apiKey: api_key,
    folder,
    timestamp,
    signature,
  };
}
