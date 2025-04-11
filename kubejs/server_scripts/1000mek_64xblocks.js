onEvent("recipes", (event) => {
    ["iron", "gold", "copper", "netherite", "bronze", "refined_obsidian", "refined_glowstone", "steel", "osmium", "tin", "lead", "uranium", "redstone", "diamond", "emerald", "lapis", "fluorite"].forEach((material) => {
        event.recipes.mekanism.combining(`64x #forge:storage_blocks/${material}`, `#forge:dusts/${material}`, "dragon_egg");
    });
});
