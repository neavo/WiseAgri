Ext.application({
	name : "Project",
	
	requires : [
		"Ext.MessageBox",
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
	],
	
	views : [
		"widget.homeBtn", "widget.backBtn", "widget.smallerBtn", "widget.biggerBtn",
		"widget.myAccountBtn", "widget.myAppBtn", "widget.aboutBtn", "widget.YiNongBtn", "widget.ZhiHuiBtn",
		
		"homeView", "container.homeViewMain",
		"orderView", "container.orderViewTop", "container.orderViewMain", "container.orderViewBottom",
		"categoryList", "container.categoryListTop", "container.categoryListMain", "container.categoryListBottom",
		"newsList", "container.newsListTop", "container.newsListMain", "container.newsListBottom",
		"newsDetail", "container.newsDetailTop", "container.newsDetailMain", "container.newsDetailBottom",
		"albumView", "container.albumViewTop", "container.albumViewMain", "container.albumViewBottom",
		
		"mainContainer",
	],
	
	controllers : [
		"widget.homeBtn", "widget.backBtn", "widget.smallerBtn", "widget.biggerBtn",
		"widget.myAccountBtn", "widget.myAppBtn", "widget.aboutBtn", "widget.YiNongBtn", "widget.ZhiHuiBtn",
		
		"homeView", "container.homeViewMain",
		"orderView",
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
