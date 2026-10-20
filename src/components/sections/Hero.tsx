import { Download } from "lucide-react";
import { Linkedin } from "../ui/BrandIcons";
import { Button } from "../ui/Button";
import { Marquee } from "../ui/Marquee";
import Grainient from "../ui/Grainient";
import { FULL_SCREEN } from "../layout/Section";
import { PROFILE } from "../../content/profile";

// The last word of the role is set in the serif italic as an accent.
const roleLead = PROFILE.role.slice(0, PROFILE.role.lastIndexOf(" ") + 1);
const roleAccent = PROFILE.role.slice(roleLead.length);

const STACK = [...new Set(PROFILE.skillGroups.flatMap((group) => group.items))];

// React Bits "satin" preset.
const SATIN = ["#0c0c0f", "#3f3f46", "#a1a1aa", "#fafafa"];

// The satin background is dark, so the hero always uses the dark palette
// (the .dark class swaps the color variables for this subtree only).
export const Hero = () => (
  <section id="home" className={`dark relative isolate overflow-hidden bg-bg text-ink scroll-mt-12 ${FULL_SCREEN}`}>
    <Grainient colors={SATIN} angle={40} bands={2} silk={1} className="absolute! inset-0 -z-10" />
    {/* Keeps text readable over the bright satin bands: an even veil on
        narrow screens, a fade from the text side on wider ones. */}
    <div className="pointer-events-none absolute inset-0 -z-10 bg-[#0c0c0f]/60 md:bg-transparent md:bg-[linear-gradient(90deg,rgb(12_12_15/0.85)_0%,rgb(12_12_15/0.6)_45%,transparent_85%)]" />
    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 py-14 sm:px-6 md:py-20">
      <p className="hud-label mb-8 flex items-center gap-2 text-muted">
        <span className="size-1.5 bg-cyan-500" />
        {PROFILE.location} · {PROFILE.workMode}
      </p>
      <h1 className="text-6xl leading-[0.9] font-semibold tracking-tighter sm:text-7xl md:text-8xl lg:text-[7rem]">
        {PROFILE.name}
      </h1>
      <p className="mt-6 text-2xl tracking-tight text-muted md:text-4xl">
        {roleLead}
        <span className="font-serif text-ink italic">{roleAccent}</span>
      </p>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Button href={PROFILE.contact.linkedin}>
          <Linkedin size={14} /> LinkedIn
        </Button>
        <Button variant="outline" href={PROFILE.contact.cvPath} download>
          <Download size={14} /> Download CV
        </Button>
      </div>

      <dl className="mt-14 grid grid-cols-2 border-t border-l border-line sm:w-fit">
        {PROFILE.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse gap-1 border-r border-b border-line px-5 py-4 sm:px-8">
            <dt className="hud-label text-muted">{stat.label}</dt>
            <dd className="text-3xl font-semibold tracking-tight">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </div>
    {/* Pinned to the bottom of the first screen. */}
    <Marquee items={STACK} />
  </section>
);
