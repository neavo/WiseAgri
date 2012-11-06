Ext.define("Project.controller.newsList", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	goBack : function () {
		DoSwitch("homeView");
	},
});
