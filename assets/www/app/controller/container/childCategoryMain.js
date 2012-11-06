Ext.define("Project.controller.container.childCategoryMain", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			childCategoryMain : "childCategoryMain",
		},
		control : {
			childCategoryMain : {
				itemtap : "onChildCategoryMainItemtap",
			},
		},
	},
	onChildCategoryMainItemtap : function (list, index, target, record, e, eOpts) {
		var data = record.getData();
		DoSwitch("newsList");
		DB.newsListTop.setTitle(data.categoryName);
		DB.newsListMain.getStore().load();
	},
});
