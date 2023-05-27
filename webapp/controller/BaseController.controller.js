sap.ui.define([
    'sap/ui/core/mvc/Controller',
], function (Controller) {
    return Controller.extend("com.lunkes.ui5.app.BaseController", {
        getModel: function (sModelName) {
            return this.getOwnerComponent().getModel(sModelName)
        },
        setModel: function (oModel, sModelName) {
            return this.getOwnerComponent().setModel(oModel, sModelName)
        },
        getResourceBundle: function () {
            return this.getOwnerComponent().getModel("i18n").getBundle()
        },
        getRouter: function () {
            return this.getOwnerComponent().getRouter();
        }
    })


})