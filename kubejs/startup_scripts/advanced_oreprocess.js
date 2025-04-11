onEvent(`item.registry`, (event) => {
    const types = ["iron", "copper", "gold", "osmium", "tin", "lead", "uranium", "iridium", "redstone", "quartz", "certus_quartz", "fluorite", "coal", "lapis", "diamond", "emerald"];
    types.forEach((type) => {
        event // 精製原石
            .create(`mek1000:purified_${type}_rawore`)
            .displayName(`Purified ${type} ore`)
            .tooltip(`とても純粋`)
            .maxStackSize(64)
            .texture(`kubejs:item/goodore`)
            .rarity("uncommon");
        event // 圧縮精製原石
            .create(`mek1000:compressed_purified_${type}_rawore`)
            .displayName(`Compressed Purified ${type} ore`)
            .tooltip(`まないたでModpackをぶっ壊そう。\nなおこれをエメラルドで増殖しないように。`)
            .maxStackSize(16)
            .texture(`kubejs:item/goodore`)
            .rarity("rare")
            .glow(true);
        event // 繊細に結晶化された鉱石
            .create(`mek1000:crystalized_${type}_rawore`)
            .displayName(`Delicately Crystalized ${type} ore`)
            .tooltip(`最後の強化`)
            .maxStackSize(32)
            .texture(`kubejs:item/goodore`)
            .rarity("epic")
            .glow(true)
            .barWidth(itemstack => 13)
            .barColor(itemstack => Color.AQUA);
    });

    const add_any = ["coal", "lapis"];
    add_any.forEach((type) => {
        event.create(`mek1000:crystal_${type}`).tag(`mekanism:crystals`).tag(`mekanism:crystals/${type}`);
        event.create(`mek1000:shard_${type}`).tag(`mekanism:shards`).tag(`mekanism:shards/${type}`);
        event.create(`mek1000:clump_${type}`).tag(`mekanism:clumps`).tag(`mekanism:clumps/${type}`);

        if (type == "lapis") {
            event.create(`mek1000:dirty_dust_${type}`).tag(`mekanism:dirty_dusts`).tag(`mekanism:dirty_dusts/${type}`).textureJson({ layer0: "mekanism:item/dust_lapis_lazuli", layer1: "mekanism:item/dirty_dust_overlay" });
        }
        else {
            event.create(`mek1000:dirty_dust_${type}`).tag(`mekanism:dirty_dusts`).tag(`mekanism:dirty_dusts/${type}`).textureJson({ layer0: `mekanism:item/dust_${type}`, layer1: "mekanism:item/dirty_dust_overlay" });
        }
    });

    // Synced Polonium
    event.create(`mek1000:polonium_synced`).texture(`mekanism:item/pellet_polonium`).glow(true).tooltip(`WTF too long name`);
});

