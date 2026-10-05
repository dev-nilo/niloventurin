import { NeoCard } from "../ui/NeoCard";
import { PROFILE } from "../../content/profile";

export const About = () => (
  <div className="max-w-6xl mx-auto px-6 h-full flex items-center py-4 md:py-24 override-scroll">
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center h-full">
      <div className="space-y-6 max-h-full overflow-y-auto no-scrollbar pr-2">
        <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 sticky top-0 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xs py-2 z-10">
          Behind the <span className="text-cyan-500">Code</span>
        </h2>
        <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {PROFILE.summary}
        </p>
        <div className="space-y-4">
          {PROFILE.skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 mb-1">
                {group.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base">
                {group.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4">
          {PROFILE.stats.map((stat) => (
            <div
              key={stat.label}
              className="p-4 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700"
            >
              <h3 className="text-3xl font-bold text-cyan-500">{stat.value}</h3>
              <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="pb-20 md:pb-0">
          <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 mb-1">
            Education
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base">
            {PROFILE.education}
          </p>
        </div>
      </div>

      <div className="relative justify-center hidden md:flex">
        <NeoCard className="rotate-3 max-w-sm w-full">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
            alt="Workspace"
            className="w-full h-auto rounded-md grayscale hover:grayscale-0 transition-all duration-500"
          />
        </NeoCard>
      </div>
    </div>
  </div>
);
