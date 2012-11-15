Ext.application({
	name : "Project",
	
	requires : [
		"Ext.field.Search",
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
		"localAppStore",
		"categoryListStore",
		"newsStore",
	],
	
	views : [
		"widget.backBtn", "widget.smallerBtn", "widget.biggerBtn",
		
		"homeView", "container.homeViewTop", "container.homeViewMain", "container.homeViewBottom",
		"appList", "container.appListTop", "container.appListMain", "container.appListBottom",
		"categoryList", "container.categoryListTop", "container.categoryListMain", "container.categoryListBottom",
		"newsList", "container.newsListTop", "container.newsListMain", "container.newsListBottom",
		"newsDetail", "container.newsDetailTop", "container.newsDetailMain", "container.newsDetailBottom",
		"albumView", "container.albumViewTop", "container.albumViewMain", "container.albumViewBottom",
		
		"mainContainer",
	],
	
	controllers : [
		"widget.backBtn", "widget.smallerBtn", "widget.biggerBtn",
		
		"homeView", "container.homeViewTop", "container.homeViewMain",
		"appList", "container.appListMain",
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
