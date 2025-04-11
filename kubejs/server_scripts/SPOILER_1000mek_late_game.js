onEvent("recipes", (event) => {
    const lategame = [
        "mekaevolution:absolute_energy_cube",
        "mekaevolution:supreme_energy_cube",
        "mekaevolution:cosmic_energy_cube",
        "mekaevolution:infinite_energy_cube",
    ];
    lategame.forEach((name) => {
        event.remove({ output: name });
    });
    const cube = (output, E, T, N) => {
        event.shaped(output, [
            "tet",
            "ene",
            "tet",
        ], {
            e: E,
            t: T,
            n: N,
        });
    };
    cube("mekaevolution:absolute_energy_cube", "mekaddelement:dust_calcium_oxide", "mekaevolution:absolute_control_circuit", "mekanism:ultimate_energy_cube");
    cube("mekaevolution:supreme_energy_cube", "mekaevolution:absolute_energy_cube", "mekaevolution:supreme_control_circuit", "mekanism:teleportation_core");
    cube("mekaevolution:cosmic_energy_cube", "mekaevolution:supreme_energy_cube", "mekaevolution:cosmic_control_circuit", "mekanism:pellet_antimatter");
    cube("mekaevolution:infinite_energy_cube", "mekaevolution:cosmic_energy_cube", "mekaevolution:infinite_control_circuit", "megacells:cell_component_256m");
});
