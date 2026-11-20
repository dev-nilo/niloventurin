import { Section } from "../layout/Section";
import { PROFILE } from "../../content/profile";
import { UI } from "../../content/ui";
import type { Locale } from "../../i18n/locales";

export const Experience = ({ locale }: { locale: Locale }) => (
  <Section id="experience" index={2} title={UI[locale].nav.experience}>
    <ol className="border-t border-line">
      {PROFILE[locale].experience.map((job) => (
        <li key={job.company} className="reveal grid gap-x-10 gap-y-3 border-b border-line py-8 md:grid-cols-[13rem_1fr]">
          <div className="hud-label space-y-1 text-muted">
            <p>{job.period}</p>
            <p>{job.location}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
              {job.role}{" "}
              <span className="font-serif font-normal text-muted italic">{UI[locale].at} {job.company}</span>
            </h3>
            <ul className="mt-3 list-[square] space-y-1.5 pl-5 leading-relaxed marker:text-cyan-500">
              {job.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            {job.secondary && (
              <ul className="mt-3 list-[square] space-y-1 pl-5 text-sm leading-relaxed text-muted">
                {job.secondary.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  </Section>
);
