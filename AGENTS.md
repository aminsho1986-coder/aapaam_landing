# AGENTS.md

## Project Overview
Next.js 13.4.7 (App Router) frontend for "aapaam" — a Persian (Farsi, RTL) carbon offset platform.
No backend or database of its own; all data comes from an external public API at `https://aapaam.net/api/`.

## Stack
- Next.js 13.4.7 with App Router (`app/` directory)
- React 18.2, SCSS/Sass for styling
- react-leaflet + maplibre for maps, Swiper for carousels
- `sharp` for image optimization (native module)

## Running in Base44
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
- Single `web` service on `node:18-slim`, bind-mounted at `/app`.
- `node_modules` and `.next` are anonymous volumes (not overwritten by host bind mount).
- Dev server: `npx next dev -H 0.0.0.0 -p 3000`.
- Env vars (`NEXT_PUBLIC_*`) are set in compose `environment:`; they point to the live `aapaam.net` API.

## Key Notes
- Pages fetch from the external API server-side (`hooks/ServerFetch.js`) and client-side (`hooks/Fetching.js`).
- All API calls are wrapped in try/catch, so pages render even when the API is unreachable (with empty data).
- No credentials or secrets are required — the API is public.
- `jsconfig.json` defines `@/*` path alias pointing to repo root.
- Data files: `data/names.json` (large, used for tree name lookups).
