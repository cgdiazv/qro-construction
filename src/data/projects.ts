export interface Project {
  title: string;
  category: string;
  description: string;
  year: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "Modern Family Residence",
    category: "Residential",
    description: "A full-home renovation blending open-concept living with durable finishes and custom built-ins.",
    year: "2025",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Boutique Retail Fit-Out",
    category: "Commercial",
    description: "A refined retail environment completed with efficient layouts, lighting, and tailored cabinetry.",
    year: "2024",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Luxury Outdoor Terrace",
    category: "Outdoor",
    description: "An elegant terrace renovation designed for entertaining, comfort, and low-maintenance living.",
    year: "2023",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Executive Office Expansion",
    category: "Commercial",
    description: "A flexible office upgrade with improved meeting areas, acoustics, and modern materials.",
    year: "2022",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
  },
];
