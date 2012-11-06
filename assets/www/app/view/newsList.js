Ext.define("Project.view.newsList", {
	extend : "Ext.Container",
	xtype : "newsList",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				xtype : "newsListTop",
			}, {
				xtype : "newsListMain",
			}, {
				xtype : "newsListBottom",
			}, 
		],
	},
});
