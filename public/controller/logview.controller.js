sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (Controller, History) {
	"use strict";

	return Controller.extend("zstd.zstd_log.controller.logview", {
		onInit: function(evt) {
			
			this.OwnerComponent = this.getOwnerComponent();
			this.getView().setModel(this.OwnerComponent.getModel("oModelUserEntry") , "oModelUserEntry");
			
			this.OwnerComponent.getRouter().getRoute("ForgotPassword").attachPatternMatched(this._onRouteMatchedForgotPassword, this);
			this.OwnerComponent.getRouter().getRoute("Register").attachPatternMatched(this._onRouteMatchedRegister, this);
		},
		
		onLogin: function(oEvent){
			this.OwnerComponent.ODataCallsObj.validateData('Login');
			
			var oLoginData = this.getView().getModel("oModelUserEntry").getData();
		},
		
		onSignUp: function(oEvent){
			this.OwnerComponent.ODataCallsObj.validateData('SignUp');
			
			var oLoginData = this.getView().getModel("oModelUserEntry").getData();
		},		

		onResetPassword: function(oEvent){
			this.OwnerComponent.ODataCallsObj.validateData('ResetPassword');
			
			var oLoginData = this.getView().getModel("oModelUserEntry").getData();
		},		

		onRegister: function(oEvent){

			//reset error messages
			this.OwnerComponent.ODataCallsObj.validateData('SignUp', true);
			
			this.OwnerComponent.getRouter().navTo("Register",{},false);
			// this.getOwnerComponent().getTargets().display("page2");
		},

		onForgot: function(oEvent){
			
			//reset error messages
			this.OwnerComponent.ODataCallsObj.validateData('ResetPassword',true);
			
			var vEmail = this.OwnerComponent.getModel("oModelUserEntry").getData().email;
			if(vEmail !== "" )
				this.OwnerComponent.getRouter().navTo("ForgotPassword",{routeEmail: vEmail},false);			
			else
				this.OwnerComponent.getRouter().navTo("ForgotPassword",{routeEmail: "''"},false);	
		},

		_onRouteMatchedForgotPassword: function(oEvent){
			var vEmail = oEvent.getParameter("arguments").routeEmail;
		},
		
		_onRouteMatchedRegister: function(oEvent){
		},
		
		onNavBack: function() {
			//reset error messages
			this.OwnerComponent.ODataCallsObj.validateData('Login', true);

			this.OwnerComponent.getRouter().navTo("Targetlogview", {});
		}		
		
	});
});