Ext.define("Project.view.container.infoListBottom", {
	extend : "Ext.Toolbar",
	xtype : "infoListBottom",
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
