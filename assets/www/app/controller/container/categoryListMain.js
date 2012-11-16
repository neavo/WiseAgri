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
		if (data.categoryStyle == "parentCategory") {
			DB.categoryListTop.setTitle(data.categoryName);
			DB.categoryListMain.getStore().setProxy({
				type : "jsonp",
				url : ServerUrl + "GetCategoryList.jsp?parentId=" + data.categoryId,
			});
			DB.categoryListMain.getStore().load();
			DoSwitch("categoryList");
		} else if (data.categoryStyle == "newsCategory") {
			DoSwitch("newsList");
			DB.newsListTop.setTitle(data.categoryName);
			DB.newsListMain.getStore().setProxy({
				type : "jsonp",
				url : ServerUrl + "GetNewsList.jsp?categoryId=" + data.categoryId,
			});
			DB.newsListMain.getStore().load();
		} else {
			DoAlert("开发中 ... </br>（" + data.categoryStyle + " , " + data.categoryId+ "）");
		};
	},
});
