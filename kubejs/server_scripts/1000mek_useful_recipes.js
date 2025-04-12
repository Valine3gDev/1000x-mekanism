onEvent("recipes", (event) => {
    event.recipes.mekanism.crushing("2x minecraft:ender_pearl", "integrateddynamics:proto_chorus");
    event.recipes.mekanism.crushing("4x minecraft:blaze_powder", "minecraft:glowstone");
    event.recipes.mekanism.metallurgic_infusing("16x fluxnetworks:flux_dust", "#forge:dusts/obsidian", "160x mekanism:redstone");
});
