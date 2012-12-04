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
			DoSwitch("categoryList");
			DB.categoryListTop.setTitle(data.name);
			DoLoad(DB.categoryListMain.getStore(), "ZhiHui/GetCategoryList.jsp?parentId=" + data.id);
		};
		if (data.style == "newsCategory") {
			DoSwitch("newsList");
			DB.newsListTop.setTitle(data.name);
			DoLoad(DB.newsListMain.getStore(), "ZhiHui/GetNewsList.jsp?categoryId=" + data.id, true);
		};
		if (data.style == "SnBCategory") {
			DoSwitch("SnBList");
			DB.SnBListTop.setTitle(data.name);
			DoLoad(DB.SnBListMain.getStore(), "ZhiHui/GetSnBList.jsp?categoryId=" + data.id, true);
		};
		if (data.style == "DoSnB") {
			DoSwitch("DoSnB");
			DB.DoSnBMain.reset();
			DB.DoSnBTop.setTitle(data.name);
			Ext.getCmp("SnBCID").setValue("938");
		};
	},
});
