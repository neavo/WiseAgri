Ext.define("Project.controller.SnBDetail", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	goBack : function () {
		DoSwitch("SnBList");
	},
});
