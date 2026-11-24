import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "A web of copper wires carries letters at the speed of lightning, so any man may read any book and speak to any stranger on earth from his own parlour.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be blank");
}
if (LINE.split("\n").length !== 1) {
  throw new Error("entry must be exactly one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
