import { Section, stagger } from "../layout/Section";
import { PROFILE } from "../../content/profile";
import { UI } from "../../content/ui";
import type { Locale } from "../../i18n/locales";

export const About = ({ locale }: { locale: Locale }) => {
  const profile = PROFILE[locale];
  return (
    <Section id="about" index={1} title={UI[locale].nav.about}>
      <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6 text-lg leading-relaxed md:text-xl">
          {profile.summary.map((paragraph) => (
            <p key={paragraph} className="reveal">
              {paragraph}
            </p>
          ))}
        </div>

        <dl className="self-start border-t border-line">
          {profile.skillGroups.map((group, index) => (
            <div key={group.title} style={stagger(index)} className="reveal grid grid-cols-[6.5rem_1fr] gap-4 border-b border-line py-3">
              <dt className="hud-label pt-1 text-muted">{group.title}</dt>
              <dd>{group.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </div>

      <p className="reveal mt-12 text-sm text-muted">
        {profile.education} · {profile.languages}
      </p>
    </Section>
  );
};
