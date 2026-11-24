import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "A web of copper wires carries letters at the speed of lightning, so any man may read any book and speak to any stranger on earth from his own parlour.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
