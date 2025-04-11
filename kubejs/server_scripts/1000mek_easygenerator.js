onEvent("recipes", (event) => {
    [
        // generator
        "mekanismgenerators:solar_generator",
        "mekanismgenerators:advanced_solar_generator",
        "mekanismgenerators:gas_burning_generator",
        "mekanismgenerators:wind_generator",
        "mekanismgenerators:solar_panel",
        "mekanismgenerators:heat_generator",
        "mekanismgenerators:bio_generator",
        // turbine
        "mekanismgenerators:turbine_casing",
        "mekanismgenerators:saturating_condenser",
        "mekanismgenerators:turbine_blade",
        "mekanismgenerators:turbine_rotor",
        "mekanismgenerators:electromagnetic_coil",
        // boiler
        "mekanism:superheating_element",
        "mekanism:pressure_disperser",
        "mekanism:structural_glass",
        "mekanism:boiler_casing",
        // fission
        "mekanism:solar_neutron_activator",
        "mekanismgenerators:fission_reactor_casing",
        "mekanismgenerators:reactor_glass",
        "mekanismgenerators:fission_fuel_assembly",
    ].forEach((name) => {
        event.remove({ output: name });
    });

    // fusion
    event.remove({ output: "mekanismgenerators:fusion_reactor_frame" });

    // generator
    event.shapeless("mekanismgenerators:bio_generator", ["mekanism:bio_fuel", "iron_block"]);
    event.shapeless("mekanismgenerators:heat_generator", ["iron_ingot", "furnace"]);
    event.shapeless("mekanismgenerators:solar_panel", ["lapis_lazuli", "redstone_block", "#forge:glass_panes"]);
    event.shapeless("mekanismgenerators:solar_generator", ["mekanismgenerators:solar_panel", "iron_ingot"]);
    event.shapeless("mekanismgenerators:advanced_solar_generator", "4x mekanismgenerators:solar_generator");
    event.shapeless("mekanismgenerators:gas_burning_generator", ["mekanism:electrolytic_core", "mekanism:steel_casing"]);
    event.shaped("mekanismgenerators:wind_generator", [
        " O ",
        "ORO",
        " O ",
    ], {
        R: "redstone",
        O: "mekanism:ingot_osmium",
    });

    // turbine
    event.recipes.mekanism.metallurgic_infusing("64x mekanismgenerators:turbine_casing", "mekanism:block_osmium", "100x mekanism:carbon");
    event.recipes.mekanism.metallurgic_infusing("16x mekanismgenerators:saturating_condenser", "bucket", "100x mekanism:carbon");
    event.recipes.mekanism.metallurgic_infusing("32x mekanismgenerators:turbine_blade", "4x mekanism:ingot_steel", "100x mekanism:carbon");
    event.recipes.mekanism.enriching("16x mekanismgenerators:turbine_rotor", "mekanism:ingot_steel");

    event.shaped("8x mekanismgenerators:electromagnetic_coil", [
        "SGS",
        "GEG",
        "SGS",
    ], {
        S: "mekanism:block_steel",
        G: "gold_block",
        E: "mekanism:energy_tablet",
    });

    // boiler
    event.recipes.mekanism.purifying("32x mekanism:superheating_element", "copper_block", "200x mekanism:oxygen");
    event.recipes.mekanism.enriching("32x mekanism:boiler_casing", "mekanism:block_steel");
    event.recipes.mekanism.metallurgic_infusing("64x mekanism:structural_glass", "#forge:glass", "100x mekanism:carbon");
    event.smelting("16x mekanism:pressure_disperser", "mekanism:block_steel");

    // fusion
    event.custom({ type: "mekanism:reaction", itemInput: { ingredient: { item: "megacells:bulk_cell_component" } }, fluidInput: { amount: 2000, fluid: "integrateddynamics:liquid_chorus" }, gasInput: { amount: 100, gas: "mekanism:fissile_fuel" }, energyRequired: 200, duration: 400, itemOutput: { item: "mekanismgenerators:fusion_reactor_frame" } }),
    event.custom({
        type: "mekanism:nucleosynthesizing",
        itemInput: { ingredient: { item: "mekanism:steel_casing" } },
        gasInput: { amount: 1, gas: "mekanism:antimatter" },
        output: { item: "mekanismgenerators:fusion_reactor_frame" }, duration: 1000000, // 1000*1000
    });
    event.custom({
        type: "mekanism:activating",
        input: {
            amount: 1,
            gas: "mek1000:valine3g",
        },
        output: {
            gas: "mekanismgenerators:fusion_fuel", amount: 1000,
        } });

    // fissile fuel
    event.custom({
        type: "mekanism:centrifuging",
        input: {
            amount: 1,
            gas: "mekanism:spent_nuclear_waste",

        },
        output: {
            gas: "mekanism:fissile_fuel",
            amount: 1,
        } });

    //
    event.shaped("mekanism:solar_neutron_activator", [
        "eae",
        "tnt",
        "ccc",
    ], {
        a: "mekanism:hdpe_sheet",
        c: "#forge:storage_blocks/bronze",
        e: "mekanism:alloy_atomic",
        t: "mekanism:ultimate_control_circuit",
        n: "mekanism:steel_casing",
    });
    event.recipes.mekanismMetallurgicInfusing("16x mekanism:steel_casing", "mekanism:crystal_iron", "100x mekanism:carbon");
    event.shaped("32x mekanismgenerators:fission_reactor_casing", [
        " t ",
        "tnt",
        " t ",
    ], {
        t: "mekanism:block_lead",
        n: "mekanism:steel_casing",
    });
    event.shaped("64x mekanismgenerators:reactor_glass", [
        " t ",
        "tnt",
        " t ",
    ], {
        t: "#forge:glass",
        n: "mekanism:block_lead",
    });
    event.shaped("32x mekanismgenerators:fission_fuel_assembly", [
        "ete",
        "ene",
        "ete",
    ], {
        t: "#forge:storage_blocks/steel",
        n: "mekanism:ultimate_chemical_tank",
        e: "mekanism:block_lead",
    });
    event.custom({
        type: "mekanism:centrifuging",
        input: {
            amount: 1,
            gas: "mekanism:spent_nuclear_waste",

        },
        output: {
            gas: "mekanism:fissile_fuel",
            amount: 1,
        } });
});
