onEvent("", (event) => {

});

onEvent("item.registry", (event) => {
    event.create("mek1000:illuminate_alloy");
    event.create("mek1000:superheated_alloy");
    event.create("mek1000:antinomic_alloy");
    event.create("mek1000:cosmic_alloy").texture(`mek1000:item/cosmic_alloy`);
    event.create("mek1000:wither_spawn").texture(`mek1000:item/wip`)
        .use(() => true).finishUsing((itemstack, level, entity) => {
            if (entity.player) {
                level.createEntity("minecraft:wither");
            }
        });
});
onEvent("mekanism.infuse_type.registry", (event) => {
    event.create("mek1000:sunnalium").color(0xffff00);
    event.create("mek1000:iridium").color(0xe6e6fa);
    event.create("mek1000:resonant").color(0x00fa9a);
    event.create("mek1000:quantum").color(0x66cdaa);
});
