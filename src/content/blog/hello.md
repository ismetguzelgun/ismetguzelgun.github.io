---
title: "Hello"
date: 2026-04-28
description: "First post. Also: how this blog works."
---

This is the first post on the new site. I rebuilt it in Astro so I can write
without fighting toolchains every time.

## How this works

I hate Jekyll. That's all.

## Markdown in 60 seconds

The full reference is at [commonmark.org](https://commonmark.org/help/), but
nearly every post needs only this much:

```
## A heading

A paragraph with a [link](https://example.com), some **bold** text,
and a little `inline code`.

- a list item
- another list item

> A blockquote, for when someone said it better.
```

That covers maybe 95% of writing. The rest you learn when you need it.

## Photos

Drop the image file next to the post (or in a folder beside it) and reference
it with a relative path:

```
![Alt text describing the photo](./desk.jpg)
```

Astro automatically optimizes it — resizes, compresses, converts to WebP — at
build time. A 4MB iPhone photo becomes a ~200KB image without me doing
anything. No CDN, no service, no extra step.

## What's next

A handful of pieces I've been meaning to write: notes on architecture, on
keeping things small, and on the gap between what enterprise software is and
what it could be.
