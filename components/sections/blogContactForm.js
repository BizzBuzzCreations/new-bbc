"use client";
import { sendMail } from "@/actions/serverActions";
import React, { useState } from "react";
import { toast, Bounce } from "react-toastify";
import { markEnquired } from "@/lib/enquiryFlag";

export default function BlogContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    const response = await sendMail({
      name: formData?.name,
      email: formData?.email,
      subject: "New Enquiry from Blog",
      text: formData?.message,
      contact: "",
    });
    setSubmitting(false);

    if (response?.success) {
      markEnquired(); // the consultation popup won't ask again
      toast.success(response.message, {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
        transition: Bounce,
      });
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error(response.message, {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <div data-bizzbee-avoid className="rounded-3xl border border-white/10 bg-[#0b0e16]/85 p-6 backdrop-blur-sm">
      <h3 className="font-display mb-1 text-xl text-white">Have Questions?</h3>
      <p className="mb-5 text-sm text-white/65">
        Tell us a little about your project and we&apos;ll get back to you.
      </p>

      <form action={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="blog-contact-name"
            className="block text-xs font-semibold uppercase tracking-wide text-white/70 mb-1.5"
          >
            Name
          </label>
          <input
            onChange={handleChange}
            value={formData.name}
            name="name"
            type="text"
            id="blog-contact-name"
            className="w-full rounded-xl border border-white/20 bg-white/[0.04] px-3 py-2.5 text-base text-white placeholder:text-white/45 focus:border-[#40A2D8] focus:outline-none md:text-sm"
            placeholder="Your full name"
            required
          />
        </div>

        <div>
          <label
            htmlFor="blog-contact-email"
            className="block text-xs font-semibold uppercase tracking-wide text-white/70 mb-1.5"
          >
            Email
          </label>
          <input
            onChange={handleChange}
            value={formData.email}
            name="email"
            type="email"
            id="blog-contact-email"
            className="w-full rounded-xl border border-white/20 bg-white/[0.04] px-3 py-2.5 text-base text-white placeholder:text-white/45 focus:border-[#40A2D8] focus:outline-none md:text-sm"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label
            htmlFor="blog-contact-message"
            className="block text-xs font-semibold uppercase tracking-wide text-white/70 mb-1.5"
          >
            Message
          </label>
          <textarea
            onChange={handleChange}
            value={formData.message}
            name="message"
            id="blog-contact-message"
            rows="4"
            className="w-full rounded-xl border border-white/20 bg-white/[0.04] px-3 py-2.5 text-base text-white placeholder:text-white/45 focus:border-[#40A2D8] focus:outline-none md:text-sm"
            placeholder="Briefly tell us what you need..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-[#0B60B0] bg-[#0B60B0] px-5 py-3 text-sm font-medium text-white cursor-pointer transition-colors duration-200 hover:border-[#0d70cf] hover:bg-[#0d70cf] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#40A2D8] disabled:opacity-60"
        >
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current opacity-80" />
          {submitting ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
