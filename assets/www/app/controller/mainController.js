Ext.define("Project.controller.mainController", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			mainContainer : "mainContainer",
			
			homeView : "homeView", homeTop : "homeTop", homeMain : "homeMain",
			childCategory : "childCategory", childCategoryTop : "childCategoryTop", childCategoryMain : "childCategoryMain", childCategoryBottom : "childCategoryBottom",
			categoryList : "categoryList", categoryListTop : "categoryListTop", categoryListMain : "categoryListMain", categoryListBottom : "categoryListBottom",
			appList : "appList", appListTop : "appListTop", appListMain : "appListMain", appListBottom : "appListBottom",
		},
		control : {},
	},
	launch : function () {
		DB.mainController = this;
		DB.mainContainer = this.getMainContainer();
		
		DB.homeView = this.getHomeView(); DB.homeTop = this.getHomeTop(); DB.homeMain = this.getHomeMain();
		DB.childCategory = this.getChildCategory(); DB.childCategoryTop = this.getChildCategoryTop(); DB.childCategoryMain = this.getChildCategoryMain(); DB.childCategoryBottom = this.getChildCategoryBottom();
		DB.categoryList = this.getCategoryList(); DB.categoryListTop = this.getCategoryListTop(); DB.categoryListMain = this.getCategoryListMain(); DB.categoryListBottom = this.getCategoryListBottom();
		DB.appList = this.getAppList(); DB.appListTop = this.getAppListTop(); DB.appListMain = this.getAppListMain(); DB.appListBottom = this.getAppListBottom();
	},
});
