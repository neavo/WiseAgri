Ext.define("Project.view.childCategory", {
	extend : "Ext.Container",
	xtype : "childCategory",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				xtype : "childCategoryTop",
			}, {
				xtype : "childCategoryMain",
			}, {
				xtype : "childCategoryBottom",
			}, 
		],
	},
});
