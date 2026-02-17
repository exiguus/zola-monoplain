# A11y: Mono/Plain

> An accessible, monospace plain Zola Theme

<https://exiguus.github.io/zola-monoplain/>

## Philosophy

> Design should never say, 'Look at me.' It should always say, 'Look at this.' - David Craib

This Theme is designed to:

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

- not load external resources (like fonts, js, styles)
- focus on the content and the user experience

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
  - [x] CI tests
  - [x] pa11y report
- [ ] Templates
  - [ ] Home
    - [x] Latest Posts
    - [ ] Latest Projects
    - [ ] Latest Links
    - [x] Latest Gallery Images
  - [x] Post
    - [x] Table of Content support
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
      - [ ] via Disqus (Github Discussions)
  - [x] Gallery
    - [x] Post integration
  - [ ] Project
    - [ ] Github integration
  - [x] Taxonomy / Category and Tag support
  - [x] Search
  - [x] Sitemap
  - [x] 404 / not-found
  - [x] Feeds
    - [x] Atom
- [x] Language
  - [x] Translations <https://exiguus.github.io/zola-monoplain/posts/zola/>
  - [x] Dictionary <https://exiguus.github.io/zola-monoplain/posts/dictionary/>
- [x] Opengraph
  - [x] Link preview support
  - [x] Link preview image support
  - [x] Link custom preview image support
- [ ] Customization
  - [x] Customizable via template hooks
  - [ ] Customizable JavaScript
- [ ] Environment
  - [x] Javascript Support
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
2. Copy of the the theme's config.toml file and put in your projects root directory. Update it as required and don't forget to add `theme = 'zola-monoplain'` at the top of the file.
3. Copy this contents of the `content/` directory the root of your project and change the files as your necessary.

Also, see the themes documentation: <https://exiguus.github.io/zola-monoplain/posts/themes/>

## Customising the theme

- **To change the settings** copy `config.toml` in to your project and update as required (make sure you add the theme variable at the top of the file, see the getting started heading above).
- **To inject content in to templates** copy `templates/macros/hooks.html` and update as required.
- **To change the Syntax Highlighting** change `theme` in `config.toml` to one of the [available themes](https://github.com/getzola/zola/tree/master/sublime/themes).

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

## License

This theme is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [Zola](https://www.getzola.org/)
- [Tabler Icons](https://tabler.io/icons)
- [Zola Inky Theme](https://github.com/jimmyff/zola-inky)
