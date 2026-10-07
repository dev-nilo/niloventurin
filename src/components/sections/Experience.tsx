import { PROFILE } from "../../content/profile";

export const Experience = () => (
  <div className="max-w-3xl mx-auto min-h-full flex flex-col justify-center px-6 py-12 md:py-24 pb-28">
    <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-8">
      Experience
    </h2>

    <ol className="relative border-l-2 border-zinc-900 dark:border-zinc-100 ml-2 space-y-10">
      {PROFILE.experience.map((job, index) => (
        <li key={job.company} className="pl-8 relative">
          <span
            className={`absolute -left-2.25 top-1.5 h-4 w-4 rounded-full border-2 border-zinc-900 dark:border-zinc-100 ${
              index === 0 ? "bg-cyan-400" : "bg-white dark:bg-zinc-950"
            }`}
          />
          <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">
            {job.period} · {job.location}
          </p>
          <h3 className="text-lg md:text-xl font-bold text-zinc-900 dark:text-zinc-100">
            {job.role}{" "}
            <span className="font-medium text-zinc-500">at {job.company}</span>
          </h3>
          <ul className="mt-2 list-disc pl-5 space-y-1.5 text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {job.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          {job.secondary && (
            <ul className="mt-3 list-disc pl-5 space-y-1 text-xs md:text-sm text-zinc-500 leading-relaxed">
              {job.secondary.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  </div>
);
