Ext.define("Project.controller.DoSnB", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	goBack : function () {
		DoSwitch("categoryList");
	},
});
