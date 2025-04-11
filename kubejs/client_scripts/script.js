// priority: 0

console.info("Hello, World! (You will see this line every time client resources reload)");

onEvent("jei.hide.items", (event) => {
    // Hide items in JEI here
    // event.hide('minecraft:cobblestone')
    event.hide("mek1000:stray_cat");
});

onEvent("jei.remove.recipes", (event) => { // 悪あがき.
    event.remove("mek1000:oxcat");
    event.remove("mek1000:packcat");
});

onEvent("item.tooltip", (tooltip) => {
    tooltip.addAdvanced("mek1000:hyper_refinery", (item, advanced, text) => {
        // shift, alt and ctrl are all keys you can check!
        if (!tooltip.shift) {
            text.add(1, [Text.of("Hold ").gold(), Text.of("Shift ").yellow(), Text.of("to see more info.").gold()]);
        }
        else {
            text.add(1, [Text.of("Hold ").gray(), Text.of("Shift ").white(), Text.of("to see more info.").gray()]);
            text.add(2, Text.of("硫酸・王水を利用した鉱石倍加の最適化ができるはずだった。").yellow());
            text.add(3, Text.of("This was useful machine for ore refining, but dead yet.").yellow());
        }
    });
    tooltip.addAdvanced("mek1000:stray_cat", (item, advanced, text) => {
        text.add(1, Text.of("It's kind of comfortable, it seems that way.").yellow());
        text.add(2, Text.of("なんだか心地よい。").yellow());
    });
    tooltip.addAdvanced("multiblocked:multiblock_builder", (item, advanced, text) => {
        text.add(1, Text.of("AutoBuild *see jei to get more info").yellow());
        text.add(2, Text.of("自動組み立て ※詳しくはJEIをみてね").yellow());
    });
});

onEvent("jei.information", (event) => {
    event.add("multiblocked:multiblock_builder", ["インベントリに「すべての」（⇦重要）材料を持った状態でコントローラーをしゃがみながらこのアイテムでクリックすると、自動で建築されます。", "当然、あまりにも分量が多い場合には使用できません。", "Sneak+Use to controller block, to build multiblock using components from your inventory.", "Cannot use if you don't have enough components, or enough inventory storage."]);
});
