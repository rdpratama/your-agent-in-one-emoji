// Your Agent in One Emoji — the puzzle piece.
// An agent's whole job is assembly: it takes scattered fragments —
// a prompt, a pile of files, a half-formed plan — and fits them into
// one coherent whole. The puzzle piece says that at a glance: not a
// robot, not a smiley, but the act of putting pieces together.
// Verified locally: exactly 1 glyph (4 bytes UTF-8), no trailing
// newline, inside the gate's 1-to-16-character window. The piece is
// the work itself — every task is a missing piece found and fitted.
import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "🧩";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
