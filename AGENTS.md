# Base44 Dev Environment

## Project
Next.js 13.4.7 (App Router) frontend for "آپام" — a Persian carbon-credit / net-zero platform.
Uses react-leaflet maps, swiper, sass. All data comes from a remote API at `https://aapaam.net/api/`.

## Running
- `docker compose -f docker-compose.base44.yml up -d`
- Node 18 runtime, source bind-mounted at `/app`, `next dev -H 0.0.0.0 -p 3000`.
- `npm install` runs at container startup (node_modules in an anonymous volume to avoid host conflicts).
- File-watch polling enabled (`CHOKIDAR_USEPOLLING=true`) for bind-mount hot reload.

## Environment
- `.env.development` (loaded automatically by `next dev`) provides `NEXT_PUBLIC_DOMAIN`, `NEXT_PUBLIC_BASE_URL`, `NEXT_PUBLIC_BASE_URL_IMAGES` — all public values pointing at the production API. No external secrets required.

## Notes
- The home page does server-side fetches from the remote API inside try/catch. If the API returns non-JSON (e.g. an HTML error page), a `SyntaxError: Unexpected token <` is logged but the page still renders (HTTP 200) with empty data — this is expected, not a crash.
- Next 13.4 does not support `allowedDevOrigins`; host binding to `0.0.0.0` handles preview access.

## Verify
- `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/` → 200
