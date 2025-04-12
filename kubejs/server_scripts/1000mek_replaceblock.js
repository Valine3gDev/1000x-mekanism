onEvent("recipes", (event) => {
    const MODID = ["mekanism", "mekanismtools", "mekanismgenerators"];
    const replaceVanilla = (input) => {
        input.forEach((tag) => {
            const MATERIAL_ID = tag.substring(tag.indexOf("/") + 1);
            MODID.forEach((modid) => {
                event.replaceInput({ mod: modid, type: "minecraft:crafting_shaped" }, tag, `#forge:storage_blocks/${MATERIAL_ID}`);
            });
        });
    };

    const replaceMeka = (input) => {
        input.forEach((tag) => {
            const MATERIAL_ID = tag.substring(tag.indexOf("/") + 1);
            MODID.forEach((modid) => {
                event.replaceInput({ mod: modid, type: "minecraft:crafting_shaped" }, tag, `#forge:storage_blocks/${MATERIAL_ID}`);
            });
            event.replaceInput({ output: `mekanism:block_${MATERIAL_ID}` }, `mekanism:block_${MATERIAL_ID}`, `9x ${tag}`);
        });
    };

    replaceVanilla(["#forge:dusts/redstone", "#forge:dusts/glowstone", "#forge:ingots/gold", "#forge:ingots/iron", "#forge:ingots/copper", "#forge:gems/diamond", "#forge:gems/lapis", "#forge:gems/emerald"]);
    //
    replaceMeka(["#forge:ingots/tin", "#forge:ingots/osmium", "#forge:ingots/steel", "#forge:ingots/lead", "#forge:ingots/uranium", "#forge:ingots/bronze", "#forge:ingots/refined_obsidian", "#forge:ingots/refined_glowstone", "#forge:gems/fluorite"]);
});
