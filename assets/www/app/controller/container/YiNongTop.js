Ext.define("Project.controller.container.YiNongTop", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	launch : function () {
		Ext.getCmp("ZhiHuiBtn").addListener({
			tap : {
				fn : function () {
					DoSwitch("ZhiHui");
				},
				element : "element",
			},
		});
	},
});