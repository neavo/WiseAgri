Ext.define("Project.controller.container.ZhiHuiTop", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	launch : function () {
		Ext.getCmp("YiNongBtn").addListener({
			tap : {
				fn : function () {
					DoNextSwitch("YiNong");
				},
				element : "element",
			},
		});
	},
});
