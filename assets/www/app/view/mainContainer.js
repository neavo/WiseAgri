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
				xtype : "orderView",
			}, {
				xtype : "categoryList",
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
