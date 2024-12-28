onEvent('recipes', event => {

	event.remove({output: 'mekanism:energy_tablet'})

    let cubes = ['basic_energy_cube', 'advanced_energy_cube', 'elite_energy_cube', 'ultimate_energy_cube']
    let cube_upgrade_items = ['mekanism:ingot_osmium', 'gold_ingot', 'diamond']
    cubes.forEach((name) => {
        event.remove({output: `mekanism:${name}`})
    })
    let upgradeCube = (output, cube, material) => {
        event.shaped(`mekanism:${output}`,[
            ' M ',
            'MCM',
            ' M '
        ], {
            M: material,
            C: `mekanism:${cube}`
        })
    }
    for (let i = 0; i < cubes.length-1; i++) {
        upgradeCube(cubes[i+1], cubes[i], cube_upgrade_items[i])
    }


    event.shaped('mekanism:energy_tablet', [
        ' O ',
        'ORO',
        ' C '
    ], {
        O: 'mekanism:ingot_osmium',
        C: 'copper_ingot',
        R: 'redstone'
    })

    event.shapeless('mekanism:basic_energy_cube', ['ae2:energy_acceptor', 'mekanism:energy_tablet'])


})
