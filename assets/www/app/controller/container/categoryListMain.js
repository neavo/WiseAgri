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
			DoLoad(DB.categoryListMain.getStore(), "ZhiHui/GetCategoryList.jsp?parentId=" + data.id);
		};
		if (data.style == "newsCategory") {
			DoNextSwitch("newsList");
			DB.newsListTop.setTitle(data.name);
			DoLoad(DB.newsListMain.getStore(), "ZhiHui/GetNewsList.jsp?categoryId=" + data.id);
		};
		if (data.style == "SnBCategory") {
			DoNextSwitch("SnBList");
			DB.SnBListTop.setTitle(data.name);
			DoLoad(DB.SnBListMain.getStore(), "ZhiHui/GetSnBList.jsp?categoryId=" + data.id);
		};
		if (data.style == "DoSnB") {
			DoNextSwitch("DoSnB");
			DB.DoSnBMain.reset();
			DB.DoSnBTop.setTitle(data.name);
			Ext.getCmp("SnBCID").setValue(data.id);
			DoLoad(Ext.getStore("SnBTypeStore"), "ZhiHui/GetSnBType.jsp?categoryId=" + data.id);
		};
		if (data.style == "QnACategory") {
			DoNextSwitch("QnAList");
			DB.QnAListTop.setTitle(data.name);
			DoLoad(DB.QnAListMain.getStore(), "ZhiHui/GetQnAList.jsp?categoryId=" + data.id);
		};
		if (data.style == "DoQnA") {
			DoNextSwitch("DoQnA");
			DB.DoQnAMain.reset();
			DB.DoQnATop.setTitle(data.name);
			Ext.getCmp("QnACID").setValue(data.id);
			DoLoad(Ext.getStore("QnATypeStore"), "ZhiHui/GetQnAType.jsp?categoryId=" + data.id);
		};
		if (data.style == "ExCategory") {
			DoNextSwitch("ExList");
			DB.ExListTop.setTitle(data.name);
			DoLoad(DB.ExListMain.getStore(), "ZhiHui/GetExList.jsp?categoryId=" + data.id);
		};
	},
});
