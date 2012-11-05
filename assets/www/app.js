Ext.application({
	name : "Project",
	
	requires : [],
	
	models : [
		"appModel",
		"categoryModel",
	],
	
	stores : [
		"defaultCategory",
		"customCategory",
		"appListStore",
		"webCategoryStore",
		"categoryListStore",
		"childCategoryStore",
	],
	
	views : [
		"widget.backBtn", "widget.defaultCategoryBtn", "widget.customCategoryBtn", "widget.addCategoryBtn",
		
		"homeView", "container.homeTop", "container.homeMain", "container.homeBottom",
		"appList", "container.appListTop", "container.appListMain", "container.appListBottom",
		"categoryList", "container.categoryListTop", "container.categoryListMain", "container.categoryListBottom",
		"childCategory", "container.childCategoryTop", "container.childCategoryMain", "container.childCategoryBottom",
		
		"mainContainer",
	],
	
	controllers : [
		"widget.backBtn", "widget.defaultCategoryBtn", "widget.customCategoryBtn", "widget.addCategoryBtn",
		
		"homeView", "container.homeMain",
		"childCategory", "container.categoryListMain",
		"appList",
		"categoryList", "container.appListMain",
		
		"mainController",
	],
	
	launch : function () {
		Ext.Viewport.add(Ext.create("Project.view.mainContainer"));
	},
});
