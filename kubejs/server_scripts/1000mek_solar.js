onEvent("recipes", (event) => {
    event.remove({ id: "ultimatesolarpanels:ender_quantum_component_rcp" });
    event.remove({ id: "ultimatesolarpanels:qsarcp" });
    event.remove({ id: `ultimatesolarpanels:pileof_sunnarium_rcp` });
    event.remove({ id: `ultimatesolarpanels:enriched_sunnarium_rcp` });
    event.remove({ id: `ultimatesolarpanels:photonic_solar_panel_rcp` });
    event.remove({ id: `ultimatesolarpanels:hybrid_solar_array_rcp` });
    event.remove({ id: `ultimatesolarpanels:hybrid_solar_panel_rcp` });
    event.remove({ id: `ultimatesolarpanels:riircp` });

    event.recipes.mekanismMetallurgicInfusing(`16x ultimatesolarpanels:pile_of_sunnarium`, "16x ultimatesolarpanels:iridium", "100x mekanism:gold");
    event.recipes.mekanism.compressing("ultimatesolarpanels:enriched_sunnarium", `4x ultimatesolarpanels:sunnarium`, `1x mekanism:osmium`);
    event.recipes.mekanism.combining(`ultimatesolarpanels:ender_quantum_component`, "16x ultimatesolarpanels:iridium", `4x ultimatesolarpanels:enriched_sunnarium`);
    event.recipes.mekanismMetallurgicInfusing(`ultimatesolarpanels:quantum_solar_array`, "16x ultimatesolarpanels:ultimate_hybrid_solar_array", "100x mekanism:tin");
    event.smelting("ultimatesolarpanels:iridium", `mekanism:crystal_osmium`).cookingTime(400);
    event.recipes.mekanism.purifying(`ultimatesolarpanels:reinforced_iron_ingot`, `mekanism:ingot_steel`, `1x mekanism:oxygen`);

    event.shaped("ultimatesolarpanels:hybrid_solar_array", [
        "GGG",
        "STS",
        "ISI",
    ], {
        G: "minecraft:glass_pane",
        S: "ultimatesolarpanels:pile_of_sunnarium",
        T: `mekanism:block_tin`,
        I: `mekanism:ingot_steel`,
    });

    event.shaped("ultimatesolarpanels:hybrid_solar_panel", [
        "GGG",
        "BSB",
        "BCB",
    ], {
        G: "ultimatesolarpanels:hybrid_solar_array",
        S: "ultimatesolarpanels:advanced_solar_panel",
        C: `mekanism:block_steel`,
        B: `mekanism:ingot_bronze`,
    });

    event.shaped("ultimatesolarpanels:photonic_solar_panel", [
        "LLL",
        "LSL",
        "LLL",
    ], {
        L: "ultimatesolarpanels:light_absorbing_solar_panel",
        S: "compactmekanismmachines:compressed_wind_generator_x131072",
    });
});
