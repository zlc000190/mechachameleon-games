# Shared game CDN setup

Use one static game build for both domains, but keep each domain's page text,
title, screenshots, internal links, and sitemap independent.

## Recommended layout

- `mecchachameleon.art`: guide/map/art-oriented page shell
- `mechachameleon.games`: play-first page shell
- `cdn.mecchachameleon.art`: neutral static game host (target, see upgrade steps below)

The CDN build currently lives in the `mecha-chameleon-game` Cloudflare R2 bucket
and is served from the public R2 managed domain
`https://pub-8954980549be475f97e5a9810a809587.r2.dev/index.html`. The two public
sites iframe that URL until a custom domain is wired up.

The two public sites should iframe the CDN game URL, not each other.

## Current state (2026-08)

- R2 bucket `mecha-chameleon-game` is created in the same Cloudflare account as
  the community bucket (`mecchachameleon-art-community`).
- Public access is enabled on the managed `pub-*.r2.dev` domain.
- `index.html` and `assets/game.js` are uploaded to the bucket root and verified
  reachable from a browser.
- The `mecchachameleon-art` repo holds the source build script at
  `scripts/build-cdn-game.mjs` (`pnpm build:cdn-game` rebuilds the bundle).

## Optional: upgrade to the `cdn.mecchachameleon.art` custom domain

The default URL stays on the `pub-*.r2.dev` host until a `mecchachameleon.art`
zone admin (the account that owns the zone) wires up a custom domain. The
token currently stored in the project only has R2 + Workers scope, not
`mecchachameleon.art` DNS, so this last step is a manual one-time setup.

1. Sign in to Cloudflare as the `mecchachameleon.art` zone owner.
2. Open R2 -> `mecha-chameleon-game` -> Settings -> Custom Domains.
3. Add `cdn.mecchachameleon.art`. Cloudflare creates the CNAME automatically
   because the zone is already on Cloudflare.
4. Wait for the certificate to provision (a few minutes; first-time setup can
   take up to ~30 minutes).
5. Verify the URL opens the game directly:
   `https://cdn.mecchachameleon.art/index.html`.
6. Update `NEXT_PUBLIC_SHARED_GAME_URL` in Vercel (`.games`) and any other
   consumer to `https://cdn.mecchachameleon.art/index.html`. The default
   fallback in `src/shared/blocks/meccha/demo-frame.tsx` can also be flipped
   back to that URL.

### If you only have API token access (no zone admin)

Use the existing R2 managed domain. There is no SEO/canonicalization cost
because the page is marked `noindex` and the iframe URL is only ever consumed
by `.art` and `.games`, never indexed directly.

## Re-deploying the bundle

The CDN package is built in the `mecchachameleon-art` repo:

```bash
cd ../mecchachameleon-art
pnpm build:cdn-game
```

Then push the new `index.html` and any new `assets/*` files to the bucket:

```bash
npx wrangler r2 object put mecha-chameleon-game/index.html \
  --remote --file dist-cdn-game/index.html \
  --content-type "text/html; charset=utf-8"

npx wrangler r2 object put mecha-chameleon-game/assets/<name>.js \
  --remote --file dist-cdn-game/assets/<name>.js \
  --content-type "application/javascript; charset=utf-8"
```

If you add new asset paths, update both the `index.html` reference and the
upload list.

## Site configuration

Set the same game URL in both site environments:

```env
NEXT_PUBLIC_SHARED_GAME_URL="https://pub-8954980549be475f97e5a9810a809587.r2.dev/index.html"
```

For `mechachameleon.games`, the primary game iframe reads that variable in
`src/shared/blocks/meccha/demo-frame.tsx`.

## What stays on your server

Keep normal site pages on your server or app host:

- homepage
- SEO content pages
- guides
- sitemap
- ads
- analytics

Do not serve the heavy game bundles from the 6-core server unless you want that
server to carry the bandwidth.

## Optional Worker protection

Add a Cloudflare Worker later if you want the CDN game to load only when the
request comes from your own pages. Start without it, verify both sites work,
then add protection after launch.
