Ext.application({
	name : "Project",
	
	requires : [
		"Ext.field.Search",
		"Ext.MessageBox",
	],
	
	models : [
		"appModel",
		"categoryModel",
		"newsModel",
	],
	
	stores : [
		"defaultCategoryStore",
		"appListStore",
		"webAppStore",
		"childCategoryStore",
		"newsStore",
	],
	
	views : [
		"widget.backBtn", "widget.myAccountBtn", "widget.smallerBtn", "widget.biggerBtn",
		
		"homeView", "container.homeViewTop", "container.homeViewMain", "container.homeViewBottom",
		"appList", "container.appListTop", "container.appListMain", "container.appListBottom",
		"childCategory", "container.childCategoryTop", "container.childCategoryMain", "container.childCategoryBottom",
		"newsList", "container.newsListTop", "container.newsListMain", "container.newsListBottom",
		"newsDetail", "container.newsDetailTop", "container.newsDetailMain", "container.newsDetailBottom",
		"albumView", "container.albumViewTop", "container.albumViewMain", "container.albumViewBottom",
		
		"mainContainer",
	],
	
	controllers : [
		"widget.backBtn", "widget.smallerBtn", "widget.biggerBtn",
		
		"homeView", "container.homeViewMain",
		"appList", "container.appListMain",
		"childCategory", "container.childCategoryMain",
		"newsList", "container.newsListMain",
		"newsDetail",
		"albumView",
		
		"mainController",
	],
	
	launch : function () {
		Ext.Viewport.add(Ext.create("Project.view.mainContainer"));
	},
});
