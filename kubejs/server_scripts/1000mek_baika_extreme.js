// Super Ores 互換性
onEvent("recipes", (event) => {
    /**
     * 各鉱石資源ごとに、どんな方法で処理できるか、また何倍化できるか、値をオーバーライドする。
     * output_multiplier:
     *      processing_type==0のとき:[enrichingすると得られるingotやgem等の数,injectすると得られるアイテム数,purifyingすると得られるアイテムの数]
     *      processing_type==1のとき:enrichingすると得られるアイテムの数
     * processing_type:
     *     実行できる加工方法を定義する
     *      0のとき:enriching,injecting,purifyingができる。
     *      1のとき:enrichingのみできる。
     *      2のとき:enriching,injecting,purifyingができる。ただし、compressed~系に処理したらなるもの  output_multiplierの設定不要。
     * is_kubejs:
     *      falseまたは未定義のとき:mekanismで追加される鉱石として処理する
     *      trueのとき:kubejsで追加される鉱石として処理する
     * enriched_item_name_override:
     *     enrichingの成果物は鉱石アイテムのIDから自動検出された値が使用されるが、これに誤りがある場合は成果物をオーバーライドできる
     *      未定義:自動検出された値を成果物に用いる
     *      その他:成果物を指定した値にオーバーライドする。processing_typeが0のときのみ使用できる
     */
    const processing_dict = {
        diamond: { ore_multiplier: { normal: 3, deepslate: 3 }, output_multiplier: 2, processing_type: 1 },
        emerald: { ore_multiplier: { normal: 3, deepslate: 3 }, output_multiplier: 2, processing_type: 1 },
        coal: { ore_multiplier: { normal: 3, deepslate: 3 }, output_multiplier: 2, processing_type: 1 },
        lapis_lazuli: { ore_multiplier: { normal: 3, deepslate: 3 }, output_multiplier: 12, processing_type: 1 },
        redstone: { ore_multiplier: { normal: 4, deepslate: 4 }, output_multiplier: [12, 3, 6], processing_type: 0 },
        // 何故かもともとのコードからケルタスのレシピの登録ないのに倍加倍率の設定はあった。理由は知らん。前のコードははーすむさんが書きました。
        certus_quartz: { ore_multiplier: { normal: 3, deepslate: 3 }, output_multiplier: [6, 4, 8], processing_type: 0 },
        quartz: { ore_multiplier: { nether: 3 }, output_multiplier: [6, 4, 8], processing_type: 0 },
        fluorite: { ore_multiplier: { normal: 3, deepslate: 3 }, output_multiplier: [6, 4, 8], processing_type: 0,
            enriched_item_name_override: "mekanism:fluorite_gem" },
        iridium: { ore_multiplier: { normal: 3 }, processing_type: 2, is_kubejs: true },
    };
    const appendix_extreme = (input_item) => {
        const ore_regex = /superores:super_(deepslate|nether)?_?(.+)_ore/.exec(input_item);
        const ore_kind = ore_regex[2];
        const ore_type = (ore_regex[1] === undefined) ? "normal" : ore_regex[1]; // メモ: 配列の範囲外へアクセスすると例外の代わりにundefinedが返ってくる丁寧な仕様
        const is_registered_on_processing_dict = (ore_kind in processing_dict);
        const multiplier = is_registered_on_processing_dict ? processing_dict[ore_kind]["ore_multiplier"][ore_type] : 3;
        const processing_type = is_registered_on_processing_dict ? processing_dict[ore_kind]["processing_type"] : 2;
        if (processing_type === 0) {
            const output_multiplier = processing_dict[ore_kind]["output_multiplier"];
            const input_item_overrided = ("enriched_item_name_override" in processing_dict[ore_kind]) ? processing_dict[ore_kind]["enriched_item_name_override"] : `minecraft:${ore_kind}`;
            event.recipes.mekanism.enriching( // 2
                `${Math.floor(multiplier * output_multiplier[0])}x ${input_item_overrided}`,
                input_item,
            );
            event.recipes.mekanism.purifying( // 3
                `${Math.floor(multiplier * output_multiplier[1])}x mek1000:softore_${ore_kind}`,
                input_item,
                "1x mekanism:oxygen",
            );
            event.recipes.mekanism.injecting( // 4
                `${Math.floor(multiplier * output_multiplier[2])}x mek1000:extructed_${ore_kind}`,
                input_item,
                "1x mekanism:hydrogen_chloride",
            );
            event.custom({ // 5-0
                type: "mekanism:dissolution",
                itemInput: {
                    ingredient: { item: input_item },
                },
                gasInput: {
                    amount: Math.max(1, Math.floor(multiplier * 0.5)),
                    gas: "mekanism:sulfuric_acid",
                },
                output: {
                    slurry: `mek1000:dirty_${ore_kind}`,
                    amount: Math.floor(multiplier * 125) * 20,
                    chemicalType: "slurry",
                },
            });
        }
        else if (processing_type === 1) {
            const input_multiplier = processing_dict[ore_kind]["output_multiplier"];
            event.recipes.mekanism.enriching(
                `${Math.floor(multiplier * input_multiplier)}x minecraft:${ore_kind}`,
                input_item,
                "1x mekanism:oxygen",
            );
        }
        else if (processing_type === 2) {
            const is_kubejs = is_registered_on_processing_dict && (processing_dict[ore_kind]["is_kubejs"] === true);
            event.recipes.mekanism.enriching(
                `${Math.floor(multiplier * 9)}x ${is_kubejs ? "kubejs" : "mekanism"}:dust_${ore_kind}`,
                input_item,
            );
            event.recipes.mekanism.purifying(
                `${Math.floor(multiplier * 4)}x mek1000:compressed_${ore_kind}_clump`,
                input_item,
                "1x mekanism:oxygen",
            );
            event.recipes.mekanism.injecting(
                `${Math.floor(multiplier * 8)}x mek1000:compressed_${ore_kind}_shard`,
                input_item,
                "1x mekanism:hydrogen_chloride",
            );
            event.custom({
                type: "mekanism:dissolution",
                itemInput: {
                    ingredient: { item: input_item },
                },
                gasInput: {
                    amount: Math.max(1, Math.floor(multiplier * 0.5)),
                    gas: "mekanism:sulfuric_acid",
                },
                output: {
                    slurry: `mek1000:dirty_compressed_${ore_kind}`,
                    amount: Math.floor(multiplier * 67.5) * 20,
                    chemicalType: "slurry",
                },
            });
        }
        else {
            throw new RangeError("processing_type must be between 0 and 2");
        }
    };
    // 最低倍率は1まで、1刻みで設定 (1で 製錬鉱石は通常の[9/8]倍、濃縮やレッドストーンは通常の1倍）
    // Super Oresの倍率に依存させる
    const ores = [];
    const ores_normal = [ // deepslateな鉱石とそうでない鉱石があるやつら
        "coal",
        "copper",
        "diamond",
        "emerald",
        "gold",
        "iron",
        "lapis_lazuli",
        "redstone",
        "osmium",
        "tin",
        "uranium",
        "fluorite",
    ];
    const ores_other = [ // その他
        "nether_gold",
        "iridium",
        "nether_quartz",
    ];
    ores_normal.forEach((ore) => {
        ores.push(`superores:super_${ore}_ore`);
        ores.push(`superores:super_deepslate_${ore}_ore`);
    });
    ores_other.forEach((ore) => {
        ores.push(`superores:super_${ore}_ore`);
    });
    ores.forEach((ore) => {
        appendix_extreme(ore);
    });
});
