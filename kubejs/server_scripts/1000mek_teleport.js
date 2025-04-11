onEvent("recipes", (event) => {
    event.remove({ output: "mekanism:teleportation_core" });
    event.shaped("mekanism:teleportation_core", [
        "SGA",
        "GLG",
        "AGS",
    ], {
        S: "ae2:singularity",
        G: "mekanism:shard_gold",
        L: "integrateddynamics:logic_director",
        A: "mekaevolution:absolute_control_circuit",
    });

    event.remove({ output: "mekanism:teleporter" });
    event.shaped("mekanism:teleporter", [
        " G ",
        "GSG",
        " G ",
    ], {
        S: "mekanism:steel_casing",
        G: "gold_ingot",
    });

    event.remove({ output: "mekanism:portable_teleporter" });
    event.shapeless("mekanism:portable_teleporter", ["mekanism:steel_casing", "mekanism:energy_tablet"]);

    event.replaceInput({ output: "mekanism:quantum_entangloporter" }, "mekanism:teleportation_core", "mekanism:steel_casing");
});
