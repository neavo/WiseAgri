Ext.define("Project.view.container.publishBottom", {
	extend : "Ext.Toolbar",
	xtype : "publishBottom",
	config : {
		docked : "bottom",
		items : [{
				xtype : "spacer",
			}, {
				xtype : "addBtn",
			}, {
				xtype : "spacer",
			}, {
				xtype : "resetBtn",
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
