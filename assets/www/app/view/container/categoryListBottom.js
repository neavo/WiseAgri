Ext.define("Project.view.container.categoryListBottom", {
	extend : "Ext.Toolbar",
	xtype : "categoryListBottom",
	config : {
		docked : "bottom",
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
