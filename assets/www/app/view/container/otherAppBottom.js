Ext.define("Project.view.container.otherAppBottom", {
	extend : "Ext.Toolbar",
	xtype : "otherAppBottom",
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
