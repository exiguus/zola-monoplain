+++
title = "Zola"
description = "Your one-stop static site engine"
date = 2024-06-09
authors = ["Simon Gattner"]
[taxonomies]
tags= ["Zola", "Markdown", "SSG", "Static Site Generator"]
+++

## Introduction

Zola is a fast static site generator written in Rust. It is designed to be simple to use and easy to extend. Zola is a great choice for building blogs, portfolios, and other static websites.

In this post, I will introduce you to Zola and show you how to get started with it.

## Features

### Templates

Zola uses the Tera template engine to render your content. Tera is a powerful and flexible template engine that allows you to create complex layouts and designs for your website.

<https://keats.github.io/tera/docs>

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
