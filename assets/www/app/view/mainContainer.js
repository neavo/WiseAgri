Ext.define("Project.view.mainContainer", {
	extend : "Ext.Container",
	xtype : "mainContainer",
	config : {
		layout : {
			type : "card",
			//animation : "slide",
		},
		items : [{
				xtype : "homeView",
			}, {
				xtype : "YiNong",
			}, {
				xtype : "ZhiHui",
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
				xtype : "albumView",
			},
		],
	},
});
