onEvent("item.registry", (event) => {
    // Register new items here
    // event.create('example_item').displayName('Example Item')
    const types = ["iron", "copper", "gold", "osmium", "tin", "lead", "uranium"];

    types.forEach((type) => {
        event // 圧縮凝塊:
            .create(`mek1000:compressed_${type}_clump`)
            .displayName(`compressed ${type} clump`)
            .tooltip("えっいいんですか？圧縮しちゃって")
            .maxStackSize(64)
            .texture(`mekanism:item/clump_${type}`)
            .rarity("uncommon")
            .glow(true);
        event // 圧縮欠片:
            .create(`mek1000:compressed_${type}_shard`)
            .displayName(`compressed ${type} shard`)
            .tooltip("圧縮なのは 義務なんです。")
            .maxStackSize(64)
            .texture(`mekanism:item/shard_${type}`)
            .rarity("uncommon")
            .glow(true);
        event // 圧縮結晶:
            .create(`mek1000:compressed_${type}_crystal`)
            .displayName(`compressed ${type} crystal`)
            .tooltip("圧縮された別れの歌")
            .maxStackSize(64)
            .texture(`mekanism:item/crystal_${type}`)
            .rarity("uncommon")
            .glow(true);

        event // 圧縮凝塊:
            .create(`mek1000:${type}_clump_20`)
            .displayName(`20x ${type} clump`)
            .tooltip("うわーん製錬炉のバカー!(>_<)")
            .maxStackSize(64)
            .texture(`mekanism:item/clump_${type}`)
            .rarity("epic")
            .glow(true)
            .barWidth(itemstack => 13)
            .barColor(itemstack => Color.AQUA);
        event // 圧縮欠片:
            .create(`mek1000:${type}_shard_20`)
            .displayName(`20x ${type} shard`)
            .tooltip("20, 19, 18, 17,...")
            .maxStackSize(64)
            .texture(`mekanism:item/shard_${type}`)
            .rarity("epic")
            .glow(true)
            .barWidth(itemstack => 13)
            .barColor(itemstack => Color.AQUA);
        event // 圧縮結晶:
            .create(`mek1000:${type}_crystal_20`)
            .displayName(`20x ${type} crystal`)
            .tooltip("20倍圧縮だぜ! 唐突ですまんな!")
            .maxStackSize(64)
            .texture(`mekanism:item/crystal_${type}`)
            .rarity("epic")
            .glow(true)
            .barWidth(itemstack => 13)
            .barColor(itemstack => Color.AQUA);
    });

    // イリジウム用:
    event // 凝塊:
        .create(`mek1000:compressed_iridium_clump`)
        .displayName(`compressed iridium clump`)
        .tooltip("圧縮して... なにするの？")
        .maxStackSize(64)
        .texture(`kubejs:item/clump_iridium`)
        .rarity("uncommon")
        .glow(true);
    event // 欠片:
        .create(`mek1000:compressed_iridium_shard`)
        .displayName(`compressed iridium shard`)
        .tooltip("イリジウムって結構高いんだよ...?")
        .maxStackSize(64)
        .texture(`kubejs:item/shard_iridium`)
        .rarity("uncommon")
        .glow(true);
    event // 結晶:
        .create(`mek1000:compressed_iridium_crystal`)
        .displayName(`compressed iridium crystal`)
        .tooltip("夢の塊 (1個でも相当な値段)")
        .maxStackSize(64)
        .texture(`kubejs:item/crystal_iridium`)
        .rarity("uncommon")
        .glow(true);

    event // 圧縮凝塊:
        .create(`mek1000:iridium_clump_20`)
        .displayName(`20x iridium clump`)
        .tooltip("でもさ")
        .maxStackSize(64)
        .texture(`kubejs:item/clump_iridium`)
        .rarity("epic")
        .glow(true)
        .barWidth(itemstack => 13)
        .barColor(itemstack => Color.AQUA);
    event // 圧縮欠片:
        .create(`mek1000:iridium_shard_20`)
        .displayName(`20x iridium shard`)
        .tooltip("Nice to meet you!")
        .maxStackSize(64)
        .texture(`kubejs:item/shard_iridium`)
        .rarity("epic")
        .glow(true)
        .barWidth(itemstack => 13)
        .barColor(itemstack => Color.AQUA);
    event // 圧縮結晶:
        .create(`mek1000:iridium_crystal_20`)
        .displayName(`20x iridium crystal`)
        .tooltip("Hello.")
        .maxStackSize(64)
        .texture(`kubejs:item/crystal_iridium`)
        .rarity("epic")
        .glow(true)
        .barWidth(itemstack => 13)
        .barColor(itemstack => Color.AQUA);
});
// {"name": ,"color":}
onEvent("mekanism.slurry.registry", (event) => {
    // 通常圧縮懸濁液 (よごれてる):
    event.create("mek1000:dirty_compressed_iron").texture("kubejs:slurry/dirty").color(0xf0f0f0);
    event.create("mek1000:dirty_compressed_copper").texture("kubejs:slurry/dirty").color(0xd8a31e);
    event.create("mek1000:dirty_compressed_gold").texture("kubejs:slurry/dirty").color(0xF2CD67);
    event.create("mek1000:dirty_compressed_osmium").texture("kubejs:slurry/dirty").color(0x52BDCA);
    event.create("mek1000:dirty_compressed_tin").texture("kubejs:slurry/dirty").color(0xCCCCD9);
    event.create("mek1000:dirty_compressed_lead").texture("kubejs:slurry/dirty").color(0x5d9c9e);
    event.create("mek1000:dirty_compressed_uranium").texture("kubejs:slurry/dirty").color(0x96f996);

    // 追加パック 圧縮懸濁液（きれい）:
    event.create("mek1000:clean_compressed_iron").texture("kubejs:slurry/clean").color(0xf0f0f0);
    event.create("mek1000:clean_compressed_copper").texture("kubejs:slurry/clean").color(0xd8a31e);
    event.create("mek1000:clean_compressed_gold").texture("kubejs:slurry/clean").color(0xF2CD67);
    event.create("mek1000:clean_compressed_osmium").texture("kubejs:slurry/clean").color(0x52BDCA);
    event.create("mek1000:clean_compressed_tin").texture("kubejs:slurry/clean").color(0xCCCCD9);
    event.create("mek1000:clean_compressed_lead").texture("kubejs:slurry/clean").color(0x5d9c9e);
    event.create("mek1000:clean_compressed_uranium").texture("kubejs:slurry/clean").color(0x96f996);

    // 追加パック2 圧縮イリジウムパック（両方）
    event.create("mek1000:dirty_compressed_iridium").texture("kubejs:slurry/dirty").color(0xf0f8ff);
    event.create("mek1000:clean_compressed_iridium").texture("kubejs:slurry/clean").color(0xf0f8ff);

/*

    types.forEach(type => {
        event // 懸濁液
            .texture("kubejs:slurry/dirty").color(0xf0f8ff)
            .create(`mek1000:dirty_compressed_${type.name}`)
            .displayName(`dirty compressed ${type.name} sludge`)
            .tooltip(`汚れた圧縮状態の${type.text}の懸濁液`)
    })

*/
});

