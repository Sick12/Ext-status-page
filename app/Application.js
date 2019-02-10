/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('statusPage.Application', {
    extend: 'Ext.app.Application',

    name: 'statusPage',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application.js',
            function (choice) {
                if (choice === 'yes') {
                    console.log('APPLICATION.js | Pressed yes')
                    window.location.reload();
                }
            }
        );
    }
});