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
		DB.homeMain.setActiveItem(0);
	},
});
