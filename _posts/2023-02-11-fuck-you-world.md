---
layout: post
title: Fuck you, world!
description: First post
summary: First post
comments: true
tags: [tag]
---

Hey there, this is the first post on my blog

just trying out some stuff, doing stuff...

> is there any point to this?

no, just like everything, this is all meaningless

this is just a js function to get the current time in Prague:
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
    var h = timeString.split(":")[0];
    var m = timeString.split(":")[1];
    document.getElementsByClassName("time")[0].innerHTML = h + ":" + m;
    setTimeout(startTime, 1000);
}
startTime();
```