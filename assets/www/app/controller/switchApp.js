Ext.define("Project.controller.switchApp", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	goBack : function () {
		DoSwitch("homeView");
	},
});
