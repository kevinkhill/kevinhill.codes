---
title: Projects
layout: layouts/base.njk
subtitle: All my projects hosted on Github... please, look around!
---

These cards were generated at build time using info pulled from `.gitregator.yml` files placed in each repository. They are queried and collected using a fun little module made soley for this purpose... the [GitRegator](https://github.com/kevinkhill/gitregator)!

<div class="">
{%- for repo in github.repos -%}
    <div class="bg-white mb-5 p-3 shadow-lg rounded-lg flex justify-between items-center">
      <div class="flex">
        <div class="mr-4">
           <img class="shadow sm:w-12 sm:h-12 w-14 h-14 rounded-full" src="http://tailwindtemplates.io/wp-content/uploads/2019/03/link.jpg" alt="Avatar" />
        </div>
        <div>
          <h1 class="text-xl font-medium text-gray-700">{{ repo }}</h1>
          <p class="text-gray-600">https://github.com/kevinkhill/{{ repo }}</p>
        </div>
      </div>
      <button class="bg-blue-500 hover:opacity-75 text-white rounded-full px-8 py-2">
        <a href="https://github.com/kevinkhill/{{ repo }}">Github</a>
      </button>
    </div>
  <div class="block w-32">
    
  </div>
{%- endfor -%}
</div>
