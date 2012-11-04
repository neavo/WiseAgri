Ext.define("Project.view.categoryList", {
	extend : "Ext.Container",
	xtype : "categoryList",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				xtype : "categoryListTop",
			}, {
				xtype : "categoryListMain",
			}, {
				xtype : "categoryListBottom",
			}, 
		],
	},
});
