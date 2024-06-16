+++
title = "Shortcodes"
description = "Shortcodes by example"
date = 2024-06-08
authors = ["Simon Gattner"]
[taxonomies]
tags= ["Zola", "Theme", "Markdown", "Shortcodes"]
+++

## Introduction

Shortcodes are a way to embed additional content in your Markdown files. They are a powerful feature of Zola and can be used to embed content like images, videos, or other HTML elements. In this post, I will show you how to use shortcodes in Zola.

## Shortcodes

### Details

The `details` shortcode can be used to create a collapsible section in your Markdown files. This can be useful for hiding additional information or content that is not essential to the main text. Here is an example of how to use the `details` shortcode:

{{ details(title="Click to expand", summary="This is a summary" content=`This is the content that will be hidden by default. You can click on the summary above to expand or collapse this section.`) }}

Please note that the shortcode normale start and end with `{{` and `}}`. But in this example the shortcode start and end with `\{\{` and `\}\}`. This is necessary to render the shortcode in the Markdown file.

```md
\{\{ details(title="Click to expand", summary="This is a summary" content=`This is the content that will be hidden by default. You can click on the summary above to expand or collapse this section.`) \}\}
```

### Markdown

The `markdown` shortcode can be used to render Code within your Markdown files. This can be usefull to embed Code examples and the Source of the examples. Here is an example that render a HTML form and the Source.

{{ markdown(title="input attr type is number and attr step is 1" type="html", code='

<form>
    <input type="number" step="1" />
    <input type="submit" />
  </form>
  <p>Input value: <span></span></p>
  <script>
    document.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();
      document.querySelector("span").innerText = e.target.querySelector("input").value;
    });
  </script>
') }}

Please note that the shortcode normale start and end with `{{` and `}}`. But in this example the shortcode start and end with `\{\{` and `\}\}`. This is necessary to render the shortcode in the Markdown file.

```md
\{\{ markdown(title="input attr type is number and attr step is 1" type="html", code='

<form>
    <input type="number" step="1" />
    <input type="submit" />
  </form>
  <p>Input value: <span></span></p>
  <script>
    document.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();
      document.querySelector("span").innerText = e.target.querySelector("input").value;
    });
  </script>
') \}\}
```

### Icons

The `icon` shortcode can be used to embed icons in your Markdown files. This can be useful for adding visual elements to your posts. Here is an example of how to use the `icon` shortcode:

{{ icon(name="activity") }}

Please note that the shortcode normale start and end with `{{` and `}}`. But in this example the shortcode start and end with `\{\{` and `\}\}`. This is necessary to render the shortcode in the Markdown file.

```md
\{\{ icon(name="activity",size=32) \}\}
```

The size of the icon can be adjusted by adding the `size` parameter to the shortcode. The default size is 32 pixels, but you can specify a different size. The parameter is optional and can be omitted if you want to use the default size.

All available icon names can be found on the [icon page](@/posts/icons.md).

### Youtube

The `youtube` shortcode can be used to embed YouTube videos in your Markdown files. This can be useful for including video content in your posts. Here is an example of how to use the `youtube` shortcode:

{{ youtube(id="Pb4Naef8pc8", title="loop") }}

Please note that the shortcode normale start and end with `{{` and `}}`. But in this example the shortcode start and end with `\{\{` and `\}\}`. This is necessary to render the shortcode in the Markdown file.

```md
\{\{ youtube(id="Pb4Naef8pc8", title="loop") \}\}
```

### Spotify

The `spotify` shortcode can be used to embed Spotify playlists in your Markdown files. This can be useful for including music playlists in your posts. Here is an example of how to use the `spotify` shortcode:

{{ spotify(id="6rqhFgbbKwnb9MLmUQDhG6", title="album") }}

Please note that the shortcode normale start and end with `{{` and `}}`. But in this example the shortcode start and end with `\{\{` and `\}\}`. This is necessary to render the shortcode in the Markdown file.

```md
\{\{ spotify(id="6rqhFgbbKwnb9MLmUQDhG6", title="album") \}\}
```

## Conclusion

Shortcodes are a powerful feature of Zola that can be used to embed additional content in your Markdown files. They are easy to use and can help you create more dynamic and interactive posts. I hope this post has given you a good overview of how to use shortcodes in Zola. If you have any questions or need further assistance, feel free to leave a comment below. Happy coding!
