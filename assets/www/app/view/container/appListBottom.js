Ext.define("Project.view.container.appListBottom", {
	extend : "Ext.Toolbar",
	xtype : "appListBottom",
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
