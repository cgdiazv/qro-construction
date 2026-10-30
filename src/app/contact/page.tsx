import { Mail, MapPin, Phone } from "lucide-react";
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
          <div className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-stone-900">Get in touch</h2>
            <ul className="mt-6 space-y-4 text-stone-600">
              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-[#0172be]" />
                <a href="mailto:info@qroconstructionllc.com" className="text-[#0172be] hover:underline">
                  info@qroconstructionllc.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-[#0172be]" />
                <div className="flex flex-col">
                  <a href="tel:+12513862046" className="text-[#0172be] hover:underline">(251) 386-2046</a>
                  <a href="tel:+17133041073" className="text-[#0172be] hover:underline">(713) 304-1073</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#0172be]" />
                <span>Houston, TX</span>
              </li>
            </ul>
            <div className="mt-8 overflow-hidden rounded-lg border border-stone-200">
              <iframe
                title="QRO Construction Office"
                src="https://www.google.com/maps?q=Houston%2C%20TX&z=12&output=embed"
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
