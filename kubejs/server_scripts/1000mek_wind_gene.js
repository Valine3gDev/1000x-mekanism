onEvent('recipes', event => {
    let multipliers = [2, 8, 32, 128, 512, 2048, 8192, 32768, 131072, 532480]
    multipliers.forEach((multiplier) => {
        event.remove({ id: `compactmekanismmachines:compressed_wind_generator_x${multiplier}` })
    })

    event.recipes.mekanismMetallurgicInfusing(`compactmekanismmachines:compressed_wind_generator_x2`,'2x mekanismgenerators:wind_generator', '100x mekanism:redstone')

    function addWindGeneratorRecipe(result_multipliers,item1,item2){
        event.shaped(`compactmekanismmachines:compressed_wind_generator_x${result_multipliers}`, item2==undefined?[
            ' W ',
            'WHW',
            ' W '
        ]:[
            'SWS',
            'WHW',
            'SWS'
        ],(item2==undefined)?{
            H: item1,
            W: `compactmekanismmachines:compressed_wind_generator_x${result_multipliers!=532480?result_multipliers/4:131072}`,
        }:{
            H: item1,
            W: `compactmekanismmachines:compressed_wind_generator_x${result_multipliers!=532480?result_multipliers/4:131072}`,
            S: item2
        })
    }
    addWindGeneratorRecipe(8,'mekanism:alloy_infused')
    addWindGeneratorRecipe(32,'mekanism:steel_casing')
    addWindGeneratorRecipe(128,'mekanism:basic_control_circuit','mekanism:fuelwood_heater')
    addWindGeneratorRecipe(512,'mekanism:module_base','mekanism:module_base')
    addWindGeneratorRecipe(2048,'mekanism:dynamic_valve','mekanism:seismic_vibrator')
    addWindGeneratorRecipe(8192,'megacells:cell_component_1m','mekanism:thermal_evaporation_valve')
    addWindGeneratorRecipe(32768,'megacells:cell_component_4m','mekanism:sps_casing')
    addWindGeneratorRecipe(131072,'mekaevolution:absolute_energy_cube')
    addWindGeneratorRecipe(532480,'compactmekanismmachines:compressed_wind_generator_x8192')

})