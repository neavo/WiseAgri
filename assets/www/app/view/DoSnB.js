Ext.define("Project.view.DoSnB", {
	extend : "Ext.Container",
	xtype : "DoSnB",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				xtype : "DoSnBTop",
			}, {
				xtype : "DoSnBMain",
			}, {
				xtype : "DoSnBBottom",
			}, 
		],
	},
});
