Ext.application({
	name : "Project",
	
	requires : [
		"Ext.MessageBox",
		"Ext.plugin.ListPaging",
		"Ext.data.proxy.JsonP",
	],
	
	models : [
		"appModel",
		"categoryModel",
		"newsModel",
	],
	
	stores : [
		"defaultAppStore",
		"defaultCategoryStore",
		"appListStore",
		"categoryListStore",
		"newsStore",
		"YiNongStore",
	],
	
	views : [
		"widget.homeBtn", "widget.backBtn", "widget.smallerBtn", "widget.biggerBtn",
		"widget.myAccountBtn", "widget.myAppBtn", "widget.aboutBtn",
		
		"homeView", "container.homeViewMain",
		"YiNong", "container.YiNongTop", "container.YiNongMain", "container.YiNongBottom",
		"ZhiHui", "container.ZhiHuiTop", "container.ZhiHuiMain", "container.ZhiHuiBottom",
		"categoryList", "container.categoryListTop", "container.categoryListMain", "container.categoryListBottom",
		"newsList", "container.newsListTop", "container.newsListMain", "container.newsListBottom",
		"newsDetail", "container.newsDetailTop", "container.newsDetailMain", "container.newsDetailBottom",
		"albumView", "container.albumViewTop", "container.albumViewMain", "container.albumViewBottom",
		
		"mainContainer",
	],
	
	controllers : [
		"widget.homeBtn", "widget.backBtn", "widget.smallerBtn", "widget.biggerBtn",
		"widget.myAccountBtn", "widget.myAppBtn", "widget.aboutBtn",
		
		"YiNong", "container.YiNongTop",
		"ZhiHui", "container.ZhiHuiTop",
		"homeView", "container.homeViewMain",
		"categoryList", "container.categoryListMain",
		"newsList", "container.newsListMain",
		"newsDetail",
		"albumView",
		
		"mainController",
	],
	
	launch : function () {
		Ext.Viewport.add(Ext.create("Project.view.mainContainer"));
	},
});
