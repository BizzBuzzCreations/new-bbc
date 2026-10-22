"use client";
import { sendMail } from "@/actions/serverActions";
import React, { useState } from "react";
import { toast, Bounce } from "react-toastify";
import { markEnquired } from "@/lib/enquiryFlag";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const response = await sendMail({
      name: formData?.name,
      email: formData?.email,
      subject: formData?.subject,
      text: formData?.message,
      contact: formData?.contact,
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
    <div>
      <h3 className="text-2xl font-semibold text-black mb-8">
        Send us a message
      </h3>
      <form className="space-y-6" action={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-black mb-2"
            >
              Full Name
            </label>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              id="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-lg"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-black mb-2"
            >
              Email Address
            </label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-lg"
              placeholder="your@email.com"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-lg font-medium text-black mb-2"
          >
            Subject
          </label>
          <input
            onChange={handleChange}
            name="subject"
            type="text"
            id="subject"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-lg"
            placeholder="What is this regarding?"
            required
          />
        </div>

        <div>
          <label
            htmlFor="contact"
            className="block text-lg font-medium text-black mb-2"
          >
            Contact Number
          </label>
          <input
            onChange={handleChange}
            name="contact"
            type="number"
            id="contact"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-lg"
            placeholder="Your contact number"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-lg font-medium text-black mb-2"
          >
            Message
          </label>
          <textarea
            onChange={handleChange}
            name="message"
            id="message"
            rows="5"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-lg"
            placeholder="Tell us about your project..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg px-8 py-4 bg-black text-white text-lg font-medium cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-95 hover:bg-black/95 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
