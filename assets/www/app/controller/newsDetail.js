Ext.define("Project.controller.newsDetail", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	goBack : function () {
		DoSwitch("newsList");
	},
});
