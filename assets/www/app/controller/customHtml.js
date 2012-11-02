Ext.define("Project.controller.customHtml", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	goBack : function () {
		DoSwitch("childCategory");
	},
});
