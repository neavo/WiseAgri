Ext.define("Project.controller.container.appListMain", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			appListMain : "appListMain",
		},
		control : {
			appListMain : {
				itemtap : "onAppListMainItemtap",
			},
		},
	},
	onAppListMainItemtap : function (list, index, target, record, e, eOpts) {
		Ext.getStore("webCategoryStore").load();
		DoSwitch("categoryList");
	},
});
