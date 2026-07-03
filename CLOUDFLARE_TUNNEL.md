# Public Storybook via Cloudflare Tunnel (for testing)

A quick, **free, no-account** way to give story.to.design (or anyone) a public URL
to your Storybook, without hosting it permanently. Uses Cloudflare "quick
tunnels" (`trycloudflare.com`).

> For testing/demo only. Quick tunnels are ephemeral: the URL changes every run,
> there is no uptime guarantee, and it dies when you stop the process. For a
> stable URL use Chromatic or GitHub Pages instead.

## Why this instead of story.to.design's local mode

story.to.design's "Private or local" method needs its **agent** app running and
logged in, only reliably works in the Figma **desktop** app, and hangs on
"connecting to agent" if anything is off. Exposing a **public URL** lets you use
the plugin's simpler **public URL** method with **no agent**, in browser or
desktop.

## Prerequisites

- Node.js + npm (for `npx`).
- Python 3 (preinstalled on macOS) to serve static files, or any static server.

## Steps

### 1. Build a static Storybook

```bash
npm run build-storybook
```

This outputs to `storybook-static/`.

> Serve the **static build**, not the dev server. The Vite/Storybook dev server
> rejects requests whose `Host` header is the tunnel domain with
> `403 Invalid host`. A plain static server has no host check.

### 2. Serve it locally on port 6006

```bash
python3 -m http.server 6006 --directory storybook-static
```

(Alternatives: `npx serve storybook-static -l 6006` or `npx http-server storybook-static -p 6006`.)

Verify it locally:

```bash
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:6006/index.json   # expect 200
```

### 3. Start a Cloudflare quick tunnel

In a second terminal:

```bash
npx -y cloudflared tunnel --url http://localhost:6006
```

It prints a public URL, e.g.:

```
Your quick Tunnel has been created! Visit it at:
https://<random-words>.trycloudflare.com
```

Verify the public URL serves the Storybook:

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://<random-words>.trycloudflare.com/index.json  # expect 200
```

### 4. Use it in story.to.design

1. Open Figma, run the **story.to.design** plugin.
2. Choose the **public URL** method (do NOT check "Private or local").
3. Paste the `https://<random-words>.trycloudflare.com` URL and Connect.
4. Select `Components/Button` and Import.

## Updating the components

The static server serves whatever is in `storybook-static/`, so after code
changes just rebuild and the same tunnel URL serves the new content:

```bash
npm run build-storybook
```

(No need to restart the tunnel or the static server.)

## Teardown

Stop both processes (Ctrl-C in each terminal), or find and kill them:

```bash
# static server on 6006
lsof -nP -iTCP:6006 -sTCP:LISTEN
kill <PID>

# cloudflared
pkill -f "cloudflared tunnel"
```

## Troubleshooting

| Symptom | Cause / Fix |
| --- | --- |
| Public URL returns `403 Invalid host` | You tunneled the **dev server**. Serve the static build (step 1–2) instead. |
| `python3 ... : Address already in use` / wrong content over tunnel | Something else owns port 6006 (often a leftover `storybook dev`). Find it with `lsof -nP -iTCP:6006 -sTCP:LISTEN` and `kill <PID>`, then restart. |
| Tunnel URL 404s | Static server not running, or `--directory` points at the wrong folder. |
| URL stopped working later | Quick tunnels are ephemeral — rerun step 3 to get a new URL. |
| Plugin still says "connecting to agent" | You picked "Private or local". Use the **public URL** method instead. |

## One-liner (optional)

Serve and tunnel together (static build must already exist):

```bash
python3 -m http.server 6006 --directory storybook-static & \
  npx -y cloudflared tunnel --url http://localhost:6006
```
