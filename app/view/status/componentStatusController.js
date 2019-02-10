/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('statusPage.view.status.componentStatusController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.status-componentstatus',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            console.log('Press yes on a MainController.js function');
        }
    }
});
