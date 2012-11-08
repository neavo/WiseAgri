Ext.application({
	name : "Project",
	
	requires : [],
	
	models : [
		"appModel",
		"categoryModel",
		"newsModel",
	],
	
	stores : [
		"defaultCategoryStore",
		"appListStore",
		"webCategoryStore",
		"categoryListStore",
		"childCategoryStore",
		"newsStore",
	],
	
	views : [
		"widget.backBtn", "widget.categorySettingBtn", "widget.switchAppBtn", "widget.myStationBtn",
		"widget.smallerBtn", "widget.biggerBtn", "widget.nextBtn", "widget.prevBtn", 
		
		"homeView", "container.homeViewTop", "container.homeViewMain", "container.homeViewBottom",
		"appList", "container.appListTop", "container.appListMain", "container.appListBottom",
		"categoryList", "container.categoryListTop", "container.categoryListMain", "container.categoryListBottom",
		"childCategory", "container.childCategoryTop", "container.childCategoryMain", "container.childCategoryBottom",
		"newsList", "container.newsListTop", "container.newsListMain", "container.newsListBottom",
		"newsDetail", "container.newsDetailTop", "container.newsDetailMain", "container.newsDetailBottom",
		"albumView", "container.albumViewTop", "container.albumViewMain", "container.albumViewBottom",
		"switchApp", "container.switchAppTop", "container.switchAppMain", "container.switchAppBottom",
		"otherApp", "container.otherAppTop", "container.otherAppMain", "container.otherAppBottom",
		
		"mainContainer",
	],
	
	controllers : [
		"widget.backBtn", "widget.categorySettingBtn", "widget.switchAppBtn",
		"widget.smallerBtn", "widget.biggerBtn", "widget.nextBtn", "widget.prevBtn", 
		
		"homeView", "container.homeViewMain",
		"appList", "container.appListMain",
		"categoryList", "container.categoryListMain",
		"childCategory", "container.childCategoryMain",
		"newsList", "container.newsListMain",
		"newsDetail",
		"albumView",
		"switchApp", "container.switchAppMain",
		"otherApp", 

		"mainController",
	],
	
	launch : function () {
		Ext.Viewport.add(Ext.create("Project.view.mainContainer"));
	},
});
