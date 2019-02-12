/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'statusPage.Application',

    name: 'statusPage',

    requires: [
        // This will automatically load all classes in the statusPage namespace
        // so that application classes do not need to require each other.
        'statusPage.*'
    ],

    // The name of the initial view to create.
    // mainView: 'statusPage.view.main.Main'
    //stores: ['ComponentStore'],
    //mainView: 'statusPage.view.status.ComponentStatus'
});
