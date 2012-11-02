Ext.define("Project.controller.infoDetail", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	goBack : function () {
		DoSwitch("infoList");
	},
});
