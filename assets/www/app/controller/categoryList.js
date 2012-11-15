Ext.define("Project.controller.categoryList", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	goBack : function () {
		DoSwitch("homeView");
	},
});
