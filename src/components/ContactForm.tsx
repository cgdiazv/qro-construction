'use client';

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      inquiryType: formData.get("inquiryType")?.toString() || "",
      message: formData.get("message")?.toString() || "",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Unable to send your message.");
      }

      setSubmitted(true);
      event.currentTarget.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to send your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-stone-700">
          <span className="mb-2 block">Name</span>
          <input
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-stone-300 px-4 py-3 outline-none transition focus:border-[#0172be]"
            placeholder="Your name"
          />
        </label>
        <label className="text-sm font-medium text-stone-700">
          <span className="mb-2 block">Email</span>
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-stone-300 px-4 py-3 outline-none transition focus:border-[#0172be]"
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label className="mt-4 block text-sm font-medium text-stone-700">
        <span className="mb-2 block">Inquiry type</span>
        <select
          name="inquiryType"
          required
          className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-[#0172be]"
        >
          <option value="">Select an option</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Residential Project">Residential Project</option>
          <option value="Commercial Project">Commercial Project</option>
          <option value="Renovation">Renovation</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <label className="mt-4 block text-sm font-medium text-stone-700">
        <span className="mb-2 block">Project details</span>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-stone-300 px-4 py-3 outline-none transition focus:border-[#0172be]"
          placeholder="Tell us about your renovation, build-out, or construction need."
        />
      </label>
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full rounded-lg bg-[#0172be] px-6 py-3 font-semibold text-white transition hover:bg-[#015f9a] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {isSubmitting ? "Sending..." : "Send inquiry"}
      </button>
      {submitted ? (
        <p className="mt-4 text-sm font-medium text-emerald-700">
          Thanks! We will reach out within one business day.
        </p>
      ) : null}
      {error ? (
        <p className="mt-4 text-sm font-medium text-red-700">{error}</p>
      ) : null}
    </form>
  );
}
