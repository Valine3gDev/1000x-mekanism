onEvent("recipes", (event) => {
    const multipliers = [2, 8, 32, 128, 512, 2048, 8192, 32768, 131072, 131072 * 4 + 8192];
    multipliers.forEach((multiplier) => {
        event.remove({ id: `compactmekanismmachines:compressed_wind_generator_x${multiplier}` });
    });

    event.recipes.mekanismMetallurgicInfusing(`compactmekanismmachines:compressed_wind_generator_x2`, "2x mekanismgenerators:wind_generator", "100x mekanism:redstone");

    function addWindGeneratorRecipe(result_multipliers, item1, item2) {
        const recipeId = `compactmekanismmachines:compressed_wind_generator_x${result_multipliers}`;
        const windGenPreviousMultiplier = multipliers[multipliers.indexOf(result_multipliers) - 1];

        const shape = [];
        const ingredients = {
            H: item1,
            W: `compactmekanismmachines:compressed_wind_generator_x${windGenPreviousMultiplier}`,
        };
        if (item2 == undefined) {
            shape.push(
                " W ",
                "WHW",
                " W ",
            );
        }
        else {
            shape.push(
                "SWS",
                "WHW",
                "SWS",
            );
            ingredients["S"] = item2;
        }

        event.shaped(recipeId, shape, ingredients);
    }
    addWindGeneratorRecipe(multipliers[1], "mekanism:alloy_infused");
    addWindGeneratorRecipe(multipliers[2], "mekanism:steel_casing");
    addWindGeneratorRecipe(multipliers[3], "mekanism:basic_control_circuit", "mekanism:fuelwood_heater");
    addWindGeneratorRecipe(multipliers[4], "mekanism:module_base", "mekanism:module_base");
    addWindGeneratorRecipe(multipliers[5], "mekanism:dynamic_valve", "mekanism:seismic_vibrator");
    addWindGeneratorRecipe(multipliers[6], "megacells:cell_component_1m", "mekanism:thermal_evaporation_valve");
    addWindGeneratorRecipe(multipliers[7], "megacells:cell_component_4m", "mekanism:sps_casing");
    addWindGeneratorRecipe(multipliers[8], "mekaevolution:absolute_energy_cube");
    addWindGeneratorRecipe(multipliers[9], "compactmekanismmachines:compressed_wind_generator_x8192");
});
