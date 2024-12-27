<details aria-labelledby="details-md-{{ nth }}"{% if open and open == true %} open{% endif %}>
  <summary id="details-md-{{ nth }}">{{title}}</summary>

{{ content | trim }}

</details>
