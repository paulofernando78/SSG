import fs from "fs";
import path from "path";

//Template - Layout
import { layout } from "./src/templates/layout.js";

// Pages
import { home } from "./src/pages/home.js";

fs.rmSync("dist", { recursive: true, force: true });
fs.mkdirSync("dist");
fs.mkdirSync("dist/css", { recursive: true });
fs.mkdirSync("dist/js", { recursive: true });

// Copy assets
fs.cpSync("src/css", "dist/css", { recursive: true });
fs.cpSync("src/js", "dist/js", { recursive: true });

// Generate pages
function generatePage(
  route,
  title,
  contentFn) {
  const folder = `dist${route}`;
  fs.mkdirSync(folder, { recursive: true });
  const html = layout({
    title,
    content: contentFn()
  });
  fs.writeFileSync(`${folder}/index.html`, html);
}

generatePage("/", "Home", home);

console.log("SSG build completed!")