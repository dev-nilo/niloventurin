import { AppLink } from "../ui/AppLink";
import { PROFILE } from "../../content/profile";
import { UI } from "../../content/ui";
import { PAGES_TEXT } from "../../content/pages";
import type { Locale } from "../../i18n/locales";
import { localePath } from "../../site/site";

export const Footer = ({ locale }: { locale: Locale }) => {
  const { fullName, contact } = PROFILE[locale];
  const links = [
    { label: UI[locale].email, href: `mailto:${contact.email}` },
    { label: "GitHub", href: contact.github },
    { label: "LinkedIn", href: contact.linkedin },
    { label: PAGES_TEXT[locale].titles.privacy.title, href: localePath(locale, "privacy") },
  ];

  return (
    <footer className="border-t border-line">
      <div className="hud-label mx-auto flex max-w-6xl flex-col justify-between gap-3 px-4 py-6 text-muted sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {fullName}
        </p>
        <ul className="flex gap-5">
          {links.map((link) => (
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
};
