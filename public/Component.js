sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"zstd/zstd_log/model/models",
	"zstd/zstd_log/model/DataCalls"
], function (UIComponent, Device, models, DataCalls) {
	"use strict";

	return UIComponent.extend("zstd.zstd_log.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		
			this.oModelUserEntry = new sap.ui.model.json.JSONModel(
				JSON.parse('{"email" : "" , "password" : "" , "name" : "" }')
			);
			this.oModelUserEntry.setDefaultBindingMode("TwoWay");	
			
			this.setModel(this.oModelUserEntry , "oModelUserEntry");

				//before rendering the first route, read data
				if(!this.ODataCallsObj){
				//create new fda oDataCalls object
					var ODataCallsObj = new DataCalls(	this.oModelUserEntry,
														this.getModel("worklistView"),
														this,
														this.getModel("i18n").getResourceBundle()
													);
													
					this.ODataCallsObj = ODataCallsObj;					
				}
			
		}
	});
});