onEvent("recipes", (event) => {
    /* event.recipes.multiblocked.multiblock("green_house")
        .inputItem(Item.of("diamond_axe").ignoreNBT())
        .inputItems("minecraft:diamond", "minecraft:apple")
        .inputFluid("minecraft:lava")
        .outputItem("apple")
        .outputFE(100)
        //Switch on the perTick/chance for incoming ingredients,
        //any ingredient will have perTick/chance applied as the
        //switch.
        .setChance(0.1)
        .setPerTick(true)
        .outputMana(100)
        .outputStress(100)
        .inputItem(Ingredient.of("#forge:rods").withCount(2))
        .setChance(1)
        .setPerTick(false)
        //All gas/infuse/pigment use a same set of input structure
        //.inputGas({ type: "mekanism:hydrogen", amount: 1000 })
        //Recipe conditions
        .thunder(1)
        .dimension("minecraft:nether")
        .biome("minecraft:plains")
        .yLevel(1, 10)
        //Text
        .text("sussy baka")
        //Data
        .data({ temperature: 1300 })
        .duration(100)
        */
    ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"].forEach((item) => {
        event.recipes.multiblocked.multiblock("greenhouse")
            .inputItems(`minecraft:${item}_sapling`)
            .setPerTick(true)
            .inputFluid("minecraft:water 1000")
            .setPerTick(false)
            .outputItem(`minecraft:${item}_sapling`)
            .outputItem(`128x minecraft:${item}_log`)
            .duration(3000);

        event.recipes.multiblocked.multiblock("greenhouse")
            .inputItems(`minecraft:${item}_sapling`)
            .inputFluid("mekanism:nutritional_paste 100")
            .outputItem(`minecraft:${item}_sapling`)
            .outputItem(`128x minecraft:${item}_log`)
            .duration(20);
    });

    /* ['brown_mushroom', 'red_mushroom', 'potato', 'carrot', 'nether_wart'].forEach((item) => { */
    event.recipes.multiblocked.multiblock("greenhouse")
        .inputItems("minecraft:brown_mushroom")
        .setPerTick(true)
        .inputFluid("minecraft:water 1000")
        .setPerTick(false)
        .outputItem("128x minecraft:brown_mushroom")
        .duration(3000);
    event.recipes.multiblocked.multiblock("greenhouse")
        .inputItems("minecraft:brown_mushroom")
        .setPerTick(true)
        .inputFluid("mekanism:nutritional_paste 100")
        .setPerTick(false)
        .outputItem("128x minecraft:brown_mushroom")
        .duration(20);
    event.recipes.multiblocked.multiblock("greenhouse")
        .inputItems("minecraft:red_mushroom")
        .setPerTick(true)
        .inputFluid("minecraft:water 1000")
        .setPerTick(false)
        .outputItem("128x minecraft:red_mushroom")
        .duration(3000);
    event.recipes.multiblocked.multiblock("greenhouse")
        .inputItems("minecraft:red_mushroom")
        .setPerTick(true)
        .inputFluid("mekanism:nutritional_paste 100")
        .setPerTick(false)
        .outputItem("128x minecraft:red_mushroom")
        .duration(20);
    event.recipes.multiblocked.multiblock("greenhouse")
        .inputItems("minecraft:potato")
        .setPerTick(true)
        .inputFluid("minecraft:water 1000")
        .setPerTick(false)
        .outputItem("128x minecraft:potato")
        .duration(3000);
    event.recipes.multiblocked.multiblock("greenhouse")
        .inputItems("minecraft:potato")
        .setPerTick(true)
        .inputFluid("mekanism:nutritional_paste 100")
        .setPerTick(false)
        .outputItem("128x minecraft:potato")
        .duration(20);
    event.recipes.multiblocked.multiblock("greenhouse")
        .inputItems("minecraft:carrot")
        .setPerTick(true)
        .inputFluid("minecraft:water 1000")
        .setPerTick(false)
        .outputItem("128x minecraft:carrot")
        .duration(3000);
    event.recipes.multiblocked.multiblock("greenhouse")
        .inputItems("minecraft:carrot")
        .setPerTick(true)
        .inputFluid("mekanism:nutritional_paste 100")
        .setPerTick(false)
        .outputItem("128x minecraft:carrot")
        .duration(20);
    event.recipes.multiblocked.multiblock("greenhouse")
        .inputItems("minecraft:nether_wart")
        .setPerTick(true)
        .inputFluid("minecraft:water 1000")
        .setPerTick(false)
        .outputItem("128x minecraft:nether_wart")
        .duration(3000);
    event.recipes.multiblocked.multiblock("greenhouse")
        .inputItems("minecraft:nether_wart")
        .setPerTick(true)
        .inputFluid("mekanism:nutritional_paste 100")
        .setPerTick(false)
        .outputItem("128x minecraft:nether_wart")
        .duration(20);
    // 直書きしたら通ったが？何で？.
    /* }) */
    event.recipes.multiblocked.multiblock("greenhouse")
        .inputItems("minecraft:chorus_flower")
        .setPerTick(true)
        .inputFluid("minecraft:water 1000")
        .setPerTick(false)
        .outputItem("minecraft:chorus_flower")
        .outputItem("128x minecraft:chorus_fruit")
        .duration(3000);

    event.recipes.multiblocked.multiblock("greenhouse")
        .inputItems("minecraft:chorus_flower")
        .setPerTick(true)
        .inputFluid("mekanism:nutritional_paste 100")
        .setPerTick(false)
        .outputItem("minecraft:chorus_flower")
        .outputItem("128x minecraft:chorus_fruit")
        .duration(20);
    event.recipes.multiblocked.multiblock("greenhouse")
        .inputItems("minecraft:crimson_fungus")
        .setPerTick(true)
        .inputFluid("minecraft:water 1000")
        .setPerTick(false)
        .outputItem("minecraft:crimson_fungus")
        .outputItem("128x minecraft:crimson_stem")
        .duration(3000);

    event.recipes.multiblocked.multiblock("greenhouse")
        .inputItems("minecraft:crimson_fungus")
        .setPerTick(true)
        .inputFluid("mekanism:nutritional_paste 100")
        .setPerTick(false)
        .outputItem("minecraft:crimson_fungus")
        .outputItem("128x minecraft:crimson_stem")
        .duration(20);
    event.recipes.multiblocked.multiblock("greenhouse")
        .inputItems("minecraft:warped_fungus")
        .setPerTick(true)
        .inputFluid("minecraft:water 1000")
        .setPerTick(false)
        .outputItem("minecraft:warped_fungus")
        .outputItem("128x minecraft:warped_stem")
        .duration(3000);

    event.recipes.multiblocked.multiblock("greenhouse")
        .inputItems("minecraft:warped_fungus")
        .setPerTick(true)
        .inputFluid("mekanism:nutritional_paste 100")
        .setPerTick(false)
        .outputItem("minecraft:warped_fungus")
        .outputItem("128x minecraft:warped_stem")
        .duration(20);

    event.recipes.multiblocked.multiblock("greenhouse")
        .inputItems("integrateddynamics:menril_sapling")
        .setPerTick(true)
        .inputFluid("minecraft:water 1000")
        .setPerTick(false)
        .outputItem("integrateddynamics:menril_sapling")
        .outputItem("128x integrateddynamics:menril_log")
        .outputItem("32x integrateddynamics:menril_berries")
        .outputItem("128x integrateddynamics:crystalized_menril_chunk")
        .duration(3000);

    event.recipes.multiblocked.multiblock("greenhouse")
        .inputItems("integrateddynamics:menril_sapling")
        .setPerTick(true)
        .inputFluid("mekanism:nutritional_paste 100")
        .setPerTick(false)
        .outputItem("integrateddynamics:menril_sapling")
        .outputItem("128x integrateddynamics:menril_log")
        .outputItem("32x integrateddynamics:menril_berries")
        .outputItem("128x integrateddynamics:crystalized_menril_chunk")
        .duration(20);

    event.recipes.multiblocked.multiblock("greenhouse")
        .inputItems("minecraft:wheat_seeds")
        .setPerTick(true)
        .inputFluid("minecraft:water 1000")
        .setPerTick(false)
        .outputItem("minecraft:wheat_seeds")
        .outputItem("128x minecraft:wheat")
        .duration(3000);

    event.recipes.multiblocked.multiblock("greenhouse")
        .inputItems("minecraft:wheat_seeds")
        .setPerTick(true)
        .inputFluid("mekanism:nutritional_paste 100")
        .setPerTick(false)
        .outputItem("minecraft:wheat_seeds")
        .outputItem("128x minecraft:wheat")
        .duration(20);

    event.recipes.multiblocked.multiblock("greenhouse")
        .inputItems("minecraft:pumpkin_seeds")
        .setPerTick(true)
        .inputFluid("minecraft:water 1000")
        .setPerTick(false)
        .outputItem("minecraft:pumpkin_seeds")
        .outputItem("128x minecraft:pumpkin")
        .duration(3000);

    event.recipes.multiblocked.multiblock("greenhouse")
        .inputItems("minecraft:pumpkin_seeds")
        .setPerTick(true)
        .inputFluid("mekanism:nutritional_paste 100")
        .setPerTick(false)
        .outputItem("minecraft:pumpkin_seeds")
        .outputItem("128x minecraft:pumpkin")
        .duration(20);

    event.recipes.multiblocked.multiblock("greenhouse")
        .inputItems("minecraft:melon_seeds")
        .setPerTick(true)
        .inputFluid("minecraft:water 1000")
        .setPerTick(false)
        .outputItem("minecraft:melon_seeds")
        .outputItem("128x minecraft:melon")
        .duration(3000);

    event.recipes.multiblocked.multiblock("greenhouse")
        .inputItems("minecraft:melon_seeds")
        .setPerTick(true)
        .inputFluid("mekanism:nutritional_paste 100")
        .setPerTick(false)
        .outputItem("minecraft:melon_seeds")
        .outputItem("128x minecraft:melon")
        .duration(20);

    event.recipes.multiblocked.multiblock("greenhouse")
        .inputItems("minecraft:beetroot_seeds")
        .setPerTick(true)
        .inputFluid("minecraft:water 1000")
        .setPerTick(false)
        .outputItem("minecraft:beetroot_seeds")
        .outputItem("128x minecraft:beetroot")
        .duration(3000);

    event.recipes.multiblocked.multiblock("greenhouse")
        .inputItems("minecraft:beetroot_seeds")
        .setPerTick(true)
        .inputFluid("mekanism:nutritional_paste 100")
        .setPerTick(false)
        .outputItem("minecraft:beetroot_seeds")
        .outputItem("128x minecraft:beetroot")
        .duration(20);
});
