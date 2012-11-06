Ext.define("Project.controller.mainController", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			mainContainer : "mainContainer",
			
			homeView : "homeView", homeTop : "homeTop", homeMain : "homeMain", homeBottom : "homeBottom",
			appList : "appList", appListTop : "appListTop", appListMain : "appListMain", appListBottom : "appListBottom",
			categoryList : "categoryList", categoryListTop : "categoryListTop", categoryListMain : "categoryListMain", categoryListBottom : "categoryListBottom",
			childCategory : "childCategory", childCategoryTop : "childCategoryTop", childCategoryMain : "childCategoryMain", childCategoryBottom : "childCategoryBottom",
			newsList : "newsList", newsListTop : "newsListTop", newsListMain : "newsListMain", newsListBottom : "newsListBottom",
			newsDetail : "newsDetail", newsDetailTop : "newsDetailTop", newsDetailMain : "newsDetailMain", newsDetailBottom : "newsDetailBottom",
		},
		control : {},
	},
	launch : function () {
		DB.mainController = this;
		DB.mainContainer = this.getMainContainer();
		
		DB.homeView = this.getHomeView(); DB.homeTop = this.getHomeTop(); DB.homeMain = this.getHomeMain(); DB.homeBottom = this.getHomeBottom();
		DB.appList = this.getAppList(); DB.appListTop = this.getAppListTop(); DB.appListMain = this.getAppListMain(); DB.appListBottom = this.getAppListBottom();
		DB.categoryList = this.getCategoryList(); DB.categoryListTop = this.getCategoryListTop(); DB.categoryListMain = this.getCategoryListMain(); DB.categoryListBottom = this.getCategoryListBottom();
		DB.childCategory = this.getChildCategory(); DB.childCategoryTop = this.getChildCategoryTop(); DB.childCategoryMain = this.getChildCategoryMain(); DB.childCategoryBottom = this.getChildCategoryBottom();
		DB.newsList = this.getNewsList(); DB.newsListTop = this.getNewsListTop(); DB.newsListMain = this.getNewsListMain(); DB.newsListBottom = this.getNewsListBottom();
		DB.newsDetail = this.getNewsDetail(); DB.newsDetailTop = this.getNewsDetailTop(); DB.newsDetailMain = this.getNewsDetailMain(); DB.newsDetailBottom = this.getNewsDetailBottom();
	},
});
