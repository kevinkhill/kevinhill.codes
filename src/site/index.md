---
title: Kevin Hill
subtitle: I love to write code and create things. Code helps ideas come to life and gives my creativity an outlet to make something amazing.
layout: layouts/base.njk
---

## Posts

The pages found in in the posts

<ul class="listing">
{%- for page in collections.post -%}
  <li>
    <a href="{{ page.url }}">{{ page.data.title }}</a> -
    <time datetime="{{ page.date }}">{{ page.date | dateDisplay("LLLL d, y") }}</time>
  </li>
{%- endfor -%}
</ul>

## API functions

- [/api/hello](/api/hello)
