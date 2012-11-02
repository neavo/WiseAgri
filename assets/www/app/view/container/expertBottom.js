Ext.define("Project.view.container.expertBottom", {
	extend : "Ext.Toolbar",
	xtype : "expertBottom",
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
