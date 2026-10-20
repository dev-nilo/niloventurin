import { Section } from "../layout/Section";
import { PROFILE } from "../../content/profile";

export const About = () => (
  <Section id="about" index={1} title="About">
    <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
      <div className="space-y-6 text-lg leading-relaxed md:text-xl">
        {PROFILE.summary.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <dl className="self-start border-t border-line">
        {PROFILE.skillGroups.map((group) => (
          <div key={group.title} className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-line py-3">
            <dt className="hud-label pt-1 text-muted">{group.title}</dt>
            <dd>{group.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </div>

    <p className="mt-12 text-sm text-muted">
      {PROFILE.education} · {PROFILE.languages}
    </p>
  </Section>
);
