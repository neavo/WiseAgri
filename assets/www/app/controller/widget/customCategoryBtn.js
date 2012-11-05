Ext.define("Project.controller.widget.customCategoryBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			customCategoryBtn : "customCategoryBtn",
		},
		control : {
			customCategoryBtn : {
				tap : "onCustomCategoryBtnTap",
			},
		},
	},
	onCustomCategoryBtnTap : function () {
		DB.homeMain.setActiveItem(1);
	},
});
