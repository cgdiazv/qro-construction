"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Project, projects } from "@/data/projects";

interface ProjectGalleryProps {
  items?: Project[];
  featured?: boolean;
}

export default function ProjectGallery({ items = projects, featured = false }: ProjectGalleryProps) {
  const visibleProjects = featured ? items.slice(0, 3) : items;
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? visibleProjects.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === visibleProjects.length - 1 ? 0 : current + 1));
  };

  const project = visibleProjects[activeIndex];

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm p-6">
        <div className="flex flex-col gap-1 mb-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0172be]">
            {project.category}
          </span>
          <h3 className="text-xl font-semibold text-stone-900">{project.title}</h3>
          <p className="mt-2 text-sm leading-7 text-stone-600">{project.description}</p>
        </div>

        <div className="relative overflow-hidden rounded-lg">
          <img src={project.images[0]} alt={project.title} className="h-64 w-full object-cover sm:h-72" />

          <button
            type="button"
            onClick={goToPrevious}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-lg border border-stone-200 bg-white/90 p-2 text-stone-600 shadow-sm transition hover:border-[#0172be] hover:text-[#0172be]"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={goToNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg border border-stone-200 bg-white/90 p-2 text-stone-600 shadow-sm transition hover:border-[#0172be] hover:text-[#0172be]"
            aria-label="Next project"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {visibleProjects.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-1.5 transition-all rounded-sm ${
              index === activeIndex ? "w-6 bg-[#0172be]" : "w-3 bg-stone-300 hover:bg-stone-400"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
