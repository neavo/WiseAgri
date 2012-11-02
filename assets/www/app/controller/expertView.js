Ext.define("Project.controller.expertView", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	goBack : function () {
		DoSwitch("childCategory");
	},
});
