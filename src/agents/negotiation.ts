// Picks HTML or Markdown from a request's Accept header, following the
// algorithm and test vectors at https://acceptmarkdown.com/guides/accept-parsing:
// each type we can produce is scored by the q of its most specific matching
// Accept entry (exact > type/* > */*), q=0 means "never", and the higher
// score wins. Equal scores keep HTML, the default, so browsers and clients
// that send */* or no Accept at all get the page they always got.

export type Representation = "html" | "markdown";

const MEDIA_TYPES: Record<Representation, string> = { html: "text/html", markdown: "text/markdown" };

interface AcceptEntry {
  type: string;
  subtype: string;
  q: number;
}

const parseAccept = (header: string): AcceptEntry[] =>
  header.split(",").flatMap((part) => {
    const [range, ...params] = part.split(";").map((s) => s.trim().toLowerCase());
    const [type, subtype] = range.split("/");
    if (!type || !subtype) return [];
    const qParam = params.find((p) => p.startsWith("q="));
    const q = qParam === undefined ? 1 : Number(qParam.slice(2));
    return Number.isFinite(q) ? [{ type, subtype, q: Math.min(Math.max(q, 0), 1) }] : [];
  });

// 2 = exact, 1 = type/*, 0 = */*, -1 = no match.
const specificity = (entry: AcceptEntry, mediaType: string) => {
  const [type, subtype] = mediaType.split("/");
  if (entry.type === type && entry.subtype === subtype) return 2;
  if (entry.type === type && entry.subtype === "*") return 1;
  if (entry.type === "*" && entry.subtype === "*") return 0;
  return -1;
};

const score = (entries: AcceptEntry[], mediaType: string) => {
  let best = { q: 0, specificity: -1 };
  for (const entry of entries) {
    const s = specificity(entry, mediaType);
    if (s > best.specificity) best = { q: entry.q, specificity: s };
  }
  return best;
};

// null means the client accepts neither (a 406 case); callers that can't
// offer anything else should fall back to their default.
export const negotiate = (accept: string | null | undefined): Representation | null => {
  if (!accept || !accept.trim()) return "html";
  const entries = parseAccept(accept);
  if (entries.length === 0) return "html";

  const html = score(entries, MEDIA_TYPES.html);
  const markdown = score(entries, MEDIA_TYPES.markdown);
  if (html.q === 0 && markdown.q === 0) return null;
  if (markdown.q > html.q) return "markdown";
  if (markdown.q === html.q && markdown.specificity > html.specificity) return "markdown";
  return "html";
};

export const wantsMarkdown = (accept: string | null | undefined) => negotiate(accept) === "markdown";
