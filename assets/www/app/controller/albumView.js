Ext.define("Project.controller.albumView", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	goBack : function () {
		DoSwitch("newsDetail");
	},
});
