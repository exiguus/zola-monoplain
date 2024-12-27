{% import "macros/example.html" as example -%}
{% import "macros/details.html" as details -%}
{% if id -%}
{% set id=id -%}
{% else -%}
{% set id="example-"~ nth -%}
{% endif -%}
<figure{% if title %} aria-labelledby="{{ id }}"{% else %} aria-label="example"{% endif %}>
{% if title -%}

  <figcaption id="{{ id }}">
    Example: {{ title }}
  </figcaption>
  {% endif -%}
  {{ example::example(title=title, src=src, height=height) }}
  {% if source -%}
  {% set type = type | default(value="javascript") -%}
  {% set source = source | trim -%}
  {% set open = open | default(value=false) -%}
  {% set content = '

```' ~ type ~ '

' ~ source ~ '

```

' %}
{{ details::details(title="Source", open=open, content=content,id="example-source-"~id) }}
{% endif -%}
{% if details -%}
{{ details::details(title="Details", open=open, content=details, id="example-details-"~id) }}
{% endif -%}

</figure>
