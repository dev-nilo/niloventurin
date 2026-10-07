import { Download, MapPin } from "lucide-react";
import { Linkedin } from "../ui/BrandIcons";
import { NeoButton } from "../ui/NeoButton";
import { PROFILE } from "../../content/profile";

export const Hero = () => (
  <div className="flex flex-col items-center justify-center min-h-full max-w-4xl mx-auto px-4 text-center py-12 md:py-20">
    <div className="space-y-5 mb-8">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-zinc-900 dark:text-zinc-100 leading-none">
        {PROFILE.name}
      </h1>
      <p className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-700 dark:text-zinc-300">
        {PROFILE.role}
      </p>
      <p className="inline-flex items-center gap-1.5 text-sm text-zinc-500">
        <MapPin size={14} /> {PROFILE.location} · {PROFILE.workMode}
      </p>
    </div>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <NeoButton href={PROFILE.contact.linkedin}>
        <Linkedin size={18} /> LinkedIn
      </NeoButton>
      <NeoButton variant="outline" href={PROFILE.contact.cvPath} download>
        <Download size={18} /> Download CV
      </NeoButton>
    </div>

    <dl className="mt-10 flex justify-center gap-10 sm:gap-16">
      {PROFILE.stats.map((stat) => (
        <div key={stat.label} className="flex flex-col-reverse">
          <dt className="text-xs sm:text-sm text-zinc-500">{stat.label}</dt>
          <dd className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-zinc-100">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  </div>
);
