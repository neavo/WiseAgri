Ext.define("Project.view.container.newsListBottom", {
	extend : "Ext.Toolbar",
	xtype : "newsListBottom",
	config : {
		docked : "bottom",
		baseCls : "BottomBar",
		items : [{
				xtype : "spacer",
			}, {
				xtype : "homeBtn",
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
