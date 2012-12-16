Ext.define("Project.controller.mainController", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			mainContainer : "mainContainer",
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
	},
	onMainContainerShow : function (container, eOpts) {
		// 加载完毕以后干掉启动闪屏
		if (navigator.splashscreen) {
			navigator.splashscreen.hide();
		};
	},
});
