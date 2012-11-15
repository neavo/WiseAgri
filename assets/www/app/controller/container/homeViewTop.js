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
					var data = records[0].getData()
					DB.homeViewTop.setTitle(data.appLocation + " • " + data.appName);
				};
			},
			scope : this,
		});
	},
});
