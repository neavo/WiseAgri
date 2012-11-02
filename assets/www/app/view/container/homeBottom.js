Ext.define("Project.view.container.homeBottom", {
	extend : "Ext.Toolbar",
	xtype : "homeBottom",
	config : {
		docked : "bottom",
		items : [{
				xtype : "spacer",
			}, {
				xtype : "updateBtn",
			}, {
				xtype : "spacer",
			}, {
				xtype : "aboutBtn",
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
