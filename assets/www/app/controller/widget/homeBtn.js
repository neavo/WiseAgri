Ext.define("Project.controller.widget.homeBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			homeBtn : "homeBtn",
		},
		control : {
			homeBtn : {
				tap : "onHomeBtnTap",
			},
		},
	},
	onHomeBtnTap : function () {
		DoNextSwitch("homeView");
	},
});
