sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'com/lunkes/ui5/app/util/StringHelper',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator',
    'sap/ui/model/Sorter'
], function (Controller, MessageToast, StringHelper, Filter, FilterOperator, Sorter) {
    'use strict';
    var index = 0;
    return Controller.extend("com.lunkes.ui5.app.LandingPage", {
        formatValor: function (valor, valor2) {
            var formater = new StringHelper()
            return formater.numberToFinance(valor)
        },
        retornaIndex: function () {
            index = index + 1
            return index
        },
        searchProduto: function (oEvt) {
            // debugger
            var sQuery = oEvt.getParameter('query'),
                aFilter = [
                    new Filter("ProductName", FilterOperator.Contains, sQuery)],
                oTable = this.byId("tableProdutos"),
                oBinding = oTable.getBinding("items"),
                oFilter = new Filter({
                    filters: aFilter,
                    and: false
                });

            oBinding.filter(oFilter)
        },
        openSettings: function () {

            if (!this.produtosSettings) {
                this.produtosSettings = this.loadFragment({
                    name: "com.lunkes.ui5.app.fragment.ProdutosSettings"
                })
            }
            this.produtosSettings.then(function (oDialog) {
                oDialog.open()
            })
        },
        applySettings: function (oEvent) {
            var sortItem = oEvent.getParameter("sortItem"),
                sortDescending = oEvent.getParameter("sortDescending"),
                oTable = this.byId("tableProdutos"),
                oBinding = oTable.getBinding("items")
            oBinding.sort(new Sorter(sortItem.getKey(), sortDescending))
        }
    })
});