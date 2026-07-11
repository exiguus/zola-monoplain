+++
title = "Themes"
description = "Monoplain Theme for your one-stop static site engine"
date = 2024-06-09
updated = 2026-07-11
authors = ["Simon Gattner"]
[taxonomies]
tags= ["Zola", "Theme", "Markdown", "SSG", "Static Site Generator"]
+++

## Introduction

Zola is a fast static site generator written in Rust. It is designed to be simple to use and easy to extend. Zola is a great choice for building blogs, portfolios, and other static websites.

This post gives a practical introduction to Zola and shows how to get started.

## Install

Zola is available on all major platforms. You can install it using the package manager of your choice or build it by yourself.

To build Zola, you can use the following command:

```bash
git clone https://github.com/getzola/zola.git
cd zola
cargo install --path . --locked
zola --version
```

To install Zola, use:

```bash
cp target/release/zola ~/.cargo/bin/zola
```

<https://www.getzola.org/documentation/getting-started/installation/>

## Create a new site

To create a new Zola site, use the Zola CLI:

```bash
zola init my-site
```

<https://www.getzola.org/documentation/getting-started/cli-usage/>

## Themes

Zola supports themes out of the box. You can create your own theme or use one of the many themes available on the Zola website.

After you initialize your site, you can clone the theme repository.

Then copy the theme into your site directory:

```bash
git clone https://github.com/exiguus/zola-monoplain.git
# The theme is in the themes/zola-monoplain directory
cp -R zola-monoplain/themes/zola-monoplain my-site/themes/
# Copy the example content of the theme to your site directory
cp -R zola-monoplain/themes/zola-monoplain/content my-site/
# Copy the example config.toml of the theme to your site directory
cp zola-monoplain/themes/zola-monoplain/config.toml my-site/
```

Instead of copying files, you can use symlinks. This is useful if you want to use the theme in multiple sites. You can create a symlink to the theme directory from your site directory:

```bash
ln -s /path/to/zola-monoplain/themes/zola-monoplain /path/to/blog/themes/zola-monoplain
```

Then you can set the theme in the `config.toml` file:

```toml
theme = "zola-monoplain"
```

And adjust the `config.toml` file to your needs.

An example of using this theme with GitHub Actions in a monorepo is available here: <https://github.com/exiguus/blog>

## Templates

Zola uses the Tera template engine to render your content. Tera is a powerful and flexible template engine that allows you to create complex layouts and designs for your website.

<https://keats.github.io/tera/docs>

## Theme Extra Reference

The following `config.extra` keys are currently used by templates/macros:

```toml
[extra]
# debug
debug = true

# defaults for metadata
tags = ["zola", "theme", "a11y", "accessible"]
authors = ["Simon Gattner"]
date = "2024-01-01" # optional fallback used by meta macro
timezone = "Europe/Berlin"

# images
image_resizing_disabled = false
image_format = "webp"
image_quality = 80
images_default_size = 256
images_sizes = [256, 384, 512, 576, 640, 768, 1024, 1152]
thumbnail_quality = 70
thumbnail_default_size = 128
thumbnail_sizes = [128, 256]

# links/footer/header
link_github_username = "exiguus/zola-monoplain"
link_mastodon_url = "https://toot.community/@exiguus"
disable_powered_by = false # optional

main_nav_items = [
  { url = "$BASE_URL/", name = "Home" },
]
footer_nav_items = [
  { url = "$BASE_URL/", name = "Home" },
]

# gallery
gallery_show_posts = true

# feedback
feedback_email_enabled = true
feedback_email_address = { local_part = "monoplain", domain_name = "0x38", tld = "de" }
feedback_email_address_wildcard = true
feedback_email_address_wildcard_postfix = ".monoplain"
```

Notes:

- `search_enabled` exists in `config.toml` but is currently not used directly in templates.
- `thumbnail_default_size` is defined in config, but component/template calls often pass concrete defaults inline.

## Post/Page Extra Reference

The following `page.extra` / `post.extra` keys are currently used by templates:

```toml
[extra]
lang = "de"
hero_img = "hero.jpg"
hero_alt = "Sunset skyline over a river"
hero_copy = "Hackesche Hoefe in Berlin-Mitte"
preview_img = "preview.jpg"
images = ["image-01.jpg", "image-02.jpg"]
```

- `lang`: adds a language attribute in post/page and gallery output.
- `hero_img`: renders the hero image in post headers.
- `hero_alt`: optional alt text for the hero image in post headers.
- `hero_copy`: optional figcaption text for the hero image in post headers.
- `preview_img`: first choice for Open Graph image.
- `images`: drives gallery and latest-images thumbnail sections.
- Open Graph falls back to `hero_img` when `preview_img` is missing.

## Macro Reference

Theme macros used by templates/shortcodes:

- `macros/images.html`
  - `image(path, src, alt, class="", width, height)`
  - `responsive_image(path, src, alt, default_size, sizes, class="")`
  - `responsive_thumbnail(path, src, alt, default_size, sizes, class="")`
- `macros/meta.html`
  - `description()`
  - `title()`
  - `tags()`
  - `authors()`
  - `date()`
- `macros/opengraph.html`
  - `description()`
  - `title()`
  - `image()`
- `macros/icons.html`
  - `icon(name, size=32)`
- `macros/hooks.html`
  - `post_above_content(page)`
  - `post_below_content(page)`
  - `post_below_tags(page)`
  - `posts_below_title(page)`
- `macros/markdown.html`
  - `example(title="example", type, code)`

Shortcodes provided by the theme:

- `image`
- `image_original`
- `thumbnail`
- `icon`
- `details`
- `markdown`
- `youtube`
- `spotify`

## Multilingual sites

Zola supports multilingual sites out of the box. You can create content in multiple languages and Zola will generate separate pages for each language.

Languages and translations are defined in the `config.toml` file. You can specify the default language and add translations for each language you want to support.

```toml
[languages.de]
generate_feed = true
build_search_index = true

[languages.en]

[language.de.translations]
home = "Startseite"

[language.en.translations]
home = "Home"

[translations]
home = "Home"
```

## Resources

- [Zola website](https://www.getzola.org/)
- [Zola templates](https://www.getzola.org/documentation/templates/overview/)
- [Zola Multilingual sites](https://www.getzola.org/documentation/content/multilingual/)
