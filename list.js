import { readdirSync, statSync } from "fs";
import { join, basename } from "path";

const IGNORE = new Set(["node_modules", ".git", ".next", ".vercel", ".vscode"]);

function printTree(dir, prefix = "") {
  const items = readdirSync(dir).filter(f => !IGNORE.has(f));
  const entries = items.map(f => join(dir, f));

  entries.forEach((entry, index) => {
    const name = basename(entry);
    const isLast = index === entries.length - 1;
    const connector = isLast ? "└── " : "├── ";

    console.log(prefix + connector + name);

    if (statSync(entry).isDirectory()) {
      printTree(entry, prefix + (isLast ? "    " : "│   "));
    }
  });
}

printTree(".");
