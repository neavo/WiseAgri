Ext.define("Project.controller.widget.defaultCategoryBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			defaultCategoryBtn : "defaultCategoryBtn",
		},
		control : {
			defaultCategoryBtn : {
				tap : "onDefaultCategoryBtnTap",
			},
		},
	},
	onDefaultCategoryBtnTap : function () {
		DB.homeViewMain.setActiveItem(0);
	},
});
