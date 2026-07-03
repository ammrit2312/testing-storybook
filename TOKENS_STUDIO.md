# Tokens Studio (free) integration

This is the next phase after the Button is rendered in Figma. The goal is to make
Figma and code share the same design tokens.

The token source of truth is [`tokens/tokens.json`](tokens/tokens.json), written
in the DTCG format (`$type` / `$value`), which mirrors the CSS variables in
[`src/styles/tokens.css`](src/styles/tokens.css).

## What the free plan supports

The free **Starter** tier of Tokens Studio works on a free Figma plan and can:

- Import tokens from a JSON file (or sync a single file from Git).
- Apply tokens to design elements.
- Export **Token Sets** to Figma **variables/styles**.

Free-plan limits to keep in mind:

- Only **single-file** Git sync (no multi-file folders).
- Theme management (create/edit themes) needs a Pro licence.
- On a **free Figma** plan a variable collection can only have **1 mode**, and
  the file should live in a **Project** (not Drafts) for variable export.

## Steps

1. In Figma, open `Plugins` -> `Find more plugins`, search
   **"Tokens Studio for Figma"**, install and run it.
2. Load the tokens. Either:
   - **Manual import:** plugin menu -> `Tools` -> `Load from file/folder or
     preset` and select [`tokens/tokens.json`](tokens/tokens.json); or
   - **Git single-file sync:** plugin `Settings` -> `Add new sync provider` ->
     choose GitHub -> point the file path at `tokens/tokens.json` in this repo.
3. You will see the token sets: `color`, `space`, `radius`, `font`, and the
   semantic `button` group that references the primitives (e.g.
   `button.primary.bg` -> `{color.blue.500}`).
4. Export to Figma: click **Export** (Export to Figma) and choose **Variables**.
   Each token set becomes a Variable Collection of the same name. (Free licence
   exports from Token Sets, not Themes.)
5. Re-run the export whenever tokens change to keep Figma variables in sync.

## Token -> CSS variable mapping

The JSON names map 1:1 to the CSS custom properties used by the Button:

| Token (tokens.json)     | CSS variable (tokens.css)     |
| ----------------------- | ----------------------------- |
| `button.primary.bg`     | `--button-primary-bg`         |
| `button.primary.fg`     | `--button-primary-fg`         |
| `button.secondary.bg`   | `--button-secondary-bg`       |
| `button.secondary.fg`   | `--button-secondary-fg`       |
| `button.tertiary.fg`    | `--button-tertiary-fg`        |
| `button.radius`         | `--button-radius`             |
| `button.paddingX/Y`     | `--button-padding-x` / `-y`   |
| `color.blue.500`        | `--color-blue-500`            |
| `space.2`               | `--space-2`                   |
| `radius.md`             | `--radius-md`                 |

## Optional: generate CSS from tokens

To make `tokens.json` the true single source and generate `tokens.css`
automatically, add [Style Dictionary](https://styledictionary.com) later. It is
free and can output CSS custom properties from the same DTCG file, closing the
loop between design tokens and code.
