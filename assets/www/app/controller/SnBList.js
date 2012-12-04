Ext.define("Project.controller.SnBList", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	goBack : function () {
		DoSwitch("categoryList");
	},
});
