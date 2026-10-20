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
