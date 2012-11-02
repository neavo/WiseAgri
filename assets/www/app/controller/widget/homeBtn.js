Ext.define("Project.controller.widget.homeBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			mainContainer : "mainContainer",
			homeBtn : "homeBtn",
			homeView : "homeView",
		},
		control : {
			homeBtn : {
				tap : "onHomeBtnTap",
			},
		},
	},
	onHomeBtnTap : function () {
		setActivatedController(this.getApplication().getController("homeViewController"));
		DB.mainContainer.setActiveItem(DB.homeView);
	},
});
