import ProjectGallery from "@/components/ProjectGallery";

export default function ProjectsPage() {
  return (
    <main className="flex-1 bg-stone-50">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0172be]">Projects</p>
          <h1 className="mt-4 text-4xl font-semibold text-stone-950 sm:text-5xl">
            A collection of completed jobs that reflect our commitment to craftsmanship.
          </h1>
          <p className="mt-6 text-lg text-stone-600">
            Explore recent renovations and build-outs that demonstrate the care, detail, and reliability behind every project.
          </p>
        </div>

        <div className="mt-12">
          <ProjectGallery />
        </div>
      </section>
    </main>
  );
}
