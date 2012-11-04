Ext.define("Project.view.container.homeBottom", {
	extend : "Ext.Toolbar",
	xtype : "homeBottom",
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
			}, {
				xtype : "backBtn",
			}, {
				xtype : "spacer",
			},
		],
	},
});
