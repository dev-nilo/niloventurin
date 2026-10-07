import { PROFILE } from "../../content/profile";

export const About = () => (
  <div className="max-w-3xl mx-auto min-h-full flex flex-col justify-center px-6 py-12 md:py-24 pb-28">
    <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-6">
      About
    </h2>

    <div className="space-y-4 mb-10">
      {PROFILE.summary.map((paragraph) => (
        <p
          key={paragraph}
          className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed"
        >
          {paragraph}
        </p>
      ))}
    </div>

    <dl className="grid grid-cols-[6rem_1fr] gap-x-4 gap-y-3 text-sm md:text-base">
      {PROFILE.skillGroups.map((group) => (
        <div key={group.title} className="contents">
          <dt className="font-bold text-zinc-900 dark:text-zinc-100">
            {group.title}
          </dt>
          <dd className="text-zinc-600 dark:text-zinc-400">
            {group.items.join(", ")}
          </dd>
        </div>
      ))}
    </dl>

    <p className="mt-10 pt-6 border-t border-zinc-200 dark:border-zinc-800 text-sm text-zinc-500">
      {PROFILE.education} · {PROFILE.languages}
    </p>
  </div>
);
