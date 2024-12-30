onEvent('recipes', event => {
    event.remove({ id: `quarryplus:adv_quarry`})
    event.remove({ id: 'quarryplus:workbench'})
    event.remove({ id: 'quarryplus:quarry'})
    event.remove({ id: 'quarryplus:mining_well'})
    event.remove({ id: 'quarryplus:mini_quarry'})

    event.recipes.mekanism.enriching(`minecraft:skeleton_skull`,`minecraft:bone_block`)

    event.shaped('compactmekanismmachines:compact_fission_reactor', [
        'CSC',
        'WFW',
        'CPC'
    ],{
        C: 'mekanismgenerators:fission_reactor_casing',
        F: 'mekanismgenerators:fission_fuel_assembly',
        S: `ae2:spatial_cell_component_128`,
        P: `mekaevolution:supreme_control_circuit`,
        W: `compactmekanismmachines:compressed_wind_generator_x8192`
    })

    event.shaped(`stellar:stellar_generator`, [
      `NNN`,
      `IBI`,
      `RSR`
    ],{
      N: `minecraft:netherite_ingot`,
      I: `mekaevolution:infinite_control_circuit`,
      B: `mek1000:bedrockium_ingot`,
      R: `ultimatesolarpanels:reinforced_iron_ingot`,
      S: `mekanism:energized_smelter`
    })

    event.recipes.mekanism.enriching( `minecraft:blaze_rod`,`5x minecraft:blaze_powder`)
    event.custom({
        "type": "quarryplus:workbench_recipe",
        "subType": "default",
        "result": {
          "item": "quarryplus:mini_quarry",
          "count": 1
        },
        "energy": 8000000,
        "showInJEI": true,
        "ingredients": [
          {
            "item": 'fluxnetworks:flux_block',
            "count": 64
          },
          {
            "tag": 'forge:ingots/fluix_steel',
            "count": 32
          },
          {
            "item": 'mek1000:illuminate_alloy',
            "count": 32
          },
          {
            "tag": 'forge:storage_blocks/redstone',
            "count": 48
          },
          {
            "item": 'mekanism:ultimate_control_circuit',
            "count": 32
          },
          {
            "item": 'mek1000:electricity_resistant_reinforced_casing',
            "count": 4
          }
        ],
        "conditions": [
          {
            "value": "mini_quarry",
            "type": "quarryplus:machine_enabled"
          }
        ]
      })
    event.custom({
        "type": "quarryplus:workbench_recipe",
        "subType": "default",
        "result": {
          "item": "quarryplus:mining_well",
          "count": 1
        },
        "energy": 819200000,
        "showInJEI": true,
        "ingredients": [
          {
            "item": 'fluxnetworks:flux_block',
            "count": 32
          },
          {
            "item": 'mekanism:alloy_atomic',
            "count": 32
          },
          {
            "tag": 'forge:storage_blocks/redstone',
            "count": 128
          },
          {
            "item": 'mekanismtools:refined_obsidian_pickaxe',
            "count": 1
          },
          {
            "tag": 'forge:storage_blocks/osmium',
            "count": 128
          }
        ],
        "conditions": [
          {
            "value": "mining_well",
            "type": "quarryplus:machine_enabled"
          }
        ]
      })
    event.custom({
        "type": "quarryplus:workbench_recipe",
        "subType": "default",
        "result": {
          "item": "quarryplus:quarry",
          "count": 1
        },
        "energy": 1280000000.0,
        "showInJEI": true,
        "ingredients": [
          {
            "item": 'quarryplus:mining_well',
            "count": 32
          },
          {
            "item": 'quarryplus:mini_quarry',
            "count": 32
          },
          {
            "item": 'mek1000:antinomic_alloy',
            "count": 32
          },
          {
            "item": 'mek1000:sml_drill_l',
            "count": 32
          },
          {
            "item":'mekaevolution:cosmic_control_circuit',
            "count": 64
          },
          {
            "tag": 'forge:storage_blocks/certus_quartz',
            "count": 256
          },
          {
            "item": 'mek1000:laser_glass',
            "count": 256
          }
        ],
        "conditions": [
          {
            "value": "quarry",
            "type": "quarryplus:machine_enabled"
          }
        ]
      })
    event.shaped('quarryplus:workbench', [
        'ECE',
        'CDC',
        'PCP'
    ],{
        D:'megacells:mega_energy_cell',
        C: 'mek1000:antinomic_alloy',
        P: 'mekanism:sps_casing',
        E: 'mek1000:black_casing'
    })

})