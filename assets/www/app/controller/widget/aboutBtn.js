Ext.define("Project.controller.widget.aboutBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			aboutBtn : "aboutBtn",
		},
		control : {},
	},
	launch : function () {
		this.getAboutBtn().addListener({
			tap : {
				fn : function () {
					DoAlert("咸宁" + " • " + "魅力嘉鱼");
				},
				element : "element",
			},
		});
	},
});
