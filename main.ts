import { mkdirSync, writeFileSync } from "node:fs";

// One original fortune-cookie line for a developer: the legacy code every
// senior engineer fears touching is the code that knows them best.
const line = "The code you fear to touch is the code that knows you best.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
