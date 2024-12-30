onEvent('recipes', event => {
    // additional item & fluids


    // auto builder
    event.shaped(`multiblocked:multiblock_builder`,[
        'tet',
        ' w ',
        'tet'
    ],{
        t:`mekanism:block_tin`,
        e:`mekanism:elite_control_circuit`,
        w:`mekanismadditions:walkie_talkie`
    }).id(`mek1000:mbd_builder`)

    // tin casing craft
    event.shaped(`mek1000:tin_casing_incomplete`,[
        'tgt',
        'obo',
        'tst'
    ],{
        t:`mekanism:block_tin`,
        b:`mekanism:block_bronze`,
        s:`mekaevolution:supreme_control_circuit`,
        g:`minecraft:glass`,
        o:`mekanism:ingot_refined_obsidian`
        
    }).id(`mek1000:tincasing_1`)

    // tin casing wrapping
    event.recipes.mekanism.combining(`mek1000:tin_casing`, 'mek1000:tin_casing_incomplete', "16x mek1000:ldpe").id(`mek1000:tincasing_2`)
    
    // tiny antimatter
    event.recipes.mekanism.combining(`50x mek1000:tiny_antimatter`, `mekanism:pellet_antimatter`, '5x mek1000:ldpe')
    
    // ldpe
    event.custom({"type":"mekanism:reaction",
        "itemInput":{"item":`mekanism:substrate`},
        "fluidInput":{"amount":10,"fluid":"mekanism:oxygen"},
        "gasInput":{"amount":50,"gas":"mekanism:ethene"},
        "energyRequired":100,"duration":100,
        "itemOutput":{"item":`mek1000:ldpe`,"amount":4}
    })

    // antimatter condencing/decondencing
    event.custom({"type":"mekanism:rotary",
        "gasInput":{"amount":1,"gas":"mekanism:antimatter"},
        "fluidOutput":{"amount":1,"fluid":"mek1000:liquid_antimatter"}
    })
    event.custom({"type":"mekanism:rotary",
        "gasOutput":{"amount":1,"gas":"mekanism:antimatter"},
        "fluidInput":{"amount":1,"fluid":"mek1000:liquid_antimatter"}
    })

    // ore refinering -> moved to json recipe
    // here is the test script, not working.
    /*
    event.recipes.multiblocked.multiblock("large_ore_refinery")
        .inputItem("minecraft:iron_ore")
        //.inputGas({type:"mekanism:sulfuric_acid",amount:20000000000})
        .inputFluid(Fluid.of("mekanism:sulfuric_acid",40))
        .outputItem("8x mek1000:iron_crystal_20")
        .setPerTick(true)
        .inputFE(1000000)
        .duration(10)
    event.recipes.multiblocked.multiblock("large_ore_refinery")
        .inputItem("minecraft:iron_ore")
        .inputFluid(Fluid.of("mek1000:liquid_antimatter",120))
        .outputItem("12x mek1000:compressed_purified_iron_rawore")
        .setPerTick(true)
        .inputFE(2000000)
        .duration(200)
    */

    // crystal disassembly
    let crystal_disassemble_20 = (type,item_1,item_9) => {
        event.shaped(`20x ${item_1}`,[
                'c'
            ],{
                c:`mek1000:${type}_crystal_20`
            }).id(`mek1000:${type}_disassembling_20to1`)
        if ((typeof item_9)!="undefined") {
            event.shaped(`20x ${item_9}`,[
                    'ccc',
                    'ccc',
                    'ccc'
                ],{
                    c:`mek1000:${type}_crystal_20`
                }).id(`mek1000:${type}_disassembling_20to9`)
            event.shaped(`9x ${item_1}`,[
                    'c'
                ],{
                    c:item_9
                }).id(`mek1000:${type}_disassembling_9to1`)
        }
    }
    
    crystal_disassemble_20("iron","mekanism:crystal_iron","mek1000:compressed_iron_crystal")
    crystal_disassemble_20("copper","mekanism:crystal_copper","mek1000:compressed_copper_crystal")
    crystal_disassemble_20("gold","mekanism:crystal_gold","mek1000:compressed_gold_crystal")
    crystal_disassemble_20("tin","mekanism:crystal_tin","mek1000:compressed_tin_crystal")
    crystal_disassemble_20("osmium","mekanism:crystal_osmium","mek1000:compressed_osmium_crystal")
    crystal_disassemble_20("uranium","mekanism:crystal_uranium","mek1000:compressed_uranium_crystal")
    crystal_disassemble_20("lead","mekanism:crystal_lead","mek1000:compressed_lead_crystal")
    crystal_disassemble_20("iridium","kubejs:crystal_iridium","mek1000:compressed_iridium_crystal")

    // hidden recipe
    event.recipes.mekanism.combining(`2x mek1000:stray_cat`, `mek1000:tiny_antimatter`, 'minecraft:amethyst_shard').id("mek1000:packcat")
    event.custom({
        "type": "mekanism:oxidizing",
        "input": {
          "ingredient": {
            "item": `mek1000:stray_cat`
          }
        },
        "output": {
          "gas": 'mek1000:vaporized_amethyst',
          "amount": 10000
        },
    }).id("mek1000:oxcat")


    // Yeah

    /**
     * @param {String} type レシピ登録用
     * @param {String} normal いつもの懸濁液
     * @param {String} washed 追加された懸濁液
     * @param {String} crystal 結晶
     * @param {Number} amount 結晶の数
     * @param {Number} amount_s 懸濁液の量
     */
    let crystalize_prec = (type,normal,washed,crystal,amount,amount_s) => {
        event.custom(
            {type:'mekanism:washing',fluidInput:{'amount':300,'tag':'minecraft:water'},slurryInput:{'amount':200,'slurry':`${normal}`},output:{"slurry":`${washed}`,'amount':1}},
        ).id(`mek1000:doublewashing_${type}`)
        event.custom({
            "type": "mekanism:crystallizing",
            "chemicalType": "slurry",
            "input": {
              "amount": amount_s,
              "slurry": washed
            },
            "output": {
              "amount": amount,
              "item": crystal
            }
        })
    }
    
    crystalize_prec("fe","mekanism:clean_iron","mek1000:prec_iron","mekanism:crystal_iron",20,20)
    crystalize_prec("cu","mekanism:clean_copper","mek1000:prec_copper","mekanism:crystal_copper",20,20)
    crystalize_prec("au","mekanism:clean_gold","mek1000:prec_gold","mekanism:crystal_gold",20,20)
    crystalize_prec("sn","mekanism:clean_tin","mek1000:prec_tin","mekanism:crystal_tin",20,20)
    crystalize_prec("os","mekanism:clean_osmium","mek1000:prec_osmium","mekanism:crystal_osmium",20,20)
    crystalize_prec("ur","mekanism:clean_uranium","mek1000:prec_uranium","mekanism:crystal_uranium",20,20)
    crystalize_prec("pb","mekanism:clean_lead","mek1000:prec_lead","mekanism:crystal_lead",20,20)
    crystalize_prec("ir","kubejs:clean_iridium","mek1000:prec_iridium","kubejs:crystal_iridium",20,20)

    crystalize_prec("rs","mek1000:clean_redstone","mek1000:prec_redstone","mek1000:crystal_redstone",20,20)
    crystalize_prec("qz","mek1000:clean_quartz","mek1000:prec_quartz","mek1000:crystal_quartz",20,20)
    crystalize_prec("cq","mek1000:clean_certus_quartz","mek1000:prec_certus_quartz","mek1000:crystal_certus_quartz",20,20)
    crystalize_prec("ft","mek1000:clean_fluorite","mek1000:prec_fluorite","mek1000:crystal_fluorite",20,20)

    crystalize_prec("la","mek1000:clean_lapis","mek1000:prec_lapis","mek1000:crystal_lapis",40,2)
    crystalize_prec("co","mek1000:clean_coal","mek1000:prec_coal","mek1000:crystal_coal",40,2)

    crystalize_prec("di","mek1000:clean_diamond","mek1000:prec_diamond","minecraft:diamond",40,2)
    crystalize_prec("em","mek1000:clean_emerald","mek1000:prec_emerald","minecraft:emerald",40,2)

    
})