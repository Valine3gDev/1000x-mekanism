onEvent("recipes", (event) => {
    event.remove({ id: "mekanism:metallurgic_infusing/alloy/atomic" });
    event.remove({ id: "mekanism:metallurgic_infusing/alloy/reinforced" });
    event.remove({ id: "mekanism:metallurgic_infusing/alloy/infused" });

    event.recipes.mekanismMetallurgicInfusing("mekanism:alloy_infused", "10x #forge:ingots/iron", "100x mekanism:redstone");

    event.recipes.mekanismMetallurgicInfusing("4x mekanism:alloy_infused", "12x mekanism:clump_iron", "100x mekanism:redstone");
    event.recipes.mekanismMetallurgicInfusing("mekanism:alloy_reinforced", "24x mekanism:clump_gold", "100x mekanism:diamond");

    event.recipes.mekanismMetallurgicInfusing("mekanism:alloy_atomic", "4x mekanism:elite_control_circuit", "200x mekanism:refined_obsidian");

    event.recipes.mekanismMetallurgicInfusing("32x mekanism:alloy_infused", "mekanism:crystal_iron", "100x mekanism:redstone");
    event.recipes.mekanismMetallurgicInfusing("16x mekanism:alloy_reinforced", "mekanism:crystal_gold", "100x mekanism:diamond");
    event.recipes.mekanismMetallurgicInfusing("4x mekanism:alloy_atomic", "25x mekanism:crystal_osmium", "100x mekanism:refined_obsidian");

    event.recipes.mekanismMetallurgicInfusing("mek1000:illuminate_alloy", "4x mekanism:alloy_atomic", "1000x mek1000:sunnalium");
    event.recipes.mekanismMetallurgicInfusing("mek1000:superheated_alloy", "4x mek1000:illuminate_alloy", "1000x mek1000:iridium");
    event.recipes.mekanismMetallurgicInfusing("mek1000:antinomic_alloy", "4x mek1000:superheated_alloy", "1000x mek1000:resonant");
    event.recipes.mekanismMetallurgicInfusing("mek1000:cosmic_alloy", "4x mek1000:antinomic_alloy", "1000x mek1000:quantum");
    const convert = (item, infuse) => (
        event.custom({
            type: "mekanism:infusion_conversion",
            input: {
                ingredient: {
                    item: item,
                },
            },
            output: {
                infuse_type: infuse,
                amount: 10,
            },
        }));
    convert("ultimatesolarpanels:sunnarium", "mek1000:sunnalium");
    convert("ultimatesolarpanels:iridium", "mek1000:iridium");
    convert("lazierae2:resonating_crystal", "mek1000:resonant");
    convert("ultimatesolarpanels:ender_quantum_component", "mek1000:quantum");
});
