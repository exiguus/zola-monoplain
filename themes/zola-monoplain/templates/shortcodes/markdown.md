{% import "macros/markdown.html" as markdown -%}
<figure aria-label="markdown">
  {% if title -%}
  <figcaption>
    Example: {{ title }}
  </figcaption>
  {% endif -%}
  {{ markdown::example(title=title, type=type, code=code) }}
  <details aria-label="source" open>
    <summary>Source</summary>

```{{ type }}
  {{ code | trim }}
```

  </details>
</figure>