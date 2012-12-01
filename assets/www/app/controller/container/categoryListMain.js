Ext.define("Project.controller.container.categoryListMain", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			categoryListMain : "categoryListMain",
		},
		control : {
			categoryListMain : {
				itemtap : "onCategoryListMainItemtap",
			},
		},
	},
	onCategoryListMainItemtap : function (list, index, target, record, e, eOpts) {
		var data = record.getData();
		if (data.style == "parentCategory") {
			DB.categoryListTop.setTitle(data.name);
			DB.categoryListMain.getStore().setProxy({
				type : "jsonp",
				url : ServerUrl + "GetCategoryList.jsp?parentId=" + data.id,
			});
			DB.categoryListMain.getStore().load();
			DoSwitch("categoryList");
		} else if (data.style == "newsCategory") {
			DoSwitch("newsList");
			DB.newsListTop.setTitle(data.name);
			DB.newsListMain.getStore().setProxy({
				type : "jsonp",
				url : ServerUrl + "GetNewsList.jsp?categoryId=" + data.id,
			});
			DB.newsListMain.getStore().load();
		} else {
			DoAlert("开发中 ... </br>（" + data.style + " , " + data.id+ "）");
		};
	},
});
