sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("zstd.zstd_log.controller.logview", {
		onInit: function(evt) {
			this.oModelUserEntry = new sap.ui.model.json.JSONModel(
				JSON.parse('{"email" : "" , "password" : "" }')
			);
			this.getView().setModel(this.oModelUserEntry , "oModelUserEntry");
		},
		
		onLogin: function(oEvent){
			var oLoginData = this.getView().getModel("oModelUserEntry").getData();
			console.log(oLoginData);
		},

		onRegister: function(oEvent){
			
		},

		onForgot: function(oEvent){
			
		}
		
	});
});