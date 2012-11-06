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
		"widget.backBtn", "widget.defaultCategoryBtn", "widget.customCategoryBtn", "widget.addCategoryBtn",
		"widget.smallerBtn", "widget.biggerBtn", 
		
		"homeView", "container.homeTop", "container.homeMain", "container.homeBottom",
		"appList", "container.appListTop", "container.appListMain", "container.appListBottom",
		"categoryList", "container.categoryListTop", "container.categoryListMain", "container.categoryListBottom",
		"childCategory", "container.childCategoryTop", "container.childCategoryMain", "container.childCategoryBottom",
		"newsList", "container.newsListTop", "container.newsListMain", "container.newsListBottom",
		"newsDetail", "container.newsDetailTop", "container.newsDetailMain", "container.newsDetailBottom",
		
		"mainContainer",
	],
	
	controllers : [
		"widget.backBtn", "widget.defaultCategoryBtn", "widget.customCategoryBtn", "widget.addCategoryBtn",
		"widget.smallerBtn", "widget.biggerBtn", 
		
		"homeView", "container.homeMain",
		"appList", "container.appListMain",
		"categoryList", "container.categoryListMain",
		"childCategory", "container.childCategoryMain",
		"newsList", "container.newsListMain",
		"newsDetail",

		"mainController",
	],
	
	launch : function () {
		Ext.Viewport.add(Ext.create("Project.view.mainContainer"));
	},
});
