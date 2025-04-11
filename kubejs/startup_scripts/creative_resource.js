// HSLからRGBへの変換関数
function hslToRgb(h, s, l) {
    s /= 100;
    l /= 100;
    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
}

// RGBからHEXへの変換関数
function rgbToHex(r, g, b) {
    return "#" + [r, g, b].map((x) => {
        const hex = x.toString(16).padStart(2, "0");
        return hex;
    }).join("");
}

onEvent("item.registry", (event) => {
    event.create("mek1000:redstone_singularity").textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" }).color(0, "#dc143c").color(1, "#ff0000");
    event.create("mek1000:iron_singularity").textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" }).color(0, "#d3d3d3").color(1, "#f5f5f5");
    event.create("mek1000:gold_singularity").textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" }).color(0, "#ffd700").color(1, "#ffff00");
    event.create("mek1000:diamond_singularity").textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" }).color(0, "#4169e1").color(1, "#00ffff");
    event.create("mek1000:lapis_singularity").textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" }).color(0, "#0000ff").color(1, "#1e90ff");
    event.create("mek1000:emerald_singularity").textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" }).color(0, "#7fff00").color(1, "#00ff00");
    event.create("mek1000:copper_singularity").textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" }).color(0, "#ff8c00").color(1, "#daa520");
    event.create("mek1000:amethyst_singularity").textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" }).color(0, "#9400d3").color(1, "#ee82ee");
    event.create("mek1000:coal_singularity").textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" }).color(0, "#696969").color(1, "#808080");
    event.create("mek1000:tin_singularity").textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" });
    event.create("mek1000:quartz_singularity").textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" });
    event.create("mek1000:iridium_singularity").textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" });
    event.create("mek1000:certusquartz_singularity").textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" }).color(0, "#87ceeb").color(1, "#87cefa");
    event.create("mek1000:fluorite_singularity").textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" }).color(0, "#f8f8ff").color(1, "#b0c4de");
    event.create("mek1000:lead_singularity").textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" }).color(0, "#afeeee").color(1, "#5f9ea0");
    event.create("mek1000:uranium_singularity").textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" }).color(0, "#6b8e23").color(1, "#98fb98");
    event.create("mek1000:osmium_singularity").textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" }).color(0, "#40e0d0").color(1, "#87ceeb");
    event.create("mek1000:eternal_singularity").textureJson({ layer0: "mek1000:item/singularity", layer1: "mek1000:item/singularity_overlay" }).color((itemstack) => {
        // 現在時刻に基づいて色相を計算し、HEXカラーコードを取得する関数
        const now = new Date();
        const milliseconds = now.getMilliseconds();
        const hue = (milliseconds / 1000) * 360; // 0から360の範囲で色相を計算
        const saturation = 100; // 彩度を100%に設定
        const lightness = 50; // 明度を50%に設定
        const [r, g, b] = hslToRgb(hue, saturation, lightness);
        return rgbToHex(r, g, b);
    });
    event.create("mek1000:dust_amethyst").texture("kubejs:item/dust_iridium").color(0, "#9400d3").tag("forge:dusts").tag("forge:dusts/amethyst");
    event.create("mek1000:bedrockium_ingot");
    event.create("mek1000:neutronium_ingot");
    event.create("mek1000:infinity_ingot").texture("mek1000:item/infinity_ingot");
    event.create("mek1000:creative_talisman").displayName("創造への挑戦").tooltip("クリエイティブアイテムへの挑戦権。mbdでアイテムnbtを使用したレシピがエラー吐くせいで作った代物。");
    event.create("mekanism:inactive_qio_drive_base").displayName("Inactive QIO Drive").texture("mekanism:item/qio_drive_base");
    event.create("mekanism:inactive_qio_drive_hyper_dense").displayName("Inactive Hyper-Dense QIO Drive").texture("mekanism:item/qio_drive_hyper_dense");
    event.create("mekanism:inactive_qio_drive_time_dilating").displayName("Inactive Time-Dilating QIO Drive").texture("mekanism:item/qio_drive_time_dilating");
    event.create("mekanism:inactive_qio_drive_supermassive").displayName("Inactive Supermassive QIO Drive").texture("mekanism:item/qio_drive_supermassive");
    event.create("mekaevolution:inactive_qio_drive_absolute").displayName("Inactive Absolute QIO Drive").texture("mekaevolution:item/qio_drive_absolute");
    event.create("mekaevolution:inactive_qio_drive_supreme").displayName("Inactive Supreme QIO Drive").texture("mekaevolution:item/qio_drive_supreme");
    event.create("mekaevolution:inactive_qio_drive_cosmic").displayName("Inactive Cosmic QIO Drive").texture("mekaevolution:item/qio_drive_cosmic");
    event.create("mekaevolution:inactive_qio_drive_infinite").displayName("Inactive Infinite QIO Drive").texture("mekaevolution:item/qio_drive_infinite");
});
onEvent("mekanism.gas.registry", (event) => {
    event.create("mek1000:vaporized_redstone").color("0xff0000");
    event.create("mek1000:vaporized_iron").color("0xf5f5f5");
    event.create("mek1000:vaporized_gold").color("0xffff00");
    event.create("mek1000:vaporized_diamond").color("0x00ffff");
    event.create("mek1000:vaporized_lapis").color("0x1e90ff");
    event.create("mek1000:vaporized_emerald").color("0x00ff00");
    event.create("mek1000:vaporized_copper").color("0xdaa520");
    event.create("mek1000:vaporized_amethyst").color("0xee82ee");
    event.create("mek1000:vaporized_coal").color("0x808080");
    event.create("mek1000:vaporized_tin");
    event.create("mek1000:vaporized_quartz");
    event.create("mek1000:vaporized_iridium");
    event.create("mek1000:vaporized_certus").color("0x87cefa");
    event.create("mek1000:vaporized_fluorite").color("0xb0c4de");
    event.create("mek1000:vaporized_lead").color("0x5f9ea0");
    event.create("mek1000:vaporized_uranium").color("0x98fb98");
    event.create("mek1000:vaporized_osmium").color("0x87ceeb");
    event.create("mek1000:ultimate_valine").fuel(2147483647, 9223372036854775807).color("0x15080d");
});
onEvent("block.registry", (event) => {
    event.create("mek1000:fusion_coil")
        .material("metal")
        .hardness(5.0)
        .displayName("Fusion coil") // No longer required in 1.18.2+
        .tagBlock("minecraft:mineable/pickaxe") // Make it mine faster using a pickaxe in 1.18.2+
        .tagBlock("minecraft:needs_iron_tool") // Make it require an iron or higher level tool on 1.18.2+
        .requiresTool(true)
        .texture("up", "mek1000:block/fusion_coil_top")
        .texture("down", "mek1000:block/fusion_coil_top");
    event.create("mek1000:fusion_casing")
        .material("metal")
        .hardness(5.0)
        .displayName("Fusion Casing") // No longer required in 1.18.2+
        .tagBlock("minecraft:mineable/pickaxe") // Make it mine faster using a pickaxe in 1.18.2+
        .tagBlock("minecraft:needs_iron_tool") // Make it require an iron or higher level tool on 1.18.2+
        .requiresTool(true);

    event.create("mek1000:2xcobblestone").textureAll("mek1000:block/cobblestone").color(0, 0x888888).item((itemForm) => { itemForm.color(0, 0x888888); });
    event.create("mek1000:3xcobblestone").textureAll("mek1000:block/cobblestone").color(0, 0x777777).item((itemForm) => { itemForm.color(0, 0x777777); });
    event.create("mek1000:4xcobblestone").textureAll("mek1000:block/cobblestone").color(0, 0x666666).item((itemForm) => { itemForm.color(0, 0x666666); });
    event.create("mek1000:5xcobblestone").textureAll("mek1000:block/cobblestone").color(0, 0x555555).item((itemForm) => { itemForm.color(0, 0x555555); });
    event.create("mek1000:6xcobblestone").textureAll("mek1000:block/cobblestone").color(0, 0x444444).item((itemForm) => { itemForm.color(0, 0x444444); });
    event.create("mek1000:7xcobblestone").textureAll("mek1000:block/cobblestone").color(0, 0x333333).item((itemForm) => { itemForm.color(0, 0x333333); });
    event.create("mek1000:8xcobblestone").textureAll("mek1000:block/cobblestone").color(0, 0x222222).item((itemForm) => { itemForm.color(0, 0x222222); });
});
