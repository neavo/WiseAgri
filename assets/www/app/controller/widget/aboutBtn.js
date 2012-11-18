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
					DoAlert(defaultApp.appLocation + " • " + defaultApp.appName);
				},
				element : "element",
			},
		});
	},
});
