+++
title = "Theme"
description = "Theme by example"
date = 2024-06-19
authors = ["Simon Gattner"]
[taxonomies]
tags= ["Zola", "Theme", "CSS", "Style", "Typography"]
+++

## Introduction

`mono/plain a11y=true` is a minimalist theme for Zola. It is designed to be simple, clean and easy to read. Accessibility is goal. The theme is inspired by the classic monospace fonts and plain text editors. It is perfect for blogs, documentation, and personal websites.

The Color Scheme is provided by the browser. The theme uses the `light` and `dark` color schemes to adapt to the user's preferences. The theme has a simple layout with a header, main content, and footer. It uses a monospace font for the text and a simple color scheme.

## Styling

```css
:root {
  color-scheme: light dark;
}

body {
  font-family: "IBM Plex Mono", Menlo, "DejaVu Sans Mono",
    "Bitstream Vera Sans Mono", Consolas, "Lucida Console", Monaco, monospace;
}
```

The `color-scheme` property automatically adapts the theme to the user's preferences.

The `font-family` property sets the font to a monospace font stack. This ensures that the text is easy to read and looks good on all devices.

The installed font from your system is used as the primary font. If the font is not available, the browser will use the next font in the stack.

## Accessibility

The theme is designed with accessibility in mind. It uses semantic HTML5 elements and ARIA attributes to make the content accessible to screen readers and other assistive technologies.

The theme has a high contrast color scheme to make the text easy to read. The theme uses a monospace font for the text to improve readability.

WCAG 2.1 AA guidelines are followed to ensure that the theme is accessible to all users.

## Markup

The theme uses an accessible markup with semantic HTML5 elements. Valid HTML5 elements are used to structure the content. The theme uses headings, paragraphs, lists, and blockquotes to format the text.

## Markdown

The theme supports CommonMark as the markdown parser. It optionally supports parsing footnotes, Github flavored tables and task lists, and strikethrough text.

All available markdown features are listed in the [Markdown](/posts/markdown/) post.
