+++
title = "Formatter"
description = "Front matter fields: common usage in theme and blog, plus all Zola options"
date = 2026-07-31
authors = ["Simon Gattner"]
[taxonomies]
tags = ["Zola", "Theme", "Front Matter", "Metadata", "Configuration"]
+++

## Introduction

With Front Matter, Zola allows you to define metadata for your content pages. This metadata can be used to control how the page is rendered, how it appears in search results, and how it is included in sitemaps and feeds.

Next to commonly used fields like `title`, `description`, `date`, and `authors`, the Theme Monoplain also supports additional fields for images, hero images, and feedback email configuration.

## Common Front Matter Fields

For a standard post, the following front matter fields are commonly used:

```toml
+++
title = "Page Title"
description = "Page description for meta tags and RSS"
date = 2026-01-01
authors = ["Author Name"]

[taxonomies]
tags = ["tag1", "tag2", "tag3"]

[extra]
images = ["image1.jpg", "image2.jpg"]
hero_img = "hero.jpg"
hero_alt = "Description of hero image"
hero_copy = "Copyright notice"
+++
```

| Field         | Type             | Description                                                        |
| ------------- | ---------------- | ------------------------------------------------------------------ |
| `title`       | string           | Page title, used in headings and meta tags                         |
| `description` | string           | Page description for meta tags and RSS                             |
| `date`        | date             | Publication date (YYYY-MM-DD)                                      |
| `authors`     | array of strings | List of authors                                                    |
| `tags`        | array of strings | Tags for the page (most commonly used taxonomy)                    |
| `images`      | array of strings | List of images for the page that are also displayed in the gallery |
| `hero_img`    | string           | Path to hero image for post header                                 |
| `hero_alt`    | string           | Alt text for hero image                                            |
| `hero_copy`   | string           | Copyright/attribution text for hero image                          |

## More Uncommon Front Matter Fields

```toml
+++
# Show the update date next to the creation date in the post header and feed
updated = 2026-07-31
# Draft and rendering
#  if true, page won't be rendered in production builds
#   but still available in dev server or preview deployments
draft = true

[extra]
# Open Graph and preview
preview_img = "preview.jpg"
preview_image = "preview.jpg"

# Language
lang = "de"

# Feedback configuration overwrite of config.toml
feedback_email_enabled = true
feedback_email_address = { local_part = "name", domain_name = "example", tld = "com" }
feedback_email_address_wildcard = true
feedback_email_address_wildcard_postfix = ".monoplain"
+++
```

| Field                                     | Type    | Description                                     |
| ----------------------------------------- | ------- | ----------------------------------------------- |
| `updated`                                 | date    | Last updated date (YYYY-MM-DD)                  |
| `draft`                                   | boolean | If true, page won't be rendered                 |
| `preview_img`                             | string  | Path to preview image for Open Graph            |
| `preview_image`                           | string  | Alternative spelling for preview image          |
| `lang`                                    | string  | Language code for content (adds lang attribute) |
| `feedback_email_enabled`                  | boolean | Enables feedback email link                     |
| `feedback_email_address`                  | table   | Configuration for feedback email address        |
| `feedback_email_address_wildcard`         | boolean | Enables wildcard email addresses                |
| `feedback_email_address_wildcard_postfix` | string  | Postfix for wildcard email addresses            |

## Visibility in Search, Sitemap and Feed

```toml
+++
in_search_index = false

[extra]
ignore_sitemap = true
ignore_feed = true
robots_noindex = true
+++
```

| Field             | Type    | Description                               |
| ----------------- | ------- | ----------------------------------------- |
| `in_search_index` | boolean | If false, excludes page from search index |
| `ignore_sitemap`  | boolean | If true, excludes page from sitemap       |
| `ignore_feed`     | boolean | If true, excludes page from RSS feed      |

## All Zola-Supported Front Matter Fields

Complete reference of all front matter fields supported by Zola as documented at <https://www.getzola.org/documentation/content/page/>
