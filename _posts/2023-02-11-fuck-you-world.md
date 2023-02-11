---
layout: post
title: Fuck you, world!
description: First post on my blog
summary: First post on my blog
comments: true
tags: [tag]
---

Hey there, this is the first post on my blog

just trying out some stuff, *doing stuff*...

> is there a point to this?

**no**

here's a js function to get the current time in Prague in 24h format:
```js
function startTime() {
    var now = new Date();
    var formatter = new Intl.DateTimeFormat([], {
        timeZone: "Europe/Prague",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });
    var timeString = formatter.format(now);
    var [h, m] = timeString.split(":");
    document.getElementsByClassName("time")[0].innerHTML = h + ":" + m;
    setTimeout(startTime, 1000);
}
startTime();
```

a code line:

`I hate hatsune miku`

[check this out](https://youtu.be/r34UfDH7uBw)

### konata = patrick bateman (real)

![](https://media.tenor.com/images/3e2bf0427a1c7bf78f78bdf9c9faaabb/raw)
![](https://i.kym-cdn.com/photos/images/facebook/001/995/865/43b.jpg)

***impressive, very nice***

~~let's see paul allen's blog~~