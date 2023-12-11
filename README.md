
# A11y: Mono/Plain

> An accessible, monospace plain Zola Theme

Based on Zola Inky Theme

## Philosophy

> Design should never say, 'Look at me.' It should always say, 'Look at this.' - David Craib

- Be fast
- Be accessible

---

- Respect your content
- Respect your users

---

- Respect user preferences
- Respect user privacy
- Respect user bandwidth
  
---

- Use native browser styles where possible
- Use semantic HTML
- Use accessible HTML

---

- Do not use external resources (fonts, scripts, stylesheets, etc)

## Changelog

For latest changes please see the [changelog](CHANGELOG.md).

## Features

- [x] Responsive, adoptive Design
  - [x] Responsive images
  - [x] Adoptive Font
  - [x] Responsive Layout
  - [x] Native Dark mode
  - [x] Default Browser Styles
  - [x] Clean HTML5
  - [x] Lean CSS
  - [x] Accessible
- [ ] Templates
  - [ ] Home
    - [ ] Latest Posts
    - [ ] Latest Projects
    - [ ] Latest Links
    - [ ] Latest Gallery Images
  - [ ] Post
  - [ ] Gallery
    - [ ] Post integration
  - [ ] Project
    - [ ] Github integration
  - [ ] Link
    - [ ] preview images
  - [ ] Icons
    - [ ] preview all tabler icons
    - [ ] search all tabler icons
- [ ] Markdown
  - [ ] Graph support
  - [ ] Chart support
- [ ] Translations
- [x] Search
- [ ] Comments
  - [ ] via Mastodon
  - [ ] via Disqus (Github Discussions)
- [x] Link preview support
- [x] Taxonomy support
- [ ] Table of Content support
- [x] Customizable via template hooks
- [ ] Customizable JavaScript
- [ ] Environment
  - [ ] TypeScript support
  - [ ] Linting and Formatting support
    - [ ] Eslint
    - [ ] Prettier
    - [ ] Commitlint
  - [ ] Commit hooks

## Getting started

1. Add this theme to your `themes/` folder (recommended method: git submodule).
2. Copy of the the theme's config.toml file and put in your projects root directory. Update it as required and don't forget to add `theme = 'a11y-mono-plain` at the top of the file.
3. Copy this contents of the `content/` directory the root of your project and change the files as your necessary.

## Customising the theme

- __To change the settings__ copy `config.toml` in to your project and update as required (make sure you add the theme variable at the top of the file, see the getting started heading above).
- __To inject content in to templates__ copy `templates/macros/hooks.html` and update as required.
- __To change the Syntax Highlighting__ change `highlight_theme` in `config.toml` to one of the [available themes](https://github.com/getzola/zola/tree/master/sublime/themes).
  
## Using the responsive image shortcode

Using the responsive images will make sure your images are generated at various sizes and served up to viewers at the size that best suits their device via the image srcset attribute. You can use this feature in your markdown like so:

```md
{{ image(src="yourimage.jpg", alt="This is my image") }}
```

## Feature requests & support

I'm afraid I'm unable to accept feature requests or provide user support for this theme. The [Zola documentation](https://www.getzola.org/documentation/getting-started/overview/) and [Tera documentation](https://tera.netlify.app/docs/) are great resources and there is a [Zola discussion forum](https://zola.discourse.group/). If you've found a bug in the themse please open a github issue.

## Contributing

Contributions are very welcome! If you are planning to add a feature to the theme then feel free to open an issue to discuss your approach and we will be able to say if it's it will likely be accepted. Please keep the following in mind:

- Only widely generic features will be accepted, anything too specific should be kept to your own templates.
- Be careful about destroying indentation as Tera syntax doesn't seem to be widely supported by IDEs.
- Keep it lean. Adding bloat will likely result in your PR being rejected.
- Consider backward compatibility, ideally people blindly-upgrading won't see any unexpected changes to their sites.

New theme maintainers are welcome but should provide pull-request or two first!

## Tabler Icons

Use [Tabler Icons](https://tabler.io/icons) for icons.

The icons macro use the following syntax:

```md
{{ icons("name", "size") }}
```

- Name is the name of the icon, e.g. `brand-github`. Names are the icon names from [Tabler Icons]([https://tabler.io/icons).
- Size is the size of the icon in px, e.g. `24`. Default is `32`.
  
Tabler icons are installed via npm and are available in the `node_modules` folder.

There is a copy script `pnpm cp:icons` folder that will copy the svg icon sprite
to the `static` folder.
