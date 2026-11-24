import { mkdirSync, writeFileSync } from "node:fs";

const entry = "The deadline slipped because I asked the model for a second opinion and it asked its own model, and now four of us are in a meeting about the meeting.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
