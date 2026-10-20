import { Mail } from "lucide-react";
import { Linkedin } from "../ui/BrandIcons";
import { Button } from "../ui/Button";
import { padIndex } from "../layout/Section";
import { PROFILE } from "../../content/profile";

// Closing call to action: same frame as the other sections, but the title
// takes the whole width instead of sharing it with an action.
export const Contact = () => (
  <section id="contact" className="scroll-mt-12 border-t border-line">
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-32">
      <p className="hud-label mb-6 text-muted">{padIndex(5)}/</p>
      <h2 className="text-6xl leading-[0.9] font-semibold tracking-tighter md:text-8xl lg:text-9xl">
        Contact<span className="text-cyan-500">.</span>
      </h2>
      <p className="mt-8 max-w-xl text-lg text-muted md:text-xl">{PROFILE.contact.pitch}</p>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Button href={`mailto:${PROFILE.contact.email}`}>
          <Mail size={14} /> {PROFILE.contact.email}
        </Button>
        <Button variant="outline" href={PROFILE.contact.linkedin}>
          <Linkedin size={14} /> LinkedIn
        </Button>
      </div>
    </div>
  </section>
);
