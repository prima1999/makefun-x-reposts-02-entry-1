import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR || "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

try {
  mkdirSync(outputDir, { recursive: true });
  const source = join(botDir, "POSTS.json");
  const target = join(outputDir, "POSTS.json");
  copyFileSync(source, target);
} catch (error) {
  console.error("copy failed:", error instanceof Error ? error.message : String(error));
  process.exit(1);
}
