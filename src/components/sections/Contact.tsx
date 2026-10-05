import { Mail } from "lucide-react";
import { Linkedin } from "../ui/BrandIcons";
import { NeoButton, NeoButtonOutline } from "../ui/NeoButton";
import { PROFILE } from "../../content/profile";

export const Contact = () => (
  <div className="max-w-4xl mx-auto min-h-full flex flex-col justify-center items-center text-center px-6 py-8 md:py-0 relative">
    <div className="mb-10">
      <span className="inline-block py-1 px-3 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 text-sm font-bold mb-4">
        {PROFILE.workMode} · {PROFILE.location}
      </span>
      <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-6">
        Let's work <span className="text-cyan-500">together!</span>
      </h2>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto mb-10">
        {PROFILE.contact.pitch}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <NeoButton href={`mailto:${PROFILE.contact.email}`} className="text-lg px-8 py-4">
          <Mail className="mr-2" /> Send an Email
        </NeoButton>
        <NeoButtonOutline
          href={PROFILE.contact.linkedin}
          className="text-lg px-8 py-4"
        >
          <Linkedin className="mr-2" /> LinkedIn
        </NeoButtonOutline>
      </div>
    </div>

    <div className="relative md:absolute md:bottom-24 lg:bottom-10 left-0 w-full flex flex-col items-center gap-4 mt-12 md:mt-0">
      <p className="text-zinc-500 dark:text-zinc-500 text-sm">
        © {new Date().getFullYear()} {PROFILE.fullName}.
      </p>
    </div>
  </div>
);
