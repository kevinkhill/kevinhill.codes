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

## Links from an external data source

These links were sourced from at build time.

<ul class="listing">
{%- for repo in github.repos.slice(0,5) -%}
  <li>
    <a href="https://github.com/kevinkhill/{{ repo }}">{{ repo }}</a>
  </li>
{%- endfor -%}
</ul>

## API functions

- [/api/hello](/api/hello)
- [/api/fetch-joke](/api/fetch-joke)
