Ext.application({
	name : "Project",
	
	requires : [
		"Ext.field.Select",
		"Ext.form.Panel",
		"Ext.field.Hidden",
		"Ext.MessageBox",
		"Ext.data.proxy.JsonP",
		"Ext.carousel.Carousel",
	],
	
	models : [
		"appModel",
		"categoryModel",
		"newsModel",
		"SnBModel",
		"QnAModel",
		"ExpertModel",
		"TypeModel",
		"FeedBackModel",
		"WebLinkModel",
	],
	
	stores : [
		"defaultBaseStore", "defaultAppStore", "defaultCategoryStore",
		"appListStore",
		"categoryListStore",
		"newsStore",
		"SnBStore", "SnBTypeStore",
		"QnAStore", "QnATypeStore",
		"ExpertStore",
		"YiNongStore",
		"FeedBackStore",
		"WebLinkStore",
	],
	
	views : [
		"widget.homeBtn", "widget.backBtn",
		"widget.smallerBtn", "widget.biggerBtn",
		"widget.DoSnBBtn", "widget.DoQnABtn",
		
		"homeView",
		"YiNong",  "ZhiHui", "FeedBack",
		"categoryList",
		"newsList", "newsDetail", "albumView",
		"SnBList", "SnBDetail", "DoSnB",
		"QnAList", "QnADetail", "DoQnA", "ExpertList",
		
		"mainContainer",
	],
	
	controllers : [
		"widget.homeBtn", "widget.backBtn",
		"widget.smallerBtn", "widget.biggerBtn",
		"widget.DoSnBBtn", "widget.DoQnABtn",
		
		"homeView",
		"container.YiNongTop",
		"container.ZhiHuiTop",
		"categoryList",
		"newsList",
		"SnBList",
		"QnAList",

		"mainController",
	],
	
	launch : function () {
		Ext.Viewport.add(Ext.create("Project.view.mainContainer"));
	},
});
