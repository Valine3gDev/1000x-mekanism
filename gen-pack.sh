#!/bin/bash

# エラー時にスクリプトを停止する
set -euo pipefail

function echoerr() {
    echo "$@" 1>&2
}

echoerr コンフィグをロード
source ./gen-pack-config.sh
: $PACK_FILE_NAME $PACK_INTERNAL_NAME $PACK_VERSION

echoerr 既存のpacktmpディレクトリを削除
rm -rf packtmp/ || true

echoerr packtmpディレクトリを構築
mkdir packtmp/
cp -r LICENSE modlist.html README.md packtmp/

echoerr packtmp/manifest.jsonを構築
sed -e "s/{PACK_NAME}/$PACK_FILE_NAME/g" \
    -e "s/{PACK_INTERNAL_NAME}/$PACK_INTERNAL_NAME/g" \
    -e "s/{PACK_VERSION}/$PACK_VERSION/g" \
    manifest.json > packtmp/manifest.json

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
echo pack/$PACK_FILE_NAME-$PACK_VERSION.zip
