Ext.define("Project.controller.categoryList", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			categoryListMain : "#categoryListMain",
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
			Ext.getCmp("categoryListTop").setTitle(data.name);
			DoLoad(Ext.getCmp("categoryListMain").getStore(), "ZhiHui/GetCategoryList.jsp?parentId=" + data.id);
		};
		if (data.style == "newsCategory") {
			DoNextSwitch("newsList");
			Ext.getCmp("newsListTop").setTitle(data.name);
			DoLoad(Ext.getCmp("newsListMain").getStore(), "ZhiHui/GetNewsList.jsp?categoryId=" + data.id);
		};
		if (data.style == "SnBCategory") {
			DoNextSwitch("SnBList");
			Ext.getCmp("SnBListTop").setTitle(data.name);
			DoLoad(Ext.getCmp("SnBListMain").getStore(), "ZhiHui/GetSnBList.jsp?categoryId=" + data.id);
		};
		if (data.style == "DoSnB") {
			DoNextSwitch("DoSnB");
			Ext.getCmp("DoSnBMain").reset();
			Ext.getCmp("DoSnBTop").setTitle(data.name);
			Ext.getCmp("SnBCID").setValue(data.id);
			DoLoad(Ext.getStore("SnBTypeStore"), "ZhiHui/GetSnBType.jsp?categoryId=" + data.id);
		};
		if (data.style == "QnACategory") {
			DoNextSwitch("QnAList");
			Ext.getCmp("QnAListTop").setTitle(data.name);
			DoLoad(Ext.getCmp("QnAListMain").getStore(), "ZhiHui/GetQnAList.jsp?categoryId=" + data.id);
		};
		if (data.style == "DoQnA") {
			DoNextSwitch("DoQnA");
			Ext.getCmp("DoQnAMain").reset();
			Ext.getCmp("DoQnATop").setTitle(data.name);
			Ext.getCmp("QCID").setValue(data.id);
			DoLoad(Ext.getStore("QnATypeStore"), "ZhiHui/GetQnAType.jsp?categoryId=" + data.id);
		};
		if (data.style == "ExCategory") {
			DoNextSwitch("ExList");
			Ext.getCmp("ExListTop").setTitle(data.name);
			DoLoad(Ext.getCmp("ExListMain").getStore(), "ZhiHui/GetExList.jsp?categoryId=" + data.id);
		};
	},
});
