Ext.define("Project.view.newsDetail", {
	extend : "Ext.Container",
	xtype : "newsDetail",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				xtype : "newsDetailTop",
			}, {
				xtype : "newsDetailMain",
			}, {
				xtype : "newsDetailBottom",
			}, 
		],
	},
});
