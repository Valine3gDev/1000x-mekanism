onEvent("recipes", (event) => {
    event.custom({ type: "mekanism:reaction",
        itemInput: { item: "mekanism:bio_fuel" },
        fluidInput: { amount: 10000, tag: "minecraft:water" },
        gasInput: { amount: 1, gas: "mek1000:valine3g" },
        energyRequired: 1, duration: 1,
        gasOutput: { gas: "mek1000:valine3g", amount: 10000 },
        itemOutput: { item: "mekanism:bio_fuel" },
    });

    event.custom({ type: "mekanism:reaction",
        itemInput: { amount: 32, item: "minecraft:hay_block" },
        fluidInput: { amount: 3642, tag: "minecraft:water" },
        gasInput: { amount: 7, gas: "mek1000:valine3g" },
        energyRequired: 1000, duration: 1000,
        gasOutput: { gas: "mek1000:saltless_dried_soysouce", amount: 1000 },
    });

    event.custom({ type: "mekanism:chemical_infusing", leftInput: { amount: 1, gas: "mekanism:fissile_fuel" }, rightInput: { amount: 1, gas: "mekanism:ethene" }, output: { gas: "mek1000:valine3g", amount: 2 } });
});
