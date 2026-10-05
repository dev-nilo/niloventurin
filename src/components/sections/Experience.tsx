import { EXPERIENCE_DATA } from "../../data";
import { NeoCard } from "../ui/NeoCard";

export const Experience = () => (
  <div className="max-w-6xl mx-auto min-h-full flex flex-col justify-center px-6 py-12 md:py-24">
    <div className="text-center mb-8 md:mb-12">
      <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-4">
        Work <span className="text-cyan-500">Experience</span>
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
        ERP development, full-stack web apps and access governance.
      </p>
    </div>

    <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 gap-6 md:gap-8 py-8 -mx-6 px-6 no-scrollbar">
      {EXPERIENCE_DATA.map((job) => (
        <NeoCard
          key={job.company}
          className="shrink-0 w-[85vw] md:w-auto snap-center flex flex-col gap-3 h-full"
        >
          <div className="flex flex-wrap justify-between items-baseline gap-x-4">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              {job.company}
            </h3>
            <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
              {job.period}
            </span>
          </div>
          <p className="text-sm text-zinc-500">
            {job.role} · {job.location}
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {job.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </NeoCard>
      ))}
    </div>
  </div>
);
