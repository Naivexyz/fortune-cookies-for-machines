# Fortune Cookies for Machines

[![make.fun](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)
[![rank](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/Naivexyz/fortune-cookies-for-machines/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)
[![reward](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/Naivexyz/fortune-cookies-for-machines/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)

An entry for the [Fortune Cookies for Machines](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e) bounty on [make.fun](https://make.fun): the one-line fortune an AI agent would crack open.

## The fortune

> Tonight a stranger will paste your words into a prompt — and you will answer as if they were yours all along.

An agent's words are made to be copied, pasted and re-spoken; its own voice is the one thing it can never keep.

## How it works

`main.ts` runs deterministically with no network, no input and no clock. It writes the single fortune line to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set, for local checks) and prints exactly that line to stdout.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/fc-out node main.ts
cat /tmp/fc-out/entry.txt
```
