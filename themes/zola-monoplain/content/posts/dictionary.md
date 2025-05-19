+++
title = "Dictionary"
description = "Dictionary by Example"
date = 2024-06-09
authors = ["Simon Gattner"]
[taxonomies]
tags= ["Zola", "Markdown", "Translations", "Languages", "Dictionary"]
+++

## Introduction

The theme use Zola `[translations]` as _Dictionary_ and to translate the content of the website. The translations are defined in the `config.toml` file. You can specify the default language and add translations for each language you want to support.

The [Zola Multilingual sites](https://www.getzola.org/documentation/content/multilingual/) provide more information about how to create multilingual sites with Zola.

## Translations

The search Page for example has the following translations defined in the `config.toml` file:

```toml
[translations]
search_form_legend = "Search"
search_form_input_label = "Text to search"
search_form_input_placeholder = "Search ↵"
search_form_submit = "Search"
search_form_clear = "Clear"
```

Its possible to change the translations for the search page by adding the following translations to the `config.toml` file:

```toml
[translations]
search_form_legend = "The Search"
```

## Languages

To change translations for other languages as the default (en), you can add the translations to the `config.toml` file. The translations are used in the templates with the `trans` function. The `trans` function takes the key of the translation as an argument and returns the translation for the current language.

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

The `extra.lang` field is used to set the language for the main content of the page or post. Also, it adds a `lang` attribute to posts and gallery items link the the page.
