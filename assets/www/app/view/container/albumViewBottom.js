Ext.define("Project.view.container.albumViewBottom", {
	extend : "Ext.Toolbar",
	xtype : "albumViewBottom",
	config : {
		docked : "bottom",
		items : [{
				xtype : "spacer",
			}, {
				xtype : "prevBtn",
			}, {
				xtype : "spacer",
			},{
				xtype : "nextBtn",
			}, {
				xtype : "spacer",
			},{
				xtype : "backBtn",
			}, {
				xtype : "spacer",
			},
		],
	},
});
