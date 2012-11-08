Ext.define("Project.controller.widget.customCategoryBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			customCategoryBtn : "customCategoryBtn",
		},
		control : {},
	},
	launch : function () {
		this.getCustomCategoryBtn().addListener({
			tap : {
				fn : function () {
					Ext.getStore("appListStore").load();
					DoSwitch("appList");
				},
				element : "element",
			},
		});
	},
});
