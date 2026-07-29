import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Hero from "@/components/Hero";
import ProjectGallery from "@/components/ProjectGallery";

const highlights = [
  "Budget-conscious planning",
  "Detailed craftsmanship",
  "Clear communication from start to finish",
];

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0172be]">About</p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-950 sm:text-4xl">
            Reliable building partners for residential and commercial spaces.
          </h2>
          <p className="mt-6 text-lg leading-8 text-stone-600">
            We bring together planning, craftsmanship, and dependable project oversight to create spaces that look impressive and perform beautifully over time.
          </p>
          <ul className="mt-8 space-y-3 text-stone-700">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0172be]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-stone-900">Featured Projects</h3>
          <div className="mt-6">
            <ProjectGallery featured />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="rounded-3xl bg-[#223594] px-8 py-10 text-white sm:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#02a9e4]">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold">Bring your project goals to life.</h2>
              <p className="mt-3 max-w-2xl text-stone-300">
                Let’s discuss your timeline, budget, and design priorities so we can propose a clear path forward.
              </p>
            </div>
            <Link href="/contact" className="inline-flex w-full justify-center rounded-full bg-[#02a9e4] px-6 py-3 font-semibold text-white transition hover:bg-[#0172be] sm:w-auto">
              Start your consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
