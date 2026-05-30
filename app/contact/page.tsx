"use client";
import { useState } from "react";
import { sendEmail } from "@/lib/resend";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const send = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await sendEmail({
      name: form.name,
      email: form.email,
      message: form.message,
    });

    setForm({
      name: "",
      email: "",
      message: "",
    });

    // show success message
    setSuccess(true);

    // hide after 5 seconds
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  return (
    <main className="pt-[12vh] px-6 py-12 max-w-4xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--dj-blue)] dark:text-[var(--dj-pink)] mt-4 mb-4">
          Let’s Work Together
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Want to give your brand a strong online presence? I’d love to help.
          Get in touch and I’ll get back to you within 24 hours.
        </p>
      </div>

      {/* Card */}
      <div
        className="
          rounded-2xl p-8 shadow-sm border
          bg-[var(--dj-background)]
          border-gray-200 dark:border-gray-800
        "
      >
        <form onSubmit={send} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1 text-[var(--dj-blue)]">
              Name
            </label>
            <input
              name="name"
              type="text"
              onChange={handleChange}
              value={form.name}
              className="
                w-full rounded-lg border px-4 py-3
                bg-white dark:bg-[#1a1a1a]
                border-gray-300 dark:border-gray-700
                focus:outline-none focus:ring-2 focus:ring-[var(--dj-pink)]
              "
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1 text-[var(--dj-blue)]">
              Email
            </label>
            <input
              name="email"
              value={form.email}
              type="email"
              className="
                w-full rounded-lg border px-4 py-3
                bg-white dark:bg-[#1a1a1a]
                border-gray-300 dark:border-gray-700
                focus:outline-none focus:ring-2 focus:ring-[var(--dj-pink)]
              "
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1 text-[var(--dj-blue)]">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              className="
                w-full rounded-lg border px-4 py-3
                bg-white dark:bg-[#1a1a1a]
                border-gray-300 dark:border-gray-700
                focus:outline-none focus:ring-2 focus:ring-[var(--dj-pink)]
              "
              placeholder="Tell me about your project..."
              onChange={handleChange}
            />
          </div>

          {/* CTA */}
          <button
            type="submit"
            className="
              w-full rounded-lg py-3 font-semibold
              bg-[var(--dj-pink)] text-white
              hover:opacity-90 transition
            "
          >
            Send Message
          </button>
        </form>
        {success && (
          <p className="text-center text-sm mt-4 text-[var(--dj-pink)] font-medium">
            Your enquiry has been sent ✨
          </p>
        )}
      </div>

      {/* Bottom note */}
      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
        I typically respond within 24 hours.
      </p>
    </main>
  );
}
