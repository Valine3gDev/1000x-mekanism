onEvent("recipes", (event) => {
    event.shaped("4x mek1000:electricity_resistant_reinforced_casing", [
        "ete",
        "tnt",
        "ete",
    ], {
        e: "mekanism:sps_casing",
        t: "mekaevolution:supreme_control_circuit",
        n: "mekanism:teleportation_core",
    });
    event.custom({
        type: "mekanism:chemical_infusing",
        leftInput: {
            amount: 10,
            gas: "mekanismgenerators:fusion_fuel",
        },
        rightInput: {
            amount: 50,
            gas: "mek1000:valine3g",
        },
        output: {
            gas: "mek1000:dvt",
            amount: 1,
        },
    }).id("mek1000:dvt_fuel");
    event.shapeless("mek1000:energy_out", ["mek1000:reinforced_steel_casing", "mekanism:induction_port"]).id("mek1000:energy_out");
    event.shapeless("mek1000:imitation_sps_port", ["mekanism:sps_port", "mek1000:illuminate_alloy"]).id("mek1000:imitation_sps_port");
    event.shaped("mek1000:combustion_gas_generator", [
        "ete",
        "tnt",
        "ese",
    ], {
        e: "mekanism:elite_control_circuit",
        t: "mekanism:alloy_atomic",
        n: "mek1000:reinforced_steel_casing",
        s: "mekanismgenerators:gas_burning_generator",
    }).id("mek1000:combustion_gas_generator");
    event.shaped("mek1000:energy_cataryst", [
        "ete",
        "tnt",
        "ese",
    ], {
        e: "mekanism:hdpe_sheet",
        t: "mek1000:superheated_alloy",
        n: "mekanism:teleportation_core",
        s: "mekaevolution:infinite_energy_cube",
    }).id("mek1000:energy_cataryst");
    event.shaped("mek1000:fluid_cataryst", [
        "ete",
        "tnt",
        "ese",
    ], {
        e: "mekanism:hdpe_sheet",
        t: "mek1000:superheated_alloy",
        n: "mekanism:teleportation_core",
        s: "mekanism:ultimate_fluid_tank",
    }).id("mek1000:fluid_cataryst");
    event.shaped("mek1000:item_cataryst", [
        "ete",
        "tnt",
        "ese",
    ], {
        e: "mekanism:hdpe_sheet",
        t: "mek1000:superheated_alloy",
        n: "mekanism:teleportation_core",
        s: "megacells:bulk_cell_component",
    }).id("mek1000:item_cataryst");
    event.shaped("mek1000:gas_cataryst", [
        "ete",
        "tnt",
        "ese",
    ], {
        e: "mekanism:hdpe_sheet",
        t: "mek1000:superheated_alloy",
        n: "mekanism:teleportation_core",
        s: "mekanism:ultimate_chemical_tank",
    }).id("mek1000:gas_cataryst");
    event.custom({
        type: "mekanism:reaction",
        itemInput: {
            ingredient: {
                item: "minecraft:glass",
            },
        },
        fluidInput: {
            amount: 1000,
            fluid: "ultimatesolarpanels:lux",
        },
        gasInput: {
            amount: 100,
            gas: "mekaddelement:superheated_helium",
        },
        energyRequired: 2147483647,
        duration: 400,
        itemOutput: {
            item: "mek1000:laser_glass",
            count: 2,
        },
        gasOutput: {
            gas: "mekaddelement:helium",
            amount: 100,
        },
    }).id("mek1000:laser_glass");
    event.custom({
        type: "mekanism:evaporating",
        input: {
            amount: 10,
            fluid: "ultimatesolarpanels:lux",
        },
        output: {
            fluid: "mek1000:condenced_lux",
            amount: 1,
        },
    }).id("mek1000:condenced_lux");
    event.custom({
        type: "mekanism:reaction",
        itemInput: {
            ingredient: {
                item: "ae2:singularity",
            },
        },
        fluidInput: {
            amount: 10,
            fluid: "mek1000:condenced_lux",
        },
        gasInput: {
            amount: 1000,
            gas: "mekanism:spent_nuclear_waste",
        },
        energyRequired: 2147483647,
        duration: 400,
        itemOutput: {
            item: "mek1000:emc",
            count: 1,
        },
        gasOutput: {
            gas: "mekanism:antimatter",
            amount: 1,
        },
    }).id("mek1000:emc");
    event.shaped("mek1000:uranite_flux_casing", [
        "ete",
        "tnt",
        "ese",
    ], {
        e: "mekanism:hdpe_sheet",
        t: "mekanism:hdpe_stick",
        n: "#forge:storage_blocks/uranium",
        s: "fluxnetworks:flux_block",
    }).id("mek1000:uranite_flux_casing");
    event.shaped("4x mek1000:wtf_casing", [
        "ete",
        "tnt",
        "ese",
    ], {
        e: "mekanism:ultimate_control_circuit",
        t: "mekanism:alloy_atomic",
        n: "mek1000:uranite_flux_casing",
        s: "mekanism:enriched_refined_obsidian",
    }).id("mek1000:wtf_casing");
    event.shaped("mek1000:large_digital_assembly_table", [
        "ete",
        "tnt",
        "ese",
    ], {
        e: "mekaevolution:supreme_control_circuit",
        t: "mek1000:illuminate_alloy",
        n: "mek1000:wtf_casing",
        s: "mekanism:ultimate_induction_cell",
    }).id("mek1000:large_digital_assembly_table");
    event.shaped("mek1000:reinforced_steel_casing", [
        "ete",
        "tnt",
        "ete",
    ], {
        e: "#forge:storage_blocks/steel",
        t: "mekanism:elite_control_circuit",
        n: "mekanism:steel_casing",
    });
    event.shaped("multiblocked:item_input", [
        "e  ",
        "t  ",
        "   ",
    ], {
        e: "#forge:chests",
        t: "mek1000:reinforced_steel_casing",
    });
    event.shaped("multiblocked:fluid_input", [
        "e  ",
        "t  ",
        "   ",
    ], {
        e: "ae2:sky_stone_tank",
        t: "mek1000:reinforced_steel_casing",
    });

    event.shaped("multiblocked:item_output", [
        "t  ",
        "e  ",
        "   ",
    ], {
        e: "#forge:chests",
        t: "mek1000:reinforced_steel_casing",
    });
    event.shaped("mek1000:perfect_gas_input", [
        "eee",
        "ete",
        "eee",
    ], {
        e: "mekanism:ultimate_chemical_tank",
        t: "mekanism:sps_casing",
    });
    event.shaped("mek1000:fluid_input", [
        "eee",
        "ete",
        "eee",
    ], {
        e: "mekanism:ultimate_fluid_tank",
        t: "mekanism:sps_casing",
    });
    event.shaped("mek1000:catalyst_holder", [
        "e  ",
        "t  ",
        "   ",
    ], {
        e: "ironchest:dirt_chest",
        t: "mek1000:electricity_resistant_reinforced_casing",
    });
    event.shaped("mek1000:fusion_energy_input", [
        "ete",
        "tft",
        "ete",
    ], {
        e: "mekaevolution:infinite_energy_cube",
        t: "megacells:mega_energy_cell",
        f: "mek1000:fusion_casing",
    });
    event.shaped("mek1000:cobble_generator", [
        "ete",
        "tft",
        "ete",
    ], {
        e: "mekanism:enriched_tin",
        t: "mek1000:illuminate_alloy",
        f: "mek1000:uranite_flux_casing",
    });
    event.shaped("mek1000:greenhouse", [
        "ete",
        "tft",
        "ete",
    ], {
        e: "mekanism:enriched_tin",
        t: "mekanism:ultimate_control_circuit",
        f: "mek1000:reinforced_steel_casing",
    });
    event.custom({
        type: "mekanism:chemical_infusing",
        leftInput: {
            amount: 1000,
            gas: "mek1000:dvt",
        },
        rightInput: {
            amount: 1,
            gas: "mek1000:soysauce",
        },
        output: {
            gas: "mek1000:ultimate_valine",
            amount: 1,
        },
    }).id("mek1000:ultimate_valine");
});
onEvent("fluid.tags", (event) => {
    event.remove("minecraft:water", "ultimatesolarpanels:lux");
});
