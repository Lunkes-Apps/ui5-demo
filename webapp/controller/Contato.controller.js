sap.ui.define([
    './BaseController.controller',
], function (Controller) {
    'use strict';
    var index = 0;
    return Controller.extend("com.lunkes.ui5.app.controller.Contato", {
        onInit: function () {
			// var oCardManifests = new JSONModel(sap.ui.require.toUrl("com.lunkes.ui5.app.resource.cardsDados.json"));
			// this.getView().setModel(oCardManifests, "manifests");
		},
        goBack: function(){
            console.log('hey')
            var router = this.getRouter()
            router.navTo("initial")
        }
    })
});