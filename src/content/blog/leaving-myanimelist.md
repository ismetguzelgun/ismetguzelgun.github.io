---
title: "Leaving MyAnimeList"
date: 2026-04-29
description: "After ten years on MAL, I migrated to AniList. The data export was the hard part."
---

I've been on MyAnimeList since 2014. It tracks well enough, the community is
fine, and inertia is strong — none of which mattered the moment I wanted to
actually *do* something with my data.

MAL has no public API for users. Not a deprecated one, not a rate-limited one —
none. If you want your own list out, you can ask the site for an XML export.
That's it.

AniList, on the other hand, ships a [public GraphQL API](https://docs.anilist.co/).
You can read your list, write to it, query everything down to per-episode
metadata. So I switched, and I built
[anilist-user-analytics](https://github.com/ismetguzelgun/anilist-user-analytics)
to play with the data — completion patterns, score distributions, runtime
totals, the kind of stats MAL never gave me a way to compute.

That's the easy version of the story. The actual migration was worse than I
expected.

## The completion-date problem

For ten years I marked anime "completed" without setting a finish date. I
assumed MAL would record the date I made the change — that's what any sane
database would do. It doesn't. If you don't enter a date manually, the field
stays empty.

Importing my MAL export into AniList preserved exactly that: thousands of
completed entries with no finish date. Useless for any time-based analysis.

## malexport and Selenium

Fortunately someone hit this problem before me.
[malexport](https://github.com/purarue/malexport) walks through every anime
and manga page on your MAL profile via Selenium, scrapes the activity history
— which *does* record when you changed status — and extracts the implied
completion timestamp.

It is exactly as slow and fragile as it sounds. It's also the only way.

A few hours of headless Chrome later, I had a real per-entry timeline.

## Backfilling AniList over GraphQL

The official MAL XML import to AniList had already created the entries, just
without dates. So I wrote GraphQL mutations to walk every imported entry and
update its `completedAt` field with the timestamps from malexport.

Once that landed, the data was finally what it should have been the whole
time: every anime, with the date I actually finished it.

## What I got

The migration is done. The analytics app works. And I'm no longer locked into
a service that doesn't let me touch my own data — which, ten years in, turned
out to be the only thing I actually cared about.

## Links

- [anilist-user-analytics](https://github.com/ismetguzelgun/anilist-user-analytics) — the stat app I built on top of the AniList GraphQL API
- [malexport](https://github.com/purarue/malexport) — the Selenium-based MAL scraper that recovers activity dates
- [AniList GraphQL API](https://docs.anilist.co/) — official docs
