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

## Introduction

Open Graph is a protocol that allows web pages to become rich objects in a social graph. It enables you to control how your content appears when shared on social media platforms like Facebook, Twitter, and LinkedIn. By using Open Graph meta tags, you can specify the title, description, image, and other attributes of your content.

## Post Metadata

In the page metadata, you can define `preview_img` for the Open Graph preview image. This image will be used when the page is shared on social media platforms. The `preview_img` should be the filepath to the image you want to use.

In this example, the `preview_img` is set to `opengraph-preview-image.jpg`, which is located in the same directory as the Markdown file for this post.

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

The macro for the preview_img look like:

```html
{% macro image(path, src, alt, class="", width,
height) -%}
<img
  width="{{ width }}"
  height="{{ height }}"
  alt="{{ alt }}"
  title="{{ alt }}"
  {% if width or height -%}
    {% set abspath = path ~ src -%}
    {% set resized = resize_image(path=abspath, width=width | default(value=0), height=height | default(value=0)) -%}
    src="{{ resized.url | safe }}"
  {% else -%}
    src="{{ get_url(path=path ~ src) | safe }}"
  {% endif -%}
  class="{{ class }}"
  loading="lazy"
/>
{% endmacro image -%}
```

The macro `image()` is used to generate the URL for the preview image.
If `preview_img` is defined, it checks if the path starts with a `/` or contains `://`. If so, it uses the path as is. Otherwise, it appends the `preview_img` to the page's path to create the full URL.
If the `preview_img` is not defined, it uses a default image located at `images/og-preview.png`.
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
\{\{ image(src="opengraph-preview-image.jpg", alt="Hand holding an ice cream cone with a scoop of creamy ice cream by a canal lined with colorful buildings in a Venice.", width=1200, height=630) \}\}
```

## Original Image

{{ image(src="opengraph-preview-image.jpg", alt="Hand holding an ice cream cone with a scoop of creamy ice cream by a canal lined with colorful buildings in a Venice.") }}

The shortcode for the image looks like this:

```markdown
\{\{ image(src="opengraph-preview-image.jpg", alt="Hand holding an ice cream cone with a scoop of creamy ice cream by a canal lined with colorful buildings in a Venice.") \}\}
```

## Default Image

The fallback image is used when no `preview_img` is defined in the page metadata. This image is located at `static/images/og-preview.png` and is used as a default Open Graph image.

{{ image(src="../../../static/images/og-preview.png", alt="Default opengraph image show a face, painted in blue on white ground.", width=1200, height=630) }}

The shortcode for the image looks like this:

```markdown
\{\{ image(src="../../../static/images/og-preview.png", alt="Default opengraph image show a face, painted in blue on white ground.", width=1200, height=630) \}\}
```
