onEvent("recipes", (event) => {
    const oxidize = (input, out, count) => (event.custom({
        type: "mekanism:oxidizing",
        input: {
            ingredient: {
                item: input,
            },
        },
        output: {
            gas: out,
            amount: count,
        },
    }));

    oxidize("minecraft:quartz", "mek1000:vaporized_quartz", 1);
    oxidize("minecraft:iron_ingot", "mek1000:vaporized_iron", 1);
    oxidize("minecraft:coal", "mek1000:vaporized_coal", 1);
    oxidize("minecraft:diamond", "mek1000:vaporized_diamond", 1);
    oxidize("minecraft:emerald", "mek1000:vaporized_emerald", 1);
    oxidize("minecraft:lapis_lazuli", "mek1000:vaporized_lapis", 1);
    oxidize("minecraft:copper_ingot", "mek1000:vaporized_copper", 1);
    oxidize("minecraft:amethyst_shard", "mek1000:vaporized_amethyst", 1);
    oxidize("minecraft:redstone", "mek1000:vaporized_redstone", 1);
    oxidize("mekanism:fluorite_gem", "mek1000:vaporized_fluorite", 1);
    oxidize("mekanism:ingot_osmium", "mek1000:vaporized_osmium", 1);
    oxidize("mekanism:ingot_tin", "mek1000:vaporized_tin", 1);
    oxidize("mekanism:ingot_lead", "mek1000:vaporized_lead", 1);
    oxidize("mekanism:ingot_uranium", "mek1000:vaporized_uranium", 1);
    oxidize("minecraft:gold_ingot", "mek1000:vaporized_gold", 1);
    oxidize("ae2:certus_quartz_crystal", "mek1000:vaporized_certus", 1);
    oxidize("ultimatesolarpanels:iridium", "mek1000:vaporized_iridium", 1);

    oxidize("mek1000:compressed_purified_quartz_rawore", "mek1000:vaporized_quartz", 6000);
    oxidize("mek1000:compressed_purified_iron_rawore", "mek1000:vaporized_iron", 8100);
    oxidize("mek1000:compressed_purified_coal_rawore", "mek1000:vaporized_coal", 4000);
    oxidize("mek1000:compressed_purified_diamond_rawore", "mek1000:vaporized_diamond", 1000);
    oxidize("mek1000:compressed_purified_emerald_rawore", "mek1000:vaporized_emerald", 1000);
    oxidize("mek1000:compressed_purified_lapis_rawore", "mek1000:vaporized_lapis", 6000);
    oxidize("mek1000:compressed_purified_copper_rawore", "mek1000:vaporized_copper", 8100);
    oxidize("minecraft:amethyst_block", "mek1000:vaporized_amethyst", 4);
    oxidize("64x minecraft:amethyst_block", "mek1000:vaporized_amethyst", 256);
    oxidize("mek1000:crystal_redstone", "mek1000:vaporized_redstone", 48);
    oxidize("64x mek1000:crystal_redstone", "mek1000:vaporized_redstone", 3072);
    oxidize("mek1000:compressed_purified_fluorite_rawore", "mek1000:vaporized_fluorite", 6000);
    oxidize("mek1000:compressed_purified_osmium_rawore", "mek1000:vaporized_osmium", 8100);
    oxidize("mek1000:compressed_purified_tin_rawore", "mek1000:vaporized_tin", 8100);
    oxidize("mek1000:compressed_purified_lead_rawore", "mek1000:vaporized_lead", 8100);
    oxidize("mek1000:compressed_purified_uranium_rawore", "mek1000:vaporized_uranium", 8100);
    oxidize("mek1000:compressed_purified_gold_rawore", "mek1000:vaporized_gold", 8100);
    oxidize("mek1000:compressed_purified_certus_quartz_rawore", "mek1000:vaporized_certus", 8100);
    oxidize("mek1000:compressed_purified_iridium_rawore", "mek1000:vaporized_iridium", 8100);
    event.custom({
        type: "mekanism:nucleosynthesizing",
        itemInput: {
            ingredient: {
                item: "minecraft:amethyst_block",
            },
        },
        gasInput: {
            amount: 1,
            gas: "mekanism:antimatter",
        },
        output: {
            item: "minecraft:budding_amethyst",
        },
        duration: 1,
    });
    event.recipes.lazierae2.grinder("mek1000:dust_amethyst", "minecraft:amethyst_shard").processingTime(20).energyCost(500);
    event.recipes.mekanism.crushing("mek1000:dust_amethyst", "minecraft:amethyst_shard");
    event.recipes.lazierae2.aggregator("2x minecraft:amethyst_shard", ["minecraft:sand", "mek1000:dust_amethyst"]).processingTime(20).energyCost(500);
    event.recipes.lazierae2.etcher("4x mek1000:the_null", ["#mek1000:qio/t8", "4x megacells:bulk_cell_component", "4x megacells:cell_component_256m"]).processingTime(20).energyCost(40000);

    function cobble(output, input, input2) {
        event.shaped(output, [
            "ttt",
            "ttt",
            "ttt",
        ], {
            t: input,
        }),
        event.shapeless(input2, [output]);
    }

    cobble("mek1000:2xcobblestone", "minecraft:cobblestone", "9x minecraft:cobblestone");
    cobble("mek1000:3xcobblestone", "mek1000:2xcobblestone", "9x mek1000:2xcobblestone");
    cobble("mek1000:4xcobblestone", "mek1000:3xcobblestone", "9x mek1000:3xcobblestone");
    cobble("mek1000:5xcobblestone", "mek1000:4xcobblestone", "9x mek1000:4xcobblestone");
    cobble("mek1000:6xcobblestone", "mek1000:5xcobblestone", "9x mek1000:5xcobblestone");
    cobble("mek1000:7xcobblestone", "mek1000:6xcobblestone", "9x mek1000:6xcobblestone");
    cobble("mek1000:8xcobblestone", "mek1000:7xcobblestone", "9x mek1000:7xcobblestone");
    event.smelting("mek1000:bedrockium_ingot", "mek1000:8xcobblestone", 1, 500);
    event.custom({
        type: "mekanism:reaction",
        itemInput: {
            ingredient: {
                item: "mek1000:bedrockium_ingot",
            },
        },
        fluidInput: {
            amount: 10000,
            fluid: "mek1000:condenced_lux",
        },
        gasInput: {
            amount: 10000,
            gas: "mekanism:antimatter",
        },
        energyRequired: 40000000000000,
        duration: 400,
        itemOutput: {
            item: "mek1000:neutronium_ingot",
            count: 1,
        },
    });
    event.shaped("mek1000:black_casing", [
        "tst",
        "sds",
        "tst",
    ], {
        t: "mek1000:5xcobblestone",
        s: "mek1000:4xcobblestone",
        d: "mek1000:bedrockium_ingot",
    });
    event.shaped(Item.of("ironjetpacks:jetpack", "{Id:\"ironjetpacks:creative\",Throttle:1.0d}"), [
        "ttt",
        "tdt",
        "ttt",
    ], {
        t: "mek1000:infinity_ingot",
        d: Item.of("ironjetpacks:jetpack", "{Id:\"ironjetpacks:emerald\",Throttle:1.0d}"),
    });
    event.shaped(Item.of("mekanism:creative_energy_cube", "{mekData:{EnergyContainers:[{Container:0b,stored:\"18446744073709551615.9999\"}]}}"), [
        "ttt",
        "tdt",
        "ttt",
    ], {
        t: "mek1000:infinity_ingot",
        d: "mekaevolution:infinite_energy_cube",
    });
    event.shaped("mek1000:creative_talisman", [
        "atb",
        "tdt",
        "cte",
    ], {
        t: "#mek1000:qio/t8",
        a: "mekanism:creative_fluid_tank",
        b: Item.of("mekanism:creative_energy_cube", "{mekData:{EnergyContainers:[{Container:0b,stored:\"18446744073709551615.9999\"}]}}"),
        c: "ae2:creative_energy_cell",
        d: Item.of("ironjetpacks:jetpack", "{Id:\"ironjetpacks:creative\",Throttle:1.0d}"),
        e: "mekanism:creative_chemical_tank",
    });
    event.shaped("1x mekanism:creative_chemical_tank", [
        "   ",
        " A ",
        "   ",
    ], {
        A: "mekanism:creative_chemical_tank",
    },
    );
    event.shaped("1x mekanism:creative_bin", [
        "   ",
        " A ",
        "   ",
    ], {
        A: "mekanism:creative_bin",
    },
    );
    event.shaped("1x mekanism:creative_fluid_tank", [
        "   ",
        " A ",
        "   ",
    ], {
        A: "mekanism:creative_fluid_tank",
    });
});
