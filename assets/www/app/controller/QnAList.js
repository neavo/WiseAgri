Ext.define("Project.controller.QnAList", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	goBack : function () {
		DoSwitch("categoryList");
	},
});
