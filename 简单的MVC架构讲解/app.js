/**
 * Created by Administrator on 2017/7/6.
 */
Ext.application({
    requires : 'Ext.container.Viewport',
    name : 'AM', //Account Manager
    appFolder : 'app',

    //launch 函数会在所有函数加载完之后调用
    launch : function () {
        Ext.create('Ext.container.Viewport', {
            layout : 'fit',
            items : {
                xtype : 'userlist'
            }
        })
    },
    controllers: [
        'Users'
    ]
});