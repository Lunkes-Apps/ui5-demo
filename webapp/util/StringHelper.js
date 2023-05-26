sap.ui.define([
    "sap/ui/base/Object"
], function(Object) {
    'use strict';
    return Object.extend('com.lunkes.ui5.app.util.StringHelper',{
        numberToFinance: function(value) {
            return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace(/\u00a0/g, ' ')
        }
    })
});
