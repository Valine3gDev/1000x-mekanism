onEvent("recipes", (event) => {
    event.recipes.lazierae2.etcher("ae2:logic_processor", ["mekanism:shard_gold", "mekanism:hdpe_sheet"]).processingTime(50).energyCost(50000).id("valinemek1000:etcher/logic");
    event.recipes.lazierae2.etcher("ae2:engineering_processor", ["mekanism:shard_osmium", "mekanism:hdpe_sheet"]).processingTime(50).energyCost(50000).id("valinemek1000:etcher/engineering");
    event.recipes.lazierae2.etcher("ae2:calculation_processor", ["mekanism:shard_lead", "mekanism:hdpe_sheet"]).processingTime(50).energyCost(50000).id("valinemek1000:etcher/calculation");
    event.recipes.lazierae2.etcher("lazierae2:parallel_processor", ["lazierae2:resonating_dust", "mekanism:hdpe_sheet"]).processingTime(50).energyCost(50000).id("valinemek1000:etcher/parallel");
});
