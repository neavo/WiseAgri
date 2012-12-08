Ext.define("Project.controller.QnADetail", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	goBack : function () {
		DoSwitch("QnAList");
	},
});
