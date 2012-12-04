Ext.define("Project.controller.mainController", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			mainContainer : "mainContainer",

			homeView : "homeView", homeViewMain : "homeViewMain", 
			YiNong : "YiNong", YiNongTop : "YiNongTop", YiNongMain : "YiNongMain", YiNongBottom : "YiNongBottom",
			ZhiHui : "ZhiHui", ZhiHuiTop : "ZhiHuiTop", ZhiHuiMain : "ZhiHuiMain", ZhiHuiBottom : "ZhiHuiBottom",
			categoryList : "categoryList", categoryListTop : "categoryListTop", categoryListMain : "categoryListMain", categoryListBottom : "categoryListBottom",
			newsList : "newsList", newsListTop : "newsListTop", newsListMain : "newsListMain", newsListBottom : "newsListBottom",
			newsDetail : "newsDetail", newsDetailTop : "newsDetailTop", newsDetailMain : "newsDetailMain", newsDetailBottom : "newsDetailBottom",
			SnBList : "SnBList", SnBListTop : "SnBListTop", SnBListMain : "SnBListMain", SnBListBottom : "SnBListBottom",
			SnBDetail : "SnBDetail", SnBDetailTop : "SnBDetailTop", SnBDetailMain : "SnBDetailMain", SnBDetailBottom : "SnBDetailBottom",
			DoSnB : "DoSnB", DoSnBTop : "DoSnBTop", DoSnBMain : "DoSnBMain", DoSnBBottom : "DoSnBBottom",
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
		// 加载本地数据
		loadDefaultApp();
		loadDefaultCategory();
		loadMyOrder();
	},
	launch : function () {
		DB.mainController = this;
		DB.mainContainer = this.getMainContainer();
		
		DB.homeView = this.getHomeView(); DB.homeViewMain = this.getHomeViewMain(); 
		DB.YiNong = this.getYiNong(); DB.YiNongTop = this.getYiNongTop(); DB.YiNongMain = this.getYiNongMain(); DB.YiNongBottom = this.getYiNongBottom();
		DB.ZhiHui = this.getZhiHui(); DB.ZhiHuiTop = this.getZhiHuiTop(); DB.ZhiHuiMain = this.getZhiHuiMain(); DB.ZhiHuiBottom = this.getZhiHuiBottom();
		DB.categoryList = this.getCategoryList(); DB.categoryListTop = this.getCategoryListTop(); DB.categoryListMain = this.getCategoryListMain(); DB.categoryListBottom = this.getCategoryListBottom();
		DB.newsList = this.getNewsList(); DB.newsListTop = this.getNewsListTop(); DB.newsListMain = this.getNewsListMain(); DB.newsListBottom = this.getNewsListBottom();
		DB.newsDetail = this.getNewsDetail(); DB.newsDetailTop = this.getNewsDetailTop(); DB.newsDetailMain = this.getNewsDetailMain(); DB.newsDetailBottom = this.getNewsDetailBottom();
		DB.SnBList = this.getSnBList(); DB.SnBListTop = this.getSnBListTop(); DB.SnBListMain = this.getSnBListMain(); DB.SnBListBottom = this.getSnBListBottom();
		DB.SnBDetail = this.getSnBDetail(); DB.SnBDetailTop = this.getSnBDetailTop(); DB.SnBDetailMain = this.getSnBDetailMain(); DB.SnBDetailBottom = this.getSnBDetailBottom();
		DB.DoSnB = this.getDoSnB(); DB.DoSnBTop = this.getDoSnBTop(); DB.DoSnBMain = this.getDoSnBMain(); DB.DoSnBBottom = this.getDoSnBBottom();
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
