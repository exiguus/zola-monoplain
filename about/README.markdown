<em>
      A11y: Mono/Plain
    </em>

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

For latest changes please see the [changelog](changelog).
For latest Zola config changes please see the [Zola config changelog](changelog-zola-config).

## Features

- [x] Responsive, adaptive design
  - [x] Responsive images
  - [x] Adaptive font
  - [x] Responsive Layout
  - [x] Native dark mode
  - [x] Default browser styles
  - [x] Clean HTML5 output
  - [x] Lean CSS
- [x] Accessibility
  - [x] WCAG 2.2 AA compliant
  - [x] ARIA support
  - [x] Keyboard navigation support
  - [x] pa11y report
- [x] IndyWeb
  - [x] Web Sign In
  - [x] Microformats
    - [x] h-card
    - [x] h-entry
- [ ] Comments
  - [ ] via Mastodon
  - [ ] via Disqus (GitHub Discussions)
- [x] Templates
  - [x] Home
    - [x] Latest Posts
    - [x] Latest Gallery Images
  - [x] Post
    - [x] Table of contents support
    - [x] Hero image support (`hero-img`)
    - [x] Hero image alt/caption support (`hero-alt`, `hero-copy`)
    - [x] Draft support (`draft`)
    - [x] Shortcodes <https://exiguus.github.io/zola-monoplain/posts/shortcodes/>
    - [x] Emojis <https://exiguus.github.io/zola-monoplain/posts/emojis/>
    - [x] Icons <https://exiguus.github.io/zola-monoplain/posts/icons/>
    - [x] Markdown <https://exiguus.github.io/zola-monoplain/posts/markdown/>
      - [x] CommonMark
      - [x] GitHub Flavored Markdown
    - [x] Comments
      - [x] via mailto
  - [x] Gallery
    - [x] Post integration
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
- [x] Customization
  - [x] Customizable via template hooks
  - [x] Customizable via config.toml
- [ ] Environment
  - [x] JavaScript support
  - [x] React Support
  - [ ] TypeScript support
- [x] CI/CD <https://exiguus.github.io/zola-monoplain/posts/ci/>
  - [x] Linting and Formatting support
    - [x] Prettier
    - [x] Commitlint
  - [x] Commit hooks

## Getting Started

1. Add this theme to your `themes/` folder (copy or symlink).
2. Copy the theme config file from `themes/zola-monoplain/config.toml` into your project's root directory. Update it as required and don't forget to add `theme = 'zola-monoplain'` at the top of the file.
3. Copy the contents of `themes/zola-monoplain/content/` into the root of your project and adjust the files as needed.

Also, see the themes documentation: <https://exiguus.github.io/zola-monoplain/posts/themes/>

## Customising the Theme

- **To change settings** copy `config.toml` into your project and update it as required (make sure you add the theme variable at the top of the file, see Getting started above).
- **To inject content into templates** copy `templates/macros/hooks.html` and update it as required.
- **To change syntax highlighting** change `theme` in `config.toml` to one of the [available themes](https://github.com/getzola/zola/tree/master/sublime/themes).

For a complete reference of `config.extra`, `page.extra`, and available macros/shortcodes, see:

- <https://exiguus.github.io/zola-monoplain/posts/themes/>
- <https://exiguus.github.io/zola-monoplain/posts/images/>
- <https://exiguus.github.io/zola-monoplain/posts/shortcodes/>

## Releases

Release follow [Semantic Versioning](https://semver.org/) and are tagged in the Git repository. The version number is also available in `package.json` and the `config.toml` file.
Release notes are available in the [CHANGELOG.md](changelog) file.
Zola Config Changes are available in the [CHANGELOG_ZOLA_CONFIG.md](changelog-zola-config) file.

## Feature Requests & Support

I'm afraid I'm unable to accept feature requests or provide user support for this theme.
The [Zola documentation](https://www.getzola.org/documentation/getting-started/overview/) and [Tera documentation](https://tera.netlify.app/docs/) are great resources and there is a [Zola discussion forum](https://zola.discourse.group/). If you've found a bug in the theme please open a GitHub issue.

## Contributing

Contributions are very welcome. If you are planning to add a feature, open an issue first so the approach can be discussed before implementation. Please keep the following in mind:

- Only widely generic features will be accepted, anything too specific should be kept to your own templates.
- Be careful about destroying indentation as Tera syntax doesn't seem to be widely supported by IDEs.
- Keep it lean. Adding bloat will likely result in your PR being rejected.
- Consider backward compatibility, ideally people blindly-upgrading won't see any unexpected changes to their sites.

## License

This theme is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [Zola](https://www.getzola.org/)
- [Tabler Icons](https://tabler.io/icons)
- [Zola Inky Theme](https://github.com/jimmyff/zola-inky)
