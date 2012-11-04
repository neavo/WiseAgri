Ext.define("Project.controller.widget.addCategoryBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			addCategoryBtn : "addCategoryBtn",
		},
		control : {
			addCategoryBtn : {
				tap : "onAddCategoryBtnTap",
			},
		},
	},
	onAddCategoryBtnTap : function (btn, e, eOpts) {
		Ext.getStore("appListStore").load();
		DoSwitch("appList");
	},
});
