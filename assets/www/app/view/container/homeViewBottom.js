Ext.define("Project.view.container.homeViewBottom", {
	extend : "Ext.Toolbar",
	xtype : "homeViewBottom",
	config : {
		docked : "bottom",
		items : [{
				xtype : "spacer",
			}, {
				xtype : "defaultCategoryBtn",
			}, {
				xtype : "spacer",
			}, {
				xtype : "customCategoryBtn",
			}, {
				xtype : "spacer",
			}, {
				xtype : "addCategoryBtn",
			}, {
				xtype : "spacer",
			},
		],
	},
});
