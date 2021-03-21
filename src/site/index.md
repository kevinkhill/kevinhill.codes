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

These links were generated at build time using my fun little module, the [GitRegator](https://github.com/kevinkhill/gitregator)!

<ul class="listing">
{%- for repo in github.repos.sort() -%}
  <li>
    <a href="https://github.com/kevinkhill/{{ repo }}">{{ repo }}</a>
  </li>
{%- endfor -%}
</ul>

## API functions

- [/api/hello](/api/hello)
