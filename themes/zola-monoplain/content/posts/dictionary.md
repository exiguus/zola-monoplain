+++
title = "Dictionary"
description = "Dictionary by Example"
date = 2024-06-09
updated = 2026-07-11
authors = ["Simon Gattner"]
[taxonomies]
tags= ["Zola", "Markdown", "Translations", "Languages", "Dictionary"]
+++

## Introduction

This theme uses Zola `[translations]` as a dictionary for UI text. The translations are defined in `config.toml`. You can set a default language and add translations for each language you want to support.

The [Zola Multilingual sites](https://www.getzola.org/documentation/content/multilingual/) provide more information about how to create multilingual sites with Zola.

## Translations

The search page, for example, has the following translations defined in `config.toml`:

```toml
[translations]
search_form_legend = "Search"
search_form_input_label = "Text to search"
search_form_input_placeholder = "Search ↵"
search_form_submit = "Search"
search_form_clear = "Clear"
```

It is possible to override the search page translations by adding the following values to `config.toml`:

```toml
[translations]
search_form_legend = "The Search"
```

## Languages

To define translations for languages other than the default (`en`), add language-specific translations in `config.toml`. Templates resolve these values with the `trans` function.

```toml
[language.de.translations]
search_form_legend = "Die Suche"

[language.fr.translations]
search_form_legend = "La recherche"

[language.it.translations]
search_form_legend = "La ricerca"
```

## Extra Language

```md
+++
title = "Extra Language"
description = "Extra Language"
date = 2024-06-09
[extra]
lang = "de"
+++
```

The `extra.lang` field sets the language for the main content of a page or post. It also adds a `lang` attribute to post and gallery output that links to the page.