onEvent("mekanism.slurry.registry", (event) => {
    event.create("dirty_iridium").texture("kubejs:slurry/dirty").color(0xf0f8ff);
    event.create("clean_iridium").texture("kubejs:slurry/clean").color(0xf0f8ff);
    event.create("mek1000:dirty_redstone").texture("kubejs:slurry/dirty").color(0xf00000);
    event.create("mek1000:clean_redstone").texture("kubejs:slurry/clean").color(0xf00000);
    event.create("mek1000:dirty_certus_quartz").texture("kubejs:slurry/dirty").color(0xc0e0f0);
    event.create("mek1000:clean_certus_quartz").texture("kubejs:slurry/clean").color(0xc0e0f0);
    event.create("mek1000:dirty_fluorite").texture("kubejs:slurry/dirty").color(0xe0d0f0);
    event.create("mek1000:clean_fluorite").texture("kubejs:slurry/clean").color(0xe0d0f0);
    event.create("mek1000:dirty_quartz").texture("kubejs:slurry/dirty").color(0xe0d0d0);
    event.create("mek1000:clean_quartz").texture("kubejs:slurry/clean").color(0xe0d0d0);
});

onEvent("item.registry", (event) => {
    event.create("crystal_iridium").tag("mekanism:crystals").tag("mekanism:crystals/iridium");
    event.create("shard_iridium").tag("mekanism:shards").tag("mekanism:shards/iridium");
    event.create("clump_iridium").tag("mekanism:clumps").tag("mekanism:clumps/iridium");
    event.create("dirty_dust_iridium").tag("mekanism:dirty_dusts").tag("mekanism:dirty_dusts/iridium");
    event.create("dust_iridium").tag("forge:dusts").tag("forge:dusts/iridium");

    event.create("mek1000:crystal_redstone").tag("mekanism:crystals").displayName("Redstone crystal").tooltip("レッドストーンのおいしい結晶");
    event.create("mek1000:extructed_redstone").tag("mekanism:shards").displayName("Extructed redstone ore").tooltip("ちゅーﾁｭﾁｭ... ちゅーｼｭﾁｭ... ちゅーしゅつずみ。");
    event.create("mek1000:softore_redstone").displayName("Soft redstone ore").tooltip("やわらかい（当社比）").glow(true);
    event.create("mek1000:crystal_certus_quartz").tag("mekanism:crystals").displayName("Certus Quartz crystal").tooltip("ケルタスクオーツのおいしい結晶... ってこれ完成品じゃないの？");
    event.create("mek1000:extructed_certus_quartz").tag("mekanism:shards").displayName("Extructed Certus Quartz").tooltip("ちゅーﾁｭﾁｭ... ちゅーｼｭﾁｭ... ちゅーしゅつずみ。");
    event.create("mek1000:softore_certus_quartz").displayName("Soft Certus Quartz").tooltip("やわらかい（当社比）").glow(true);
    event.create("mek1000:crystal_fluorite").tag("mekanism:crystals").displayName("Fluorite crystal").tooltip("蛍石のおいしい結晶... ってこれ完成品よりきれい？");
    event.create("mek1000:extructed_fluorite").tag("mekanism:shards").displayName("Extructed Fluorite").tooltip("抽出だけど... これ硫酸に溶かすんよね？");
    event.create("mek1000:softore_fluorite").displayName("Soft Fluorite").tooltip("やわらかい（当社比）").glow(true);
    event.create("mek1000:crystal_quartz").tag("mekanism:crystals").displayName("Quartz crystal").tooltip("ネザークオーツのおいしい結晶... おいしそう...");
    event.create("mek1000:extructed_quartz").tag("mekanism:shards").displayName("Extructed Quartz").tooltip("抽出・on!");
    event.create("mek1000:softore_quartz").displayName("Soft Quartz").tooltip("やわらかい（当社比）").glow(true);
});
