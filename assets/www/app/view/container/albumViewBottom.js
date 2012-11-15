Ext.define("Project.view.container.albumViewBottom", {
	extend : "Ext.Toolbar",
	xtype : "albumViewBottom",
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
