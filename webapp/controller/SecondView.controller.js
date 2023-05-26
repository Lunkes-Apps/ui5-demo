sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/core/Fragment'
], function (Controller, MessageToast, Fragment) {
    'use strict';
    return Controller.extend("com.lunkes.ui5.app.SecondView", {
        onPress: function () {
            MessageToast.show('testest')
        },
        openDialog: function () {
            if (!this.oDialog) {
                this.oDialog = this.loadFragment({
                    name: "com.lunkes.ui5.app.Fragment.Dialog"
                })
            }
            this.oDialog.then(function (oDialog) {
                oDialog.open()
            })
        },
        closeDialog: function () {
            this.oDialog.then(function (oDialog) {
                oDialog.close();
            });
        }


    })
});