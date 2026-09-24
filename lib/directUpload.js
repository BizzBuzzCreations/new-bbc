"use client";

import { getUploadSignature } from "@/actions/uploadActions";

// Files above this size are sent to Cloudinary in chunks (Cloudinary's
// single-request upload limit is 100MB; chunking also makes big videos on
// slow connections far less likely to time out).
const CHUNK_SIZE = 20 * 1024 * 1024;

function cloudinaryError(json, fallback) {
  return json?.error?.message ? `Upload failed: ${json.error.message}` : fallback;
}

// Uploads a File straight from the browser to Cloudinary using a signature
// from our server, and returns { success, url, publicId, resourceType } or
// { success: false, message }. Used by every dashboard upload button.
export async function uploadFileDirect(file, folder) {
  if (!file) return { success: false, message: "No file provided." };

  const resourceType = file.type?.startsWith("video/") ? "video" : "image";

  let sig;
  try {
    sig = await getUploadSignature(folder);
  } catch (err) {
    console.error("Upload signature request failed:", err);
    return { success: false, message: "Upload failed. Please log in again and retry." };
  }
  if (!sig?.success) {
    return { success: false, message: sig?.message || "Upload failed." };
  }

  const endpoint = `https://api.cloudinary.com/v1_1/${sig.cloudName}/${resourceType}/upload`;

  const buildForm = (blob) => {
    const form = new FormData();
    form.append("file", blob);
    form.append("api_key", sig.apiKey);
    form.append("timestamp", String(sig.timestamp));
    form.append("signature", sig.signature);
    form.append("folder", sig.folder);
    return form;
  };

  try {
    let json;
    if (file.size <= CHUNK_SIZE) {
      const res = await fetch(endpoint, { method: "POST", body: buildForm(file) });
      json = await res.json().catch(() => null);
      if (!res.ok) {
        return { success: false, message: cloudinaryError(json, "Upload failed.") };
      }
    } else {
      const uploadId = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
      for (let start = 0; start < file.size; start += CHUNK_SIZE) {
        const end = Math.min(start + CHUNK_SIZE, file.size);
        const res = await fetch(endpoint, {
          method: "POST",
          headers: {
            "X-Unique-Upload-Id": uploadId,
            "Content-Range": `bytes ${start}-${end - 1}/${file.size}`,
          },
          body: buildForm(file.slice(start, end)),
        });
        json = await res.json().catch(() => null);
        if (!res.ok) {
          return { success: false, message: cloudinaryError(json, "Upload failed.") };
        }
      }
    }

    if (!json?.secure_url) {
      return { success: false, message: "Upload failed: no URL returned." };
    }
    return {
      success: true,
      url: json.secure_url,
      publicId: json.public_id,
      resourceType,
    };
  } catch (err) {
    console.error("Direct Cloudinary upload failed:", err);
    return { success: false, message: "Upload failed. Check your internet connection and try again." };
  }
}
