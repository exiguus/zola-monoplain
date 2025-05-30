+++
title = "Markdown"
description = "Markdown by example"
date = 2024-03-26
updated = 2025-06-07
authors = ["Simon Gattner"]
[taxonomies]
tags= ["Zola", "Theme", "Markdown", "Typography"]
+++

## Introduction

Markdown is a lightweight markup language with plain text formatting syntax. It is designed so that it can be converted to HTML and many other formats using a tool by the same name. Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

Zola support CommonMark as the markdown parser. Further, it optionally supports parsing footnotes, Github flavored tables and task lists, and strikethrough text.

## Syntax

### Headers

#### Header 4

##### Header 5

###### Header 6

```markdown
# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6
```

### Paragraphs

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

This is a new paragraph.

And this is another paragraph.
This is still part of the same paragraph.

```markdown
This is a new paragraph.

And this is another paragraph.
This is still part of the same paragraph.
```

### Text Formatting

**Bold Text**
_Italic Text_\
~~Strikethrough Text~~\
**_Bold and Italic Text_**

```markdown
**Bold Text**
_Italic Text_
~~Strikethrough Text~~
**_Bold and Italic Text_**
```

### Lists

#### Unordered List

- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2

```markdown
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
```

#### Ordered List

1. First item
2. Second item
   1. Subitem 2.1
   2. Subitem 2.2

```markdown
1. First item
2. Second item
   1. Subitem 2.1
   2. Subitem 2.2
```

### Links and Images

[Link to github](https://github.com/exiguus/zola-monoplain)

![Github Profile Image](https://avatars.githubusercontent.com/u/1060633)

```markdown
[Link to github](https://github.com/exiguus/zola-monoplain)

![Github Profile Image](https://avatars.githubusercontent.com/u/1060633)
```

### Blockquotes

> This is a blockquote.
>
> - Blockquote can have lists.
> - It can also have **bold** or _italic_ text.

```markdown
> This is a blockquote.
>
> - Blockquote can have lists.
> - It can also have **bold** or _italic_ text.
```

### Code

#### Inline Code

This is `inline code` example.

```markdown
This is `inline code` example.
```

#### Code Blocks

```python
def hello_world():
    print("Hello, World!")

hello_world()
```

````markdown
```python
def hello_world():
    print("Hello, World!")

hello_world()
```
````

### Tables

| Name    | Age | Gender |
| ------- | --- | ------ |
| Alice   | 25  | Female |
| Bob     | 30  | Male   |
| Charlie | 22  | Male   |

```markdown
| Name    | Age | Gender |
| ------- | --- | ------ |
| Alice   | 25  | Female |
| Bob     | 30  | Male   |
| Charlie | 22  | Male   |
```

### Task Lists

- [x] Task 1
- [ ] Task 2
- [ ] Task 3

```markdown
- [x] Task 1
- [ ] Task 2
- [ ] Task 3
```

### Horizontal Rule

---

```markdown
---
```

### Emojis

:smiley: :rocket: :money_with_wings:

```markdown
:smiley: :rocket: :money_with_wings:
```

### Escaping Characters

To escape characters like \* or \_, use backslashes: \*escaped\* and \_escaped\_

```markdown
To escape characters like \* or \_, use backslashes: \*escaped\* and \_escaped\_
```

### HTML

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

<dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

```html
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
```

### Footnotes

Here is a footnote reference,[^1] and another.[^2]

[^1]: Here is the footnote.

<!-- format fix -->

[^2]: Here's one with multiple blocks.

Subsequent paragraphs are indented to show that they belong to the previous footnote.

```markdown
Here is a footnote reference,[^1] and another.[^2]

[^1]: Here is the footnote.
[^2]: Here's one with multiple blocks.

Subsequent paragraphs are indented to show that they belong to the previous footnote.
```

## References

Zola[^3] use pulldown-cmark[^4] as pull parser for CommonMark[^5] as the markdown parser. Further, it optionally supports parsing footnotes, Github flavored tables[^6], Github flavored task lists[^7] and strikethrough[^8] text.

[^3]: [Zola at a Glance](https://www.getzola.org/documentation/getting-started/overview/#zola-at-a-glance)

<!-- format fix -->

[^4]: [pulldown-cmark](https://github.com/pulldown-cmark/pulldown-cmark#pulldown-cmark)

<!-- format fix -->

[^5]: [CommonMark](https://commonmark.org/help/)

<!-- format fix -->

[^6]: [Github flavored tables](https://github.github.com/gfm/#tables-extension-)

<!-- format fix -->

[^7]: [Github flavored task lists](https://github.github.com/gfm/#task-list-items-extension-)

<!-- format fix -->

[^8]: [Strikethrough](https://github.github.com/gfm/#strikethrough-extension-)

<!-- format fix -->
