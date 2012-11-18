Ext.define("Project.view.container.newsDetailBottom", {
	extend : "Ext.Toolbar",
	xtype : "newsDetailBottom",
	config : {
		docked : "bottom",
		baseCls : "BottomBar",
		items : [{
				xtype : "spacer",
			}, {
				xtype : "biggerBtn",
			}, {
				xtype : "spacer",
			}, {
				xtype : "smallerBtn",
			}, {
				xtype : "spacer",
			}, {
				xtype : "backBtn",
			}, {
				xtype : "spacer",
			},
		],
	},
});
