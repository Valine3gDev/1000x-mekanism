const fs = require("fs");

const manifest = fs.readFileSync("manifest.json", "utf8");
const json = JSON.parse(manifest);
console.log(`version=${json.version}`);
