Ext.define("Project.controller.DoQnA", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	goBack : function () {
		DoSwitch("categoryList");
	},
});
