onEvent("recipes", (event) => {
    event.recipes.mekanismMetallurgicInfusing("16x ae2:fluix_smart_cable", "ae2:fluix_block", "100x mekanism:redstone");
    event.recipes.mekanismMetallurgicInfusing("minecraft:slime_ball", "ae2:silicon", "10x mekanism:bio");
    event.recipes.mekanismMetallurgicInfusing("10x minecraft:glowstone_dust", "10x mekanism:fluorite_gem", "100x mekanism:gold");

    event.recipes.mekanism.purifying("4x ae2:certus_quartz_crystal", "ae2:certus_quartz_dust", `1x mekanism:oxygen`);
});
