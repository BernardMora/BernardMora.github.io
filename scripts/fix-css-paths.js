// scripts/fix-css-paths.js
const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Get the base path from environment or use default
const basePath =
  process.env.NODE_ENV === "production" ? "/BernardMoragithubiocopy" : "";

// Find all HTML files in the out directory
const htmlFiles = glob.sync("out/**/*.html");

htmlFiles.forEach((file) => {
  let content = fs.readFileSync(file, "utf8");

  // Fix CSS paths by adding the base path
  content = content.replace(
    /(href=["'])(\/_next\/static\/css\/[^"']+["'])/g,
    `$1${basePath}$2`
  );

  fs.writeFileSync(file, content);
  console.log(`Fixed CSS paths in ${file}`);
});

console.log("CSS path fixing complete!");
