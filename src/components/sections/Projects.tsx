import { ExternalLink } from "lucide-react";
import { Github } from "../ui/BrandIcons";
import { AppLink } from "../ui/AppLink";
import { Button } from "../ui/Button";
import { Section, padIndex, stagger } from "../layout/Section";
import { PROFILE } from "../../content/profile";

const ICON_LINK = "p-2 text-muted hover:bg-ink hover:text-bg";

export const Projects = () => (
  <Section
    id="projects"
    index={3}
    title="Projects"
    intro="Side projects, all live."
    action={
      <Button variant="outline" href={PROFILE.contact.github} className="shrink-0">
        <Github size={14} /> GitHub
      </Button>
    }
  >
    <div className="grid border-t border-l border-line md:grid-cols-2">
      {PROFILE.projects.map((project, index) => (
        <article
          key={project.name}
          style={stagger(index % 2)}
          className="reveal flex flex-col border-r border-b border-line p-6 transition-colors hover:bg-ink/[0.03] md:p-8"
        >
          <div className="mb-10 flex items-start justify-between">
            <span className="hud-label text-muted">{padIndex(index + 1)}</span>
            <div className="-m-2 flex">
              <AppLink href={project.repoUrl} aria-label={`${project.name} source code`} className={ICON_LINK}>
                <Github size={16} />
              </AppLink>
              <AppLink href={project.liveUrl} aria-label={`Open ${project.name}`} className={ICON_LINK}>
                <ExternalLink size={16} />
              </AppLink>
            </div>
          </div>
          <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
            <AppLink href={project.liveUrl} className="hover:underline hover:underline-offset-4">
              {project.name}
            </AppLink>
          </h3>
          <p className="mt-3 text-muted">{project.description}</p>
          <ul className="hud-label mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-8 text-muted">
            {project.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>

    <p className="reveal mt-8 text-sm text-muted">
      Also:{" "}
      {PROFILE.otherProjects.map((project, index) => (
        <span key={project.name}>
          {index > 0 && ", "}
          <AppLink href={project.liveUrl} className="font-semibold text-ink underline underline-offset-2 hover:text-cyan-500">
            {project.name}
          </AppLink>{" "}
          ({project.description})
        </span>
      ))}
      .
    </p>
  </Section>
);
