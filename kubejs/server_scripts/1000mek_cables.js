onEvent("recipes", (event) => {
    const mekaCable = (output, cable, upgladeMaterial) => {
        event.remove({ output: output });
        event.shaped(`8x ${output}`, [
            "CCC",
            "CUC",
            "CCC",
        ], {
            C: cable,
            U: upgladeMaterial,
        });
    };
    mekaCable("mekaevolution:absolute_universal_cable", "iron_ingot", "redstone");
    mekaCable("mekaevolution:supreme_universal_cable", "mekaevolution:absolute_universal_cable", "mekanism:alloy_infused");
    mekaCable("mekaevolution:cosmic_universal_cable", "mekaevolution:supreme_universal_cable", "mekanism:alloy_reinforced");
    mekaCable("mekaevolution:infinite_universal_cable", "mekaevolution:cosmic_universal_cable", "mekanism:alloy_atomic");
});
