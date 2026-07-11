# A11y: Mono/Plain

> An accessible, monospace plain Zola Theme

<https://exiguus.github.io/zola-monoplain/>

## Philosophy

> Design should never say, 'Look at me.' It should always say, 'Look at this.' - David Craib

This theme is designed to:

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

- Not load external resources (like fonts, JS, and styles)
- Focus on content and user experience

## Changelog

For latest changes please see the [changelog](CHANGELOG.md).

## Features

- [x] Responsive, adaptive design
  - [x] Responsive images
  - [x] Adaptive font
  - [x] Responsive Layout
  - [x] Native dark mode
  - [x] Default browser styles
  - [x] Clean HTML5 output
  - [x] Lean CSS
- [x] Accessible
  - [x] CI tests
  - [x] pa11y report
- [ ] Templates
  - [ ] Home
    - [x] Latest Posts
    - [ ] Latest Projects
    - [ ] Latest Links
    - [x] Latest Gallery Images
  - [x] Post
    - [x] Table of contents support
    - [x] Hero image support (`hero_img`)
    - [x] Hero image alt/caption support (`hero_alt`, `hero_copy`)
    - [x] Shortcodes <https://exiguus.github.io/zola-monoplain/posts/shortcodes/>
    - [x] Emojis <https://exiguus.github.io/zola-monoplain/posts/emojis/>
    - [x] Icons <https://exiguus.github.io/zola-monoplain/posts/icons/>
    - [ ] Markdown <https://exiguus.github.io/zola-monoplain/posts/markdown/>
      - [x] CommonMark
      - [x] GitHub Flavored Markdown
      - [ ] Graph support
      - [ ] Chart support
    - [ ] Comments
      - [x] via mailto
      - [ ] via Mastodon
      - [ ] via Disqus (GitHub Discussions)
  - [x] Gallery
    - [x] Post integration
  - [ ] Project
    - [ ] GitHub integration
  - [x] Taxonomy / Category and Tag support
  - [x] Search
  - [x] Sitemap
  - [x] 404 / not found
  - [x] Feeds
    - [x] Atom
    - [x] RSS
- [x] Language
  - [x] Template labels translated via `translations`
  - [x] Dictionary <https://exiguus.github.io/zola-monoplain/posts/dictionary/>
- [x] Open Graph
  - [x] Link preview support
  - [x] Link preview image support
  - [x] Link custom preview image support
- [ ] Customization
  - [x] Customizable via template hooks
  - [ ] Customizable JavaScript
- [ ] Environment
  - [x] JavaScript support
  - [x] React Support
  - [ ] TypeScript support
- [ ] CI/CD <https://exiguus.github.io/zola-monoplain/posts/ci/>
  - [ ] Linting and Formatting support
    - [ ] Eslint
    - [x] Prettier
    - [x] Commitlint
  - [x] Commit hooks

## Getting started

1. Add this theme to your `themes/` folder (copy or symlink).
2. Copy the theme config file from `themes/zola-monoplain/config.toml` into your project's root directory. Update it as required and don't forget to add `theme = 'zola-monoplain'` at the top of the file.
3. Copy the contents of `themes/zola-monoplain/content/` into the root of your project and adjust the files as needed.

Also, see the themes documentation: <https://exiguus.github.io/zola-monoplain/posts/themes/>

## Customising the theme

- **To change settings** copy `config.toml` into your project and update it as required (make sure you add the theme variable at the top of the file, see Getting started above).
- **To inject content into templates** copy `templates/macros/hooks.html` and update it as required.
- **To change syntax highlighting** change `theme` in `config.toml` to one of the [available themes](https://github.com/getzola/zola/tree/master/sublime/themes).

For a complete reference of `config.extra`, `page.extra`, and available macros/shortcodes, see:

- <https://exiguus.github.io/zola-monoplain/posts/themes/>
- <https://exiguus.github.io/zola-monoplain/posts/images/>
- <https://exiguus.github.io/zola-monoplain/posts/shortcodes/>

## Using the responsive image shortcode

Responsive images generate multiple sizes and use `srcset` so each device can load an appropriate image. You can use this feature in Markdown like this:

```md
{{ image(src="yourimage.jpg", alt="This is my image") }}
```

## Feature requests & support

I'm afraid I'm unable to accept feature requests or provide user support for this theme. The [Zola documentation](https://www.getzola.org/documentation/getting-started/overview/) and [Tera documentation](https://tera.netlify.app/docs/) are great resources and there is a [Zola discussion forum](https://zola.discourse.group/). If you've found a bug in the theme please open a GitHub issue.

## Contributing

Contributions are very welcome. If you are planning to add a feature, open an issue first so the approach can be discussed before implementation. Please keep the following in mind:

- Only widely generic features will be accepted, anything too specific should be kept to your own templates.
- Be careful about destroying indentation as Tera syntax doesn't seem to be widely supported by IDEs.
- Keep it lean. Adding bloat will likely result in your PR being rejected.
- Consider backward compatibility, ideally people blindly-upgrading won't see any unexpected changes to their sites.

## Tabler Icons

Use [Tabler Icons](https://tabler.io/icons) for icons.

The icon shortcode uses the following syntax:

```md
{{ icon(name="brand-github", size=24) }}
```

- Name is the name of the icon, e.g. `brand-github`. Names are the icon names from [Tabler Icons](https://tabler.io/icons).
- Size is the size of the icon in px, e.g. `24`. Default is `32`.

Tabler Icons are installed via npm and are available in the `node_modules` folder.

The `pnpm cp:icons` script copies the SVG icon sprite
to the `static` folder.

## License

This theme is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [Zola](https://www.getzola.org/)
- [Tabler Icons](https://tabler.io/icons)
- [Zola Inky Theme](https://github.com/jimmyff/zola-inky)
