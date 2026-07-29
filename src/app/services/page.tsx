import Link from "next/link";

const services = [
  {
    title: "Residential Construction",
    description: "Custom homes, remodels, and interior upgrades tailored to family life and long-term comfort.",
  },
  {
    title: "Commercial Build-Outs",
    description: "Office renovations, hospitality spaces, and retail environments designed for efficiency and impact.",
  },
  {
    title: "Project Management",
    description: "Coordinated scheduling, budgeting, and site supervision to keep every milestone on track.",
  },
];

export default function ServicesPage() {
  return (
    <main className="flex-1 bg-stone-50">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0172be]">Services</p>
          <h1 className="mt-4 text-4xl font-semibold text-stone-950 sm:text-5xl">
            End-to-end construction support for projects of every scale.
          </h1>
          <p className="mt-6 text-lg text-stone-600">
            We provide strategic planning and hands-on execution so your vision is delivered with quality, clarity, and confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-stone-900">{service.title}</h2>
              <p className="mt-4 text-sm leading-7 text-stone-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-[#223594] p-8 text-white">
          <h2 className="text-2xl font-semibold">Ready to start your next build?</h2>
          <p className="mt-3 max-w-2xl text-stone-300">
            Whether you need a small renovation or a large commercial transformation, our team is ready to help.
          </p>
          <Link href="/contact" className="mt-6 inline-flex w-full justify-center rounded-full bg-[#02a9e4] px-6 py-3 font-semibold text-white transition hover:bg-[#0172be] sm:w-auto">
            Book a consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
