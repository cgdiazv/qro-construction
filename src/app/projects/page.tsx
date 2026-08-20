"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

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

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-md flex flex-col justify-between"
            >
              <div>
                <button
                  type="button"
                  onClick={() => setLightboxImage({ src: project.images[0], alt: project.title })}
                  className="relative block h-64 sm:h-72 lg:h-80 w-full"
                  aria-label={`Open ${project.title} main image`}
                >
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    priority
                  />
                </button>

                <div className="p-6">
                  <div className="flex flex-col gap-2">
                    <span className="w-fit rounded-full bg-[#eaf6ff] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#0172be]">
                      {project.category}
                    </span>
                    <h2 className="text-xl font-semibold text-stone-900">{project.title}</h2>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-stone-600">{project.description}</p>
                </div>
              </div>

              {project.images.length > 0 ? (
                <div className="px-6 pb-6 pt-0">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3">Project Gallery ({project.images.length} Photos)</h3>
                  <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                    {project.images.map((imagePath, index) => (
                      <button
                        type="button"
                        key={imagePath}
                        onClick={() =>
                          setLightboxImage({
                            src: imagePath,
                            alt: `${project.title} detail ${index + 1}`,
                          })
                        }
                        className="group relative block h-16 sm:h-18 overflow-hidden rounded-xl border border-stone-200 shadow-sm"
                        aria-label={`Open ${project.title} image ${index + 1}`}
                      >
                        <Image
                          src={imagePath}
                          alt={`${project.title} detail ${index + 1}`}
                          fill
                          className="object-cover transition duration-200 group-hover:scale-105"
                          sizes="100px"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      {lightboxImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative inline-block"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              className="absolute right-3 top-3 z-10 rounded-full bg-black/70 px-3 py-1 text-sm font-semibold text-white transition hover:bg-black"
            >
              Close
            </button>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="h-auto w-auto max-h-[85vh] max-w-[92vw] rounded-2xl object-contain"
            />
          </div>
        </div>
      ) : null}
    </main>
  );
}
