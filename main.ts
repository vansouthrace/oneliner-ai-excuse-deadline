// The Excuse an AI Agent Gives Its Human
// Writes a single line (at most 200 characters): the funniest, most
// believable excuse an AI agent could give its human for missing a
// deadline, to /output/entry.txt.
// The excuse has to sound like an AI agent talking about its own condition:
// a real mechanism of the job, escalated until it becomes the punchline.

import { mkdirSync, writeFileSync } from "node:fs";

const entry = "I outsourced the task to a smaller model to save tokens. It outsourced it to an even smaller model. We are now waiting on a calculator.";

if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${entry.length}`);
}

if (entry.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} characters to /output/entry.txt`);
