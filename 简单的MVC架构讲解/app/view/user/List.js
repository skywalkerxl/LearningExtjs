/**
 * Created by Administrator on 2017/7/6.
 */
Ext.define('AM.view.user.List', {
    extend : 'Ext.grid.Panel',
    alias : 'widget.userlist',

    store : 'Users',
    title : 'All users',

    initComponent : function () {
        this.columns = [
            { header : 'Name',  dataIndex : 'name',  flex : 1 },
            { header : 'Email', dataIndex : 'email', flex : 1 }
        ];

        this.callParent(arguments);
    }
});