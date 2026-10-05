import { Layout, ExternalLink } from "lucide-react";
import { Github } from "../ui/BrandIcons";
import { PROFILE } from "../../content/profile";
import { NeoCard } from "../ui/NeoCard";
import { AppLink } from "../ui/AppLink";
import { NeoButton } from "../ui/NeoButton";

export const Projects = () => (
  <div className="max-w-6xl mx-auto h-full flex flex-col justify-center px-6 py-12 md:py-24">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6">
      <div>
        <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-4">
          Live <span className="text-cyan-500">Projects</span>
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-lg">
          Personal projects deployed on Vercel. Source code is on my GitHub.
        </p>
      </div>
      <NeoButton variant="outline" href={PROFILE.contact.github} className="shrink-0">
        <Github size={18} /> View GitHub Profile
      </NeoButton>
    </div>

    <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 gap-6 py-8 -mx-6 px-6 no-scrollbar">
      {PROFILE.projects.map((project) => (
        <NeoCard
          key={project.name}
          className="shrink-0 w-[85vw] md:w-auto snap-center group hover:border-cyan-500 transition-colors flex flex-col"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-md">
              <Layout size={20} className="text-zinc-900 dark:text-zinc-100" />
            </div>
            <div className="flex gap-3 text-zinc-400">
              <AppLink
                href={project.repoUrl}
                aria-label={`${project.name} source code`}
                className="hover:text-cyan-500 transition-colors"
              >
                <Github size={18} />
              </AppLink>
              <AppLink
                href={project.liveUrl}
                aria-label={`Open ${project.name}`}
                className="hover:text-cyan-500 transition-colors"
              >
                <ExternalLink size={18} />
              </AppLink>
            </div>
          </div>
          <AppLink
            href={project.liveUrl}
            className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2 hover:text-cyan-500 transition-colors"
          >
            {project.name}
          </AppLink>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
            {project.description}
          </p>
          <div className="mt-auto flex flex-wrap gap-2 text-xs font-medium text-zinc-500">
            {project.stack.map((tech) => (
              <span key={tech} className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                {tech}
              </span>
            ))}
          </div>
        </NeoCard>
      ))}
    </div>
  </div>
);
