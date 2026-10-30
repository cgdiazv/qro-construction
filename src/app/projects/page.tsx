"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { projects } from "@/data/projects";

interface LightboxState {
  projectTitle: string;
  images: string[];
  currentIndex: number;
}

export default function ProjectsPage() {
  const [lightboxState, setLightboxState] = useState<LightboxState | null>(null);

  const handlePrevImage = useCallback(() => {
    setLightboxState((prev) =>
      prev
        ? {
            ...prev,
            currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
          }
        : null
    );
  }, []);

  const handleNextImage = useCallback(() => {
    setLightboxState((prev) =>
      prev
        ? {
            ...prev,
            currentIndex: (prev.currentIndex + 1) % prev.images.length,
          }
        : null
    );
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxState) return;
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
      if (e.key === "Escape") setLightboxState(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxState, handlePrevImage, handleNextImage]);

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
              className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-md flex flex-col justify-between"
            >
              <div>
                <button
                  type="button"
                  onClick={() =>
                    setLightboxState({
                      projectTitle: project.title,
                      images: project.images,
                      currentIndex: 0,
                    })
                  }
                  className="relative block h-64 sm:h-72 lg:h-80 w-full group cursor-pointer"
                  aria-label={`Open ${project.title} main image`}
                >
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-102"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-stone-900/80 text-white text-xs font-semibold px-3 py-1.5 rounded-lg backdrop-blur-sm">
                      View Gallery
                    </span>
                  </div>
                </button>

                <div className="p-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0172be]">
                      {project.category}
                    </span>
                    <h2 className="text-xl font-semibold text-stone-900">{project.title}</h2>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-stone-600">{project.description}</p>
                </div>
              </div>

              {project.images.length > 0 ? (
                <div className="px-6 pb-6 pt-0">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3">
                    Project Gallery ({project.images.length} Photos)
                  </h3>
                  <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                    {project.images.map((imagePath, index) => (
                      <button
                        type="button"
                        key={imagePath}
                        onClick={() =>
                          setLightboxState({
                            projectTitle: project.title,
                            images: project.images,
                            currentIndex: index,
                          })
                        }
                        className="group relative block h-16 sm:h-18 overflow-hidden rounded-lg border border-stone-200 shadow-sm cursor-pointer"
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

      {lightboxState ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-8 backdrop-blur-sm select-none"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox preview"
          onClick={() => setLightboxState(null)}
        >
          {/* Header Bar */}
          <div
            className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-stone-900/80 backdrop-blur-md px-4 py-1.5 rounded-lg border border-stone-700/50 text-xs sm:text-sm font-medium">
              <span className="text-stone-300 mr-2">{lightboxState.projectTitle}</span>
              <span className="text-[#02a9e4] font-semibold">
                {lightboxState.currentIndex + 1} / {lightboxState.images.length}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setLightboxState(null)}
              className="flex items-center gap-1.5 rounded-lg bg-stone-900/80 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-white border border-stone-700/50 transition hover:bg-stone-800 hover:border-stone-600 cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="h-4 w-4" />
              <span>Close</span>
            </button>
          </div>

          {/* Navigation & Image Display */}
          <div
            className="relative flex items-center justify-center max-w-6xl w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Button */}
            {lightboxState.images.length > 1 && (
              <button
                type="button"
                onClick={handlePrevImage}
                className="absolute left-2 sm:left-4 z-10 flex items-center justify-center rounded-lg bg-stone-900/80 p-3 text-white border border-stone-700/50 shadow-lg backdrop-blur-md transition hover:bg-stone-800 hover:scale-105 hover:border-stone-500 active:scale-95 cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
              </button>
            )}

            {/* Main Image */}
            <div className="relative max-h-[82vh] max-w-[90vw] overflow-hidden rounded-lg shadow-2xl flex items-center justify-center">
              <img
                src={lightboxState.images[lightboxState.currentIndex]}
                alt={`${lightboxState.projectTitle} image ${lightboxState.currentIndex + 1}`}
                className="max-h-[82vh] max-w-[90vw] object-contain rounded-lg"
              />
            </div>

            {/* Next Button */}
            {lightboxState.images.length > 1 && (
              <button
                type="button"
                onClick={handleNextImage}
                className="absolute right-2 sm:right-4 z-10 flex items-center justify-center rounded-lg bg-stone-900/80 p-3 text-white border border-stone-700/50 shadow-lg backdrop-blur-md transition hover:bg-stone-800 hover:scale-105 hover:border-stone-500 active:scale-95 cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
              </button>
            )}
          </div>
        </div>
      ) : null}
    </main>
  );
}
