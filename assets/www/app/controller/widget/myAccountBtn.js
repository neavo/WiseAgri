Ext.define("Project.controller.widget.myAccountBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			myAccountBtn : "myAccountBtn",
		},
		control : {},
	},
	launch : function () {
		this.getMyAccountBtn().addListener({
			tap : {
				fn : function () {
					DoAlert("功能开发中 ... ");
				},
				element : "element",
			},
		});
	},
});
