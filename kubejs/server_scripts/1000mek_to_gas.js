onEvent("recipes", (event) => {
    const replaceGases = (id, prefix) => {
        const GAS_ID = (prefix == null) ? id : `${prefix}_${id}`;
        event.remove({ id: `mekanism:infusion_conversion/${GAS_ID}/from_enriched` });
        event.custom({
            type: "mekanism:infusion_conversion", //  type: 'farmersdelight:cutting',
            input: {
                ingredient: { tag: `mekanism:enriched/${id}` },
            },
            output: { infuse_type: `mekanism:${GAS_ID}`, amount: 100 },
        });
    };

    replaceGases("redstone");
    replaceGases("carbon");
    replaceGases("obsidian", "refined");
    replaceGases("gold");
    replaceGases("tin");
    replaceGases("diamond");
});
