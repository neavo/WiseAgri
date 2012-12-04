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
				url : ServerUrl + "ZhiHui/GetCategoryList.jsp?parentId=" + data.id,
			});
			DB.categoryListMain.getStore().load();
			DoSwitch("categoryList");
		};
		if (data.style == "newsCategory") {
			DoSwitch("newsList");
			DB.newsListTop.setTitle(data.name);
			DB.newsListMain.getStore().setProxy({
				type : "jsonp",
				url : ServerUrl + "ZhiHui/GetNewsList.jsp?categoryId=" + data.id,
			});
			DB.newsListMain.getStore().loadPage(1);
		};
		if (data.style == "SnBCategory") {
			DoSwitch("SnBList");
			DB.SnBListTop.setTitle(data.name);
			DB.SnBListMain.getStore().loadPage(1);
		};
		if (data.style == "DoSnB") {
			DoSwitch("DoSnB");
			DB.DoSnBTop.setTitle(data.name);
		};
	},
});
