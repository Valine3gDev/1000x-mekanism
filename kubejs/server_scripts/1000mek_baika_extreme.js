// Super Ores 互換性
onEvent('recipes', event => {
    /**
     * ore_multiplier:superoresで設定されている鉱石の倍率  
     * output_multiplier:  
     *      processing_type[0]==0:[enriching得られるingotやgem等の数,inejectすると得られるアイテム数,purifyingすると得られるアイテムの数]  
     *      processing_type[0]==1:enrichすると得られるアイテムの数  
     * processing_type:  
     *      [0]==0のとき:enriching,injecting,purifyingができる。  
     *          [1]==0のとき:懸濁液は鉱石1つあたり (Math.floor(multiplier * 125) * 20)mB  
     *          [1]==1のとき:懸濁液は鉱石1つあたり2500mB  
     *      [0]==1のとき:enriching,purifyingができない  
     *      [0]==2のとき:enriching,injecting,purifyingができる。ただし、compressed~系に処理したらなるもの  
     *          [1]==0のとき:minecraftで追加される鉱石  
     *          [1]==1のとき:mekanismで追加される鉱石  
     */
    let processing_dict = {
        "diamond":       { "ore_multiplier": 3, "output_multiplier": 2, "processing_type": [1] },
        "emerald":       { "ore_multiplier": 3, "output_multiplier": 2, "processing_type": [1] },
        "coal":          { "ore_multiplier": 3, "output_multiplier": 2, "processing_type": [1] },
        "lapis_lazuli":  { "ore_multiplier": 3, "output_multiplier": 12, "processing_type": [1] },
        "redstone":      { "ore_multiplier": 4, "output_multiplier": [12, 3, 6], "processing_type": [0, 0] },
        "certus_quartz": { "ore_multiplier": 3, "output_multiplier": [6, 4, 8], "processing_type": [0, 0] },
        "quartz":        { "ore_multiplier": 3, "output_multiplier": [6, 4, 8], "processing_type": [0, 1] },
        "fluorite":      { "ore_multiplier": 3, "output_multiplier": [6, 4, 8], "processing_type": [0, 1], "item_name_override": "mekanism:fluorite_gem" },
        "iridium":       { "ore_multiplier": 3, "processing_type": [2, 1] }
    }
    let appendix_extreme = (input_item) => {
        let ore_type = /superores:super_(deepslate_)?(nether_)?(.+)_ore/.exec(input_item)[3]
        let multiplier = (ore_type in processing_dict) ? processing_dict[ore_type]["ore_multiplier"] : 3
        let processing_type = (ore_type in processing_dict) ? processing_dict[ore_type]["processing_type"] : [2, 0]
        if (processing_type[0] == 0) {
            let output_multiplier = processing_dict[ore_type]["output_multiplier"]
            let input_item_overrided = ("item_name_override" in processing_dict[ore_type]) ? processing_dict[ore_type]["item_name_override"] : `minecraft:${ore_type}`
            event.recipes.mekanism.enriching( // 2
                `${Math.floor(multiplier * output_multiplier[0])}x ${input_item_overrided}`,
                input_item
            )
            event.recipes.mekanism.purifying( // 3
                `${Math.floor(multiplier * output_multiplier[1])}x mek1000:softore_${ore_type}`,
                input_item,
                '1x mekanism:oxygen'
            )
            event.recipes.mekanism.injecting( // 4
                `${Math.floor(multiplier * output_multiplier[2])}x mek1000:extructed_${ore_type}`,
                input_item,
                '1x mekanism:hydrogen_chloride'
            )
            event.custom({ // 5-0
                type: "mekanism:dissolution",
                itemInput: {
                    "ingredient": { "item": input_item }
                },
                gasInput: {
                    "amount": (processing_type[1] == 0) ? Math.max(1, Math.floor(multiplier * 0.5)) : 1,
                    "gas": "mekanism:sulfuric_acid"
                },
                output: {
                    "slurry": `mek1000:dirty_${ore_type}`,
                    "amount": (processing_type[1] == 0) ? Math.floor(multiplier * 125) * 20 : 2500,
                    "chemicalType": "slurry"
                }
            })
        } else if (processing_type[0] == 1) {
            let input_multiplier = processing_dict[ore_type]["output_multiplier"]
            event.recipes.mekanism.enriching(
                `${Math.floor(multiplier * input_multiplier)}x minecraft:${ore_type}`,
                input_item,
                '1x mekanism:oxygen'
            )
        } else if (processing_type[0] == 2) {
            event.recipes.mekanism.enriching(
                `${Math.floor(multiplier * 9)}x ${processing_type[1] == 0 ? "mekanism" : "kubejs"}:dust_${ore_type}`,
                input_item
            )
            event.recipes.mekanism.purifying(
                `${Math.floor(multiplier * 4)}x mek1000:compressed_${ore_type}_clump`,
                input_item,
                '1x mekanism:oxygen'
            )
            event.recipes.mekanism.injecting(
                `${Math.floor(multiplier * 8)}x mek1000:compressed_${ore_type}_shard`,
                input_item,
                '1x mekanism:hydrogen_chloride'
            )
            event.custom({
                type: "mekanism:dissolution",
                itemInput: {
                    "ingredient": { "item": input_item }
                },
                gasInput: {
                    "amount": Math.max(1, Math.floor(multiplier * 0.5)),
                    "gas": "mekanism:sulfuric_acid"
                },
                output: {
                    "slurry": "mek1000:dirty_compressed_" + ore_type,
                    "amount": Math.floor(multiplier * 67.5) * 20,
                    "chemicalType": "slurry"
                }
            })
        } else {
            Error("processing_type not found")
        }
    }
    // 最低倍率は1まで、1刻みで設定 (1で 製錬鉱石は通常の[9/8]倍、濃縮やレッドストーンは通常の1倍）
    // Super Oresの倍率に依存させる
    let ores = []
    let ores_normal = [ // deepslateな鉱石とそうでない鉱石があるやつら
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
        "fluorite"
    ]
    let ores_other = [ // その他
        "nether_gold",
        "iridium",
        "nether_quartz"
    ]
    ores_normal.forEach((ore) => {
        ores.push(`superores:super_${ore}_ore`)
        ores.push(`superores:super_deepslate_${ore}_ore`)
    })
    ores_other.forEach((ore) => {
        ores.push(`superores:super_${ore}_ore`)
    })
    ores.forEach((ore) => {
        appendix_extreme(ore)
    })
})