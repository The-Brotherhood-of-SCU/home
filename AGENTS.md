# AGENTS.md

Official homepage of The Brotherhood of SCU（四川大学开源社区）— an Astro 5 + Tailwind CSS v4 static site, Chinese-language (`lang="zh-CN"`), deployed to GitHub Pages at https://scubro.dev. `README.md` covers contributor workflows (writing posts, syncing members) in Chinese.

## Commands

```bash
npm run dev            # dev server at http://localhost:4321
npm run build          # build to dist/ — also validates blog frontmatter against the zod schema
npm run preview        # serve the built dist/
npm run sync-members   # regenerate src/data/members.json (requires local gh CLI logged in with read:org)
```

No lint or test scripts are configured. There is no tailwind.config — Tailwind v4 runs via `@tailwindcss/vite` with all theme tokens in CSS. Verify changes with `npm run build`.

## Architecture

- `src/data/site.ts` — single source of truth for homepage copy: `SITE` (name, url, contacts), `CONCEPTS`, projects, etc. Edit copy here, not in pages.
- `src/data/members.json` — **generated** by `scripts/sync-members.mjs` from the GitHub org GraphQL API. Never hand-edit; re-run the script instead.
- `src/content/blog/*.md` — posts; filename is the URL slug. Schema (zod) lives in `src/content.config.ts`: `title` required, `date` coerced, `author`/`tags` optional. Post images go in `public/images/posts/<slug>/` and are referenced with absolute paths like `/images/posts/<slug>/x.avif`.
- `src/pages/` — routes: `/`, `/blog`, `/blog/[slug]`, `/projects`, `/members`, `/about`, `/404`, `/rss.xml`.
- `src/layouts/Base.astro` — owns the `<head>`: title format `X · The Brotherhood of SCU`, canonical/OG built from `Astro.site`, RSS link. New pages should use this layout.
- `src/components/` — Header, Footer, ProjectCard, PostRow, SectionHeader.

## Design system

Defined in `src/styles/global.css` via Tailwind v4 `@theme` — the "paper & ink" palette (`paper`/`ink` neutrals + `crimson` #b5121b) and Noto Serif SC. Reuse these tokens and the existing component classes (`.wrap`, `.kicker`, `.hairline-card`, `.u-link`, `.prose-book` for long-form blog typography) instead of introducing ad-hoc colors or fonts.

## Gotchas

- `astro.config.mjs` `site` must stay in sync with `public/CNAME` (`scubro.dev`); canonical URLs, OG tags, sitemap, and RSS all derive from it. Don't delete `public/CNAME`.
- Every push to `main` auto-deploys via GitHub Actions (`.github/workflows/deploy.yml`, `withastro/action@v3`) — there is no staging environment.
- Code blocks use Shiki theme `github-light`.
