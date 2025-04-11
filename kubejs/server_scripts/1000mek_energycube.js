onEvent("recipes", (event) => {
    event.remove({ output: "mekanism:energy_tablet" });
    event.remove({ output: "mekanism:basic_energy_cube" });
    event.remove({ output: "mekanism:advanced_energy_cube" });
    event.remove({ output: "mekanism:elite_energy_cube" });
    event.remove({ output: "mekanism:ultimate_energy_cube" });

    const upgradeCube = (output, cube, material) => {
        event.shaped(`mekanism:${output}`, [
            " M ",
            "MCM",
            " M ",
        ], {
            M: material,
            C: `mekanism:${cube}`,
        });
    };

    upgradeCube("advanced_energy_cube", "basic_energy_cube", "mekanism:ingot_osmium");
    upgradeCube("elite_energy_cube", "advanced_energy_cube", "gold_ingot");
    upgradeCube("ultimate_energy_cube", "elite_energy_cube", "diamond");

    event.shaped("mekanism:energy_tablet", [
        " O ",
        "ORO",
        " C ",
    ], {
        O: "mekanism:ingot_osmium",
        C: "copper_ingot",
        R: "redstone",
    });

    event.shapeless("mekanism:basic_energy_cube", ["ae2:energy_acceptor", "mekanism:energy_tablet"]);
});
