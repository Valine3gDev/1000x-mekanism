onEvent("recipes", (event) => {
    event.recipes.mekanism.metallurgic_infusing("integrateddynamics:crystalized_menril_block", "#forge:nuggets/osmium", "1x mekanism:redstone"),

    event.shaped("64x integrateddynamics:variable",
        [
            " S ",
            "S S",
            " S ",
        ],
        {
            S: "integrateddynamics:crystalized_menril_chunk",
        });

    event.shaped("64x integrateddynamics:cable",
        "SS",
        {
            S: "integrateddynamics:crystalized_menril_chunk",
        });

    event.shaped("64x integrateddynamics:variable_transformer_input",
        "SR",
        {
            S: "integrateddynamics:crystalized_menril_chunk",
            R: "minecraft:redstone",
        });

    event.shaped(
        Item.of("64x integrateddynamics:energy_battery", "{capacity:512000000,energy:0}"),
        [
            "B",
            "R",
            "B",
        ],
        {
            B: "integrateddynamics:crystalized_menril_block",
            R: "minecraft:redstone",
        });

    event.shaped("64x integrateddynamics:proto_chorus",
        [
            "SS",
            "SS",
        ],
        {
            S: "integrateddynamics:crystalized_menril_chunk",
        });

    event.shaped("64x integratedtunnels:part_interface_item",
        "SAS",
        {
            S: "integrateddynamics:crystalized_menril_chunk",
            A: "#minecraft:planks",
        });

    event.shaped("64x integratedtunnels:part_interface_fluid",
        "SAS",
        {
            S: "integrateddynamics:crystalized_menril_chunk",
            A: "#forge:ingots/iron",
        });

    event.shaped("64x integratedtunnels:part_interface_energy",
        "SAS",
        {
            S: "integrateddynamics:crystalized_menril_chunk",
            A: "minecraft:redstone",
        });
});
