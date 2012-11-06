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
				xtype : "appList",
			}, {
				xtype : "categoryList",
			}, {
				xtype : "childCategory",
			}, {
				xtype : "newsList",
			}, {
				xtype : "newsDetail",
			}, {
				xtype : "albumView",
			},
		],
	},
});
