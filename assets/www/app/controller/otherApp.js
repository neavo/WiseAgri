Ext.define("Project.controller.otherApp", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	goBack : function () {
		DoSwitch("switchApp");
	},
});
