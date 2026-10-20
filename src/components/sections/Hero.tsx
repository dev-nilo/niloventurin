import { Download } from "lucide-react";
import { Linkedin } from "../ui/BrandIcons";
import { Button } from "../ui/Button";
import { PROFILE } from "../../content/profile";

// The last word of the role is set in the serif italic as an accent.
const roleLead = PROFILE.role.slice(0, PROFILE.role.lastIndexOf(" ") + 1);
const roleAccent = PROFILE.role.slice(roleLead.length);

export const Hero = () => (
  <section id="home" className="scroll-mt-12">
    <div className="mx-auto max-w-6xl px-4 pt-16 pb-14 sm:px-6 md:pt-28 md:pb-20">
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
  </section>
);
