/**
 * Created by Administrator on 2017/7/6.
 */
Ext.define('AM.controller.Users', {
    extend : 'Ext.app.Controller',

    stores: ['Users'],
    models: ['User'],   
    views: [
        'user.List',
        'user.Edit'
    ],
    /*
     *
     *  init是个极好的方法，可以用来设置如何与view交互，通常都是用controller的一个方法control,
     *  control方法使得监听view的事件变得容易
     *
     * */
    init : function () {
        this.control({
            'viewport > userlist': {
                itemdblclick : this.editUser
            },
            //选择action属性为 save的按钮
            'useredit button[action=save]' : {
                click : this.updateUser
            }
        });
    },

    editUser : function (grid, record) {
        console.log('Double clicked on ' + record.get('name'));
        var view = Ext.create('widget.useredit');
        view.down('form').loadRecord(record);

    },

    updateUser : function (button) {
        console.log('clicked the Save button');
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        win.close();
        this.getUserStore().sync();
    }
});
