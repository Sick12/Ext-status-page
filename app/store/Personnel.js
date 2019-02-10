Ext.define('statusPage.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'statusPage.model.Personnel',
    // fields: [
    // 	'D', 'G', 'N'
    // ],

    data: { items: [
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
        { name: 'GOLF',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" }
    ]},
    // data: [
    //     { D: 'Jean Luc', G: "jeanluc.picard@enterprise.com", N: "555-111-1111" },
    //     { D: 'GOLF',     G: "worf.moghsson@enterprise.com",  N: "555-222-2222" },
    //     { D: 'Deanna',   G: "deanna.troi@enterprise.com",    N: "555-333-3333" },
    //     { D: 'Data',     G: "mr.data@enterprise.com",        N: "555-444-4444" }
    // ],

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
