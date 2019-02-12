/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
 Ext.define('statusPage.view.status.ComponentStatus', {
    extend: 'Ext.tab.Panel',
    alias:'widget.componentStatus1',
    // xtype:'componentStatus',
    requires: [
        'Ext.plugin.Viewport',
         'Ext.window.MessageBox',
        'statusPage.view.status.ComponentStatusController',
        'statusPage.view.status.ComponentStatusModel'
        ],
        title:'THIS IS MY PANEL',
        controller:'status-componentstatus',
        plugins: 'viewport',
        items: [{
            xtype: 'grid',
            store: 'ComponentStore',
            title: 'WDADAWD',
            columns: [{
                text: 'Company',
                flex: 1,
                sortable: false,
                dataIndex: 'name'
            }, {
                text: 'Price',
                width: 95,
                sortable: true,
                formatter: 'usMoney',
                dataIndex: 'price'
            }, {
                text: 'Change',
                width: 80,
                sortable: true,
                renderer: 'renderChange',
                dataIndex: 'change'
            }, {
                text: '% Change',
                width: 100,
                sortable: true,
                renderer: 'renderPercent',
                dataIndex: 'pctChange'
            }, {
                text: 'Last Updated',
                width: 115,
                sortable: true,
                formatter: 'date("m/d/Y")',
                dataIndex: 'lastChange'
            }, {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: ['@sell', '@buy']
            }]
        }
        ]
    });
