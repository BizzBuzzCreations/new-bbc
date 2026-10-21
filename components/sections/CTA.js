"use client";
import { sendMail } from "@/actions/serverActions";
import { SendHorizontal, Phone, MessageCircle } from "lucide-react";
import React, { useState } from "react";
import { toast, Bounce } from "react-toastify";
import RichText from "@/components/ui/richText";
import CtaSideImage from "@/components/ui/ctaSideImage";
import { markEnquired } from "@/lib/enquiryFlag";

// `white` — used only on individual blog post pages
// (app/(main)/blog/[slug]/page.js): the section around the card stays white,
// but the CTA card itself is black (same card as every other page).
export default function CTA({ content, white = false } = {}) {
  const image = content?.ctaImage || "";
  const heading = content?.ctaHeading || "Get a Free Consultation";
  const paragraph =
    content?.ctaParagraph ||
    "Ready to grow your business with trusted digital marketing services in UP? Contact BizzBuzz Creations today and let’s build your success story together.";

  const emailLabel = content?.ctaEmailLabel || "Email Address";
  const emailPlaceholder = content?.ctaEmailPlaceholder || "your@email.com";

  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const response = await sendMail({
      name: "not given",
      email: formData?.email,
      subject: "Request for consultancy",
      text: "Want to start a project",
      contact: null,
    });

    if (response?.success) {
      markEnquired(); // the consultation popup won't ask again
      toast.success(response.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.error(response.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  return (
    <>
      <div className={`${white ? "bg-white" : "bg-black"} px-5 py-10 scroll-mt-34`} id="CTA">
        <div
          className={`md:flex md:items-stretch rounded-3xl border-2 md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto container border-[#0B60B0] ${
            white ? "shadow-lg shadow-black/20" : "shadow-lg shadow-black"
          }`}
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
          }}
        >
          <div className="flex-1 min-w-0 py-8 md:py-10 px-6 md:px-10 z-10 text-white">
            <h2 className="md:text-3xl text-2xl font-bold mb-5">
              {heading}
            </h2>
            <RichText as="p" text={paragraph} className="max-w-3xl" />
            <form action={handleSubmit}>
              {/* Full width on mobile instead of a fixed 250px box (the
                  label was also text-black on this section's black
                  background — invisible — fixed to text-white). */}
              <div className="max-w-full sm:max-w-[300px] relative">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium mb-2 text-white"
                >
                  {emailLabel}
                </label>
                <input
                  onChange={handleChange}
                  name="email"
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 text-black border border-gray-300 rounded-full focus:outline-none focus:border-black text-lg"
                  placeholder={emailPlaceholder}
                  required
                />
                <button
                  type="submit"
                  aria-label="Send message"
                  className="group absolute top-10 right-2 flex items-center justify-center cursor-pointer"
                >
                  <span
                    className="bg-black p-3 rounded-full text-white
                     transition-all duration-300
                     focus:outline-none focus:ring-2 focus:ring-black/50"
                  >
                    <SendHorizontal className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
              </div>
            </form>

            {/* Or skip the form: call or WhatsApp straight away. */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="w-full text-sm text-white/80 sm:w-auto">or talk to us now:</span>
              <a
                href="tel:+918115585285"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-white hover:bg-white hover:text-black"
              >
                <Phone size={16} />
                Call +91 81155 85285
              </a>
              <a
                href="https://wa.me/918115585285"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/70 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#25D366] hover:text-black"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>
            <CtaSideImage src={image} />
        </div>
      </div>

      {/* Divider between the CTA and whatever comes next (the footer, on
          every page that ends with this CTA) so the two don't just blend
          into one section. */}
      <div className={`w-full ${white ? "bg-white" : "bg-black"} pt-8 md:pt-10`}>
        <div className={`w-full border-t ${white ? "border-black/10" : "border-white"}`} />
      </div>
    </>
  );
}
