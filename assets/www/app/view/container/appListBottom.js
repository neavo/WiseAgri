Ext.define("Project.view.container.appListBottom", {
	extend : "Ext.Toolbar",
	xtype : "appListBottom",
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
