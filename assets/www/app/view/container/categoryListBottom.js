Ext.define("Project.view.container.categoryListBottom", {
	extend : "Ext.Toolbar",
	xtype : "categoryListBottom",
	config : {
		docked : "bottom",
		height : Ext.Viewport.getWindowHeight() * 0.08,
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
