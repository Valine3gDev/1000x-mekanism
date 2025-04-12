// priority: 0

console.info("Hello, World! (You will only see this line once in console, during startup)");

onEvent("item.registry", (event) => {
    // Register new items here
    // event.create('example_item').displayName('Example Item')
    event
        .create("mek1000:soysouce_saltless")
        .displayName("Saltless shouyu")
        .maxStackSize(16)
        .texture("kubejs:item/shouyu")
        .food((food) => {
            food
                .hunger(4)
                .saturation(1);
        });

    event
        .create("mek1000:soysauce")
        .displayName("Normal shouyu")
        .maxStackSize(5)
        .texture("kubejs:item/shouyu")
        .food((food) => {
            food
                .hunger(2)
                .saturation(-1);
        });

    event
        .create("mek1000:soysauce_egg")
        .displayName("Salted Boiled Egg")
        .maxStackSize(128)
        .texture("kubejs:item/shouyu")
        .food((food) => {
            food
                .hunger(6)
                .saturation(4)
                .fastToEat();
        });
});

onEvent("block.registry", (event) => {
    // Register new blocks here
    // event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
});

onEvent("mekanism.gas.registry", (event) => {
    event.create("mek1000:soysauce").fuel(1, 5).color(0x15080d);
});
