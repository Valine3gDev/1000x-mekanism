onEvent("item.modification", (event) => {
    event.modify("mekanismgenerators:heat_generator", (item) => {
        item.maxStackSize = 64;
    });
    event.modify("mekanismgenerators:solar_generator", (item) => {
        item.maxStackSize = 64;
    });
    event.modify("mekanismgenerators:gas_burning_generator", (item) => {
        item.maxStackSize = 64;
    });
    event.modify("mekanismgenerators:bio_generator", (item) => {
        item.maxStackSize = 64;
    });
    event.modify("mekanismgenerators:advanced_solar_generator", (item) => {
        item.maxStackSize = 64;
    });
    event.modify("mekanismgenerators:wind_generator", (item) => {
        item.maxStackSize = 64;
    });
    event.modify("ender_pearl", (item) => {
        item.maxStackSize = 64;
    });
    event.modify("mekanism:enrichment_chamber", (item) => {
        item.maxStackSize = 64;
    });
    event.modify("mekanism:osmium_compressor", (item) => {
        item.maxStackSize = 64;
    });
    event.modify("mekanism:combiner", (item) => {
        item.maxStackSize = 64;
    });
    event.modify("mekanism:crusher", (item) => {
        item.maxStackSize = 64;
    });
    event.modify("mekanism:metallurgic_infuser", (item) => {
        item.maxStackSize = 64;
    });
    event.modify("mekanism:purification_chamber", (item) => {
        item.maxStackSize = 64;
    });
    event.modify("mekanism:chemical_injection_chamber", (item) => {
        item.maxStackSize = 64;
    });
    event.modify("mekanism:energized_smelter", (item) => {
        item.maxStackSize = 64;
    });
    event.modify("mekanism:precision_sawmill", (item) => {
        item.maxStackSize = 64;
    });
    event.modify("mekanism:quantum_entangloporter", (item) => {
        item.maxStackSize = 64;
    });
    ["smelting", "enriching", "crushing", "compressing", "combining", "purifying", "injecting", "infusing", "sawing"].forEach((name) => {
        event.modify(`mekanism:basic_${name}_factory`, (item) => {
            item.maxStackSize = 64;
        });
        event.modify(`mekanism:advanced_${name}_factory`, (item) => {
            item.maxStackSize = 64;
        });
        event.modify(`mekanism:elite_${name}_factory`, (item) => {
            item.maxStackSize = 64;
        });
        event.modify(`mekanism:ultimate_${name}_factory`, (item) => {
            item.maxStackSize = 64;
        });
    });
});
