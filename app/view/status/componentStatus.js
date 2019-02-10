/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('statusPage.view.status.componentStatus', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'statusPage.view.status.componentStatusController',
        'statusPage.view.status.componentStatusModel'
        //'statusPage.store.componentStore'
    ],

    xtype: 'array-grid',
    store: 'componentStore',
    stateful: true,
    collapsible: true,
    multiSelect: true,
    stateId: 'stateGrid',
    height: 350,
    title: 'Array Grid',
    headerBorders: false,
    viewConfig: {
        enableTextSelection: true
    },

    initComponent: function () {
        var me = this;

        me.width = 750;
        me.columns = [
            {
                text     : 'Company',
                flex     : 1,
                sortable : false,
                dataIndex: 'name'
            },
            {
                text     : 'Price',
                width    : 95,
                sortable : true,
                formatter: 'usMoney',
                dataIndex: 'price'
            },
            {
                text     : 'Change',
                width    : 80,
                sortable : true,
                dataIndex: 'change'
            },
            {
                text     : '% Change',
                width    : 100,
                sortable : true,
                dataIndex: 'pctChange'
            },
            {
                text     : 'Last Updated',
                width    : 115,
                sortable : true,
                formatter: 'date("m/d/Y")',
                dataIndex: 'lastChange'
            },
            {
                menuDisabled: true,
                sortable: false,
                xtype: 'actioncolumn',
                width: 50,
                items: [{
                    iconCls: 'array-grid-sell-col',
                    tooltip: 'Sell stock',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = grid.getStore().getAt(rowIndex);
                        Ext.Msg.alert('Sell', 'Sell ' + rec.get('name'));
                    }
                }, {
                    getClass: function(v, meta, rec) {
                        if (rec.get('change') < 0) {
                            return 'array-grid-alert-col';
                        } else {
                            return 'array-grid-buy-col';
                        }
                    },
                    getTip: function(v, meta, rec) {
                        if (rec.get('change') < 0) {
                            return 'Hold stock';
                        } else {
                            return 'Buy stock';
                        }
                    },
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = grid.getStore().getAt(rowIndex),
                            action = (rec.get('change') < 0 ? 'Hold' : 'Buy');

                        Ext.Msg.alert(action, action + ' ' + rec.get('name'));
                    }
                }]
            }
        ];

        me.callParent();
    }
});
