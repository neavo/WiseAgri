Ext.define("Project.controller.container.homeViewTop", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	launch : function () {
		Ext.getStore("defaultAppStore").load({
			callback : function (records, operation, success) {
				if (success && records.lenght != 0) {
					defaultApp = records[0].getData();
					DB.homeViewTop.setTitle(defaultApp.appLocation + " • " + defaultApp.appName);
				};
			},
			scope : this,
		});
	},
});
