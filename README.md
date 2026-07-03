# figma-button-lib

A small React + TypeScript component library built with Vite. It ships a single
`Button` component with three variants and an optional icon, documented in
Storybook and designed to be rendered into Figma (free plan) via the
[story.to.design](https://story.to.design) plugin. Design tokens are structured
so that [Tokens Studio](https://tokens.studio) can own them later.

## Tech stack

- Vite (library build) + React 19 + TypeScript
- `lucide-react` for icons (referenced by name)
- Storybook 10 (`@storybook/react-vite`) for documentation
- CSS custom properties as design tokens (`src/styles/tokens.css`)

## Getting started

```bash
npm install
npm run dev          # demo app at http://localhost:5173
npm run storybook    # Storybook at http://localhost:6006
```

## Scripts

| Script                  | Description                                          |
| ----------------------- | ---------------------------------------------------- |
| `npm run dev`           | Run the demo app (`src/App.tsx`).                    |
| `npm run build`         | Build the library (ESM + CJS + `.d.ts`) into `dist`. |
| `npm run storybook`     | Start Storybook in dev mode.                         |
| `npm run build-storybook` | Build a static Storybook into `storybook-static`.  |
| `npm run chromatic`     | Publish Storybook to Chromatic (needs a token).      |
| `npm run lint`          | Run oxlint.                                          |

## The Button API

```tsx
import { Button } from 'figma-button-lib';
import 'figma-button-lib/styles.css';

<Button variant="primary" iconName="arrow-right" iconSize={18} iconPosition="right">
  Continue
</Button>;
```

| Prop           | Type                                       | Default     | Description                                   |
| -------------- | ------------------------------------------ | ----------- | --------------------------------------------- |
| `variant`      | `'primary' \| 'secondary' \| 'tertiary'`   | `'primary'` | Visual style.                                 |
| `children`     | `ReactNode`                                | –           | Button label.                                 |
| `iconName`     | `IconName` (kebab-case Lucide name)        | –           | Optional icon shown next to the label.        |
| `iconSize`     | `number`                                   | `16`        | Icon size in pixels.                          |
| `iconPosition` | `'left' \| 'right'`                         | `'left'`    | Which side the icon sits on.                  |

All native `<button>` attributes (`onClick`, `disabled`, `type`, ...) are
forwarded to the underlying element.

## Design tokens

Styling is driven entirely by CSS custom properties in
[`src/styles/tokens.css`](src/styles/tokens.css). The same values are mirrored in
[`tokens/tokens.json`](tokens/tokens.json) using the DTCG format so that Tokens
Studio can import and later own them.

## Rendering in Figma

See [CONNECTING_FIGMA.md](CONNECTING_FIGMA.md) for the exact steps used to render
this Button into Figma (free plan) and the plan for wiring up Tokens Studio.

To expose your Storybook publicly for the plugin without any account (via a free
Cloudflare quick tunnel), see [CLOUDFLARE_TUNNEL.md](CLOUDFLARE_TUNNEL.md).
