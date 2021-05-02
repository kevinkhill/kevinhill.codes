---
title: Configuring Nginx to Host a Sub Domain
date: 2021-05-01
---

[In the Cloud, Kevin Hill codes][cloud-link]

This is the configuration for Nginx to host the site above. It's just a little landing page to make sure I had everything setup correctly.

```nginx
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

Now, on to getting our SSL working so we can get our `https`. I love [Let's Encrypt][lets-encrypt] so I always turn to them to get my cert. My server is running Ubuntu 20.04, so we can use [the certbot snap][certbot] to easily get up and running. I am not a fan of copy pasting that guide parts into here with my commentary. I followed the guide and was able to use `sudo certbot --nginx` with no issue.

Here's the tricky part about getting the DNS working...
So I have my domain `kevinhill.codes` registered with namecheap, and thats all fine. To use [netlify to host on your own domain][netlify] you have to point your domain to their nameservers. Easy enough, I follow their instructions and now my shiny domain is hosting my site. Hooray!

One more piece of the puzzle, since I can't use namecheap anymore to create a DNS record for the subdomain. I had to head to netlify and use their dns settings to create an A record pointing the subdomain to my VPS IP.

[netlify]: https://docs.netlify.com/domains-https/custom-domains/
[lets-encrypt]: https://letsencrypt.org/
[certbot]: https://certbot.eff.org/lets-encrypt/ubuntufocal-nginx "Getting HTTPS with certbot and nginx"
[cloud-link]: https://in-the-cloud.kevinhill.codes "My Vultr VPS Landing Page"
