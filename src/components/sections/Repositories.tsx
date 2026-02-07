import { Github, Layout, ExternalLink } from "lucide-react";
import { REPOS_DATA } from "../../data";
import { NeoCard } from "../ui/NeoCard";
import { NeoButtonOutline } from "../ui/NeoButton";

export const Repositories = () => (
  <div className="max-w-6xl mx-auto h-full flex flex-col justify-center px-6 py-12 md:py-24">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6">
      <div>
        <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-4">
          Featured <span className="text-cyan-500">Repositories</span>
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-lg">
          A selection of my recent open-source work. Check out my GitHub for
          more.
        </p>
      </div>
      <NeoButtonOutline href="https://github.com" className="shrink-0">
        <Github size={18} /> View GitHub Profile
      </NeoButtonOutline>
    </div>

    <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 no-scrollbar">
      {REPOS_DATA.map((repo, index) => (
        <NeoCard
          key={index}
          className="flex-shrink-0 w-[85vw] md:w-auto snap-center group cursor-pointer hover:border-cyan-500 transition-colors"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-md">
              <Layout size={20} className="text-zinc-900 dark:text-zinc-100" />
            </div>
            <ExternalLink
              size={18}
              className="text-zinc-400 group-hover:text-cyan-500 transition-colors"
            />
          </div>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            {repo.name}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2">
            {repo.description}
          </p>
          <div className="flex items-center gap-4 text-xs font-medium text-zinc-500">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
              {repo.language}
            </span>
            <span className="flex items-center gap-1">★ {repo.stars}</span>
          </div>
        </NeoCard>
      ))}
    </div>
  </div>
);
