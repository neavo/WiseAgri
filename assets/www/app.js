Ext.application({
	name : "Project",
	
	requires : [
		"Ext.field.Select",
		"Ext.MessageBox",
		"Ext.field.Hidden",
		"Ext.plugin.ListPaging",
		"Ext.data.proxy.JsonP",
	],
	
	models : [
		"appModel",
		"categoryModel",
		"newsModel",
		"SnBModel",
		"QnAModel",
		"ExModel",
		"TypeModel",
		"FeedBackModel",
	],
	
	stores : [
		"defaultBaseStore", "defaultAppStore", "defaultCategoryStore",
		"appListStore",
		"categoryListStore",
		"newsStore",
		"SnBStore", "SnBTypeStore",
		"QnAStore", "QnATypeStore",
		"ExStore",
		"YiNongStore",
		"FeedBackStore",
	],
	
	views : [
		"widget.homeBtn", "widget.backBtn",
		"widget.smallerBtn", "widget.biggerBtn",
		"widget.DoSnBBtn", "widget.DoQnABtn",
		
		"homeView", "container.homeViewTop", "container.homeViewMain", "container.homeViewBottom",
		"YiNong", "container.YiNongTop", "container.YiNongMain", "container.YiNongBottom",
		"ZhiHui", "container.ZhiHuiTop", "container.ZhiHuiMain", "container.ZhiHuiBottom",
		"FeedBack", "container.FeedBackTop", "container.FeedBackMain", "container.FeedBackBottom",
		"categoryList", "container.categoryListTop", "container.categoryListMain", "container.categoryListBottom",
		"newsList", "container.newsListTop", "container.newsListMain", "container.newsListBottom",
		"newsDetail", "container.newsDetailTop", "container.newsDetailMain", "container.newsDetailBottom",
		"SnBList", "container.SnBListTop", "container.SnBListMain", "container.SnBListBottom",
		"SnBDetail", "container.SnBDetailTop", "container.SnBDetailMain", "container.SnBDetailBottom",
		"DoSnB", "container.DoSnBTop", "container.DoSnBMain", "container.DoSnBBottom",
		"QnAList", "container.QnAListTop", "container.QnAListMain", "container.QnAListBottom",
		"QnADetail", "container.QnADetailTop", "container.QnADetailMain", "container.QnADetailBottom",
		"DoQnA", "container.DoQnATop", "container.DoQnAMain", "container.DoQnABottom",
		"ExList", "container.ExListTop", "container.ExListMain", "container.ExListBottom",
		"albumView", "container.albumViewTop", "container.albumViewMain", "container.albumViewBottom",
		
		"mainContainer",
	],
	
	controllers : [
		"widget.homeBtn", "widget.backBtn",
		"widget.smallerBtn", "widget.biggerBtn",
		"widget.DoSnBBtn", "widget.DoQnABtn",
		
		"homeView", "container.homeViewMain", "container.homeViewTop",
		"container.YiNongTop",
		"container.ZhiHuiTop",
		"container.categoryListMain",
		"container.newsListMain",
		"container.SnBListMain",
		"container.QnAListMain",

		"mainController",
	],
	
	launch : function () {
		Ext.Viewport.add(Ext.create("Project.view.mainContainer"));
	},
});
