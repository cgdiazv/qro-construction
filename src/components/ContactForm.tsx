'use client';

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-stone-700">
          <span className="mb-2 block">Name</span>
          <input
            type="text"
            required
            className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none transition focus:border-[#0172be]"
            placeholder="Your name"
          />
        </label>
        <label className="text-sm font-medium text-stone-700">
          <span className="mb-2 block">Email</span>
          <input
            type="email"
            required
            className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none transition focus:border-[#0172be]"
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label className="mt-4 block text-sm font-medium text-stone-700">
        <span className="mb-2 block">Project details</span>
        <textarea
          required
          rows={5}
          className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none transition focus:border-[#0172be]"
          placeholder="Tell us about your renovation, build-out, or construction need."
        />
      </label>
      <button
        type="submit"
        className="mt-6 rounded-full bg-[#0172be] px-6 py-3 font-semibold text-white transition hover:bg-[#015f9a]"
      >
        Send inquiry
      </button>
      {submitted ? (
        <p className="mt-4 text-sm font-medium text-emerald-700">
          Thanks! We will reach out within one business day.
        </p>
      ) : null}
    </form>
  );
}
