onEvent("recipes", (event) => {
    ["smelting", "enriching", "crushing", "compressing", "combining", "purifying", "injecting", "infusing", "sawing"].forEach((id) => {
        event.remove({ id: `mekanism:factory/basic/${id}` }),
        event.remove({ id: `mekanism:factory/advanced/${id}` }),
        event.remove({ id: `mekanism:factory/elite/${id}` }),
        event.remove({ id: `mekanism:factory/ultimate/${id}` });
    });
});
