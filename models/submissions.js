import mongoose from "mongoose";
const { Schema, model } = mongoose;

const submissionSchema = new Schema(
  {
    name: { type: String },
    email: { type: String },
    subject: { type: String },
    phone: { type: Number },
    message: { type: String },
    // true when the form's hidden honeypot field was filled (a bot): kept for
    // the dashboard's Submissions tab, never emailed. See sendMail.
    spam: { type: Boolean, default: false },
    // Optional PDF/Doc uploaded through the contact form. The file bytes
    // live in `data` (select: false, so list queries never load them) and
    // are served to the dashboard via /api/submissions/[id]/attachment.
    attachment: {
      name: { type: String },
      contentType: { type: String },
      size: { type: Number },
      data: { type: Buffer, select: false },
    },
  },
  { timestamps: true },
);

export default mongoose.models.Submission ||
  model("Submission", submissionSchema);
