onEvent("recipes", (event) => {
    const circuit = [
        "mekanism:upgrade_speed",
        "mekanism:upgrade_energy",
        "mekanism:upgrade_filter",
        "mekanism:upgrade_muffling",
        "mekanism:upgrade_gas",
        "mekanism:upgrade_anchor",
        "mekanism:upgrade_stone_generator",
    ];
    circuit.forEach((name) => {
        event.remove({ output: name });
    });
    const upgr = (output, E, T, N) => {
        event.shaped(output, [
            " e ",
            "tnt",
            " e ",
        ], {
            e: E,
            t: T,
            n: N,
        });
    };
    upgr("mekanism:upgrade_speed", "minecraft:redstone", "minecraft:glass", "#forge:ingots/osmium");
    upgr("mekanism:upgrade_energy", "minecraft:redstone", "minecraft:glass", "#forge:ingots/gold");
    upgr("mekanism:upgrade_filter", "minecraft:redstone", "minecraft:glass", "#forge:ingots/tin");
    upgr("mekanism:upgrade_muffling", "minecraft:redstone", "minecraft:glass", "#forge:ingots/steel");
    upgr("mekanism:upgrade_gas", "minecraft:redstone", "minecraft:glass", "#forge:ingots/iron");
    upgr("mekanism:upgrade_anchor", "minecraft:redstone", "minecraft:glass", "#forge:gems/diamond");
    upgr("mekanism:upgrade_stone_generator", "minecraft:redstone", "minecraft:glass", "minecraft:cobblestone");
});
