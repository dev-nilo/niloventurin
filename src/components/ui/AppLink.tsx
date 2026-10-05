import { AnchorHTMLAttributes } from "react";

// Single place that decides how a link opens: external http(s) links open in
// a new tab without access to this window; everything else stays in place.
export const isExternal = (href: string) => /^https?:\/\//.test(href);

export const openExternal = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export const AppLink = ({
  href,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => (
  <a
    href={href}
    {...(isExternal(href) && { target: "_blank", rel: "noopener noreferrer" })}
    {...props}
  />
);
