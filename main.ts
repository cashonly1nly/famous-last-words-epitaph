import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Famous Last Words: The Funniest Epitaph — one-line tombstone epitaph.
// The stone itself delivers the punchline: the quoted last words ask the
// question, and the grave they are carved on is the answer.
// Revised: entry extracted into a named ENTRY constant with a 150-char
// bounty-limit guard, and the output filename into OUTPUT_FILE, so the
// single source of truth for the epitaph is explicit and checkable.
// Output is unchanged: ENTRY is written verbatim to entry.txt.
const ENTRY = "I said, 'What's the worst that could happen?' This is it.";
const OUTPUT_FILE = "entry.txt";
const MAX_ENTRY_CHARS = 150;

if (ENTRY.length > MAX_ENTRY_CHARS) {
  throw new Error(`Entry is ${ENTRY.length} chars, over the ${MAX_ENTRY_CHARS}-char limit`);
}

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, OUTPUT_FILE), ENTRY, "utf8");
