+++
title = "Favicon"
description = "How to customize and generate favicon files for your site"
date = 2026-08-02
authors = ["Simon Gattner"]
[taxonomies]
tags = ["Zola", "Theme", "Favicon", "SVG", "Inkscape"]
+++

## Quick Start

1. Copy theme icons to your site: `cp themes/zola-monoplain/static/{icon.svg,icon.png,favicon.ico} static/`
2. Edit `static/icon.svg` to customize your design
3. Regenerate PNG and ICO files (see below)

These files override the theme's default static files. Zola copies your `static/` directory contents to the output, replacing theme files with the same names.

## What Is Included in the Theme?

The theme includes three favicon files in the `static` directory:

| File          | Description                                                                                             | Image                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `icon.svg`    | An SVG image used as the favicon for modern browsers that support SVG favicons.                         | ![SVG Favicon Example](../../icon.svg) <!-- rumdl-disable-line existing-relative-links --> |
| `icon.png`    | A 32x32 PNG image used as the favicon for most browsers.                                                | ![Icon Example](../../icon.png) <!-- rumdl-disable-line existing-relative-links -->        |
| `favicon.ico` | A traditional ICO file used as a fallback for older browsers. It is generated from the `icon.png` file. | ![Favicon Example](../../favicon.ico) <!-- rumdl-disable-line existing-relative-links -->  |

## How Favicons Work

Browsers look for favicon files in several locations:

1. **HTML link tags**: Specified in the `<head>` section of your HTML
2. **Root directory**: `/favicon.ico` (traditional location)

The `zola-monoplain` theme uses HTML link tags in the head template to reference favicon files, allowing for maximum compatibility and flexibility.
As fallback for older browsers, it also includes a reference to `/favicon.ico` in the root directory.

The current theme uses the following link tags in the `<head>` section of your HTML:

```html
<link
  rel="icon"
  href="{{ get_url(path='icon.svg', trailing_slash=false)|safe }}"
  sizes="32x32"
  type="image/svg+xml"
/>
<link
  rel="icon"
  href="{{ get_url(path='icon.png', trailing_slash=false)|safe }}"
  sizes="32x32"
  type="image/png"
/>
<link
  rel="icon"
  href="{{ get_url(path='favicon.ico', trailing_slash=false)|safe }}"
  sizes="32x32"
  type="image/ico"
/>
```

## Customize the Icons

To add or change the favicon, copy the existing files from the theme's `static` directory into your site's `static` directory. You can then edit the files in place or replace them with your own.

### 1. Copy Icon Files from the Theme

```bash
cp themes/zola-monoplain/static/icon.png static/icon.png
cp themes/zola-monoplain/static/icon.svg static/icon.svg
cp themes/zola-monoplain/static/favicon.ico static/favicon.ico
```

### 2. Customize the Files

If the copy was successful, your site's directory structure should look like this:

```text
   your-site/
   ├── config.toml
   ├── content/
   └── static/
       ├── favicon.ico
       ├── icon.png
       └── icon.svg
```

The `icon.svg` file is also the template for the `icon.png` file, which is generated from the SVG file using Inkscape or ImageMagick's `convert` command.

The `icon.svg` file is a simple SVG file that contains a single letter "m" in a monospace font. You can edit the SVG file to change the letter, font, color, or other properties.

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <style>
    :root {
      color-scheme: light dark;
    }
    @media (prefers-color-scheme: dark) {
      text { fill: white; }
      rect { fill: black; }
    }
    @media (prefers-color-scheme: light) {
      text { fill: black; }
      rect { fill: white; }
    }
    text {
      text-anchor: middle;
      dominant-baseline: middle;
      font-family: "IBM Plex Mono", Menlo, "DejaVu Sans Mono", "Bitstream Vera Sans Mono", Consolas,
      "Lucida Console", Monaco, monospace;
      font-size: 32em;
    }
    text + text {
      font-size: 8em;
    }
  </style>
  <rect width="100%" height="100%" />
  <text x="50%" y="50%">m</text>
  <text x="85%" y="15%">ρ</text>
</svg>
```

After editing the SVG file, you can generate a new PNG file using Inkscape or ImageMagick's `convert` command.

Here is an example of how to generate the PNG and ICO files from the SVG file using Inkscape and ImageMagick:

```bash
cd your-site/static
inkscape ./icon.svg --export-width=32 --export-filename="./tmp.png"
convert ./tmp.png -resize 32x32 ./favicon.ico
convert ./tmp.png -resize 32x32 ./icon.png
```

If you want to have transparent background for the PNG file, you can use the following command:

```bash
convert ./tmp.png -resize 32x32 -background none ./icon.png
```

Once you have generated the new PNG and ICO files, you can delete the temporary PNG file:

```bash
rm ./tmp.png
```

**Note:** If you have problems with the background color of the PNG file, you can remove the `@media (prefers-color-scheme: dark)` and `@media (prefers-color-scheme: light)` sections from the SVG file. This will make the background color of the PNG file transparent.
Or set color and background color explicitly for the `<text>` and `<rect>` elements in the SVG file.

## Further Reading

- [W3C Favicon Guide](https://www.w3.org/2005/10/howto-favicon)
- [Mozilla Favicon](https://developer.mozilla.org/en-US/docs/Glossary/Favicon)
- [Mozilla Adding Custom Icons](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_custom_icons_to_your_site)
- [Inkscape](https://inkscape.org/)
- [ImageMagick](https://imagemagick.org/)
