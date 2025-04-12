onEvent("recipes", (event) => {
    event.custom({
        type: "mekanism:nucleosynthesizing",
        itemInput: { ingredient: { item: "mekanism:alloy_atomic" } },
        gasInput: { amount: 100, gas: "mekanism:antimatter" },
        output: { item: "megacells:cell_component_256m" }, duration: 100000, // 1000*1000/10
    });
});
