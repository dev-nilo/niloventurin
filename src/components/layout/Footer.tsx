import { AppLink } from "../ui/AppLink";
import { PROFILE } from "../../content/profile";

const LINKS = [
  { label: "Email", href: `mailto:${PROFILE.contact.email}` },
  { label: "GitHub", href: PROFILE.contact.github },
  { label: "LinkedIn", href: PROFILE.contact.linkedin },
];

export const Footer = () => (
  <footer className="border-t border-line">
    <div className="hud-label mx-auto flex max-w-6xl flex-col justify-between gap-3 px-4 py-6 text-muted sm:flex-row sm:px-6">
      <p>
        © {new Date().getFullYear()} {PROFILE.fullName}
      </p>
      <ul className="flex gap-5">
        {LINKS.map((link) => (
          <li key={link.label}>
            <AppLink href={link.href} className="hover:text-ink">
              {link.label}
            </AppLink>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);
