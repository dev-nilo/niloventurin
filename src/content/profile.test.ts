import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { PROFILE } from "./profile";

const externalUrls = [
  PROFILE.contact.github,
  PROFILE.contact.linkedin,
  ...[...PROFILE.projects, ...PROFILE.otherProjects].flatMap((p) => [p.liveUrl, p.repoUrl]),
];

describe("PROFILE", () => {
  it("uses https for every external link", () => {
    for (const url of externalUrls) expect(url).toMatch(/^https:\/\//);
  });

  it("has a valid contact email", () => {
    expect(PROFILE.contact.email).toMatch(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
  });

  it("ships the CV the Download button points to", () => {
    expect(existsSync(join(process.cwd(), "public", PROFILE.contact.cvPath))).toBe(true);
  });

  it("has unique keys for rendered lists", () => {
    const unique = (xs: string[]) => new Set(xs).size === xs.length;
    expect(unique(PROFILE.experience.map((e) => e.company))).toBe(true);
    expect(unique([...PROFILE.projects, ...PROFILE.otherProjects].map((p) => p.name))).toBe(true);
    expect(unique(PROFILE.skillGroups.map((g) => g.title))).toBe(true);
  });
});
