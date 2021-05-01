---
title: Configuring Nginx to Host a Sub Domain
date: 2021-05-01
---

[In the Cloud, Kevin Hill codes][cloud-link]

This is the configuration for Nginx to host the site above. It's just a little landing page to make sure I had everything setup correctly.

```nginx line-numbers
server {
    listen 80;
    server_name in-the-cloud.kevinhill.codes;
    root /var/www/html/in-the-cloud;
    index index.html;
    location / {
        try_files $uri $uri/ =404;
    }
}
```

Here's the tricky part about getting the DNS working...
So I have my domain `kevinhill.codes` registered with with the fact I have since pointed my registrar's NS to Netlify's NS

[cloud-link]: http://in-the-cloud.kevinhill.codes "My Vultr VPS Landing Page"
