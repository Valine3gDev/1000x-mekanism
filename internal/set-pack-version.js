#!node
import fs from 'fs';
import path from 'path';

if (process.argv.length < 3) {
  console.error(`使用法: ${path.basename(process.argv[1])} <バージョン>`);
  process.exit(1);
}
const version = process.argv[2];

console.log("manifest.jsonをロード");
const manifest = fs.readFileSync('manifest.json', 'utf8');
const json = JSON.parse(manifest);
if (!json.version) {
  console.error('「version」がmanifest.jsonに見つかりません');
  process.exit(1);
}
if (json.version === version) {
  console.error(`バージョンは既に「${version}」です`);
  process.exit(1);
}

console.log("変更を保存");
json.version = version;
fs.writeFileSync('manifest.json', JSON.stringify(json));

console.log(`バージョンを正しく「${version}」に変更しました`);
