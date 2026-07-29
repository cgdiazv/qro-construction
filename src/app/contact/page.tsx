import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="flex-1 bg-stone-50">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0172be]">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold text-stone-950 sm:text-5xl">
            Let’s talk about your next construction project.
          </h1>
          <p className="mt-6 text-lg text-stone-600">
            Share your goals and timeline, and we will follow up with the right guidance and next steps.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-stone-900">Get in touch</h2>
            <ul className="mt-6 space-y-4 text-stone-600">
              <li><span className="font-semibold text-stone-900">Email:</span> hello@qroconstruction.com</li>
              <li><span className="font-semibold text-stone-900">Phone:</span> +52 442 555 0148</li>
              <li><span className="font-semibold text-stone-900">Office:</span> Querétaro, Qro. México</li>
            </ul>
            <div className="mt-8 overflow-hidden rounded-2xl border border-stone-200">
              <iframe
                title="QRO Construction Office"
                src="https://www.google.com/maps?q=Quer%C3%A9taro%2C%20Mexico&z=12&output=embed"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
