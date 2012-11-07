Ext.define("Project.view.container.switchAppBottom", {
	extend : "Ext.Toolbar",
	xtype : "switchAppBottom",
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
