Ext.define("Project.controller.publishView", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	goBack : function () {
		DoSwitch("childCategory");
	},
});
