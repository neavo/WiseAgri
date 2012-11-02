Ext.define("Project.controller.childCategory", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	goBack : function () {
		DoSwitch("homeView");
	},
});
