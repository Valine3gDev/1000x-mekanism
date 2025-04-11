onEvent("worldgen.remove", (event) => {
    event.removeOres((ores) => {
        ores.blocks = [
            "minecraft:coal_ore",
            "minecraft:iron_ore",
            "minecraft:gold_ore",
            "minecraft:nether_gold_ore",
            "minecraft:copper_ore",
            "minecraft:nether_quartz_ore",
            "minecraft:lapis_ore",
            "minecraft:emerald_ore",
            "minecraft:diamond_ore",
            "minecraft:redstone_ore",
            "minecraft:deepslate_diamond_ore",
            "minecraft:deepslate_lapis_ore",
            "minecraft:deepslate_coal_ore",
            "minecraft:deepslate_copper_ore",
            "minecraft:deepslate_iron_ore",
            "minecraft:deepslate_emerald_ore",
            "minecraft:deepslate_gold_ore",
            "minecraft:deepslate_redstone_ore",
            "ae2:quartz_ore",
            "ae2:deepslate_quartz_ore",
            "superores:super_coal_ore",
            "superores:super_deepslate_coal_ore",
            "superores:super_nether_gold_ore",
            "superores:super_nether_quartz_ore",
            "minecraft:ancient_debris",
            "superores:super_deepslate_lapis_lazuli_ore",
            "superores:super_deepslate_diamond_ore",
            "superores:super_diamond_ore",
            "superores:super_emerald_ore",
            "superores:super_deepslate_emerald_ore",
            "superores:super_gold_ore",
            "superores:super_deepslate_gold_ore",
            "minecraft:nether_gold_ore",
            "superores:super_deepslate_copper_ore",
            "superores:super_copper_ore",
            "superores:super_redstone_ore",
            "superores:super_deepslate_redstone_ore",
            "minecraft:nether_quartz_ore",
            "superores:super_lapis_lazuli_ore",
            "superores:super_iron_ore",
            "superores:super_deepslate_iron_ore",
            "ultimatesolarpanels:iridium_ore",
            "superores:super_osmium_ore",
            "superores:super_deepslate_osmium_ore",
            "superores:super_fluorite_ore",
            "superores:super_deepslate_fluorite_ore",
            "superores:super_tin_ore",
            "superores:super_deepslate_tin_ore",
            "superores:super_uranium_ore",
            "superores:super_deepslate_uranium_ore",
            "superores:super_deepslate_lead_ore",
            "superores:super_lead_ore",
            "superores:super_iridium_ore",
        ];
    });
});
onEvent("worldgen.add", (event) => {
    const { anchors } = event;
    // copper
    event.addOre((ore) => {
        ore.id = "kubejs:copper_vein";
        ore.biomes = { not: ["^nether", "^the_end"] };
        ore.addTarget("minecraft:stone", "minecraft:copper_ore");
        ore.addTarget("minecraft:deepslate", "minecraft:deepslate_copper_ore");
        ore.count([8, 12])
            .squared()
            .triangleHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256),
            );
        ore.size = 64;
        ore.noSurface = 0;
        ore.worldgenLayer = "underground_ores";
        ore.chance = 0;
    });
    event.addOre((ore) => {
        ore.id = "kubejs:super_copper_vein";
        ore.biomes = { not: ["^nether", "^the_end"] };
        ore.addTarget("minecraft:emerald_ore", "superores:super_copper_ore");
        ore.addTarget("minecraft:deepslate_emerald_ore", "superores:super_deepslate_copper_ore");
        ore.count(200)
            .squared()
            .uniformHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256),
            );
        ore.size = 32;
        ore.noSurface = 0;
        ore.worldgenLayer = "underground_ores";
        ore.chance = 0;
    });
    // emerald
    event.addOre((ore) => {
        ore.id = "kubejs:emerald_vein";
        ore.biomes = { not: ["^nether", "^the_end"] };
        ore.addTarget("minecraft:stone", "minecraft:emerald_ore");
        ore.addTarget("minecraft:deepslate", "minecraft:deepslate_emerald_ore");
        ore.count([8, 12])
            .squared()
            .triangleHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256),
            );
        ore.size = 64;
        ore.noSurface = 0;
        ore.worldgenLayer = "underground_ores";
        ore.chance = 0;
    });
    event.addOre((ore) => {
        ore.id = "kubejs:super_emerald_vein";
        ore.biomes = { not: ["^nether", "^the_end"] };
        ore.addTarget("minecraft:emerald_ore", "superores:super_emerald_ore");
        ore.addTarget("minecraft:deepslate_emerald_ore", "superores:super_deepslate_emerald_ore");
        ore.count(200)
            .squared()
            .uniformHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256),
            );
        ore.size = 32;
        ore.noSurface = 0;
        ore.worldgenLayer = "underground_ores";
        ore.chance = 0;
    });
    // lapis
    event.addOre((ore) => {
        ore.id = "kubejs:lapis_vein";
        ore.biomes = { not: ["^nether", "^the_end"] };
        ore.addTarget("minecraft:stone", "minecraft:lapis_ore");
        ore.addTarget("minecraft:deepslate", "minecraft:deepslate_lapis_ore");
        ore.count([8, 12])
            .squared()
            .triangleHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256),
            );
        ore.size = 64;
        ore.noSurface = 0;
        ore.worldgenLayer = "underground_ores";
        ore.chance = 0;
    });
    event.addOre((ore) => {
        ore.id = "kubejs:super_lapis_vein";
        ore.biomes = { not: ["^nether", "^the_end"] };
        ore.addTarget("minecraft:lapis_ore", "superores:super_lapis_lazuli_ore");
        ore.addTarget("minecraft:deepslate_lapis_ore", "superores:super_deepslate_lapis_lazuli_ore");
        ore.count(200)
            .squared()
            .uniformHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256),
            );
        ore.size = 32;
        ore.noSurface = 0;
        ore.worldgenLayer = "underground_ores";
        ore.chance = 0;
    });
    // redstone
    event.addOre((ore) => {
        ore.id = "kubejs:redstone_vein";
        ore.biomes = { not: ["^nether", "^the_end"] };
        ore.addTarget("minecraft:stone", "minecraft:redstone_ore");
        ore.addTarget("minecraft:deepslate", "minecraft:deepslate_redstone_ore");
        ore.count([8, 12])
            .squared()
            .triangleHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256),
            );
        ore.size = 64;
        ore.noSurface = 0;
        ore.worldgenLayer = "underground_ores";
        ore.chance = 0;
    });
    event.addOre((ore) => {
        ore.id = "kubejs:super_redstone_vein";
        ore.biomes = { not: ["^nether", "^the_end"] };
        ore.addTarget("minecraft:redstone_ore", "superores:super_redstone_ore");
        ore.addTarget("minecraft:deepslate_redstone_ore", "superores:super_deepslate_redstone_ore");
        ore.count(200)
            .squared()
            .uniformHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256),
            );
        ore.size = 32;
        ore.noSurface = 0;
        ore.worldgenLayer = "underground_ores";
        ore.chance = 0;
    });
    // diamond
    event.addOre((ore) => {
        ore.id = "kubejs:diamond_vein";
        ore.biomes = { not: ["^nether", "^the_end"] };
        ore.addTarget("minecraft:stone", "minecraft:diamond_ore");
        ore.addTarget("minecraft:deepslate", "minecraft:deepslate_diamond_ore");
        ore.count([8, 12])
            .squared()
            .triangleHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256),
            );
        ore.size = 64;
        ore.noSurface = 0;
        ore.worldgenLayer = "underground_ores";
        ore.chance = 0;
    });
    event.addOre((ore) => {
        ore.id = "kubejs:super_diamond_vein";
        ore.biomes = { not: ["^nether", "^the_end"] };
        ore.addTarget("minecraft:diamond_ore", "superores:super_diamond_ore");
        ore.addTarget("minecraft:deepslate_diamond_ore", "superores:super_deepslate_diamond_ore");
        ore.count(200)
            .squared()
            .uniformHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256),
            );
        ore.size = 32;
        ore.noSurface = 0;
        ore.worldgenLayer = "underground_ores";
        ore.chance = 0;
    });
    // coal
    event.addOre((ore) => {
        ore.id = "kubejs:coal_vein";
        ore.biomes = { not: ["^nether", "^the_end"] };
        ore.addTarget("minecraft:stone", "minecraft:coal_ore");
        ore.addTarget("minecraft:deepslate", "minecraft:deepslate_coal_ore");
        ore.count([8, 12])
            .squared()
            .triangleHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256),
            );
        ore.size = 64;
        ore.noSurface = 0;
        ore.worldgenLayer = "underground_ores";
        ore.chance = 0;
    });
    event.addOre((ore) => {
        ore.id = "kubejs:super_coal_vein";
        ore.biomes = { not: ["^nether", "^the_end"] };
        ore.addTarget("minecraft:coal_ore", "superores:super_coal_ore");
        ore.addTarget("minecraft:deepslate_coal_ore", "superores:super_deepslate_coal_ore");
        ore.count(200)
            .squared()
            .uniformHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256),
            );
        ore.size = 32;
        ore.noSurface = 0;
        ore.worldgenLayer = "underground_ores";
        ore.chance = 0;
    });
    // iron
    event.addOre((ore) => {
        ore.id = "kubejs:iron_vein";
        ore.biomes = { not: ["^nether", "^the_end"] };
        ore.addTarget("minecraft:stone", "minecraft:iron_ore");
        ore.addTarget("minecraft:deepslate", "minecraft:deepslate_iron_ore");
        ore.count([8, 12])
            .squared()
            .triangleHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256),
            );
        ore.size = 64;
        ore.noSurface = 0;
        ore.worldgenLayer = "underground_ores";
        ore.chance = 0;
    });
    event.addOre((ore) => {
        ore.id = "kubejs:super_iron_vein";
        ore.biomes = { not: ["^nether", "^the_end"] };
        ore.addTarget("minecraft:iron_ore", "superores:super_iron_ore");
        ore.addTarget("minecraft:deepslate_iron_ore", "superores:super_deepslate_iron_ore");
        ore.count(200)
            .squared()
            .uniformHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256),
            );
        ore.size = 32;
        ore.noSurface = 0;
        ore.worldgenLayer = "underground_ores";
        ore.chance = 0;
    });
    // gold
    event.addOre((ore) => {
        ore.id = "kubejs:gold_vein";
        ore.biomes = { not: ["^nether", "^the_end"] };
        ore.addTarget("minecraft:stone", "minecraft:gold_ore");
        ore.addTarget("minecraft:deepslate", "minecraft:deepslate_gold_ore");
        ore.count([8, 12])
            .squared()
            .triangleHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256),
            );
        ore.size = 64;
        ore.noSurface = 0;
        ore.worldgenLayer = "underground_ores";
        ore.chance = 0;
    });
    event.addOre((ore) => {
        ore.id = "kubejs:super_gold_vein";
        ore.biomes = { not: ["^nether", "^the_end"] };
        ore.addTarget("minecraft:gold_ore", "superores:super_gold_ore");
        ore.addTarget("minecraft:deepslate_gold_ore", "superores:super_deepslate_gold_ore");
        ore.count(200)
            .squared()
            .uniformHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256),
            );
        ore.size = 32;
        ore.noSurface = 0;
        ore.worldgenLayer = "underground_ores";
        ore.chance = 0;
    });
    // certus
    event.addOre((ore) => {
        ore.id = "kubejs:certus_vein";
        ore.biomes = { not: ["^nether", "^the_end"] };
        ore.addTarget("minecraft:stone", "ae2:quartz_ore");
        ore.addTarget("minecraft:deepslate", "ae2:deepslate_quartz_ore");
        ore.count([8, 12])
            .squared()
            .triangleHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256),
            );
        ore.size = 64;
        ore.noSurface = 0;
        ore.worldgenLayer = "underground_ores";
        ore.chance = 0;
    });

    const netherSurfaceChance = 0.75;
    event.addOre((ore) => {
        ore.id = "kubejs:nether_gold_vein";

        ore.addTarget("minecraft:netherrack", "minecraft:nether_gold_ore");
        ore.count([10, 15])
            .squared()
            .uniformHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256),
            );
        ore.size = 64;
        ore.noSurface = netherSurfaceChance;
        ore.worldgenLayer = "underground_ores";
        ore.chance = 0;
        ore.biomes = "^nether";
    });
    // quarts vein
    event.addOre((ore) => {
        ore.id = "kubejs:nether_quartz_vein";

        ore.addTarget("minecraft:netherrack", "minecraft:nether_quartz_ore");
        ore.count([15, 35])
            .squared()
            .uniformHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256),
            );
        ore.size = 64;
        ore.noSurface = netherSurfaceChance;
        ore.worldgenLayer = "underground_ores";
        ore.chance = 0;
        ore.biomes = "^nether";
    });
    // super nether gold
    event.addOre((ore) => {
        ore.id = "kubejs:super_nether_gold_vein";

        ore.addTarget("minecraft:nether_gold_ore", "superores:super_nether_gold_ore");
        ore.count([10, 15])
            .squared()
            .uniformHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256),
            );
        ore.size = 64;
        ore.noSurface = netherSurfaceChance;
        ore.worldgenLayer = "underground_ores";
        ore.chance = 0;
        ore.biomes = "^nether";
    });
    // super quarts vein
    event.addOre((ore) => {
        ore.id = "kubejs:super_nether_quartz_vein";

        ore.addTarget("minecraft:nether_quartz_ore", "superores:super_nether_quartz_ore");
        ore.count(200)
            .squared()
            .uniformHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256),
            );
        ore.size = 64;
        ore.noSurface = netherSurfaceChance;
        ore.worldgenLayer = "underground_ores";
        ore.chance = 0;
        ore.biomes = "^nether";
    });
    // debris
    event.addOre((ore) => {
        ore.id = "kubejs:netherite_vein";

        ore.addTarget("minecraft:netherrack", "minecraft:ancient_debris");
        ore.count([3, 5])
            .squared()
            .uniformHeight(
                anchors.aboveBottom(0),
                anchors.absolute(16),
            );
        ore.size = 40;
        ore.noSurface = netherSurfaceChance;
        ore.worldgenLayer = "underground_ores";
        ore.chance = 0;
        ore.biomes = "^nether";
    });
    // iridium
    event.addOre((ore) => {
        ore.id = "kubejs:iridium_vein";

        ore.addTarget("minecraft:netherrack", "ultimatesolarpanels:iridium_ore");
        ore.count([10, 20])
            .squared()
            .uniformHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256),
            );
        ore.size = 64;
        ore.noSurface = netherSurfaceChance;
        ore.worldgenLayer = "underground_ores";
        ore.chance = 0;
        ore.biomes = "^nether";
    });
    event.addOre((ore) => {
        ore.id = "kubejs:super_iridium_vein";

        ore.addTarget("ultimatesolarpanels:iridium_ore", "superores:super_iridium_ore");
        ore.count(100)
            .squared()
            .uniformHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256),
            );
        ore.size = 64;
        ore.noSurface = netherSurfaceChance;
        ore.worldgenLayer = "underground_ores";
        ore.chance = 0;
        ore.biomes = "^nether";
    });
    // mekanism

    // osmium
    event.addOre((ore) => {
        ore.id = "kubejs:osmium_vein";
        ore.biomes = { not: ["^nether", "^the_end"] };
        ore.addTarget("minecraft:stone", "mekanism:osmium_ore");
        ore.addTarget("minecraft:deepslate", "mekanism:deepslate_osmium_ore");
        ore.count([8, 12])
            .squared()
            .triangleHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256),
            );
        ore.size = 64;
        ore.noSurface = 0;
        ore.worldgenLayer = "underground_ores";
        ore.chance = 0;
    });
    event.addOre((ore) => {
        ore.id = "kubejs:super_osmium_vein";
        ore.biomes = { not: ["^nether", "^the_end"] };
        ore.addTarget("mekanism:osmium_ore", "superores:super_osmium_ore");
        ore.addTarget("mekanism:deepslate_osmium_ore", "superores:super_deepslate_osmium_ore");
        ore.count(200)
            .squared()
            .uniformHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256),
            );
        ore.size = 32;
        ore.noSurface = 0;
        ore.worldgenLayer = "underground_ores";
        ore.chance = 0;
    });
    // uranium
    event.addOre((ore) => {
        ore.id = "kubejs:uranium_vein";
        ore.biomes = { not: ["^nether", "^the_end"] };
        ore.addTarget("minecraft:stone", "mekanism:uranium_ore");
        ore.addTarget("minecraft:deepslate", "mekanism:deepslate_uranium_ore");
        ore.count([8, 12])
            .squared()
            .triangleHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256),
            );
        ore.size = 64;
        ore.noSurface = 0;
        ore.worldgenLayer = "underground_ores";
        ore.chance = 0;
    });
    event.addOre((ore) => {
        ore.id = "kubejs:super_uranium_vein";
        ore.biomes = { not: ["^nether", "^the_end"] };
        ore.addTarget("mekanism:uranium_ore", "superores:super_uranium_ore");
        ore.addTarget("mekanism:deepslate_uranium_ore", "superores:super_deepslate_uranium_ore");
        ore.count(200)
            .squared()
            .uniformHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256),
            );
        ore.size = 32;
        ore.noSurface = 0;
        ore.worldgenLayer = "underground_ores";
        ore.chance = 0;
    });
    // tin
    event.addOre((ore) => {
        ore.id = "kubejs:tin_vein";
        ore.biomes = { not: ["^nether", "^the_end"] };
        ore.addTarget("minecraft:stone", "mekanism:tin_ore");
        ore.addTarget("minecraft:deepslate", "mekanism:deepslate_tin_ore");
        ore.count([8, 12])
            .squared()
            .triangleHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256),
            );
        ore.size = 64;
        ore.noSurface = 0;
        ore.worldgenLayer = "underground_ores";
        ore.chance = 0;
    });
    event.addOre((ore) => {
        ore.id = "kubejs:super_tin_vein";
        ore.biomes = { not: ["^nether", "^the_end"] };
        ore.addTarget("mekanism:tin_ore", "superores:super_tin_ore");
        ore.addTarget("mekanism:deepslate_tin_ore", "superores:super_deepslate_tin_ore");
        ore.count(200)
            .squared()
            .uniformHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256),
            );
        ore.size = 32;
        ore.noSurface = 0;
        ore.worldgenLayer = "underground_ores";
        ore.chance = 0;
    });
    // fluorite
    event.addOre((ore) => {
        ore.id = "kubejs:fluorite_vein";
        ore.biomes = { not: ["^nether", "^the_end"] };
        ore.addTarget("minecraft:stone", "mekanism:fluorite_ore");
        ore.addTarget("minecraft:deepslate", "mekanism:deepslate_fluorite_ore");
        ore.count([8, 12])
            .squared()
            .triangleHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256),
            );
        ore.size = 64;
        ore.noSurface = 0;
        ore.worldgenLayer = "underground_ores";
        ore.chance = 0;
    });
    event.addOre((ore) => {
        ore.id = "kubejs:super_fluorite_vein";
        ore.biomes = { not: ["^nether", "^the_end"] };
        ore.addTarget("mekanism:fluorite_ore", "superores:super_fluorite_ore");
        ore.addTarget("mekanism:deepslate_fluorite_ore", "superores:super_deepslate_fluorite_ore");
        ore.count(200)
            .squared()
            .uniformHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256),
            );
        ore.size = 32;
        ore.noSurface = 0;
        ore.worldgenLayer = "underground_ores";
        ore.chance = 0;
    });
    // lead
    event.addOre((ore) => {
        ore.id = "kubejs:lead_vein";
        ore.biomes = { not: ["^nether", "^the_end"] };
        ore.addTarget("minecraft:stone", "mekanism:lead_ore");
        ore.addTarget("minecraft:deepslate", "mekanism:deepslate_lead_ore");
        ore.count([8, 12])
            .squared()
            .triangleHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256),
            );
        ore.size = 64;
        ore.noSurface = 0;
        ore.worldgenLayer = "underground_ores";
        ore.chance = 0;
    });
    event.addOre((ore) => {
        ore.id = "kubejs:super_lead_vein";
        ore.biomes = { not: ["^nether", "^the_end"] };
        ore.addTarget("mekanism:lead_ore", "superores:super_lead_ore");
        ore.addTarget("mekanism:deepslate_lead_ore", "superores:super_deepslate_lead_ore");
        ore.count(200)
            .squared()
            .uniformHeight(
                anchors.aboveBottom(0),
                anchors.absolute(256),
            );
        ore.size = 32;
        ore.noSurface = 0;
        ore.worldgenLayer = "underground_ores";
        ore.chance = 0;
    });
});
