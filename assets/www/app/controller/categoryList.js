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
			setActivatedStore(Ext.getCmp("newsListMain").getStore());
			DoLoad(Ext.getCmp("newsListMain").getStore(), "ZhiHui/GetNewsList.jsp?categoryId=" + data.id);
		};
		if (data.style == "SnBCategory") {
			DoNextSwitch("SnBList");
			Ext.getCmp("SnBListTop").setTitle(data.name);
			setActivatedStore(Ext.getCmp("SnBListMain").getStore());
			DoLoad(Ext.getCmp("SnBListMain").getStore(), "ZhiHui/GetSnBList.jsp?categoryId=" + data.id);
		};
		if (data.style == "DoSnB") {
			DoNextSwitch("DoSnB");
			Ext.getCmp("DoSnBMain").reset();
			Ext.getCmp("SnBCID").setValue(data.id);
			Ext.getCmp("DoSnBTop").setTitle(data.name);
			DoLoad(Ext.getStore("SnBTypeStore"), "ZhiHui/GetSnBType.jsp?categoryId=" + data.id);
		};
		if (data.style == "QnACategory") {
			DoNextSwitch("QnAList");
			Ext.getCmp("QnAListTop").setTitle(data.name);
			setActivatedStore(Ext.getCmp("QnAListMain").getStore());
			DoLoad(Ext.getCmp("QnAListMain").getStore(), "ZhiHui/GetQnAList.jsp?categoryId=" + data.id);
		};
		if (data.style == "DoQnA") {
			DoNextSwitch("DoQnA");
			Ext.getCmp("DoQnAMain").reset();
			Ext.getCmp("QCID").setValue(data.id);
			Ext.getCmp("DoQnATop").setTitle(data.name);
			DoLoad(Ext.getStore("QnATypeStore"), "ZhiHui/GetQnAType.jsp?categoryId=" + data.id);
			DoLoad(Ext.getStore("QnAExpertStore"), "ZhiHui/GetQnAExpert.jsp?categoryId=" + data.id);
		};
		if (data.style == "ExpertCategory") {
			DoNextSwitch("ExpertList");
			setActivatedStore(Ext.getCmp("ExpertListMain").getStore());
			Ext.getCmp("ExpertListTop").setTitle(data.name);
			DoLoad(Ext.getCmp("ExpertListMain").getStore(), "ZhiHui/GetExpertList.jsp?categoryId=" + data.id);
		};
		if (data.style == "WebLink") {
			Ext.getStore("WebLinkStore").setProxy({
				type : "jsonp",
				url : ServerUrl + "ZhiHui/GetWebLink.jsp?categoryId=" + data.id,
			});
			Ext.getStore("WebLinkStore").load({
				callback : function (records, operation, success) {
					if (success && records.lenght != 0) {
						window.plugins.childBrowser.openExternal(records[0].getData().WebLink);
					};
				},
			});
		};
	},
});
