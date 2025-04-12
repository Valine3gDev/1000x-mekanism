onEvent("item.modification", (event) => {
    event.modify("mekanism:energy_tablet", (item) => {
        item.maxStackSize = 16;
    });
});
