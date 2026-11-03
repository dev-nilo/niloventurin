# niloventurin
my official website portfolio

## Environments

| Environment | Branch | Deploy |
| --- | --- | --- |
| Production | `main` | https://niloventurin.vercel.app |
| Staging (homologação) | `homolog` | Vercel preview of the `homolog` branch |
| Preview | any other branch / PR | Vercel preview URL per commit |

Flow: `feat/*` → PR into `homolog` → validate on staging → PR `homolog` → `main`.

Non-production deploys render an environment badge and send `noindex, nofollow`
(see `src/environment/environment.ts`).

## For search engines and agents

| Path | What it is | Source |
| --- | --- | --- |
| `/sitemap.xml` | Every page, with hreflang alternates | `src/site/crawlers.ts` |
| `/robots.txt` | Allows all crawlers in production, none on staging/previews | `src/site/crawlers.ts` |
| `/llms.txt` | Site summary and when-to-use guidance ([llmstxt.org](https://llmstxt.org)) | `src/agents/llms.ts` |
| `/og.png` | Link preview image | `src/app/og.png/route.tsx` |

Every page also answers `Accept: text/markdown` with a Markdown version
(`Vary: Accept`), and unknown paths with a Markdown 404; see `src/proxy.ts`
and `src/agents/`. Pages embed schema.org JSON-LD (`src/agents/jsonLd.ts`).

```sh
curl -sS -i -H 'Accept: text/markdown' https://niloventurin.vercel.app/
```
