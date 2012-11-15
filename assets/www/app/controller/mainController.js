Ext.define("Project.controller.mainController", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			mainContainer : "mainContainer",
			
			homeView : "homeView", homeViewTop : "homeViewTop", homeViewMain : "homeViewMain", homeViewBottom : "homeViewBottom",
			appList : "appList", appListTop : "appListTop", appListMain : "appListMain", appListBottom : "appListBottom",
			childCategory : "childCategory", childCategoryTop : "childCategoryTop", childCategoryMain : "childCategoryMain", childCategoryBottom : "childCategoryBottom",
			newsList : "newsList", newsListTop : "newsListTop", newsListMain : "newsListMain", newsListBottom : "newsListBottom",
			newsDetail : "newsDetail", newsDetailTop : "newsDetailTop", newsDetailMain : "newsDetailMain", newsDetailBottom : "newsDetailBottom",
			albumView : "albumView", albumViewTop : "albumViewTop", albumViewMain : "albumViewMain", albumViewBottom : "albumViewBottom",
		},
		control : {
			mainContainer : {
				show : "onMainContainerShow",
			},
		},
	},
	launch : function () {
		DB.mainController = this;
		DB.mainContainer = this.getMainContainer();
		
		DB.homeView = this.getHomeView(); DB.homeViewTop = this.getHomeViewTop(); DB.homeViewMain = this.getHomeViewMain(); DB.homeViewBottom = this.getHomeViewBottom();
		DB.appList = this.getAppList(); DB.appListTop = this.getAppListTop(); DB.appListMain = this.getAppListMain(); DB.appListBottom = this.getAppListBottom();
		DB.childCategory = this.getChildCategory(); DB.childCategoryTop = this.getChildCategoryTop(); DB.childCategoryMain = this.getChildCategoryMain(); DB.childCategoryBottom = this.getChildCategoryBottom();
		DB.newsList = this.getNewsList(); DB.newsListTop = this.getNewsListTop(); DB.newsListMain = this.getNewsListMain(); DB.newsListBottom = this.getNewsListBottom();
		DB.newsDetail = this.getNewsDetail(); DB.newsDetailTop = this.getNewsDetailTop(); DB.newsDetailMain = this.getNewsDetailMain(); DB.newsDetailBottom = this.getNewsDetailBottom();
		DB.albumView = this.getAlbumView(); DB.albumViewTop = this.getAlbumViewTop(); DB.albumViewMain = this.getAlbumViewMain(); DB.albumViewBottom = this.getAlbumViewBottom();
	},
	onMainContainerShow : function (container, eOpts) {
		// 加载完毕以后干掉启动闪屏
		if (navigator.splashscreen) {
			navigator.splashscreen.hide();
		};
	},
});
