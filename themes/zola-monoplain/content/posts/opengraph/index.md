+++
title = "Open Graph Preview"
description = "Open Graph Preview by example"
date = 2025-05-03
updated = 2026-07-11
authors = ["Simon Gattner"]
[taxonomies]
tags= ["Zola", "Theme", "Markdown", "Open Graph", "Preview Image"]
[extra]
images = ["opengraph-preview-image.jpg"]
preview_img = "opengraph-preview-image.jpg"
+++

## Introduction

Open Graph is a protocol that helps web pages appear as rich previews when shared on social platforms like Facebook, X/Twitter, and LinkedIn. With Open Graph meta tags, you can control the title, description, image, and related metadata.

## Post Metadata

In page metadata, you can define `preview_img` for the Open Graph preview image. This image is used when the page is shared on social media. The `preview_img` value should be the path to your image.

In this example, `preview_img` is set to `opengraph-preview-image.jpg`, located in the same directory as this post.

```markdown
+++
title = "Open Graph Preview"
description = "Open Graph Preview by example"
date = 2025-05-03
authors = ["Simon Gattner"]
[taxonomies]
tags= ["Zola", "Theme", "Markdown", "Open Graph", "Preview Image"]
[extra]
images = ["opengraph-preview-image.jpg"]
preview_img = "opengraph-preview-image.jpg"
+++
```

The Open Graph macro looks like:

```html
{% macro image() %}
  {% if page %}
    {% set og_img = "" %}
    {% if page.extra.preview_img is defined and page.extra.preview_img %}
      {% set og_img = page.extra.preview_img %}
    {% elif page.extra.hero_img is defined and page.extra.hero_img %}
      {% set og_img = page.extra.hero_img %}
    {% endif %}

    {% if og_img %}
      {% if og_img is starting_with("/") or og_img is containing("://") %}
        {{ og_img | safe }}
      {% else %}
        {% set image = resize_image(path=page.path ~ og_img, width=1200, height=630) %}
        {{ image.url | safe }}
      {% endif %}
    {% else %}
      {% set image = resize_image(path='images/og-preview.png', width=1200, height=630) %}
      {{ image.url }}
    {% endif %}
  {% else %}
    {% set image = resize_image(path='images/og-preview.png', width=1200, height=630) %}
    {{ image.url }}
  {% endif %}
{% endmacro image %}
```

The macro `image()` is used to generate the URL for the preview image.
If `preview_img` is defined, it is used first.
If `preview_img` is not defined, it falls back to `hero_img`.
If neither field is defined, it uses a default image located at `images/og-preview.png`.
For relative paths, the macro appends the image name to `page.path`.
For absolute paths (`/foo.jpg`) and URLs (`https://...`), the value is used as-is.
The `resize_image` function is used to generate a resized version of the image with a width of 1200 pixels and a height of 630 pixels. This is the recommended size for Open Graph images.

## Open Graph Tags

The following Open Graph tags are used to define the title, description, and image for the page:

```html
<meta
  property="og:title"
  content="mono&#x2F;plain; a11y=true | Open Graph Preview"
/>
<meta property="og:type" content="website" />
<meta
  property="og:url"
  content="http://exiguus.github.io/zola-monoplain/posts/opengraph/"
/>
<meta property="og:description" content="Open Graph Preview by example" />
<meta property="og:image" content="http://exiguus.github.io/zola-monoplain/posts/opengraph/opengraph-preview-image.jpg" />
<meta property="og:image:url" content="http://exiguus.github.io/zola-monoplain/posts/opengraph/opengraph-preview-image.jpg" />
<meta property="og:image:secure_url" content="http://exiguus.github.io/zola-monoplain/posts/opengraph/opengraph-preview-image.jpg" />
<link

```

## Open Graph Preview Image

{{ image(src="opengraph-preview-image.jpg", alt="Hand holding an ice cream cone with a scoop of creamy ice cream by a canal lined with colorful buildings in a Venice.", width=1200, height=630) }}

The shortcode for the image looks like this:

```markdown
{{/* image(src="opengraph-preview-image.jpg", alt="Hand holding an ice cream cone with a scoop of creamy ice cream by a canal lined with colorful buildings in a Venice.", width=1200, height=630) */}}
```

## Original Image

{{ image(src="opengraph-preview-image.jpg", alt="Hand holding an ice cream cone with a scoop of creamy ice cream by a canal lined with colorful buildings in a Venice.") }}

The shortcode for the image looks like this:

```markdown
{{/* image(src="opengraph-preview-image.jpg", alt="Hand holding an ice cream cone with a scoop of creamy ice cream by a canal lined with colorful buildings in a Venice.") */}}
```

## Default Image

The fallback image is used when no `preview_img` or `hero_img` is defined in the page metadata. This image is located at `static/images/og-preview.png` and is used as a default Open Graph image.

{{ image(src="../../../static/images/og-preview.png", alt="Default opengraph image show a face, painted in blue on white ground.", width=1200, height=630) }}

The shortcode for the image looks like this:

```markdown
{{/* image(src="../../../static/images/og-preview.png", alt="Default opengraph image show a face, painted in blue on white ground.", width=1200, height=630) */}}
```
