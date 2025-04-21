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

## Install

Zola is available on all major platforms. You can install it using the package manager of your choice or build it by yourself.

To build Zola, you can use the following command:

```bash
git clone https://github.com/getzola/zola.git
cd zola
cargo install --path . --locked
zola --version
```

to install Zola use:

```bash
cp target/release/zola ~/.cargo/bin/zola
```

<https://www.getzola.org/documentation/getting-started/installation/>

## Create a new site

To create a new Zola site, you can use the the Zola CLI with the following command:

```bash
zola init my-site
```

<https://www.getzola.org/documentation/getting-started/cli-usage/>

## Themes

Zola supports themes out of the box. You can create your own theme or use one of the many themes available on the Zola website.

After init your site, you can clone the theme.

Then you can copy the theme to your site directory:

```bash
git clone https://github.com/exiguus/zola-monoplain.git
# The theme is in the themes/zola-monoplain directory
cp -R zola-monoplain/themes/zola-monoplain my-site/themes/
# Copy the example content of the theme to your site directory
cp -R zola-monoplain/theme/content my-site/
# Copy the example config.toml of the theme to your site directory
cp zola-monoplain/config.toml my-site/
```

Instead of copy files over you can also use symlinks. This is useful if you want to use the theme in multiple sites. You can create a symlink to the theme directory in your site directory:

```bash
ln -s /path/to/zola-monoplain/themes/zola-monoplain /path/to/blog/themes/zola-monoplain
```

Then you can set the theme in the `config.toml` file:

```toml
theme = "zola-monoplain"
```

And adjust the `config.toml` file to your needs.

An example how to use the theme with with github actions in a monorepo can be found here: <https://github.com/exiguus/blog>

## Templates

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
