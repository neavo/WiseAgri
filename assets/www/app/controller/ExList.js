Ext.define("Project.controller.ExList", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	goBack : function () {
		DoSwitch("categoryList");
	},
});
