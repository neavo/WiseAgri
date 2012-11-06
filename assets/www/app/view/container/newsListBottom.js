Ext.define("Project.view.container.newsListBottom", {
	extend : "Ext.Toolbar",
	xtype : "newsListBottom",
	config : {
		docked : "bottom",
		items : [{
				xtype : "spacer",
			}, {
				xtype : "backBtn",
			}, {
				xtype : "spacer",
			},
		],
	},
});
