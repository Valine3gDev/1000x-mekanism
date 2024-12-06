#!/bin/bash

# 出力するファイル名
PACK_FILE_NAME="extraordinary-energy"

# エラー時にスクリプトを停止する
set -euo pipefail

function echoerr() {
    echo "$@" 1>&2
}

echoerr 既存のpacktmpディレクトリを削除
rm -rf packtmp/ || true

echoerr packtmpディレクトリを構築
mkdir packtmp/
cp -r LICENSE modlist.html README.md packtmp/

echoerr packtmp/manifest.jsonを構築
PACK_VERSION=$(node -e "
const fs = require('fs');
const manifest = JSON.parse(fs.readFileSync('manifest.json', 'utf8'));
console.log(manifest.version);
")
cp manifest.json packtmp/

echoerr packtmp/overridesディレクトリを構築
mkdir packtmp/overrides/
cp -r config/ kubejs/ multiblocked/ mods/ packtmp/overrides/

echoerr 既存のpackディレクトリを削除
rm -rf pack/ || true

echoerr packディレクトリを作成
mkdir pack/

echoerr packtmpディレクトリを圧縮
cd packtmp/
zip -qr ../pack/$PACK_FILE_NAME-$PACK_VERSION.zip *

echoerr 保存完了
echo $PACK_FILE_NAME-$PACK_VERSION
