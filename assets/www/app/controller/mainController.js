Ext.define("Project.controller.mainController", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			mainContainer : "mainContainer",

			homeView : "homeView", homeViewMain : "homeViewMain", 
			orderView : "orderView", orderViewTop : "orderViewTop", orderViewMain : "orderViewMain", orderViewBottom : "orderViewBottom",
			categoryList : "categoryList", categoryListTop : "categoryListTop", categoryListMain : "categoryListMain", categoryListBottom : "categoryListBottom",
			newsList : "newsList", newsListTop : "newsListTop", newsListMain : "newsListMain", newsListBottom : "newsListBottom",
			newsDetail : "newsDetail", newsDetailTop : "newsDetailTop", newsDetailMain : "newsDetailMain", newsDetailBottom : "newsDetailBottom",
			albumView : "albumView", albumViewTop : "albumViewTop", albumViewMain : "albumViewMain", albumViewBottom : "albumViewBottom",
			
			homeViewCarousel : "#homeViewCarousel",
		},
		control : {
			mainContainer : {
				show : "onMainContainerShow",
			},
		},
	},
	init : function () {
		loadDefaultApp();
		loadDefaultCategory();
		loadMyApp();
		loadMyCategory();
	},
	launch : function () {
		DB.mainController = this;
		DB.mainContainer = this.getMainContainer();
		
		DB.homeView = this.getHomeView(); DB.homeViewMain = this.getHomeViewMain(); 
		DB.orderView = this.getOrderView(); DB.orderViewTop = this.getOrderViewTop(); DB.orderViewMain = this.getOrderViewMain(); DB.orderViewBottom = this.getOrderViewBottom();
		DB.categoryList = this.getCategoryList(); DB.categoryListTop = this.getCategoryListTop(); DB.categoryListMain = this.getCategoryListMain(); DB.categoryListBottom = this.getCategoryListBottom();
		DB.newsList = this.getNewsList(); DB.newsListTop = this.getNewsListTop(); DB.newsListMain = this.getNewsListMain(); DB.newsListBottom = this.getNewsListBottom();
		DB.newsDetail = this.getNewsDetail(); DB.newsDetailTop = this.getNewsDetailTop(); DB.newsDetailMain = this.getNewsDetailMain(); DB.newsDetailBottom = this.getNewsDetailBottom();
		DB.albumView = this.getAlbumView(); DB.albumViewTop = this.getAlbumViewTop(); DB.albumViewMain = this.getAlbumViewMain(); DB.albumViewBottom = this.getAlbumViewBottom();
		
		DB.homeViewCarousel = this.getHomeViewCarousel();
	},
	onMainContainerShow : function (container, eOpts) {
		// 加载完毕以后干掉启动闪屏
		if (navigator.splashscreen) {
			navigator.splashscreen.hide();
		};
	},
});
