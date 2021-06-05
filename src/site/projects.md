---
title: Projects
layout: layouts/base.njk
subtitle: All my projects, hosted on Github... please look around!
---

These cards were generated at build time using info pulled from `.gitregator.yml` files placed in each repository. They are queried and collected using a fun little module made soley for this purpose... the [GitRegator](https://github.com/kevinkhill/gitregator)!

<div class="grid grid-cols-2 gap-4">
{%- for repo in github.repos -%}
  <div class="bg-blue-50 rounded overflow-hidden shadow-lg">
    <div class="px-6 py-4">
      <div class="text-blue-900 font-bold text-xl mb-2">{{ repo }}</div>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p>  
      <button class="bg-blue-500 hover:opacity-75 text-white flex-grow rounded-full px-8 py-2">
        <a href="https://github.com/kevinkhill/{{ repo }}">Github</a>
      </button>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
    </div>
  </div>
{%- endfor -%}
</div>
