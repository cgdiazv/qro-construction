import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Residential Construction",
    tag: "Custom Builds",
    image: "/services/service-residential.jpg",
    description: "Custom homes, new builds, and high-end residential additions crafted with architectural precision and long-term comfort in mind.",
    features: ["Custom Home Design & Build", "Luxury Interior Framing", "Energy-Efficient Building"],
  },
  {
    title: "Commercial Build-Outs",
    tag: "Commercial",
    image: "/services/service-commercial.jpg",
    description: "Office renovations, hospitality interiors, and retail environments engineered for productivity, compliance, and aesthetic impact.",
    features: ["Tenant Improvements", "Structural & Interior Framing", "Glass & Modern Finishes"],
  },
  {
    title: "Project Management & Supervision",
    tag: "Supervision",
    image: "/services/service-project-management.jpg",
    description: "Coordinated scheduling, budgeting, subcontractor management, and strict quality assurance to keep every build phase on target.",
    features: ["Timeline & Milestone Tracking", "Budgeting & Cost Control", "Subcontractor Oversight"],
  },
  {
    title: "Site Preparation & Utilities",
    tag: "Civil & Excavation",
    image: "/services/service-utilities.jpg",
    description: "Civil site prep, grading, earthwork, and underground utility installation to lay a secure foundation for any project.",
    features: ["Trenching & Earthwork", "Underground Piping Layout", "Underslab Prep Work"],
  },
  {
    title: "Interior Renovations & Remodeling",
    tag: "Remodeling",
    image: "/services/service-renovation.jpg",
    description: "Complete space transformations, kitchen & bath upgrades, structural modifications, and architectural refinishing.",
    features: ["Space Reconfiguration", "Custom Cabinetry & Finishes", "High-End Upgrades"],
  },
  {
    title: "Mechanical & Infrastructure Systems",
    tag: "Mechanical",
    image: "/services/service-mechanical.jpg",
    description: "Commercial & residential mechanical retrofits, heavy piping installation, HVAC support, and plumbing infrastructure.",
    features: ["Commercial System Retrofits", "Piping & Distribution Networks", "Equipment Integration"],
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

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition hover:border-stone-300 hover:shadow-md"
            >
              <div className="relative h-56 w-full overflow-hidden bg-stone-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#0172be] shadow-sm backdrop-blur-sm">
                  {service.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div>
                  <h2 className="text-xl font-semibold text-stone-900 transition-colors group-hover:text-[#0172be]">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-stone-600">{service.description}</p>
                </div>

                <div className="mt-6 border-t border-stone-100 pt-6">
                  <ul className="space-y-2.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-xs font-medium text-stone-700">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#0172be]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-[#223594] p-8 text-white sm:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#02a9e4]">Get Started</p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Ready to start your next build?</h2>
              <p className="mt-3 max-w-2xl text-stone-300">
                Whether you need a small renovation or a large commercial transformation, our team is ready to help bring your vision to life.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-full shrink-0 items-center justify-center rounded-full bg-[#02a9e4] px-8 py-3.5 font-semibold text-white shadow-sm transition hover:bg-[#0172be] sm:w-auto"
            >
              Book a consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
