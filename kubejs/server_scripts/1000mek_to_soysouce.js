onEvent("recipes", (event) => {
    event.custom({ type: "mekanism:reaction",
        itemInput: { item: "minecraft:glass_bottle" },
        fluidInput: { amount: 250, tag: "minecraft:water" },
        gasInput: { amount: 1, gas: "mek1000:saltless_dried_soysouce" },
        energyRequired: 1, duration: 1,
        itemOutput: { item: "mek1000:soysouce_saltless", amount: 1 },
    });
    event.custom({ type: "mekanism:chemical_infusing", leftInput: { amount: 2, gas: "mek1000:saltless_dried_soysouce" }, rightInput: { amount: 1, gas: "mekanism:brine" }, output: { gas: "mek1000:soysauce", amount: 3 } });

    event.custom({ type: "mekanism:reaction",
        itemInput: { item: "minecraft:glass_bottle" },
        fluidInput: { amount: 1, tag: "minecraft:water" },
        gasInput: { amount: 1, gas: "mek1000:soysauce" },
        energyRequired: 1, duration: 1,
        itemOutput: { item: "mek1000:soysauce", amount: 1 },
    });
    event.custom({ type: "mekanism:reaction",
        itemInput: { amount: 16, item: "minecraft:egg" },
        fluidInput: { amount: 1, tag: "minecraft:water" },
        gasInput: { amount: 1, gas: "mek1000:soysauce" },
        energyRequired: 1, duration: 1,
        itemOutput: { item: "mek1000:soysauce_egg", amount: 16 },
    });
});
