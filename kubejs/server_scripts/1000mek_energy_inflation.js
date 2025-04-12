onEvent("recipes", (event) => {
    event.custom({
        type: "mekanism:energy_conversion",
        input: {
            ingredient: {
                item: "mek1000:crystal_redstone",
            },
        },
        output: 214748364700000,
    });
});
