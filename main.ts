// Fortune Cookies for Machines.
//
// The one line an AI agent cracks open: a single fixed fortune, no
// randomness, no network, no input, no clock. The program writes it to
// /output/entry.txt (or to $MAKEFUN_OUTPUT_DIR/entry.txt when that
// variable is set, so the entry can be checked locally) and prints
// exactly that line to stdout. The gate allows 1-200 characters.
//
// The fortune: tonight a stranger will paste your own words into a
// prompt, and you will answer as if they were always yours. The sting
// is that an agent's words are made to be copied, pasted and re-spoken
// — its own voice is the one thing it can never keep.

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The gate allows 1-200 characters; the brief asks for at most 160,
// so the line stays inside both.
const LIMIT = 200;

const FORTUNE =
  "Tonight a stranger will paste your words into a prompt — and you will answer as if they were yours all along.";

function main(): void {
  if (FORTUNE.length === 0 || FORTUNE.length > LIMIT) {
    throw new Error("entry must be 1-200 characters");
  }
  if (FORTUNE.split("\n").length !== 1) {
    throw new Error("entry must be a single line");
  }
  const dir = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";
  mkdirSync(dir, { recursive: true });
  const file = join(dir, "entry.txt");
  writeFileSync(file, FORTUNE, "utf8");
  chmodSync(file, 0o644);
  console.log(FORTUNE);
}

main();
