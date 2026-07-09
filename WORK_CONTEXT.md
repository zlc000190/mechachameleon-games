# Worktree: fix/locale-slash-canonical

**Branch**: `fix/locale-slash-canonical`
**Base**: `main @ 0ec5f50`
**Worktree path**: `/Users/zhanglongchao/programPJ/mechachameleon-games-slashfix`
**Started**: 2026-07-09 (Thursday)
**Goal**: Fix GSC PageRank split on 14 non-default locale homepages (`/ja` vs `/ja/`, `/ru` vs `/ru/`, etc.)

## Problem

GSC shows `/ja` and `/ja/` ranking as TWO separate URLs for the same query
("めっちゃ カメレオン 無料 サイト 展示"):

| URL   | Impressions | Clicks | CTR    | Pos  |
|-------|-------------|--------|--------|------|
| /ja   | 36          | 8      | 22.2%  | 6.1  |
| /ja/  | 22          | 8      | 36.4%  | 4.8  |

Same content, same intent, but PageRank is split → neither ranks in top 3.

## Root cause (verified by curl)

`GET https://mechachameleon.games/ja/` returns **HTTP 308** (not 301) pointing
at `/ja`. The 308 comes from Next.js 16's built-in `trailingSlash: false`
default behaviour, NOT from `src/proxy.ts` (proxy.ts's redirect branch never
fires — Next.js handles it first with 308).

Google treats 308 slightly differently from 301 for PageRank consolidation,
and historically both URLs ended up in the index.

## Fix (4 files, all in this worktree)

### 1. `next.config.mjs` — add a regex redirect (301)

```js
async redirects() {
  const localePrefixes = ['en','vi','es','pt','zh','zh-TW','fr','de',
                          'nl','ja','ko','th','ru','ar'];
  const alt = localePrefixes.join('|');
  return [{
    source: `/(${alt})$`,      // exact match, no trailing slash
    destination: '/$1/',        // canonical with slash
    permanent: true,            // -> 301
    regex: true,
  }];
}
```

Verified regex against 16 paths — 14 locale paths MATCH, 6 false positives
(`/japan`, `/james`, `/japanese`, `/tools`, `/ja/tools`, `/vi/tools`,
`/`, `/ja/`, `/new-player`) all SKIP correctly.

### 2. `scripts/build-sitemap.mjs` — canonical trailing slash for locale homepages

`locUrl()` now emits:
- default locale root → `mechachameleon.games` (no slash, unchanged)
- non-default locale homepage → `mechachameleon.games/ja/` (with slash, NEW)
- deep page (any locale) → unchanged (no slash)

### 3. `src/app/layout.tsx` — hreflang `<link rel="alternate">` URLs

`altUrl()` now emits `/ja/` for non-default locale homepages, matching the
sitemap + redirects.

### 4. `public/sitemap.xml` — regenerated (29 KB, 30 entries)

All non-default locale homepages now point to the trailing-slash form.

## What we deliberately did NOT touch

- **Default locale root `/`**: user memory says it ranks stably; flipping
  its canonical risks a fresh split cycle.
- **Deep pages** (`/tools`, `/new-player`, `/connection-fix`, etc.):
  currently rank well without trailing slash; re-canonicalising them
  would create a new split.
- **www → non-www redirect**: not added in this fix; user should verify
  `www.mechachameleon.games` separately.
- **`src/proxy.ts` trailing-slash branch**: dead code (Next.js 16 handles
  trailing slash first), but removing it is a separate refactor — out of
  scope for this hotfix.

## Verification done locally

- `node --check` passes on all 3 modified JS/MJS files
- Regex redirect tested against 16 paths: 14 expected matches + 6 expected
  non-matches all behave correctly
- `pnpm scripts/build-sitemap.mjs` produces correct sitemap output

## Verification NOT done (caveats)

- **Full `pnpm build` was NOT run** in this worktree because the worktree's
  node_modules symlink tripped `pnpm install`'s lockfile check and
  temporarily corrupted the main repo's `node_modules`. The main repo's
  node_modules has been restored and lockfile reset.
- **301 not yet observed in production** — requires Dokploy build + deploy,
  which is the merge step the user has not yet approved.
- **www.mechachameleon.games → non-www** — not addressed here.

## Expected post-deploy outcome

- All non-default locale homepage PageRank collapses onto one URL per
  locale.
- `/ja/` should consolidate from pos 4.8 → top 3 once Google re-crawls
  and processes the 301.
- Same effect for `/ru/`, `/ar/`, `/pt/`, `/es/`, `/de/`, `/fr/`, `/ko/`,
  `/th/`, `/zh/`, `/zh-TW/`, `/nl/`, `/vi/` (12 more locale homepages).

## GSC post-deploy checklist

1. URL Inspection → query `/ja` → confirm 301 → `/ja/`
2. URL Inspection → query `/ja/` → confirm canonical, no redirect
3. Wait 4-6 weeks for GSC to merge the indexed URLs
4. Search "めっちゃ カメレオン 無料 サイト 展示" → confirm only `/ja/` shows
5. Repeat for one or two other locales to spot-check

## Commit

Not yet committed — waiting for user approval to ff-merge into main
(Dokploy auto-deploys on main push).
