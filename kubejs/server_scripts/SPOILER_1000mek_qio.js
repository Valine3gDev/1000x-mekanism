onEvent("recipes", (event) => {
    const qioremove = [
        "mekanism:qio_drive_base",
        "mekanism:qio_drive_hyper_dense",
        "mekanism:qio_drive_time_dilating",
        "mekanism:qio_drive_supermassive",
        "mekaevolution:qio_drive_absolute",
        "mekaevolution:qio_drive_supreme",
        "mekaevolution:qio_drive_cosmic",
        "mekaevolution:qio_drive_infinite",
        "mekanism:qio_drive_array",
        "mekanism:qio_dashboard",
    ];
    qioremove.forEach((name) => {
        event.remove({ output: name });
    });
    const qio = (output, E, T, N) => {
        event.shaped(output, [
            "ete",
            "tnt",
            "ete",
        ], {
            e: E,
            t: T,
            n: N,
        });
    };
    const change = (out, inp) => { event.shapeless(out, [inp]), event.shapeless(inp, [out]); };
    change("mekanism:qio_drive_base", "mekanism:inactive_qio_drive_base");
    change("mekanism:qio_drive_hyper_dense", "mekanism:inactive_qio_drive_hyper_dense");
    change("mekanism:qio_drive_time_dilating", "mekanism:inactive_qio_drive_time_dilating");
    change("mekanism:qio_drive_supermassive", "mekanism:inactive_qio_drive_supermassive");
    change("mekaevolution:qio_drive_absolute", "mekaevolution:inactive_qio_drive_absolute");
    change("mekaevolution:qio_drive_supreme", "mekaevolution:inactive_qio_drive_supreme");
    change("mekaevolution:qio_drive_cosmic", "mekaevolution:inactive_qio_drive_cosmic");
    change("mekaevolution:qio_drive_infinite", "mekaevolution:inactive_qio_drive_infinite");

    // qio('mekanism:qio_drive_base','mekaddelement:dust_calcium_oxide','mekanism:basic_control_circuit','ae2:cell_component_16k')
    qio("mekanism:qio_drive_hyper_dense", "mekaevolution:absolute_energy_cube", "mekanism:qio_drive_base", "ae2:cell_component_64k");
    qio("mekanism:qio_drive_time_dilating", "mekanism:reprocessed_fissile_fragment", "mekanism:qio_drive_hyper_dense", "ae2:cell_component_256k");
    qio("mekanism:qio_drive_supermassive", "mekanism:pellet_antimatter", "mekanism:qio_drive_time_dilating", "megacells:cell_component_4m");
    qio("mekaevolution:qio_drive_absolute", "mekaevolution:absolute_control_circuit", "mekanism:qio_drive_supermassive", "megacells:cell_component_256m");
    qio("mekaevolution:qio_drive_supreme", "mekaevolution:supreme_control_circuit", "mekaevolution:qio_drive_absolute", "megacells:256m_crafting_storage");
    qio("mekaevolution:qio_drive_cosmic", "mekaevolution:cosmic_control_circuit", "mekaevolution:qio_drive_supreme", "fluxnetworks:gargantuan_flux_storage");
    qio("mekaevolution:qio_drive_infinite", "mekaevolution:infinite_control_circuit", "mekaevolution:qio_drive_cosmic", "mekaevolution:infinite_energy_cube");

    // inactive
    qio("mekanism:inactive_qio_drive_base", "mekaddelement:dust_calcium_oxide", "mekanism:basic_control_circuit", "ae2:cell_component_16k");
    qio("mekanism:inactive_qio_drive_hyper_dense", "mekaevolution:absolute_energy_cube", "mekanism:inactive_qio_drive_base", "ae2:cell_component_64k");
    qio("mekanism:inactive_qio_drive_time_dilating", "mekanism:reprocessed_fissile_fragment", "mekanism:inactive_qio_drive_hyper_dense", "ae2:cell_component_256k");
    qio("mekanism:inactive_qio_drive_supermassive", "mekanism:pellet_antimatter", "mekanism:inactive_qio_drive_time_dilating", "megacells:cell_component_4m");
    qio("mekaevolution:inactive_qio_drive_absolute", "mekaevolution:absolute_control_circuit", "mekanism:inactive_qio_drive_supermassive", "megacells:cell_component_256m");
    qio("mekaevolution:inactive_qio_drive_supreme", "mekaevolution:supreme_control_circuit", "mekaevolution:inactive_qio_drive_absolute", "megacells:256m_crafting_storage");
    qio("mekaevolution:inactive_qio_drive_cosmic", "mekaevolution:cosmic_control_circuit", "mekaevolution:inactive_qio_drive_supreme", "fluxnetworks:gargantuan_flux_storage");
    qio("mekaevolution:inactive_qio_drive_infinite", "mekaevolution:infinite_control_circuit", "mekaevolution:inactive_qio_drive_cosmic", "mekaevolution:infinite_energy_cube");

    qio("mekanism:qio_drive_array", "mekanism:elite_control_circuit", "mekanism:block_refined_obsidian", "ae2:drive");
    qio("mekanism:qio_dashboard", "mekaddelement:dust_calcium_oxide", "ae2:name_press", "ae2:crafting_terminal");

    // short cut!
    event.shaped("4x mekaevolution:qio_drive_supreme", [
        "ede",
        "dsd",
        "ede",
    ], {
        s: "mek1000:redstone_singularity",
        d: "#mek1000:qio/t1",
        e: "mek1000:superheated_alloy",
    });
});
