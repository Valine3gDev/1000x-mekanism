onEvent("recipes", (event) => {
    event.remove({ output: "mekaevolution:plasma_pickaxe" });
    event.shaped("mekaevolution:plasma_pickaxe", [
        "DDD",
        "IRI",
        " D ",
    ], {
        D: "diamond",
        I: "iron_ingot",
        R: "redstone",
    });
});
