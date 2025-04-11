// 追加パック4: 6倍(嘘)
/*
    レシピ：
    　精製原石は5倍化の原石に相当する
    　精製原石は王水に各鉱石を反応させることで一定数生成可能
    　　原石は精製原石2つ、鉱石は精製原石6つ。レッドストーンなどは実装予定なし
    　ただし、王水は精製原石1つあたり100mB必要。
    　王水は液化塩化水素＋硫酸の加圧反応で生成する
    　王水は保管できない。この性質をもとに、気化レッドストーンと混ぜることで反応させるという方式に加え、
    　核物質としての取り扱いを強いる。
*/
onEvent("recipes", (event) => {
    event.custom({
        type: "mekanism:chemical_infusing", chemicalType: "gas", leftInput: { gas: "mek1000:aqua_regia", amount: 100 }, rightInput: { gas: "mek1000:activated_redstone", amount: 1 }, output: { gas: "mek1000:active_aqua_regia", amount: 100 },
    });
    event.custom({ type: "mekanism:reaction",
        itemInput: { item: "minecraft:redstone", amount: 1 },
        gasInput: { amount: 1, gas: "mekanism:steam" },
        fluidInput: { amount: 1, tag: "minecraft:water" },
        energyRequired: 1, duration: 1,
        gasOutput: { gas: "mek1000:activated_redstone", amount: 1 },
    });
    event.custom({ type: "mekanism:reaction",
        itemInput: { item: "minecraft:redstone_block", amount: 1 },
        gasInput: { amount: 9, gas: "mekanism:steam" },
        fluidInput: { amount: 9, tag: "minecraft:water" },
        energyRequired: 1, duration: 8,
        gasOutput: { gas: "mek1000:activated_redstone", amount: 9 },
    });
    event.custom({ type: "mekanism:reaction",
        itemInput: { item: "minecraft:redstone_block", amount: 1 },
        gasInput: { amount: 9, gas: "mek1000:activated_redstone" },
        fluidInput: { amount: 9, tag: "minecraft:water" },
        energyRequired: 1, duration: 8,
        gasOutput: { gas: "mek1000:activated_redstone", amount: 24 },
    });
    event.custom({ type: "mekanism:reaction",
        itemInput: { item: "mekanism:shard_iron" },
        fluidInput: { amount: 75, fluid: "mekanism:hydrogen_chloride" },
        gasInput: { amount: 25, gas: "mekanism:sulfuric_acid" },
        energyRequired: 10000, duration: 10,
        itemOutput: { item: "mekanism:shard_iron" },
        gasOutput: { gas: "mek1000:aqua_regia", amount: 5 },
    });
    event.custom({ type: "mekanism:reaction",
        itemInput: { item: "mekanism:shard_gold" },
        fluidInput: { amount: 75, fluid: "mekanism:hydrogen_chloride" },
        gasInput: { amount: 25, gas: "mek1000:nitric_acid" },
        energyRequired: 1, duration: 1,
        itemOutput: { item: "mekanism:shard_gold" },
        gasOutput: { gas: "mek1000:aqua_regia", amount: 100 },
    });

    // Add: 硝酸
    // mekanism:nutritional_paste
    event.custom({ type: "mekanism:reaction",
        itemInput: { item: "mekanism:shard_copper" },
        fluidInput: { amount: 1000, fluid: "mekanism:nutritional_paste" },
        gasInput: { amount: 10, gas: "mekanism:water_vapor" },
        energyRequired: 1000, duration: 100,
        itemOutput: { item: "mekanism:shard_copper" },
        gasOutput: { gas: "mek1000:no2", amount: 300 },
    });
    event.custom({
        type: "mekanism:chemical_infusing", chemicalType: "gas", leftInput: { gas: "mek1000:no2", amount: 1 }, rightInput: { gas: "mekanism:water_vapor", amount: 1 }, output: { gas: "mek1000:nitric_acid", amount: 1 },
    });

    const advanced_processing_mk2 = (type, outputs_5, mode, super_ore, super_dore, super_nore) => {
        // スタートアップ(鉱石->各種中間生成物へ):

        event.custom({ type: "mekanism:reaction",
            itemInput: { tag: `forge:raw_materials/${type}` },
            fluidInput: { amount: 75, tag: "minecraft:water" },
            gasInput: { amount: 90, gas: "mek1000:active_aqua_regia" },
            energyRequired: 10, duration: 2,
            itemOutput: { item: `mek1000:purified_${type}_rawore`, amount: 6 },
        });
        event.custom({ type: "mekanism:reaction",
            itemInput: { tag: `forge:ores/${type}` },
            fluidInput: { amount: 100, tag: "minecraft:water" },
            gasInput: { amount: 120, gas: "mek1000:active_aqua_regia" },
            energyRequired: 10, duration: 6,
            itemOutput: { item: `mek1000:purified_${type}_rawore`, amount: 8 },
        });
        event.custom({ type: "mekanism:reaction",
            itemInput: { tag: `forge:storage_blocks/raw_${type}` },
            fluidInput: { amount: 675, tag: "minecraft:water" },
            gasInput: { amount: 810, gas: "mek1000:active_aqua_regia" },
            energyRequired: 10, duration: 18,
            itemOutput: { item: `mek1000:compressed_purified_${type}_rawore`, amount: 6 },
        });

        event.custom({ type: "mekanism:reaction",
            itemInput: { tag: `forge:raw_materials/${type}` },
            fluidInput: { amount: 6, tag: "minecraft:water" },
            gasInput: { amount: 3, gas: "mekanism:antimatter" },
            energyRequired: 120, duration: 20,
            gasOutput: { gas: "mek1000:active_" + type, amount: 30 },
        });
        event.custom({ type: "mekanism:reaction",
            itemInput: { tag: `forge:ores/${type}` },
            fluidInput: { amount: 8, tag: "minecraft:water" },
            gasInput: { amount: 4, gas: "mekanism:antimatter" },
            energyRequired: 160, duration: 20,
            gasOutput: { gas: "mek1000:active_" + type, amount: 40 },
        });
        event.custom({ type: "mekanism:reaction",
            itemInput: { tag: `forge:storage_blocks/raw_${type}` },
            fluidInput: { amount: 54, tag: "minecraft:water" },
            gasInput: { amount: 27, gas: "mekanism:antimatter" },
            energyRequired: 1080, duration: 20,
            gasOutput: { gas: "mek1000:active_" + type, amount: 270 },
        });

        if (super_ore) {
            event.custom({ type: "mekanism:reaction",
                itemInput: { item: `superores:super_${type}_ore` },
                fluidInput: { amount: 400, tag: "minecraft:water" },
                gasInput: { amount: 600, gas: "mek1000:active_aqua_regia" },
                energyRequired: 50, duration: 6,
                itemOutput: { item: `mek1000:purified_${type}_rawore`, amount: 40 },
            });
            event.custom({ type: "mekanism:reaction",
                itemInput: { item: `superores:super_${type}_ore` },
                fluidInput: { amount: 32, tag: "minecraft:water" },
                gasInput: { amount: 16, gas: "mekanism:antimatter" },
                energyRequired: 800, duration: 20,
                gasOutput: { gas: "mek1000:active_" + type, amount: 200 },
            });
        } if (super_dore) {
            event.custom({ type: "mekanism:reaction",
                itemInput: { item: `superores:super_deepslate_${type}_ore` },
                fluidInput: { amount: 400, tag: "minecraft:water" },
                gasInput: { amount: 600, gas: "mek1000:active_aqua_regia" },
                energyRequired: 50, duration: 6,
                itemOutput: { item: `mek1000:purified_${type}_rawore`, amount: 40 },
            });
            event.custom({ type: "mekanism:reaction",
                itemInput: { item: `superores:super_deepslate_${type}_ore` },
                fluidInput: { amount: 32, tag: "minecraft:water" },
                gasInput: { amount: 16, gas: "mekanism:antimatter" },
                energyRequired: 800, duration: 20,
                gasOutput: { gas: "mek1000:active_" + type, amount: 200 },
            });
        } if (super_nore) {
            event.custom({ type: "mekanism:reaction",
                itemInput: { item: `superores:super_nether_${type}_ore` },
                fluidInput: { amount: 400, tag: "minecraft:water" },
                gasInput: { amount: 600, gas: "mek1000:active_aqua_regia" },
                energyRequired: 50, duration: 6,
                itemOutput: { item: `mek1000:purified_${type}_rawore`, amount: 40 },
            });
            event.custom({ type: "mekanism:reaction",
                itemInput: { item: `superores:super_nether_${type}_ore` },
                fluidInput: { amount: 32, tag: "minecraft:water" },
                gasInput: { amount: 16, gas: "mekanism:antimatter" },
                energyRequired: 800, duration: 20,
                gasOutput: { gas: "mek1000:active_" + type, amount: 200 },
            });
        }

        // 5..6倍化:
        if (mode == "ore") {
            event.custom({
                type: "mekanism:dissolution", itemInput: { ingredient: { item: `mek1000:compressed_purified_${type}_rawore` } }, gasInput: { amount: 9, gas: "mekanism:sulfuric_acid" }, output: { slurry: "mek1000:dirty_compressed_" + type, amount: outputs_5 * 9, chemicalType: "slurry" },
            });
            event.custom({
                type: "mekanism:dissolution", itemInput: { ingredient: { item: `mek1000:purified_${type}_rawore` } }, gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" }, output: { slurry: "mek1000:dirty_compressed_" + type, amount: outputs_5, chemicalType: "slurry" },
            });
        }
        else if (mode == "gem") {
            event.custom(
                { type: "mekanism:washing", fluidInput: { amount: 5, tag: "minecraft:water" }, slurryInput: { amount: 1, slurry: `mek1000:dirty_${type}` }, output: { slurry: `mek1000:clean_${type}`, amount: 10 } },
            );
            event.custom({
                type: "mekanism:dissolution", itemInput: { ingredient: { item: `mek1000:compressed_purified_${type}_rawore` } }, gasInput: { amount: 4, gas: "mekanism:sulfuric_acid" }, output: { slurry: "mek1000:dirty_" + type, amount: outputs_5 * 4, chemicalType: "slurry" },
            });
            event.custom({
                type: "mekanism:dissolution", itemInput: { ingredient: { item: `mek1000:purified_${type}_rawore` } }, gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" }, output: { slurry: "mek1000:dirty_" + type, amount: outputs_5, chemicalType: "slurry" },
            });
        }
        else {
            event.custom(
                { type: "mekanism:washing", fluidInput: { amount: 5, tag: "minecraft:water" }, slurryInput: { amount: 1, slurry: `mek1000:dirty_${type}` }, output: { slurry: `mek1000:clean_${type}`, amount: 10 } },
            );
            event.custom({
                type: "mekanism:dissolution", itemInput: { ingredient: { item: `mek1000:compressed_purified_${type}_rawore` } }, gasInput: { amount: 9, gas: "mekanism:sulfuric_acid" }, output: { slurry: "mek1000:dirty_" + type, amount: outputs_5 * 5, chemicalType: "slurry" },
            });
            event.custom({
                type: "mekanism:dissolution", itemInput: { ingredient: { item: `mek1000:purified_${type}_rawore` } }, gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" }, output: { slurry: "mek1000:dirty_" + type, amount: outputs_5, chemicalType: "slurry" },
            });
        }

        // 6..7倍化:
        event.custom({ type: "mekanism:reaction",
            itemInput: { item: `mek1000:crystalized_${type}_rawore` },
            fluidInput: { amount: 75, tag: "minecraft:water" },
            gasInput: { amount: 100, gas: "mek1000:active_aqua_regia" },
            energyRequired: 10, duration: 3,
            itemOutput: { item: `mek1000:compressed_purified_${type}_rawore`, amount: 1 },
        });
        event.custom({
            type: "mekanism:crystallizing",
            chemicalType: "gas",
            input: {
                amount: 10,
                gas: "mek1000:purified_" + type,
            },
            output: {
                amount: 2,
                item: `mek1000:crystalized_${type}_rawore`,
            },
        });
        event.custom({
            type: "mekanism:chemical_infusing", chemicalType: "gas", leftInput: { gas: "mek1000:aqua_regia", amount: 100 }, rightInput: { gas: "mek1000:active_" + type, amount: 10 }, output: { gas: "mek1000:purified_" + type, amount: 10 },
        });

        // mbd用
    };

    // ore: 鉱石から 6倍化で ×80 , 7倍化で ×720 mbになる. ただし圧縮.
    advanced_processing_mk2("iron", 1000, "ore", true, true, false);
    advanced_processing_mk2("copper", 1000, "ore", true, true, false);
    advanced_processing_mk2("gold", 1000, "ore", true, true, true);
    advanced_processing_mk2("tin", 1000, "ore", true, true, false);
    advanced_processing_mk2("osmium", 1000, "ore", true, true, false);
    advanced_processing_mk2("uranium", 1000, "ore", true, true, false);
    advanced_processing_mk2("lead", 1000, "ore", true, true, false);
    advanced_processing_mk2("iridium", 1000, "ore", true, false, false); // イリジウムはこのままでは倍化ができないので後述で追加。なお倍率

    // gem: 鉱石から 6倍化で ×80 , 7倍化で ×320 mbになる.
    advanced_processing_mk2("redstone", 2500, "gem", true, true, false);
    advanced_processing_mk2("quartz", 2500, "gem", false, false, true);
    advanced_processing_mk2("certus_quartz", 2500, "gem", false, false, false);
    advanced_processing_mk2("fluorite", 2500, "gem", true, true, false);

    // 特殊: 鉱石から 6倍化で ×80 , 7倍化で ×400 mbになる.
    // 補足: 当初は720だったが、ラピスラズリ34万倍化が開始されてしまったのでやむを得ずナーフ.
    advanced_processing_mk2("coal", 200, "", true, true, false);
    advanced_processing_mk2("diamond", 200, "", true, true, false);
    advanced_processing_mk2("emerald", 200, "", true, true, false);
    advanced_processing_mk2("lapis", 200, "", false, false, false);

    // イリジウム専用
    event.custom({ type: "mekanism:reaction",
        itemInput: { item: "ultimatesolarpanels:iridium_ore" },
        fluidInput: { amount: 100, tag: "minecraft:water" },
        gasInput: { amount: 120, gas: "mek1000:active_aqua_regia" },
        energyRequired: 10, duration: 6,
        itemOutput: { item: `mek1000:purified_iridium_rawore`, amount: 8 },
    });
    event.custom({ type: "mekanism:reaction",
        itemInput: { item: "ultimatesolarpanels:iridium_ore" },
        fluidInput: { amount: 8, tag: "minecraft:water" },
        gasInput: { amount: 4, gas: "mekanism:antimatter" },
        energyRequired: 160, duration: 20,
        gasOutput: { gas: "mek1000:active_iridium", amount: 40 },
    });

    // 新規鉱石倍加
    const jumping_processing = (type, output_item, output_1, bridge) => {
        event.recipes.mekanism.enriching(`${output_1}x ${output_item}`, `mek1000:dirty_dust_${type}`, "1x mekanism:oxygen");
        event.custom({
            type: "mekanism:crushing",
            input: {
                count: 1,
                tag: "mekanism:clumps/" + type,
            },
            output: {
                count: 1,
                item: "mek1000:dirty_dust_" + type,
            },
        });
        event.recipes.mekanism.purifying(`2x mek1000:clump_` + type, `mek1000:shard_` + type, "1x mekanism:oxygen");
        event.custom({
            type: "mekanism:injecting",
            itemInput: {
                ingredient: {
                    tag: "mekanism:crystals/" + type,
                },
            },
            chemicalInput: {
                amount: 1,
                gas: "mekanism:hydrogen_chloride",
            },
            output: {
                item: "mek1000:shard_" + type,
            },
        });
        event.custom({
            type: "mekanism:crystallizing",
            chemicalType: "slurry",
            input: {
                amount: 10,
                slurry: "mek1000:clean_" + type,
            },
            output: {
                item: "mek1000:crystal_" + type,
            },
        });
        if (bridge) {
            event.custom({
                type: "mekanism:crushing",
                input: {
                    count: 1,
                    tag: "forge:ores/" + type,
                },
                output: {
                    count: 6,
                    item: "mek1000:dirty_dust_" + type,
                },
            });
        }
    };

    jumping_processing("lapis", "minecraft:lapis_lazuli", 12, true);
    jumping_processing("coal", "minecraft:coal", 4, true);

    // ダイヤ・エメラルド:

    event.custom({
        type: "mekanism:crystallizing",
        chemicalType: "slurry",
        input: {
            amount: 10,
            slurry: "mek1000:clean_diamond",
        },
        output: {
            amount: 1,
            item: "minecraft:diamond",
        },
    });

    event.custom({
        type: "mekanism:crystallizing",
        chemicalType: "slurry",
        input: {
            amount: 10,
            slurry: "mek1000:clean_emerald",
        },
        output: {
            amount: 1,
            item: "minecraft:emerald",
        },
    });
});
