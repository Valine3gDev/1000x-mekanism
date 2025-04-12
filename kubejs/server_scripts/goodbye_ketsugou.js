onEvent("recipes", (event) => {
    const ore = [
        "mekanism:osmium_ore", "mekanism:deepslate_osmium_ore",
        "mekanism:fluorite_ore", "mekanism:deepslate_fluorite_ore",
        "mekanism:tin_ore", "mekanism:deepslate_tin_ore",
        "mekanism:uranium_ore", "mekanism:deepslate_uranium_ore",
        "mekanism:lead_ore", "mekanism:deepslate_lead_ore",
        "minecraft:iron_ore", "minecraft:deepslate_iron_ore",
        "minecraft:gold_ore", "minecraft:deepslate_gold_ore",
        "minecraft:nether_gold_ore", "minecraft:nether_quartz_ore",
        "minecraft:lapis_ore", "minecraft:deepslate_lapis_ore",
        "minecraft:redstone_ore", "minecraft:deepslate_redstone_ore",
        "minecraft:coal_ore", "minecraft:deepslate_coal_ore",
        "minecraft:emerald_ore", "minecraft:deepslate_emerald_ore",
        "minecraft:diamond_ore", "minecraft:deepslate_diamond_ore",
        "minecraft:copper_ore", "minecraft:deepslate_copper_ore",
        "minecraft:ancient_debris",
    ];
    ore.forEach(block => event.remove({ output: block }));
});
