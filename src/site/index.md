---
title: Kevin Hill
subtitle: I love to write code and create things. Code helps ideas come to life and gives my creativity an outlet to make something amazing.
layout: layouts/base.njk
---

## This site is a starting point

From this point we should already have:

- [Eleventy](https://11ty.io) with a skeleton site
- A date format filter for Nunjucks based on [Luxon](https://moment.github.io/luxon)
- A tiny CSS pipeline with PostCSS
- A tiny inline JS pipeline. (<a href="#" class="btn-log">Test a console.log message</a>)
- JS [search index](/search.json) generator
- [Netlify Dev](https://www.netlify.com/products/dev) for testing [Netlify redirects](https://netlify.com/docs/redirects/)
- Serverless (FaaS) development pipeline with [Netlify Dev](https://www.netlify.com/products/dev) and [Netlify Functions](https://www.netlify.com/products/functions)

## Post pages

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
{%- for item in github.repos.slice(0,5) -%}
  <li>
    <a href="https://github.com/kevinkhill/{{ repo }}">{{ repo }}</a>
  </li>
{%- endfor -%}
</ul>

## API functions

- [/api/hello](/api/hello)
- [/api/fetch-joke](/api/fetch-joke)
