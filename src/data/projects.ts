export interface Project {
  title: string;
  category: string;
  description: string;
  year: string;
  images: string[];
}

export const projects: Project[] = [
  {
    title: "Commercial Water Heater Retrofit",
    category: "Mechanical",
    description: "Dual commercial water heater installation with new copper distribution, valves, and updated service routing.",
    year: "2026",
    images: ["/projects/project-01-01.webp", "/projects/project-01-02.webp"],
  },
  {
    title: "Interior Drainage and Slab Rough-In",
    category: "Plumbing",
    description: "Underslab plumbing rough-in with trenching, branch connections, and staged preparation before slab restoration.",
    year: "2026",
    images: [
      "/projects/project-02-01.webp",
      "/projects/project-02-02.webp",
      "/projects/project-02-03.webp",
    ],
  },
  {
    title: "Site Utility Layout and Underground",
    category: "Civil",
    description: "Ground-up utility layout including trenching and underground piping for a new large-scale construction site.",
    year: "2026",
    images: [
      "/projects/project-03-01.webp",
      "/projects/project-03-02.webp",
      "/projects/project-03-03.webp",
      "/projects/project-03-04.webp",
      "/projects/project-03-05.webp",
    ],
  },
];
