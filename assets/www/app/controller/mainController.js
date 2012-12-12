Ext.define("Project.controller.mainController", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			mainContainer : "mainContainer",

			homeView : "homeView", homeViewTop : "homeViewTop", homeViewMain : "homeViewMain", homeViewBottom : "homeViewBottom", 
			YiNong : "YiNong", YiNongTop : "YiNongTop", YiNongMain : "YiNongMain", YiNongBottom : "YiNongBottom",
			ZhiHui : "ZhiHui", ZhiHuiTop : "ZhiHuiTop", ZhiHuiMain : "ZhiHuiMain", ZhiHuiBottom : "ZhiHuiBottom",
			FeedBack : "FeedBack", FeedBackTop : "FeedBackTop", FeedBackMain : "FeedBackMain", FeedBackBottom : "FeedBackBottom",
			categoryList : "categoryList", categoryListTop : "categoryListTop", categoryListMain : "categoryListMain", categoryListBottom : "categoryListBottom",
			newsList : "newsList", newsListTop : "newsListTop", newsListMain : "newsListMain", newsListBottom : "newsListBottom",
			newsDetail : "newsDetail", newsDetailTop : "newsDetailTop", newsDetailMain : "newsDetailMain", newsDetailBottom : "newsDetailBottom",
			SnBList : "SnBList", SnBListTop : "SnBListTop", SnBListMain : "SnBListMain", SnBListBottom : "SnBListBottom",
			SnBDetail : "SnBDetail", SnBDetailTop : "SnBDetailTop", SnBDetailMain : "SnBDetailMain", SnBDetailBottom : "SnBDetailBottom",
			DoSnB : "DoSnB", DoSnBTop : "DoSnBTop", DoSnBMain : "DoSnBMain", DoSnBBottom : "DoSnBBottom",
			QnAList : "QnAList", QnAListTop : "QnAListTop", QnAListMain : "QnAListMain", QnAListBottom : "QnAListBottom",
			QnADetail : "QnADetail", QnADetailTop : "QnADetailTop", QnADetailMain : "QnADetailMain", QnADetailBottom : "QnADetailBottom",
			DoQnA : "DoQnA", DoQnATop : "DoQnATop", DoQnAMain : "DoQnAMain", DoQnABottom : "DoQnABottom",
			ExList : "ExList", ExListTop : "ExListTop", ExListMain : "ExListMain", ExListBottom : "ExListBottom",
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
		loadDefaultBase();
		loadDefaultApp();
		loadDefaultCategory();
		loadMyOrder();
		ScreenWidth = Ext.Viewport.getWindowWidth();
		ScreenHeight = Ext.Viewport.getWindowHeight();
	},
	launch : function () {
		DB.mainController = this;
		DB.mainContainer = this.getMainContainer();
		
		DB.homeView = this.getHomeView(); DB.homeViewTop = this.getHomeViewTop(); DB.homeViewMain = this.getHomeViewMain(); DB.homeViewBottom = this.getHomeViewBottom(); 
		DB.YiNong = this.getYiNong(); DB.YiNongTop = this.getYiNongTop(); DB.YiNongMain = this.getYiNongMain(); DB.YiNongBottom = this.getYiNongBottom();
		DB.ZhiHui = this.getZhiHui(); DB.ZhiHuiTop = this.getZhiHuiTop(); DB.ZhiHuiMain = this.getZhiHuiMain(); DB.ZhiHuiBottom = this.getZhiHuiBottom();
		DB.FeedBack = this.getFeedBack(); DB.FeedBackTop = this.getFeedBackTop(); DB.FeedBackMain = this.getFeedBackMain(); DB.FeedBackBottom = this.getFeedBackBottom();
		DB.categoryList = this.getCategoryList(); DB.categoryListTop = this.getCategoryListTop(); DB.categoryListMain = this.getCategoryListMain(); DB.categoryListBottom = this.getCategoryListBottom();
		DB.newsList = this.getNewsList(); DB.newsListTop = this.getNewsListTop(); DB.newsListMain = this.getNewsListMain(); DB.newsListBottom = this.getNewsListBottom();
		DB.newsDetail = this.getNewsDetail(); DB.newsDetailTop = this.getNewsDetailTop(); DB.newsDetailMain = this.getNewsDetailMain(); DB.newsDetailBottom = this.getNewsDetailBottom();
		DB.SnBList = this.getSnBList(); DB.SnBListTop = this.getSnBListTop(); DB.SnBListMain = this.getSnBListMain(); DB.SnBListBottom = this.getSnBListBottom();
		DB.SnBDetail = this.getSnBDetail(); DB.SnBDetailTop = this.getSnBDetailTop(); DB.SnBDetailMain = this.getSnBDetailMain(); DB.SnBDetailBottom = this.getSnBDetailBottom();
		DB.DoSnB = this.getDoSnB(); DB.DoSnBTop = this.getDoSnBTop(); DB.DoSnBMain = this.getDoSnBMain(); DB.DoSnBBottom = this.getDoSnBBottom();
		DB.QnAList = this.getQnAList(); DB.QnAListTop = this.getQnAListTop(); DB.QnAListMain = this.getQnAListMain(); DB.QnAListBottom = this.getQnAListBottom();
		DB.QnADetail = this.getQnADetail(); DB.QnADetailTop = this.getQnADetailTop(); DB.QnADetailMain = this.getQnADetailMain(); DB.QnADetailBottom = this.getQnADetailBottom();
		DB.DoQnA = this.getDoQnA(); DB.DoQnATop = this.getDoQnATop(); DB.DoQnAMain = this.getDoQnAMain(); DB.DoQnABottom = this.getDoQnABottom();
		DB.ExList = this.getExList(); DB.ExListTop = this.getExListTop(); DB.ExListMain = this.getExListMain(); DB.ExListBottom = this.getExListBottom();
		DB.albumView = this.getAlbumView(); DB.albumViewTop = this.getAlbumViewTop(); DB.albumViewMain = this.getAlbumViewMain(); DB.albumViewBottom = this.getAlbumViewBottom();
	},
	onMainContainerShow : function (container, eOpts) {
		// 加载完毕以后干掉启动闪屏
		if (navigator.splashscreen) {
			navigator.splashscreen.hide();
		};
	},
});
