---
title: Projects
layout: layouts/base.njk
subtitle: All my public projects from Github... please, look around!
---

## The [GitRegator](https://github.com/kevinkhill/gitregator)

These links were generated at build time using my fun little module, `gitregator`

<ul class="listing">
{%- for repo in github.repos.sort() -%}
  <li>
    <a href="https://github.com/kevinkhill/{{ repo }}">{{ repo }}</a>
  </li>
{%- endfor -%}
</ul>