onEvent(`mekanism.gas.registry`, (event) => {
    // 王水、起動レッドストーン、アクティブ王水
    event.create(`mek1000:aqua_regia`).displayName("Aqua Regia").color(0xf0f050);
    event.create(`mek1000:activated_redstone`).displayName("Activator Redstone").color(0xf05050);
    event.create(`mek1000:active_aqua_regia`).displayName("Activated Aqua Regia").color(0xffff80).radioactivity(0.015);

    // 硝酸用各種ガス
    event.create(`mek1000:no2`).displayName("Nitrogen Dioxide").color(0xe000b4);
    event.create(`mek1000:nitric_acid`).displayName("Nitric Acid").color(0xe030e4);

    // 各種活性蒸気
    event.create(`mek1000:active_iron`).displayName("Active Compressed Iron Gas").color(0xf5f5f5);
    event.create(`mek1000:active_copper`).displayName("Active Compressed Copper Gas").color(0xdaa520);
    event.create(`mek1000:active_gold`).displayName("Active Compressed Gold Gas").color(0xF2CD67);
    event.create(`mek1000:active_osmium`).displayName("Active Compressed Osmium Gas").color(0x52BDCA);
    event.create(`mek1000:active_tin`).displayName("Active Compressed Tin Gas").color(0xCCCCD9);
    event.create(`mek1000:active_lead`).displayName("Active Compressed Lead Gas").color(0x5f9ea0);
    event.create(`mek1000:active_uranium`).displayName("Active Compressed Uranium Gas").color(0x98fb98);
    event.create(`mek1000:active_iridium`).displayName("Active Compressed Iridium Gas").color(0xffff80);

    event.create(`mek1000:active_redstone`).displayName("Active Compressed Redstone Gas").color(0xff0f0f);
    event.create(`mek1000:active_quartz`).displayName("Active Compressed Quartz Gas").color(0xffafa0);
    event.create(`mek1000:active_certus_quartz`).displayName("Active Compressed Certus Quartz Gas").color(0xa0afff);
    event.create(`mek1000:active_fluorite`).displayName("Active Compressed Fluorite Gas").color(0xff9ff0);

    event.create(`mek1000:active_coal`).displayName("Active Compressed Coal Gas").color(0x333333);
    event.create(`mek1000:active_diamond`).displayName("Active Compressed Diamond Gas").color(0x22a0f0);
    event.create(`mek1000:active_emerald`).displayName("Active Compressed Emerald Gas").color(0x22f050);
    event.create(`mek1000:active_lapis`).displayName("Active Compressed Lapis Gas").color(0x3333f0);

    event.create(`mek1000:purified_iron`).displayName("Purified Compressed Iron Gas").color(0xf5f5f5);
    event.create(`mek1000:purified_copper`).displayName("Purified Compressed Copper Gas").color(0xdaa520);
    event.create(`mek1000:purified_gold`).displayName("Purified Compressed Gold Gas").color(0xF2CD67);
    event.create(`mek1000:purified_osmium`).displayName("Purified Compressed Osmium Gas").color(0x52BDCA);
    event.create(`mek1000:purified_tin`).displayName("Purified Compressed Tin Gas").color(0xCCCCD9);
    event.create(`mek1000:purified_lead`).displayName("Purified Compressed Lead Gas").color(0x5f9ea0);
    event.create(`mek1000:purified_uranium`).displayName("Purified Compressed Uranium Gas").color(0x98fb98);
    event.create(`mek1000:purified_iridium`).displayName("Purified Compressed Iridium Gas").color(0xffff80);

    event.create(`mek1000:purified_redstone`).displayName("Purified Compressed Redstone Gas").color(0xff0f0f);
    event.create(`mek1000:purified_quartz`).displayName("Purified Compressed Quartz Gas").color(0xffafa0);
    event.create(`mek1000:purified_certus_quartz`).displayName("Purified Compressed Certus Quartz Gas").color(0xa0afff);
    event.create(`mek1000:purified_fluorite`).displayName("Purified Compressed Fluorite Gas").color(0xff9ff0);

    event.create(`mek1000:purified_coal`).displayName("Purified Compressed Coal Gas").color(0x333333);
    event.create(`mek1000:purified_diamond`).displayName("Purified Compressed Diamond Gas").color(0x22a0f0);
    event.create(`mek1000:purified_emerald`).displayName("Purified Compressed Emerald Gas").color(0x22f050);
    event.create(`mek1000:purified_lapis`).displayName("Purified Compressed Lapis Gas").color(0x3333f0);
});

onEvent(`mekanism.slurry.registry`, (event) => {
    event.create(`mek1000:dirty_coal`).texture("kubejs:slurry/dirty").color(0x333333);
    event.create(`mek1000:clean_coal`).texture("kubejs:slurry/clean").color(0x333333);
    event.create(`mek1000:dirty_diamond`).texture("kubejs:slurry/dirty").color(0x22a0f0);
    event.create(`mek1000:clean_diamond`).texture("kubejs:slurry/clean").color(0x22a0f0);
    event.create(`mek1000:dirty_lapis`).texture("kubejs:slurry/dirty").color(0x3333f0);
    event.create(`mek1000:clean_lapis`).texture("kubejs:slurry/clean").color(0x3333f0);
    event.create(`mek1000:dirty_emerald`).texture("kubejs:slurry/dirty").color(0x22f050);
    event.create(`mek1000:clean_emerald`).texture("kubejs:slurry/clean").color(0x22f050);

    const types = [ // ["name",0x color]
        ["iron", 0xfafafa], ["copper", 0xdea924], ["gold", 0xffdedb], ["osmium", 0x63cedb], ["tin", 0xddddea], ["lead", 0x63a2a4], ["uranium", 0x9cff9c], ["iridium", 0xf3ff80],
        ["redstone", 0xff2020], ["quartz", 0xffc0b1], ["certus_quartz", 0xb1c0ff], ["fluorite", 0xffb0ff],
        ["coal", 0x444444], ["lapis", 0x4444ff], ["diamond", 0x33b1ff], ["emerald", 0x33ff61],
    ];
    types.forEach((type) => {
        event.create(`mek1000:prec_${type[0]}`).texture("kubejs:slurry/clean").color(type[1]).displayName(`precipitated ${type[0]}`);
    });
});

onEvent("fluid.registry", (event) => {
    event.create("mek1000:liquid_antimatter").bucketColor(0x9373ff).thinTexture(0x9373ff);
});
