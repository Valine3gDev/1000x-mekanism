onEvent("recipes", (event) => {
    event.remove({ id: "mekanism:processing/steel/enriched_iron_to_dust" });

    event.recipes.mekanismMetallurgicInfusing(`mekanism:dust_steel`, "mekanism:enriched_iron", "100x mekanism:carbon");

    event.replaceInput({ id: "mekanism:steel_casing" }, "#forge:ingots/osmium", "#forge:storage_blocks/osmium");

    event.custom({
        type: "mekanism:injecting",
        itemInput: { ingredient: { tag: "forge:ingots/iron" } },
        chemicalInput: { amount: 1, gas: "mekanism:oxygen" },
        output: { item: "mekanism:ingot_steel" },
    });
});
