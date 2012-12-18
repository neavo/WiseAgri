Ext.define("Project.view.mainContainer", {
	extend : "Ext.Container",
	xtype : "mainContainer",
	config : {
		layout : {
			type : "card",
			//animation : "pop",
		},
		items : [{
				xtype : "homeView",
			}, {
				xtype : "YiNong",
			}, {
				xtype : "ZhiHui",
			}, {
				xtype : "FeedBack",
			}, {
				xtype : "categoryList",
			}, {
				xtype : "newsList",
			}, {
				xtype : "newsDetail",
			}, {
				xtype : "SnBList",
			}, {
				xtype : "SnBDetail",
			}, {
				xtype : "DoSnB",
			}, {
				xtype : "QnAList",
			}, {
				xtype : "QnADetail",
			}, {
				xtype : "DoQnA",
			}, {
				xtype : "ExpertList",
			}, {
				xtype : "albumView",
			},
		],
	},
});
