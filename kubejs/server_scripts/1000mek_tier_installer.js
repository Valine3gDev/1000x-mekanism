onEvent("recipes", (event) => {
    // delete default installer recipes
    event.remove({ id: "mekanism:tier_installer/basic" });
    event.remove({ id: "mekanism:tier_installer/advanced" });
    event.remove({ id: "mekanism:tier_installer/elite" });
    event.remove({ id: "mekanism:tier_installer/ultimate" });
    // add custom installer recipes
    event.shaped(
        Item.of("mekanism:basic_tier_installer", 1),
        [
            "ABA",
            "CDC",
            "ABA",
        ],
        {
            A: "minecraft:redstone_block",
            B: "mekanism:basic_control_circuit",
            C: "minecraft:iron_block",
            D: "ae2:cell_component_16k",
        },
    );
    event.shaped(
        Item.of("mekanism:advanced_tier_installer", 1),
        [
            "ABA",
            "CDC",
            "ABA",
        ],
        {
            A: "mekanism:alloy_infused",
            B: "mekanism:advanced_control_circuit",
            C: "mekanism:block_osmium",
            D: "ae2:cell_component_64k",
        },
    );
    event.shaped(
        Item.of("mekanism:elite_tier_installer", 1),
        [
            "ABA",
            "CDC",
            "ABA",
        ],
        {
            A: "mekanism:alloy_reinforced",
            B: "mekanism:elite_control_circuit",
            C: "minecraft:gold_block",
            D: "ae2:cell_component_256k",
        },
    );
    event.shaped(
        Item.of("mekanism:ultimate_tier_installer", 1),
        [
            "ABA",
            "CDC",
            "ABA",
        ],
        {
            A: "mekanism:alloy_atomic",
            B: "mekanism:ultimate_control_circuit",
            C: "minecraft:diamond_block",
            D: "minecraft:netherite_block",
        },
    );
});
