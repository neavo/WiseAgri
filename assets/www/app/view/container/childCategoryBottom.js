Ext.define("Project.view.container.childCategoryBottom", {
	extend : "Ext.Toolbar",
	xtype : "childCategoryBottom",
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
