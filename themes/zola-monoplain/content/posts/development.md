+++
title = "Development"
description = "Set up a local development environment for Zola theme work"
date = 2026-07-12
authors = ["Simon Gattner"]
[taxonomies]
tags= ["Zola", "Theme", "Development", "Templates", "Debugging", "Accessibility", "Testing", "Release"]
+++

## Introduction

This post shows a practical workflow for developing Zola themes locally:

- check out the repository
- install Zola, Node.js and pnpm
- run development mode
- understand Tera templates and editor support
- debug templates and components
- run local accessibility checks
- run test and check
- commit and push changes
- release a new version

## Prerequisites

For this repository, the JavaScript toolchain expects:

- Cargo `>=1.95.0`
- Zola `>=0.22.1`
- Node.js `>=22.0.0 <25.0.0`
- pnpm `>=10.0.0 <12.0.0`

Repository scripts are defined in the workspace root `package.json`, while the theme package also has its own local `package.json` under `themes/zola-monoplain/`.

## 1. Check out the repository

```bash
git clone https://github.com/exiguus/zola-monoplain.git
cd zola-monoplain
```

## 2. Install Cargo, Zola, Node.js and pnpm

Preferred: install Zola with Cargo and pin the same version used by this repository's GitHub Actions.

At the moment, workflows use `zola@0.22.1`, so this is the recommended development version.

### Preferred (Cargo)

```bash
cargo install --locked --git https://github.com/getzola/zola zola@0.22.1
zola --version
```

You can verify the CI pin in `.github/workflows/prod.yml` and `.github/workflows/preview.yml`.

### Package manager alternatives

If you do not use Rust/Cargo locally, install Zola with your package manager only if it provides a recent enough version (>=0.22.1).

#### Linux (Debian/Ubuntu)

```bash
sudo apt update
sudo apt install zola
zola --version
```

#### macOS (Homebrew)

```bash
brew install zola
zola --version
```

#### Alternative

Use the official installation guide if your platform/package manager differs:

<https://www.getzola.org/documentation/getting-started/installation/>

### Node, pnpm

If Node.js is not installed yet, install Node.js 22 or newer and then enable pnpm via Corepack:

```bash
node --version
corepack enable
corepack prepare pnpm@11.9.0 --activate
pnpm --version
```

Install dependencies from the repository root:

```bash
pnpm install
```

## 3. Run development mode

You can run development in two ways.

### Option A: Workspace root (Turbo)

From the repository root:

```bash
pnpm dev
```

This runs the workspace `dev` pipeline.

### Option B: Theme package directly

From the theme directory:

```bash
cd themes/zola-monoplain
pnpm dev
```

This runs `zola serve` (after checking that Zola is installed).

## 4. Understand Tera templates and editor support

Zola templates use the Tera template engine.

Tera documentation:

<https://keats.github.io/tera/docs/>

If your IDE/editor does not provide a dedicated Tera extension, the Twig syntax extension works well for highlighting and basic template readability.

VS Code extension:

<https://marketplace.visualstudio.com/items?itemName=mblode.twig-language-2>

## 5. Understand the theme structure

The theme keeps content, templates, styles, and client-side scripts in separate folders so each part stays easy to find:

- `templates/` contains the page layout layer.
  - `base.html` provides the shared shell.
  - `index.html`, `page.html`, `post.html`, `posts.html`, and `taxonomy_*.html` define the main page types.
  - `components/` holds reusable partials such as the header, footer, and latest content blocks.
  - `macros/` and `shortcodes/` contain shared template helpers and shortcode implementations.
- `sass/` contains the SCSS source files.
  - `base.scss`, `layout.scss`, `typography.scss`, `markdown.scss`, and related partials are split by concern.
  - `_variables.scss` and `_extends.scss` hold shared values and reusable style rules.
  - `a11y.scss`, `image.scss`, `scheme.scss`, `spotify.scss`, and `youtube.scss` group feature-specific styles.
- `static/js/` contains JavaScript shipped directly to the browser.
  - `main.js` is the general site script.
  - `search.js` powers the search page behavior.

Keeping these areas separated makes template changes, styling changes, and script changes easier to debug independently.

## 6. Debug templates and components

### Enable debug mode in config

In `config.toml` set:

```toml
[extra]
debug = true
```

### Print page data in templates

When debugging a component, render the current page context in a template (for example in `templates/post.html`):

```tera
{% if config.extra.debug %}
<details>
  <summary>Debug: page</summary>
  <pre>\{\{ page | default(value="{}") | json_encode | safe \}\}</pre>
</details>
{% endif %}
```

The escaped braces are for Markdown examples. In your actual template file, use normal braces:

```tera
{{ page | default(value="{}") | json_encode | safe }}
```

This is useful to inspect available keys while developing components.

### Scope component debugging

For reusable components/macros, print only the value you need first, then expand:

```tera
{{ page.title | default(value="(no title)") }}
```

```tera
{{ page.extra | default(value="{}") | json_encode | safe }}
```

Keeping debug output focused makes it easier to identify missing keys and wrong assumptions.

## 7. Run local accessibility checks

To test accessibility against a local running dev server:

1. Start the local dev server (default: `http://127.0.0.1:1111`):

```bash
pnpm dev
```

1. In a second terminal from the repository root, run:

```bash
pnpm test:pa11y
```

This command runs pa11y checks against the local server and writes HTML reports to `pa11y-report/`.

## 8. Run test and check

From the repository root:

```bash
pnpm test
pnpm check
```

If you need to run the full build pipeline locally:

```bash
pnpm build
```

Useful script references:

- `pnpm dev` runs the workspace dev pipeline.
- `pnpm test` runs the workspace test pipeline.
- `pnpm check` runs `fta` validation and the workspace check pipeline.
- `pnpm format` reformats files with Dprint.
- `pnpm release:patch`, `pnpm release:minor`, and `pnpm release:major` create releases with conventional versioning.
- In `themes/zola-monoplain/`, `pnpm dev` runs `zola serve` after checking that Zola is installed.
- In `themes/zola-monoplain/`, `pnpm build` runs `zola build` after checking that Zola is installed.

## 9. Commit and push changes

From the repository root:

```bash
git add .
git commit -m "feat(posts): short summary of your change"
git push
```

Use a conventional commit message (`feat:`, `fix:`, `docs:`, and so on) so release tooling can derive changelog entries.

## 10. Release a new version

Choose the release type and run one of:

```bash
pnpm release:patch
pnpm release:minor
pnpm release:major
```

Then push commit and tags:

```bash
git push --follow-tags origin main
```

## Resources

- <https://www.getzola.org/documentation/>
- <https://www.getzola.org/documentation/templates/overview/>
- <https://keats.github.io/tera/docs/>
