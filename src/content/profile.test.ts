import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { LOCALES } from "../i18n/locales";
import { PROFILE, Profile } from "./profile";

const allProjects = (p: Profile) => [...p.projects, ...p.otherProjects];

describe.each(LOCALES)("PROFILE.%s", (locale) => {
  const profile = PROFILE[locale];

  it("uses https for every external link", () => {
    const urls = [
      profile.contact.github,
      profile.contact.linkedin,
      ...allProjects(profile).flatMap((p) => [p.liveUrl, p.repoUrl]),
    ];
    for (const url of urls) expect(url).toMatch(/^https:\/\//);
  });

  it("has a valid contact email", () => {
    expect(profile.contact.email).toMatch(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
  });

  it("ships the CV the Download button points to", () => {
    expect(existsSync(join(process.cwd(), "public", profile.contact.cvPath))).toBe(true);
  });

  it("has unique keys for rendered lists", () => {
    const unique = (xs: string[]) => new Set(xs).size === xs.length;
    expect(unique(profile.experience.map((e) => e.company))).toBe(true);
    expect(unique(allProjects(profile).map((p) => p.name))).toBe(true);
    expect(unique(profile.skillGroups.map((g) => g.title))).toBe(true);
  });
});

describe("PROFILE translations", () => {
  // A resume update has to land in both languages.
  it("list the same jobs, projects and skills in every language", () => {
    const shape = (p: Profile) => ({
      jobs: p.experience.map((e) => [e.company, e.highlights.length, e.secondary?.length ?? 0]),
      projects: allProjects(p).map((x) => [x.name, x.liveUrl, x.repoUrl]),
      skills: p.skillGroups.map((g) => g.items.length),
      stats: p.stats.map((s) => s.value),
    });
    expect(shape(PROFILE.pt)).toEqual(shape(PROFILE.en));
  });
});
