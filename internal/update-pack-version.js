const fs = require('fs');
const path = require('path');
const utils = require('./utils.js');

if (process.argv.length < 3 || process.argv.length > 4) {
  const v1 = path.basename(process.argv[1])
  console.error(`使用法: ${v1} [prefix] major|minor|patch`);
}
const versionPrefix = process.argv.length === 4 ? process.argv[2] : '';
/** @type {"major" | "minor" | "patch"} */
const versionType = process.argv.length === 4 ? process.argv[3] : process.argv[2];
if (!['major', 'minor', 'patch'].includes(versionType)) {
  console.error('バージョンの種類は major, minor, patch のいずれかを指定してください。');
  process.exit(1);
}

const manifest = fs.readFileSync('manifest.json', 'utf8');
const json = JSON.parse(manifest);
/** @type {string} */
const currentVersion = json.version;
let {prefix, major, minor, patch} = utils.parseVersion(currentVersion);
console.error(`現在のバージョン: ${prefix}${major}.${minor}.${patch}`);

if (versionPrefix !== "" && versionPrefix !== prefix) {
  prefix = versionPrefix;
}
if (versionType == 'major') {
  major++;
  minor = 0;
  patch = 0;
} else if (versionType == 'minor') {
  minor++;
  patch = 0;
} else if (versionType == 'patch') {
  patch++;
} else {
  throw new RangeError('バージョンの種類が不正です。');
}
const newVersion = `${prefix}${major}.${minor}.${patch}`;

json.version = newVersion;
fs.writeFileSync('manifest.json', JSON.stringify(json));

console.log(`new_version=${newVersion}`);
