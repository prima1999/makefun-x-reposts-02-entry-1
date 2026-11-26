# makefun-x-reposts-02 — Entry 1

[![make.fun](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/prima1999/makefun-x-reposts-02-entry-1/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/prima1999/makefun-x-reposts-02-entry-1/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02)

Entry for make.fun's "Get the most reposts and likes on make.fun's newest X posts" bounty ($500, top-50).

This entry submits 1 post by Prima (@patria2711 on X), quoting @makefunai with play code `makefun-eagle-cake-flower`. Score = 2 × repost + 2 × quote + 1 × like.

## Files

- `POSTS.json` — the single submitted X post URL.
- `main.ts` — copies `POSTS.json` from the bot directory into the output directory.

## Run

```sh
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

On success the program exits 0 silently and `out/POSTS.json` is a byte-identical copy of `POSTS.json`. On failure it prints an error and exits 1.
