Ext.define("Project.controller.homeView", {
	extend : "Ext.app.Controller",
	config : {
		refs : {},
		control : {},
	},
	launch : function () {
		setActivatedController(this);
	},
	goBack : function () {
		Ext.Msg.confirm(DB.versionInfo, "确定退出“掌上 • 英山”？", function (buttonId, value, opt) {
			if (buttonId == "yes") {
				navigator.app.exitApp();
			};
		});
	},
});
