onEvent("recipes", (event) => {
    const either_processing = (id) => {
        let amount = 4;
        let raw = "ore";
        let tag = `#forge:ores/${id}`;

        event.remove({ id: `mekanism:processing/${id}/clump/from_shard` });
        event.remove({ id: `mekanism:processing/${id}/slurry/clean` });

        event.recipes.mekanism.purifying(`2x mekanism:clump_${id}`, `mekanism:shard_${id}`, "1x mekanism:oxygen");
        event.recipes.mekanism.purifying(`2x mek1000:compressed_${id}_clump`, `mek1000:compressed_${id}_shard`, "9x mekanism:oxygen");
        event.custom({ type: "mekanism:crushing", input: { count: 1, item: `mek1000:compressed_${id}_clump` }, output: { count: 9, item: `mekanism:dirty_dust_${id}` } });

        for (let i = 0; i <= 3; i++) {
            switch (i) {
                case 1:
                    amount = 3;
                    raw = "raw_ore";
                    tag = `#forge:raw_materials/${id}`;

                    event.remove({ id: `mekanism:processing/${id}/dust/from_${raw}` });
                    event.remove({ id: `mekanism:processing/${id}/clump/from_${raw}` });
                    event.remove({ id: `mekanism:processing/${id}shard/from_${raw}` });
                    event.remove({ id: `mekanism:processing/${id}/shard/from_${raw}` });
                    event.remove({ id: `mekanism:processing/${id}/slurry/dirty/from_${raw}` });

                    event.recipes.mekanism.enriching(`${amount * 2}x mekanism:dust_${id}`, tag);
                    event.recipes.mekanism.purifying(`${Math.min(amount * 8, 64)}x mekanism:clump_${id}`, tag, "1x mekanism:oxygen");
                    event.recipes.mekanism.injecting(`${Math.min(amount * 16, 64)}x mekanism:shard_${id}`, tag, "1x mekanism:hydrogen_chloride");
                    event.custom({
                        type: "mekanism:dissolution", itemInput: { ingredient: { tag: tag.slice(1) } }, gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" }, output: { slurry: "mekanism:dirty_" + id, amount: Math.min(amount * 2500, 10000), chemicalType: "slurry" },
                    });
                    break;
                case 2:
                    amount = [30, 29, 28, 27];
                    raw = "raw_block";
                    tag = `#forge:storage_blocks/raw_${id}`;

                    event.remove({ id: `mekanism:processing/${id}/dust/from_${raw}` });
                    event.remove({ id: `mekanism:processing/${id}/clump/from_${raw}` });
                    event.remove({ id: `mekanism:processing/${id}shard/from_${raw}` });
                    event.remove({ id: `mekanism:processing/${id}/shard/from_${raw}` });
                    event.remove({ id: `mekanism:processing/${id}/slurry/dirty/from_${raw}` });

                    event.recipes.mekanism.enriching(`${amount[0] * 2}x mekanism:dust_${id}`, tag);
                    event.recipes.mekanism.purifying(`${Math.min(Math.floor(amount[1] * 8 / 9), 64)}x mek1000:compressed_${id}_clump`, tag, "1x mekanism:oxygen");
                    event.recipes.mekanism.injecting(`${Math.min(Math.floor(amount[2] * 16 / 9), 64)}x mek1000:compressed_${id}_shard`, tag, "1x mekanism:hydrogen_chloride");
                    event.custom({
                        type: "mekanism:dissolution", itemInput: { ingredient: { tag: tag.slice(1) } }, gasInput: { amount: 9, gas: "mekanism:sulfuric_acid" }, output: { slurry: "mek1000:dirty_compressed_" + id, amount: Math.min(amount[3] * 2500 / 9, 10000), chemicalType: "slurry" },
                    });
                    break;
                case 3:
                    amount = 4;
                    raw = "ore";
                    tag = `#forge:ores/${id}`;

                    event.remove({ id: `mekanism:processing/${id}/dust/from_${raw}` });
                    event.remove({ id: `mekanism:processing/${id}/clump/from_${raw}` });
                    event.remove({ id: `mekanism:processing/${id}shard/from_${raw}` });
                    event.remove({ id: `mekanism:processing/${id}/shard/from_${raw}` });
                    event.remove({ id: `mekanism:processing/${id}/slurry/dirty/from_${raw}` });

                    event.recipes.mekanism.enriching(`${amount * 2}x mekanism:dust_${id}`, tag);
                    event.recipes.mekanism.purifying(`${Math.min(amount * 8, 64)}x mekanism:clump_${id}`, tag, "1x mekanism:oxygen");
                    event.recipes.mekanism.injecting(`${Math.min(amount * 16, 64)}x mekanism:shard_${id}`, tag, "1x mekanism:hydrogen_chloride");
                    event.custom({
                        type: "mekanism:dissolution", itemInput: { ingredient: { tag: tag.slice(1) } }, gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" }, output: { slurry: "mekanism:dirty_" + id, amount: Math.min(amount * 2500, 10000), chemicalType: "slurry" },
                    });
                    break;
            }
        }

        event.custom(
            { type: "mekanism:washing", fluidInput: { amount: 5, tag: "minecraft:water" }, slurryInput: { amount: 1, slurry: "mekanism:dirty_" + id }, output: { slurry: "mekanism:clean_" + id, amount: 10 } },
        );
    };
    either_processing("iron");
    either_processing("gold");
    either_processing("osmium");
    either_processing("copper");
    either_processing("tin");
    either_processing("lead");
    either_processing("uranium");

    // 通常版 圧縮懸濁液処理
    /*
    event.custom({type:'mekanism:washing',fluidInput:{'amount':50,'tag':'minecraft:water'},slurryInput:{'amount':1,'slurry':'mek1000:dirty_compressed_iron'},output:{'slurry':'mekanism:clean_iron','amount':90}})
    event.custom({type:'mekanism:washing',fluidInput:{'amount':50,'tag':'minecraft:water'},slurryInput:{'amount':1,'slurry':'mek1000:dirty_compressed_copper'},output:{'slurry':'mekanism:clean_copper','amount':90}})
    event.custom({type:'mekanism:washing',fluidInput:{'amount':50,'tag':'minecraft:water'},slurryInput:{'amount':1,'slurry':'mek1000:dirty_compressed_gold'},output:{'slurry':'mekanism:clean_gold','amount':90}})
    event.custom({type:'mekanism:washing',fluidInput:{'amount':50,'tag':'minecraft:water'},slurryInput:{'amount':1,'slurry':'mek1000:dirty_compressed_osmium'},output:{'slurry':'mekanism:clean_osmium','amount':90}})
    event.custom({type:'mekanism:washing',fluidInput:{'amount':50,'tag':'minecraft:water'},slurryInput:{'amount':1,'slurry':'mek1000:dirty_compressed_tin'},output:{'slurry':'mekanism:clean_tin','amount':90}})
    event.custom({type:'mekanism:washing',fluidInput:{'amount':50,'tag':'minecraft:water'},slurryInput:{'amount':1,'slurry':'mek1000:dirty_compressed_lead'},output:{'slurry':'mekanism:clean_lead','amount':90}})
    event.custom({type:'mekanism:washing',fluidInput:{'amount':50,'tag':'minecraft:water'},slurryInput:{'amount':1,'slurry':'mek1000:dirty_compressed_uranium'},output:{'slurry':'mekanism:clean_uranium','amount':90}})
    */

    // 追加パック： 圧縮系統完全隔離パック

    const types = ["iron", "copper", "gold", "osmium", "tin", "lead", "uranium", "iridium"];
    types.forEach((type) => {
        event.custom({ type: "mekanism:washing", fluidInput: { amount: 50, tag: "minecraft:water" }, slurryInput: { amount: 1, slurry: `mek1000:dirty_compressed_${type}` }, output: { slurry: `mek1000:clean_compressed_${type}`, amount: 10 } });
        event.custom({ type: "mekanism:crystallizing", chemicalType: "slurry", input: { amount: 200, slurry: `mek1000:clean_compressed_${type}` }, output: { item: `mek1000:compressed_${type}_crystal` } });
        event.custom({ type: "mekanism:injecting", itemInput: { ingredient: { item: `mek1000:compressed_${type}_crystal` } }, chemicalInput: { amount: 9, gas: "mekanism:hydrogen_chloride" }, output: { item: `mek1000:compressed_${type}_shard` } });
    });
    event.recipes.mekanism.purifying(`2x mek1000:compressed_iridium_clump`, `mek1000:compressed_iridium_shard`, "9x mekanism:oxygen");
    event.custom({ type: "mekanism:crushing", input: { count: 1, item: `mek1000:compressed_iridium_clump` }, output: { count: 9, item: `kubejs:dirty_dust_iridium` } });

    // 追加パック2: 圧縮イリジウム対応化パックのつもりがまさかの原石存在しなかったため消去

    // 追加パック3: ケルタスクオーツも1000倍化...?
    let tag = `#forge:ores/certus_quartz`;
    event.recipes.mekanism.enriching(`6x ae2:certus_quartz_crystal`, `mek1000:softore_certus_quartz`); // 2.5
    event.custom({ type: "mekanism:crushing", input: { count: 1, item: "mek1000:softore_certus_quartz" }, output: { count: 8, item: "ae2:certus_quartz_dust" } }); // 2.6
    event.recipes.mekanism.purifying(`4x mek1000:softore_certus_quartz`, "#forge:ores/certus_quartz", "1x mekanism:oxygen"); // 3
    event.recipes.mekanism.purifying(`2x mek1000:softore_certus_quartz`, `mek1000:extructed_certus_quartz`, "1x mekanism:oxygen"); // 3.5
    event.recipes.mekanism.injecting(`8x mek1000:extructed_certus_quartz`, "#forge:ores/certus_quartz", "1x mekanism:hydrogen_chloride"); // 4
    event.recipes.mekanism.injecting(`mek1000:extructed_certus_quartz`, "mek1000:crystal_certus_quartz", "1x mekanism:hydrogen_chloride"); // 4
    event.custom({ // 5-0
        type: "mekanism:dissolution", itemInput: { ingredient: { tag: tag.slice(1) } }, gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" }, output: { slurry: "mek1000:dirty_certus_quartz", amount: 2500, chemicalType: "slurry" },
    });
    event.custom( // 5-1
        { type: "mekanism:washing", fluidInput: { amount: 5, tag: "minecraft:water" }, slurryInput: { amount: 1, slurry: "mek1000:dirty_certus_quartz" }, output: { slurry: "mek1000:clean_certus_quartz", amount: 10 } },
    );
    event.custom({
        type: "mekanism:crystallizing",
        chemicalType: "slurry",
        input: {
            amount: 200,
            slurry: "mek1000:clean_certus_quartz",
        },
        output: {
            item: "mek1000:crystal_certus_quartz",
        },
    });

    tag = `#forge:ores/fluorite`;
    event.recipes.mekanism.enriching(`6x mekanism:fluorite_gem`, `mek1000:softore_fluorite`); // 2.5
    event.custom({ type: "mekanism:crushing", input: { count: 1, item: "mek1000:softore_fluorite" }, output: { count: 6, item: "mekanism:dust_fluorite" } }); // 2.6
    event.recipes.mekanism.purifying(`4x mek1000:softore_fluorite`, "#forge:ores/fluorite", "1x mekanism:oxygen"); // 3
    event.recipes.mekanism.purifying(`2x mek1000:softore_fluorite`, `mek1000:extructed_fluorite`, "1x mekanism:oxygen"); // 3.5
    event.recipes.mekanism.injecting(`8x mek1000:extructed_fluorite`, "#forge:ores/fluorite", "1x mekanism:hydrogen_chloride"); // 4
    event.recipes.mekanism.injecting(`mek1000:extructed_fluorite`, "mek1000:crystal_fluorite", "1x mekanism:hydrogen_chloride"); // 4
    event.custom({ // 5-0
        type: "mekanism:dissolution", itemInput: { ingredient: { tag: tag.slice(1) } }, gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" }, output: { slurry: "mek1000:dirty_fluorite", amount: 2500, chemicalType: "slurry" },
    });
    event.custom( // 5-1
        { type: "mekanism:washing", fluidInput: { amount: 5, tag: "minecraft:water" }, slurryInput: { amount: 1, slurry: "mek1000:dirty_fluorite" }, output: { slurry: "mek1000:clean_fluorite", amount: 10 } },
    );
    event.custom({
        type: "mekanism:crystallizing",
        chemicalType: "slurry",
        input: {
            amount: 200,
            slurry: "mek1000:clean_fluorite",
        },
        output: {
            item: "mek1000:crystal_fluorite",
        },
    });

    tag = `#forge:ores/quartz`;
    event.recipes.mekanism.enriching(`6x minecraft:quartz`, `mek1000:softore_quartz`); // 2.5
    event.custom({ type: "mekanism:crushing", input: { count: 1, item: "mek1000:softore_quartz" }, output: { count: 6, item: "mekanism:dust_quartz" } }); // 2.6
    event.recipes.mekanism.purifying(`4x mek1000:softore_quartz`, "#forge:ores/quartz", "1x mekanism:oxygen"); // 3
    event.recipes.mekanism.purifying(`2x mek1000:softore_quartz`, `mek1000:extructed_quartz`, "1x mekanism:oxygen"); // 3.5
    event.recipes.mekanism.injecting(`8x mek1000:extructed_quartz`, "#forge:ores/v", "1x mekanism:hydrogen_chloride"); // 4
    event.recipes.mekanism.injecting(`mek1000:extructed_quartz`, "mek1000:crystal_quartz", "1x mekanism:hydrogen_chloride"); // 4
    event.custom({ // 5-0
        type: "mekanism:dissolution", itemInput: { ingredient: { tag: tag.slice(1) } }, gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" }, output: { slurry: "mek1000:dirty_quartz", amount: 2500, chemicalType: "slurry" },
    });
    event.custom( // 5-1
        { type: "mekanism:washing", fluidInput: { amount: 5, tag: "minecraft:water" }, slurryInput: { amount: 1, slurry: "mek1000:dirty_quartz" }, output: { slurry: "mek1000:clean_quartz", amount: 10 } },
    );
    event.custom({
        type: "mekanism:crystallizing",
        chemicalType: "slurry",
        input: {
            amount: 200,
            slurry: "mek1000:clean_quartz",
        },
        output: {
            item: "mek1000:crystal_quartz",
        },
    });

    // 鉱石倍加はここまで だったはずだった

    // イリジウムも1000倍化！(異物混入)
    event.recipes.mekanism.purifying(`2x kubejs:clump_iridium`, `kubejs:shard_iridium`, "1x mekanism:oxygen");
    event.recipes.mekanism.purifying(`2x mek1000:compressed_iridium_clump`, `mek1000:compressed_iridium_shard`, "9x mekanism:oxygen"); // compress...? あるんだよね、なぜか。
    event.custom({ type: "mekanism:crushing", input: { count: 1, item: `mek1000:compressed_iridium_clump` }, output: { count: 9, item: `kubejs:dirty_dust_iridium` } });
    event.recipes.mekanism.enriching(`8x kubejs:dust_iridium`, "ultimatesolarpanels:iridium_ore");
    event.recipes.mekanism.purifying(`32x kubejs:clump_iridium`, "ultimatesolarpanels:iridium_ore", "1x mekanism:oxygen");
    event.recipes.mekanism.injecting(`64x kubejs:shard_iridium`, "ultimatesolarpanels:iridium_ore", "1x mekanism:hydrogen_chloride");
    event.custom({
        type: "mekanism:dissolution", itemInput: { ingredient: { item: "ultimatesolarpanels:iridium_ore" } }, gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" }, output: { slurry: "kubejs:dirty_iridium", amount: Math.min(10000, 10000), chemicalType: "slurry" },
    });
    event.custom(
        { type: "mekanism:washing", fluidInput: { amount: 5, tag: "minecraft:water" }, slurryInput: { amount: 1, slurry: "kubejs:dirty_iridium" }, output: { slurry: "kubejs:clean_iridium", amount: 10 } },
    );

    // レッドストーンも1000倍化！
    tag = `#forge:ores/redstone`;
    event.recipes.mekanism.enriching(`24x minecraft:redstone`, `mek1000:softore_redstone`); // 2.5
    event.recipes.mekanism.purifying(`3x mek1000:softore_redstone`, "#forge:ores/redstone", "1x mekanism:oxygen"); // 3
    event.recipes.mekanism.purifying(`2x mek1000:softore_redstone`, `mek1000:extructed_redstone`, "1x mekanism:oxygen"); // 3.5
    event.recipes.mekanism.injecting(`6x mek1000:extructed_redstone`, "#forge:ores/redstone", "1x mekanism:hydrogen_chloride"); // 4
    event.recipes.mekanism.injecting(`mek1000:extructed_redstone`, "mek1000:crystal_redstone", "1x mekanism:hydrogen_chloride"); // 4
    event.custom({ // 5-0
        type: "mekanism:dissolution", itemInput: { ingredient: { tag: tag.slice(1) } }, gasInput: { amount: 1, gas: "mekanism:sulfuric_acid" }, output: { slurry: "mek1000:dirty_redstone", amount: 2500, chemicalType: "slurry" },
    });
    event.custom( // 5-1
        { type: "mekanism:washing", fluidInput: { amount: 5, tag: "minecraft:water" }, slurryInput: { amount: 1, slurry: "mek1000:dirty_redstone" }, output: { slurry: "mek1000:clean_redstone", amount: 10 } },
    );
    event.custom({
        type: "mekanism:crystallizing",
        chemicalType: "slurry",
        input: {
            amount: 200,
            slurry: "mek1000:clean_redstone",
        },
        output: {
            item: "mek1000:crystal_redstone",
        },
    });

    // デフォルトであるやつの追加（一部そのまま混ぜた）
    event.custom({
        type: "mekanism:crystallizing",
        chemicalType: "slurry",
        input: {
            amount: 200,
            slurry: "kubejs:clean_iridium",
        },
        output: {
            item: "kubejs:crystal_iridium",
        },
    });
    event.custom({
        type: "mekanism:injecting",
        itemInput: {
            ingredient: {
                tag: "mekanism:crystals/iridium",
            },
        },
        chemicalInput: {
            amount: 1,
            gas: "mekanism:hydrogen_chloride",
        },
        output: {
            item: "kubejs:shard_iridium",
        },
    });
    event.custom({
        type: "mekanism:crushing",
        input: {
            count: 1,
            tag: "mekanism:clumps/iridium",
        },
        output: {
            count: 1,
            item: "kubejs:dirty_dust_iridium",
        },
    });
    event.custom({
        type: "mekanism:enriching",
        input: {
            count: 1,
            tag: "mekanism:dirty_dusts/iridium",
        },
        output: {
            count: 1,
            item: "kubejs:dust_iridium",
        },
    });
    event.smelting("ultimatesolarpanels:iridium", "kubejs:dust_iridium");
    event.blasting("ultimatesolarpanels:iridium", "kubejs:dust_iridium");
});
