import { Palette, Code, Zap } from "lucide-react";
import { ServiceItem, RepositoryItem } from "../types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive and accessible interfaces focused on usability and brand identity.",
    icon: Palette,
  },
  {
    title: "Front-End Development",
    description:
      "Building modern applications with React.js, Next.js, and TailwindCSS.",
    icon: Code,
  },
  {
    title: "Performance & SEO",
    description:
      "Fast, indexable websites optimized for Core Web Vitals and search engines.",
    icon: Zap,
  },
  {
    title: "Testing",
    description:
      "Testing is a very important part of the development process. It helps to ensure that the code is working as expected and that it is free of bugs.",
    icon: Zap,
  },
];

export const REPOS_DATA: RepositoryItem[] = [
  {
    name: "portfolio-nextjs",
    description:
      "My personal portfolio built with Next.js 14 and Tailwind CSS.",
    language: "TypeScript",
    stars: 12,
    url: "#",
  },
  {
    name: "ecommerce-dashboard",
    description: "A comprehensive admin dashboard for e-commerce management.",
    language: "React",
    stars: 8,
    url: "#",
  },
  {
    name: "task-manager-api",
    description: "REST API for task management built with Node.js and Express.",
    language: "Node.js",
    stars: 5,
    url: "#",
  },
];
